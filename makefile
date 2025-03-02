up:
	docker compose build --no-cache && docker-compose up

push:
	git add . && git commit -m 'chore' && git push origin
