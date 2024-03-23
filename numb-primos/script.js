const inputNum = document.getElementById('inum');    //Variavel do Input
const aviso = document.getElementById('iaviso');    //Variavel do aviso
const res = document.getElementById('ires');        //Variavel para colocar a resposta na div


//Functon exenciais
function verfNumber(ele){//Verificar se o argumento é numero
    for(let n of '1234567890'){
        if(ele === n){
            return true
        }
    }
    return false
}

function avisoErro(input=''){
    for(let i = 0; i < input.length; i++){
        if(!verfNumber(input[i]) && input[i] !== ','){
            let msg = 'Preencha apenas com números naturais'
            if(aviso.innerHTML !== msg)aviso.innerHTML = msg;
            break;
        }
        if(aviso.innerHTML !== '')aviso.innerHTML = '';
    }
}


//Função para verificar se o número  é primo
function resNumPrimo(){
    res.innerHTML = '';


    if(inputNum.value.length > 0){   //Se o input tiver alguma numero
        let numValue = '';//Variavel que rescreverar os caracteres passados por 'inputNum'
        let num = [];//Lista para os numeros
        let index = 0; //Variavel que armazena o index de num


        //Função para verificar se o parametro é um numero primo
        function numPrimos(n){
            for(let i = 2; i < n; i++){//Laço de repetição para 'i' receber todos os numeros que são maior que 1 e menor que 'n'
                if(Number.isInteger(n/i)){return false}//Retorne false se a divisão de 'n' com 'i' for um numero Inteiro
            }
            return true;//Retorne true
        }

    

        for(let i = 0; i < inputNum.value.length;i++){//Esse laço ira tirar todos os caracteres que não são numeros e nem virgula (,)
    
            if(verfNumber(inputNum.value[i])){//Se o caracter for um número
                numValue+= inputNum.value[i];//Adicionar caracter ao 'numValue'
    
            }else if(inputNum.value[i] === ','){//Mas se for uma virgula ','
    
                //Se o cumprimento de 'numValue' for maior que 0 E o último caracter adicionado não for uma virgula E o proximo caracter que será adicionado for um numero
                if(numValue.length > 0 && numValue[numValue.length - 1] !== ',' && (inputNum.value[i+1] !== ',' || inputNum.value[i+1] !== undefined) ){
                    numValue+= inputNum.value[i];//Adicionar caracter ao 'numValue'
                }
            }
        }


        //Leço para adicionar os numeros ao Array 'num'
        for(let ele of numValue){
            if(ele ===','){//Se o caracter a adicionar for virgula ','
                index++;//Pular para o procimo elemento

            }else{//Se não
                //Se 'num[index]' for indefinido o mesmo recebe o valor de 'ele', Se 'num[index]' tiver um elemento concatene o 'ele' ao elemento
                num[index] = num[index] === undefined ? num[index]=ele  : num[index] += ele ;  
            }
        }                

        //Variaveis que armazenara numeros primos e outra que armazenara numeros não primos
        let listPrimos, listNoPrimos;

        //Vairiavel que armazena os elementos mais não armazena os repetidos
        const numNoRepeat = num.filter(function(este, i){
            return num.indexOf(este) === i;
        })


        //Corrigindo Valor de 'inputNum' para não ter caracteres não suportados, numeros repitidos nem espaços
        inputNum.value = numNoRepeat.join();
        //Resetando aviso
        aviso.innerHTML = '';


        //Laço de repetição que adiciona numeros primos e maiores que 1 ao Array 'listPrimos' e adiciona numeros não primos ao Array 'listNoPrimos'
        for(let ele of numNoRepeat){
            if(Number(ele) > 1 && numPrimos(Number(ele))){
                listPrimos = listPrimos === undefined ? listPrimos = ele : listPrimos+=`, ${ele}`;
            }else if(Number(ele) !== 0){
                listNoPrimos = listNoPrimos === undefined ? listNoPrimos = ele : listNoPrimos+=`, ${ele}`;
            }
        }

        //Se 'listPrimos' for diferente de indefinido, mostre a mensagem de numeros primos a div 'res' 
        if(listPrimos !== undefined){

            res.innerHTML+= `Número(s) Primo(s): ${listPrimos}<br>`;

        }
        //Se 'listNoPrimos' for diferente de indefinido, mostre a mensagem de numeros não primos a div 'res' 
        if(listNoPrimos !== undefined){

            res.innerHTML+= `Número(s) Não Primo(s): ${listNoPrimos}<br>`;
        }

        //Se 'res' tiver conteudo: display de 'res' igual a 'block'
        if(res.innerHTML !== ''){res.style.display = 'block';}
        

    }else{//Caso não tiver alerta
        let msg = 'Digite algum numero'
        if(aviso.innerHTML !== msg){aviso.innerHTML = msg}
        //Display igual a 'none'
        res.style.display = 'none';
    }            
}