# 📜 Changelog - CarniApp

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

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

