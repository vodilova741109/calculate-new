// счетчик
let el = document.getElementById("num");
el.innerHTML = 0;

onload=function(){
next();
 };
 

const next = () => {  
    if(+el.innerHTML<93){
        el.innerHTML=(+el.innerHTML)+1;
        setTimeout(function(){next();}, 20);     
    } 
 };



//  калькулятор

const blockRange =  document.querySelector('.block-range');
const indicator =  blockRange.querySelectorAll('.indicator');
const inputs =  blockRange.querySelectorAll('input');

const blockRate =  document.querySelector('.block-rate');
const btnRate =  blockRate.querySelectorAll('.button__rate');
const tabContent = document.querySelectorAll('.service-text');
const totalPriceElement = document.querySelector('#price');
const totalPriceBtn = document.querySelector('#price-btn');
const  radioType =  document.querySelectorAll('input[name="type"]');






btnRate[0].value = 2000;
btnRate[1].value = 5000;
btnRate[2].value = 10000;


let rate = btnRate[0].value; // тариф

// получаем новые данные тарифа при клике
const basePrice  = btnRate.forEach((item, i) =>{
    item.addEventListener('click', (event) => {       
        let target = event.target;  
        rate = btnRate[i].value;  
        calculate();
    })
})
// получаем данные  кнопки (индекс) и меняем класс
const  toogleClassBtn = (index) =>{
    for(let i = 0; i<btnRate.length; i++) {
        if(index === i ){
            btnRate[i].classList.add('button__active');
            tabContent[i].classList.remove('d-none');
            
            } else{                    
            btnRate[i].classList.remove('button__active');
            tabContent[i].classList.add('d-none');
            
            }
    }
};
// получаем индекс кнопки и передаем в функцию  toogleClassBtn для изменения стиля кнопки

blockRate.addEventListener('click', (event) => {
    let target = event.target;       
        if (target.matches('.button__rate')){ // если есть атрибут...
            btnRate.forEach((item, i) => {
                if(item === target){   
                    toogleClassBtn(i);                  
                } 
             });
        }
})

// получаем данные от инпута range и передаем их в текстовое поле
const  toogleTabContent = (index) =>{
    for(let i = 0; i<indicator.length; i++) {
      if(index === i){        
        indicator[i].innerHTML = inputs[i].value;        
      }
    }
};
// получаем индекс инпута и передаем в 
blockRange.addEventListener('input', (event) => {
        let target = event.target;       
            if (target.matches('input.range')){ // если есть атрибут...              
                inputs.forEach((item, i) => {
                  
                    if(item === target){                        
                        toogleTabContent(i);
                        // calculate(i);
                    } 
                 });
            }
    })


 

// расчет цены
function calculate(){   
    let arrInputs = [];  
    for (let i = 0; i < inputs.length; i++) {
        arrInputs.push(inputs[i]);
     };   
     let totalPrice = rate * arrInputs[0].value + rate * arrInputs[1].value * 30 / 100 + rate * arrInputs[2].value * 10 / 100 +rate * arrInputs[3].value * 5 / 100;  
    
     for(const radio of radioType){
         if(radio.checked) {
             totalPrice *= parseFloat(radio.value)
         }
     }
     const formatter = new Intl.NumberFormat('ru');
     
     totalPriceElement.innerText = formatter.format(totalPrice) + ' руб.';
     totalPriceBtn.innerText  = formatter.format(totalPrice) + ' руб.';
}
calculate();
// пересчет при изменении данных инпутов
for(const input of inputs) {    
    input.addEventListener('input', () =>{
         calculate();
    })
}


