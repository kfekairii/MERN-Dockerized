down:
	@docker-compose down

clean: down
#	@newgrp docker
	@echo Cleaning images, containers and volumes
	@echo ========================================
	@docker container prune 
	@docker image prune 
	@docker volume prune
	@echo Done!
	@echo ========================================

build:
	@echo Build images and Run
	@echo ========================================
	@docker-compose up --build

up:
	@echo ========================================
	@docker-compose up 

	