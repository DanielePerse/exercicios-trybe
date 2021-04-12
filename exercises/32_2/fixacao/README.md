## Show me the code! ##
Nesta sessão veremos o básico sobre a implementação e transferência de dados via TCP usando o Node.js . Nos aprofundaremos um pouco mais na aula ao vivo. Para iniciarmos, vamos criar um projeto Node em qualquer pasta com o seguinte comando:

$ npm init -y

Com o projeto Node criado, vamos criar um arquivo server.js dentro dele com o seguinte código:
projeto/server.js

Segundo a documentação do pacote net , nós temos os seguintes eventos disponíveis:
Observação : Você não precisa ler essa seção toda, apenas passar com os olhos por cima já é o suficiente, vamos recorrer à documentaçao sempre que necessário.
close
"hadError": <boolean> | true , se o socket tiver um erro de transmissão;
Emitido quando o soquete estiver totalmente fechado. O argumento "hadError" é um booleano que indica se o soquete foi fechado devido a um erro de transmissão.
connect
Emitido quando uma conexão de soquete é estabelecida com sucesso.
data
<Buffer> | <string> ;
Emitido quando os dados são recebidos. O argumento "data" será um Buffer ou String. A codificação de dados é definida por socket.setEncoding() ;
Os dados serão perdidos se não houver um ouvinte quando um socket emitir um "data" evento.
drain
Emitido quando o buffer de gravação fica vazio. Pode ser usado para acelerar envios;
Consulte também: os valores de retorno de socket.write() .
end
Emitido quando a outra extremidade do socket envia um pacote "FIN", finalizando assim o lado legível do socket.
Por padrão (allowHalfOpen é false), o socket envia um pacote FIN de volta e destrói seu descritor de arquivo depois de gravar sua fila de gravação pendente. No entanto, se allowHalfOpen estiver definido como true, o socket não terá automaticamente o "end()", seu lado gravável, permitindo que o usuário grave quantidades arbitrárias de dados. O usuário deve ligar o end() explicitamente para fechar a conexão (isto é, enviar um pacote FIN de volta).
error
<Erro> ;
Emitido quando ocorre um erro. O evento "close" será chamado diretamente após esse evento.
lookup
Emitido após resolver o nome do host, mas antes de conectar. Não aplicável a sockets Unix;
"err": <Erro> | <nulo> é o objeto de erro;
"address": <string> é o endereço IP;
"family": <string> | <null> é o tipo de endereço;
"host": <string> é o nome do host.
ready
Emitido quando um socket está pronto para ser usado;
Disparado imediatamente depois do 'connect'.
timeout
Emitido se o socket exceder o tempo de inatividade. Isso é apenas para notificar que o socket está ocioso. O usuário deve fechar manualmente a conexão.
Seguindo com a aplicação, após termos codificado o "server", vamos agora para o "client". Para isso, vamos criar um arquivo chamado client.js , na mesma pasta onde criamos o arquivo server.js , e vamos colocar o seguinte código:
projeto/client.js

## Chegou a hora de executar tudo isso! ##
Primeiro, vamos executar o servidor com o comando: $ node server.js

Feito isso, conseguimos notar que o terminal não nos deu a opção de executar um segundo comando. Isso aconteceu porque nosso servidor está de pé, esperando alguma conexão do "client" chegar até ele.
Dito isso, vamos agora a um outro terminal executar o cliente, e então veremos que o servidor recebe uma conexão e o cliente vai abrir e logo em seguida fechar essa conexão:

$ node client.js