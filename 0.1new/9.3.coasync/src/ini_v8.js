/**
 * Created by yuan on 2015/5/21.
 */
!function() {
	var b = {
			streamid:streamid,
			eid:eid, isclose : isclose, page : 0, flag :false, timefalg :0,
			win : $(window), loading : $('.feed-card-loading'), winWidth : document.documentElement.clientWidth,
			loadpic :'http://skin.kankanews.com/onlive/mline/images/place.jpg',
			color :color, date:[], headDate:[], videoSt:'on', done:true, load :false,
			vidoepic:'http://act.shanghaicity.openservice.kankanews.com/iloveshanghai/2015/live/images/play.png'
		},
		viewData = function(){
			var e = 0, l = 0, i = 0, g = 0, f = 0, m = 0;
			var j = window, h = document, k = h.documentElement;
			e = k.clientWidth || h.body.clientWidth || 0;
			l = j.innerHeight || k.clientHeight || h.body.clientHeight || 0;
			g = h.body.scrollTop || k.scrollTop || j.pageYOffset || 0;
			i = h.body.scrollLeft || k.scrollLeft || j.pageXOffset || 0;
			f = Math.max(h.body.scrollWidth, k.scrollWidth || 0);
			m = Math.max(h.body.scrollHeight, k.scrollHeight || 0, l);
			return {scrollTop: g,scrollLeft: i,documentWidth: f,documentHeight: m,viewWidth: e,viewHeight: l};
		},
		timeBar = function(param){
			$('.topW  .live_list').each((index,item)=>{
                var headDate = $(item).attr('date');
                if($.inArray(headDate, b.headDate) == -1){
                    b.headDate.push(headDate);
                    var tt = '<div class="timeCollection sub">' + headDate + '</div>';
                    $(item).find('.list_con').before(tt);
                }
            });
			$('.fresh .live_list.allnews').each((index,item)=>{
                var date = $(item).attr('date');
                if($.inArray(date, b.date) == -1){
                    b.date.push(date);
                    var tt = '<div class="timeCollection sub" date="'+ date +'">' + date + '</div>';
                    $(item).find('.list_con').before(tt);
                }else{
                    if(param != 'first'){
                        $('.fresh .timeCollection.sub').eq(0).remove();
                        var date = $('.fresh .live_list.allnews').eq(0).attr('date');
                        var tt = '<div class="timeCollection sub" date="'+ date +'">' + date + '</div>';
                        $('.fresh .live_list.allnews').eq(0).find('.list_con').before(tt);
                    }
                }
            });
			$("img.demos-image").lazyload({
				effect : "fadeIn",
				container: $("#scroller")
			});
		},
		orderList = function(list,i,streamid){
			var outhtml ='';
			var linkPic = 'http://skin.kankanews.com/onlive/mline/images/link.png';
			if(list['journalistpic']){
				var journalistpic = '<p class="portrait"><img src='+list['journalistpic']+' ></p>';
			}else{
				var journalistpic = '<p class="portrait"><img src="http://skin.kankanews.com/onlive/mline/images/xiaowen.jpg"></p>';
			}
			var datetime = list['newstime'].split(' ')[0];
			var hourtime = list['newstime'].split(' ')[1];
			var journalistintro = list['journalistintro']?'['+list['journalistintro']+']':'[看看新闻主持人]';
			if(list['journalist']){
				var journalist = `<div class="man"><span class="identity">${journalistintro}</span><span class="name">${list['journalist']}</span> <span class="time">${hourtime}</span></div>` ;
			}else{
				var journalist = `<div class="man"><span class="identity">[看看新闻主持人]</span><span class="name">小文</span> <span class="time">${hourtime}</span></div>`;
			}
			if(list['place']){
				var place = `<div class="place"><i><img src="http://skin.kankanews.com/onlive/mline/images/place.png" width="100%"></i><span>${list['place']}</span></div>`;
			}else{
				var place = '';
			}
			if(list['titleurl']){
				var title = `<p class="title"><a href="'+list['titleurl']+'">${list['title']}<i><img src="${linkPic}" width="16" height="16"></i></a></p>`;
			}else{
				var title = '<p class="title">'+list['title']+'</p>';
			}
			if(list['newstext']){
				var reg=new RegExp("\r\n","g");
				list['newstext']= list['newstext'].replace(reg,"<br>");
				var newstext ='<div class="desc"><p>'+list['newstext']+'</p></div>';
			}else{
				var newstext = '';
			}
			if(list['videoframe']){
				if(parseInt(streamid)){
					var ifarme = list['videoframe'];
					var picontent = '<div class="pics video before" data-src=\''+ifarme+'\'>' +
						'<div class="poster"><img src="'+list['titlepic']+'"><div class="playbut"></div></div>'+
						'<video id="Video'+list['timestamp']+'"  width="100%" height="100%" preload="none" controls="true" poster="'+list['titlepic']+'" webkit-playsinline="true"><source src="'+list['videourl']+'" type="video/mp4"></video>' +
						'</div>';
				}else{
					var ifarme = list['videoframe'];
					var picontent = '<div class="pics video before" data-src=\''+ifarme+'\'>'+ifarme+'</div>';
				}
			}else{
				var piclist = list['titlepic'].split("|");
				if(piclist.length >1){
					var lihtml = '';
					var pictwo = '';
					if(piclist.length == 2){
						pictwo = 'two';
					}
					for(var i =0;i<piclist.length;i++){
						lihtml += '<li><span><img class="demos-image" style="background-image: url('+b.loading+');"  data-time="'+hourtime+'"  data-original="'+piclist[i]+'" src="'+b.loadpic+'"></span></li>';
					}
					var picontent = '<div class="pics more '+pictwo+' clearfix">'+lihtml+'</div>';
				}else{
					if(piclist[0] == ''){
						var picontent ='';
					}else{
						var picontent = '<div class="pics"><li><span><img src="'+piclist[0]+'"  width="100%" onload="app.loadImage()"></span></li></div>';
					}
				}
			}
			if(list['outlink']){
				var outlink = list['outlink'];
				for(var i =0;i<outlink.length;i++){
					outhtml += '<span class="outlink"><a href="'+outlink[i]['link']+'" style="color:'+outlink[i]['color']+'">'+outlink[i]['title']+'</a></span>';
				}
			}
			var newhtml = $('<div class="live_list allnews" time="'+list['timestamp']+'" date="'+datetime+'"><div class="list_con"><div class="content"><div class="item">'+journalistpic+'<div class="itemW"><div class="news">'+journalist+''+title+''+newstext+''+picontent+''+outhtml+'</div></div></div></div>');
			return newhtml;
		};
	var app = {
		init: function() {
			this.loading();
		},
		loading: function() {
			if(b.color == 0){
				$('.topW ,.fresh,.contentWrapper ').addClass('red');
			}
			if(b.color == 1){
				$('.topW ,.fresh,.contentWrapper ').addClass('blue');
			}
			if(b.color == 2){
				$('.topW ,.fresh,.contentWrapper ').addClass('gry');
			}
			var that = this;
			var winHeight = document.documentElement.clientHeight;
			var timestamp = Date.parse(new Date());
			$('.mask').height(winHeight);
			$('.mask').width(b.winWidth);
			/*1 已关闭 php生成页面*/
			if(b.isclose == 1){
				that._initScrollEnd();
				timeBar('first');
				$("img.demo-image").lazyload({
					effect : "fadeIn"
				});
			}else{
				that._getData();
			}
		},
		loaded:function(streamid,streamurl,titlepic){
			console.log(streamid,streamurl,titlepic);
			if(parseInt(streamid)){
				b.streamid = streamid;
				console.log(b.streamid);
				$('.contentWrapper').addClass('fixe');
				$('.roseLive_head_con').addClass('fixeddd');
				var vidoeW  = '<div class="videoW"></div>';
				$('.roseLive_head').append(vidoeW);
			}else if(titlepic){
				var titlepic =  '<div class="head_img">'+
					'<img class="livebackground pic_ground" src="'+titlepic+'" alt="" width="100%">'+
					'</div>';
				$('.roseLive_head').append(titlepic);
			}

			$('.contentWrapper').css('display','block');
			$(".mask").remove();
			$('.fixe  .maskload').css('display','block');
			$("img.demo-image").lazyload({
				effect : "fadeIn",
				container: $("#scroller")
			});
			$(document).on('tap','.poster',function(e){
				$(this).addClass('reClick');
				var id = $(this).next().attr('id');
				var cover = $(this);
				vidplay(id,cover);
			});

			function vidplay(id,cover){
				var video = document.getElementById(id);
				$(video).css('display','block');
				if(video.paused){
					video.style.width = '100%';
					video.style.height = '100%';
					video.play();
					cover.css('display','none');
				}
				video.addEventListener("pause", function () {
					cover.removeClass('reClick');
					cover.css('display','block');
					video.style.width = '1px';
					video.style.height = '1px';
					cover.find('.poster').css({
						'height':'100',
						'width':'100%'
					});
				}, false);
			}
			if (parseInt(streamid)) {
				var video = '<video id="Video"  onwebkitfullscreenchange="OnFullscreen(this)" onresize="OnFullscreen(this)" controls="" width="100%" height="100%" poster="" x-webkit-airplay="true" webkit-playsinline="true"><source src="' + streamurl + '" type="video/mp4"></video>';
				$('.videoW').append(video);
				window.onorientationchange = app.orientationChange;
				var dd = $('.fixeddd').height();
				$('.fixe .ul_content').css({
					'top': dd - 50 + 'px'
				});
				$('.timeCollection.tip').css({
					'top': dd + 'px'
				});
				/*					document.onreadystatechange = function subSomething(){
				 if(document.readyState == "complete"){*/
				b.load = true;
				setTimeout(function(){
					myScroll = new IScroll('.ul_content', {
						preventDefault: false,
						mouseWheel: true,
						scrollbars: false,
						preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A|IFRAME|VIDEO)$/},
						probeType: 1,
						fadeScrollbars: false,
						checkDOMChanges:true,
						useTransition:true
					});
					myScroll.refresh();
					$('.fixe .maskload').css('display','none');
					myScroll.on('scroll', function () {
						app._vidoeTimeBand();
						console.log('scroll', b.done);
						if (!b.done)return
						var $pullDown = $('.pulldown');
						var $pullUp = $('.more_btn_loading');
						if (this.y > 40) {
							$pullDown.addClass('flip').html('松开后刷新...');
						} else {
							$pullDown.removeClass('flip').find('.more_btn').html('下拉刷新...');
						}
						if (b.flag)return
						if (this.maxScrollY - this.y > 40) {
							$pullUp.addClass('flip');
						}
					});
					myScroll.on('scrollEnd', function () {
						app._vidoeTimeBand();
						if (!b.done) return
						var $pullDown = $('.pulldown');
						var $pullUp = $('.more_btn_loading');
						if ($pullDown.hasClass('flip')) {
							$pullDown.removeClass('flip').html('加载中...');
							if(b.done){
								app._incData('down');  // 0 表示下拉刷新
							}
						}
						if (b.flag) return
						console.log(this.maxScrollY , this.y );
						if (this.maxScrollY - this.y > -5) {
							console.log('b.done', b.done);
							app._loadNews(); // 1 表示上拉刷新
							$pullUp.removeClass('flip').find('.more_btn').html('加载中...');
						}
					});
					myScroll.on('refresh', function(){
						setTimeout(function(){
							b.done = true;
							console.log('Refresh staus');
						},200);
					});
				},500)
				document.addEventListener('touchmove', function (e) {
					e.preventDefault();
				}, false);
				document.addEventListener('touchmove', function () {
					if ($('.poster.reClick').length > 0) {
						$('.poster.reClick').css({
							'display': 'block',
							'height': '100%',
							'width': '100%'
						});
						$('.poster.reClick').next('video')[0].pause();
						$('.poster.reClick').next('video').css({
							width: '1px',
							height: '1px',
							display: 'none'
						});
					}
				});

				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
						(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
					m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','//skin.kankanews.com/onlive/mline/js/analytics.js','ga');
				ga('create', 'UA-68836076-1', 'auto');
				ga('require', 'linkid');
				ga('send', 'pageview');
				/*						}
				 }*/
			}else{
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
						(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
					m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','//skin.kankanews.com/onlive/mline/js/analytics.js','ga');
				ga('create', 'UA-68836076-1', 'auto');
				ga('require', 'linkid');
				ga('send', 'pageview');
			}
		},
		_getData:function(){
			var that = this;
            let timestamp = Date.parse(new Date());
            let url = 'http://api.kankanews.com/kkweb/kkstu/cast/'+b.eid+'.json?ord=asc?'+timestamp+'&jsoncallback=?';
            let p1 = new Promise((resolve,reject) =>{
                $.getJSON(url,(data) =>{
                    resolve(data)
                })
            })
            p1.then((response)=>{
                p1done(response)
            })
            function p1done(response){
                console.log(response.studio);
                var streamid = response.studio.streamid;
                var streamurl = response.studio.streamurl;
                var titlepic = response.studio.titlepic;

                app.loaded(streamid,streamurl,titlepic);
                /*新闻列表*/
                var list = response['news'];
                var insert =$(".fresh .allnews:first");
                /*2.1 第一次打开页面js加载数据*/
                for(var i=list.length-1;i>=0;i--){
                    var newhtml = orderList(list[i],i,streamid);
                    if(insert.length  == 0){
                        $(".fresh").append(newhtml);
                    }else{
                        insert.before(newhtml);
                    }
                }
                /*2.2 头条*/
                if(response['head']['id']){
                    var list = response['head'];
                    /*2.2.1 头条副标题——时间*/
                    var toptml = orderList(list,0,streamid);
                    $('.topnews').remove();
                    $('.topW').append(toptml);
                }else{
                    $('.topnews').remove();
                }
                timeBar('first');
                /*2.2.3 初始化下拉*/
                that._initScrollEnd();
                /*2.2.4 去遮罩 本分钟请求一次*/
                setTimeout(that._showDiv,500);
            }
		},
		_showDiv: function(){
			/*2.2.5每半分钟 更新地址*/
			var flagtime = setInterval(function(){
				if(b.done){
					app._incData();
				}
			},1000*5);//setInterval
			/*2.2.6 去除遮罩*/
		},
		_incData:function(param){/*增量数据*/
			console.log('增量数据');
			b.done = false;
			var time = $('.fresh .allnews').first().attr('time');
            let timestamp = Date.parse(new Date());
            if(time == undefined){
                var time = 1;
			}
            var request_url = 'http://api.kankanews.com/kkweb/kkstu/incre/'+time+'/'+b.eid+'.json?';
            var insert = $(".fresh .allnews:first");
            let p2 = new Promise((resolve,reject) =>{
                $.getJSON(request_url+'&jsoncallback=?',(data) =>{
                    resolve(data)
                })
            })
            p2.then((response)=>{
                p2done(response)
            })
            function p2done(response){
                b.done = true;
                var list = response;
                /*2.2.7 每30秒请求 增加数据*/
                for(var i=list.length-1;i>=0;i--){
                    var newhtml = orderList(list[i],0,b.streamid);
                    if(insert.length  == 0){
                        $(".fresh").append(newhtml);
                    }else{
                        insert.before(newhtml);
                    }
                }
                if(list.length!=0){
                    timeBar();
                    if(parseInt(streamid)){
                        app._vidoeTimeBand();
                        app.Refresh();
                    }else{
                        app._timeBand();
                    }
                }
                if(param == 'down' ){
                    $('.tipBand').css('display','block').find('.ui-badge-num').html(list.length);
                    setTimeout(function(){
                        $('.tipBand').css('display','none');
                    },1000);
                }
            }
		},
		render: function(url) {
			console.log('render');
			b.done = false;
			if(b.flag){
				$('.more_btn').html('已经加载全部');$('.loadingbtn').css('opacity',0);
				b.done = true;
				return
			}
			$('.more_btn').html('加载中……');$('.loadingbtn').css('opacity',1);
			var insert =$(".fresh .allnews:last");
            let p3 = new Promise((resolve,reject) =>{
                $.getJSON(url+'&jsoncallback=?',(data) =>{
                    resolve(data)
                })
            })
            p3.then((response)=>{
                p3done(response)
            })
            function p3done(response){
                b.done = true;
                if(response ==""){
                    $('.more_btn').html('已经加载全部');$('.loadingbtn').css('opacity',0);
                    b.flag = true;
                    return;
                }
                /*下拉加载*/
                for(var i=0,l=response.length;i<l;i++){
                    var newhtml = orderList(response[i],i,b.streamid);
                    if(insert.length  == 0){
                        $(".fresh").append(newhtml);
                    }else{
                        insert.after(newhtml);
                    }
                    if(i == response.length-1){
                        $('.more_btn').html('上拉加载更多');$('.loadingbtn').css('opacity',0);
                    }
                }//for
                if(response.length!=0){
                    timeBar();
                    if(parseInt(b.streamid)){
                        app._vidoeTimeBand();
                        app.Refresh();
                    }else{
                        app._timeBand();
                    }
                }
            }
		},
		_initScrollEnd: function(){
			var that = this;
			var timeout = null;
			var scrollEvent = "onscroll" in document.documentElement ? "scroll":"touchmove" ;
			$('.more_btn_loading').css('display','block');
			if(parseInt(streamid) ){
				if(b.flag) return;
				if(timeout) {
					clearTimeout(timeout);
				}
				return
			}
			$(window).on('touchmove',function(){
				that._timeBand();
			});
			$(window).on(scrollEvent, function(){
				that._timeBand();
				$('.more_btn_loading').css('display','block');
				if(b.flag) return;
				if(timeout) {
					clearTimeout(timeout);
				}
				timeout = setTimeout(function(){
					var vd = viewData();
					that.ald = 0;
					if(vd.viewHeight + vd.scrollTop + that.ald >= vd.documentHeight){
						that._loadNews();
					}
				}, 100);
			});
			$(window).on('swipeDown', function(){
				if(b.isclose == '0'){
					var rosHeight = $('.roseLive_head_con ').height();
					var vd = viewData();
					if(vd.scrollTop < rosHeight){
						if(b.done){
							app._incData('down');
						}
					}
				}
			});
		},
		_timeBand:function(){
			var rosHeight = $('.roseLive_head_con').height()+$('.smalltxt').height()+2*$('.timeCollection.sub').height();
			var vd = viewData();
			if(vd.scrollTop>rosHeight){
				$('.timeCollection.tip').css('display','block').html($('.timeCollection.sub').html());
			}else{
				$('.timeCollection.tip').css('display','none');
			}
			$('.timeCollection.sub').each(function(i){
				var judgTimeT = $(this).position().top;
				if(judgTimeT<vd.scrollTop){
					$('.timeCollection.tip').html($(this).html());
				}
			});
		},
		_vidoeTimeBand:function(){
			var dd = $('.fixeddd').height();
			if($('.timeCollection.sub').eq(0).length == 0){
				return
			}
			$('.timeCollection.tip').css('display','block');
			var startS = $('.timeCollection.sub').eq(0).offset().top;
			if(startS<dd){
				$('.timeCollection.tip').css('display','block').html($('.timeCollection.sub').html());
			}
			if(startS>dd){
				$('.timeCollection.tip').css('display','none');
			}
			$('.timeCollection.sub').each(function(i){
				var judgTimeT = $(this).offset().top;
				if(judgTimeT<dd){
					$('.timeCollection.tip').html($(this).html());
				}
			});
		},
		_loadNews: function() {
			var scrolltime = $('.allnews').last().attr('time');
			//console.log('_loadNews',scrolltime);
			if(scrolltime == null){
				return;
			}
			$('.more_btn').html('加载中……');$('.loadingbtn').css('opacity',1);
			var that = this;
			that._setLoadingState(true);
		},
		_setLoadingState: function(isLoading){
			var that = this;
			that.isLoading = isLoading;
			if(isLoading){
				var timestamp = Date.parse(new Date());
				var scrolltime = $('.allnews').last().attr('time');
				$('.more_btnbox').css('display','block');
				if(b.isclose == 1){
					var od = 'asc';
				}else{
					var od = 'desc';
				}
				var url = 'http://api.kankanews.com/kkweb/kkstu/next/'+scrolltime+'/'+b.eid+'.json?ord='+od;
				that.render(url);
			}
		},
		orientationChange:function(){
			setTimeout(function(){
				myScroll.refresh();
			},500);
		},
		loadImage : function(){
			if(parseInt(streamid) && b.load){
				myScroll.refresh('img');
			}
		},
		Refresh:function(){
			console.log('rrr');
			if(b.done){
				b.done = false;
				setTimeout(function(){
					myScroll.refresh();
					console.log('Refresh');
				},250);
			}
		},
		changeState:function(param){
			b.videoSt = param;
			console.log(b.videoSt);
		},
		weixinEvent: function(){
		}};
	app.init();
	window.API = {};
}();