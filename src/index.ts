import speech from "@google-cloud/speech"
// @ts-ignore
import * as recorder from 'node-record-lpcm16';

const client = new speech.SpeechClient({
  keyFilename: './****************-auth-key.json'
});

// BCP-47 language Code, e.g. en-US, es-ES
const languageCode = 'ja-JP';
const recognizeStream = client
  .streamingRecognize({
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: languageCode,
      enableSpeakerDiarization: true,
      model: 'latest_long',
    },
    interimResults: true,
  })
  .on('error', console.error)
  .on('data', (data) => {
    console.log(`Real time transcript : ${data.results[0]?.alternatives?.[0]?.transcript} [isFinal: ${data.results[0]?.isFinal}]`);
    if (data.results[0]?.isFinal) console.log("whole sentence :", data.results[0]?.alternatives?.[0]?.words?.map((w: any) => w.word)?.join(' '))
  });

// Create a writable stream to save the captured audio
const audioStream = recorder.record({
  sampleRate: 16000, // Sample rate (adjust as needed)
  channels: 1, // Mono audio
  audioType: 'raw', // Output audio type
}).stream();

audioStream.on('end', () => {
  recognizeStream.end();
});

audioStream.pipe(recognizeStream);

