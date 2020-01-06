const BaseController = require('../controller/base-controller');
const baseControll = new BaseController();

module.exports = (app) => {
    app.route(BaseController.rotas().home).get( baseControll.home());
    app.route(BaseController.rotas().login).get(baseControll.login());

}