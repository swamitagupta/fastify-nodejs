const tempService = require('../../service/temp.service');
const {
  postRequestBody,
  postResponseBody,
  getResponseBody,
} = require('./temp.schema');

const route = async (fastify) => {
  // get route api/v1/test/
  const { getAll, save } = tempService(fastify);
  fastify.get(
    '/',
    { schema: { response: getResponseBody } },
    async (request, reply) => {
      const allTest = await getAll();

      reply.code(200).send({
        temps: allTest, // return object instead of array to prevent clients from breaking in case of changes
      });
    }
  );

  // post route api/v1/test/
  fastify.post(
    '/',
    {
      schema: {
        body: postRequestBody,
        response: postResponseBody,
      },
    },
    async (request, reply) => {
      fastify.log.info(`request with body ${request}`);
      const { title } = request.body;

      const id = await save(title);

      reply.code(201).send(id);
    }
  );
};

module.exports = route;
