const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.buttons button');

let numAtual = '';
let calc = '';
let sinalAtual = '';

function updateResult(reset = false){
    result.innerHTML = reset ? 0 : numAtual;
    if(numAtual.length > 10){
        result.style.fontSize = `${5 - (numAtual.length/8)}em` 
    }else if(result.style.fontSize !== '5em'){
        result.style.fontSize = '5em';
    }
}

function addCalc(){
    if(numAtual){
        calc += numAtual.replace(',','.');
        numAtual='';
    }
}

function addNum(digito){
    if(numAtual.length < 16){
        if(sinalAtual){
            calc+=sinalAtual;
            sinalAtual='';
        }

        if(digito === ','){
            if(!numAtual){
                numAtual+='0'
            }
        }

        if(digito === '0' && !numAtual)return

        numAtual+=digito;

        updateResult();
    }
}

function addSinal(sinl){
    addCalc();
    if(calc){
        switch(sinl){
            case '÷':
                sinalAtual = '/';
                break;
            case '×':
                sinalAtual = '*';
                break;
            case '+':
                sinalAtual = '+';
                break;
            case '-':
                sinalAtual = '-';
                break;
            default:
                break;
        }
    }
}

function calcular(){
    addCalc();
    if(calc){
        let calculado = String(eval(calc));
        result.innerHTML = calculado.replace('.',',');
        calc = calculado;
    }
}

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let buttonText = button.innerHTML;
        if(/^[0-9,]+$/.test(buttonText)){
            addNum(buttonText);
        }else if(['÷','×','+','-'].includes(buttonText)){
            addSinal(buttonText);
        }else if(buttonText === '='){
            calcular();
        }else if(buttonText==='C'){
            calc='';
            numAtual='';
            sinalAtual='';
            updateResult(true);
        }else if(buttonText==='±'){
            numAtual = String(Number(numAtual)*-1)
        }else if(buttonText==='%'){
            numAtual = String(Number(numAtual)/10)
        }
    })
})