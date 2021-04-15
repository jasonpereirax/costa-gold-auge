// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/base.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../fonts/monument/MonumentExtended-Bold.otf":[["MonumentExtended-Bold.8d494c56.otf","fonts/monument/MonumentExtended-Bold.otf"],"fonts/monument/MonumentExtended-Bold.otf"],"./../fonts/opensans/OpenSans-Bold.ttf":[["OpenSans-Bold.7da82ab6.ttf","fonts/opensans/OpenSans-Bold.ttf"],"fonts/opensans/OpenSans-Bold.ttf"],"./../fonts/opensans/OpenSans-BoldItalic.ttf":[["OpenSans-BoldItalic.8c7a9d1b.ttf","fonts/opensans/OpenSans-BoldItalic.ttf"],"fonts/opensans/OpenSans-BoldItalic.ttf"],"./../fonts/opensans/OpenSans-ExtraBold.ttf":[["OpenSans-ExtraBold.e2361291.ttf","fonts/opensans/OpenSans-ExtraBold.ttf"],"fonts/opensans/OpenSans-ExtraBold.ttf"],"./../fonts/opensans/OpenSans-ExtraBoldItalic.ttf":[["OpenSans-ExtraBoldItalic.a27e31b4.ttf","fonts/opensans/OpenSans-ExtraBoldItalic.ttf"],"fonts/opensans/OpenSans-ExtraBoldItalic.ttf"],"./../fonts/opensans/OpenSans-Italic.ttf":[["OpenSans-Italic.0de8ef37.ttf","fonts/opensans/OpenSans-Italic.ttf"],"fonts/opensans/OpenSans-Italic.ttf"],"./../fonts/opensans/OpenSans-LightItalic.ttf":[["OpenSans-LightItalic.cd4219fe.ttf","fonts/opensans/OpenSans-LightItalic.ttf"],"fonts/opensans/OpenSans-LightItalic.ttf"],"./../fonts/opensans/OpenSans-Regular.ttf":[["OpenSans-Regular.9187fe9b.ttf","fonts/opensans/OpenSans-Regular.ttf"],"fonts/opensans/OpenSans-Regular.ttf"],"./../fonts/opensans/OpenSans-SemiBold.ttf":[["OpenSans-SemiBold.7d6ca272.ttf","fonts/opensans/OpenSans-SemiBold.ttf"],"fonts/opensans/OpenSans-SemiBold.ttf"],"./../fonts/opensans/OpenSans-SemiBoldItalic.ttf":[["OpenSans-SemiBoldItalic.71e3f614.ttf","fonts/opensans/OpenSans-SemiBoldItalic.ttf"],"fonts/opensans/OpenSans-SemiBoldItalic.ttf"],"./../image/icon-scroll.svg":[["icon-scroll.81096f89.svg","image/icon-scroll.svg"],"image/icon-scroll.svg"],"./../image/icon-arrow-black.svg":[["icon-arrow-black.8269fe8d.svg","image/icon-arrow-black.svg"],"image/icon-arrow-black.svg"],"./../image/icon-close-gray.svg":[["icon-close-gray.04c52c13.svg","image/icon-close-gray.svg"],"image/icon-close-gray.svg"],"./../image/background-page.png":[["background-page.2ea351af.png","image/background-page.png"],"image/background-page.png"],"./../image/background-page-mobile.png":[["background-page-mobile.1cdf31f7.png","image/background-page-mobile.png"],"image/background-page-mobile.png"],"./../image/roupas.png":[["roupas.c7a8febf.png","image/roupas.png"],"image/roupas.png"],"./../image/background-menu.png":[["background-menu.3c3bacd9.png","image/background-menu.png"],"image/background-menu.png"],"./../image/icon-close.svg":[["icon-close.50e259a6.svg","image/icon-close.svg"],"image/icon-close.svg"],"./../image/menu-hamburguer.svg":[["menu-hamburguer.7ad5c087.svg","image/menu-hamburguer.svg"],"image/menu-hamburguer.svg"],"./../image/image-circle-letters.svg":[["image-circle-letters.a0faa8ef.svg","image/image-circle-letters.svg"],"image/image-circle-letters.svg"],"./../image/icon-arrow-white.svg":[["icon-arrow-white.0911adfd.svg","image/icon-arrow-white.svg"],"image/icon-arrow-white.svg"],"./../image/icon-arrow-orange.svg":[["icon-arrow-orange.8497bf87.svg","image/icon-arrow-orange.svg"],"image/icon-arrow-orange.svg"],"./../image/element-box-shadow.png":[["element-box-shadow.faf9af1c.png","image/element-box-shadow.png"],"image/element-box-shadow.png"],"./../image/icon-facebook.svg":[["icon-facebook.e1173ebb.svg","image/icon-facebook.svg"],"image/icon-facebook.svg"],"./../image/icon-twitter.svg":[["icon-twitter.0b6c64db.svg","image/icon-twitter.svg"],"image/icon-twitter.svg"],"./../image/icon-instagram.svg":[["icon-instagram.43ca1754.svg","image/icon-instagram.svg"],"image/icon-instagram.svg"],"./../image/icon-mail.svg":[["icon-mail.1daee08a.svg","image/icon-mail.svg"],"image/icon-mail.svg"],"./../image/icon-arrow-down.svg":[["icon-arrow-down.9b5c10bb.svg","image/icon-arrow-down.svg"],"image/icon-arrow-down.svg"],"./../image/icon-arrow-down-white.svg":[["icon-arrow-down-white.a5620481.svg","image/icon-arrow-down-white.svg"],"image/icon-arrow-down-white.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65003" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/base.98fd6c19.js.map