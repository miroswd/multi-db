sudo docker run \
  --name tudodocker \  
  -e POSTGRES_USER=docker \ # variável ambiente para o usuário 
  -e POSTGRES_PASSWORD=docker \
  -e POSTGRES_DB=heroes 
  -p 5435:5432 \ # Porta local / porta container
  -d \ # Baixa a imagem e roda em segundo plano
  postgres # imagem

  docker exec -it tudodocker /bin/bash # Entrando no container através do terminal 

sudo docker run \
--name adminer \
-p 8080:8080 \
--link tudodocker:postgres \ # Permissão para acessar a imagem
-d \ # Rodando em segundo plano
adminer

// Acessando localhost:8080
- servidor: nome do serviço (tudodocker)

## ---- MONGODB
sudo docker run \
--name tudoadmin \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=admin \
-d \
mongo:4 # Versão 4 da imagem mongo

sudo docker run \
--name mongoclient \
-p 3000:3000 \
--link tudoadmin:mongodb \
-d \
mongoclient/mongoclient

# localhost:3000