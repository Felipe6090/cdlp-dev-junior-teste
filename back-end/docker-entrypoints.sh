#!/bin/sh
-c
npx prisma generate
npx prisma migrate dev --name initial_migration
npx prisma migrate deploy
npm run dev