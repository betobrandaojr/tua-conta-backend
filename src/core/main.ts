import Fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";

dotenv.config();

const fastify = Fastify({ logger: true });
const PORT = process.env.PORT || 3000;

fastify.register(cors, {
  origin: "*",
  methods: ["GET"],
  credentials: true,
});

fastify.get("/teste", async (request, reply) => {
  return { message: "Hello World" };
});

fastify.listen({ port: Number(PORT), host: "0.0.0.0" }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Servidor rodando em ${address}`);
});
