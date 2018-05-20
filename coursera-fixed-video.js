// ==UserScript==
// @name         Coursera fixed video
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.coursera.org/learn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var render = function() {
        var c = document.querySelector('.content-container .video-container');
        if (!c) { return; }
        c.style.top = '65px';
        c.style.position = 'fixed';
        c.style.zIndex = '2';
        c.style.width = '100%';
        c.style.backgroundColor = '#303030';

        var v = document.querySelector('.content-container .c-video');
        v.style.margin = '0 auto';
        v.style.left = window.innerWidth > 990 ? '-160px' : '0px';

        var e = document.querySelector('.content-container .extras');
        e.style.marginTop = '600px';
    };

    window.addEventListener('scroll', render);
    window.addEventListener('resize', render);
})();