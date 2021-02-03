const textfield = document.getElementById("volume-number");
const slider = document.getElementById("volume-slider");
const icon = document.getElementById("volume-image");
const image = document.getElementById("sound-image");
const air = document.getElementById("radio-air-horn");
const car = document.getElementById("radio-car-horn");
const party = document.getElementById("radio-party-horn");
const audio = document.getElementById("horn-sound");
const button = document.getElementById("honk-btn");
const form = document.getElementById("party-horn-form")

textfield.addEventListener("input", updateVolume);
slider.addEventListener("input", updateVolume);
air.addEventListener("input", updateSound);
car.addEventListener("input", updateSound);
party.addEventListener("input", updateSound);
form.addEventListener("submit", playSound);

function updateVolume(event){
    newVol = event.currentTarget.value;
    textfield.value = newVol;
    slider.value = newVol;
    audio.volume= newVol/100;
    if(newVol == 0){
        button.disabled = true;
        icon.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
    }else{
        button.disabled = false;
        if(newVol < 34){
            icon.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        }else if(newVol < 67){
            icon.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        }else{
            icon.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        }
    }
}

function updateSound(event){
    newSound = event.currentTarget.id.substring(6);
    newImage = newSound;
    if(newImage == "car-horn"){
        newImage = "car";
    }
    image.src = "./assets/media/images/" + newImage + ".svg";
    audio.src = "./assets/media/audio/" + newSound + ".mp3";
}

function playSound(event){
    event.preventDefault();
    audio.play();
}
