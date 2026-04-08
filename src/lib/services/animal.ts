import { prisma } from "@/lib/prisma";

export async function getAnimalsByOwner(ownerId: string) {
  return await prisma.animal.findMany({
    where: { ownerId },
    orderBy: { createdAt: "desc" },
  });
}
