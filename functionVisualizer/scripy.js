/* eslint-env es6 */
var formula = "x * x /50";

function setup() {
    createCanvas(800, 800);
    background(0);
    formulaBox.value = formula;
    renderGraph() ;
}
async function changeFormula(event){
    if(event.key === "Enter"){
        formula = formulaBox.value;
        renderGraph() ;
    }
}
function renderGraph() {
  background(0);
    stroke(0,255,0);
    line(width/2, 0,width/2, height);
    line(0, height/2, width, height/2);
stroke(255,0,0);
  var prevx;
  var prevy;
  for(x = -width ; x < width; x++){
    let y = eval(formula);
    line(x + (width/2), -y + (-height/2),  prevx+(width/2),-prevy+ (-height/2));
    prevx = x;
    prevy = y;
  }
    
}
