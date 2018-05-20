// ==UserScript==
// @name         video hjkl control
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*.mp4
// @match        *://*/*.wmv
// @match        *://*/*.webm
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.onkeydown = function(evt) {
        var video = document.getElementsByTagName('video')[0];
        evt = evt || window.event;
        if (evt.keyCode === 74) { video.currentTime += 5; } // j
        if (evt.keyCode === 75) { video.currentTime -= 5; } // k
        if (evt.keyCode === 76) { video.currentTime += 30; } // l
        if (evt.keyCode === 72) { video.currentTime -= 30; } // h
        if (evt.keyCode === 48) { video.playbackRate = 1; } // 0
        if (evt.keyCode === 187) { video.playbackRate += 0.1; } // +
        if (evt.keyCode === 189) { video.playbackRate -= 0.1; } // -
    };
})();