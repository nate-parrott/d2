!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.Impetus=n.exports}}(this,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return o=function(){return e},e}var i=.04,u=.11;window.addEventListener("touchmove",function(){});var r=function e(t){function r(){b.call(L,O,G)}function c(e){if("touchmove"===e.type||"touchstart"===e.type||"touchend"===e.type){var t=e.targetTouches[0]||e.changedTouches[0];return{x:t.clientX,y:t.clientY,id:t.identifier}}return{x:e.clientX,y:e.clientY,id:null}}function d(e){var t=c(e);K||N||(K=!0,Q=!1,k=t.id,R=V=t.x,U=j=t.y,W=[],m(R,U),document.addEventListener("touchmove",a,!!o()&&{passive:!1}),document.addEventListener("touchend",f),document.addEventListener("touchcancel",v),document.addEventListener("mousemove",a,!!o()&&{passive:!1}),document.addEventListener("mouseup",f))}function a(e){e.preventDefault();var t=c(e);K&&t.id===k&&(V=t.x,j=t.y,m(R,U),p())}function f(e){var t=c(e);K&&t.id===k&&v()}function v(){K=!1,m(R,U),x(),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",f),document.removeEventListener("touchcancel",v),document.removeEventListener("mouseup",f),document.removeEventListener("mousemove",a)}function m(e,t){for(var n=Date.now();W.length>0&&!(n-W[0].time<=100);)W.shift();W.push({x:e,y:t,time:n})}function l(){var e=V-R,t=j-U;if(O+=e*g,G+=t*g,F){var n=y();0!==n.x&&(O-=e*h(n.x)*g),0!==n.y&&(G-=t*h(n.y)*g)}else y(!0);r(),R=V,U=j,J=!1}function h(e){return 5e-6*Math.pow(e,2)+1e-4*e+.55}function p(){J||s(l),J=!0}function y(e){var t=0,n=0;return void 0!==I&&O<I?t=I-O:void 0!==P&&O>P&&(t=P-O),void 0!==S&&G<S?n=S-G:void 0!==D&&G>D&&(n=D-G),e&&(0!==t&&(O=t>0?I:P),0!==n&&(G=n>0?S:D)),{x:t,y:n,inBounds:0===t&&0===n}}function x(){var e=W[0],t=W[W.length-1],n=t.x-e.x,o=t.y-e.y,i=t.time-e.time,u=i/15/g;z=n/u||0,C=o/u||0;var r=y();(Math.abs(z)>1||Math.abs(C)>1||!r.inBounds)&&(Q=!0,s(w))}function w(){if(Q){z*=B,C*=B,O+=z,G+=C;var e=y();if(Math.abs(z)>H||Math.abs(C)>H||!e.inBounds){if(F){if(0!==e.x)if(e.x*z<=0)z+=e.x*i;else{var t=e.x>0?2.5:-2.5;z=(e.x+t)*u}if(0!==e.y)if(e.y*C<=0)C+=e.y*i;else{var t=e.y>0?2.5:-2.5;C=(e.y+t)*u}}else 0!==e.x&&(O=e.x>0?I:P,z=0),0!==e.y&&(G=e.y>0?S:D,C=0);r(),s(w)}else Q=!1}}var E=t.source,L=void 0===E?document:E,b=t.update,M=t.multiplier,g=void 0===M?1:M,T=t.friction,B=void 0===T?.92:T,q=t.initialValues,X=t.boundX,Y=t.boundY,A=t.bounce,F=void 0===A||A;n(this,e);var I,P,S,D,R,U,V,j,k,z,C,O=0,G=0,H=.3*g,J=!1,K=!1,N=!1,Q=!1,W=[];!function(){if(!(L="string"==typeof L?document.querySelector(L):L))throw new Error("IMPETUS: source not found.");if(!b)throw new Error("IMPETUS: update function not defined.");q&&(q[0]&&(O=q[0]),q[1]&&(G=q[1]),r()),X&&(I=X[0],P=X[1]),Y&&(S=Y[0],D=Y[1]),L.addEventListener("touchstart",d),L.addEventListener("mousedown",d)}(),this.destroy=function(){return L.removeEventListener("touchstart",d),L.removeEventListener("mousedown",d),null},this.pause=function(){K=!1,N=!0},this.resume=function(){N=!1},this.setValues=function(e,t){"number"==typeof e&&(O=e),"number"==typeof t&&(G=t)},this.setMultiplier=function(e){g=e,H=.3*g},this.setBoundX=function(e){I=e[0],P=e[1]},this.setBoundY=function(e){S=e[0],D=e[1]}};t.exports=r;var s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}()});