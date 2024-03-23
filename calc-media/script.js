function calcMedia(){//Função para calcular Média
    const notas = []; // Array para guardar as notas
    notas[0] = document.getElementById('inota01');  //Nota01
    notas[1] = document.getElementById('inota02');  //Nota02
    notas[2] = document.getElementById('inota03');  //Nota03
    notas[3] = document.getElementById('inota04');  //Nota04

    const res = document.getElementById('iresult');  //Result

    //Função de Seta para verificar se todos os campos foram preenchidos
    //Se retornar true  os campos foram todos preenchidos caso contrario false
    const inputFilled = () =>{ 
        for(let v of notas){
            if(v.value.length === 0 || Number(v.value) < 0){return false};
        }
        return true
    }

    //Se tdos os campos foram preenchidos
    if(inputFilled()){
       let some = 0;    //Declarar variavel de soma

       for(let v of notas){ //Passat por todos os elementos da Array notas
            some+= Number(v.value); //Somando o valor dos elementos ao some
       }
       some /= notas.length;    //Dividindo pelo comprimento da array notas para obter a media
       res.innerHTML = some;    //Escrevendo o resultado
    }else{
        //Menssagem de erro
        window.alert('[Erro]Coloque notas de 0 á 10 nos campos');
    }

}