module.exports = {
  type: 'postgres',
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  cache: true,
  logging: true,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.NODE_ENV !== 'production',
  entities:  ['dist/entities/**/*.{js,ts}'],
  factories: ['dist/factories/**/*.{js,ts}'],
  migrations: ['dist/migrations/**/*.{js,ts}'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  }
}