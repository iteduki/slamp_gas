var slackAccessToken = "{you access token}}";

function doPost(e) {
  try{
    var slackApp = SlackApp.create(slackAccessToken);
    var parameter = e.parameter;
    
    var emoji = parameter.text.replace(/:([^:]+):/, "$1");
    var emojiList = slackApp.emojiList();
    var imgUrl = emojiList.emoji[emoji];
    
    if(!imgUrl){
      return ContentService.createTextOutput(emoji + " is missing or an error has occurred. please try again :pray:").setMimeType(ContentService.MimeType.JSON);
    }
    
    var profile = getUser(parameter.user_id);
    
    var username = profile.display_name ? profile.display_name: profile.real_name;
    
    var channelId = parameter.channel_id;
    slackApp.postMessage(channelId, "", {
      icon_url: profile.image_48,
      username: username,
      text: "",
      attachments: JSON.stringify([{"image_url": imgUrl, "text": "", "color": "#fff"}])
    });
    
    return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.JSON)
  }catch(ee){
    return ContentService.createTextOutput("an error has occurred. please try again :pray:").setMimeType(ContentService.MimeType.JSON);
  }
 
}

function getUser(userId){
  var payload =
      {
        token: slackAccessToken,
        user: userId
      };
  
  var options =
      {
        "method" : "post",
        "payload" : payload
      };
  
  var url = "https://slack.com/api/users.profile.get";
  var result = UrlFetchApp.fetch(url, options);
  
  return profile = JSON.parse(result.getContentText()).profile;
}