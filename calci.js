(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(klm) {
            let value = klm.target.dataset.num;
            screen.value += value;
        })
    });
});

function solve() {
    let x = document.getElementById("resul").value
    let y = eval(x);
    document.getElementById("resul").value = y;

}