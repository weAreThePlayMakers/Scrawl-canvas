/*! scrawl 2014-05-13 */
"use strict";var scrawl=function(a){return a.newPhrase=function(b){return new a.Phrase(b)},a.pushUnique(a.sectionlist,"text"),a.pushUnique(a.nameslist,"textnames"),a.Phrase=function(b){return b=a.safeObject(b),a.Sprite.call(this,b),a.Position.prototype.set.call(this,b),this.registerInLibrary(),this.lineHeight=b.lineHeight||a.d.Phrase.lineHeight,b.font&&this.checkFont(b.font),this.constructFont(),this.size=this.get("size"),this.multiline(b),this.getMetrics(),this},a.Phrase.prototype=Object.create(a.Sprite.prototype),a.Phrase.prototype.type="Phrase",a.Phrase.prototype.classname="spritenames",a.d.Phrase={text:"",style:"normal",variant:"normal",weight:"normal",size:12,metrics:"pt",family:"sans-serif",lineHeight:1.5,backgroundColor:"",backgroundMargin:0,textAlongPath:"phrase",fixedWidth:!1,texts:[]},a.mergeInto(a.d.Phrase,a.d.Sprite),a.Phrase.prototype.set=function(b){return a.Sprite.prototype.set.call(this,b),b=a.safeObject(b),this.lineHeight=b.lineHeight||this.lineHeight,b.font&&(this.checkFont(b.font),this.offset.flag=!1),(b.text||b.size||b.scale)&&(this.offset.flag=!1),this.constructFont(),this.size=this.get("size"),this.multiline(b),this.getMetrics(),this},a.Phrase.prototype.setDelta=function(b){return a.Sprite.prototype.setDelta.call(this,b),b.text&&(this.offset.flag=!1),(b.size||b.scale)&&(this.constructFont(),this.offset.flag=!1),this.getMetrics(),this},a.Phrase.prototype.clone=function(b){return b.texts=[],a.Sprite.prototype.clone.call(this,b)},a.Phrase.prototype.multiline=function(b){b=JSON.parse(JSON.stringify(b));var c=""+(b.text||this.get("text")),d=c.split("\n");if(a.xt(this.texts))for(var e=0,f=this.texts.length;f>e;e++)delete a.text[this.texts[e]],a.removeItem(a.textnames,this.texts[e]);this.texts=[],b.phrase=this.name;for(var e=0,f=d.length;f>e;e++)b.text=d[e],b.text.length>0&&new a.Text(b);return this.text=c,this},a.Phrase.prototype.checkFont=function(b){return a.xt(b)&&this.deconstructFont(),this.constructFont(),this},a.Phrase.prototype.deconstructFont=function(){var b,c,d,e=a.ctx[this.context].font,f=[100,200,300,400,500,600,700,800,900,"italic","oblique","small-caps","bold","bolder","lighter","xx-small","x-small","small","medium","large","x-large","xx-large"],g=this.get("style"),h=this.get("variant"),i=this.get("weight"),j=this.get("size"),k=this.get("metrics"),l=this.get("family");/italic/i.test(e)?g="italic":/oblique/i.test(e)?g="oblique":this.style="normal",h=/small-caps/i.test(e)?"small-caps":"normal",/bold/i.test(e)?i="bold":/bolder/i.test(e)?i="bolder":/lighter/i.test(e)?i="lighter":/([1-9]00)/i.test(e)?(b=e.match(/([1-9]00)/i),i=b[1]):i="normal",b=!1,/(\d+)(%|in|cm|mm|em|ex|pt|pc|ex)?/i.test(e)?(b=e.match(/(\d+)(%|in|cm|mm|em|ex|pt|pc|ex|px)/i),j=parseFloat(b[1]),k=b[2]):/xx-small/i.test(e)?(j=3,k="pt"):/x-small/i.test(e)?(j=6,k="pt"):/small/i.test(e)?(j=9,k="pt"):/medium/i.test(e)?(j=12,k="pt"):/large/i.test(e)?(j=15,k="pt"):/x-large/i.test(e)?(j=18,k="pt"):/xx-large/i.test(e)?(j=21,k="pt"):(j=12,k="pt"),c="",d=e.split(" ");for(var m=0,n=d.length;n>m;m++)a.contains(f,d[m])||d[m].match(/[^\/](\d)+(%|in|cm|mm|em|ex|pt|pc|ex)?/i)||(c+=d[m]+" ");return c||(c="Verdana, Geneva, sans-serif"),l=c,a.Base.prototype.set.call(this,{style:g,variant:h,weight:i,size:j,metrics:k,family:l}),this},a.Phrase.prototype.constructFont=function(){var b="",c=this.get("style"),d=this.get("variant"),e=this.get("weight"),f=this.get("size"),g=this.get("metrics"),h=this.get("family");return"normal"!==c&&(b+=c+" "),"normal"!==d&&(b+=d+" "),"normal"!==e&&(b+=e+" "),b+=f*this.scale+g+" ",b+=h,a.ctx[this.context].font=b,this},a.Phrase.prototype.stamp=function(b,c){var d;return this.visibility&&(d=a.contains(a.spritenames,this.path)&&"Path"===a.sprite[this.path].type,this.pivot||!d||"phrase"===this.get("textAlongPath")?a.Sprite.prototype.stamp.call(this,b,c):a.text[this.texts[0]].stampAlongPath(b,c)),this},a.Phrase.prototype.clear=function(b,c){var d,e,f=this.getOffset(),g=this.prepareStamp(),h=this.size*this.lineHeight*this.scale;a.cell[c].setEngine(this),b.globalCompositeOperation="destination-out",this.rotateCell(b),d=g.x+f.x;for(var i=0,j=this.texts.length;j>i;i++)e=g.y+h*i+f.y,a.text[this.texts[i]].clear(b,c,d,e);return b.globalCompositeOperation=a.ctx[c].get("globalCompositeOperation"),this},a.Phrase.prototype.clearWithBackground=function(b,c){var d,e,f=this.getOffset(),g=this.prepareStamp(),h=this.size*this.lineHeight*this.scale;a.cell[c].setEngine(this),this.rotateCell(b),d=g.x+f.x;for(var i=0,j=this.texts.length;j>i;i++)e=g.y+h*i+f.y,a.text[this.texts[i]].clearWithBackground(b,c,d,e);return this},a.Phrase.prototype.draw=function(b,c){var d,e,f=this.getOffset(),g=this.prepareStamp(),h=this.size*this.lineHeight*this.scale;a.cell[c].setEngine(this),this.rotateCell(b),a.xt(this.backgroundColor)&&this.addBackgroundColor(b,g),d=g.x+f.x;for(var i=0,j=this.texts.length;j>i;i++)e=g.y+h*i+f.y,a.text[this.texts[i]].draw(b,c,d,e);return this},a.Phrase.prototype.fill=function(b,c){var d,e,f=this.getOffset(),g=this.prepareStamp(),h=this.size*this.lineHeight*this.scale;a.cell[c].setEngine(this),this.rotateCell(b),a.xt(this.backgroundColor)&&this.addBackgroundColor(b,g),d=g.x+f.x;for(var i=0,j=this.texts.length;j>i;i++)e=g.y+h*i+f.y,a.text[this.texts[i]].fill(b,c,d,e);return this},a.Phrase.prototype.drawFill=function(b,c){var d,e,f=this.getOffset(),g=this.prepareStamp(),h=this.size*this.lineHeight*this.scale;a.cell[c].setEngine(this),this.rotateCell(b),a.xt(this.backgroundColor)&&this.addBackgroundColor(b,g),d=g.x+f.x;for(var i=0,j=this.texts.length;j>i;i++)e=g.y+h*i+f.y,a.text[this.texts[i]].drawFill(b,c,d,e,this);return this},a.Phrase.prototype.fillDraw=function(b,c){var d,e,f=this.getOffset(),g=this.prepareStamp(),h=this.size*this.lineHeight*this.scale;a.cell[c].setEngine(this),this.rotateCell(b),a.xt(this.backgroundColor)&&this.addBackgroundColor(b,g),d=g.x+f.x;for(var i=0,j=this.texts.length;j>i;i++)e=g.y+h*i+f.y,a.text[this.texts[i]].fillDraw(b,c,g.x+f.x,e,this);return this},a.Phrase.prototype.sinkInto=function(b,c){var d,e,f=this.getOffset(),g=this.prepareStamp(),h=this.size*this.lineHeight*this.scale;a.cell[c].setEngine(this),this.rotateCell(b),a.xt(this.backgroundColor)&&this.addBackgroundColor(b,g),d=g.x+f.x;for(var i=0,j=this.texts.length;j>i;i++)e=g.y+h*i+f.y,a.text[this.texts[i]].sinkInto(b,c,g.x+f.x,e);return this},a.Phrase.prototype.floatOver=function(b,c){var d,e,f=this.getOffset(),g=this.prepareStamp(),h=this.size*this.lineHeight*this.scale;a.cell[c].setEngine(this),this.rotateCell(b),a.xt(this.backgroundColor)&&addBackgroundColor(b,g),d=g.x+f.x;for(var i=0,j=this.texts.length;j>i;i++)e=g.y+h*i+f.y,a.text[this.texts[i]].floatOver(b,c,g.x+f.x,e);return this},a.Phrase.prototype.getMetrics=function(){for(var b=0,c=0,d=this.texts,e=0,f=d.length;f>e;e++)c=a.text[d[e]].get("width")>c?a.text[d[e]].width:c,b+=a.text[d[e]].get("height");return this.width=c,this.height=b,this},a.Phrase.prototype.addBackgroundColor=function(b,c){var d=this.get("backgroundMargin"),e=c.x-d,f=c.y-d,g=this.width*this.scale+2*d,h=this.height*this.scale+2*d;return b.fillStyle=this.backgroundColor,b.fillRect(e,f,g,h),b.fillStyle=a.ctx[this.context].get("fillStyle"),this},a.Phrase.prototype.getOffset=function(){var b=a.ctx[this.context],c=0,d=0;switch(b.get("textAlign")){case"start":case"left":c=0;break;case"center":c=this.width/2*this.scale;break;case"right":case"end":c=this.width*this.scale}switch(b.get("textBaseline")){case"top":d=0;break;case"hanging":d=this.size*this.lineHeight*this.scale*.1;break;case"middle":d=this.size*this.lineHeight*this.scale*.5;break;case"bottom":d=this.size*this.lineHeight*this.scale;break;default:d=this.size*this.lineHeight*this.scale*.85}return{x:c,y:d}},a.Text=function(b){return b=a.safeObject(b),a.Base.call(this,b),this.text=b.text||a.d.Text.text,this.phrase=b.phrase||a.d.Text.phrase,this.context=a.sprite[this.phrase].context,this.fixedWidth=a.isa(b.fixedWidth,"bool")?b.fixedWidth:a.d.Text.fixedWidth,this.textAlongPath=b.textAlongPath||a.d.Text.textAlongPath,a.text[this.name]=this,a.pushUnique(a.textnames,this.name),a.pushUnique(a.sprite[this.phrase].texts,this.name),this.getMetrics(),this},a.Text.prototype=Object.create(a.Base.prototype),a.Text.prototype.type="Text",a.Text.prototype.classname="textnames",a.d.Text={text:"",phrase:"",context:"",fixedWidth:!1,textAlongPath:"phrase",width:0,height:0,glyphs:[],glyphWidths:[]},a.mergeInto(a.d.Text,a.d.Base),a.Text.prototype.stampAlongPath=function(b,c){var d=a.sprite[this.phrase];b=a.isa(b,"str")?b:d.method,c=a.isa(c,"str")&&a.contains(a.cellnames,c)?c:a.cell[a.group[d.group].cell];var e,f,g,h,i,j=a.context[c],k=a.cell[c],l=a.sprite[d.path].getPerimeterLength(),m=this.width*d.scale,n=m/l,o=d.pathPlace,p=this.text;a.xt(this.glyphs)||this.getMetrics(),k.setEngine(d);for(var q=0,r=this.glyphs.length;r>q;q++)if(a.xt(this.glyphs[q])){switch(this.text=this.glyphs[q],f=o+this.glyphWidths[q]/2/m*n,a.isBetween(f,0,1,!0)||(f+=f>.5?-1:1),e=a.sprite[d.path].getPerimeterPosition(f,d.pathSpeedConstant,!0),g=e.x,h=e.y,i=e.r*a.radian,j.setTransform(1,0,0,1,0,0),j.translate(g,h),j.rotate(i),j.translate(-g,-h),b){case"draw":this.draw(j,c,g,h);break;case"fill":this.fill(j,c,g,h);break;case"drawFill":this.drawFill(j,c,g,h,d);break;case"fillDraw":this.fillDraw(j,c,g,h,d);break;case"sinkInto":this.sinkInto(j,c,g,h);break;case"floatOver":this.floatOver(j,c,g,h);break;case"clear":case"clearWithBackground":case"clip":case"none":}o+=this.glyphWidths[q]/m*n,a.isBetween(o,0,1,!0)||(o+=o>.5?-1:1)}return this.text=p,this},a.Text.prototype.clear=function(a,b,c,d){return a.fillText(this.text,c,d),this},a.Text.prototype.clearWithBackground=function(b,c,d,e){return b.fillStyle=a.cell[c].backgroundColor,b.globalAlpha=1,b.fillText(this.text,d,e),b.fillStyle=a.ctx[c].fillStyle,b.globalAlpha=a.ctx[c].globalAlpha,this},a.Text.prototype.draw=function(a,b,c,d){return a.strokeText(this.text,c,d),this},a.Text.prototype.fill=function(a,b,c,d){return a.fillText(this.text,c,d),this},a.Text.prototype.drawFill=function(a,b,c,d,e){return a.strokeText(this.text,c,d),e.clearShadow(a,b),a.fillText(this.text,c,d),e.restoreShadow(a,b),this},a.Text.prototype.fillDraw=function(a,b,c,d,e){return a.fillText(this.text,c,d),e.clearShadow(a,b),a.strokeText(this.text,c,d),e.restoreShadow(a,b),this},a.Text.prototype.sinkInto=function(a,b,c,d){return a.fillText(this.text,c,d),a.strokeText(this.text,c,d),this},a.Text.prototype.floatOver=function(a,b,c,d){return a.strokeText(this.text,c,d),a.fillText(this.text,c,d),this},a.Text.prototype.clip=function(){return this},a.Text.prototype.getMetrics=function(){var b,c,d,e=a.sprite[this.phrase],f=a.context[a.pad[a.currentPad].current],g=a.ctx[this.context],h=f.font,i=f.textBaseline,j=f.textAlign;if(f.font=g.get("font"),f.textBaseline=g.get("textBaseline"),f.textAlign=g.get("textAlign"),this.width=f.measureText(this.text).width/e.scale,this.height=e.size*e.lineHeight,e.path)if(this.glyphs=[],this.glyphWidths=[],b=this.text,"word"===this.textAlongPath){d=this.text.split(" ");for(var k=0,l=d.length;l>k;k++)this.glyphs.push(d[k]),this.glyphWidths.push(f.measureText(d[k]).width),a.xt(d[k+1])&&(this.glyphs.push(" "),this.glyphWidths.push(f.measureText(" ").width))}else if(c=f.measureText(b).width,this.fixedWidth)for(var k=0,l=b.length;l>k;k++)this.glyphs.push(b[k]),this.glyphWidths.push(c/l);else for(var k=1,l=b.length;l>=k;k++)this.glyphs.push(b[k-1]),d=b.substr(0,k-1)+b.substr(k),this.glyphWidths.push(c-f.measureText(d).width);return f.font=h,f.textBaseline=i,f.textAlign=j,this},a}(scrawl);