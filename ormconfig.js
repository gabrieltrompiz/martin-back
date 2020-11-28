module.exports = {
  type: 'postgres',
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  cache: true,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.NODE_ENV !== 'production',
  logging: true,
  entities:  ['dist/entities/**/*.entity.js'],
  factories: ['dist/factories/**/*.js'],
  migrations: ['dist/migrations/**/*.js'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  }
}