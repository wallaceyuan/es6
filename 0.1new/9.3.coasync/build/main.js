!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="./",t(0)}([function(e,t,i){e.exports=i(2)},function(e,t){"use strict";t.name="zfpxsss",t.component=function(){return"components"}},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=i(1);i(3),console.log(s.name,(0,s.component)()),!function(){var e={streamid:streamid,eid:eid,isclose:isclose,page:0,flag:!1,timefalg:0,win:$(window),loading:$(".feed-card-loading"),winWidth:document.documentElement.clientWidth,loadpic:"http://skin.kankanews.com/onlive/mline/images/place.jpg",color:color,date:[],headDate:[],videoSt:"on",done:!0,load:!1,vidoepic:"http://act.shanghaicity.openservice.kankanews.com/iloveshanghai/2015/live/images/play.png"},t=function(){var e=0,t=0,i=0,n=0,o=0,s=0,a=window,l=document,r=l.documentElement;return e=r.clientWidth||l.body.clientWidth||0,t=a.innerHeight||r.clientHeight||l.body.clientHeight||0,n=l.body.scrollTop||r.scrollTop||a.pageYOffset||0,i=l.body.scrollLeft||r.scrollLeft||a.pageXOffset||0,o=Math.max(l.body.scrollWidth,r.scrollWidth||0),s=Math.max(l.body.scrollHeight,r.scrollHeight||0,t),{scrollTop:n,scrollLeft:i,documentWidth:o,documentHeight:s,viewWidth:e,viewHeight:t}};console.log("viewData");var i=function(t){$(".topW  .live_list").each(function(t,i){var n=$(i).attr("date");if($.inArray(n,e.headDate)==-1){e.headDate.push(n);var o='<div class="timeCollection sub">'+n+"</div>";$(i).find(".list_con").before(o)}}),$(".fresh .live_list.allnews").each(function(i,n){var o=$(n).attr("date");if($.inArray(o,e.date)==-1){e.date.push(o);var s='<div class="timeCollection sub" date="'+o+'">'+o+"</div>";$(n).find(".list_con").before(s)}else if("first"!=t){$(".fresh .timeCollection.sub").eq(0).remove();var o=$(".fresh .live_list.allnews").eq(0).attr("date"),a='<div class="timeCollection sub" date="'+o+'">'+o+"</div>";$(".fresh .live_list.allnews").eq(0).find(".list_con").before(a)}}),$("img.demos-image").lazyload({effect:"fadeIn",container:$("#scroller")})},s=function(t,i,n){var o="",s="http://skin.kankanews.com/onlive/mline/images/link.png";if(t.journalistpic)var a='<p class="portrait"><img src=\''+t.journalistpic+"' ></p>";else var a='<p class="portrait"><img src="http://skin.kankanews.com/onlive/mline/images/xiaowen.jpg"></p>';var l=t.newstime.split(" ")[0],r=t.newstime.split(" ")[1],c=t.journalistintro?"["+t.journalistintro+"]":"[看看新闻主持人]";if(t.journalist)var d='<div class="man"><span class="identity">'+c+'</span><span class="name">'+t.journalist+'</span> <span class="time">'+r+"</span></div>";else var d='<div class="man"><span class="identity">[看看新闻主持人]</span><span class="name">小文</span> <span class="time">'+r+"</span></div>";if(t.place){'<div class="place"><i><img src="http://skin.kankanews.com/onlive/mline/images/place.png" width="100%"></i><span>'+t.place+"</span></div>"}else;if(t.titleurl)var p="<p class=\"title\"><a href=\"'+list['titleurl']+'\">"+t.title+'<i><img src="'+s+'" width="16" height="16"></i></a></p>';else var p='<p class="title">'+t.title+"</p>";if(t.newstext)var m=new RegExp("\r\n","g"),f='<div class="desc"><p>'+t.newstext.replace(m,"<br>")+"</p></div>";else var f="";if(t.videoframe)if(parseInt(n))var h=t.videoframe,v='<div class="pics video before" data-src=\''+h+'\'>\n\t\t\t\t\t\t\t\t\t<div class="poster">\n\t\t\t\t\t\t\t\t\t\t<img src='+t.titlepic+'>\n\t\t\t\t\t\t\t\t\t\t<div class="playbut"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<video id=Video'+t.timestamp+'  width="100%" height="100%" preload="none" controls="true" poster='+t.titlepic+' webkit-playsinline="true">\n\t\t\t\t\t\t\t\t\t\t<source src='+t.videourl+' type="video/mp4">\n\t\t\t\t\t\t\t\t\t</video>\n\t\t\t\t\t\t\t\t</div>';else var h=t.videoframe,v='<div class="pics video before" data-src=\''+h+"'>"+h+"</div>";else{var u=t.titlepic.split("|");if(u.length>1){var g="",w="";2==u.length&&(w="two");for(var i=0;i<u.length;i++)g+='<li><span><img class="demos-image" style="background-image: url('+e.loading+');"  data-time='+r+"  data-original="+u[i]+' src="'+e.loadpic+'"></span></li>';var v='<div class="pics more '+w+' clearfix">'+g+"</div>"}else if(""==u[0])var v="";else var v='<div class="pics"><li><span><img src="'+u[0]+'" width="100%"></span></li></div>'}if(t.outlink)for(var b=t.outlink,i=0;i<b.length;i++)o+='<span class="outlink">\n\t\t\t\t\t\t\t\t<a href="\'+outlink[i][\'link\']+\'" style="color:'+b[i].color+'">'+b[i].title+"</a>\n\t\t\t\t\t\t\t</span>";var y=$('<div class="live_list allnews" time="'+t.timestamp+'" date='+l+'><div class="list_con"><div class="content"><div class="item">'+a+'<div class="itemW"><div class="news">'+d+p+f+v+o+"</div></div></div></div>");return y},a=function(){function a(){var o=this;n(this,a),this.loadImage=function(){console.log("loadImage"),parseInt(streamid)&&e.load&&myScroll.refresh("img")},this.init=function(){o.loading()},this.loading=function(){0==e.color&&$(".topW ,.fresh,.contentWrapper ").addClass("red"),1==e.color&&$(".topW ,.fresh,.contentWrapper ").addClass("blue"),2==e.color&&$(".topW ,.fresh,.contentWrapper ").addClass("gry");var t=document.documentElement.clientHeight;Date.parse(new Date);$(".mask").height(t),$(".mask").width(e.winWidth),1==e.isclose?(o._initScrollEnd(),i("first"),$("img.demo-image").lazyload({effect:"fadeIn"})):o._getData()},this.loaded=function(t,i,n){if(console.log(t,i,n),parseInt(t)){e.streamid=t,console.log(e.streamid),$(".contentWrapper").addClass("fixe"),$(".roseLive_head_con").addClass("fixeddd");var s='<div class="videoW"></div>';$(".roseLive_head").append(s)}else if(n){var n='<div class="head_img">\n\t\t\t\t\t\t\t\t\t<img class="livebackground pic_ground" src='+n+' alt="" width="100%">\'+\n\t\t\t\t\t\t\t\t</div>';$(".roseLive_head").append(n)}$(".contentWrapper").css("display","block"),$(".mask").remove(),$(".fixe  .maskload").css("display","block"),$("img.demo-image").lazyload({effect:"fadeIn",container:$("#scroller")}),$(document).on("tap",".poster",function(e){$(this).addClass("reClick");var t=$(this).next().attr("id"),i=$(this);a(t,i)});var a=function(e,t){var i=document.getElementById(e);$(i).css("display","block"),i.paused&&(i.style.width="100%",i.style.height="100%",i.play(),t.css("display","none")),i.addEventListener("pause",function(){t.removeClass("reClick"),t.css("display","block"),i.style.width="1px",i.style.height="1px",t.find(".poster").css({height:"100",width:"100%"})},!1)};parseInt(t)&&o.videoStyle(),function(e,t,i,n,o,s,a){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,s=t.createElement(i),a=t.getElementsByTagName(i)[0],s.async=1,s.src=n,a.parentNode.insertBefore(s,a)}(window,document,"script","//skin.kankanews.com/onlive/mline/js/analytics.js","ga"),ga("create","UA-68836076-1","auto"),ga("require","linkid"),ga("send","pageview")},this.videoStyle=function(){var t=o,i='<video id="Video"  onwebkitfullscreenchange="OnFullscreen(this)" onresize="OnFullscreen(this)" controls="" width="100%" height="100%" poster="" x-webkit-airplay="true" webkit-playsinline="true"><source src='+streamurl+' type="video/mp4"></video>';$(".videoW").append(i),window.onorientationchange=o.orientationChange;var n=$(".fixeddd").height();$(".fixe .ul_content").css({top:n-50+"px"}),$(".timeCollection.tip").css({top:n+"px"}),e.load=!0,setTimeout(function(){myScroll=new IScroll(".ul_content",{preventDefault:!1,mouseWheel:!0,scrollbars:!1,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|A|IFRAME|VIDEO)$/},probeType:1,fadeScrollbars:!1,checkDOMChanges:!0,useTransition:!0}),myScroll.refresh(),$(".fixe .maskload").css("display","none"),myScroll.on("scroll",function(){if(t._vidoeTimeBand(),console.log("scroll",e.done),e.done){var i=$(".pulldown"),n=$(".more_btn_loading");this.y>40?i.addClass("flip").html("松开后刷新..."):i.removeClass("flip").find(".more_btn").html("下拉刷新..."),e.flag||this.maxScrollY-this.y>40&&n.addClass("flip")}}),myScroll.on("scrollEnd",function(){if(t._vidoeTimeBand(),e.done){var i=$(".pulldown"),n=$(".more_btn_loading");i.hasClass("flip")&&(i.removeClass("flip").html("加载中..."),e.done&&t._incData("down")),e.flag||(console.log(this.maxScrollY,this.y),this.maxScrollY-this.y>-5&&(console.log("b.done",e.done),t._loadNews(),n.removeClass("flip").find(".more_btn").html("加载中...")))}}),myScroll.on("refresh",function(){setTimeout(function(){e.done=!0,console.log("Refresh staus")},200)})},500),document.addEventListener("touchmove",function(e){e.preventDefault()},!1),document.addEventListener("touchmove",function(){$(".poster.reClick").length>0&&($(".poster.reClick").css({display:"block",height:"100%",width:"100%"}),$(".poster.reClick").next("video")[0].pause(),$(".poster.reClick").next("video").css({width:"1px",height:"1px",display:"none"}))})},this.appendDom=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1],i=arguments[2];"top"==e?($(".topnews").remove(),$(".topW").append(i)):"behind"==e?0==t.length?$(".fresh").append(i):t.after(i):0==t.length?$(".fresh").append(i):t.before(i),1==i.find($("img")).length&&(i.find($("img"))[0].onload=function(){console.log("loadload"),o.loadImage()})},this._getData=function(){var t=Date.parse(new Date),n="http://api.kankanews.com/kkweb/kkstu/cast/"+e.eid+".json?ord=asc?"+t+"&jsoncallback=?",a=new Promise(function(e,t){$.getJSON(n,function(t){e(t)})});a.then(function(e){l(e)});var l=function(e){console.log(e.studio);var t=e.studio.streamid,n=e.studio.streamurl,a=e.studio.titlepic;o.loaded(t,n,a);for(var l=e.news,r=$(".fresh .allnews:first"),c=l.length-1;c>=0;c--){var d=s.apply(o,[l[c],c,t]);o.appendDom("",r,d)}if(e.head.id){var l=e.head,p=s.apply(o,[l,0,t]);o.appendDom("top",r,p),console.log("toptml",p.find($("img")).length)}else $(".topnews").remove();i("first"),o._initScrollEnd(),setTimeout(o._showDiv,500)}},this._showDiv=function(){setInterval(function(){e.done&&o._incData()},5e3)},this._incData=function(t){console.log("增量数据"),e.done=!1;var n=$(".fresh .allnews").first().attr("time");Date.parse(new Date);if(void 0==n)var n=1;var a="http://api.kankanews.com/kkweb/kkstu/incre/"+n+"/"+e.eid+".json?",l=$(".fresh .allnews:first"),r=new Promise(function(e,t){$.getJSON(a+"&jsoncallback=?",function(t){e(t)})});r.then(function(e){c(e)});var c=function(n){e.done=!0;for(var a=n,r=a.length-1;r>=0;r--){var c=s(a[r],0,e.streamid);o.appendDom("",l,c)}0!=a.length&&(i(),parseInt(streamid)?(o._vidoeTimeBand(),o.Refresh()):o._timeBand()),"down"==t&&($(".tipBand").css("display","block").find(".ui-badge-num").html(a.length),setTimeout(function(){$(".tipBand").css("display","none")},1e3))}},this.render=function(t){if(console.log("render"),e.done=!1,e.flag)return $(".more_btn").html("已经加载全部"),$(".loadingbtn").css("opacity",0),void(e.done=!0);$(".more_btn").html("加载中……"),$(".loadingbtn").css("opacity",1);var n=$(".fresh .allnews:last"),a=new Promise(function(e,i){$.getJSON(t+"&jsoncallback=?",function(t){e(t)})});a.then(function(e){l(e)});var l=function(t){if(e.done=!0,""==t)return $(".more_btn").html("已经加载全部"),$(".loadingbtn").css("opacity",0),void(e.flag=!0);for(var a=0,l=t.length;a<l;a++){var r=s(t[a],a,e.streamid);o.appendDom("behind",n,r),a==t.length-1&&($(".more_btn").html("上拉加载更多"),$(".loadingbtn").css("opacity",0))}0!=t.length&&(i(),parseInt(e.streamid)?(o._vidoeTimeBand(),o.Refresh()):o._timeBand())}},this._timeBand=function(){var e=$(".roseLive_head_con").height()+$(".smalltxt").height()+2*$(".timeCollection.sub").height(),i=t();i.scrollTop>e?$(".timeCollection.tip").css("display","block").html($(".timeCollection.sub").html()):$(".timeCollection.tip").css("display","none"),$(".timeCollection.sub").each(function(e,t){var n=$(t).position().top;n<i.scrollTop&&$(".timeCollection.tip").html($(t).html())})},this._vidoeTimeBand=function(){var e=$(".fixeddd").height();if(0!=$(".timeCollection.sub").eq(0).length){$(".timeCollection.tip").css("display","block");var t=$(".timeCollection.sub").eq(0).offset().top;t<e&&$(".timeCollection.tip").css("display","block").html($(".timeCollection.sub").html()),t>e&&$(".timeCollection.tip").css("display","none"),$(".timeCollection.sub").each(function(t,i){var n=$(i).offset().top;n<e&&$(".timeCollection.tip").html($(i).html())})}},this._loadNews=function(){var e=$(".allnews").last().attr("time");null!=e&&($(".more_btn").html("加载中……"),$(".loadingbtn").css("opacity",1),o._setLoadingState(!0))},this._setLoadingState=function(t){if(o.isLoading=t,t){var i=(Date.parse(new Date),$(".allnews").last().attr("time"));if($(".more_btnbox").css("display","block"),1==e.isclose)var n="asc";else var n="desc";var s="http://api.kankanews.com/kkweb/kkstu/next/"+i+"/"+e.eid+".json?ord="+n;o.render(s)}},this.orientationChange=function(){setTimeout(function(){myScroll.refresh()},500)},this.Refresh=function(){console.log("rrr"),e.done&&(e.done=!1,setTimeout(function(){myScroll.refresh(),console.log("Refresh")},250))},this.changeState=function(t){e.videoSt=t,console.log(e.videoSt)},this.weixinEvent=function(){}}return o(a,[{key:"_initScrollEnd",value:function(){var i=this,n=this,o=null,s="onscroll"in document.documentElement?"scroll":"touchmove";if($(".more_btn_loading").css("display","block"),parseInt(streamid)){if(e.flag)return;return void(o&&clearTimeout(o))}$(window).on("touchmove",function(){i._timeBand()}),$(window).on(s,function(){i._timeBand(),$(".more_btn_loading").css("display","block"),e.flag||(o&&clearTimeout(o),o=setTimeout(function(){var e=t();i.ald=0,e.viewHeight+e.scrollTop+n.ald>=e.documentHeight&&i._loadNews()},100))}),$(window).on("swipeDown",function(){if("0"==e.isclose){var n=$(".roseLive_head_con ").height(),o=t();o.scrollTop<n&&e.done&&i._incData("down")}})}}]),a}(),l=new a;l.init(),window.API={}}()},function(e,t){}]);