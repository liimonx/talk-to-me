var transcript;
function speech() {
  window.SpeechRecognition  = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.addEventListener('result', e => {
    transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    console.log(transcript);
  });

  recognition.addEventListener('end', recognition.start);

  recognition.start();
}
speech()
