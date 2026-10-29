# Каменный двор

Публичная витрина продажи квартир: дорожка шагов от знакомства с домами до записи на просмотр.

## Запуск

Локально (разработка):

```bash
npm install
npm run dev
```

Приложение: [http://localhost:3000](http://localhost:3000)

Docker Compose:

```bash
docker compose up --build
```

Health: `GET /api/health` → 200.

Ключ Яндекс.Карт (на следующих этапах): скопируйте `.env.example` в `.env` и подставьте значение вместо `CHANGE_ME`. Файл `.env` не коммитьте.

## AI-агент

[AGENTS.md](AGENTS.md) · [.cursor/INDEX.md](.cursor/INDEX.md)
