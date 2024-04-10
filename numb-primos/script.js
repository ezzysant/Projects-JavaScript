const input_num = document.querySelector('#input-number-primo');//Váriavel do Input
const btn_verf = document.querySelector('.btn-verificar');//Váriavel do Botão de verificação
const ele_aviso = document.querySelector('#aviso');//Váriavel do aviso
const ele_res = document.querySelector('#resposta');//Váriavel para colocar a resposta na div

function numClear(num){//Essa função serve para tirar tudo que não é numero e separar o s numeros com virgula ','
    let numbers = '';//Váriavel que armazenara os números já limpos

    for(let i = 0; i < num.length;i++){//Laço de repetição
        if(/[0-9]/.test(num[i])){//Se for numero
            numbers+=num[i];//Concatenar á váriavel 'numbers'
        }else if(numbers && numbers[numbers.length - 1] !== ',' && /[0-9]/.test(num[i + 1])){//Se Não, Se a váriavel 'numCler' tiver aldum carácter E o último carácter de 'numbers' não for virgula ',' E o proximo carácter do paramatro 'num' for um número;
            numbers+=',';//Concatenar a 'numbers'
        }
    }

    return numbers;//Retornar 'numbers'
}

function isPrimo(num){//Essa função verifica se o parametro é um numero primo ou não
    for(let dividir = 2; dividir < num; dividir++){
        if(num%dividir===0)return false;
    }
    return true
}

function verifNumPrimo(num){//Essa função aplicara todas as função para verificar apenas numeros e separar os números primos e números não primos;
    let arrNumbers = [... new Set(numClear(num).split(',').sort((a,b)=> a - b))],//Essa váriavel armasenara o parametro limpo de cáracteres que não são números ou virgula E reorganizara em ordem crecente os numeros com o metodo sort((a,b)=>a-b) E dentro de um objeto Set() removera todos os números repetidos E com o spread operator "..." separara todos os valores do objeto dentro de um Array [ ]
    objNumbers = {primos:'',noprimos:''};

    for(let ele of arrNumbers){//Laço de repetição for ..of para verificar cada elemento do Array 'arrNumbers'
        if(Number(ele) > 1 && isPrimo(Number(ele))){//Se o elemento for maior que 1 e For número primo
            objNumbers.primos += objNumbers.primos ? ','+ele:ele;//Concatenar na propriedade 'primos' do 'objNumbers', Se tiver vazio concatene 'ele' se não concatene " ',' + ele "
        }else{//Se não
            objNumbers.noprimos += objNumbers.noprimos ? ','+ele:ele;//Concatenar na propriedade 'noprimos' do 'objNumbers', Se tiver vazio concatene 'ele' se não concatene " ',' + ele "
        }
    }

    if(objNumbers.primos){//Se tem caracteres na propriedade 'primos'
        ele_res.innerHTML += `Números Primos: ${objNumbers.primos} <br>`;//Concatenar a resposta no 'ele_res'
    }
    if(objNumbers.noprimos){//Se tem caracteres na propriedade 'noprimos'
        ele_res.innerHTML += `Números Não Primos: ${objNumbers.noprimos}`;//Concatenar a resposta no 'ele_res'
    }

    input_num.value = arrNumbers.join(',');//Aqui ele colocara no input_ele.value os numeros reorganizados;
}

//Evento de Click no botão .btn-verificar
btn_verf.addEventListener('click', ()=>{
    let num = input_num.value;//Váriavel que armazenara
    ele_res.innerHTML = '';//Reiniciando a resposta
    ele_aviso.innerHTML = '';//Reiniciando aviso
    if(num){
        verifNumPrimo(num)
    }
})

input_num.addEventListener('input',()=>{
    for(let letter of input_num.value){
        if(!/[0-9,]/.test(letter)){
            ele_aviso.innerHTML='Caracteres Invalidos';
            return;
        }
    }
    if(ele_aviso.innerHTML)ele_aviso.innerHTML = '';
})