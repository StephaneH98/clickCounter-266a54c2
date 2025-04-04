# clickCounter

## Création de l'image Docker

Pour créer l'image Docker de l'application :

```bash
# Se positionner dans le dossier contenant le Dockerfile
cd app

# Construire l'image
docker build -t clickcounter-app .

# Vérifier que l'image a été créée
docker images | grep clickcounter

# Renommer l'image pour le déploiement
docker tag clickcounter-app:latest 952056442132.dkr.ecr.eu-west-3.amazonaws.com/simple-web-app:latest

# Vérifier le renommage
docker images | grep 952056442132
```

docker-compose up --build