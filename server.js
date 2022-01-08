const PORT = process.env.PORT || 5000; // 5000 is the local port, to run locally

const server = require("./src/app")({
  // call build function, add options
  logger: {
    level: "info",
    prettyPrint: true, // log in readable formats
  },
});

const start = async () => {
  try {
    await server.listen(PORT);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
