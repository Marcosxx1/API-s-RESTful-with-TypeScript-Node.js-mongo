import * as express from 'express'; // Importa o framework Express.js

class StartUp {
    public app: express.Application; // Declara uma variável de instância do tipo Application do Express

    constructor() {
        this.app = express(); // Inicializa o aplicativo Express
        this.routes(); // Configura as rotas do aplicativo
    }

    routes() {
        this.app.route('/').get((req, res) => { // Configura a rota '/' do aplicativo com o método GET
            res.send({ // Envia uma resposta JSON ao cliente
                version: '0.0.1', // Versão do aplicativo
                status: 'Success' // Status da resposta
            });
        });
    }
}

export default new StartUp(); // Exporta uma instância da classe StartUp para que outros módulos possam usá-lo como um servidor HTTP
