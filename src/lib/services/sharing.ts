export type SharingInfo = {
  totalParts: number | null;
  reservedParts: number;
  remainingParts: number;
};

export class SharingService {
  /**
   * Calcule les informations de partage pour une bête.
   */
  static calculateSharing(totalParts: number | null, reservationsCount: number): SharingInfo {
    const reservedParts = reservationsCount;
    const remainingParts = totalParts !== null ? totalParts - reservedParts : 0;

    return {
      totalParts,
      reservedParts,
      remainingParts,
    };
  }

  /**
   * Vérifie si une nouvelle réservation est possible.
   * @param requestedParts La division demandée (ex: 4 pour 1/4, 2 pour 1/2)
   * @param currentTotalParts La division déjà fixée sur la bête
   * @param currentReservations Nombre de réservations actuelles
   */
  static canReserve(
    requestedParts: number,
    currentTotalParts: number | null,
    currentReservations: number
  ): { allowed: boolean; reason?: string } {
    // Si c'est la première réservation, on autorise
    if (currentTotalParts === null) {
      return { allowed: true };
    }

    // Si la découpe est déjà fixée, elle doit correspondre exactement (Scenario 3)
    if (requestedParts !== currentTotalParts) {
      return { 
        allowed: false, 
        reason: `La découpe est déjà fixée sur des ${currentTotalParts === 4 ? 'quarts (1/4)' : currentTotalParts === 2 ? 'moitiés (1/2)' : 'parts (1/' + currentTotalParts + ')'}.`
      };
    }

    // Vérifier s'il reste des parts
    if (currentReservations >= currentTotalParts) {
      return { allowed: false, reason: "Il ne reste plus de parts disponibles pour cette bête." };
    }

    return { allowed: true };
  }
}
