const Fastify = require("fastify");
const FastifyMultipart = require("fastify-multipart");

const app = Fastify();

app.register(FastifyMultipart);

app.post("/upload", async (req) => {
  const files = await req.saveRequestFiles();

  console.log(req.headers);
  console.log(files);

  return { ok: true };
});

app.listen(7070, "0.0.0.0", (err) => {
  if (err) throw err;
});
