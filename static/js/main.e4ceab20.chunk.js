(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(80)},40:function(e,t){},42:function(e,t){},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(29),l=n.n(c),r=n(8),i=n(9),s=n(11),m=n(10),u=n(12),h=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"header"},o.a.createElement("h1",{className:"heading-primary"},"Braille Generator"))}}]),t}(a.Component),p=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("label",{className:"help-btn",htmlFor:"checkbox",title:"Need Help?"},o.a.createElement("span",{className:"help-btn__icon",title:"Need Help?"},"?")),o.a.createElement("input",{className:"footer__checkbox",type:"checkbox",id:"checkbox",name:"checkbox"}),o.a.createElement("div",{className:"footer__help-text"},o.a.createElement("div",{className:"footer__help-text--text"},o.a.createElement("ol",{className:"footer__help-text--ol"},o.a.createElement("li",{className:"footer__help-text--li"},"First Click the Record Button and speak"),o.a.createElement("li",{className:"footer__help-text--li"},"Then Click the Stop button to save your transcripted text"),o.a.createElement("li",{className:"footer__help-text--li"},"Then Click the Convert button to convert it to Braille!")))),o.a.createElement("p",{className:"footer__text"},"Coded by ",o.a.createElement("a",{className:"footer__link",href:"https://github.com/Redvanisation"},"Redvanisation")," \xa9 2018"))}}]),t}(a.Component),b=n(30),d=n.n(b),f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).callWatson=function(){fetch("https://pacific-cliffs-60293.herokuapp.com/api/speech-to-text/token").then(function(e){return e.text()}).then(function(t){var n=d()({token:t,objectMode:!0,extractResults:!0,format:!1});n.on("data",function(t){e.setState({text:t.alternatives[0].transcript});var n=e.state.text.split(" ").join("%20");n=n.slice(0,n.length-3),e.setState({textToBe:n})}),n.on("error",function(e){console.log(e)}),document.querySelector("#stop").onclick=n.stop.bind(n)}).catch(function(e){console.log(e)})},e.callBraille=function(){fetch("https://api.funtranslations.com/translate/braille/unicode.json?text=".concat(e.state.textToBe),{"Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Headers":"*","Access-Control-Allow-Methods":"GET,POST,PUT,OPTIONS","Access-Control-Allow-Origin":"https://redvanisation.github.io/braille-generator/"}).then(function(e){return e.json()}).then(function(t){e.setState({braille:t.contents.translated.join(" ")})})},e.state={text:"",textToBe:"",braille:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement("div",{className:"main"},o.a.createElement("button",{className:"main__btn main__btn--record",onClick:this.callWatson},"Click to Record!"),o.a.createElement("button",{className:"main__btn main__btn--stop",id:"stop"},"Stop Recording!"),o.a.createElement("div",{className:"main__input-div"},this.state.text),o.a.createElement("button",{className:"main__btn main__btn--convert",onClick:this.callBraille},"convert to braille!"),o.a.createElement("div",{className:"main__output"},this.state.braille)),o.a.createElement(p,null))}}]),t}(a.Component);n(78),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.e4ceab20.chunk.js.map