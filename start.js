const app = require('./app');
const db = require("./src/models")
const PORT = process.env.PORT || 3004;
//app.listen(PORT, () => console.log(`Listening on: 3004`));

if(process.env.ENVIRONMENT.toLowerCase() === 'development'){
  db.sequelize
  .sync()
  .then(async () => {
    console.log('sequelize...');
    app.listen(PORT, async () => {
      console.log(`Dev Backend Listening on: ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
}else{
  app.listen(PORT, async () => {
    console.log(`Dev Backend Listening on: ${PORT}`);
  });
}
