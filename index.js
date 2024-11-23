const withButton= document.getElementById('withbtn');
const depButton= document.getElementById('depbtn');

const withInput= document.getElementById('withInput');
const depInput= document.getElementById('depInput');

const withBal= document.getElementById('with');
const depBal= document.getElementById('dep');
const bal= document.getElementById('bal');


let withdrawBalance =0;
let depositeBalance =0;
let balance =0;


depButton.addEventListener('click', ()=>{
    if(Number(depInput.value)<=0){
        alert("Enter a Valid Number")
    }else{
        depBal.textContent =  Number(depBal.textContent) + Number(depInput.value);
    bal.textContent =  Number(bal.textContent) + Number(depInput.value);

    }
})

withButton.addEventListener('click', ()=>{
    if(Number(withInput.value)<=0){
        alert("Enter a Valid Number")
    }
    else if(Number(bal.textContent)<0 || Number(withInput.value)>=Number(bal.textContent) ){
        alert("NOT ENOUGH BALANCE");
    }
    else{
        withBal.textContent =  Number(withBal.textContent) + Number(withInput.value);
        bal.textContent =  Number(bal.textContent) - Number(withInput.value);
    }
})