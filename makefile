up:
	docker-compose up -d

push:
	git add . && git commit -m 'chore' && git push origin
