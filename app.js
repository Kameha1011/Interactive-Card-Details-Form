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

// card format (this one has a problem while deleting characters from the input)
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

//card format using Cleavejs
var cleave = new Cleave(cardNumberForm, {
    creditCard: true,
});

//live update form
form.addEventListener('input', e => {
    cardNameImg.innerHTML = cardNameForm.value;
    cardNumberImg.innerHTML = cardNumberForm.value;
    cardExpDateImg.innerHTML = `${cardMonthForm.value}/${cardYearForm.value}`;
    cvcImg.innerHTML = cvcForm.value;
});


// isNumber check
const isAllNumber = value =>{
   if(!/^\d+$/.test(value.value) && value.value != ''){
        const p = document.createElement('p');
        p.innerText = 'Wrong Format!';
        p.className = 'warning';
        value.after(p);
        value.className = 'inputWarning';
   }else{
    return true;
   }
}

// isBlank check
const blank = value =>{
    if(value.value === ''){
        const p = document.createElement('p');
        p.innerText = "Can't be blank!";
        p.className = 'warning';
        value.after(p);
        value.className = 'inputWarning';
    }else{
        return true;
    }
}

// hides previous error messages 
const hide = () =>{
    const warning = document.querySelectorAll('.warning');
    for (let i = 0; i < warning.length; i++) {
        const element = warning[i];
        element.className = 'remove';
    }
}

// submit listener
const formContainer = document.querySelector('.formContainer');
const thanksPage = document.querySelector('.thanksPage');
form.addEventListener('submit', e => {
    e.preventDefault();
    hide();
    if ((blank(cardNameForm) && blank(cardNumberForm) && blank(cardYearForm) && blank(cardMonthForm) && blank(cvcForm) && isAllNumber(cardMonthForm) && isAllNumber(cardYearForm) && isAllNumber(cvcForm))){
        formContainer.classList.add('remove');
        thanksPage.classList.remove('remove');
    }else{
        blank(cardNameForm);
        blank(cardNumberForm);
        blank(cardYearForm);
        blank(cardMonthForm);
        blank(cvcForm);
        isAllNumber(cardMonthForm);
        isAllNumber(cardYearForm);
        isAllNumber(cvcForm);
    }
})

// return to form

const thanksButton = document.querySelector('#thanksButton');
thanksButton.addEventListener('click', e => {
    e.preventDefault();
    formContainer.classList.remove('remove');
    thanksPage.classList.add('remove');
    cardNameForm.value = '';
    cardNumberForm.value = '';
    cardMonthForm.value = '';
    cardYearForm.value = '';
    cvcForm.value = '';
})


