var myGamePiece;
var flipped = 1;

var peng = new Image();
peng.src = "/linuxGame/peng.png";

var pengRev = new Image();
pengRev.src = "/linuxGame/pengRev.png";

var currentChar = peng;

function startGame() {
  myGameArea.start();
  myGamePiece = new component(96, 120, "red", 970, 290);
}

var myGameArea = {
  canvas: document.getElementById("gameCanv"),
  start: function () {
    this.canvas.width = 1920;
    this.canvas.height = 1080;
    this.context = this.canvas.getContext("2d");
    // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener("keydown", function (e) {
      myGameArea.key = e.keyCode;
    });
    window.addEventListener("keyup", function (e) {
      myGameArea.key = false;
    });
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function component(width, height, color, x, y) {
  this.gamearea = myGameArea;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = myGameArea.context;
    ctx.drawImage(currentChar, this.x, this.y, width, height);
    // ctx.fillStyle = color;
    // ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

function updateGameArea() {
  myGameArea.clear();
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  if (myGameArea.key && myGameArea.key == 65) {
    myGamePiece.speedX = -15;
    currentChar = pengRev;
  }
  if (myGameArea.key && myGameArea.key == 68) {
    myGamePiece.speedX = 15;
    currentChar = peng;
  }
  if (myGameArea.key && myGameArea.key == 87) {
    myGamePiece.speedY = -15;
  }
  if (myGameArea.key && myGameArea.key == 88) {
    myGamePiece.speedY = 15;
  }
  myGamePiece.newPos();
  myGamePiece.update();
}
