!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){t.setAttribute("disable","true"),e.removeAttribute("disable");var a=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3);e.addEventListener("click",(function(){clearInterval(a),t.removeAttribute("disable"),e.setAttribute("disable","true")}))}))}();
//# sourceMappingURL=01-color-switcher.1486d482.js.map
