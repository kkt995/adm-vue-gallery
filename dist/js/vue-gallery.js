(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('blueimp-gallery/css/blueimp-gallery.min.css'), require('blueimp-gallery/js/blueimp-gallery-fullscreen.js'), require('blueimp-gallery/js/blueimp-gallery-video.js'), require('blueimp-gallery/js/blueimp-gallery-youtube.js'), require('blueimp-gallery/js/blueimp-gallery.js')) :
  typeof define === 'function' && define.amd ? define(['blueimp-gallery/css/blueimp-gallery.min.css', 'blueimp-gallery/js/blueimp-gallery-fullscreen.js', 'blueimp-gallery/js/blueimp-gallery-video.js', 'blueimp-gallery/js/blueimp-gallery-youtube.js', 'blueimp-gallery/js/blueimp-gallery.js'], factory) :
  (global.VueGallery = factory(null,null,null,null,global.blueimp));
}(this, (function (blueimpGallery_min_css,blueimpGalleryFullscreen_js,blueimpGalleryVideo_js,blueimpGalleryYoutube_js,blueimp) { 'use strict';

  blueimp = blueimp && blueimp.hasOwnProperty('default') ? blueimp['default'] : blueimp;

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var script = {
    props: {
      images: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      options: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      carousel: {
        type: Boolean,
        default: false
      },
      index: {
        type: Number
      },
      id: {
        type: String,
        default: 'blueimp-gallery'
      }
    },
    data: function data() {
      return {
        instance: null
      };
    },
    watch: {
      index: function index(value) {
        if (this.carousel) {
          return;
        }

        if (value !== null) {
          this.open(value);
        } else {
          if (this.instance) {
            this.instance.close();
          }

          this.$emit('close');
        }
      }
    },
    mounted: function mounted() {
      if (this.carousel) {
        this.open();
      }
    },
    destroyed: function destroyed() {
      if (this.instance !== null) {
        this.instance.close();
        this.instance = null;
      }
    },
    methods: {
      open: function open() {
        var _this = this;

        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var instance = typeof blueimp.Gallery !== 'undefined' ? blueimp.Gallery : blueimp;

        var options = _extends({
          toggleControlsOnReturn: false,
          toggleControlsOnSlideClick: false,
          closeOnSlideClick: false,
          carousel: this.carousel,
          container: "#".concat(this.id),
          index: index,
          onopen: function onopen() {
            return _this.$emit('onopen');
          },
          onopened: function onopened() {
            return _this.$emit('onopened');
          },
          onslide: this.onSlideCustom,
          onslideend: function onslideend(index, slide) {
            return _this.$emit('onslideend', {
              index: index,
              slide: slide
            });
          },
          onslidecomplete: function onslidecomplete(index, slide) {
            return _this.$emit('onslidecomplete', {
              index: index,
              slide: slide
            });
          },
          onclose: function onclose() {
            return _this.$emit('close');
          },
          onclosed: function onclosed() {
            return _this.$emit('onclosed');
          }
        }, this.options);

        if (this.carousel) {
          options.container = this.$el;
        }

        this.instance = instance(this.images, options);
      },
      onSlideCustom: function onSlideCustom(index, slide) {
        this.$emit('onslide', {
          index: index,
          slide: slide
        });
        var image = this.images[index];

        if (image !== undefined) {
          var text = image.description;
          var node = this.instance.container.find('.description');

          if (text) {
            node.empty();
            node[0].appendChild(document.createTextNode(text));
          }
        }
      }
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "blueimp-gallery blueimp-gallery-controls",
        class: { "blueimp-gallery-carousel": _vm.carousel },
        attrs: { id: _vm.id }
      },
      [
        _c("div", { staticClass: "slides" }),
        _vm._v(" "),
        _c("h3", { staticClass: "title" }),
        _vm._v(" "),
        _c("p", { staticClass: "description" }),
        _vm._v(" "),
        _c("a", { staticClass: "prev" }, [_vm._t("prev", [_vm._v("‹")])], 2),
        _vm._v(" "),
        _c("a", { staticClass: "next" }, [_vm._t("next", [_vm._v("›")])], 2),
        _vm._v(" "),
        !_vm.carousel
          ? _c("a", { staticClass: "close" }, [_vm._t("close", [_vm._v("X")])], 2)
          : _vm._e(),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "download" },
          [_vm._t("download", [_vm._v("download")])],
          2
        ),
        _vm._v(" "),
        !_vm.carousel ? _c("ol", { staticClass: "indicator" }) : _vm._e(),
        _vm._v(" "),
        _vm.carousel ? _c("a", { staticClass: "play-pause" }) : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-6711e5c8_0", { source: "\n.blueimp-gallery > .description {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  color: #fff;\n  display: none;\n}\n.blueimp-gallery-controls > .description {\n  display: block;\n}\n", map: {"version":3,"sources":["C:\\Users\\seo\\Desktop\\adm-vue-gallery/C:\\Users\\seo\\Desktop\\adm-vue-gallery\\src\\component\\gallery.vue"],"names":[],"mappings":";AAiJA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;CACA;AACA;EACA,eAAA;CACA","file":"gallery.vue","sourcesContent":["<template>\r\n  <div\r\n    :id=\"id\"\r\n    class=\"blueimp-gallery blueimp-gallery-controls\"\r\n    :class=\"{'blueimp-gallery-carousel': carousel}\">\r\n\r\n    <div class=\"slides\"></div>\r\n    <h3 class=\"title\"></h3>\r\n    <p class=\"description\"></p>\r\n    <a class=\"prev\">\r\n      <slot name=\"prev\">‹</slot>\r\n    </a>\r\n    <a class=\"next\">\r\n      <slot name=\"next\">›</slot>\r\n    </a>\r\n    <a v-if=\"!carousel\" class=\"close\">\r\n      <slot name=\"close\">X</slot>\r\n    </a>\r\n    <a class=\"download\">\r\n      <slot name=\"download\">download</slot>\r\n    </a>\r\n    <ol v-if=\"!carousel\" class=\"indicator\"></ol>\r\n    <a v-if=\"carousel\" class=\"play-pause\"></a>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import 'blueimp-gallery/css/blueimp-gallery.min.css';\r\n  import 'blueimp-gallery/js/blueimp-gallery-fullscreen.js';\r\n  import 'blueimp-gallery/js/blueimp-gallery-video.js';\r\n  import 'blueimp-gallery/js/blueimp-gallery-youtube.js';\r\n  import blueimp from 'blueimp-gallery/js/blueimp-gallery.js';\r\n\r\n  export default {\r\n    props: {\r\n      images: {\r\n        type: Array,\r\n        default() {\r\n          return [];\r\n        },\r\n      },\r\n\r\n      options: {\r\n        type: Object,\r\n        default() {\r\n          return {};\r\n        },\r\n      },\r\n\r\n      carousel: {\r\n        type: Boolean,\r\n        default: false,\r\n      },\r\n\r\n      index: {\r\n        type: Number,\r\n      },\r\n\r\n      id: {\r\n        type: String,\r\n        default: 'blueimp-gallery',\r\n      },\r\n    },\r\n\r\n    data() {\r\n      return {\r\n        instance: null,\r\n      };\r\n    },\r\n\r\n    watch: {\r\n      index(value) {\r\n        if (this.carousel) {\r\n          return;\r\n        }\r\n\r\n        if (value !== null) {\r\n          this.open(value);\r\n        } else {\r\n          if (this.instance) {\r\n            this.instance.close();\r\n          }\r\n\r\n          this.$emit('close');\r\n        }\r\n      },\r\n    },\r\n\r\n    mounted() {\r\n      if (this.carousel) {\r\n        this.open();\r\n      }\r\n    },\r\n\r\n    destroyed() {\r\n      if (this.instance !== null) {\r\n        this.instance.close();\r\n        this.instance = null;\r\n      }\r\n    },\r\n\r\n    methods: {\r\n      open(index = 0) {\r\n        const instance = typeof blueimp.Gallery !== 'undefined' ? blueimp.Gallery : blueimp;\r\n\r\n        const options = Object.assign({\r\n          toggleControlsOnReturn: false,\r\n          toggleControlsOnSlideClick: false,\r\n          closeOnSlideClick: false,\r\n          carousel: this.carousel,\r\n          container: `#${this.id}`,\r\n          index,\r\n          onopen: () => this.$emit('onopen'),\r\n          onopened: () => this.$emit('onopened'),\r\n          onslide: this.onSlideCustom,\r\n          onslideend: (index, slide) => this.$emit('onslideend', { index, slide }),\r\n          onslidecomplete: (index, slide) => this.$emit('onslidecomplete', { index, slide }),\r\n          onclose: () => this.$emit('close'),\r\n          onclosed: () => this.$emit('onclosed'),\r\n        }, this.options);\r\n\r\n        if (this.carousel) {\r\n          options.container = this.$el;\r\n        }\r\n\r\n        this.instance = instance(this.images, options);\r\n      },\r\n      onSlideCustom(index, slide) {\r\n        this.$emit('onslide', { index, slide });\r\n\r\n        const image = this.images[index];\r\n        if (image !== undefined) {\r\n          const text = image.description;\r\n          const node = this.instance.container.find('.description');\r\n          if (text) {\r\n            node.empty();\r\n            node[0].appendChild(document.createTextNode(text));\r\n          }\r\n        }\r\n      },\r\n    },\r\n  };\r\n</script>\r\n\r\n<style>\r\n  .blueimp-gallery > .description {\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 15px;\r\n    color: #fff;\r\n    display: none;\r\n  }\r\n  .blueimp-gallery-controls > .description {\r\n    display: block;\r\n  }\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "C:\\Users\\seo\\Desktop\\adm-vue-gallery\\src\\component\\gallery.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      {
        let hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            const originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            const existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__() {
      const head = document.head || document.getElementsByTagName('head')[0];
      const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
      const isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

        const group = isOldIE ? css.media || 'default' : id;
        const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          let code = css.source;
          let index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            const el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) el.setAttribute('media', css.media);
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index]) style.element.removeChild(nodes[index]);
            if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
            else style.element.appendChild(textNode);
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var VueGallery = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      __vue_create_injector__,
      undefined
    );

  return VueGallery;

})));
