const LivroController = require('../controller/livroController');
const livroControll = new LivroController();

const Livro = require('../models/livro');
module.exports = (app) => {

    app.route(LivroController.rotas().lista).get( livroControll.lista());

    app.route(LivroController.rotas().cadastro)
       .get( livroControll.formularioCadastro())
       .post(Livro.validacoes(), livroControll.cadastra())
       .put(livroControll.edita());

    app.route(LivroController.rotas().edicao).get(livroControll.formularioBuscaId());

    app.route(LivroController.rotas().delecao).delete( livroControll.deleta());
    
};