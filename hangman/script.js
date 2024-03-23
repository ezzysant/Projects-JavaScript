const base_words = {
    animais: ["abelha","abutre","águia","alce","alpaca","andorinha","anta","aranha","arara","atum","avestruz","babuíno","bacalhau","badejo","bagre","baleia","barata","barracuda","beija-flor","bem-te-vi","bezerro","bode","boi","borboleta","búfalo","cabra","cachorro","cágado","camarão","camelo","camundongo","canário","capivara","cascavel","castor","cavalo","chimpanzé","chinchila","coala","cobra","coelho","crocodilo","dinossauro","dodô","doninha","dromedário","égua","elefante","ema","enguia","escorpião","faisão","falcão","flamingo","foca","formiga","frango","furão","hamster","harpia","hiena","hipopótamo","iaque","íbis","iguana","inhambu","jabuti","jacaré","jacu","jaguar","jegue","jiboia","joaninha","kinguio","kiwi","krill","lagarta","lagartixa","lagarto","lagosta","leão","lebre","lêmure","leopardo","lobo","lontra","macaco","mamute","mariposa","marisco","marmota","marreco","mergulhão","merluza","mico","minhoca","morcego","mosquito","nambu","neon","onça","orangotango","orca","ornitorrinco","ostra","ouriço","ovelha","panda","pantera","papagaio","pardal","pássaro","pato","pavão","peixe","periquito","pica-pau","pinguim","porco","porco-espinho","quati","queixada","quero-quero","rã","raposa","ratazana","rato","rena","rinoceronte","rouxinol","sabiá","sagui","salamandra","salmão","sapo","saúva","suricate","tamanduá","tarântula","tartaruga","tatu","texugo","tico-tico","tigre","toupeira","touro","truta","tubarão","tucano","urso-panda","urso","urubu","vaca","vaga-lume","veado","vespa","víbora","xangó","xaréu","ximango","zangão","zebra","zebu"],
    objetos : ["ábaco","abajur","abre-latas","açucareiro","agogô","agulha","alaúde","alfinete","alforje","algema","alicate","almofada","almofariz","ampulheta","âncora","anel","antena","anzol","apagador","apito","apontador","aquecedor","arado","arco","armadura","aro","arpão","aspirador","astrolábio","azulejo","bacia","balaio","balança","balde","bambolê","banco","bandeira","bandolim","batuta","bazuca","bengala","berço","berimbau","bicicleta","bidê","bigorna","binóculo","biombo","biruta","bisturi","boia","bola","boneca","borracha","botão","botija","brinco","bule","bumerangue","bússola","cabide","cadeado","cadeira","caderno","cajado","calculadora","cálice","campainha","candeeiro","candelabro","caneca","caneta","canivete","capa","capacete","cassete","cassetete","castiçal","cata-vento","celular","chicote","chinelo","chupeta","cinzeiro","clipe","colchão","colher","comando","computador","copo","dado","daguerreótipo","dardo","dedal","delineador","dentadura","descascador","desentupidor","desfibrilador","desodorante","despertador","detergente","diábolo","diadema","diamante","diapasão","diário","dicionário","didjeridu","dinamite","discman","disco","disquete","divã","dobradiça","dominó","draga","dreno","drone","dvd","echarpe","edredom","elástico","envelope","enxada","escada","escopeta","escorredor","escova","escudo","escumadeira","esfregão","esmalte","espada","espanador","esparadrapo","espátula","espelho","espingarda","espiral","esponja","espremedor","esquadro","estátua","esteira","estetoscópio","estojo","estribo","etiqueta","extintor","faca","fagote","fantoche","farol","fax","ferradura","ferro","fichário","filmadora","filtro","fio","fita","fivela","flauta","flecha","floreira","focinheira","fogão","foguete","foice","folha","fórceps","frasco","freezer","frigideira","frigobar","fritadeira","fruteira","funil","furadeira","gaiola","gaita","galheteiro","gancho","gangorra","ganzá","garfo","gargantilha","garrafa","gaveta","geladeira","gibi","gilete","giz","gorro","gramofone","grampeador","grampo","granada","gravata","grelha","grinalda","grua","guarda-chuva","guardana"]
}
//const base_words = {animais: ["ornitorrinco"]}

//Váriavel que armazena as chances
const max_chances = 7
var chances = max_chances;
//Variavel de caracter que obtem posição das letras
const pos_letter = ' _ ';
//Variavel para armazenar a palavra da vez 
var word;
//Variavel que armazena se o jogo pode rodar ou não
var game = 1;
var hits = [];


const content_all = document.querySelector('.content_all');//Armazena o elemento com class '.content_all'
const forca = document.querySelector('.forca');//Armazena o elemento com class '.forca'
const theme_txt = document.querySelector('.theme');//Armazena o elemento com class '.theme'
const discover_word = document.querySelector('.discover_word');//Armazena o elemento com class '..discover_word'
const btn_keyboard = document.querySelectorAll('.btn-keyboard');//Armazena o elemento com class '.btn-keyboard'
const content_aviso = document.querySelector('.content_aviso');//Armazena o elemento com class '.content_aviso'
const aviso = document.querySelector('.aviso_txt');//Armazena o elemento com class '.aviso_txt'
const reveal_word = document.querySelector('.reveal_word');//Armazena o elemento com class '.reveal_word'



