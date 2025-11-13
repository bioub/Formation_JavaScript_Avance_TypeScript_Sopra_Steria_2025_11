# TypeScript

## Installer TypeScript

Avec npm :
`npm i typescript -D`

Avec yarn :
`yarn add typescript --dev`

## Générer la config

Avec la commande :
`node_modules/.bin/tsc --init`

Comme dans le projet précédent, configurer `src` en `rootDir` et `dist` en `outDir`

Utiliser les modules ES2015 dans la config (pas CommonJS).

## Traduire le code en TypeScript

Renommer les fichiers `.js` en `.ts`

Dans `main.ts`, utiliser l'assertion de type pour typer les variables :

- `formEl`
- `inputEl`
- `listEl`
- `toggleEl`
- `checkboxes`
- `target`

(utiliser les types des commentaires JSDoc puis supprimer les commentaires)

Créer un fichier `todo.ts` et créer un type alias `Todo` pour typer les todo (id: number, title: string, completed: boolean)

Dans `todos.ts` typer le paramètre d'entrée et de retour de la fonction `createTodoItem`

Dans `main.ts` typer le retour de `fetchTodos` avec le type `Promise<Todo>`