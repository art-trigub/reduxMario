## Installation. Unix

```bash
cp docker-compose.override.yml.general docker-compose.override.yml
cp .env.example .env
cp ./backend/.env.example ./backend/.env
cp ./frontend/.env.example ./frontend/.env

sudo docker-compose up -d

 php artisan db:seed
sudo docker exec -it 9b9b612a54af bash
