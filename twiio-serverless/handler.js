const logo = require('asciiart-logo');

const VoiceResponse = require('twilio').twiml.VoiceResponse;

exports.handler = function (context, event, callback) {
  const twiml = new VoiceResponse();
  twiml.say(
    {
      language: 'ja-JP',
      voice: 'woman',
    },
    'testtest',
  );
  callback(
    null,
    twiml.toString()
  );
};
