let calculation = JSON.parse(localStorage.getItem('calculation'));

if (!calculation){
  calculation = '';
}

console.log(calculation);

resultcalculation();

function updatecalculation(tobi) {

  calculation += tobi;
  
  resultcalculation();


  localStorage.setItem('calculation', JSON.stringify(calculation));
  //return calculation;
  return tobi;
}

function equalTo() {

  eval(calculation);
    calculation = eval(calculation);
    calculation = String(calculation);
    resultcalculation();
    localStorage.setItem('calculation', JSON.stringify(calculation));
}


function resultcalculation() {
  document.querySelector('.result')
   .innerHTML = calculation;
}

function deleted() {
  
  calculation = calculation.slice(0, calculation.length - 1);

  resultcalculation();

   localStorage.setItem('calculation', JSON.stringify(calculation));

}

















