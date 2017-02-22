let timer1, timer2;

function setup() {
  noCanvas();
  timer1 = createP('timer 1');
  timer2 = createP('timer 2');
  
  makeTimer(timer1, 500);
  makeTimer(timer2, 1000);
}


function makeTimer(elt, delay) {
  let counter = 0;
  setInterval(timeIt, delay);
  
  function timeIt() {
    elt.html(counter);
    counter++;
  }
}


/*function draw() {

}*/

