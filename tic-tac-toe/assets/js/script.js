const ele_items = document.querySelectorAll('.items');
const ele_conteinerAviso = document.querySelector('.conteiner-aviso');
let turn= '1'
const contMax = 9;
let cont=contMax;

function start(){
    turn= '1'
    cont=contMax;

    ele_items.forEach(ele =>{ 
        ele.addEventListener('click', test); 
        ele.setAttribute('data-active', '0');
        ele.style.backgroundImage='none'
    });

    ele_conteinerAviso.style.display='none';
}

function test(){
    if(this.dataset.active === '0'){
        let parent=this.parentNode.children;
        let row=0,col=0,trs=0;

        this.dataset.active=turn;
        cont--;

        if(turn === '1'){
            turn = '2';
            this.style.backgroundImage = 'url(assets/image/cicle.png)'
        }else{
            turn = '1';
            this.style.backgroundImage = 'url(assets/image/x.png)'
        }
        
        for(let i = 0; i < 3; i++){
            row = 0;
            col = 0;
            trs = 0;

            for(let j = 0; j < 3; j++){
                if(parent[j + i * 3].dataset.active === this.dataset.active){
                    row++;
                }
            }

            for(let j = i; j <= i+6; j+=3){
                if(parent[j].dataset.active === this.dataset.active){
                    col++;
                }
            }

            if(i < 2){
                let cond = i === 0?8:6;
                for(let j = i * 2; j <= cond; j+=4-i*2){
                    if(parent[j].dataset.active === this.dataset.active){
                        trs++;
                    }
                }
            }
            if(row === 3 || col === 3 || trs ===3){
                break;
            }
        }

        if(row===3||col===3||trs===3){
            ele_conteinerAviso.style.display = 'flex';
            ele_conteinerAviso.children[0].innerHTML = `Player ${turn} Ganhou!!!`;
            ele_items.forEach(ele => ele.setAttribute('data-active', '3'));
        }else if(cont <= 0){
            ele_conteinerAviso.style.display = 'flex';
            ele_conteinerAviso.children[0].innerHTML = `Impate`;
            ele_items.forEach(ele => ele.setAttribute('data-active', '3'));
        }

    }
}