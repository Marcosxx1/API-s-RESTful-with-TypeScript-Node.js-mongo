import StartUp from "./StartUp"; // Importa a classe StartUp do arquivo "./StartUp.ts"

/* Define a porta em que o servidor deve escutar. 
   Se a variável de ambiente "process.env.PORT" estiver definida,
  usará essa porta. Caso contrário, usará a porta 3000 como padrão.
 */
const port = process.env.PORT || '3000';


StartUp.app.listen(port, function () { // Inicia o servidor HTTP na porta definida
    console.log(`Server running on port ${port}`); // Exibe uma mensagem no console informando a porta em que o servidor está rodando
});
