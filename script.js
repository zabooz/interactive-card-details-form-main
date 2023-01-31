const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelector('form');
const endCard = document.querySelector('.endcard');
const inputs = document.querySelectorAll('input');
const inputCvc = document.querySelector('#cvc');
const cardCvc = document.querySelector('.card-back p');
const inputName = document.querySelector('#name');
const cardName = document.querySelector('.card-name');
const inputMonth = document.querySelector('#month')
const inputYear = document.querySelector('#year');
const cardDate = document.querySelector('.card-date');
const inputCardNum = document.querySelector('#card-number');
const cardNumber = document.querySelector('.card-number');


inputs.forEach(item =>{
    item.addEventListener('input', e=>{
    cardDate.textContent = inputMonth.value + '/' +inputYear.value
    cardNumber.textContent = formatNumber()
    cardName.textContent = inputName.value
    cardCvc.textContent = inputCvc.value

    })
})
submitBtn.addEventListener('click', e =>{
    let count = 0;
    for(let i=0; i< inputs.length;i++){
        if(inputs[i].value){
            count++
        }
    }
    if(count === inputs.length){
        endCard.classList.toggle('endcard-show');
        form.classList.toggle('form-hide');
    }
})
function formatNumber(){
    let result = [];
    let count = 1;
    for(let i = 0 ;i<inputCardNum.value.length;i++){
        if( count === 4){
            result.push(inputCardNum.value[i] + ' ')
            count = 1;
        }else{
            result.push(inputCardNum.value[i])
            count++
        }
    }
    return result.join('')
}