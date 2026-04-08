import { describe, it, expect, vi, beforeEach } from "vitest";
import { createAnimal, FormState } from "../../src/app/actions/animal";
import { prisma } from "../../src/lib/prisma";
import { auth } from "../../src/auth";

vi.mock("../../src/auth", () => ({
  auth: vi.fn(),
}));

vi.mock("../../src/lib/prisma", () => ({
  prisma: {
    animal: {
      create: vi.fn(),
    },
  },
}));

vi.mock("next/cache", () => ({
  revalidatePath: vi.fn(),
}));

describe("createAnimal action", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return error if not authenticated", async () => {
    (auth as any).mockResolvedValue(null);
    const formData = new FormData();
    const result = await createAnimal({} as FormState, formData);
    expect(result.message).toBe("Vous n'êtes pas autorisé à effectuer cette action.");
  });

  it("should return error if user is not ELEVAGE_TEST", async () => {
    (auth as any).mockResolvedValue({ user: { role: "CLIENT" } });
    const formData = new FormData();
    const result = await createAnimal({} as FormState, formData);
    expect(result.message).toBe("Vous n'êtes pas autorisé à effectuer cette action.");
  });

  it("should return validation errors for invalid data", async () => {
    (auth as any).mockResolvedValue({ user: { id: "1", role: "ELEVAGE_TEST" } });
    const formData = new FormData();
    // Missing species, breed, etc.
    const result = await createAnimal({} as FormState, formData);
    expect(result.errors).toBeDefined();
    expect(result.message).toBe("Veuillez corriger les erreurs dans le formulaire.");
  });

  it("should create animal and return success for valid data", async () => {
    (auth as any).mockResolvedValue({ user: { id: "1", role: "ELEVAGE_TEST" } });
    const formData = new FormData();
    formData.append("species", "BOEUF");
    formData.append("breed", "Charolaise");
    formData.append("age", "24");
    formData.append("estimatedWeight", "400");

    (prisma.animal.create as any).mockResolvedValue({ id: "animal_1" });

    const result = await createAnimal({} as FormState, formData);
    expect(result.success).toBe(true);
    expect(prisma.animal.create).toHaveBeenCalledWith({
      data: {
        species: "BOEUF",
        breed: "Charolaise",
        age: 24,
        estimatedWeight: 400,
        ownerId: "1",
      },
    });
  });
});
