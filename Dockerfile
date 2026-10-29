FROM node:22-bookworm-slim AS deps
WORKDIR /app
# Prefer a reachable mirror; retry apt (deb.debian.org often fails in this environment).
RUN set -eux; \
  printf '%s\n' \
    'deb http://mirror.yandex.ru/debian bookworm main' \
    'deb http://mirror.yandex.ru/debian-security bookworm-security main' \
    > /etc/apt/sources.list; \
  rm -f /etc/apt/sources.list.d/*; \
  for i in 1 2 3 4 5; do \
    apt-get update \
      && apt-get install -y --no-install-recommends python3 make g++ \
      && break; \
    echo "apt retry $i"; sleep 15; \
  done; \
  command -v python3 >/dev/null; \
  command -v g++ >/dev/null; \
  rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-bookworm-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV SQLITE_PATH=/app/data/bookings.db

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs \
  && mkdir -p /app/data \
  && chown nextjs:nodejs /app/data

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/better-sqlite3 ./node_modules/better-sqlite3
COPY --from=builder --chown=nextjs:nodejs /app/data ./data

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
