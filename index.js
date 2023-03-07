var num = document.querySelectorAll(".drum");

for (var i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function () {
        var x = this.innerHTML;
		pressed(x);
		makeSound(x);

    });
}

document.addEventListener("keypress",function(event){
	
	makeSound(event.key);
	pressed(event.key);
});




function makeSound(key) {
    switch (key) {
        case "a":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "i":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    }
}

function pressed(x){
	var y = document.querySelector("."+ x);
	y.classList.add("pressed");
	setTimeout(() => {
		y.classList.remove("pressed");
	}, 100);
}
