function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    var forms = document.querySelectorAll('form');

    for (var i = 0; i < forms.length; i++) {
        for (var j = 1; j <= 5; j++) {
            if (forms[i].querySelector("input[name='subid" + j + "']") === null) {
                var el = document.createElement("input");
                el.setAttribute("name", ("subid" + j));
                el.setAttribute("type", "hidden");
                forms[i].appendChild(el);
            }
        }
    }

    var subid1 = getUrlParameter('subid');
    var subid2 = getUrlParameter('subid2');
    var subid3 = getUrlParameter('subid3');
    var subid4 = getUrlParameter('subid4');
    var subid5 = getUrlParameter('subid5');
    if (subid1 != '') {
        document.querySelector("input[name='subid1']").value = subid1 || "";
    }
    if (subid2 != '') {
        document.querySelector("input[name='subid2']").value = subid2 || "";
    }
    if (subid1 != '') {
        document.querySelector("input[name='subid3']").value = subid3 || "";
    }
    if (subid4 != '') {
        document.querySelector("input[name='subid4']").value = subid4 || "";
    }
    if (subid5 != '') {
        document.querySelector("input[name='subid5']").value = subid5 || "";
    }

})