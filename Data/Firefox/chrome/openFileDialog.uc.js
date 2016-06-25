/*==uc/==
@name           Unlock OK button in opening file dialog
@namespace      dev/null
@include        chrome://mozapps/content/downloads/unknownContentType.xul
==/uc==*/

(function() {
    var de = document.documentElement;
    de.setAttribute("onblur", "");
    de.setAttribute("onfocus", "");
    de.getButton("accept").disabled = false;
})();