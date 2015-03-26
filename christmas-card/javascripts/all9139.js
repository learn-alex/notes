jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});


(function(jQuery){jQuery.each(['backgroundColor','borderBottomColor','borderLeftColor','borderRightColor','borderTopColor','color','outlineColor'],function(i,attr){jQuery.fx.step[attr]=function(fx){if(fx.state==0){fx.start=getColor(fx.elem,attr);fx.end=getRGB(fx.end);}if((!fx.end)&&(fx.start))fx.end=fx.start;else if((!fx.start)&&(fx.end))fx.start=fx.end;if(!fx.start)fx.start=[0,0,0];if(!fx.end)fx.end=[0,0,0];if((fx.start.length>3)||(fx.end.length>3))fx.elem.style[attr]="rgba("+[Math.max(Math.min(parseInt((fx.pos*(fx.end[0]-fx.start[0]))+fx.start[0]),255),0),Math.max(Math.min(parseInt((fx.pos*(fx.end[1]-fx.start[1]))+fx.start[1]),255),0),Math.max(Math.min(parseInt((fx.pos*(fx.end[2]-fx.start[2]))+fx.start[2]),255),0),Math.max(Math.min(parseFloat((parseFloat(fx.pos)*((fx.end[3]||0.0)-(fx.start[3]||0.0)))+(fx.start[3]||0.0)),1.0),0)].join(",")+")";else
fx.elem.style[attr]="rgb("+[Math.max(Math.min(parseInt((fx.pos*(fx.end[0]-fx.start[0]))+fx.start[0]),255),0),Math.max(Math.min(parseInt((fx.pos*(fx.end[1]-fx.start[1]))+fx.start[1]),255),0),Math.max(Math.min(parseInt((fx.pos*(fx.end[2]-fx.start[2]))+fx.start[2]),255),0)].join(",")+")";}});function getRGB(color){var result;if(color&&color.constructor==Array&&(color.length==4||color.length==3))return color;if(result=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))return[parseInt(result[1]),parseInt(result[2]),parseInt(result[3])];if(result=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))return[parseFloat(result[1])*2.55,parseFloat(result[2])*2.55,parseFloat(result[3])*2.55];if(result=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\,\s*(0.[0-9]{1,3})\s*\)/.exec(color))return[parseInt(result[1]),parseInt(result[2]),parseInt(result[3]),parseFloat(result[4])];if(result=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\,\s*(0.[0-9]{1,3})\s*\)/.exec(color))return[parseFloat(result[1])*2.55,parseFloat(result[2])*2.55,parseFloat(result[3])*2.55,parseFloat(result[4])];if(result=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))return[parseInt(result[1],16),parseInt(result[2],16),parseInt(result[3],16)];if(result=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))return[parseInt(result[1]+result[1],16),parseInt(result[2]+result[2],16),parseInt(result[3]+result[3],16)];return colors[jQuery.trim(color).toLowerCase()];}function getColor(elem,attr){var color;do{color=jQuery.curCSS(elem,attr);if(color!=''&&color!='transparent'||jQuery.nodeName(elem,"body"))break;attr="backgroundColor";}while(elem=elem.parentNode);return getRGB(color);};var colors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]};})(jQuery);


