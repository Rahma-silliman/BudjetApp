const html = document.querySelector('html');
const budjetId = document.querySelector('#budjet');

const balanceValue = document.querySelector('#balance-value');
const valueExpense = document.querySelector('#expenses-value');

const outPut = document.querySelectorAll("output");


const expenseId = document.querySelector('#expense');

const expenseAmount = document.querySelector('#expense-amount');
const btnCalcul = document.querySelector('#btn-calcul');
const btnReset = document.getElementById("reset")
const btnExpense = document.querySelector('#btn-expense')

console.log(valueExpense)
let valueExpenseAmount = document.querySelector('#expense-value');
let elementUl = document.querySelector('.list')
const hidden = document.querySelector('.hidden')
const div = document.querySelector('.transaction')
console.log(btnExpense)
function list(arr) {
  const maList = [];
  let y = 'F'
  maList.push(`<li class="position-relative">${arr[0]}</li><li>${arr[1]}<span> ${y}</span></li><li><a href="" class=""><img src="image/edit.svg"></a><a href="" class="icon"><img src="image/delet.svg"></a></li>`)
  return maList;
}
function addition(a, b) {
  return a + b;
}
function addValueOfBudjet() {

}

let budjetValue = document.querySelector('#budjet-value');

console.log(addColor())
const ctx = document.getElementById('myChart');

const data = {
  labels: [

  ],
  datasets: [{
    label: '',
    data: [],
    backgroundColor: [
      addColor()
    ],
    hoverOffset: 4
  }]
};
let myTableau = ['b','c'] 
myTableau = JSON.parse(localStorage.getItem('depense'));
if(JSON.parse(localStorage.getItem('depense'))){
  
  balanceValue.textContent = localStorage.getItem("budjet") - parseInt(myTableau[0]) ;
  valueExpense.textContent = myTableau[0];
}
else{
  balanceValue.textContent = localStorage.getItem("budjet");
}
if(localStorage.getItem("budjet") !== null){
  budjetValue.textContent = localStorage.getItem("budjet");
  balanceValue.textContent = localStorage.getItem("budjet") - parseInt(myTableau[0]) ;
}
else {
  
 
 
}



console.log(data.datasets[0].data)
function budjet() {

budjetValue.value = addition(parseInt(budjetValue.value),parseInt(budjetId.value));
localStorage.setItem('budjet', budjetValue.value);
budjetValue.textContent = localStorage.getItem("budjet");
balanceValue.textContent = localStorage.getItem("budjet")- parseInt(myTableau[0]) ;

}
let depense = [];
function expense(){
  valueExpense.value = addition(parseInt(valueExpense.value),parseInt(expenseAmount.value));
  depense.push(valueExpense.value,expenseId.value)
  localStorage.setItem('depense',JSON.stringify(depense));
  valueExpense.textContent = valueExpense.value;
}




  btnCalcul.addEventListener('click', () => {
    budjet()

  });

  btnExpense.addEventListener('click', () => {

    expense();
   

  })


function addColor() {

  var color = `#${crypto.getRandomValues(new Uint32Array(1))[0].toString(16).padStart(8, 0).slice(-6)}`
  return color;

}


btnReset.addEventListener('click', ()=>{
  localStorage.clear()
  
})

// let graphique = Chart.getcontext('myChart')
// if (graphique) {
//   ghaphique.destroy()
// }
// new Chart(ctx, {
//   type: 'doughnut',
//   data: data,
// })

