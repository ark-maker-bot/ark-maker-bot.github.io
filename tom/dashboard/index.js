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

<!DOCTYPE html>
<header>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="stylesheet" type="text/css" media="screen" href="../main.css" />
  <title>DJ Tom - newest music stream bot</title>
  <meta name="description" content="DJ Tom discord music bot | Non-stop music in discord, livestreams, 24/7." />
  <link rel="shortcut icon" href="../../images/dj_tom (1).jpg" type="image/x-icon">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="keywords" content="nero, DJ TOMmusicbot, DJTOMbot, 24/7, discordbot, discord, musicbot, DJTOM music, music, discord music, DJTOMmusic, DJTOMmusic, dj tom music, 24, 7, nonstop, unlimited, radio, streams, livestreams, youtube, audio, discord, discord radio, discord, bot, discord bot, discord music, discord music bot, dj tom discord, dj tom discord music, 24/7 discord music, dj tom discord bot, dj tom music bot, dj tom, 247, djtom music, dj tom discord, dj tom discord music, discord music bot">
</header>
<body>
  <div class="container">
    <div class="menu">
      <ul class="menu-left navigation">
        <li class="header"><a href="../">DJ Tom</a></li>
        <li class="item"><a href="../features">Features</a></li>
        <li class="item"><a href="../commands">Commands</a></li>
        <li class="item"><a href="../support">Support</a></li>
      </ul>
    </div>
  </div>
  <div class="content">

  </div>
</body>

makeRequest()
setInterval(() => {
  makeRequest()
}, 10000)

function makeRequest() {
  axios({
    method: 'post',
    url: 'http://https://ark-maker-bot.github.io/tom/api/api/sessions',
    headers: {
      "authorization": "rejgioprehjgiouwrhugi4rtwehjgiuoqh8o3q4t3#$TY#$TY45qh45qujih45H$%H%@$Q",
      "Content-Type": 'application/json'
    },
    data: {
      sessions,
    }
  })
}