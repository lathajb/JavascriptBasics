var CookieControl =
function(){  var w="accepted",
             L="revoked",
             S=null,
             r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
             Math.uuid=  function(t,e){
                 var o,c,i=r,n=[];
                if(e=e||i.length,t)for(o=0;o<t;o++)n[o]=i[0|Math.random()*e];
                else 
                for(n[8]=n[13]=n[18]=n[23]="-",n[14]="4",o=0;o<36;o++)n[o]||(c=0|16*Math.random(),
                  n[o]=i[19==o?3&c|8:c]);return n.join("")
                };
                var T=null,
                A= { necessaryCookies:[],
                     optionalCookies:{},
                     initialState:{},
                     statement:{},
                     consentDate:Date.now(),
                     consentExpiry:90,
                     interactedWith:!1
                },
             
            
                M=JSON.parse(c("CookieControl"))||A,o=JSON.parse(c("CookieControl")).user||Math.uuid();
                M.user=o;
                var I={
                    COMMUNITY:"CookieControl Free",
                    PRO:"CookieControl Single-Site",
                    PRO_MULTISITE:"CookieControl Multi-Site"
                },
               
                a=["BE","BG","CZ","DK","DE","EE","IE","GR","ES","FR","HR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","GB"],
                l=["Belgium","Bulgaria","Czech Republic","Denmark","Germany","Estonia","Ireland","Greece","Spain","France","Croatia","Italy","Cyprus","Latvia","Lithuania","Luxembourg","Hungary","Malta","Netherlands","Austria","Poland","Portugal","Romania","Slovenia","Slovakia","Finland","Sweden","United Kingdom"],
                i=["branding","excludedCountries","locales"],
                z={
                    iconLeft:'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 72.5 72.5" enable-background="new 0 0 72.5 72.5" xml:space="preserve"><g id="triangle"><path d="M0,0l72.5,72.5H0V0z"/></g><g id="star"><path d="M33.2,51.9l-3.9-2.6l1.6-4.4l-4.7,0.2L25,40.6l-3.7,2.9l-3.7-2.9l-1.2,4.5l-4.7-0.2l1.6,4.4l-3.9,2.6l3.9,2.6l-1.6,4.4l4.7-0.2l1.2,4.5l3.7-2.9l3.7,2.9l1.2-4.5l4.7,0.2l-1.6-4.4L33.2,51.9z M24.6,55.3c-0.3,0.4-0.8,0.8-1.3,1s-1.1,0.3-1.9,0.3c-0.9,0-1.7-0.1-2.3-0.4s-1.1-0.7-1.5-1.4c-0.4-0.7-0.6-1.6-0.6-2.6c0-1.4,0.4-2.5,1.1-3.3c0.8-0.8,1.8-1.1,3.2-1.1c1.1,0,1.9,0.2,2.6,0.7s1.1,1.1,1.4,2L23,50.9c-0.1-0.3-0.2-0.5-0.3-0.6c-0.1-0.2-0.3-0.4-0.5-0.5s-0.5-0.2-0.7-0.2c-0.6,0-1.1,0.2-1.4,0.7c-0.2,0.4-0.4,0.9-0.4,1.7c0,1,0.1,1.6,0.4,2c0.3,0.4,0.7,0.5,1.2,0.5c0.5,0,0.9-0.1,1.2-0.4s0.4-0.7,0.6-1.2l2.3,0.7C25.2,54.3,25,54.8,24.6,55.3z"/></g></svg>',
                    iconRight:'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 72.5 72.5" enable-background="new 0 0 72.5 72.5" xml:space="preserve"><g id="triangle"><path d="M72.5,72.5H0L72.5,0V72.5z"/></g><g id="star"><path d="M62.2,51.9l-3.9-2.6l1.6-4.4l-4.7,0.2L54,40.6l-3.7,2.9l-3.7-2.9l-1.2,4.5l-4.7-0.2l1.6,4.4l-3.9,2.6l3.9,2.6l-1.6,4.4l4.7-0.2l1.2,4.5l3.7-2.9l3.7,2.9l1.2-4.5l4.7,0.2l-1.6-4.4L62.2,51.9z M53.6,55.3c-0.3,0.4-0.8,0.8-1.3,1s-1.1,0.3-1.9,0.3c-0.9,0-1.7-0.1-2.3-0.4s-1.1-0.7-1.5-1.4c-0.4-0.7-0.6-1.6-0.6-2.6c0-1.4,0.4-2.5,1.1-3.3c0.8-0.8,1.8-1.1,3.2-1.1c1.1,0,1.9,0.2,2.6,0.7s1.1,1.1,1.4,2L52,50.9c-0.1-0.3-0.2-0.5-0.3-0.6c-0.1-0.2-0.3-0.4-0.5-0.5s-0.5-0.2-0.7-0.2c-0.6,0-1.1,0.2-1.4,0.7c-0.2,0.4-0.4,0.9-0.4,1.7c0,1,0.1,1.6,0.4,2c0.3,0.4,0.7,0.5,1.2,0.5c0.5,0,0.9-0.1,1.2-0.4s0.4-0.7,0.6-1.2l2.3,0.7C54.2,54.3,54,54.8,53.6,55.3z"/></g></svg>',
                    iconClose:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
                    iconLink:'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" data-icon="external-link" viewBox="0 0 32 40" x="0px" y="0px"><path d="M32 0l-8 1 2.438 2.438-9.5 9.5-1.063 1.063 2.125 2.125 1.063-1.063 9.5-9.5 2.438 2.438 1-8zm-30 3c-.483 0-1.047.172-1.438.563-.391.391-.563.954-.563 1.438v25c0 .483.172 1.047.563 1.438.391.391.954.563 1.438.563h25c.483 0 1.047-.172 1.438-.563.391-.391.563-.954.563-1.438v-15h-3v14h-23v-23h15v-3h-16z"/></svg>',
                    iconWarning:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.96 80.65"><path d="M88.59,65.27,71.23,35.19,53.86,5.12a10.26,10.26,0,0,0-17.76,0L18.73,35.19,1.37,65.27a10.26,10.26,0,0,0,8.88,15.38H79.71a10.26,10.26,0,0,0,8.88-15.38ZM84.26,73a5.16,5.16,0,0,1-4.55,2.63H10.25A5.26,5.26,0,0,1,5.7,67.77L23.06,37.69,40.43,7.62a5.26,5.26,0,0,1,9.1,0L66.9,37.69,84.26,67.77A5.15,5.15,0,0,1,84.26,73Z"/><rect x="41.72" y="59.8" width="6.52" height="6.52"/><polygon points="39.32 33.25 41.76 56.38 48.2 56.38 50.64 33.25 50.64 28.39 39.32 28.39 39.32 33.25"/></svg>'},
                t= document.createElement("style");
                   t.id="cookieControl-styling",
                   t.type="text/css";
                   t.appendChild(document.createTextNode('#ccc{
                         -moz-osx-font-smoothing:grayscale;
                         -webkit-font-smoothing:antialiased;
                          font-family:Arial,sans-serif;
                          font-size:12px;
                          font-smooth:antialised;
                          line-height:1.4em;
                          position:fixed;
                         z-index:2147483647
                        }@media (min-width:1024px){#ccc{font-size:16px}}
                     #ccc-overlay{
                         -webkit-backface-visibility:hidden;
                         -webkit-perspective:1000;
                         -webkit-transform:translate3d(0,-100%,0);
                         backface-visibility:hidden;
                        background:rgba(0,0,0,.4);
                        bottom:0;left:0;opacity:0;
                        perspective:1000;position:fixed;right:0;top:0;transform:translate3d(0,-100%,0);transition:opacity .4s,-webkit-transform 0s;transition:transform 0s,opacity .4s;transition:transform 0s,opacity .4s,-webkit-transform 0s;will-change:transform,opacity;z-index:1}#ccc[open] #ccc-overlay{-webkit-transform:translateZ(0);opacity:1;transform:translateZ(0)}#ccc-icon{background:transparent;border:0;bottom:0;cursor:pointer;height:80px;padding:0;position:fixed;width:80px;z-index:10}#ccc[left] #ccc-icon{left:0}#ccc[right] #ccc-icon{right:0}#ccc-icon[hidden]{display:none}#ccc[dark] #ccc-icon{fill:#000025}#ccc[dark] #ccc-icon #star path{fill:#fff}#ccc[light] #ccc-icon{fill:#555}#ccc[light] #ccc-icon #star path{fill:#f4f4f4}#ccc-module{-webkit-backface-visibility:hidden;-webkit-perspective:1000;backface-visibility:hidden;height:100%;perspective:1000;position:fixed;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s;width:100%;will-change:transform;z-index:2}#ccc[slideout] #ccc-module{bottom:0;max-width:420px;top:0;width:90%}#ccc[slideout][left] #ccc-module{-webkit-transform:translateZ(0);left:auto;right:100%;transform:translateZ(0)}#ccc[slideout][left][open] #ccc-module{-webkit-transform:translate3d(100%,0,0);right:100%;transform:translate3d(100%,0,0)}#ccc[slideout][right] #ccc-module{-webkit-transform:translateZ(0);left:100%;right:auto;transform:translateZ(0)}#ccc[slideout][right][open] #ccc-module{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}#ccc[popup] #ccc-module{-webkit-transform:translateZ(0);bottom:0;left:0;right:0;top:100%;transform:translateZ(0)}#ccc[popup][open] #ccc-module{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}#ccc-content{box-sizing:border-box;overflow-y:auto;padding:24px;position:absolute}#ccc[slideout] #ccc-content{bottom:0;left:0;right:0;top:0}#ccc[popup] #ccc-content{-webkit-transform:translate(-50%,-50%);border-radius:12px;height:90%;left:50%;max-height:600px;max-width:600px;top:50%;transform:translate(-50%,-50%);width:90%}#ccc[dark] #ccc-content{background-color:#313147;color:#fff;fill:#fff}#ccc[light] #ccc-content{background-color:#f4f4f4;color:#333;fill:#333}#ccc-close{align-items:center;background-color:transparent;border:0;cursor:pointer;display:flex;padding:0!important;position:absolute;right:16px;top:16px}#ccc-title{font-size:1.2em;font-weight:700;line-height:1.5em;margin:0;padding-right:32px;text-align:left}#ccc #ccc-recommended-settings{clear:both;float:none;margin-left:0}#ccc h3{font-weight:700;margin:0;padding-right:120px}#ccc h3,#ccc p{font-size:1em;line-height:1.5em;text-align:left}#ccc p{font-weight:400;margin:1em 0}#ccc hr{border:0;height:1px;margin:24px 0;opacity:.25}#ccc .ccc-svg-element{display:inline-block;height:16px;margin-left:8px;position:relative;top:6px;width:16px}#ccc[dark] hr{background-color:#fff}#ccc[dark] a,#ccc[dark] h2,#ccc[dark] h3,#ccc[dark] p,#ccc[dark] span{color:#fff;fill:#fff}#ccc[light] hr{background-color:#333}#ccc[light] a,#ccc[light] h2,#ccc[light] h3,#ccc[light] p,#ccc[light] span{color:#333;fill:#333}#ccc .optional-cookie{position:relative}.checkbox-toggle{margin:0;position:absolute;right:0;top:-3px}#ccc .checkbox-toggle-input{bottom:0;display:block;height:100%;left:0;margin:0;padding:0;position:absolute;right:0;top:0;width:100%;z-index:-1}#ccc[checkbox-optin] .checkbox-toggle{border:2px solid #fff;border-radius:4px}#ccc[checkbox-optin] .checkbox-toggle-label{display:block;height:24px;width:24px}#ccc[checkbox-optin] .checkbox-toggle-off,#ccc[checkbox-optin] .checkbox-toggle-on{display:none}#ccc[checkbox-optin] .checkbox-toggle-toggle{border-radius:4px;display:block;height:100%;position:relative;width:100%}#ccc[checkbox-optin] .checkbox-toggle input:checked~.checkbox-toggle-toggle:after{-webkit-transform:rotate(45deg);border:solid #fff;border-width:0 3px 3px 0;content:"";height:10px;left:9px;position:absolute;top:5px;transform:rotate(45deg);width:5px}#ccc[slider-optin] .checkbox-toggle{border:4px solid #fff;border-radius:50px}#ccc[slider-optin] .checkbox-toggle-label{cursor:pointer;display:flex;margin:0;z-index:1}#ccc[slider-optin] .checkbox-toggle-off,#ccc[slider-optin] .checkbox-toggle-on{flex:1;flex-basis:50%;font-size:.75em;font-weight:700;min-width:40px;padding:0 6px;text-align:center;white-space:nowrap;width:50%;z-index:2}#ccc[slider-optin] .checkbox-toggle-off{opacity:.65}#ccc[slider-optin] .checkbox-toggle-toggle{background-color:#000;border-radius:50px;cursor:pointer;display:block;height:100%;left:0;position:absolute;top:0;transition:all .4s ease;width:50%;z-index:3}#ccc[slider-optin] .checkbox-toggle input:checked~.checkbox-toggle-toggle{left:50%}#ccc[dark][slider-optin] .checkbox-toggle{background-color:#111125;border-color:#111125}#ccc[dark][checkbox-option] .checkbox-toggle{background-color:#111125;border-color:#fff}#ccc[dark] .checkbox-toggle-toggle{background-color:#2f2f5f}#ccc[light] .checkbox-toggle{background-color:#555;border-color:#555}#ccc[light] .checkbox-toggle-toggle{background-color:#000}#ccc[light] .checkbox-toggle-on,#ccc[slider-optin][light] .checkbox-toggle-off{color:#fff}#ccc .ccc-alert{border-radius:8px;height:0;margin:-16px 0 0;overflow:hidden}#ccc .ccc-alert[visible]{height:auto;margin:24px 0;padding:16px 16px 0}#ccc .ccc-alert-title{align-items:center;display:flex;padding:0}#ccc .ccc-alert-icon{display:inline-block;flex-shrink:0;height:30px;margin:0 8px 0 0;width:30px}#ccc .ccc-alert-break{margin:12px 0}.third-party-cookie-link{align-items:center;display:flex;margin:16px 0}.third-party-cookie-name{font-size:1em;font-weight:700}.third-party-cookie-icon{display:inline-block;height:16px;margin-left:16px;width:16px}#ccc[dark] .ccc-alert{fill:#fff}#ccc[dark] .ccc-alert,#ccc[dark] .third-party-cookie-link{background:#111125;color:#fff}#ccc[light] .ccc-alert,#ccc[light] .third-party-cookie-link{background:#eaeaea}#ccc #ccc-notify{-webkit-transform:translate3d(0,100%,0);border-radius:0;bottom:0;display:flex;flex-direction:column;height:auto;justify-content:space-between;left:0;margin:0;min-height:48px;overflow:hidden;padding:16px;position:fixed;right:0;transform:translate3d(0,100%,0);transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;z-index:12}#ccc #ccc-notify:empty{height:0;padding:0}#ccc #ccc-notify[visible]{-webkit-transform:translateZ(0);transform:translateZ(0)}#ccc #ccc-notify h3{padding:0}#ccc #ccc-notify p{font-size:.9em;margin:0;opacity:.8}#ccc .ccc-notify-buttons{margin-top:16px;position:relative}#ccc .ccc-notify-button{background:transparent;border:2px solid;border-radius:4px;cursor:pointer;font-size:1em;font-weight:400;line-height:1.5em;margin:4px 8px 4px 0;padding:8px 16px!important}#ccc #ccc-notify-dismiss{background-color:transparent;border:0;cursor:pointer;display:inline-flex;height:24px;padding:0!important;position:absolute;right:0;top:-4px;width:24px}@media (min-width:400px){#ccc #ccc-notify-dismiss{position:relative;right:auto}}@media (min-width:600px){#ccc #ccc-notify{align-items:center;flex-direction:row;font-size:12px}#ccc .ccc-notify-buttons{flex-shrink:0;margin-top:0;white-space:nowrap}}@media (min-width:1200px){#ccc #ccc-notify{font-size:16px;padding:16px 100px;z-index:0}}#ccc[dark] #ccc-notify{background-color:#313147;color:#fff;fill:#fff}#ccc[dark] .ccc-notify-button{border-color:#fff;color:#fff}#ccc[dark] .ccc-button-solid{background:#fff;color:#111125;font-weight:700}#ccc[light] #ccc-notify{background:#f4f4f4;color:#000;fill:#000}#ccc[light] .ccc-notify-button{border-color:#000;color:#000}#ccc[light] .ccc-button-solid{background:#000;color:#fff;font-weight:700}#ccc-info-link{font-size:.8em;font-weight:700;text-decoration:none}#ccc-info-link .svg-element{height:14px;margin-left:6px;width:14px}#ccc[slideout] #ccc-info{height:100px}#ccc[popup] #ccc-info{height:40px}@media print{#ccc{display:none!important}}#ccc-close-label{display:none}#ccc[labelled] #ccc-title{padding-right:96px}#ccc[labelled] #ccc-close{padding:8px!important;right:0;top:0}#ccc[labelled][light] #ccc-close{background-color:#eaeaea}#ccc[labelled][dark] #ccc-close{background-color:#111125}#ccc[labelled] #ccc-close-label{display:block;font-size:16px}#ccc[close-button] #ccc-close{display:none}#ccc[close-button] #ccc-title{padding-right:0}#ccc-dismiss-button{display:none}#ccc[close-button] #ccc-dismiss-button{display:block;margin:16px 0 32px}#ccc[highlight-focus] .ccc-tabbable,#ccc[highlight-focus] .ccc-tabbable:focus{outline:0}#ccc[highlight-focus] .ccc-link.ccc-tabbable:focus{-webkit-filter:invert(100%);filter:invert(100%);padding:8px}#ccc[light][highlight-focus] .ccc-link.ccc-tabbable:focus{background-color:#eaeaea!important;border-color:#eaeaea!important}#ccc[dark][highlight-focus] .ccc-link.ccc-tabbable:focus{background-color:#111125!important;border-color:#111125!important}#ccc[highlight-focus] .ccc-button-solid:focus,#ccc[highlight-focus] .checkbox-toggle-input:focus~.checkbox-toggle-toggle,#ccc[highlight-focus] .third-party-cookie-link:focus,#ccc[labelled][highlight-focus] #ccc-close:focus{-webkit-filter:invert(100%);filter:invert(100%)}#ccc[light][highlight-focus] .ccc-tabbable:focus{box-shadow:0 4px 8px 0 hsla(0,0%,100%,.2),0 6px 20px 0 hsla(0,0%,100%,.2)}#ccc[dark][highlight-focus] .ccc-tabbable:focus{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.2)}#ccc[highlight-focus] #ccc-icon:focus{-webkit-filter:invert(100%);filter:invert(100%);outline:none}#ccc[highlight-focus] #ccc-icon:active,#ccc[highlight-focus] #ccc-icon:hover,#ccc[highlight-focus] #ccc .ccc-tabbable:active,#ccc[highlight-focus] #ccc .ccc-tabbable:hover{-webkit-filter:none!important;box-shadow:none!important;filter:none!important}#ccc-accessibility{-webkit-clip-path:inset(50%);border:0;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute!important;width:1px;word-wrap:normal!important}')),document.head.appendChild(t);var n=document.body,O=document.createElement("section");O.id="ccc",O.style.zIndex=21474836475,O.innerHTML='<div id="ccc-accessibility" role="alert" aria-live="assertive"></div><div id="ccc-overlay"></div><button id="ccc-icon" aria-controls="ccc-module"></button><div id="ccc-notify" role="region"></div><div id="ccc-module" role="region"><div id="ccc-content"><button id="ccc-close" class="ccc-link ccc-tabbable" tabindex="0"><span id="ccc-close-label"></span>'+z.iconClose+'</button><h2 id="ccc-title"></h2><p id="ccc-intro"></p><div id="ccc-statement"></div><button id="ccc-recommended-settings" class="ccc-notify-button ccc-button-solid ccc-tabbable" onclick="CookieControl.notifyAccept()"></button><hr /><h3 id="ccc-necessary-title"></h3><p id="ccc-necessary-description"></p><hr /><div id="ccc-optional-categories"></div><div id="ccc-end"><button id="ccc-dismiss-button" class="ccc-notify-button ccc-button-solid ccc-tabbable" onclick="CookieControl.hide()"></button></div><div id="ccc-info"></div></div></div>';var E={accessibility:O.querySelector("#ccc-accessibility"),title:O.querySelector("#ccc-title"),intro:O.querySelector("#ccc-intro"),necessaryTitle:O.querySelector("#ccc-necessary-title"),necessaryDescription:O.querySelector("#ccc-necessary-description"),optionalCookies:O.querySelector("#ccc-optional-categories"),hrs:O.querySelectorAll("hr"),widget:O.querySelector("#ccc-module"),button:O.querySelector("#ccc-icon"),content:O.querySelector("#ccc-content"),close:O.querySelector("#ccc-close"),closeLabel:O.querySelector("#ccc-close-label"),overlay:O.querySelector("#ccc-overlay"),aboutInfo:O.querySelector("#ccc-info"),statement:O.querySelector("#ccc-statement"),notify:O.querySelector("#ccc-notify"),recommendedSettings:O.querySelector("#ccc-recommended-settings"),end:O.querySelector("#ccc-end"),dismissButton:O.querySelector("#ccc-dismiss-button")},N={title:E.title,intro:E.intro,necessaryTitle:E.necessaryTitle,necessaryDescription:E.necessaryDescription,acceptRecommended:E.recommendedSettings,closeLabel:E.closeLabel};function q(){O.setAttribute("open",""),O.removeAttribute("closed"),E.notify.removeAttribute("visible"),E.close.focus()}function H(){O.setAttribute("closed",""),O.removeAttribute("open"),!1===M.interactedWith&&(M.interactedWith=!0,s())}function s(){if(M.consentDate=Date.now(),R("CookieControl",JSON.stringify(M),G.consentCookieExpiry),1==T.record_consent_state&&1==G.logConsent){var t="https://clapi.civiccomputing.com/1/log?d="+encodeURIComponent(document.location.hostname)+"&u="+o+"&c="+JSON.stringify(M),e=new XMLHttpRequest;e.open("GET",t),e.onload=function(){e.status},e.send()}}function D(){E.accessibility.innerHTML=Z("accessibilityAlert"),E.accessibility.setAttribute("visible","")}function P(t){return t.replace(/[\s()<>@,;:"?={}\/\\\[\]]/g,"")}function c(t){var e=d(),o="false";for(var c in e)if(c===P(t)){o=e[c];break}return o}function B(t,e){return c(t).toLowerCase()===e.toLowerCase()}function R(t,e,o){for(var c=0,i=location.hostname.split("."),n=P(t)+"="+e+";path=/;";c<i.length&&!1===B(t,e);){domainTest=i.slice(-1-++c).join(".");var r=new Date,a=new Date(r.setDate(r.getDate()+o));document.cookie=n+"domain="+domainTest+";expires="+a.toUTCString()+";"}}function d(){var t={};if(!document.cookie.trim())return{};for(var e=document.cookie.split(/\s*;\s*/),o=0;o<e.length;o++){var c=e[o].split(/\s*=\s*/);c&&(t[c[0]]=unescape(c[1]))}return t}function U(t){document.cookie=P(t)+"=;expires=Thu, 01-Jan-1970 00:00:01 GMT;",document.cookie=P(t)+"=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;";for(var e=location.hostname.split(".");e.length;){var o=e.join(".");document.cookie=P(t)+"=;expires=Thu, 01-Jan-1970 00:00:01 GMT;domain="+o,document.cookie=P(t)+"=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;domain="+o,document.cookie=P(t)+"=;expires=Thu, 01-Jan-1970 00:00:01 GMT;domain=."+o,document.cookie=P(t)+"=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;domain=."+o,e.shift()}}function F(t){var e=d(),o=Object.keys(e);if(!0===t)for(var c=0;c<o.length;c++)U(o[c]);else{var i=[];i.push("CookieControl");for(var n=0;n<G.necessaryCookies.length;n++){i=p(G.necessaryCookies[n],o,i)}if(null!=G.optionalCookies)for(var r=0;r<G.optionalCookies.length;r++){var a=G.optionalCookies[r];if((M.optionalCookies[P(a.name)]===w||"legitimate interest"===M.optionalCookies[P(a.name)])&&(i.push(P(a.name)),null!=a.cookies))for(var l=0;l<a.cookies.length;l++)i=p(a.cookies[l],o,i)}for(var s=0;s<o.length;s++)i.indexOf(o[s])<0&&U(o[s])}}function p(t,e,o){if(t.lastIndexOf("*")==t.length-1)for(var c=t.slice(0,-1),i=0;i<e.length;i++)0==e[i].indexOf(c)&&o.push(e[i]);else o.push(t);return o}function J(t,e){var o,c,i=G.optionalCookies[t],n=document.querySelector('#ccc .optional-cookie[data-index="'+t+'"] .checkbox-toggle-input');M.optionalCookies[P(i.name)]="legitimateInterest"===e?"legitimate interest":w,null!=i.thirdPartyCookies&&(o=t,(c=O.querySelector('#ccc-optional-categories [data-index="'+o+'"] .ccc-alert')).innerHTML="",c.removeAttribute("visible")),null!=i.onAccept&&i.onAccept(),!0===e&&(M.interactedWith=!0,s()),!1!==e&&"legitimateInterest"!==e||(n.checked=!0)}function u(t,e){var o=G.optionalCookies[t],c=document.querySelector('#ccc .optional-cookie[data-index="'+t+'"] .checkbox-toggle-input');M.optionalCookies[P(o.name)]=L,F(),null!=o.thirdPartyCookies&&function(t){var e=G.optionalCookies[t],o=O.querySelector('#ccc-optional-categories [data-index="'+t+'"] .ccc-alert');o.setAttribute("visible",""),o.innerHTML="",o.innerHTML='<h3 class="ccc-alert-title"><span class="ccc-alert-icon">'+z.iconWarning+"</span>"+Z("thirdPartyTitle")+'</h3><hr class="ccc-alert-break"/><p class="ccc-alert-description">'+Z("thirdPartyDescription")+"</p>";for(var c=0;c<e.thirdPartyCookies.length;c++){var i=e.thirdPartyCookies[c],n=document.createElement("a");n.className="third-party-cookie-link ccc-tabbable",n.href=i.optOutLink,n.target="_blank",n.innerHTML='<span class="third-party-cookie-name">'+i.name+'</span><span class="third-party-cookie-icon">'+z.iconLink+"</span>",o.appendChild(n)}}(t),null!=o.onRevoke&&o.onRevoke(),!0===e&&s(),!1===e&&(c.checked=!1)}function e(t){var e;if(null!=t&&t.product&&I[t.product.toUpperCase()]){var o="https://apikeys.civiccomputing.com/c/v?d="+encodeURIComponent(document.location.hostname)+"&p="+encodeURIComponent(I[t.product.toUpperCase()])+"&v=8&k="+encodeURIComponent(t.apiKey)+"&format=json",c=new XMLHttpRequest;c.open("GET",o),c.onload=function(){200===c.status?(e="API VERIFICATION PASSED",function(t,e){if(function(t,e){if(t&&T.product.toLowerCase()!==I.COMMUNITY.toLowerCase()){var o=T.geo.countryName,c=T.geo.country;if(""===c||""===o)return!1;if(0<=a.indexOf(c)||0<=l.indexOf(o))return!1;if(0<=t.indexOf("all")||0<=t.indexOf(c)||0<=t.indexOf(o)){void 0===e&&(e=[]);for(var i=0;i<e.length;i++){var n=e[i];null!=n.onAccept&&n.onAccept()}return!0}}return!1}(e.excludedCountries,e.optionalCookies))return;if(null==document.querySelector("#ccc")){if(null==n)return console.error("Cookie Control cannot be rendered. Please ensure the script is added inside the <body> of your page instead of <head>.");n.appendChild(O)}if(t.product.toLowerCase()===I.COMMUNITY.toLowerCase())for(var o=0;o<i.length;o++)e[i[o]]&&(console.warn("Cookie Control: Users with a community license cannot use the "+i[o]+" option."),delete e[i[o]]);g(e)}(T=JSON.parse(c.responseText),t)):(e="API VERIFICATION FAILED",console.error("Cookie Control failed to verify your API key.\nPlease refer to https://www.civicuk.com/cookie-control/v8/documentation."))},c.send()}else e="FAILED",console.error("Cookie Control failed to verify your settings.\nPlease refer to https://www.civicuk.com/cookie-control/v8/documentation.");return e}E.button.addEventListener("click",function(){O.hasAttribute("open")?H():q();this.blur()},!1),E.close.addEventListener("click",H,!1);var G=JSON.parse(JSON.stringify({logConsent:!0,initialState:"closed",notifyOnce:!1,position:"right",layout:"slideout",theme:"dark",closeStyle:"icon",toggleType:"slider",branding:{},statement:{},necessaryCookies:[],consentCookieExpiry:90,accessibility:{accessKey:"c",highlightFocus:!1},text:{accessibilityAlert:"This site uses cookies to store information. Press accesskey C to learn more about your options.",title:"This site uses cookies to store information on your computer.",intro:"Some of these cookies are essential, while others help us to improve your experience by providing insights into how the site is being used.",necessaryTitle:"Necessary Cookies",necessaryDescription:"Necessary cookies enable core functionality such as page navigation and access to secure areas. The website cannot function properly without these cookies, and can only be disabled by changing your browser preferences.",thirdPartyTitle:"Some cookies require your attention",thirdPartyDescription:"Consent for the following cookies could not be automatically revoked. Please follow the link(s) below to opt out manually.",notifyTitle:"Your choice regarding cookies on this site",notifyDescription:"We use cookies to optimise site functionality and give you the best possible experience.",on:"On",off:"Off",accept:"Accept",acceptRecommended:"Accept Recommended Settings",settings:"Cookie Preferences",closeLabel:"Close"}}));function g(t){for(var e=Object.keys(t),o=0;o<e.length;o++)if("object"==typeof t[e[o]]&&!1===Array.isArray(t[e[o]])){if("branding"===e[o].toLowerCase()&&T.product.toLowerCase()===I.COMMUNITY.toLowerCase())continue;for(var c=Object.keys(t[e[o]]),i=0;i<c.length;i++)G[e[o]][c[i]]=t[e[o]][c[i]]}else"initialstate"===e[o].toLowerCase()&&"notify"===t[e[o]].toLowerCase()&&T.product.toLowerCase()===I.COMMUNITY.toLowerCase()?console.warn("Cookie Control: Users with a community license cannot use the notify option."):"layout"===e[o].toLowerCase()&&"popup"===t[e[o]].toLowerCase()&&T.product.toLowerCase()===I.COMMUNITY.toLowerCase()?console.warn("Cookie Control: Users with a community license cannot use the popup layout option."):G[e[o]]=t[e[o]];!function(t){for(var e=["light","dark","popup","slideout","left","right","labelled","close-button","highlight-focus","custom-branding","slider-optin","checkbox-optin"],o=0;o<e.length;o++)O.removeAttribute(e[o]);!0===t.accessibility.highlightFocus&&O.setAttribute("highlight-focus","");E.button.setAttribute("accesskey",t.accessibility.accessKey),"slider"===t.toggleType?O.setAttribute("slider-optin",""):O.setAttribute("checkbox-optin","");M.necessaryCookies=t.necessaryCookies,M.consentExpiry=t.consentCookieExpiry,"light"===t.theme.toLowerCase()?O.setAttribute("light",""):O.setAttribute("dark","");"popup"===t.layout.toLowerCase()?O.setAttribute("popup",""):O.setAttribute("slideout","");"left"===t.position.toLowerCase()?O.setAttribute("left",""):O.setAttribute("right","");"labelled"===t.closeStyle?(O.setAttribute("labelled",""),N.closeLabel=E.closeLabel):"button"===t.closeStyle&&(O.setAttribute("close-button",""),N.closeLabel=E.dismissButton);var c="";null!=t.branding.fontFamily&&(c+="#ccc, #ccc button {font-family: "+t.branding.fontFamily+" !important;}");null!=t.branding.fontColor&&(c+="#ccc, #ccc #ccc-content, #ccc #ccc-notify, #ccc h2, #ccc h3, #ccc p, #ccc span, #ccc a {color: "+t.branding.fontColor+" !important; fill: "+t.branding.fontColor+" !important;} #ccc hr {background-color: "+t.branding.fontColor+" !important;}");null!=t.branding.backgroundColor&&(c+="#ccc #ccc-content, #ccc #ccc-notify { background-color: "+t.branding.backgroundColor+" !important;}");null!=t.branding.fontSizeHeaders&&(c+="#ccc h2, #ccc h3 { font-size: "+t.branding.fontSizeHeaders+" !important;}");null!=t.branding.fontSize&&(c+="#ccc, #ccc p, #ccc .third-party-cookie-link { font-size: "+t.branding.fontSize+" !important;}");null!=t.branding.fontSizeTitle&&(c+="#ccc #ccc-title { font-size: "+t.branding.fontSizeTitle+" !important;}");null!=t.branding.toggleText&&(c+="#ccc .checkbox-toggle-on, #ccc .checkbox-toggle-off { color: "+t.branding.toggleText+" !important;}");null!=t.branding.toggleColor&&(c+="#ccc .checkbox-toggle-toggle { background-color: "+t.branding.toggleColor+" !important;}");null!=t.branding.toggleBackground&&(c+="#ccc .checkbox-toggle { background-color: "+t.branding.toggleBackground+" !important; border-color: "+t.branding.toggleBackground+" !important;}");null!=t.branding.alertText&&(c+="#ccc .ccc-alert, #ccc .ccc-alert a, #ccc .ccc-alert svg { color: "+t.branding.alertText+" !important; fill : "+t.branding.alertText+" !important;}");null!=t.branding.alertBackground&&(c+="#ccc #ccc-icon { fill: "+t.branding.alertBackground+" !important;} #ccc .ccc-alert { background-color: "+t.branding.alertBackground+" !important;}");null!=t.branding.acceptText&&(c+="#ccc .ccc-notify-button.ccc-button-solid { color: "+t.branding.acceptText+" !important;}");null!=t.branding.acceptBackground&&(c+="#ccc .ccc-notify-button.ccc-button-solid { background-color: "+t.branding.acceptBackground+" !important; border-color: "+t.branding.acceptBackground+" !important;}");if(""!=c){O.setAttribute("custom-branding","");var i=document.getElementById("cookieControl-styling"),n=document.createTextNode(c);i.appendChild(n)}if(!0===t.branding.removeIcon)E.button.setAttribute("hidden",""),E.button.innerHTML="";else{var r;E.button.removeAttribute("hidden"),r="left"===t.position.toLowerCase()?z.iconLeft:z.iconRight,null!=t.branding.buttonIcon&&(r='<img src="'+t.branding.buttonIcon+'" alt="Cookie Control toggle icon" style="width: '+t.branding.buttonIconWidth+"; height: "+t.branding.buttonIconHeight+';" />',E.button.style.width=t.branding.buttonIconWidth,E.button.style.height=t.branding.buttonIconHeight),E.button.innerHTML=r}!0!==t.branding.removeAbout&&(E.aboutInfo.innerHTML='<a id="ccc-info-link" class="ccc-link ccc-tabbable" href="https://www.civicuk.com/cookie-control" target="_blank" rel="noopener">About this tool <span class="ccc-svg-element">'+z.iconLink+"</span></a>");if(null!=t.locales&&T.product.toLowerCase()!==I.COMMUNITY.toLowerCase()){var a=window.navigator.userLanguage||window.navigator.language,l=(a=a.replace("-","_")).substring(0,2),s=t.locales.filter(function(t){return t.locale.toLowerCase()===a}),d=t.locales.filter(function(t){return t.locale.toLowerCase()===l});0<s.length?S=s[0]:0<d.length&&(S=d[0])}if(function(){var t;for(var e in t=null!=S&&null!=S.text?S.text:G.text,N)N[e].innerHTML=t[e]||G.text[e]}(),E.optionalCookies.innerHTML="",null!=t.optionalCookies&&0<t.optionalCookies.length)for(var p=0;p<t.optionalCookies.length;p++){var u=t.optionalCookies[p],g=document.createElement("div"),f=u.label||"Purpose "+(parseInt(p)+1),h=u.description||"A description for "+f+" has not been provided.";null!=S&&null!=S.text&&null!=S.text.optionalCookies&&null!=S.text.optionalCookies[p]&&null!=S.text.optionalCookies[p].label&&(f=S.text.optionalCookies[p].label),null!=S&&null!=S.text&&null!=S.text.optionalCookies&&null!=S.text.optionalCookies[p]&&null!=S.text.optionalCookies[p].label&&(h=S.text.optionalCookies[p].description),g.setAttribute("data-index",p),g.className="optional-cookie",g.innerHTML='<h3 class="optional-cookie-header">'+f+'</h3><div class="checkbox-toggle ccc-tabbable"><label class="checkbox-toggle-label"><input class="checkbox-toggle-input" type="checkbox" onchange="CookieControl.toggleCategory('+p+', true)" /><span class="checkbox-toggle-on">'+Z("on")+'</span><span class="checkbox-toggle-off">'+Z("off")+'</span><span class="checkbox-toggle-toggle" data-index="'+p+'"></span></label></div><p>'+h+'</p><div class="ccc-alert"></div><hr />';g.querySelector("input"),g.querySelector(".toggle");E.optionalCookies.appendChild(g),M.optionalCookies[P(u.name)]===w?J(p,!1):"string"==typeof(k=u).lawfulBasis&&"legitimate interest"===k.lawfulBasis.toLowerCase()&&!1===(b=u.name,M.optionalCookies[P(b)]===L||B(b,L))&&J(p,"legitimateInterest")}else console.warn("Please provide at least one optional cookie category.");var b;var k;var m=t.statement;null!=S&&null!=S.text&&null!=S.text.statement&&(m=S.text.statement);if(null!=m&&null!=m.description&&null!=m.name&&null!=m.url&&null!=m.updated){M.statement={shown:!0,updated:m.updated};var x=document.createElement("p");x.innerHTML=m.description+' <a target="_blank" rel="noopener" href="'+m.url+'" class="ccc-link ccc-tabbable">'+m.name+'<span class="ccc-svg-element">'+z.iconLink+"</span></a>",E.statement.innerHTML="",E.statement.appendChild(x)}if(null!=m&&null!=m.updated){var y=m.updated.split("/"),v=new Date(y[2],parseInt(y[1])-1,y[0]).getTime();v>M.consentDate&&(F(!0),U("CookieControl"),M=A)}var C=!1===M.interactedWith;!0===t.notifyOnce&&(C=null==M.initialState.type);"open"===t.initialState.toLowerCase()&&C?(M.initialState={type:"open"},window.setTimeout(function(){q(),D()},800)):"notify"===t.initialState.toLocaleLowerCase()&&C?(M.initialState={type:"notify"},window.setTimeout(function(){E.notify.innerHTML='<div class="ccc-notify-text"><h3>'+Z("notifyTitle")+"</h3><p>"+Z("notifyDescription")+'</p></div><div class="ccc-notify-buttons"><button id="ccc-notify-accept" class="ccc-notify-button ccc-button-solid ccc-tabbable" onclick="CookieControl.notifyAccept()">'+Z("accept")+'</button><button aria-controls="ccc-module" class="ccc-notify-button ccc-link ccc-tabbable" onclick="CookieControl.open()">'+Z("settings")+'</button><button id="ccc-notify-dismiss" class="ccc-link ccc-tabbable" onclick="CookieControl.notifyDismiss()" tabindex="0">'+z.iconClose+"</button></div>",E.notify.setAttribute("visible",""),D()},800)):(M.initialState={type:"closed"},H());null!=t.onLoad&&"function"==typeof t.onLoad&&t.onLoad();R("CookieControl",JSON.stringify(M),t.consentCookieExpiry)}(G),F()}function Z(t){return(null!=S&&null!=S.text?S.text:G.text)[t]||G.text[t]}return{info:function(){return"Cookie Control Version: "+8.12.toFixed(1)},load:function(t){return e(t)},update:function(t){return g(t),"Cookie Control - update complete"},saveCookie:function(t,e,o){return R(t,e,o)},getCookie:function(t){return c(t)},getAllCookies:function(){return d()},delete:function(t){return U(t),"Cookie Control - "+t+" cookie successfully deleted."},deleteAll:function(t){return F(t),"Cookie Control - all cookies successfully deleted."},toggleCategory:function(t,e){var o,c,i;void 0===e&&(e=!1),o=t,c=e,i=G.optionalCookies[o],M.optionalCookies[P(i.name)]===w||"legitimate interest"===M.optionalCookies[P(i.name)]?u(o,c):J(o,c)},config:function(){return G},open:function(){return q(),"Cookie Control Opened"},hide:function(){return H(),"Cookie Control Closed"},notifyAccept:function(){return function(){if(E.notify.removeAttribute("visible"),null!=G.optionalCookies&&0<G.optionalCookies.length)for(var t=0;t<G.optionalCookies.length;t++){var e=G.optionalCookies[t];("string"==typeof(o=e).initialConsentState&&"on"===o.initialConsentState.toLowerCase()||"boolean"==typeof o.initialConsentState&&!0===o.initialConsentState||"string"==typeof o.recommendedState&&"on"===o.recommendedState.toLowerCase()||"boolean"==typeof o.recommendedState&&!0===o.recommendedState)&&J(t,!1)}var o;M.initialState={type:"notify",action:"accepted"},M.interactedWith=!0,H(),s()}(),"Cookie Notification Accepted"},notifyDismiss:function(){return E.notify.removeAttribute("visible"),M.initialState={type:"notify",action:"dismissed"},M.interactedWith=!0,s(),"Cookie Notification Dismissed"},geoInfo:function(){return{country:T.geo.country,countryName:T.geo.countryName,withinEU:0<=a.indexOf(T.geo.country)}}}}();