const form = document.querySelector('form');
const bmi = (weight/((height*height)/10000)).toFixed(2)
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const messages = document.querySelector('#message')
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`;
    }else {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }
    if(bmi<14.5){
        messages.innerHTML = "low bmi"
    }else if(bmi>14.5&&bmi<24.5){
        messages.innerHTML = "normal"
    }else{
        messages.innerHTML = "high bmi"
    }
   
});