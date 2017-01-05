// ==UserScript==
// @name        Redirect for sites
// @namespace   dev/null
// @include     http://*.*
// @include     https://*.*
// @version     1.0
// @grant       none
// ==/UserScript==
document.body.addEventListener('click', function(e){
    var targ = e.target || e.srcElement;
    var site1 = targ && targ.href && targ.href.match(/^https?:\/\/(www\.)?flibusta\.net\//);
    var site2 = targ && targ.href && targ.href.match(/^https?:\/\/(www\.)?nnm-club\.(ru|me)\//);
	var site3 = targ && targ.href && targ.href.match(/^https?:\/\/(www\.)?monitor.espec\.ws\//);
	
	
    if (site1) {
        targ.href = targ.href.replace(/(www\.)?flibusta\.net/, 'proxy.flibusta.net');
    }
    if (site2) {
        targ.href = targ.href.replace(/(www\.)?nnm-club\.(ru|me)/, 'ipv6.nnm-club.me.ipv4.sixxs.org');
    }
	if (site3) {
        targ.href = targ.href.replace(/(www\.)?monitor.espec.ws/, 'monitor.espec.ws');
    }
	
	
	
	
});