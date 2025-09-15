// ==UserScript==
// @name         Auto Next Course Page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto clocck next button on hunter-ed course pages
// @match        https://www.hunter-ed.com/course/content/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let autoNext = setInterval(() => {
        let nextBtn = document.querySelector('#next-button a');
        if (nextBtn && nextBtn.offsetParent !== null) {
            console.log("Clicking next button");
            nextBtn.click();
            clearInterval(autoNext);
        }
    }, 1000);
})();
