"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { AnimalSchema } from "@/lib/validations/animal";
import { revalidatePath } from "next/cache";
import { UserRole } from "@/types/next-auth";

export type FormState = {
  errors?: {
    species?: string[];
    breed?: string[];
    age?: string[];
    estimatedWeight?: string[];
  };
  message?: string | null;
  success?: boolean;
};

export async function createAnimal(prevState: FormState, formData: FormData): Promise<FormState> {
  const session = await auth();

  if (!session || !session.user || session.user.role !== "ELEVAGE_TEST") {
    return {
      message: "Vous n'êtes pas autorisé à effectuer cette action.",
    };
  }

  const validatedFields = AnimalSchema.safeParse({
    species: formData.get("species"),
    breed: formData.get("breed"),
    age: formData.get("age"),
    estimatedWeight: formData.get("estimatedWeight"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Veuillez corriger les erreurs dans le formulaire.",
    };
  }

  const { species, breed, age, estimatedWeight } = validatedFields.data;

  try {
    await prisma.animal.create({
      data: {
        species,
        breed,
        age,
        estimatedWeight,
        ownerId: session.user.id!,
      },
    });

    revalidatePath("/dashboard/animals");
    return {
      success: true,
      message: "Bête créée avec succès !",
    };
  } catch (error) {
    console.error("Database Error:", error);
    return {
      message: "Erreur lors de la création de la bête en base de données.",
    };
  }
}
