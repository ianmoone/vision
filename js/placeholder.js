/* JVFloat.js v1.0.0 - Generated on: 2014-05-15 */
!function(a){"use strict";a.fn.jvFloat=function(){return this.filter("input:not([type=submit]), textarea").each(function(){function b(){h.toggleClass("active",""!==e.val())}function c(){var b="";do b=("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).substr(-4);while(a("#"+b).length);return b}function d(a){var b=c();return a.prop("id",b),b}var e=a(this).wrap("<div class=jvFloat>"),f=e.attr("id");f||(f=d(e));var g=e.attr("required")||"",h="";h=a(this).is("textarea")?a('<label class="placeHolder  textarea '+g+'" for="'+f+'">'+e.attr("placeholder")+"</label>").insertBefore(e):a('<label class="placeHolder '+g+'" for="'+f+'">'+e.attr("placeholder")+"</label>").insertBefore(e),b(),e.bind("keyup blur",b)})}}(window.jQuery||window.Zepto||window.$);