docker-local: docker-compose-build
	docker-compose up -d

docker-compose-build:
	docker-compose down
	docker-compose build

sertificate:
	.\shell\sertificate.bat
