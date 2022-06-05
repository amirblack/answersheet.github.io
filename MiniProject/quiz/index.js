// get Countries by class Name
const getElement = document.getElementsByClassName('country')

// default correct Answer
let CorrectAnswer  = [236, 525, 191, 586]

// deafult Question Number
let QuestionNumber = 0

// Resualt
let Resualt = []

// switch case for set correct answer for each question
const checkCountries = (val) => {
    switch (val) {
        case 1:
            CorrectAnswer = [103, 420, 189, 357]
            break;
        case 2:
            CorrectAnswer = [202, 670, 302, 681, 261, 753, 215, 749]
            break;
        case 3:
            CorrectAnswer = [321, 495, 374, 497, 393, 363, 324, 428]
            break;
        case 4:
            CorrectAnswer = [513, 305, 449, 321, 451, 456, 518, 455]
            break;

    }
}

// for send coords value to check
for (let i = 0; i < getElement.length; i++) {
    getElement[i].addEventListener('click', function () {
        passValue(getElement[i].getAttribute("coords"))
    
    }, false)
}

// initialize swiper slider
let swiper = new Swiper(".mySwiper", {
    allowSlidePrev : false
  });


/*
     after user select the answer 
     if the answer is true we send 
     "20" as value and if it's false
     we send the "0" to Resualt Variable
     after 3 seconds slide has been changed to next question
     after all we add += 1 to Question Number variable and call switch case
*/
const checkAlert = (num) => {
    if (num) {
        Resualt.push(20)
        Swal.fire({
            icon: 'success',
            title: 'درسته!',
            text: 'پاسخ کاملا صحیح است.',
            timer: 1500
        })
        setTimeout(() => {
            swiper.slideNext();
        }, 3000);


    } else {
        Resualt.push(0)
        Swal.fire({
            icon: 'error',
            title: 'ای بابا!',
            text: 'متاسفانه پاسخ غلط می باشد.',
            timer: 1500
        })

        setTimeout(() => {
            swiper.slideNext();
        }, 2000);
    }
    QuestionNumber += 1 
    checkCountries(QuestionNumber)

}

// check 2 arrays equals together
const arrayEquals = (userAnswer, CorrectAnswer) => {
    return Array.isArray(userAnswer) &&
        Array.isArray(CorrectAnswer) &&
        userAnswer.length === CorrectAnswer.length &&
        userAnswer.every((val, index) => val === CorrectAnswer[index]);
}

// set user answer as array and check it
const passValue = (val) => {
    const userAnswer = JSON.parse("[" + val + "]")

    if (arrayEquals(userAnswer, CorrectAnswer)) {
        checkAlert(true)
    } else {
        checkAlert(false)
    }
}

// for showing Resualt
document.getElementById('endQuiz').addEventListener('click',function(){
    const end = Resualt.reduce((a,b) => a+ b)
    Swal.fire({
        icon: 'warning',
        title: 'نمایش نتیجه',
        text: `نمره شما از 100 :
        ${end}`,
    })

},false)

// for retry quiz
document.getElementById('refresh').addEventListener('click',function(){
   location.reload()
},false)

