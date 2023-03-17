var buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        alert('Button ' + buttons[i].innerHTML + ' got clicked!');
    });
}