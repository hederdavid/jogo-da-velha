let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let resetPontuation = document.querySelector("#reset");
let secondPlayer;

// Contador de Jogadas
let player1 = 0;
let player2 = 0;

// Adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {
  // Quando alguém clica na caixa
  boxes[i].addEventListener("click", () => {
    let el = checkEl(player1, player2);

    let parentElementBox = boxes[i];

    // Verifica se ja tem X ou o
    if (parentElementBox.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);

      parentElementBox.appendChild(cloneEl);

      // Computar jogada
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }

      // Verifica quem venceu
      checkWinCondition();
    }
  });
}

// resetar o placar

resetPontuation.addEventListener("click", () => {
  let pontuationX = document.querySelector("#scoreboard-1");
  let pontuationO = document.querySelector("#scoreboard-2");
  if (pontuationX.textContent != 0) {
    pontuationX.textContent = 0;
  }
  if (pontuationO.textContent != 0) {
    pontuationO.textContent = 0;
  }
});

// Verifica quem irá jogar

function checkEl(player1, player2) {
  if (player1 == player2) {
    // X
    el = x;
  } else {
    // o
    el = o;
  }

  return el;
}

// Verifica quem venceu
function checkWinCondition() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  // horizontal
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.firstElementChild.classList;
    let b2Child = b2.firstElementChild.classList;
    let b3Child = b3.firstElementChild.classList;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      // x
      declareWinner("x");
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      // o
      declareWinner("o");
    }
  }

  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.firstElementChild.classList;
    let b5Child = b5.firstElementChild.classList;
    let b6Child = b6.firstElementChild.classList;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      // x
      declareWinner("x");
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      // o
      declareWinner("o");
    }
  }

  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.firstElementChild.classList;
    let b8Child = b8.firstElementChild.classList;
    let b9Child = b9.firstElementChild.classList;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      // x
      declareWinner("x");
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // vertical
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.firstElementChild.classList;
    let b4Child = b4.firstElementChild.classList;
    let b7Child = b7.firstElementChild.classList;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      // x
      declareWinner("x");
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      // o
      declareWinner("o");
    }
  }

  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.firstElementChild.classList;
    let b5Child = b5.firstElementChild.classList;
    let b8Child = b8.firstElementChild.classList;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      // x
      declareWinner("x");
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      // o
      declareWinner("o");
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.firstElementChild.classList;
    let b6Child = b6.firstElementChild.classList;
    let b9Child = b9.firstElementChild.classList;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      // x
      declareWinner("x");
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // diagonal
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.firstElementChild.classList;
    let b5Child = b5.firstElementChild.classList;
    let b9Child = b9.firstElementChild.classList;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      // x
      declareWinner("x");
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      // o
      declareWinner("o");
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.firstElementChild.classList;
    let b5Child = b5.firstElementChild.classList;
    let b7Child = b7.firstElementChild.classList;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      // x
      declareWinner("x");
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // velha
  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    declareWinner("Deu velha");
  }
}

// limpa o jogo, declara o vencedor e atualiza o placar

function declareWinner(winner) {
  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardO = document.querySelector("#scoreboard-2");
  let msg = "";

  if (winner == "x") {
    msg = "O jogador 1 venceu!";
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
  } else if (winner == "o") {
    msg = "O jogador 2 venceu!";
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
  } else {
    msg = "Deu velha!";
  }
  // exibe msg
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  // esconde msg
  setTimeout(() => {
    messageContainer.classList.add("hide");
  }, 2000);

  // zera as jogadas
  player1 = 0;
  player2 = 0;

  // zera o tabuleiro
  let boxesToRemove = document.querySelectorAll(".box div");

  setTimeout(() => {
    for (let i = 0; i < boxesToRemove.length; i++) {
      boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
  }, 2000);
}
