# Alexa Skills Kit SDK for Node.js with Express
Simple Hello World Skill built using [alexa-skills-kit-sdk-for-nodejs](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs). This skill demonstrates the use of Express server for handling Alexa requests.

Also see [Alexia](https://github.com/Accenture/alexia) - an alternative framework for building Alexa skills in Node.js

## Quick start
- `npm install`
- `npm start`
- send `HelloWorldIntent` request (see below) to `localhost:3000` using f.e. [Postman](https://www.getpostman.com/)

```json
{
  "session": {
    "attributes": {},
    "sessionId": "1234",
    "application": {
      "applicationId": "amzn1.echo-sdk-ams.app.123"
    },
    "user": {
      "userId": "test_user"
    },
    "new": false
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "request_id_123",
    "timestamp": 1449829632387,
    "intent": {
      "name": "HelloWorldIntent",
      "slots": {}
    }
  }
}
```
