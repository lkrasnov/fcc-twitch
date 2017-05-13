const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
  "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function() {

  $.ajax({
    cache: false,
    url: `https://api.twitch.tv/kraken/streams?channel=${channels.join(",")}`,
    header: {
      Accept: 'application/vnd.twitchtv.v3+json'
    },
    dataType: "json",
    success: function(data) {

    }
  });

});
