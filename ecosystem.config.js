module.exports = {
  apps: [
    {
      name: "blackglass-lite-server",
      script: "dist/main.js",
      watch: true,
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
