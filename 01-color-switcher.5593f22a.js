const t={bodyColor:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};function o(){t.bodyColor.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtn.addEventListener("click",(function(e){backgroundBodyColorChange=setInterval(o,1e3,o),t.startBtn.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(function(o){clearInterval(backgroundBodyColorChange,1e3),t.startBtn.disabled=!1,t.stopBtn.disabled=!0}));
//# sourceMappingURL=01-color-switcher.5593f22a.js.map