//Função para obter conprimento de um objeto
function lengthObj(obj){
    return Object.keys(obj).length;
}

//Função para ver se a letra é vogal
function hasAccentuation(l){
    for(let ele of 'AEIOUC'){
        if(l === ele){return true}
    }
    return false
}

//Função para escolher a palavra
function startGame(){
    //Variável que armazenara de forma aleatoria uma propriedade de 'base_words'
    let theme = Object.keys(base_words)[Math.floor(Math.random() * lengthObj(base_words))];
    //Variável que armazenara uma palavra de um Array de 'base_words[theme]' de forma aleatoria
    word = base_words[theme][Math.floor(Math.random() * base_words[theme].length)].toUpperCase();

    //Definindo texto dentro do elemento com class '.theme_txt'.
    //Passando texto para letras maiusculas.
    theme_txt.innerHTML = theme.toUpperCase();
    
    //Laço de repetição para adicionar o quanto de caracteres tem a palavra para descobrir
    for(let i = 0; i < word.length ; i++){
        //Varuavel ceracter de separação
        let carc_separ = '-';

        //Se 'word[i]' for igual a 'carc_separ' : 'hits[i]' será igual a ` ${carc_separ} `, Se não dor igual 'hits[i]' será igual a 'pos_letter'.
        hits[i] = word[i] === carc_separ ? hits[i] = ` ${carc_separ} ` : hits[i] = pos_letter;

        //OBS: a variavel 'carc_separ' está sendo armazenada como um Template String ` ${carc_separ} ` para que tenha espaços nos lados.

    }

    //'discover_word.innerHTML' é igual a string da Array 'hits'.
    discover_word.innerHTML = hits.join('');

    //alert(word);
    //alert(hits);
}

//Funçâo para resetar varievais e elementos
function resetGame(){
    game = 1;
    hits = [];
    chances=max_chances;

    //Tirando a janela de aviso
    if(content_aviso.style.display !== "none"){content_aviso.style.display = "none"}

    forca.src = 'images/forca/forca_7.png';

    //Restartando os botton e cores
    btn_keyboard.forEach((btn) =>{
        btn.value = btn.innerHTML;
        btn.style.color = "black";
        btn.style.borderColor = "black"
    })

    //Para deixar o fundo claro
    content_all.style.filter = 'brightness(100%)'

    startGame()
}

function tryLyrics(){
    if(game == 1 && this.value !== 'Pressed'){
        let letter;//Variavel para armazenar a letra da vez
        //window.alert(word)

        const btnPrecede = (color='#fff') =>{
            this.value = 'Pressed';//Já apertou esse botão
            this.style.color = color//Cor igual a verde
            this.style.borderColor = color//Cor da borda igual a verde
        }

        if(hasAccentuation(this.value)){//Se for uma vogal
            switch(this.value){
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
            }
        }else{//Se não
            letter = this.value;
        }

        for(let ele of letter){//Laço para cada elemento de letter
            for(let i = 0 ; i < word.length; i++){//Laço de repetição
                if(ele === word[i]){//Se elemento de 'letter' for igual a 'word[i]'
                    hits[i] = ` ${ele}`;//'hits[i]' é igual ap elemento
                }                
            }
        }

        //Se 'discover_word.innerHTML' for diferente de hits transformado em string
        if(discover_word.innerHTML !== hits.join('')){
            discover_word.innerHTML = hits.join('');//'discover_word.innerHTML' é igual a hits transformado em string

            //Mudando valor e cor do botão
            btnPrecede('#0f0');

            //Se nenhum dos elementos de 'hits' for igual a 'pos_letter';
            if(hits.every((ele) => {return ele!==pos_letter})){
                game = 0;//Parar o game

                setTimeout(()=>{
                    content_aviso.style.display = 'block';//Caixa de aviso aparece
                    aviso.innerHTML = 'Você Ganhou!!!';//texto  disendo que o usuario Ganhou
                    
                    reveal_word.innerHTML = word;

                    //Para deixar o fundo escuro
                    content_all.style.filter = 'brightness(20%)'
                }, 500//tempo para executar a função
                );
            }

        }else{//Se não
            //Mudando valor e cor do botão
            btnPrecede('#f00');
            
            if(chances > 0){//Se 'chances' for igual ou menor que 6
                chances--;//Incrementar 1 em 'chances'
                forca.src = `images/forca/forca_${chances}.png`//Mudar imagem da forca
            }else{//Se não
                game = 0;//Parar o game

                setTimeout(()=>{
                    content_aviso.style.display = 'block';//Caixa de aviso aparece
                    aviso.innerHTML = 'Você Perdeu';//texto  disendo que o usuario Perdeu

                    reveal_word.innerHTML = word;

                    //Para deixar o fundo escuro
                    content_all.style.filter = 'brightness(20%)'
                }, 500//tempo para executar a função
                );
            }

        }

    }

}

startGame();
//Sepre que clicar em uma letra chamar a funlão 'tryLyrics'
btn_keyboard.forEach(btn => {btn.addEventListener('click',tryLyrics)});

