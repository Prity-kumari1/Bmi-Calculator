const form = document.querySelector("form");
//This usecase will give empty value
// const height = parseInt(document.querySelector('#height').value);  
form.addEventListener('submit', (el) => {
    el.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if (height === "" || height === 0 || isNaN(height) ) {
        result.innerHTML = `Please inter a valid height ${height}`
        height= ""
    }
    else if(weight === "" || weight=== 0 || isNaN(weight)){
        result.innerHTML = `Please inter a valid weight ${weight}`
        
    }
    else{
        const bmi = (weight/ ((height*height) / 10000)).toFixed(2);
        result.innerHTML = ` <span>${bmi} </span> `
    }
})