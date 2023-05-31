let panda = document.getElementById("panda");
let fire = document.getElementById("fire");

document.addEventListener("keydown", function (event) {
    console.log(event.which)
    if (event.which == 38) {
        jump();
    }

});

function jump() {
    $('#panda').animate({ bottom: '100px' }, 500).animate({ bottom: 0 }, 500)
}
let isAlive = setInterval(function () {
    // let pandaTop = parseInt(window.getComputedStyle(panda).getPropertyValue("top"));
    // let fireLeft = parseInt(window.getComputedStyle(fire).getPropertyValue("left"));
    let panda = document.querySelector('#panda').getBoundingClientRect()
    let fire = document.querySelector('#fire').getBoundingClientRect()

    console.log(panda.top + 10 )
    console.log(fire.top)
    console.log(fire.height)

    // if (panda.left + panda.width >= fire.left && (panda.top + fire.height+10 >= fire.top +fire.height)) {
    if (panda.left + panda.width >= fire.left && panda.top + 10 >= fire.top - fire.height*2 ) {
        alert('game over')
    }

    // if (fireLeft < 90 && fireLeft > 0 && pandaTop >= 190) {
    //     alert(" GAME OVER !")
    // }

}, 100)

function fireAppear(){
    let num = 1 + Math.random() * (4 - 1);
    num = Math.trunc(num)
    $('#fire').html('')
    for(let i = 0;i<num;i++){
        $('#fire').append('<div class="fire"></div>')
    }
}
setInterval(fireAppear,2000)


