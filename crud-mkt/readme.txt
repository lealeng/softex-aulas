npm init -y
npm i typescript -D
npm i @types/node -D
npx tsc --init
npm i tsx -D

framework
npm i fastify

npm install eslint -D
npm i @rocketseat/eslint-config -D

npm i prisma -D
npx prisma init --datasource-provider SQLite
npx prisma migrate dev
npx prisma studio

npm i zod
npm install bcrypt


{
  "workbench.colorTheme": "Dracula Soft",
  "workbench.iconTheme": "material-icon-theme",
  "files.autoSave": "onFocusChange",
  "window.zoomLevel": -1,
  "[javascript]": {
   
    // "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
 // "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "[prisma]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "Prisma.prisma"
  },

  "editor.acceptSuggestionOnCommitCharacter": false,
  "explorer.compactFolders": false,
  "git.enableSmartCommit": true,
  "editor.accessibilitySupport": "off",
  "explorer.confirmDragAndDrop": false,
  "terminal.integrated.fontSize": 14,
  //"terminal.integrated.fontFamily": "JetBrainsMono Nerd Font",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.addMissingImports": true
  },
  

}


 