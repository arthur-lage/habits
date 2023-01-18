import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";

import cors from '@fastify/cors'

const app = Fastify({
  logger: true,
});

app.register(cors)

const prisma = new PrismaClient()

app.get("/habits", async () => {
  const habits = await prisma.habit.findMany({})

  return habits;
});

async function bootstrap() {
  try { 
    await app.listen({ port: 3333 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

bootstrap();
