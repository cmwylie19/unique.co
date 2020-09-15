!(function(o) {
  function t(r) {
    if (e[r]) return e[r].exports;
    var n = (e[r] = { i: r, l: !1, exports: {} });
    return o[r].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
  }
  var e = {};
  (t.m = o),
    (t.c = e),
    (t.d = function(o, e, r) {
      t.o(o, e) ||
        Object.defineProperty(o, e, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
    }),
    (t.n = function(o) {
      var e =
        o && o.__esModule
          ? function() {
              return o.default;
            }
          : function() {
              return o;
            };
      return t.d(e, "a", e), e;
    }),
    (t.o = function(o, t) {
      return Object.prototype.hasOwnProperty.call(o, t);
    }),
    (t.p = ""),
    t((t.s = 0));
})([
  function(o, t, e) {
    e(1), (o.exports = e(2));
  },
  function(o, t) {
    jQuery(document).ready(function(o) {
      o(".button-collapse").sideNav({ closeOnClick: !0 }),
        o(".collapsible").collapsible(),
        o(".dropdown-button").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: !1,
          hover: !0,
          gutter: -16,
          belowOrigin: !0,
          alignment: "left",
          stopPropagation: !1
        }),
        o(".modal").modal(),
        o(".scrollspy").scrollSpy({ scrollOffset: 0, activeClass: "active" }),
        o(".slider").slick({ arrows: !1, dots: !0, autoplay: !0 });
    }),
      jQuery(window).scroll(function() {
        jQuery(this).scrollTop() > 1
          ? jQuery("#header").addClass("sticky")
          : jQuery("#header").removeClass("sticky");
      });
  },
  function(o, t) {}
]);
//# sourceMappingURL=app.js.map
