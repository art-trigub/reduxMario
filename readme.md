## Installation. Unix

```bash
cp docker-compose.override.yml.general docker-compose.override.yml
cp .env.example .env
cp ./backend/.env.example ./backend/.env
cp ./frontend/.env.example ./frontend/.env

docker-compose up -d

docker-compose exec app composer install
docker-compose exec app php artisan key:generate
docker-compose exec app php artisan jwt:secret
docker-compose exec app php artisan doctrine:schema:creat
docker-compose exec app php artisan db:seed
docker-compose exec app ./vendor/bin/phpunit

docker container exec 2964060d34aa nginx -t


sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt
docker-compose exec app php artisan doctrine:generate:proxies

docker-compose exec app php artisan config:clear
docker-compose exec app  php artisan storage:link