# Slack ν΄λ‘  μ½λ© (react + nestjs)

- [web_client](https://github.com/changyuyeo/slack_clone/tree/master/packages/web_client) with react
- [server_api](https://github.com/changyuyeo/slack_clone/tree/master/packages/server_api) with nestjs

<br />

## π³ docker setup

### mysql docker-compose λ‘ κ΅¬μ±νκΈ°

mysql 8 docker image

```yml
version: '3'
services:
  test_database:
    container_name: mysql8
    image: mysql:8
    environment:
      MYSQL_DATABASE: 1
      MYSQL_ROOT_PASSWORD: 1111
      MYSQL_ROOT_HOST: '%'
    ports:
      - 3306:3306
    ulimits:
      memlock:
        soft: -1
        hard: -1
      nofile:
        soft: 65536
        hard: 65536
```

<br />

```
// docker-compose.yml μ΄ μλ μμΉμμ μλ λͺλ Ήμ΄ μ€ν
docker-compose up -d

// μ»¨νμ΄λ μ μ
docker exec -it {container_name} bash

// μ»¨νμ΄λ μ΄λ¦μ μλ λͺλ Ήμ΄λ‘ νμΈκ°λ₯
docker ps
```

<br />

## βοΈ setting

- clone ν git hookμ΄ μ μμ μΌλ‘ λμνμ§ μλλ€λ©΄ λ€μ λͺλ Ήμ΄ μ€ν

```
chmod +x .husky/pre-commit
```

<br />

- .env κ΅¬μ±

```
DB_USERNAME=...
DB_PASSWORD=...
DB_DATABASE=...

ORIGIN=...
PORT=...
SECRET=...

```
