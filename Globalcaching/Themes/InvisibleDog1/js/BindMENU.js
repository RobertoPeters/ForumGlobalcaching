(function(b){showDefaultMenu=function(q,k,o,p){if(b(o).find("ul").is(".submenu")){var r=b(o).find("ul.submenu");if(k.Orientation.toLowerCase()=="vertical"||b(o).parent().is(".submenu")){r.css("left",r.parent().outerWidth(true));b(o).css("position","relative");var m=b(o).children("a,span").offset().top-b(o).offset().top;m=m+b(o).children("a,span").outerHeight(true);r.css("margin-top","-"+m+"px");r.css("margin-left","0px");var a=b(o).offset().left+b(o).outerWidth(true);if(a+r.outerWidth()>b(window).width()){r.css("left","0px").css("left","-"+r.outerWidth()+"px")}}else{var n=b(o).children("a,span").offset().left-b(o).offset().left;if(n>0){r.css("margin-left","-"+n+"px")}var l=b(o).children("a,span").offset().top-b(o).offset().top;if(l>0){r.css("margin-top",l+"px")}}}b("ul:first",o).slideDown(p)};hideDefaultMenu=function(f,a,h,g){b("ul:first",h).hide()};showAccordionMenu=function(f,a,h,g){if(b(h).children("ul").is(".submenu")){b(h).children("ul").find("ul").show();b(h).children("ul").slideDown(g)}};hideAccordionMenu=function(f,a,h,g){if(b(h).children("ul").is(".submenu")){b(h).children("ul").slideUp(g)}};showMegaMenu=function(u,m,r,s){b("ul.submenu",u).hide();var q=b(".container").outerWidth();if(b(r).children("ul").is(".submenu")){var v=b(r).children("ul.submenu");v.css("position","absolute");if(m.Orientation.toLowerCase()=="vertical"){v.css("left",v.parent().outerWidth(true));b(r).css("position","relative");var o=b(r).children("a,span").offset().top-b(r).offset().top;o=o+b(r).children("a,span").outerHeight(true);v.css("margin-top","-"+o+"px");v.css("margin-left","0px");var a=b(r).offset().left+b(r).outerWidth(true);if(a>b(window).width()/2){v.css("left","0px").css("left","-"+v.outerWidth()+"px")}}else{var t=b(r).find("a,span").offset().left-b(r).offset().left;if(t>0&&b(r).hasClass("mega")){v.css("margin-left","-"+t+"px")}var n=b(r).find("a,span").offset().top-b(r).offset().top;if(n>0){v.css("margin-top",n+"px")}v.css("opacity","0").show();if(m.Orientation.toLowerCase()=="horizontal"){var p=b(r).offset().left+v.outerWidth(true);if(q<p){t=b(r).offset().left-b(r).parent().children("li:first").offset().left;if(t>0&&b(r).hasClass("mega")){v.css("margin-left","-"+t+"px")}}}v.hide().css("opacity","1")}}b("ul.submenu",r).slideDown(s)};hideMegaMenu=function(f,a,h,g){b("ul.submenu",f).hide()};megaMenuWithColumns=function(i,z,x,v,y,p,w,u){w=w.toLowerCase();if(w=="vertical"){var r=b("#MenuV").outerWidth(true);if(u>x){x=x-r}else{x=u}}var a=z.children("li");if(v==true){z=z.parent()}else{for(var s=0;s<a.length;s+=i){a.slice(s,s+i).wrapAll("<div class='megamenu-row'></div>")}}var q=x;var t=parseInt(q/i);if(b(window).width()>768){z.children(".megamenu-row").children("li").css({display:"table-cell"});z.children(".megamenu-row").children("li").css({width:t+"px","min-width":y+"px","max-width":p+"px"});z.children(".megamenu-row").children("li").find("a").css({"white-space":"normal",padding:"7px"});z.css({width:q+"px"})}else{z.children(".megamenu-row").children("li").css({display:"block"});z.children(".megamenu-row").children("li").css({width:"100%","min-width":"0px","max-width":"100%"});z.children(".megamenu-row").children("li").find("a").css({"white-space":"normal",padding:"7px"});z.css({width:"100%"})}};megaMenuNoColumns=function(p,t,r,s,l,n,a,o,q){q=q.toLowerCase();if(q=="vertical"){var m=b("#MenuV").outerWidth(true);r=r-m}if(b(window).width()>768){t.children("li").css({display:"table-cell"});if(p<r){t.children("li").css({"min-height":a+"px",width:o+"px","min-width":s+"px","max-width":l+"px"});t.children("li").find("a").css({"white-space":"normal"});t.css("width",p)}else{t.css("width",r);o=parseInt(r/n);t.children("li").css({"min-height":a+"px",width:o+"px","min-width":s+"px","max-width":l+"px"});t.children("li").find("a").css({"white-space":"normal",padding:"7px"})}}else{t.children("li").css({display:"block"});t.children("li").css({width:"100%","min-width":"0px","max-width":"100%"});t.children("li").find("a").css({"white-space":"normal",padding:"7px"});t.css({width:"100%"})}};b.fn.BindMENU=function(a){var g="fast";var h="hover";if(a.Speed!=null){g=a.Speed.toLowerCase()}if(a.Event!=null){if((a.Event.toLowerCase()=="hover")||(a.Event.toLowerCase()=="mouseover")){h="hover"}else{if((a.Event.toLowerCase()=="click")||(a.Event.toLowerCase()=="mouseclick")){h="click"}}}b("ul",this).addClass("submenu");if(navigator.userAgent.indexOf("MSIE 7")!=-1){b("ul.submenu",this).before('<div style="height: 0px; line-height: 0px; clear: both; overflow: hidden; font-size:0px; position:fixed" />')}var f=b(this);if((a.Orientation.toLowerCase()=="horizontal"&&a.MenuStyle.toLowerCase()=="accordion")||a.MenuStyle.toLowerCase()=="defaultmenu"){b("ul.submenu",this).hide().css("position","absolute");if(h=="hover"){b("li",this).hover(function(){showDefaultMenu(f,a,this,g)},function(){hideDefaultMenu(f,a,this,g)})}else{b("li > a, li > span",this).click(function(c){var d=b(this).parent("li");if(b(d).children("ul").is(".submenu")){c.preventDefault();if(b(d).children("ul").css("display")!="none"){hideDefaultMenu(f,a,d,g)}else{b(this).closest("ul").children("li").children("a, span").not(this).parent().find("ul").hide();showDefaultMenu(f,a,d,g)}}else{b(f).find("ul.submenu").hide()}})}}if(a.Orientation.toLowerCase()=="vertical"&&a.MenuStyle.toLowerCase()=="accordion"){b(this).closest("#MenuV").addClass("accordion");b(this).children("li").children("ul").hide();if(h=="hover"){b(this).children("li").hover(function(c){c.stopPropagation();showAccordionMenu(f,a,this,g)},function(c){c.stopPropagation();hideAccordionMenu(f,a,this,g)})}else{b("li > a, li > span",this).click(function(c){var d=b(this).parent("li");if(b(d).children("ul").is(".submenu")){c.preventDefault();c.stopPropagation();if(b(d).children("ul").css("display")!="none"){hideAccordionMenu(f,a,d,g)}else{showAccordionMenu(f,a,d,g)}}})}}if(a.MenuStyle.toLowerCase()=="megamenu"){b(this).parent().addClass("megamenu");b(".submenu",this).css("display","table");b(this).children("li").children("ul").each(function(){if(b(this).children("li").children("ul").is(".submenu")){b(this).parent().addClass("mega");var v=b(this).outerWidth()-b(this).width();var c="0";b(this).css("position","absolute");b(".submenu",this).css({display:"block",position:"relative","min-width":"0px"});b(this).children("li").css({display:"table-cell","vertical-align":"top"});var e=0;var x=0;a.MinWidth=parseInt(a.MinWidth);a.MaxWidth=parseInt(a.MaxWidth);if(a.MinWidth<=0||!a.MinWidth){a.MinWidth=100}if(a.MaxWidth&&a.MaxWidth<a.MinWidth){a.MaxWidth=a.MinWidth}b(this).children("li").each(function(){e++});if(a.MaxColumns&&a.MaxColumns>0&&a.MaxColumns<=e){var y=b(".container").outerWidth();var z=b(this);var t=0;b(this).children("li").each(function(){if(t<a.MaxColumns){x=b(this).outerWidth(true);if(x<a.MinWidth){x=a.MinWidth}if(x>a.MaxWidth){x=a.MaxWidth}v+=x;t++}});var u=b(window).width()-b(".container").outerWidth();var j=z.parent().parent().children("li:first").offset().left-(u/2);if(v<j){y=v}megaMenuWithColumns(parseInt(a.MaxColumns),z,y,false,a.MinWidth,a.MaxWidth,a.Orientation,v);var w=b(this).children(".megamenu-row");b(window).resize(function(){var i=b(".container").outerWidth();var k=b(window).width()-b(".container").outerWidth();var l=z.parent().parent().children("li:first").offset().left-(k/2);if(v<l){i=v}megaMenuWithColumns(parseInt(a.MaxColumns),w,i,true,a.MinWidth,a.MaxWidth,a.Orientation,v)})}else{b(this).children("li").each(function(){x=b(this).outerWidth(true);if(x<a.MinWidth){x=a.MinWidth}if(x>a.MaxWidth){x=a.MaxWidth}v+=x;if(b(this).outerHeight(true)>c){c=b(this).outerHeight(true)}});var s=parseInt(v/e);var d=b(".container").outerWidth();megaMenuNoColumns(v,b(this),d,a.MinWidth,a.MaxWidth,e,c,s,a.Orientation);var z=b(this);b(window).resize(function(){var i=b(".container").outerWidth();megaMenuNoColumns(v,z,i,a.MinWidth,a.MaxWidth,e,c,s,a.Orientation)})}}});b(this).children("li").children("ul").hide();if(h=="hover"){b(this).children("li").hover(function(){showMegaMenu(f,a,this,g)},function(){hideMegaMenu(f,a,this,g)})}else{b("li > a, li > span",this).click(function(c){var d=b(this).parent("li");if(b(d).children("ul").is(".submenu")){c.preventDefault();if(b(d).children("ul").css("display")!="none"){hideMegaMenu(f,a,d,g)}else{showMegaMenu(f,a,d,g)}}else{b(f).find("ul.submenu").hide()}})}}}})(jQuery);