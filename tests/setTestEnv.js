if (!process.env.POSTGRES_URI) {
  process.env.POSTGRES_URI = "postgres://app:password@localhost:3432/db";
}
