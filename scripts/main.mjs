import { updateDeviceAsync } from "./api.mjs";
import {
  getClearString,
  getDevice,
  getRoomName,
  getSchduleTime,
} from "./helper.mjs";
import { transcriptConfig } from "./transcript.config.mjs";

const speechButton = document.querySelector(".speak");
const stopSpeechButton = document.querySelector(".stop");

function runSpeechRecognition() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = "ar-EG";

  function abortSpeechRecognition() {
    recognition.stop();
  }

  recognition.onstart = function () {
    stopSpeechButton.addEventListener("click", abortSpeechRecognition);
  };

  recognition.onspeechend = abortSpeechRecognition;

  recognition.onresult = async function (event) {
    const transcript = getClearString(event.results[0][0].transcript);
console.log(transcript)
    const time = getSchduleTime(transcript, transcriptConfig.dayStatus);
    const roomName = getRoomName(transcript, transcriptConfig.rooms);
    let device = getDevice(transcript, transcriptConfig.open, 1);
    if (!device.Name) {
      device = getDevice(transcript, transcriptConfig.close, 0);
    }

    if (!device.Name) return;

    await updateDeviceAsync({ device, time, roomName })
  };

  recognition.start();
}

speechButton.addEventListener("click", runSpeechRecognition);
