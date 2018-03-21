!function() {
    "use strict";
    var e = function(e, t, a, n) {
        this.container = "#" + e, this.data = [], this.year = {min: t,max: a}, this.parse(n || []), "undefined" != typeof document && (this.drawSections(), this.insertData())
    };
    e.prototype.insertData = function() {
        for (var e = [], t = document.querySelector(this.container + " .scale section").offsetWidth, a = 0, n = this.data.length; n > a; a++) {
            var s = this.data[a], i = new TimesheetBubble(t, this.year.min, s.start, s.end), r = ['<span style="margin-left: ' + i.getStartOffset() + "px; width: " + i.getWidth() + 'px;" class="bubble bubble-' + (s.type || "default") + '" data-duration="' + (s.end ? Math.round((s.end - s.start) / 1e3 / 60 / 60 / 24 / 39) : "") + '"></span>', '<span class="date">' + i.getDateLabel() + "</span> ", '<span class="label">' + s.label + "</span>"].join("");
            e.push("<li>" + r + "</li>")
        }
        document.querySelector(this.container).innerHTML += '<ul class="data">' + e.join("") + "</ul>"
    }, e.prototype.drawSections = function() {
        for (var e = [], t = this.year.min; t <= this.year.max; t++)
            e.push("<section>" + t + "</section>");
        document.querySelector(this.container).className = "timesheet color-scheme-default", document.querySelector(this.container).innerHTML = '<div class="scale">' + e.join("") + "</div>"
    }, e.prototype.parseDate = function(e) {
        return -1 === e.indexOf("/") ? (e = new Date(parseInt(e, 10), 0, 1), e.hasMonth = !1) : (e = e.split("/"), e = new Date(parseInt(e[1], 10), parseInt(e[0], 10) - 1, 1), e.hasMonth = !0), e
    }, e.prototype.parse = function(e) {
        for (var t = 0, a = e.length; a > t; t++) {
            var n = this.parseDate(e[t][0]), s = 4 === e[t].length ? this.parseDate(e[t][1]) : null, i = 4 === e[t].length ? e[t][2] : e[t][1], r = e[t][3] || "default";
            n.getFullYear() < this.year.min && (this.year.min = n.getFullYear()), s && s.getFullYear() > this.year.max ? this.year.max = s.getFullYear() : n.getFullYear() > this.year.max && (this.year.max = n.getFullYear()), this.data.push({start: n,end: s,label: i,type: r})
        }
    }, window.Timesheet = e
}();
