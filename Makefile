FOLDER_NAME=`basename $(CURDIR)`

buildProd: 
	@echo "[1]. Generating compilation Dockerfile, please wait..."
	@docker buildx build --platform linux/amd64 -t ${FOLDER_NAME} .
	@docker tag ${FOLDER_NAME} registry.heroku.com/${FOLDER_NAME}/web
	@echo "[2]. Uploading image to heroku server, please wait..."
	@docker push registry.heroku.com/${FOLDER_NAME}/web
	@heroku container:release web --app ${FOLDER_NAME} 