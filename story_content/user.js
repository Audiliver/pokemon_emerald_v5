window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();

var intervaloMovimento = null;  // Inicialmente, sem intervalo ativo
var movimentoAtivo = false;  // Indica se o movimento está ativo

// Funções para lidar com as teclas
function pressionarTecla(direcao) {
    // Verifica se block_move é false antes de permitir o movimento
    var blockMove = player.GetVar('block_move');
    if (!movimentoAtivo && !blockMove) {  // Apenas permite movimento se block_move for false
        player.SetVar('estado', direcao); // Atualiza a variável 'estado' com a direção
        player.SetVar('movimento', true); // Atualiza a variável 'movimento' para ativo
        iniciarIncremento(); // Inicia o incremento do count_movimento
        movimentoAtivo = true;
    }
}

function soltarTecla(direcaoParado) {
    if (movimentoAtivo) {
        player.SetVar('estado', direcaoParado); // Atualiza a variável 'estado' para a direção parada
        player.SetVar('movimento', false); // Atualiza a variável 'movimento' para inativo
        pararIncremento(); // Para o incremento do count_movimento
        movimentoAtivo = false;
    }
}

// Função para iniciar o incremento da variável count_movimento
function iniciarIncremento() {
    // Verifica novamente se block_move ainda é false antes de iniciar o intervalo
    var blockMove = player.GetVar('block_move');
    if (blockMove) return; // Sai imediatamente se block_move for true

    intervaloMovimento = setInterval(function() {
        var countMovimento = player.GetVar('count_movimento');
        player.SetVar('count_movimento', countMovimento + 1);
    }, 100); // Incrementa a cada 100ms
}

// Função para parar o incremento
function pararIncremento() {
    clearInterval(intervaloMovimento);
    intervaloMovimento = null;  // Reseta o intervalo
}

// Eventos para teclas do teclado
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
        pressionarTecla('direita');
    } else if (event.key === "ArrowLeft") {
        pressionarTecla('esquerda');
    } else if (event.key === "ArrowUp") {
        pressionarTecla('cima');
    } else if (event.key === "ArrowDown") {
        pressionarTecla('baixo');
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowRight") {
        soltarTecla('direita_parado');
    } else if (event.key === "ArrowLeft") {
        soltarTecla('esquerda_parado');
    } else if (event.key === "ArrowUp") {
        soltarTecla('cima_parado');
    } else if (event.key === "ArrowDown") {
        soltarTecla('baixo_parado');
    }
});

}

window.Script2 = function()
{
  var player = GetPlayer();

var intervaloMovimento = null;  // Inicialmente, sem intervalo ativo
var movimentoAtivo = false;  // Indica se o movimento está ativo

// Funções para lidar com as teclas
function pressionarTecla(direcao) {
    // Verifica se block_move é false antes de permitir o movimento
    var blockMove = player.GetVar('block_move');
    if (!movimentoAtivo && !blockMove) {  // Apenas permite movimento se block_move for false
        player.SetVar('estado', direcao); // Atualiza a variável 'estado' com a direção
        player.SetVar('movimento', true); // Atualiza a variável 'movimento' para ativo
        iniciarIncremento(); // Inicia o incremento do count_movimento
        movimentoAtivo = true;
    }
}

function soltarTecla(direcaoParado) {
    if (movimentoAtivo) {
        player.SetVar('estado', direcaoParado); // Atualiza a variável 'estado' para a direção parada
        player.SetVar('movimento', false); // Atualiza a variável 'movimento' para inativo
        pararIncremento(); // Para o incremento do count_movimento
        movimentoAtivo = false;
    }
}

// Função para iniciar o incremento da variável count_movimento
function iniciarIncremento() {
    // Verifica novamente se block_move ainda é false antes de iniciar o intervalo
    var blockMove = player.GetVar('block_move');
    if (blockMove) return; // Sai imediatamente se block_move for true

    intervaloMovimento = setInterval(function() {
        var countMovimento = player.GetVar('count_movimento');
        player.SetVar('count_movimento', countMovimento + 1);
    }, 100); // Incrementa a cada 100ms
}

// Função para parar o incremento
function pararIncremento() {
    clearInterval(intervaloMovimento);
    intervaloMovimento = null;  // Reseta o intervalo
}

// Eventos para teclas do teclado
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
        pressionarTecla('direita');
    } else if (event.key === "ArrowLeft") {
        pressionarTecla('esquerda');
    } else if (event.key === "ArrowUp") {
        pressionarTecla('cima');
    } else if (event.key === "ArrowDown") {
        pressionarTecla('baixo');
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowRight") {
        soltarTecla('direita_parado');
    } else if (event.key === "ArrowLeft") {
        soltarTecla('esquerda_parado');
    } else if (event.key === "ArrowUp") {
        soltarTecla('cima_parado');
    } else if (event.key === "ArrowDown") {
        soltarTecla('baixo_parado');
    }
});

}

window.Script3 = function()
{
  var player = GetPlayer();

var intervaloMovimento = null;  // Inicialmente, sem intervalo ativo
var movimentoAtivo = false;  // Indica se o movimento está ativo

// Funções para lidar com as teclas
function pressionarTecla(direcao) {
    // Verifica se block_move é false antes de permitir o movimento
    var blockMove = player.GetVar('block_move');
    if (!movimentoAtivo && !blockMove) {  // Apenas permite movimento se block_move for false
        player.SetVar('estado', direcao); // Atualiza a variável 'estado' com a direção
        player.SetVar('movimento', true); // Atualiza a variável 'movimento' para ativo
        iniciarIncremento(); // Inicia o incremento do count_movimento
        movimentoAtivo = true;
    }
}

function soltarTecla(direcaoParado) {
    if (movimentoAtivo) {
        player.SetVar('estado', direcaoParado); // Atualiza a variável 'estado' para a direção parada
        player.SetVar('movimento', false); // Atualiza a variável 'movimento' para inativo
        pararIncremento(); // Para o incremento do count_movimento
        movimentoAtivo = false;
    }
}

// Função para iniciar o incremento da variável count_movimento
function iniciarIncremento() {
    // Verifica novamente se block_move ainda é false antes de iniciar o intervalo
    var blockMove = player.GetVar('block_move');
    if (blockMove) return; // Sai imediatamente se block_move for true

    intervaloMovimento = setInterval(function() {
        var countMovimento = player.GetVar('count_movimento');
        player.SetVar('count_movimento', countMovimento + 1);
    }, 100); // Incrementa a cada 100ms
}

// Função para parar o incremento
function pararIncremento() {
    clearInterval(intervaloMovimento);
    intervaloMovimento = null;  // Reseta o intervalo
}

// Eventos para teclas do teclado
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
        pressionarTecla('direita');
    } else if (event.key === "ArrowLeft") {
        pressionarTecla('esquerda');
    } else if (event.key === "ArrowUp") {
        pressionarTecla('cima');
    } else if (event.key === "ArrowDown") {
        pressionarTecla('baixo');
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowRight") {
        soltarTecla('direita_parado');
    } else if (event.key === "ArrowLeft") {
        soltarTecla('esquerda_parado');
    } else if (event.key === "ArrowUp") {
        soltarTecla('cima_parado');
    } else if (event.key === "ArrowDown") {
        soltarTecla('baixo_parado');
    }
});

}

};
