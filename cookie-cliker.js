// ==UserScript==
// @name        Cookie Clicker
// @namespace   Cookie Cliker Scripts
// @match       https://orteil.dashnet.org/cookieclicker/
// @grant       none
// @version     1.0
// @author      Artem_8086
// @description 14.07.2020, 15:54:24
// ==/UserScript==


var cookie = document.getElementById('bigCookie');
var shimers = document.getElementById('shimmers')

setInterval(function() {
  cookie.click()
  for (var i=0, shimer; shimer=shimers.children[i]; i++) {
    shimer.click()
  }
},0);