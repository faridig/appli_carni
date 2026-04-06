# 📜 Changelog - CarniApp

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

## [Unreleased]

### Added
- Initialisation du projet par le Product Owner.
- Définition de la stack technique (Next.js 15, TypeScript, Prisma, PostgreSQL).
- Création du `BACKLOG.md` avec la vision initiale.

## 💡 LEÇONS APPRISES
### Sprint 0 - Configuration & DevOps
- **Attention à la désindexation** : Lorsqu'on souhaite ignorer des fichiers déjà suivis par Git, il faut impérativement utiliser `git rm --cached` au lieu d'une suppression physique pour éviter de perdre l'historique ou la source de vérité.
- **Isolation de l'intelligence** : Ne jamais exclure (ignore) des dossiers stratégiques comme `docs/` ou `.opencode/` du dépôt central, car ils portent l'intelligence collective des agents et du PO.
- **CI Local** : Il est vital de vérifier le `lint` et le `build` localement avant de pousser, car les outils de génération comme Next.js/Prisma sont sensibles aux structures de dossiers imbriqués (comme `.opencode/node_modules`).
