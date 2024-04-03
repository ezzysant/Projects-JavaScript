const base_words = {
    animais: ["abelha","abutre","águia","alce","alpaca","andorinha","anta","aranha","arara","atum","avestruz","babuíno","bacalhau","badejo","bagre","baleia","barata","barracuda","beija-flor","bem-te-vi","bezerro","bode","boi","borboleta","búfalo","cabra","cachorro","cágado","camarão","camelo","camundongo","canário","capivara","cascavel","castor","cavalo","chimpanzé","chinchila","coala","cobra","coelho","crocodilo","dinossauro","dodô","doninha","dromedário","égua","elefante","ema","enguia","escorpião","faisão","falcão","flamingo","foca","formiga","frango","furão","hamster","harpia","hiena","hipopótamo","iaque","íbis","iguana","inhambu","jabuti","jacaré","jacu","jaguar","jegue","jiboia","joaninha","kinguio","kiwi","krill","lagarta","lagartixa","lagarto","lagosta","leão","lebre","lêmure","leopardo","lobo","lontra","macaco","mamute","mariposa","marisco","marmota","marreco","mergulhão","merluza","mico","minhoca","morcego","mosquito","nambu","neon","onça","orangotango","orca","ornitorrinco","ostra","ouriço","ovelha","panda","pantera","papagaio","pardal","pássaro","pato","pavão","peixe","periquito","pica-pau","pinguim","porco","porco-espinho","quati","queixada","quero-quero","rã","raposa","ratazana","rato","rena","rinoceronte","rouxinol","sabiá","sagui","salamandra","salmão","sapo","saúva","suricate","tamanduá","tarântula","tartaruga","tatu","texugo","tico-tico","tigre","toupeira","touro","truta","tubarão","tucano","urso-panda","urso","urubu","vaca","vaga-lume","veado","vespa","víbora","xangó","xaréu","ximango","zangão","zebra","zebu"],
    objetos : ["ábaco","abajur","abre-latas","açucareiro","agogô","agulha","alaúde","alfinete","alforje","algema","alicate","almofada","almofariz","ampulheta","âncora","anel","antena","anzol","apagador","apito","apontador","aquecedor","arado","arco","armadura","aro","arpão","aspirador","astrolábio","azulejo","bacia","balaio","balança","balde","bambolê","banco","bandeira","bandolim","batuta","bazuca","bengala","berço","berimbau","bicicleta","bidê","bigorna","binóculo","biombo","biruta","bisturi","boia","bola","boneca","borracha","botão","botija","brinco","bule","bumerangue","bússola","cabide","cadeado","cadeira","caderno","cajado","calculadora","cálice","campainha","candeeiro","candelabro","caneca","caneta","canivete","capa","capacete","cassete","cassetete","castiçal","cata-vento","celular","chicote","chinelo","chupeta","cinzeiro","clipe","colchão","colher","comando","computador","copo","dado","daguerreótipo","dardo","dedal","delineador","dentadura","descascador","desentupidor","desfibrilador","desodorante","despertador","detergente","diábolo","diadema","diamante","diapasão","diário","dicionário","didjeridu","dinamite","discman","disco","disquete","divã","dobradiça","dominó","draga","dreno","drone","dvd","echarpe","edredom","elástico","envelope","enxada","escada","escopeta","escorredor","escova","escudo","escumadeira","esfregão","esmalte","espada","espanador","esparadrapo","espátula","espelho","espingarda","espiral","esponja","espremedor","esquadro","estátua","esteira","estetoscópio","estojo","estribo","etiqueta","extintor","faca","fagote","fantoche","farol","fax","ferradura","ferro","fichário","filmadora","filtro","fio","fita","fivela","flauta","flecha","floreira","focinheira","fogão","foguete","foice","folha","fórceps","frasco","freezer","frigideira","frigobar","fritadeira","fruteira","funil","furadeira","gaiola","gaita","galheteiro","gancho","gangorra","ganzá","garfo","gargantilha","garrafa","gaveta","geladeira","gibi","gilete","giz","gorro","gramofone","grampeador","grampo","granada","gravata","grelha","grinalda","grua","guarda-chuva","guardana"]
}

const ele_discover_word = document.querySelector('.discover_word');//Elemento onde ficara a palavra para adivinhar
const ele_theme = document.querySelector('.theme');//Elemento onde ficara o tema
const ele_buttons = document.querySelectorAll('.keyboard button');//Elemento Teclas
const forca = document.querySelector('.forca');//Váriavel que armacena a imagem da forca;
const conteiner_aviso = document.querySelector('.content_aviso')//Elemento conteiner aviso
const aviso_txt = document.querySelector('.aviso_txt');//Váriavel que recebe o elemento da class aviso_txt;
const reveal_word = document.querySelector('.reveal_word');//Váriavel que recebe o elemento da class reveal_word;
const chaces_max = 7;//Maximo de chaces

