const eleDice = document.querySelector('.dice');
const eleRes = document.querySelector('.res')

function roll(ele){
    eleRes.innerHTML = '';

    ele.setAttribute('onclick', '');

    let arrLado = [0,90,180,270];
    let folga = 12;
    let chosseFolga=Math.floor(folga * 2 * Math.random()) - folga;
    let tmpRollDice = 2.5;
    let res = '';

    eleDice.style.transition = 'none';
    eleDice.style.transform = `rotateY(-10deg) rotateX(-10deg)`;

    setTimeout(()=>{
        eleDice.style.transition = `transform ${tmpRollDice}s ease-out`;

        let rtY = arrLado[Math.floor(Math.random() * arrLado.length)];
        let rtX = arrLado[Math.floor(Math.random() * arrLado.length)];

        eleDice.style.transform = `rotateY(${rtY + 720 + chosseFolga}deg) rotateX(${rtX + 720 + chosseFolga}deg)`

        if(rtY === 90){res='4'}
        else if(rtY === 270){res='3'}
        else{
            switch(rtY + rtX){
                case 0:
                    res='1';
                    break;
                case 360:
                    res='1';
                    break;
                case 180:
                    res='6';
                    break;
                case 270:
                    res='2';
                    break;
                default:
                    res='5';
                    break;
            }
        }

        setTimeout(()=>{
            eleRes.innerHTML = res;
            ele.setAttribute('onclick', 'roll(this)');
        },tmpRollDice * 1000)
        
    }, 1);

    


}