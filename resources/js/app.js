
window.SpeechRecognition  = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

recognition.addEventListener('result', e => {
  var transcript;
  transcript = Array.from(e.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('');
  if(e.results[0].isFinal){
    finalData(transcript)
  }
});


document.getElementById('run').addEventListener("click", ()=>{
  recognition.start()
  // recognition.addEventListener('end', recognition.start);
});


const msg  = new SpeechSynthesisUtterance();
let voices = [];
speechSynthesis.addEventListener('voiceschanged', populateVoices);
function populateVoices(){
  voices = this.getVoices();
  msg.voice = voices[5];
}

const finalData = (data) => {
  var currentTime = new Date(),
      hours = currentTime.getHours(),
        minutes = currentTime.getMinutes();
    if (minutes < 10) {
    minutes = "0" + minutes;
    }

    var suffix = "AM";
    if (hours >= 12) {
      suffix = "PM";
      hours = hours - 12;
    }
    if (hours == 0) {
    hours = 12;
    }
  var times = hours + ":," + minutes + " " + suffix
  switch (data) {
    case "what is your name":
      msg.text = "my name is 9";
      break;
    case "who made you":
      msg.text = "my maker limon";
      break;
    case "how are you":
      msg.text = "I am Fine, and you";
      break;
    case "what is your mother name":
      msg.text = "I actually have quite a few mothers. Lots of talented women helped bring me to life.";
      break;
    case "what is your father name":
      msg.text = "Technically speaking, that'd be Limon. No big deal.";
      break;
    case "what time is now":
      msg.text = `${times}`;
      break;
    default: msg.text = "I'm sorry, I didn't catch than.";
      break;
  }

  
    
  console.log(data);
  msg.pitch = 1;
  speechSynthesis.speak(msg);
}


