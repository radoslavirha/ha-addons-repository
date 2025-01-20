FROM node:22-slim

RUN corepack enable pnpm

COPY . .

RUN pnpm install --prod --frozen-lockfile   && \
    pnpm build
    RUN ls
ENTRYPOINT ["pnpm", "start"]
