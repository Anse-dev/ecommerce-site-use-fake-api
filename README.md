# Projet E-commerce

## Description

Ce projet est une application d'e-commerce développée avec Next.js, Redux et Tailwind CSS. L'objectif principal de l'application est de permettre aux utilisateurs de naviguer, rechercher, filtrer et acheter des produits en ligne de manière simple et efficace. 

## Fonctionnalités

- **Affichage des produits** : Les utilisateurs peuvent voir une liste de produits avec leurs images, descriptions, prix, et options pour les ajouter au panier.
- **Filtrage et tri** : Les utilisateurs peuvent filtrer les produits par catégorie et prix, ainsi que trier par prix croissant, décroissant ou par popularité.
- **Recherche de produits** : Une barre de recherche est disponible pour permettre aux utilisateurs de trouver rapidement des produits spécifiques.
- **Détails du produit** : Les utilisateurs peuvent afficher les détails d'un produit dans une modale.
- **Gestion du panier** : Les utilisateurs peuvent ajouter des produits à leur panier et voir le nombre total d'articles dans le panier.

## Technologies utilisées

- **Frontend** :
  - Next.js : Framework React pour le développement côté client et côté serveur.
  - Redux : Pour la gestion d'état.
  - Tailwind CSS : Pour le design et la mise en page responsive.

- **API** :
  - Fakestore API : Pour récupérer les données des produits.

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/votre-projet-ecommerce.git
   cd votre-projet-ecommerce
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez l'application en mode développement :

   ```bash
   npm run dev
   ```

4. Ouvrez votre navigateur et accédez à `http://localhost:3000`.

## Structure du projet

```
/src
  /components        # Composants réutilisables
  /features          # Slice Redux et logique d'état
  /pages             # Pages de l'application
  /styles            # Fichiers de style
  /types             # Types TypeScript
```

## Comment contribuer

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité ou correction de bug :

   ```bash
   git checkout -b ma-fonctionnalite
   ```

3. Faites vos modifications et committez-les :

   ```bash
   git commit -m 'Ajout de ma fonctionnalité'
   ```

4. Poussez votre branche :

   ```bash
   git push origin ma-fonctionnalite
   ```

5. Ouvrez une Pull Request.

## Auteurs

- Votre Nom - [Votre Profil GitHub](https://github.com/anse-dev)

## License

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
