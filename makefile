up:
	docker-compose up --build -d

push:
	git add . && git commit -m 'chore' && git push origin
