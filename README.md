
# 🌸 Mon Pokédex - Projet React JS M1 MIAGE 🌸
Bienvenue notre application Mon Pokédex ! C'est une application web construite avec ReactJS pour explorer l'univers des Pokémon grâce à l'API opensource PokéAPI. 🌟

### ✨ Fonctionnalités principales
- 🌐 **Appels API et gestion des données** : 

Les données des Pokémon sont récupérées via l'API PokéAPI.

Tri et formattage des données à l'aide des fonctions de tableau JavaScript pour filtrer vos Pokemon préférés selon les différents types (Poison, feu, spectre, fée...).

- ⚛️ **Utilisation des Hooks React** : 

useState : Pour la gestion des états (liste des Pokémon, recherche, etc.).


useEffect : Pour les appels API lors du montage des composants.


useMemo : Pour l'optimisation de nos calculs de filtrage des Pokémon.

- 🖥️ **Composants et Navigation sur notre site** : 

🏠 Page d'accueil : Une présentation générale de l'application, contenant la barre de navigation, la barre de filtre...

📋 Vue liste : Liste des Pokémons, par défaut tous les Pokémons sont accessibles et rangés. Le champ de recherche vous permet d'obtenir directement le Pokémon que ce que vous cherchez, si vous possédez déjà son nom ! Sinon, utilisez la barre de filtres et découvrez les Pokémons par types en cliquant sur les icônes. 

🔍 Vue détail : Affiche des informations détaillées sur le Pokémon de votre choix en cliquant sur son icône (ses statistiques, type, image, etc.).