let word = '', //Essa áriavel armazenara a palavra da vez
    game = 0, //Váriavel que verifica se o game tá rodando
    chaces = chaces_max,//Váriavel qu recebe o total de chaces
    arrBtnPress = []; //Array que conterá todas as letras já pressionadas


//Função que escolhera o tema e a palavra da vez
function chosseThemeAndWord(){
    //Está váriavel recebera um Array com os nomes das propriedades que são os temas
    let arrTheme = Object.keys(base_words),
        arrWord = null,
        theme = '';

    theme = arrTheme[Math.floor(Math.random() * arrTheme.length)];//Váriavel recebera um tema aleatório dentro do Array que contem os temas

    arrWord = base_words[theme];//Váriavel que recebera um Array com todas as palavras do tema escolhido
    
    word = arrWord[Math.floor(Math.random() * arrWord.length)];//Váriavel que recebera a paçavra da vez

    ele_theme.innerHTML = theme.toUpperCase();//O elemento recebera o tema

    for(let l of word){//Essa laço de repetição aplicara o tanto de letras que tem com o simbolo underLine'_'
        ele_discover_word.innerHTML += l ==='-' ? l : '_';
    }

    game=1;//Para rodar o game quando escolher o tema e a palavra da vez
}

function changeColorButton(color='#000',btn){
    btn.style.color=color;
    btn.style.borderColor=color;
}

//Função para verificar se tem a letra determinada pelo parametro na palavra da vez 'word'
function haveThisLetter(l/*letra*/,button/*botão pressionado*/){
    arrBtnPress.push(l);

    let arrEleWord = ele_discover_word.innerHTML.split(''),//Váriave que recebera as letras á decobrir em formato de Array;
        letter = '';//Váriavel que recebara a letra da vez

    switch(l){//Esse switch verificara se é uma vogal ou 'C'
        case 'A':
            letter = 'AÁÀÃÂ';
            break;
        case 'E':
            letter = 'EÉÈÊ';
            break;
        case 'I':
            letter = 'IÍÌÎ';
            break;    
        case 'O':
            letter = 'OÓÒÕÔ';
            break;
        case 'U':
            letter = 'UÚÙÛ';
            break;
        case 'C':
            letter = 'CÇ';
            break;
        default:
            letter = l;
            break;
    }
 
    for(let i = 0; i < word.length;i++){//Esse laço de repetição percorre toda a palavra 'word'; 
        for(let j of letter){//Esse laço pecorre todas as letras em letter se tiver mais de uma letra;
            if(word[i] === j.toLocaleLowerCase()){arrEleWord[i] = j}//Se a letra na posição 'word[i]' for igual a letra da vez 'j' : Então posição 'arrEleWord[i]' recebera a letra da vez 'j'; 
        }
    }

    //Se a palavra mostrada no elemeto para descobri a palavra for diferente da string de 'arrEleWord'
    if(ele_discover_word.innerHTML !== arrEleWord.join('')){
        ele_discover_word.innerHTML = arrEleWord.join('');//O elemto que contem a palavra será igual a 'arrEleWord'

        changeColorButton('#0f0',button);

        if(!ele_discover_word.innerHTML.includes('_')){
            game=0;

            conteiner_aviso.style.display = 'flex';//Conteiner do aviso ficar visivel
            aviso_txt.innerHTML = 'Você Ganhou!!!'//Menssagem de Perdeu
            reveal_word.innerHTML = word.toUpperCase();//Revelando palavra
        }
    }else{
        chaces--;
        forca.src = `assets/img/forca/forca_${chaces}.png`

        changeColorButton('#f00',button);

        if(chaces<=0){
            game=0;

            conteiner_aviso.style.display = 'flex';//Conteiner do aviso ficar visivel
            aviso_txt.innerHTML = 'Você Perdeu'//Menssagem de Perdeu
            reveal_word.innerHTML = word.toUpperCase();//Revelando palavra

        }
    }
}

//Função para resetar game
function resetGame(){
    conteiner_aviso.style.display = 'none';
    ele_discover_word.innerHTML='';//Resetando elemento que contem a palavra da vez
    word = ''; //Essa áriavel armazenara a palavra da vez
    game = 0; //Váriavel que verifica se o game tá rodando
    chaces = chaces_max;//Váriavel qu recebe o total de chaces
    arrBtnPress = []; //Array que conterá todas as letras já pressionadas

    ele_buttons.forEach((button)=>{//Resetando cor dos botões
        changeColorButton('#000',button);
    })

    chosseThemeAndWord();
}

//Esse código serve para quando apertar algum dos botões com carácteres ele chamar uma função;
ele_buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        let buttonText = button.innerHTML;
        if(game && !arrBtnPress.includes(buttonText)){
            haveThisLetter(buttonText,button)
        };
    })
})

//Esse código serve para gerar a palavra automaticámente quando o site carregar
window.addEventListener('load',chosseThemeAndWord);
