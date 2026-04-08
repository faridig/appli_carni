import { z } from "zod";

export const AnimalSchema = z.object({
  species: z.string().min(1, "Veuillez choisir un type (Boeuf ou Veau)"),
  breed: z.string().min(1, "La race est obligatoire"),
  age: z.coerce.number().int().min(1, "L'âge doit être supérieur à 0"),
  estimatedWeight: z.coerce.number().min(1, "Le poids doit être supérieur à 0"),
});

export type AnimalInput = z.infer<typeof AnimalSchema>;
