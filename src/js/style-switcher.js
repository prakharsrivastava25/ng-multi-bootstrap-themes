function findStyle(theme) {
  var links = document.getElementsByTagName('link');
//  console.log("Theme:"+theme);
  console.log("inside findStyle(theme) function link:");
  console.log(links);
  for (var i = 0; i < links.length; i++) {
    if ((links[i].rel.indexOf('stylesheet') != -1) && links[i].title === theme) {
//      console.log("links[i].title:))))))",links[i].title);
//      console.log("theme:"+theme);
      return true
    }
  }
  return false;
}

function switchStyle(theme) {
  if (theme && findStyle(theme)) {
//    console.log("inside switchStyle(theme)");
//    console.log(theme);
//    console.log(findStyle(theme));
    var links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
 //     console.log("link:");
 //     console.log(link);
      if (link.rel.indexOf('stylesheet') != -1 && link.title) {
//        console.log("link.title:",link.title);
        if (link.title === theme) {
          console.log(link.title+"==="+theme);
          link.disabled = false;
        } else {
          link.disabled = true;
        }
      }
    }
  }
}