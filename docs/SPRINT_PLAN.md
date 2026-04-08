# 🚀 SPRINT PLAN 1

**Objectif du Sprint** : Sécuriser la base (Git) et lancer l'Authentification (NextAuth).
**Durée** : 1 cycle (2 semaines estimées).

---

### [PBI-000-FIX] Nettoyage Git et `.gitignore`
**Priorité** : Urgente | **Estimation** : XS

**Description** : Retirer les dossiers `.opencode/` et `openrtk/` (et leurs node_modules) de l'index Git.
**User Story** : "En tant que PO, je veux que les dossiers de travail locaux ne polluent pas le repo GitHub afin d'avoir un historique propre."

**Critères d'Acceptation (Gherkin)** :
- [ ] **Scenario 1** : Mise à jour du .gitignore
  - **GIVEN** Le fichier .gitignore actuel
  - **WHEN** Ajout des entrées `.opencode/` et `openrtk/`
  - **THEN** Git doit arrêter de suivre ces dossiers dès leur suppression de l'index.
- [ ] **Scenario 2** : Purge de l'index Git
  - **GIVEN** Les dossiers sont déjà trackés sur GitHub
  - **WHEN** Exécution de `git rm -r --cached` sur les dossiers concernés
  - **THEN** Les fichiers disparaissent de GitHub au prochain commit mais restent sur le disque local.

---

### [PBI-001] Gestion des Utilisateurs & Rôles
**Priorité** : Haute | **Estimation** : M

**User Story** : "En tant qu'utilisateur, je veux pouvoir me connecter via Email/Google afin d'accéder aux fonctionnalités spécifiques (Éleveur ou Client)."

**Dépendances** : Aucune
**Critères d'Acceptation (Gherkin)** :
- [ ] **Scenario 1** : Connexion Client
  - **GIVEN** Un utilisateur non connecté
  - **WHEN** Il se connecte via Auth.js
  - **THEN** Il est redirigé vers le Dashboard Client avec le rôle `CLIENT`.
- [ ] **Scenario 2** : Accès Éleveur (Admin)
  - **GIVEN** Un compte identifié comme `ELEVAGE_TEST` (dans la DB)
  - **WHEN** Il se connecte
  - **THEN** Il a accès aux fonctionnalités de création de bêtes.
- [ ] **Scenario 3** : Sécurité des Routes
  - **GIVEN** Un utilisateur non connecté
  - **WHEN** Il tente d'accéder à `/dashboard`
  - **THEN** Il est redirigé vers la page de login.

---

**Note pour le Lead-Dev** : 
1. Commence par le **PBI-000-FIX** pour assainir le repo avant de coder l'Auth.
2. Pour l'Auth, utilise NextAuth (Auth.js) v5 avec Prisma Adapter.
3. Ne pas oublier de mettre à jour le `.env.example` avec les variables AUTH.
