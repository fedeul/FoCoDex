var SimpleSwitch = (function (t) {
  function e(n) {
    if (i[n]) return i[n].exports;
    var c = (i[n] = { i: n, l: !1, exports: {} });
    return t[n].call(c.exports, c, c.exports, e), (c.l = !0), c.exports;
  }
  var i = {};
  return (
    (e.m = t),
    (e.c = i),
    (e.i = function (t) {
      return t;
    }),
    (e.d = function (t, i, n) {
      e.o(t, i) ||
        Object.defineProperty(t, i, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (e.n = function (t) {
      var i =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(i, "a", i), i;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 1))
  );
})([
  function (t, e, i) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var c = (function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
      };
    })();
    e.Switch = (function () {
      function t(e) {
        n(this, t),
          (this.element = e.element || document.querySelector(e.selector)),
          (this.isMaterial = void 0 !== e.material && e.material),
          (this.checked = !!this.element.checked),
          (this.matchSizeToFont =
            void 0 !== e.matchSizeToFont && e.matchSizeToFont),
          this.element.dataset.material &&
            "true" === this.element.dataset.material &&
            (this.isMaterial = !0),
          this.setup();
      }
      return (
        c(
          t,
          [
            {
              key: "setup",
              value: function () {
                (this.track = document.createElement("button")),
                  (this.handle = document.createElement("span")),
                  this.element.classList.add("_simple-switch-checkbox"),
                  this.track.classList.add("_simple-switch-track"),
                  this.handle.classList.add("handle"),
                  this.isMaterial && this.track.classList.add("_material"),
                  this.checked &&
                    this.track.classList.add(t.CHECKED_CLASS_NAME),
                  this.track.setAttribute("tabindex", -1),
                  this.bind(),
                  this.track.appendChild(this.handle),
                  this.element.insertAdjacentElement("afterend", this.track),
                  this.updateSize();
              },
            },
            {
              key: "updateSize",
              value: function () {
                if (this.matchSizeToFont) {
                  var t = window.getComputedStyle(this.track)["font-size"];
                  this.track.style.setProperty("--simple-switch_size", t);
                }
              },
            },
            {
              key: "bind",
              value: function () {
                this.track.addEventListener(
                  "click",
                  function (t) {
                    this.trackClicked(t);
                  }.bind(this),
                  !1
                ),
                  this.element.addEventListener(
                    "focus",
                    function (t) {
                      this.checkboxFocused(t);
                    }.bind(this),
                    !1
                  ),
                  this.element.addEventListener(
                    "blur",
                    function (t) {
                      this.checkboxBlurred(t);
                    }.bind(this),
                    !1
                  ),
                  this.element.addEventListener(
                    "click",
                    function (t) {
                      this.checkboxToggled(t);
                    }.bind(this),
                    !1
                  );
              },
            },
            {
              key: "checkboxFocused",
              value: function (e) {
                this.track.classList.add(t.FOCUSED_CLASS_NAME);
              },
            },
            {
              key: "checkboxBlurred",
              value: function (e) {
                this.track.classList.remove(t.FOCUSED_CLASS_NAME);
              },
            },
            {
              key: "trackClicked",
              value: function (t) {
                this.toggle();
              },
            },
            {
              key: "checkboxToggled",
              value: function (t) {
                this.toggle();
              },
            },
            {
              key: "toggle",
              value: function () {
                (this.checked = this.track.classList.toggle(
                  t.CHECKED_CLASS_NAME
                )),
                  this.syncState();
              },
            },
            {
              key: "syncState",
              value: function () {
                this.element.checked = this.checked;
                var t = new Event("change");
                this.element.dispatchEvent(t);
              },
            },
          ],
          [
            {
              key: "CHECKED_CLASS_NAME",
              get: function () {
                return "on";
              },
            },
            {
              key: "FOCUSED_CLASS_NAME",
              get: function () {
                return "focus";
              },
            },
          ]
        ),
        t
      );
    })();
  },
  function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.init = e.Switch = void 0);
    var n = i(0);
    e.Switch = n.Switch;
    e.init = function () {
      var t,
        e,
        i = document.querySelectorAll(
          "[data-type='simple-switch']:not(._simple-switch-checkbox)"
        );
      for (t = 0; t < i.length; t++) (e = i[t]), new n.Switch({ element: e });
    };
  },
]);
