docker-local: docker-compose-build sertificate
	docker-compose up -d

docker-compose-build:
	docker-compose down
	docker-compose build

sertificate:
	.\shell\sertificate.bat
