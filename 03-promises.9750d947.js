!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),c=document.querySelector('[name="amount"]'),l=document.querySelector(".form"),d=document.querySelector("button");function f(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.addEventListener("submit",(function(t){t.preventDefault(),d.setAttribute("disable","true");for(var n=Number(u.value),o=Number(a.value),r=Number(c.value),s=1;s<=r;s+=1)f(s,n).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=o;l.reset(),setTimeout((function(){d.removeAttribute("disable")}),n)}))}();
//# sourceMappingURL=03-promises.9750d947.js.map
