/* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var a=t(this),n=a.data("bs.alert");n||a.data("bs.alert",n=new r(this)),"string"==typeof e&&n[e].call(a)})}var a='[data-dismiss="alert"]',r=function(e){t(e).on("click",a,this.close)};r.VERSION="3.3.6",r.TRANSITION_DURATION=150,r.prototype.close=function(e){function a(){o.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var o=t(s);e&&e.preventDefault(),o.length||(o=n.closest(".alert")),o.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(o.removeClass("in"),t.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",a).emulateTransitionEnd(r.TRANSITION_DURATION):a())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=r,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",a,r.prototype.close)}(jQuery);