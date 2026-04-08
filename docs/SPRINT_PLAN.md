# 🚀 SPRINT PLAN 2

**Objectif du Sprint** : Permettre à l'éleveur de créer une bête et implémenter le moteur de partage des parts.
**Durée** : 1 cycle (2 semaines estimées).

---

### [PBI-002] Interface Éleveur : Création d'une Bête
**Priorité** : Haute | **Estimation** : M

**User Story** : "En tant qu'Éleveur, je veux publier une bête disponible afin que les clients puissent commencer à réserver des parts."

**Critères d'Acceptation (Gherkin)** :
- [ ] **Scenario 1** : Création d'une bête valide
  - **GIVEN** Un éleveur authentifié sur son dashboard
  - **WHEN** Il remplit le formulaire (Race, Âge, Poids estimé, Type) et valide
  - **THEN** La bête est enregistrée en base et apparaît dans son historique.
- [ ] **Scenario 2** : Validation des champs obligatoires
  - **GIVEN** Le formulaire de création
  - **WHEN** L'éleveur tente de soumettre sans le poids ou la race
  - **THEN** Un message d'erreur explicite s'affiche et l'enregistrement est bloqué.
- [ ] **Scenario 3** : Association automatique
  - **GIVEN** Un éleveur créant une bête
  - **WHEN** La bête est créée
  - **THEN** Elle est automatiquement liée à l'ID de l'éleveur connecté.

---

### [PBI-003A] Partage Dynamique : Moteur de Calcul (API)
**Priorité** : Haute | **Estimation** : M

**Description** : Logique backend de division de la carcasse en parts égales.
**User Story** : "En tant que Système, je veux calculer automatiquement le nombre de parts restantes afin d'éviter les sur-réservations."

**Critères d'Acceptation (Gherkin)** :
- [ ] **Scenario 1** : Initialisation du partage (Premier client)
  - **GIVEN** Une bête nouvellement publiée (0 réservation)
  - **WHEN** Le premier client réserve une part (ex: 1/4)
  - **THEN** Le système fixe la division de cette bête à 4 parts totales.
- [ ] **Scenario 2** : Décompte des parts
  - **GIVEN** Une bête divisée en 4 parts avec 1 réservation
  - **WHEN** Un nouveau client réserve 1 part
  - **THEN** Le système indique qu'il reste 2 parts disponibles.
- [ ] **Scenario 3** : Verrouillage de la découpe
  - **GIVEN** Une bête déjà divisée en 4 parts par le premier client
  - **WHEN** Un nouveau client tente de réserver 1/2 part (2 parts)
  - **THEN** Le système refuse car la découpe est déjà fixée sur des quarts (1/4).

---

**Note pour le Lead-Dev** : 
1. Pour le **PBI-002**, utilise les composants UI déjà en place (ShadcnUI).
2. Pour le **PBI-003A**, la logique doit être testée unitairement (Logiciel/Services) avant l'exposition via les API routes.
3. Vérifie le schéma Prisma pour supporter la relation `User (Eleveur) -> Animal`.
