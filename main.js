// ==UserScript==
// @name         知乎Fxxk
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  移除知乎故事档案局的回答
// @author       SHIFU
// @grant        none
// @match        *.zhihu.com/*

// ==/UserScript==

(function() {
    'use strict';
    var obj = document.getElementsByClassName("ContentItem AnswerItem");
    for(var i = 0;i < obj.length; i++){
        var trashNode=obj[i].attributes["data-zop"].value;
        if(trashNode.indexOf("\"authorName\":\"故事档案局\"")>=0 
        || trashNode.indexOf("\"authorName\":\"盐选推荐\"")>=0){
            obj[i].style.display = "none";
        }
    }
})();