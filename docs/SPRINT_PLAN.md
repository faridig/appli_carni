# 🚀 SPRINT PLAN - SPRINT 0 : LE SQUELETTE MARCHANT

**Objectif du Sprint** : Mettre en place l'infrastructure de base et s'assurer qu'un "Hello World" s'exécute parfaitement dans un conteneur Docker avec une connexion base de données.

---

### [PBI-000-A] Initialisation du Projet & Dépendances
**Priorité** : High | **Estimation** : XS
**User Story** : "En tant que Lead Dev, je veux un projet Next.js configuré afin de commencer à coder sans friction."
**Critères d'Acceptation** :
- [ ] Projet Next.js 15 initialisé avec TypeScript et Tailwind.
- [ ] Fichier `package.json` configuré avec les scripts standards.
- [ ] `.gitignore` complet.

### [PBI-000-B] Dockerisation de l'Environnement
**Priorité** : High | **Estimation** : S
**User Story** : "En tant que Lead Dev, je veux lancer tout le projet avec une seule commande."
**Critères d'Acceptation** :
- [ ] `Dockerfile` pour l'application Next.js.
- [ ] `docker-compose.yml` incluant l'app et une base PostgreSQL.
- [ ] Fichier `.env.example` présent.

### [PBI-000-C] Schéma de Base & Prisma
**Priorité** : High | **Estimation** : S
**User Story** : "En tant que Lead Dev, je veux que ma base de données soit prête à recevoir des données."
**Critères d'Acceptation** :
- [ ] Prisma initialisé.
- [ ] Modèle `User` de base défini.
- [ ] La commande `prisma db push` fonctionne depuis le conteneur.

### [PBI-000-D] Point d'Entrée Minimal (Hello World)
**Priorité** : High | **Estimation** : XS
**User Story** : "En tant qu'utilisateur, je veux voir une page d'accueil simple pour confirmer que l'app tourne."
**Critères d'Acceptation** :
- [ ] La page `/` affiche "CarniApp - En attente de viande".
- [ ] Aucun warning/error dans la console au démarrage.
