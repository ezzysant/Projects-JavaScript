
let txt = "ábaco;abajur;abre-latas;açucareiro;agogô;agulha;alaúde;alfinete;alforje;algema;alicate;almofada;almofariz;ampulheta;âncora;anel;antena;anzol;apagador;apito;apontador;aquecedor;arado;arco;armadura;aro;arpão;aspirador;astrolábio;azulejo;bacia;balaio;balança;balde;bambolê;banco;bandeira;bandolim;batuta;bazuca;bengala;berço;berimbau;bicicleta;bidê;bigorna;binóculo;biombo;biruta;bisturi;boia;bola;boneca;borracha;botão;botija;brinco;bule;bumerangue;bússola;cabide;cadeado;cadeira;caderno;cajado;calculadora;cálice;campainha;candeeiro;candelabro;caneca;caneta;canivete;capa;capacete;cassete;cassetete;castiçal;cata-vento;celular;chicote;chinelo;chupeta;cinzeiro;clipe;colchão;colher;comando;computador;copo;dado;daguerreótipo;dardo;dedal;delineador;dentadura;descascador;desentupidor;desfibrilador;desodorante;despertador;detergente;diábolo;diadema;diamante;diapasão;diário;dicionário;didjeridu;dinamite;discman;disco;disquete;divã;dobradiça;dominó;draga;dreno;drone;dvd;echarpe;edredom;elástico;envelope;enxada;escada;escopeta;escorredor;escova;escudo;escumadeira;esfregão;esmalte;espada;espanador;esparadrapo;espátula;espelho;espingarda;espiral;esponja;espremedor;esquadro;estátua;esteira;estetoscópio;estojo;estribo;etiqueta;extintor;faca;fagote;fantoche;farol;fax;ferradura;ferro;fichário;filmadora;filtro;fio;fita;fivela;flauta;flecha;floreira;focinheira;fogão;foguete;foice;folha;fórceps;frasco;freezer;frigideira;frigobar;fritadeira;fruteira;funil;furadeira;gaiola;gaita;galheteiro;gancho;gangorra;ganzá;garfo;gargantilha;garrafa;gaveta;geladeira;gibi;gilete;giz;gorro;gramofone;grampeador;grampo;granada;gravata;grelha;grinalda;grua;guarda-chuva;guardana"
let txt2 = ""

for(let i = 0; i < txt.length; i++){
    if(txt2 === ""){
        txt2+= '"'
    }
    if(txt[i] !== ';'){
        txt2+= txt[i]
    }else{
        txt2+='"';
        txt2+=',';
        txt2+='"';
    }
    
}


console.log(txt2)

/*
function countProperties(obj) {
    return Object.keys(obj).length;
}

const obj = {
    a:'abca',
    b:'abc',
    c:'abc'
}

console.log(obj.a.length);
*/