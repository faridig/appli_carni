# 📜 Changelog - CarniApp

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

## [0.3.0] - 2026-04-08

### Added
- **[PBI-002] Interface Éleveur** : Formulaire de création d'animaux avec Server Actions et Zod.
- **[PBI-003A] Moteur de Partage** : Logique de division dynamique de carcasse (quarts/moitiés) et verrouillage de la découpe.
- **Infrastructure** : Schéma Prisma mis à jour avec les modèles `Animal` et `Reservation`.

## 💡 LEÇONS APPRISES
- **Validation avec Zod** : L'utilisation de `z.coerce` dans le schéma Zod est cruciale pour gérer les entrées `FormData` qui transmettent des nombres sous forme de chaînes.
- **Gestion des États de Formulaire** : L'intégration de `useActionState` (React 19) simplifie grandement la gestion des feedbacks d'erreurs et de succès sans state management complexe.
- **Atomicité du Partage** : La logique de "premier arrivé fixe la découpe" (Scenario 3) prévient les conflits logistiques avant même la réservation physique.

## [0.2.0] - 2026-04-08

### Added
- **[PBI-001] Gestion des Utilisateurs** :
    - Intégration de Auth.js (NextAuth) v5.
    - Configuration de Prisma Adapter pour la persistance des sessions.
    - Protection des routes `/dashboard` par middleware.
    - Distinction des rôles Client / Éleveur.

### Fixed
- **[PBI-000-FIX] Nettoyage Git** :
    - Dossiers `.opencode/` et `openrtk/` ignorés dans le `.gitignore` racine.
    - Purge de l'index Git pour retirer les fichiers locaux trackés par erreur.

