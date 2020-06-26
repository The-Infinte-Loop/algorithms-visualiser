(this["webpackJsonpalgorithms-visualiser"]=this["webpackJsonpalgorithms-visualiser"]||[]).push([[0],[,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/crown.684af6ea.png"},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),s=a.n(l),c=(a(15),a(1)),o=a(2),i=a(4),u=a(3),d=(a(16),a(5)),m=a(9),b=a.n(m);function f(e){for(var t=[],a=0;a<e;a++)t.push(g(e));return t}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=e.length;if(t>=n)return!0;for(var r=0;r<n;r++)if(h(e,r,t)){if(e[r][t]=!0,a.push([r,t,!0]),v(e,t+1,a))return!0;e[r][t]=!1,a.push([r,t,!1])}return!1}function h(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,n=e.length,r=0;r<a;r++)if(!0===e[t][r])return!1;for(var l=t,s=a;l>=0&&s>=0;l--,s--)if(!0===e[l][s])return!1;for(var c=t,o=a;o>=0&&c<n;c++,o--)if(!0===e[c][o])return!1;return!0}function g(e){for(var t=[],a=0;a<e;a++)t.push(!1);return t}a(6),a(17),a(18);var p=1.5,y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={disabled:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.drawBoard(4)}},{key:"drawBoard",value:function(e){var t=0,a=0;switch(document.getElementById("nQueensBoard").innerHTML="",document.getElementById("NQueenResults").innerHTML="",e){case 4:t=20,a=30,p=1.5;break;case 5:case 6:t=10,a=25,p=1;break;case 7:t=7,a=20,p=.5;break;case 8:t=7,a=18,p=.5;break;default:return}var n=document.getElementById("nQueensBoard");n.style.setProperty("--Qgrid-rows",e),n.style.setProperty("--Qgrid-cols",e);for(var r=0;r<e*e;r++){var l=document.createElement("div"),s=document.createElement("i");l.appendChild(s).className="fas fa-crown",n.appendChild(l).className="Qgrid-item q-array-tile"}for(var c=document.getElementsByClassName("q-array-tile"),o=document.getElementsByClassName("fas"),i=0;i<c.length;i++)c[i].style.padding="".concat(t,"px"),c[i].style.backgroundColor="#BFC9CA",o[i].style.fontSize="".concat(a,"px"),o[i].style.color="#BFC9CA"}},{key:"NQueensProblem",value:function(){var e=this,t=parseInt(document.getElementById("boardInput").value);if(t<4||t>8)alert("Board Size must be between 4 and 8");else{this.drawBoard(t);var a=document.getElementsByClassName("q-array-tile"),n=document.getElementsByClassName("fa-crown"),r=document.getElementById("NQueenResults"),l=[];!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=f(e);v(a,0,t)}(t,l);for(var s=0,c=function(c){s++,e.setState({disabled:!0});var o=Object(d.a)(l[c],3),i=o[0],u=o[1],m=o[2],b=t*i+u,f=document.createElement("div");f.classList.add("alert"),f.classList.add("animate__animated"),f.classList.add("animate__slideInDown"),setTimeout((function(){m?(a[b].style.backgroundColor="#DC143C",a[b].classList.add("safe-queen"),n[b].style.color="#FFFFFF",n[b].classList.add("popupQueen"),f.innerHTML="Trying Queen at row ".concat(i," and col ").concat(u),f.classList.add("alert-success")):(a[b].style.backgroundColor="#BFC9CA",a[b].classList.remove("safe-queen"),n[b].style.color="#BFC9CA",n[b].classList.remove("popupQueen"),f.innerHTML="row ".concat(i," and col ").concat(u," didn't work out. Backtracking"),f.classList.add("alert-danger")),r.prepend(f),a[b].style.transition="200ms all"}),1e3*p*c)},o=0;o<l.length;o++)c(o);var i=document.getElementsByClassName("safe-queen");setTimeout((function(){for(var t=0;t<i.length;t++)if(i[t].style.backgroundColor="#2ECC71",i[t].style.transition="300ms all",e.setState({disabled:!1}),t===i.length-1){var a=document.createElement("div");a.classList.add("alert"),a.classList.add("animate__animated"),a.classList.add("animate__slideInUp"),a.innerHTML="All Queens have been placed on Valid positions",a.classList.add("alert-primary"),r.prepend(a)}}),(s+1)*p*1e3)}}},{key:"render",value:function(){var e=this,t=this.state.disabled;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("center",null,r.a.createElement("h2",null,r.a.createElement("img",{className:"mb-2",src:b.a,width:"40px",alt:""})," ","N-Queens Visualiser")))),r.a.createElement("div",{className:"Qbox Qboard mb-2",id:"nQueensBoard"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-group mt-1 container col-sm-6"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Board Size")),r.a.createElement("input",{type:"number",id:"boardInput",className:"form-control",placeholder:"Board Size",defaultValue:"4",readOnly:t}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-secondary",disabled:t,onClick:function(){return e.NQueensProblem()}},"Visualise N-Queens")))),t?null:r.a.createElement("center",null,r.a.createElement("small",{className:"text-muted"},r.a.createElement("div",{className:"mt-2"}),"The Visualiser works best for board sizes between 4 and 16 inclusive. Larger board sizes would make the page unresponsive because of huge number of computations. \xa0",r.a.createElement("a",{href:"https://github.com/dipeshpatil/algorithms-visualiser/tree/master/src/backTrackingAlgorithms"},"GitHub Repo for this project")))),r.a.createElement("div",{id:"NQueenResults",className:"col-sm-4 mt-3"}))))}}]),a}(r.a.Component);function E(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var N=function(e){var t=e.title;return r.a.createElement("div",null,r.a.createElement("h2",{className:"mt-3 text-center"},t))},k=function(e){var t=e.idx,a=e.val;return"binarySearch"===e.type?r.a.createElement("div",{className:"b-array-bar"},"".concat(a),r.a.createElement("br",null),r.a.createElement("span",null,"".concat(t))):r.a.createElement("div",{className:"l-array-bar"},"".concat(a),r.a.createElement("br",null),r.a.createElement("span",null,"".concat(t)))},C=(a(19),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={array:[],found:!1,disabled:!1,elementFoundAt:0,target:null,msgAfterExecution:null,previousLength:0,animations:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){var e=[],t=document.getElementsByClassName("b-array-bar");document.getElementById("binarySearchTargetVal").value="";for(var a=0;a<t.length;a++)t[a].style.backgroundColor="#6376f1",t[a].classList.remove("growFind"),t[a].classList.remove("highlight");for(var n=0;n<15;n++)e.push(E(5,850));var r=e.slice().sort((function(e,t){return e-t}));this.setState({array:r,found:!1,disabled:!1,msgAfterExecution:null,previousLength:this.state.animations.length})}},{key:"hightlightWithinBounds",value:function(e,t,a){for(var n=function(e){setTimeout((function(){a[e].style.backgroundColor="#F16388"}),100*e)},r=e;r<=t;r++)n(r)}},{key:"resetAllTiles",value:function(e){for(var t=0;t<e.length;t++)e[t].style.backgroundColor="#6376f1"}},{key:"binarySearch",value:function(){var e=this,t=this.state.array,a=[],n=0,r=document.getElementsByClassName("b-array-bar");!function e(t,a,n,r){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];if(n>=a){var s=parseInt(a+(n-a)/2);return t[s]===r?(l.push([a,n,s,!0]),!0):(t[s]>r?(l.push([a,n,s,!1]),e(t,a,s-1,r,l)):(l.push([a,n,s,!1]),e(t,s+1,n,r,l)),!1)}}(t,0,t.length-1,parseInt(document.getElementById("binarySearchTargetVal").value),a);for(var l=function(t){var l=Object(d.a)(a[t],4),s=l[0],c=l[1],o=l[2],i=l[3];n++,t===a.length-1&&i&&setTimeout((function(){e.setState({disabled:!0,found:!0}),e.resetAllTiles(r),r[o].classList.add("highlight"),r[o].style.backgroundColor="#28B463"}),3*(t+1)*1e3),0!==s||0!==c||0!==o||i||setTimeout((function(){console.log("ELement not found"),e.setState({msgAfterExecution:"Element not found",found:!1}),e.resetAllTiles(r)}),3*(t+1)*1e3),setTimeout((function(){e.setState({disabled:!0}),e.resetAllTiles(r),e.hightlightWithinBounds(s,c,r)}),1e3*t*3)},s=0;s<a.length;s++)l(s);setTimeout((function(){e.setState({disabled:!1})}),1e3*n*3)}},{key:"render",value:function(){var e=this,t=this.state,a=t.array,n=t.found,l=t.disabled,s=t.msgAfterExecution;return r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-light"},r.a.createElement("center",null,r.a.createElement(N,{title:"Binary Search"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-1"}),r.a.createElement("div",{className:"input-group col-sm-10"},r.a.createElement("input",{type:"number",id:"binarySearchTargetVal",className:"form-control",placeholder:"Find Element"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{onClick:function(){return e.binarySearch()},className:"btn btn-success",type:"button",id:"binarySearchBtn",disabled:l},"Search"),r.a.createElement("button",{onClick:function(){return e.resetArray()},className:"btn btn-danger",id:"binarySearchResetArray",type:"button",disabled:l},"Reset Array"))),r.a.createElement("div",{className:"col-sm-1 "}))),n?null:r.a.createElement("p",{className:"not-found"},s),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},a.map((function(e,t){return r.a.createElement(k,{type:"binarySearch",key:t,idx:t,val:e})})))))}}]),a}(r.a.Component)),B=(a(20),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={array:[],found:!1,disabled:!1,elementFoundAt:0,target:null,msgAfterExecution:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){var e=[],t=document.getElementsByClassName("l-array-bar");document.getElementById("targetVal").value="";for(var a=0;a<t.length;a++)t[a].style.backgroundColor="#6376f1",t[a].classList.remove("growFind"),t[a].classList.remove("highlight");for(var n=0;n<15;n++)e.push(E(5,730));this.setState({array:e,found:!1,disabled:!1,msgAfterExecution:""})}},{key:"linearSearch",value:function(){var e=this,t="",a=document.getElementById("targetVal").value,n=function(e,t){for(var a=[],n=0;n<e.length;n++){var r=e[n];if(r===parseInt(t)){a.push([n,r,!0]);break}a.push([n,r,!1])}return a}(this.state.array,a);console.log(n);for(var r=0,l=function(l){var s=Object(d.a)(n[l],3),c=s[0],o=s[1],i=s[2],u=document.getElementsByClassName("l-array-bar")[c],m=u.style;if(r++,i)return t="".concat(o," found at index ").concat(c),setTimeout((function(){e.setState({found:!0,disabled:!0,elementFoundAt:c,target:o}),m.backgroundColor="#28B463",u.classList.add("growFind"),u.classList.add("highlight")}),.2*l*1e3),"break";t="".concat(a," not found"),setTimeout((function(){e.setState({found:!1,disabled:!0}),m.backgroundColor="#F16388",u.classList.add("growFind")}),.2*l*1e3)},s=0;s<n.length;s++){if("break"===l(s))break}setTimeout((function(){e.setState({disabled:!1,msgAfterExecution:t})}),.2*(r+1)*1e3)}},{key:"render",value:function(){var e=this,t=this.state,a=t.array,n=t.found,l=t.disabled,s=t.msgAfterExecution;return r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-light"},r.a.createElement("center",null,r.a.createElement(N,{title:"Linear Search"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-1"}),r.a.createElement("div",{className:"input-group col-sm-10"},r.a.createElement("input",{type:"number",id:"targetVal",className:"form-control",placeholder:"Find Element"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{onClick:function(){return e.linearSearch()},className:"btn btn-success",type:"button",id:"button-addon2",disabled:l},"Search"),r.a.createElement("button",{onClick:function(){return e.resetArray()},className:"btn btn-danger",id:"resetArray",type:"button",disabled:l},"Reset Array"))),r.a.createElement("div",{className:"col-sm-1 "}))),r.a.createElement("br",null),n?null:r.a.createElement("p",{className:"found growFind"},s),r.a.createElement("div",{className:"container"},a.map((function(e,t){return r.a.createElement(k,{type:"linearSearch",key:t,idx:t,val:e})})))))}}]),a}(r.a.Component)),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"openTab",value:function(e){for(var t=document.getElementsByClassName("tabs"),a=0;a<t.length;a++)t[a].style.display="none";document.getElementById(e).style.display="block"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"w3-bar w3-black"},r.a.createElement("button",{onClick:function(){return e.openTab("backTrackingTab")},className:"w3-bar-item w3-button"},"Backtracking"),r.a.createElement("button",{onClick:function(){return e.openTab("searchingTab")},className:"w3-bar-item w3-button"},"Searching")),r.a.createElement("div",{className:"mt-3"},r.a.createElement("div",{id:"backTrackingTab",className:"tabs"},r.a.createElement(y,null)),r.a.createElement("div",{id:"searchingTab",className:"tabs",style:{display:"none"}},r.a.createElement(B,null),r.a.createElement(C,null))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.bac0775b.chunk.js.map