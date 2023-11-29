export default () => ({
  POSTGRES_USER: process.env.POSTGRES_USER || 'admin',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'admin',
  POSTGRES_DB: process.env.POSTGRES_DB || 'testdb',
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
  POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT) || 5432,
  APP_PORT: parseInt(process.env.APP_PORT) || 3000,
});
