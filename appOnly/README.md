# clickCounter

## Configuration du network

docker network create <network_name>

docker network connect <network_name> <mongo_container_name>

/!\ il faut que le nom du network match celui du docker-compose.yml

### 
## Création de la DB

docker run -d --name mongo -v mongo_data:/data/db -p 27017:27017 mongo:latest
