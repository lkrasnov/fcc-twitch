const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
  "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "shroud",
  "summit1g"];

$(document).ready(function() {
  channels.forEach(channelId => addChannel(channelId));
  channels.forEach(channelId => updateChannelStatus(channelId));
});

function addChannel(channelId) {
  $.ajax({
    url: `https://wind-bow.gomix.me/twitch-api/channels/${channelId}`,
    dataType: "jsonp",
    success: function(data) {
      $(".channel-container").append(channelTemplate(data));
    }
  });
}

function updateChannelStatus(channelId) {
  $.ajax({
    url: `https://wind-bow.gomix.me/twitch-api/streams/${channelId}`,
    dataType: "jsonp",
    success: function(data) {
      if (data.stream) {
        $(`#${channelId}-status-info`).html(data.stream.game);
        let statusLink = $(`#${channelId}-status-link`);
        statusLink.removeClass("btn-danger");
        statusLink.addClass("btn-success");
        statusLink.html("ONLINE");
      }
    }
  });
}

function channelTemplate(channel) {
  return `
  <li class="list-group-item">
    <div class="row">
      <div class="col">
        <img class="channel-image" src="${channel.logo}">              
      </div>
      <div class="col-6 d-flex">
        <div class="align-self-center">
          <h4>${channel.name}</h4>
          <p id="${channel.name}-status-info"></p>
        </div>
      </div>
      <div class="col d-flex">
        <a id="${channel.name}-status-link" href="${channel.url}" class="btn btn-danger btn-lg align-self-center" role="button">OFFLINE</a>
      </div>
    </div>
  </li>
    `;
}