(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"backgroundType":"gradient","plainBackgroundMode":"daylight","devIntro":"goutham jm ","devDesc":" Full Stack JS  Developer - React | Redux | Node JS | Express | MongoDB | Adobe XD","gradientColors":"#FF5733, #FF5733, #FF5733, #FF5733","icons":[{"id":0,"image":"fab fa-github","url":"https://github.com/Gauthamjm007","style":"socialicons"},{"id":1,"image":"fab fa-linkedin","url":"https://www.linkedin.com/in/gautham-jm/","style":"socialicons"},{"id":2,"image":"fas fa-code","url":"https://www.codewars.com/users/Gauthamjm007?refreshed=true","style":"socialicons"},{"id":3,"image":"fas fa-file-pdf","url":"http://www.keepandshare.com/doc12/view.php?id=250068&da=y","style":"socialicons"}],"instaLink":"https://www.instagram.com/","instaUsername":"gauthamjm","instaQuerry":"/?__a=1","aboutDev":"Hi I am an Software engineer with work experience of 1.5 years in Mobile and Web , currently open for  employment opportunities pertaining to Full Stack JS , with any frameworks , I am an enthusiastic developer willing to explore new technologies and learn and try to be a better programmer each single day ","gitHubLink":"https://api.github.com/users/","gitHubUsername":"GauthamJM007","gitHubQuerry":"/repos?direction=desc&sort=pushed"}')},12:function(e,t,a){},22:function(e,t,a){e.exports=a(48)},27:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),o=(a(27),a(2)),i=a(3),l=a(5),u=a(4),m=a(6),d=a(21),h=a(20),p=a.n(h),b=a(1),f=(a(9),a(10),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggleHover=function(e){var t=Object(d.a)(a.state.hoverstatus);"enter"===e.event?(t[e.icon.id]="socialiconshover",a.setState({hoverstatus:t})):"leave"===e.event&&(t[e.icon.id]="socialicons",a.setState({hoverstatus:t}))},a.state={backgroundType:b.backgroundType,devInfo:b.devIntro,devDesc:b.devDesc,hoverstatus:["socialicons","socialicons","socialicons","socialicons","socialicons"]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=b.icons;return r.a.createElement("div",null,r.a.createElement("div",{id:"divmainbody",className:"jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{className:" container container-fluid text-center "},r.a.createElement("h1",{className:"display-1"},this.state.devInfo),r.a.createElement(p.a,{className:"lead"}," ",this.state.devDesc),r.a.createElement("div",{className:" p-5"},t.map((function(t){return r.a.createElement("a",{key:t.id,target:"_blank",rel:"noopener noreferrer",href:"".concat(t.url)},r.a.createElement("i",{className:"".concat(t.image,"  fa-3x ").concat(e.state.hoverstatus[t.id]),onMouseEnter:function(){return e.toggleHover({icon:t,event:"enter"})},onMouseLeave:function(){return e.toggleHover({icon:t,event:"leave"})}}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#divaboutme",role:"button"},"More about me"))))}}]),t}(n.Component)),g=a(8),v=a.n(g),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.handleRequest()},a.handleRequest=function(e){v.a.get(b.instaLink+b.instaUsername+b.instaQuerry).then((function(e){a.setState({instaProfilePic:e.data.graphql.user.profile_pic_url_hd})})).catch((function(e){console.log(e)})).finally((function(){}))},a.state={heading:"About me",aboutDev:b.aboutDev,instaProfilePic:"bad request"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"divaboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:" container container-fluid p-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:" col-5 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:"border-secondary rounded-circle",src:"https://i.ibb.co/R4htZB1/circle-cropped.png",alt:"profilepicture"})),r.a.createElement("div",{className:" col-lg-7"},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},this.state.heading),r.a.createElement("p",{className:" lead text-center"},this.state.aboutDev)))))}}]),t}(n.Component),y=(a(12),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.handleUpdatetime()},a.handleUpdatetime=function(){var e=new Date(a.state.value.pushed_at),t=(new Date).getTime()-e.getTime(),n=Math.trunc(t/1e3/60/60);if(n<24)a.setState({updated_at:n.toString()+" hours ago"});else{var r=e.getDate(),c=e.getMonth(),s=e.getFullYear();a.setState({updated_at:"on "+r+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][c]+" "+s})}},a.state={value:a.props.value,updated_at:"0 mints",stargazers_count:a.props.value.stargazers_count,download_url:a.props.value.svn_url+"/archive/master.zip",repo_url:a.props.value.svn_url},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.state.value.name," "),r.a.createElement("p",{className:"card-text"},this.state.value.description," "),r.a.createElement("a",{href:this.state.download_url,className:" btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),"    ",r.a.createElement("a",{href:this.state.repo_url,target:" _blank",className:" btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),r.a.createElement("br",null),r.a.createElement("br",null),null!==this.props.value.homepage&&r.a.createElement("a",{href:this.props.value.homepage,target:" _blank",className:" btn btn-outline-secondary"},r.a.createElement("i",{class:"fa fa-eye"}),r.a.createElement("span",null,"\xa0"),"Live"),r.a.createElement("hr",null),r.a.createElement(j,{value:this.state.value.languages_url}),r.a.createElement("p",{className:"card-text"},r.a.createElement("h",{href:"",className:" text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},this.state.stargazers_count)),r.a.createElement("small",{className:"text-muted"},"Updated ",this.state.updated_at)))))}}]),t}(n.Component)),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.componentDidMount=function(){a.handleRequest()},a.handleRequest=function(){v.a.get(a.props.value).then((function(e){a.setState({data:e.data})})).catch((function(e){console.log(e)})).finally((function(){}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=[],a=0;for(var n in this.state.data)t.push(n),a+=this.state.data[n];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",t.map((function(t){return r.a.createElement("p",{key:t,className:"badge badge-light card-link"},t,":"," ",Math.trunc(e.state.data[t]/a*1e3)/10," ","%")})))}}]),t}(n.Component),N=y,k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.handleRequest()},a.handleRequest=function(e){v.a.get(b.gitHubLink+b.gitHubUsername+b.gitHubQuerry).then((function(e){a.setState({projectsArray:e.data.filter((function(e){return 0!==e.stargazers_count})).slice(0,6)})})).catch((function(e){console.log(e)})).finally((function(){}))},a.state={heading:"Recent Projects",projectsArray:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"divproject",className:"jumbotron jumbotron-fluid bg-transparent m-0"},r.a.createElement("div",{className:" container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},this.state.heading),r.a.createElement("div",{className:" row"},this.state.projectsArray.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,value:e})})))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={bgStyle:{backgroundColor:"#f5f5f5"}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{style:this.state.bgStyle,className:" mt-auto py-3 text-center"},r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:" badge badge-dark",target:"noopener",href:"https://github.com/Gauthamjm007"},"Goutham JM")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"}," ","Project code is open source. Feel free to fork and make your own version.")))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement(w,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.7d9e1776.chunk.js.map