const fastify = require('fastify'); // import fastify
const db = require('./plugin/database');
const testRoute = require('./route/tempTestRoute');

const build = (opts = {}) => {
  const app = fastify(opts); // initialise fastify app

  // register plugins
  app.register(db);

  // register routes
  app.register(testRoute, { prefix: 'api/v1/test' });

  app.get('/', async (request, reply) => {
    // register route for get
    reply.send({ hello: 'world!' }); // send to frontend
  });

  return app;
};

module.exports = build; // export the build function
