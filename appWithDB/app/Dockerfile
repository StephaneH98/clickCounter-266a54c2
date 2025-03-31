# Utiliser une image officielle Node.js
FROM node:18

# Définir un utilisateur non-root
RUN groupadd -r appgroup && useradd -r -g appgroup -m appuser

# Définir le répertoire de travail
WORKDIR /home/appuser/app

# Donner les permissions nécessaires à appuser
RUN chown -R appuser:appgroup /home/appuser

# Passer à l'utilisateur non-root
USER appuser

# Copier les fichiers package.json et package-lock.json avant d'installer
COPY --chown=appuser:appgroup package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY --chown=appuser:appgroup . .

# Exposer le port de l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
