export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    mongoDB: process.env.MONGODB_URL,
  });