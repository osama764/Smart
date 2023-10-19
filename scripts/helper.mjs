// function getDevice(transcript, commands, status) {
//   const transcriptSplit = transcript.split(" ");

//   const commandIndex = transcriptSplit.findIndex((word) =>
//     commands.includes(word)
//   );
//   if (commandIndex === -1) return { Name: "", status: false };

//   const deviceName = transcriptSplit[commandIndex + 1];
//   if (!transcriptSplit.includes(deviceName)) return { Name: "", status: false };

//   return { Name: deviceName, status };
// }

// function getSchduleTime(transcript, dayStatusCommands) {
//   const transcripSplit = transcript.split(" ");
//   const TIME_REGX = /\d+:\d+/;

//   const time = transcript.match(TIME_REGX);
//   if (!time || !time[0]) return;
//   const timeByHourAndMins = time[0].trim().split(":");
//   const timeDate = new Date().setHours(
//     timeByHourAndMins[0],
//     timeByHourAndMins[1]
//   );

//   const isNightDay = transcripSplit.some((word) =>
//     dayStatusCommands.night.includes(word)
//   );
//   if (isNightDay) {
//     return new Date(timeDate).setHours(new Date(timeDate).getHours() + 12);
//   } else {
//     return timeDate;
//   }
// }

// function getRoomName(transcript, rooms) {
//   const transcriptSplit = transcript.split(" ");
//   const roomNameIndex = transcriptSplit.findIndex((word) =>
//     rooms.includes(word)
//   );
//   if (roomNameIndex === -1) return "";

//   const roomName = transcriptSplit[roomNameIndex + 1];
//   if (!roomName) return "";

//   return roomName;
// }

// function getClearString(word) {
//   return word.replace(".", "").replace("?", "").replace("،", "").trim();
// }

// export { getDevice, getSchduleTime, getClearString, getRoomName };

function getDevice(transcript, commands, status) {
  const transcriptSplit = transcript.split(" ");

  const commandIndex = transcriptSplit.findIndex((word) =>
    commands.includes(word)
  );
  if (commandIndex === -1) return { Name: "", status: false };

  const deviceName = transcriptSplit[commandIndex + 1];
  if (!transcriptSplit.includes(deviceName)) return { Name: "", status: false };

  return { Name: deviceName, status, nameImage: "" };
}

function getSchduleTime(transcript, dayStatusCommands) {
  const transcripSplit = transcript.split(" ");
  const TIME_REGX = /\d+:\d+/;

  const time = transcript.match(TIME_REGX);
  if (!time || !time[0]) return;
  const timeByHourAndMins = time[0].trim().split(":");
  const timeDate = new Date().setHours(
    timeByHourAndMins[0],
    timeByHourAndMins[1]
  );

  const isNightDay = transcripSplit.some((word) =>
    dayStatusCommands.night.includes(word)
  );
  if (isNightDay) {
    return new Date(timeDate).setHours(new Date(timeDate).getHours() + 12);
  } else {
    return timeDate;
  }
}

function getRoomName(transcript, rooms) {
  const transcriptSplit = transcript.split(" ");
  const roomNameIndex = transcriptSplit.findIndex((word) =>
    rooms.includes(word)
  );
  if (roomNameIndex === -1) return "";

  const roomName = transcriptSplit[roomNameIndex + 1];
  if (!roomName) return "";

  return roomName;
}

function getClearString(word) {
  return word.replace(".", "").replace("?", "").replace("،", "").trim();
}

export { getDevice, getSchduleTime, getClearString, getRoomName };
