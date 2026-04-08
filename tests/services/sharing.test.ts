import { describe, it, expect } from "vitest";
import { SharingService } from "../../src/lib/services/sharing";

describe("SharingService", () => {
  describe("calculateSharing", () => {
    it("should return correct info for newly published animal", () => {
      const info = SharingService.calculateSharing(null, 0);
      expect(info.totalParts).toBe(null);
      expect(info.reservedParts).toBe(0);
      expect(info.remainingParts).toBe(0);
    });

    it("should return correct info for animal with 4 parts and 1 reservation", () => {
      const info = SharingService.calculateSharing(4, 1);
      expect(info.totalParts).toBe(4);
      expect(info.reservedParts).toBe(1);
      expect(info.remainingParts).toBe(3);
    });
    
    it("should return 2 remaining parts when 2 are reserved out of 4 (Scenario 2)", () => {
      const info = SharingService.calculateSharing(4, 2);
      expect(info.remainingParts).toBe(2);
    });
  });

  describe("canReserve", () => {
    it("should allow first reservation (Scenario 1)", () => {
      const result = SharingService.canReserve(4, null, 0);
      expect(result.allowed).toBe(true);
    });

    it("should allow compatible reservation (Scenario 2)", () => {
      const result = SharingService.canReserve(4, 4, 1);
      expect(result.allowed).toBe(true);
    });

    it("should deny incompatible division (Scenario 3)", () => {
      const result = SharingService.canReserve(2, 4, 1);
      expect(result.allowed).toBe(false);
      expect(result.reason).toContain("quarts (1/4)");
    });

    it("should deny if no parts left", () => {
      const result = SharingService.canReserve(4, 4, 4);
      expect(result.allowed).toBe(false);
      expect(result.reason).toBe("Il ne reste plus de parts disponibles pour cette bête.");
    });
  });
});
