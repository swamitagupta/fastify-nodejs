const fastify = require('fastify'); // import fastify

const build = (opts = {}) => {
  const app = fastify(opts); // initialise fastify app

  app.get('/', async (request, reply) => {
    // register route for get
    reply.send({ hello: 'world!' }); // send to frontend
  });

  return app;
};

module.exports = build; // export the build function
