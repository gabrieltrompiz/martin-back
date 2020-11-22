const isLocal = !['test', 'production'].includes(process.env.NODE_ENV)
const folder =  !isLocal ? 'build' : 'src';
const format = !isLocal ? 'js' : 'ts';

module.exports = {
  "type": 'postgres',
  "host": process.env.DB_HOSTNAME,
  "port": process.env.DB_PORT,
  "cache": true,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "synchronize": process.env.NODE_ENV !== 'production',
  "logging": true,
  "entities":  [`${folder}/entities/**/*.${format}`],
  "factories": [`${folder}/factories/**/*.${format}`],
  "migrations": [`${folder}/migrations/**/*.${format}`],
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/migrations",
  }
}