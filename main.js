x = 0;
y = 0;

drawCircle = "";
drawRect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
  document.getElementById("status").innerHTML =
    "O Sistema está ouvindo você. Por favor, fale";
  recognition.start();
}

recognition.onresult = function (event) {
  console.log(event);
  var content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML =
    "A fala foi reconhecida como: " + content;
  if (content == "círculo") {
    x = Math.floor(Math.random() * 500);
    y = Math.floor(Math.random() * 500);

    document.getElementById("status").innerHTML = "Desenhando círculo";
    drawCircle = "set";
  }
  if (content == "retângulo") {
    x = Math.floor(Math.random() * 500);
    y = Math.floor(Math.random() * 500);

    document.getElementById("status").innerHTML = "Desenhando retângulo";
    drawRect = "set";
  }
};

function setup() {
  canvas = createCanvas(500, 500);
}

function draw() {
  if (drawCircle == "set") {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Círculo desenhado";
    drawCircle = "";
  }
  if (drawRect == "set") {
    rect(x, y, 130, 100);
    document.getElementById("status").innerHTML = "Retângulo desenhado";
    drawRect = "";
  }
}
