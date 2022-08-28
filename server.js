var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index.html");
});

app.get(
  "/enviarpedido/:pedido/:endereco/:pagamento/:observacoes/:total/:queroentrega",
  function (req, res) {
    var pedido;
    var endereco;
    var queroentrega;
    var pagamento;
    var observacoes;
    var total;

    var pedidoCompleto = "";

    pedido = JSON.parse(req.params.pedido);
    endereco = JSON.parse(req.params.endereco);
    pagamento = JSON.parse(req.params.pagamento);
    observacoes = JSON.parse(req.params.observacoes);
    total = JSON.parse(req.params.total);
    queroentrega = JSON.parse(req.params.queroentrega);

    for (var x = 0; x < pedido.length; x++) {
      if (pedido[x].id == 1) {
        pedidoCompleto += `\n\n🍟 *ENTRADAS:*\n`;
        break;
      }
    }

    for (var x = 0; x < pedido.length; x++) {
      if (pedido[x].id == 1) {
        pedidoCompleto += `\n   • ${pedido[x].quantidade}X ${pedido[x].nome}\n`;
      }
    }

    //--------------------------------------------

    for (var x = 0; x < pedido.length; x++) {
      if (pedido[x].id == 2) {
        pedidoCompleto += `\n\n🍔 *BURGERS:*\n`;
        break;
      }
    }

    for (var x = 0; x < pedido.length; x++) {
      if (pedido[x].id == 2) {
        pedidoCompleto += `\n   • ${pedido[x].nome}\n`;

        console.log(pedido[x].selecionados.length);

        for (var y = 0; y < pedido[x].selecionados.length; y++) {
          pedidoCompleto += `\n     - ${pedido[x].selecionados[y].nome}\n`;
        }
      }
    }

    //--------------------------------------------

    for (var x = 0; x < pedido.length; x++) {
      if (pedido[x].id == 3) {
        pedidoCompleto += `\n\n🥪 *SANDUÍCHES:*\n`;
        break;
      }
    }

    for (var x = 0; x < pedido.length; x++) {
      if (pedido[x].id == 3) {
        pedidoCompleto += `\n   • ${pedido[x].quantidade}X ${pedido[x].nome}\n`;
      }
    }

    //--------------------------------------------

    for (var x = 0; x < pedido.length; x++) {
      if (pedido[x].id == 4 || pedido[x].id == 5) {
        pedidoCompleto += `\n\n🍝 *PRATOS E SALADAS:*\n`;
        break;
      }
    }

    for (var x = 0; x < pedido.length; x++) {
      if (pedido[x].id == 4 || pedido[x].id == 5) {
        pedidoCompleto += `\n   • ${pedido[x].quantidade}X ${pedido[x].nome}\n`;
      }
    }

    //--------------------------------------------

    for (var x = 0; x < pedido.length; x++) {
      if (pedido[x].id == 6) {
        pedidoCompleto += `\n\n🥃 *BEBIDAS:*\n`;
        break;
      }
    }

    for (var x = 0; x < pedido.length; x++) {
      if (pedido[x].id == 6) {
        pedidoCompleto += `\n   • ${pedido[x].quantidade}X ${pedido[x].nome}\n`;
      }
    }

    //--------------------------------------------

    for (var x = 0; x < pedido.length; x++) {
      if (pedido[x].id == 7) {
        pedidoCompleto += `\n\n🥧 *SOBREMESAS:*\n`;
        break;
      }
    }

    for (var x = 0; x < pedido.length; x++) {
      if (pedido[x].id == 7) {
        pedidoCompleto += `\n   • ${pedido[x].quantidade}X ${pedido[x].nome}\n`;
      }
    }

    pedidoCompleto += `\n------------------\n`;

    if (queroentrega == true) {
      pedidoCompleto += `\n  Nome:  \n`;
      pedidoCompleto += `\n   • ${endereco.nome} \n`;

      pedidoCompleto += `\n  Rua:  \n`;
      pedidoCompleto += `\n   • ${endereco.rua} \n`;

      pedidoCompleto += `\n  Bairro:  \n`;
      pedidoCompleto += `\n   • ${endereco.bairro} \n`;

      pedidoCompleto += `\n  Número:  \n`;
      pedidoCompleto += `\n   • ${endereco.numero} \n`;

      pedidoCompleto += `\n  Ponto de Referência:  \n`;
      pedidoCompleto += `\n   • ${endereco.pontoderef} \n`;
    } else {
      pedidoCompleto += `\n  Nome:  \n`;
      pedidoCompleto += `\n   • ${endereco.nome2} \n`;
    }

    pedidoCompleto += `\n------------------\n`;

    pedidoCompleto += `\n  *Total: ${total.toFixed(2)}*\n`;

    pedidoCompleto += `\n  Pagamento: ${pagamento}\n`;

    pedidoCompleto += `\n------------------\n`;

    pedidoCompleto += `\n  Observação: ${observacoes}\n`;

    //--------------------------------------------

    console.log(pedidoCompleto);

    res.redirect(
      "https://api.whatsapp.com/send?1=pt_BR&phone=558897011199&text=" +
        pedidoCompleto
    );
  }
);
// .listen(process.env.PORT);
app.listen(3003);
