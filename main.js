const emailInput=document.querySelector('#emailInput')

const emailError=document.querySelector('#emailError')

const buton= document.querySelector('#btnSubmit')

buton.addEventListener('click',(e)=>{
    console.log(emailInput.value);

    validarEmail(emailInput.value,emailInput,emailError)
})


function validarEmail(valorInput,IdInput,IdError){
    let regExp=/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    if(regExp.test(valorInput)){
        ocultarError(IdInput,IdError)

    }else{
        verError(IdInput,IdError,'Please provide a valid email')
    }
}

function verError(IdInput,IdError,error){
    IdInput.style.border='1px solid red';// border border-SoftRed
    IdError.innerHTML=`<img class="absolute top-14 left-56 lg:left-72 " src="./images/icon-error.svg" alt="icon-error">
                        <p class="text-SoftRed pl-7 mt-2" >${error}</p>`;
}

function ocultarError(IdInput,IdError){
    IdInput.style.border="1px solid hsl(0, 36%, 70%)"
    IdError.innerHTML=``//quitar el mensaje de error
}
