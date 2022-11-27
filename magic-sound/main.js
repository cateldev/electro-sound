//Execute the command play audio
function playSound(audio) {
  const button = document.querySelector(`[data-audio="${audio}"]`);
  button.classList.add("active");
}

// Nice way of playing sounds
var audio = new Audio(audio);
audio.play();

// Find the button information based on keyboardKey and run the playSound
function playTune(keyboardKey) {
  const itemIndex = keyMapper.findIndex(
    (item) => item.keyboardKey === keyboardKey
  );
  playSound(keyMapper[itemIndex].audio);
}

function stopTune(keyboardKey) {
  const item = keyMapper.find((item) => item.keyboardKey === keyboardKey);
  const button = document.querySelector(`[data-audio="${item.audio}"]`);
  button.classList.remove("active");
}

const keyMapper = []; // Mapper to store button information
const keyList = document.querySelectorAll(".key"); // responsible to store all "key" classes from the button element.
const body = document.querySelector("body");

//Loop that executes the playSound based on the id of each key.
for (let counter = 0; counter < keyList.length; counter++) {
  const key = keyList[counter]; // responsible to store all "key" classes in a list.
  const instrument = key.classList[1]; // responsible to store all "key_sound" classes from button element.
  const keyboardKey = key.classList[2]; // responsible to store the "KeyQ" from button element.
  const idAudio = `#sound_${instrument}`; // responsible to store the "sound_key_sound" id from audio element.
  const audio = key.dataset.audio;

  keyMapper.push({ instrument, idAudio, keyboardKey, audio });

  // Anonymous Function that executes the sound on  key click.
  key.onclick = function () {
    playTune(keyboardKey);
  };

  key.onmouseout = function () {
    key.classList.remove("active");
  };
}

//Anonymous Function that sets a new class in the classList section.
body.onkeydown = function (event) {
  playTune(event.code);
  //It will check if the keywords pressed are Space or Enter, if so, the function executes the command.
  //If not, the command will not word and nothing happens.
};

body.onkeyup = function (event) {
  stopTune(event.code);
};
