const app = require('./app');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`API sendo executada na porta ${PORT}`);
});
