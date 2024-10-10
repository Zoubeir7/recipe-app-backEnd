# Recette API

## Description

Ce projet backend a été développé en Express.js pour gérer des recettes via une API RESTful consommée par un frontend Vue.js. Le backend permet la gestion des recettes avec des fonctionnalités CRUD (Create, Read, Update, Delete) et est connecté à une base de données MySQL.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- Node.js
- npm

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. Clonez le dépôt :

```bash
   git clone https://github.com/Zoubeir7/recipe-app-backEnd.git

```

2.Installez les dépendances :

```bash
   cd recipe-app-backEnd npm install
```

## Configuration de la Base de Données

1. Connectez-vous en tant qu'administrateur :

```bash
   mysql -u root -p
```

2. Dans le fichier `/assets/script.sql`, toutes les commandes pour créer la base de données, son utilisation et la création des tables sont incluses avec insertion des données de simulation.

3. Pour le fichier .env.example il faut faire une copie en suite rennomer le fichier en `.env` , et renseigner vos identifiant et les informations de la base de données  :

```bash
HOST=your_host
USE=your_username 
PORT=3306
PASSWORD=your_password
dbNAME=your_database_name 

WFC=true        
CL=10            
QL=0              

MYSQL_ROOT_PASSWORD=your_root_password  
MYSQL_DATABASE=your_database_name 
```

## Utilisation

```bash
   npm start
```

## Tests avec Postman

Dans le dossier vous trouverez deux collections `/assets/collection-recipe.jon & collection-category.json`, une collection qui contient les quatres verbe Http pour testé les API de recettes et lautre pour API de categories

## Endpoints de l'API

### Recette

1. **Récupérer une Recette par ID**

   - **Point de terminaison :** `GET /recipes/:id`
   - **Description :** Récupérer une seule recette par son ID.
   - **Réponse :** Objet recette ou une erreur 404 si non trouvé.

2.**Récupérer Toutes les Recettes**

- **Point de terminaison :** `GET /recipes`
- **Description :** Récupérer toutes les recettes de la base de données.
- **Réponse :** Tableau d'objets recette.

  3.**Créer une Nouvelle Recette**

- **Point de terminaison :** `POST /recipes`
- **Description :** Créer une nouvelle recette.
- **Corps de la requête :**

  ```json
  {
    "title": "Titre de la Recette",
    "ingredients": "Liste des Ingrédients",
    "type": "Type de Recette",
    "category_id":"1"
  }
  ```

- **Réponse :** Retourne l'ID de la recette nouvellement créée.

  4.**Mettre à Jour une Recette par ID**

- **Point de terminaison :** `PUT /recipes/:id`
- **Description :** Mettre à jour une recette existante par son ID.
- **Corps de la requête :**

  ```json
  {
    "title": "Titre Mis à Jour",
    "ingredients": "Liste des Ingrédients Mise à Jour",
    "type": "Type de Recette Mis à Jour",
    "category_id":"1"
  }
  ```

- **Réponse :** Confirmation de la mise à jour réussie ou une erreur 404 si non trouvé.

  5.**Supprimer une Recette par ID**

- **Point de terminaison :** `DELETE /recipes/:id`
- **Description :** Supprimer une recette par son ID.
- **Réponse :** Confirmation de la suppression réussie ou une erreur 404 si non trouvé.

### Categorie

1. **Récupérer une Categorie par ID**

   - **Point de terminaison :** `GET /categories/:id`
   - **Description :** Récupérer une seule Categorie par son ID.
   - **Réponse :** Objet Categorie ou une erreur 404 si non trouvé.

2.**Récupérer Toutes les Recettes**

- **Point de terminaison :** `GET /categories`
- **Description :** Récupérer toutes les categories de la base de données.
- **Réponse :** Tableau d'objets categorie.

  3.**Créer une Nouvelle Recette**

- **Point de terminaison :** `POST /categories`
- **Description :** Créer une nouvelle categorie.
- **Corps de la requête :**

  ```json
  {
    "name": "nom de la Categorie"
  }
  ```

- **Réponse :** Retourne l'ID de la categorie nouvellement créée.

  4.**Mettre à Jour une Recette par ID**

- **Point de terminaison :** `PUT /categories/:id`
- **Description :** Mettre à jour une categorie existante par son ID.
- **Corps de la requête :**

  ```json
  {
    "name": "nom Mis à jour"
  }
  ```

- **Réponse :** Confirmation de la mise à jour réussie ou une erreur 404 si non trouvé.

  5.**Supprimer une Categorie par ID**

- **Point de terminaison :** `DELETE /categories/:id`
- **Description :** Supprimer une categorie par son ID.
- **Réponse :** Confirmation de la suppression réussie ou une erreur 404 si non trouvé.

## Tests Unitaires

- tests unitaires pour notre modèle afin de vérifier que les actions CRUD fonctionnent correctement.

la commande pour exécuter les tests :

```bash
  npm test
```

## Analyse de Code et Formatage

- **Intégration d'ESLint et Prettier :**
- Executer ESLint pour l'analyse statique du code

```bash
  npm run lint
```

- Executer Prettier pour le formatage automatique du code.

```bash
  npn run format
```

## Auteur

[Zoubeir Ba](https://github.com/Zoubeir7)

