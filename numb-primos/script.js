const input_num = document.querySelector('#input-number-primo');//Váriavel do Input
const btn_verf = document.querySelector('.btn-verificar');//Váriavel do Botão de verificação
const ele_aviso = document.querySelector('#aviso');//Váriavel do aviso
const ele_res = document.querySelector('#resposta');//Váriavel para colocar a resposta na div

function isPrimo(num){//Essa função verifica se o parametro é um numero primo ou não
    for(let dividir = 2; dividir < num; dividir++){
        if(num%dividir===0)return false;
    }
    return true;
}

function verifNumPrimo(num){//Essa função aplicara todas as função para verificar apenas numeros e separar os números primos e números não primos;
    let arrNumbers = [... new Set(num.sort((a,b)=> a - b))],//Essa váriavel armazenara o parametro, com o metodo "sort((a,b)=>a-b)" reorganizara os números em ordem crescente, e isso tudo dentro de um objeto "new Set()" removera todos os números repetidos E com o spread operator "..." separara todos os valores do objeto dentro de um Array [ ].
    num_primos='',
    num_noprimos='';

    for(let ele of arrNumbers){//Laço de repetição for ..of para verificar cada elemento do Array 'arrNumbers'
        if(Number(ele) > 1 && isPrimo(Number(ele))){//Se o elemento for maior que 1 e For número primo
            num_primos += num_primos ? ','+ele:ele;//Concatenar na propriedade 'primos' do 'objNumbers', Se tiver vazio concatene 'ele' se não concatene " ',' + ele "
        }else{//Se não
            num_noprimos += num_noprimos ? ','+ele:ele;//Concatenar na propriedade 'noprimos' do 'objNumbers', Se tiver vazio concatene 'ele' se não concatene " ',' + ele "
        }
    }

    if(num_primos){//Se tem caracteres na propriedade 'primos'
        ele_res.innerHTML += `Números Primos: ${num_primos} <br>`;//Concatenar a resposta no 'ele_res'
    }
    if(num_noprimos){//Se tem caracteres na propriedade 'noprimos'
        ele_res.innerHTML += `Números Não Primos: ${num_noprimos}`;//Concatenar a resposta no 'ele_res'
    }

    input_num.value = arrNumbers.join(',');//Aqui ele colocara no input_ele.value os numeros reorganizados;
}

//Evento de Click no botão .btn-verificar
btn_verf.addEventListener('click', ()=>{
    let num = input_num.value.match(/\d+/g);//Váriavel que armazenara uma Array, o metodo ".match()" que entre os seus parenteses "()" tem um "RegEx" faz com que apenas números do "value" de "input_num" sejão itens nessa Array que iara ser retornada.
    ele_res.innerHTML = '';//Reiniciando a resposta
    ele_aviso.innerHTML = '';//Reiniciando aviso
    if(num!== null){//Se "num" for diferente de null
        verifNumPrimo(num);//Executar funcção
    }
    ele_res.style.visibility = ele_res.innerHTML ? 'visible':'hidden';//Se tever algo escrito no ele_res ele ficara visivel se não ficar escondido
})

//Evento Input no "input_num"
input_num.addEventListener('input',()=>{
    if(/[^\d,]/.test(input_num.value)){//Se o "value" de "input_num" conter algum caracter que seja diverete de numeros "0-9" ou virgula ","
        ele_aviso.innerHTML='Caracteres Invalidos';//Mensagem de caracter invalido
        return;//retornar
    }
    //Se o laço terminar

    //Se texti dentro do elemento "ele_aviso" estiver preenchido
    //Ele recebe uma string vazia
    if(ele_aviso.innerHTML)ele_aviso.innerHTML = '';
})