(function($){if(!document.defaultView||!document.defaultView.getComputedStyle){var oldCurCSS=jQuery.curCSS;jQuery.curCSS=function(elem,name,force){if(name==='background-position'){name='backgroundPosition';}if(name!=='backgroundPosition'||!elem.currentStyle||elem.currentStyle[name]){return oldCurCSS.apply(this,arguments);}var style=elem.style;if(!force&&style&&style[name]){return style[name];}return oldCurCSS(elem,'backgroundPositionX',force)+' '+oldCurCSS(elem,'backgroundPositionY',force);};}var oldAnim=$.fn.animate;$.fn.animate=function(prop){if('background-position'in prop){prop.backgroundPosition=prop['background-position'];delete prop['background-position'];}if('backgroundPosition'in prop){prop.backgroundPosition='('+prop.backgroundPosition;}return oldAnim.apply(this,arguments);};function toArray(strg){strg=strg.replace(/left|top/g,'0px');strg=strg.replace(/right|bottom/g,'100%');strg=strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");var res=strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);return[parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];}$.fx.step.backgroundPosition=function(fx){if(!fx.bgPosReady){var start=$.curCSS(fx.elem,'backgroundPosition');if(!start){start='0px 0px';}start=toArray(start);fx.start=[start[0],start[2]];var end=toArray(fx.options.curAnim.backgroundPosition);fx.end=[end[0],end[2]];fx.unit=[end[1],end[3]];fx.bgPosReady=true;}var nowPosX=[];nowPosX[0]=((fx.end[0]-fx.start[0])*fx.pos)+fx.start[0]+fx.unit[0];nowPosX[1]=((fx.end[1]-fx.start[1])*fx.pos)+fx.start[1]+fx.unit[1];fx.elem.style.backgroundPosition=nowPosX[0]+' '+nowPosX[1];};})(jQuery);


/**
*	@name:			jQuery.Conventionalize
*	@descripton:	A whole bunch of function aliases for jQuery to make it follow the traditional JavaScript naming conventions more closely and to make jQuery usable by mere mortals.
*	@version:		0.?
*	@requires:		jQuery v1.3.2
*	@author:		Slippy Douglas <'work' + AT + 'dyppils'.split('').reverse().join('') + '.com'>
*/


// aliases for poorly named jQuery function

jQuery.fn.getAttr = function(name) { return this.attr(name); }
jQuery.fn.setAttr = function(name, value, type) { return this.attr(name, value, type); }

jQuery.fn.getData = function(key) { return this.data(key); }
jQuery.fn.setData = function(key, value) { return this.data(key, value); }

jQuery.fn.getCSS = function(key) { return this.css(key); }
jQuery.fn.setCSS = function(key, value) { return this.css(key, value); }

jQuery.fn.setWidth = function(val) { return this.width(val); }
jQuery.fn.setHeight = function(val) { return this.height(val); }

jQuery.fn.searchInside = jQuery.fn.find;


// additional functionality that should be built into jQuery

// inefficient, but effective
// @todo: optimize, otherwise burn Sizzle
jQuery.fn.search = function(selector) {
	if (!this.parent()[0]) // if we're at the root DOM node (document)
		return this.searchInside(selector); // just do a normal find
	
	var self = this; // save off the "this" that search() was called on
	var overScoped = this.parent().find(selector); // do an oveyly-large find for the parent's scope (inefficient)
	var searched = $([]); // to add all the qualifying elements into
	overScoped.each(function() {
		if ($(this).index(self) >= 0 || $(this).parents().index(self) >= 0) // if the element either is "self", or has "self" as an ancestor, it's good
			searched = searched.add(this); // save it in the array that will be returned
	});
	return searched;
}


// ClutterApp JS utils


jQuery.fn.walk = function() {
	var firstChild = this.children(':first');
	if (firstChild[0]) {
		return firstChild;
	} else {
		var nextSibling = this.next()
		if (nextSibling[0])
			return nextSibling;
		else
			return this.closest(':not(:last-child)').next();
	}
}

jQuery.fn.required = function() {
	if (window.console && window.console.assert)
		window.console.assert(this[0]);
	
	return this;
}

$.extend(String.prototype, {
	// function derived from jQuery.backgroundPosition
	asBGPosToArray: function() {
		var strg = this; // make of copy of ourself (a string), so we don't change the contents
		strg = strg.replace(/left|top/g, '0px');
		strg = strg.replace(/right|bottom/g, '100%');
		strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g, "$1px$2");
		var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return [
			parseFloat(res[1], 10),
			res[2],
			parseFloat(res[3], 10),
			res[4]
		];
	}
});

function lerp(ratio, start, end) {
	return (end - start) * ratio + start;
}


$(function() {
	if (!$.browser.msie || parseInt($.browser.version) >= 8) {
    	setTimeout('lightsToDim()', 750);
    	setTimeout('envelopeIn()', 1000);
	}
});

function lightsToDim() {
	var darken = $('#base > .back > .darken').required();
	
	darken.animate(
		{ opacity: 0.8 },
		{
			duration: 3000,
			easing: 'easeInOutQuad',
			complete: lightsToDim2,
			queue: false,
		}
	);
}

function lightsToDim2() {
	var darken = $('#base > .back > .darken').required();
	
	darken.animate(
		{ opacity: 0.65 },
		{
			duration: 3000,
			easing: 'easeInOutQuad',
			complete: lightsToDim,
			queue: false,
		}
	);
}

function envelopeIn() {
	var envelope = $('#envelope').required();
	
	envelope.show().setCSS(
		{ top: -800 }
	).animate(
		{ top: 100 },
		{
			duration: 2000,
			easing: 'easeOutQuad',
			queue: false,
			complete: function() {
				//envelope.hover(
				//	function() { envelope.children('.overlay').fadeIn(200); },
				//	function() { envelope.children('.overlay').fadeOut(400); }
				//);
				envelope.click(envelopeOut);
			},
		}
	);
}


function envelopeOut() {
	var envelope = $('#envelope').required();
	envelope.unbind();
	
	envelope.children('.overlay').fadeOut(600);
	
	envelope.animate(
		{ top: $(window).height() + 200 },
		{
			duration: 2000,
			easing: 'easeInQuint',
			queue: false,
			complete: function() {
				envelope.hide();
				lightsUp();
				setTimeout('stripesIn()', 1000);
				letterIn();
			},
		}
	);
}

function lightsUp() {
	var darken = $('#base > .back > .darken').required();
	
	darken.stop(true, false);
	darken.animate(
		{ opacity: 0.0 },
		{
			duration: 3000,
			easing: 'easeInOutQuad',
			queue: false,
		}
	);
	
	var fadedCorners = $('#base > .back > .faded-corners');
	fadedCorners.animate(
		{ opacity: 0.5 },
		{
			duration: 3000,
			easing: 'easeInOutQuad',
			queue: false,
		}
	);
}

function stripesIn() {
	var stripes = $('#base > .back > .stripes').required();
	
	stripes.fadeIn(4000);
	stripes.animate(
		{ backgroundPosition: '0px 500px' },
		{
			duration: 4000,
			easing: 'easeOutExpo',
			queue: false,
		}
	);
}


function letterIn() {
	var letter = $('#letter').required();
	
	letter.show();
	var letterHeight = letter.height();
	
	letter.setCSS(
		{ top: $(window).height() + 200, }
	).animate(
		{ top: 0, },
		{
			duration: 2000,
			easing: 'easeOutQuad',
			queue: false,
		}
	);
	
	
	var letterHeightPusher = $('#letter-height-pusher').required();
	
	letterHeightPusher.show().animate(
		{ height: letterHeight, },
		{
			duration: 2000,
			easing: 'easeOutQuad',
			queue: false,
			complete: function() {
				blinkingLetterFooter();
				$('#credit').fadeIn(2000);
			}
		}
	);
}


function blinkingLetterFooter() {
	var choice = Math.random() * 3;
	
	if (choice < 1)
		blinkMerry();
	else if (choice < 2)
		blinkChistmas();
	else
		blinkNewyear();
	
	setTimeout('blinkingLetterFooter()', lerp(Math.random(), 1000, 1500));
}

function blinkMerry() {
	var merry = $('#letter .footer .merry');
	merry.stop(true, false);
	merry.animate(
		{ color: '#fdd' },
		{
			duration: 200,
			easing: 'easeInSine',
			queue: false,
			complete: function() { setTimeout('unblinkMerry()', 1000); }
		}
	);
}

function unblinkMerry() {
	var merry = $('#letter .footer .merry');
	merry.stop(true, false);
	merry.animate(
		{ color: '#600' },
		{
			duration: 400,
			easing: 'easeOutSine',
			queue: false,
		}
	);
}

function blinkChistmas() {
	var christmas = $('#letter .footer .christmas');
	christmas.stop(true, false);
	christmas.animate(
		{ color: '#9f9' },
		{
			duration: 200,
			easing: 'easeInSine',
			queue: false,
			complete: function() { setTimeout('unblinkChistmas()', 1000); }
		}
	);
}

function unblinkChistmas() {
	var christmas = $('#letter .footer .christmas');
	christmas.stop(true, false);
	christmas.animate(
		{ color: '#040' },
		{
			duration: 400,
			easing: 'easeOutSine',
			queue: false,
		}
	);
}

function blinkNewyear() {
	var newyear = $('#letter .footer .newyear');
	newyear.stop(true, false);
	newyear.animate(
		{ color: '#cef' },
		{
			duration: 200,
			easing: 'easeInSine',
			queue: false,
			complete: function() { setTimeout('unblinkNewyear()', 1000); }
		}
	);
}

function unblinkNewyear() {
	var newyear = $('#letter .footer .newyear');
	newyear.stop(true, false);
	newyear.animate(
		{ color: '#036' },
		{
			duration: 400,
			easing: 'easeOutSine',
			queue: false,
		}
	);
}
