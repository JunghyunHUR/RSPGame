const s = document.getElementById('s');
const r = document.getElementById('r');
const p = document.getElementById('p');
const npc = document.getElementById('npc');

function rsp(){

    let myGame = event.target.id;
    let message;
    const srp = ['s', 'r', 'p'];

    let com = srp[Math.floor(Math.random()*3)];

    if(myGame == 's'){
        switch(com){
            case 's':
                message = '비겼습니다';
                break;
            case 'r':
                message = '졌습니다';
                npc.classList.add('npcmove')
                break;
            case 'p':
                message = '이겼습니다';

                break;
        }
    }else if(myGame == 'r'){
        switch(com){
            case 's':
                message = '이겼습니다';
                break;
            case 'r':
                message = '비겼습니다';
                break;
            case 'p':
                message = '졌습니다';
                break;
        }
    }else if(myGame == 'p'){
        switch(com){
            case 's':
                message = '졌습니다';
                break;
            case 'r':
                message = '이겼습니다';
                break;
            case 'p':
                message = '비겼습니다';
                break;
        }

    }
    document.getElementById('playgame').innerHTML = message;
    document.getElementById('mrsp').innerHTML = trans(myGame);
    document.getElementById('crsp').innerHTML = trans(com);
    document.getElementById('mimg').src="images/"+myGame+'.png';
    document.getElementById('cimg').src="images/"+com+'.png';
}

npc.addEventListener('animationend', classrm, false);
function classrm(){
    npc.classList.remove('npcmove');
}

function trans(ts){
    let tss;
    switch(ts){
        case 's':
            tss = '가위'
            break;
        case 'r':
            tss = '바위'
            break;
        case 'p':
            tss = '보'
            break;
    }
    return tss;
}

s.addEventListener('click', rsp);
r.addEventListener('click', rsp);
p.addEventListener('click', rsp);
