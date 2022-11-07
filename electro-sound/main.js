//Execute the command play audio
function playSound(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

//Const responsible to store all "key" classes from the button element.
const keyList = document.querySelectorAll(".key");
let counter = 0;

//Loop that executes the playSound based on the id of each key.
for (let counter = 0; counter < keyList.length; counter++) {
  //Const responsible to store all "key" classes in a list.
  const key = keyList[counter];
  //Const responsible to store all "key_sound" classes from button element.
  const instrument = key.classList[1];
  //Const responsible to store the "sound_key_sound" id from audio element.
  const idAudio = `#sound_${instrument}`;

  // Anonymous Function that executes the sound on  key click.
  key.onclick = function () {
    playSound(idAudio);
  };

  //Anonymous Function that sets a new class in the classList section.
  key.onkeydown = function (e) {
    //It will check if the keywords pressed are Space or Enter, if so, the function executes the command.
    //If not, the command will not word and nothing happens.
    if (e.code === "Space" || e.code === "Enter") {
      key.classList.add("active");
    }
  };

  //Anonymous Function that deletes a class in the classList section.
  key.onkeyup = function () {
    key.classList.remove("active");
  };
}
