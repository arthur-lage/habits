import Fastify from "fastify";

import cors from '@fastify/cors'
import { prisma } from "@prisma/client";
import { router } from "./routes";

const app = Fastify({
  logger: true,
});

app.register(cors)
app.register(router)

async function bootstrap() {
  try { 
    await app.listen({ port: 3333 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

bootstrap();
