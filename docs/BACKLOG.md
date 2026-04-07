# 🥩 CarniApp - Backlog Produit

## ⚙️ CONFIGURATION TECHNIQUE
- **Type** : WebApp Responsive (PWA Ready)
- **Framework Frontend/Backend** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Style** : Tailwind CSS + ShadcnUI
- **Base de données** : PostgreSQL avec Prisma ORM
- **Authentification** : Auth.js (NextAuth)
- **Paiement (Acompte)** : Stripe (Mode Payment Intent)
- **Déploiement/Local** : Docker Compose (Next.js + Postgres)

## 🏛️ JOURNAL DES DÉCISIONS
1. **[2024-04-06] Stratégie de Paiement** : Utilisation de Stripe pour un acompte fixe non remboursable. Le solde est payé en liquide/CB au retrait.
2. **[2024-04-06] Validation du retrait** : Système de QR Code généré pour l'utilisateur, scanné par l'éleveur pour confirmer le paiement du solde et la remise de la viande.
3. **[2024-04-06] Logique de partage** : Le premier utilisateur d'un groupe définit le type de découpe (ex: 1/4 ou 1/2). Les places restantes s'alignent sur ce choix.

## ✅ DEFINITION OF DONE (DoD)
- Code typé (TypeScript) sans `any`.
- Tests unitaires sur la logique de calcul des parts.
- Interface responsive (Mobile First).
- Documentation technique à jour dans `docs/`.
- Pas de secrets en dur (utilisation de `.env.example`).

## 📋 BACKLOG PRIORISÉ

### [PBI-000] SPRINT 0 : Walking Skeleton (Infra & DevOps) [DONE]
- **Priorité** : Haute | **Estimation** : S
- **Objectif** : Initialiser l'environnement pour le Lead Dev.

### [PBI-000-FIX] Nettoyage Git et `.gitignore` [NEW]
- **Priorité** : Urgente | **Estimation** : XS
- **Objectif** : Retirer les dossiers `.opencode/` et `openrtk/` (et leurs node_modules) de l'index Git.
- **Description** : Mettre à jour le `.gitignore` racine pour ignorer les dossiers en entier et purger le cache Git (`git rm -r --cached`).
- **DoD** : Les dossiers n'apparaissent plus dans `git status` et sont physiquement absents du repo distant (Github).

### [PBI-001] Gestion des Utilisateurs & Rôles
- **Priorité** : Haute | **Estimation** : M
- **Description** : Inscription/Connexion avec distinction entre "Éleveur" et "Client".

### [PBI-002] Interface Éleveur : Création d'une Bête
- **Priorité** : Haute | **Estimation** : M
- **Description** : Formulaire simple (Âge, Race, Poids estimé carcasse, Type: Boeuf/Veau).

### [PBI-003] Système de Partage Dynamique
- **Priorité** : Haute | **Estimation** : L
- **Description** : Logique où le 1er arrivant fixe le nombre de parts (ex: 4 pour un veau). Les suivants rejoignent le groupe.

### [PBI-004] Paiement de l'Acompte (Stripe)
- **Priorité** : Haute | **Estimation** : M
- **Description** : Intégration Stripe pour sécuriser l'engagement du client. Acompte non remboursable.

### [PBI-005] Notifications de Disponibilité
- **Priorité** : Medium | **Estimation** : M
- **Description** : Envoi de notifications (Email/Push) quand une nouvelle bête est publiée.

### [PBI-006] Validation du Retrait (QR Code)
- **Priorité** : Medium | **Estimation** : M
- **Description** : Génération du QR Code client et scan côté éleveur pour clore la vente.
