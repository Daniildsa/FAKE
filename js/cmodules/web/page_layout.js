﻿!function(t){function e(i){if(o[i])return o[i].exports;var s=o[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}({0:function(t,e,o){t.exports=o(203)},203:function(t,e,o){"use strict";var i=o(516);window.initPageLayoutUI=window.initPageLayoutUI||function(){i.leftMenu.init(),window.__leftMenu=i.leftMenu};try{stManager.done(jsc("web/page_layout.js"))}catch(s){console.log(s.message)}},516:function(t,e){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i="STATE_STICKY_TOP",s="STATE_STICKY_BOTTOM",n=function(){function t(){o(this,t),this.isInited=!1,this.menuEle=null,this.handleUpdateRequest=this.handleUpdateRequest.bind(this),this.handleScroll=this.handleScroll.bind(this)}return t.prototype.init=function(){return this.isInited?!1:(this.menuEle=ge("side_bar"),this.lastScrollTop=window.scrollGetY(),this.firstScrollUp=!1,this.firstScrollDown=!1,void this.resetState())},t.prototype.handleUpdateRequest=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!1;t?(this.setPositionTop(0),this.setState(s)):this.handleScroll()},t.prototype.resetState=function(){this.setPositionTop(0),this.setState(window.scrollGetY()>10?i:s)},t.prototype.setState=function(t){this.currentState!==t&&(this.currentState=t,t===i?addClass(this.menuEle,"sticky_top"):t===s&&removeClass(this.menuEle,"sticky_top"))},t.prototype.setPositionTop=function(t){t>=0&&this.menuEle.style.setProperty("top",t+"px")},t.prototype.handleScrollDown=function(t){this.firstScrollDown||(this.currentState===i&&this.setPositionTop(t),this.setState(s)),this.firstScrollDown=!0,this.firstScrollUp=!1},t.prototype.handleScrollUp=function(t){this.firstScrollUp&&this.currentState===s&&this.menuEle.getBoundingClientRect().bottom<0&&this.setPositionTop(t-this.menuEle.clientHeight),this.currentState!==i&&this.menuEle.getBoundingClientRect().top>=0&&(this.setState(i),this.setPositionTop(0)),this.firstScrollUp=!0,this.firstScrollDown=!1},t.prototype.handleScroll=function(){var t=window.scrollGetY();Boolean(this.lastScrollTop)&&(t>this.lastScrollTop?this.handleScrollDown(t):this.handleScrollUp(t)),this.lastScrollTop=t},t}();e.leftMenu=new n}});