import Fastify from "fastify";

const fastify = Fastify({ logger: true });
const PORT = 3000;

fastify.get("/teste", async (request, reply) => {
  return { message: "Hello World" };
});

fastify.listen({ port: PORT }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
