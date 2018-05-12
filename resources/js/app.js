
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

function populateVoices(){
  voices = this.getVoices();
  msg.voice = voices[5];
}

const finalData = (data) => {
  
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
  
    default: msg.text = "sorry, I can understand, what you say";
      break;
  }

  console.log(data);

  speechSynthesis.speak(msg);
}
speechSynthesis.addEventListener('voiceschanged', populateVoices);