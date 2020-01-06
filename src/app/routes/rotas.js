const livroRotas = require('../routes/livro-rotas');
const baseRotas = require('../routes/base-rotas');

module.exports = (app) => {
    baseRotas(app);
    livroRotas(app);
}