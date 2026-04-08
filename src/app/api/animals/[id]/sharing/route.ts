import { prisma } from "@/lib/prisma";
import { SharingService } from "@/lib/services/sharing";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const animal = await prisma.animal.findUnique({
    where: { id },
    include: { reservations: { where: { status: { not: "CANCELLED" } } } },
  });

  if (!animal) {
    return NextResponse.json({ error: "Animal not found" }, { status: 404 });
  }

  const sharingInfo = SharingService.calculateSharing(
    animal.totalParts,
    animal.reservations.length
  );

  return NextResponse.json(sharingInfo);
}
