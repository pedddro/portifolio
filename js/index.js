var work = document.getElementById("portfolioItemContainer");
var workRequest = new XMLHttpRequest();


var link = document.getElementById("socialLinkContent");
var linkRequest = new XMLHttpRequest();


var misc = document.getElementById("portfolioItemContainerMisc");
var miscRequest = new XMLHttpRequest();

// Request for links.json
linkRequest.open("GET", "json/links.json", true);
linkRequest.onreadystatechange = function () {
    if (linkRequest.readyState == 4) {
        if (linkRequest.status == 200 || linkRequest.status === 0) {
            var html = "";
            JSON.parse(linkRequest.responseText).forEach(function (link) {
                console.log(link.name);
                html += "<div class=\"links waves-effect\"><a href=" + link.url + " class=\"valign-wrapper\" target=\"_blank\"><i class=\"link_icon mdi mdi-" + link.icon + "\" style=\"color: " + link.color + "\"></i>&nbsp; " + link.name + "</a></div>";
            });
            link.innerHTML = html;
        }
    }
};
linkRequest.send(null);


// Request for items.json
workRequest.open("GET", "json/items.json", true);
workRequest.onreadystatechange = function () {
    if (workRequest.readyState == 4) {
        if (workRequest.status == 200 || workRequest.status === 0) {
            var html = "";
            JSON.parse(workRequest.responseText).forEach(function (work) {
                console.log(work.name);
                html += "<div class=\"col s12 m6 l6\"><div class=\"card medium hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + work.image + "></div><div class=\"card-content\"><span class=\"card-title activator\">" + work.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span><p><a href=" + work.link + " target=\"_blank\">Visitar -></a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">keyboard_arrow_down</i></span><p>" + work.description + "</p></div></div></div>";
            });
            work.innerHTML = html;
        }
    }
};
workRequest.send(null);

// Request for misc.json
miscRequest.open("GET", "json/misc.json", true);
miscRequest.onreadystatechange = function () {
    if (miscRequest.readyState == 4) {
        if (miscRequest.status == 200 || miscRequest.status === 0) {
            var html = "";
            JSON.parse(miscRequest.responseText).forEach(function (misc) {
                console.log(misc.name);
                html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable medium\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + misc.image + "></div><div class=\"card-content\"><span class=\"card-title activator\">" + misc.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span><p><a href=" + misc.link + " target=\"_blank\">Visitar</a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + misc.name + "<i class=\"material-icons right\">keyboard_arrow_down</i></span><p>" + misc.description + "</p></div></div></div>";
            });
            misc.innerHTML = html;
        }
    }
};
miscRequest.send(null);