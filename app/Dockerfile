# Utiliser une image officielle Node.js
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et installer les dépendances
COPY package.json /app
RUN npm install

# Copier tout le reste du code dans le container
COPY . /app

# Exposer le port de l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
