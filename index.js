var buttons = document.querySelectorAll(".drum");
var audioFileSource = "sounds/";

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        switch (this.innerHTML) {
            case "w":
                var audio = new Audio(audioFileSource + "tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio(audioFileSource + "tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio(audioFileSource + "tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio(audioFileSource + "tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio(audioFileSource + "snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio(audioFileSource + "crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio(audioFileSource + "kick-bass.mp3");
                audio.play();
                break;
            default:
                console.log("Unknown button: " + this.innerHTML);
        }
    });
}