const eleList = document.querySelector('#list-items');//Váriavel constante que armazena o elemento com class '.list-items'

const nameItemDefault = 'Item';//Nome/Valor Oadrão dos itens
const inputValueDefault = 'EDIT'//Valor padrão dos botoes
var indexItems = 0;//Index do item atual

function changeNameList(ele){
    let parent = ele.parentNode;

    ele.style.display = 'none';
    parent.children[1].style.display = 'block';
    parent.children[1].focus();
}

function saveNameList(ele){
    let parent = ele.parentNode;

    if(ele.value === ''){ele.value = parent.children[0].innerHTML
    }else{parent.children[0].innerHTML = ele.value;}
    
    ele.style.display = 'none';
    parent.children[0].style.display = 'block';
}

//Função para deletar item
function delItem(btnDel){
    //Váriavel que obtem o Node pai do paremetro
    const parent = btnDel.parentNode.parentNode.parentNode;
    //Remover o elemento 'parent' de 'eleList'
    eleList.removeChild(parent);

    //Diminuindo o indexItem a cada item deletado
    if(indexItems > 0)indexItems--;

}



function concludeItem(btnMark){
    const parent = btnMark.parentNode.parentNode.parentNode;
    const eleNameItem =  parent.children[0].children[0];

    switch(btnMark.value){
        case 'NoConclude':
            btnMark.value = 'Conclude';
            btnMark.style.color = '#98DAEB';
            eleNameItem.value = 'Conclude';
            eleNameItem.style.cursor = 'pointer';
            eleNameItem.style.textDecoration = 'line-through 2px';
            break;
        case 'Conclude':
            btnMark.value = 'NoConclude';
            btnMark.style.color = '#000';
            eleNameItem.value = 'NoConclude';
            eleNameItem.style.cursor = 'text';
            eleNameItem.style.textDecoration = 'none';
            break;
    }
}

function resetOptions(element=undefined){
    const eleBtnOption = document.querySelectorAll('.content-opt');

    eleBtnOption.forEach(ele=>{
        if(ele !== element)ele.style.display = 'none'
    })
}

function saveNameItem(ele){
    let eleItem = ele.parentNode.parentNode

    if(ele.value === ''){ele.value = eleItem.id};
    if(ele.previousSibling.innerHTML !== ele.value){ele.previousSibling.innerHTML = ele.value;}
    ele.style.display = 'none';
    ele.previousSibling.style.display = 'inline-block';
}

function editNameItem(ele){
    resetOptions();

    if(ele.value !== 'Conclude'){
        if(ele.nextSibling.value !== ele.innerHTML){ele.nextSibling.value = ele.innerHTML};
        ele.style.display = 'none';
        ele.nextSibling.style.display = 'inline-block';
        ele.nextSibling.focus();
    }
}

function moreOptions(ele){
    let elePrevious = ele.previousSibling;
    resetOptions(elePrevious);
    if( elePrevious.style.display === 'flex'){
        elePrevious.style.display = 'none';
    }else{
        elePrevious.style.display = 'flex';
    }
}



//Função que adiciona itens a lista
function addItem(ele){
    let parent = ele.parentNode
    resetOptions();

    const Item = document.createElement('li');//Váriavel Constant que armazena a criação do elemento 'li'
    const ContNameItem = document.createElement('div');//Váriavel Constant que armazena a criação do elemento 'div'
    const NameItem = document.createElement('div');//Váriavel Constant que armazena a criação do elemento 'div'
    const InputNameItem = document.createElement('input');//Váriavel Constant que armazena a criação do elemento 'input'
    const ContBtn = document.createElement('div');//Váriavel Constant que armazena a criação do elemento 'div'
    const ContOptions = document.createElement('div');//Váriavel Constant que armazena a criação do elemento 'div'
    const BtnDelItem = document.createElement('button');//Váriavel Constant que armazena a criação do elemento 'button'
    const BtnMarkConclude = document.createElement('button');//Váriavel Constant que armazena a criação do elemento 'button'
    const BtnMoreOptions = document.createElement('button');//Váriavel Constant que armazena a criação do elemento 'button'

    //Adicionando atributos
    //Atributos de Class
    Item.setAttribute('class', 'item');
    Item.setAttribute('id', `${nameItemDefault}-${indexItems}`);
    ContNameItem.setAttribute('class', 'content-name-item');
    NameItem.setAttribute('class','name-item');
    InputNameItem.setAttribute('class', 'edit-name-item');
    ContBtn.setAttribute('class', 'content-btn');
    ContOptions.setAttribute('class', 'content-opt');
    BtnDelItem.setAttribute('class', 'btn-items');
    BtnMarkConclude.setAttribute('class', 'btn-items');
    BtnMoreOptions.setAttribute('class', 'btn-more-opt');
    //Outros Atributos
    NameItem.setAttribute('style','display:none');
    NameItem.setAttribute('value','NoConclude');
    NameItem.setAttribute('onclick','editNameItem(this)');
    InputNameItem.setAttribute('type', 'text');
    InputNameItem.setAttribute('onblur', 'saveNameItem(this)');
    ContOptions.setAttribute('style', 'display: none');
    BtnDelItem.setAttribute('onclick', 'delItem(this)');
    BtnMarkConclude.setAttribute('value', 'NoConclude');
    BtnMarkConclude.setAttribute('onclick', 'concludeItem(this)');
    BtnMoreOptions.setAttribute('onclick', 'moreOptions(this)');

    //icons
    const iconDel = document.createElement('span');
    iconDel.setAttribute('class', 'material-symbols-outlined')
    iconDel.appendChild(document.createTextNode('delete'))
    const iconCheck = document.createElement('span');
    iconCheck.setAttribute('class', 'material-symbols-outlined')
    iconCheck.appendChild(document.createTextNode('check'));
    const iconMore = document.createElement('span');
    iconMore.setAttribute('class', 'material-symbols-outlined')
    iconMore.appendChild(document.createTextNode('more_vert'));
    
    BtnDelItem.appendChild(iconDel);
    BtnMarkConclude.appendChild(iconCheck);
    BtnMoreOptions.appendChild(iconMore);


    //Instanciando os Nodes
    ContNameItem.appendChild(NameItem);
    ContNameItem.appendChild(InputNameItem);
    ContOptions.appendChild(BtnDelItem);
    ContOptions.appendChild(BtnMarkConclude);
    ContBtn.appendChild(ContOptions);
    ContBtn.appendChild(BtnMoreOptions);
    Item.appendChild(ContNameItem);
    Item.appendChild(ContBtn);

    eleList.appendChild(Item);

    parent.href = `#${Item.id}`

    setTimeout(()=> {InputNameItem.focus();},1);

    //Incrementado indexItems a cada item criado
    indexItems++;
    
};