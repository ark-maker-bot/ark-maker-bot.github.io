// This is an example, actual implementation is on you to figure out.
// To start it just node into this file
const axios = require('axios').default
const startTime = Date.now()
const sessions = [
  {
    guildId: "6969",
    name: "Fake Guild 1",
    listeners: 10,
    timeElapsed: startTime, // 10 mins in milliseconds
    currSong: {
      name: "To-ryo-ka",
      author: "Camellia, Nanahira",
    },
  },
  {
    guildId: "6969420",
    name: "Fake Guild 2",
    listeners: 4,
    timeElapsed: startTime, // 10 mins in milliseconds
    currSong: {
      name: "deep end",
      author: "Lykke Li",
    },
  },
]

makeRequest()
setInterval(() => {
  makeRequest()
}, 10000)

function makeRequest() {
  axios({
    method: 'post',
    url: 'http://ark-maker-bot.github.io/tom/dashboard/api/sessions',
    headers: {
      "authorization": "rejgioprehjgiouwrhugi4rtwehjgiuoqh8o3q4t3#$TY#$TY45qh45qujih45H$%H%@$Q",
      "Content-Type": 'application/json'
    },
    data: {
      sessions,
    }
  })
}