// form data selectors
const form = document.querySelector('#form');
const cardNameForm = document.querySelector('#cardNameForm');
const cardNumberForm = document.querySelector('#cardNumberForm');
const cardMonthForm = document.querySelector('#cardMonthForm');
const cardYearForm = document.querySelector('#cardYearForm');
const cvcForm = document.querySelector('#cvcForm');

// image text selectors

const cardNumberImg = document.querySelector('#cardNumberImg');
const cardNameImg = document.querySelector('#cardNameImg');
const cardExpDateImg = document.querySelector('#cardExpDateImg');
const cvcImg = document.querySelector('#cvcImg');

// card format
// const cardFormat = value =>{
//    if(value.value.length === 4){
//     cardNumberForm.value += ' ';
//    }else if(value.value.length === 9){
//     cardNumberForm.value += ' ';
//    }else if(value.value.length === 14){
//     cardNumberForm.value += ' ';
//    }
// let arr = [...value.value];
// if(arr.length == 16){
//     arr.splice(4,0,' ');
//     arr.splice(9,0,' ');
//     arr.splice(14,0,' ');
//     }
//     value.value = arr.join('');
// }
var cleave = new Cleave(cardNumberForm, {
    creditCard: true,
});
//live update form
form.addEventListener('input', e => {
    //formating card input
    // cardFormat(cardNumberForm);
    //actual live update
    cardNameImg.innerHTML = cardNameForm.value;
    cardNumberImg.innerHTML = cardNumberForm.value;
    cardExpDateImg.innerHTML = `${cardMonthForm.value}/${cardYearForm.value}`;
    cvcImg.innerHTML = cvcForm.value;
});



const isAllNumber = value =>{
   if(!/^\d+$/.test(value.value) && value.value != ''){
        const p = document.createElement('p');
        p.innerText = 'Wrong Format!';
        p.className = 'warning';
        value.after(p);
        value.className = 'inputWarning';
   }
}
const blank = value =>{
    if(value.value === ''){
        const p = document.createElement('p');
        p.innerText = "Can't be blank!";
        p.className = 'warning';
        value.after(p);
        value.className = 'inputWarning';
    }
}

const hide = () =>{
    const warning = document.querySelectorAll('.warning');
    for (let i = 0; i < warning.length; i++) {
        const element = warning[i];
        element.className = 'remove';
    }
}
form.addEventListener('submit', e => {
    e.preventDefault();
    hide();
    blank(cardNameForm);
    blank(cardNumberForm);
    blank(cardYearForm);
    blank(cardMonthForm);
    blank(cvcForm);
    isAllNumber(cardMonthForm);
    isAllNumber(cardYearForm);
    isAllNumber(cvcForm);
})


