docker-compose down 
docker-compose build
docker-compose up database -d
docker-compose run backend python manage.py makemigrations
docker-compose run backend python manage.py migrate
docker-compose run backend python manage.py initadmin
docker container prune
docker image prune
docker-compose up -d
