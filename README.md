# Multi-DB - Docker

## Comandos Docker
### PostgreSQL

```
sudo docker run \
  --name tudodocker \  
  -e POSTGRES_USER=docker \ 
  -e POSTGRES_PASSWORD=docker \
  -e POSTGRES_DB=heroes 
  -p 5435:5432 \
  -d \
  postgres
  docker exec -it tudodocker /bin/bash 
```

```
sudo docker run \
--name adminer \
-p 8080:8080 \
--link tudodocker:postgres \
-d \
adminer
```

## MongoDB

```
sudo docker run \
--name tudoadmin \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=admin \
-d \
mongo:4
```

``` 
sudo docker run \
--name mongoclient \
-p 3000:3000 \
--link tudoadmin:mongodb \
-d \
mongoclient/mongoclient
```

```
sudo docker exec -it tudoadmin \
  mongo --host localhost -u admin -p admin --authenticationDatabase admin \
  --eval "db.getSiblingDB('heroes').createUser({user:'miro', pwd:'senha123', roles: [{role: 'readWrite', db:'heroes'}]})"
```
<p>Acessar o localhost:3000</p>

### Tips

```
sudo docker run \
  --name tudodocker \  
  -e POSTGRES_USER=docker \ # variável ambiente para o usuário 
  -e POSTGRES_PASSWORD=docker \
  -e POSTGRES_DB=heroes 
  -p 5435:5432 \ # Porta local / porta container
  -d \ # Baixa a imagem e roda em segundo plano
  postgres # imagem
  docker exec -it tudodocker /bin/bash # Entrando no container através do terminal 
```

```
sudo docker run \
--name adminer \
-p 8080:8080 \
--link tudodocker:postgres \ # Permissão para acessar a imagem
-d \ # Rodando em segundo plano
adminer
```

```
sudo docker run \
--name tudoadmin \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=admin \
-d \
mongo:4 # Versão 4 da imagem mongo
```

```
# Acessando localhost:8080
- servidor: nome do serviço (tudodocker)
```

```
# Criando usuário
docker exec -it mongodb \ # nome da imagem
mongo --host localhost -u admin -p admin --authenticationDatabase admin \ # user / pass => acessando como admin, rodando o localhost do container, permitindo o admin criar novos usuários
--eval "db.getSiblingDB('heroes').createUser({user:'miroswd', pwd:'senha's, roles:[{'readWrite',db:'heroes'}]})" \ # liberando o terminal para executar comandos
                   # roles, permissões 
sudo docker exec -it tudoadmin mongo --host localhost -u admin -p admin --authenticationDatabase admin --eval "db.getSiblingDB("heroes").createUser({user:'miroswd', pwd:'senha', roles:[{'readWrite',db:'heroes'}]})
```