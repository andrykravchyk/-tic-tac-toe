'use strict'

let turn = 0;
let win = false;
let cells = document.getElementsByClassName('pixel');

document.querySelector('button').addEventListener('click', () =>{
    for (let i = 0; i <= cells.length-1; i++) {
        cells[i].innerHTML = '';
        cells[i].classList.remove('red');
    }
    turn = 0;
    win = false;
 })

document.getElementById('playground').addEventListener('click', (event) =>{
    if (event.target.className == 'pixel' && event.target.innerHTML === '') {
        if (turn % 2 === 0) {
            event.target.innerHTML = '&#10060;';
        } else {
            event.target.innerHTML = '&#11093;'; 
        }
        turn++;

        finishGame();
    }
    
    function finishGame() {
        
        function check(a,b,c) {
            if (!cells[a].innerHTML) return
            if (cells[a].innerHTML === cells[b].innerHTML && cells[b].innerHTML === cells[c].innerHTML) {
                cells[a].classList.add('red');
                cells[b].classList.add('red');
                cells[c].classList.add('red');
                if (cells[a].innerHTML === '❌') {
                    alert('Победил Игрок 1');
                    win = true;
                } else {
                    alert('Победил Игрок 2');
                    win = true;
                }
            }
        }

        check(0,1,2);
        check(3,4,5);
        check(6,7,8);
        check(0,3,6);
        check(1,4,7);
        check(2,5,8);
        check(0,4,8);
        check(2,4,6);

        if (turn === 9 && win === false) {
            alert('Ничья');
        }
    }
})

