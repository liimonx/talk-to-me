
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

const finalData = (data) => {
  console.log(data);
}

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
msg.text = "This is so cool";



speechSynthesis.addEventListener('voiceschanged', populateVoices);