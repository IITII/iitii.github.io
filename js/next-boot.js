"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}NexT.boot={},NexT.boot.registerEvents=function(){NexT.utils.registerScrollPercent(),NexT.utils.registerCanIUseTag(),document.querySelector(".site-nav-toggle .toggle").addEventListener("click",function(){event.currentTarget.classList.toggle("toggle-close");var e=document.querySelector(".site-nav"),t=e.classList.contains("site-nav-on")?"slideUp":"slideDown";"function"==typeof Velocity?Velocity(e,t,{duration:200,complete:function(){e.classList.toggle("site-nav-on")}}):e.classList.toggle("site-nav-on")});document.querySelectorAll(".sidebar-nav li").forEach(function(e,s){e.addEventListener("click",function(e){var t=e.currentTarget,r="sidebar-nav-active",o="sidebar-panel-active";if(!t.classList.contains(r)){var i=document.querySelectorAll(".sidebar-panel"),n=i[s],a=i[1-s];window.anime({targets:a,duration:200,easing:"linear",opacity:0,complete:function(){a.classList.remove(o),n.style.opacity=0,n.classList.add(o),window.anime({targets:n,duration:200,easing:"linear",opacity:1})}}),_toConsumableArray(t.parentNode.children).forEach(function(e){e.classList.remove(r)}),t.classList.add(r)}})}),window.addEventListener("resize",NexT.utils.initSidebarDimension),window.addEventListener("hashchange",function(){var e=location.hash;if(""!==e&&!e.match(/%\S{2}/)){var t=document.querySelector('.tabs ul.nav-tabs li a[href="'.concat(e,'"]'));t&&t.click()}})},NexT.boot.refresh=function(){CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),CONFIG.mediumzoom&&window.mediumZoom(".post-body :not(a) > img, .post-body > img"),CONFIG.lazyload&&window.lozad(".post-body img").observe(),CONFIG.pangu&&window.pangu.spacingPage(),CONFIG.exturl&&NexT.utils.registerExtURL(),CONFIG.copycode.enable&&NexT.utils.registerCopyCode(),NexT.utils.registerTabsTag(),NexT.utils.registerActiveMenuItem(),NexT.utils.registerLangSelect(),NexT.utils.registerSidebarTOC(),NexT.utils.wrapTableWithBox(),NexT.utils.registerVideoIframe()},NexT.boot.motion=function(){CONFIG.motion.enable&&NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).bootstrap(),NexT.utils.updateSidebarPosition()},document.addEventListener("DOMContentLoaded",function(){NexT.boot.registerEvents(),NexT.boot.refresh(),NexT.boot.motion()});