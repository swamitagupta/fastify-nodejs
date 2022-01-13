// This will add env variable to process.env
require("dotenv").config();

const PORT = process.env.PORT || 3000; // 5000 is the local port, to run locally

const server = require("./src/app")({
  // call build function, add options
  logger: {
    level: "info",
    prettyPrint: true, // log in readable formats
  },
});

const start = async () => {
  try {
    await server.listen(PORT, "0.0.0.0"); // default ip address
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
