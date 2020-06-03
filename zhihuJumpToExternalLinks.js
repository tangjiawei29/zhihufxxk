// ==UserScript==
// @name         Automatically jump to external links
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        link.zhihu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var currentUrl = window.location.href;
    var targetUrl = decodeURIComponent(currentUrl.substring(currentUrl.indexOf("target=")+7));
    console.log(targetUrl);
     if(typeof targetUrl == "undefined" || targetUrl == null || targetUrl == ""){
     }else {
        window.location.href =targetUrl;
     }
})();
