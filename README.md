# Slack Clone

## mysql docker-compose 로 구성하기

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
// docker-compose.yml 이 있는 위치에서 아래 명령어 실행
docker-compose up -d

// 컨테이너 접속
docker exec -it {container_name} bash

// 컨테이너 이름은 아래 명령어로 확인가능
docker ps
```

## setting

clone 후 git hook이 정상적으로 동작하지 않는다면 다음 명령어 실행

```
chmod +x .husky/pre-commit
```
