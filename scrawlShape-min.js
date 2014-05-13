/*! scrawl 2014-05-13 */
"use strict";var scrawl=function(a){return a.newShape=function(b){return new a.Shape(b)},a.Shape=function(b){return b=a.isa(b,"obj")?b:{},a.Sprite.call(this,b),a.Position.prototype.set.call(this,b),this.isLine=a.isa(b.isLine,"bool")?b.isLine:!0,this.dataSet=a.xt(this.data)?this.buildDataSet(this.data):"",this.registerInLibrary(),a.pushUnique(a.group[this.group].sprites,this.name),this},a.Shape.prototype=Object.create(a.Sprite.prototype),a.Shape.prototype.type="Shape",a.Shape.prototype.classname="spritenames",a.d.Shape={dataSet:!1,isLine:!0,method:"draw"},a.mergeInto(a.d.Shape,a.d.Sprite),a.Shape.prototype.set=function(b){return a.Sprite.prototype.set.call(this,b),b=a.isa(b,"obj")?b:{},a.xt(b.data)&&(this.dataSet=this.buildDataSet(this.data),this.offset.flag=!1),this},a.Shape.prototype.getPivotOffsetVector=function(){return this.isLine?a.Sprite.prototype.getPivotOffsetVector.call(this):this.getCenteredPivotOffsetVector()},a.Shape.prototype.buildDataSet=function(b){for(var c,d,e=[],f=999999,g=999999,h=-999999,i=-999999,j=this.start.x,k=this.start.y,l=b.match(/([A-Za-z][0-9. ,\-]*)/g),m=function(a,b){f=f>a?a:f,g=g>b?b:g,h=a>h?a:h,i=b>i?b:i},n=0,o=l.length;o>n;n++){if(c=l[n][0],d=l[n].match(/(-?[0-9.]+\b)/g)){for(var p=0,q=d.length;q>p;p++)d[p]=parseFloat(d[p]);switch(c){case"H":for(var p=0,q=d.length;q>p;p++)j=d[p],m(j,k);break;case"V":for(var p=0,q=d.length;q>p;p++)k=d[p],m(j,k);break;case"M":for(var p=0,q=d.length;q>p;p+=2)j=d[p],k=d[p+1],m(j,k);case"L":case"T":for(var p=0,q=d.length;q>p;p+=2)j=d[p],k=d[p+1],m(j,k);break;case"Q":case"S":for(var p=0,q=d.length;q>p;p+=4)j=d[p+2],k=d[p+3],m(j,k);break;case"C":for(var p=0,q=d.length;q>p;p+=6)j=d[p+4],k=d[p+5],m(j,k);break;case"h":for(var p=0,q=d.length;q>p;p++)j+=d[p],m(j,k);break;case"v":for(var p=0,q=d.length;q>p;p++)k+=d[p],m(j,k);break;case"m":case"l":case"t":for(var p=0,q=d.length;q>p;p+=2)j+=d[p],k+=d[p+1],m(j,k);break;case"q":case"s":for(var p=0,q=d.length;q>p;p+=4)j+=d[p+2],k+=d[p+3],m(j,k);break;case"c":for(var p=0,q=d.length;q>p;p+=6)j+=d[p+4],k+=d[p+5],m(j,k)}}e.push({c:c,p:d})}for(var n=0,o=e.length;o>n;n++){if(a.contains(["M","L","C","Q","S","T"],e[n].c))for(var p=0,q=e[n].p.length;q>p;p+=2)e[n].p[p]-=f,e[n].p[p+1]-=g;if("H"===e[n].c)for(var p=0,q=e[n].p.length;q>p;p++)e[n].p[p]-=f;if("V"===e[n].c)for(var p=0,q=e[n].p.length;q>p;p++)e[n].p[p]-=g}return this.width=h-f,this.height=i-g,e},a.Shape.prototype.doOutline=function(b,c){return a.cell[c].setEngine(this),!this.dataSet&&this.data&&this.buildDataSet(this.data),this.completeOutline(b)},a.Shape.prototype.completeOutline=function(b){if(this.dataSet){var c,d,e,f=this.prepareStamp(),g=0,h=0,i=0,j=0;this.rotateCell(b),b.translate(f.x,f.y),b.beginPath(),a.contains(["M"],this.dataSet[0].c)||b.moveTo(g,h);for(var k=0,l=this.dataSet.length;l>k;k++)switch(c=this.dataSet[k],c.c){case"M":g=c.p[0],h=c.p[1],i=g,j=h,b.moveTo(g*this.scale,h*this.scale);for(var m=2,n=c.p.length;n>m;m+=2)g=c.p[m],h=c.p[m+1],i=g,j=h,b.lineTo(g*this.scale,h*this.scale);break;case"m":g+=c.p[0],h+=c.p[1],i=g,j=h,b.moveTo(g*this.scale,h*this.scale);for(var m=2,n=c.p.length;n>m;m+=2)g+=c.p[m],h+=c.p[m+1],i=g,j=h,b.lineTo(g*this.scale,h*this.scale);break;case"Z":case"z":b.closePath();break;case"L":for(var m=0,n=c.p.length;n>m;m+=2)g=c.p[m],h=c.p[m+1],i=g,j=h,b.lineTo(g*this.scale,h*this.scale);break;case"l":for(var m=0,n=c.p.length;n>m;m+=2)g+=c.p[m],h+=c.p[m+1],i=g,j=h,b.lineTo(g*this.scale,h*this.scale);break;case"H":for(var m=0,n=c.p.length;n>m;m++)g=c.p[m],i=g,b.lineTo(g*this.scale,h*this.scale);break;case"h":for(var m=0,n=c.p.length;n>m;m++)g+=c.p[m],i=g,b.lineTo(g*this.scale,h*this.scale);break;case"V":for(var m=0,n=c.p.length;n>m;m++)h=c.p[m],j=h,b.lineTo(g*this.scale,h*this.scale);break;case"v":for(var m=0,n=c.p.length;n>m;m++)h+=c.p[m],j=h,b.lineTo(g*this.scale,h*this.scale);break;case"C":for(var m=0,n=c.p.length;n>m;m+=6)b.bezierCurveTo(c.p[m]*this.scale,c.p[m+1]*this.scale,c.p[m+2]*this.scale,c.p[m+3]*this.scale,c.p[m+4]*this.scale,c.p[m+5]*this.scale),i=c.p[m+2],j=c.p[m+3],g=c.p[m+4],h=c.p[m+5];break;case"c":for(var m=0,n=c.p.length;n>m;m+=6)b.bezierCurveTo((g+c.p[m])*this.scale,(h+c.p[m+1])*this.scale,(g+c.p[m+2])*this.scale,(h+c.p[m+3])*this.scale,(g+c.p[m+4])*this.scale,(h+c.p[m+5])*this.scale),i=g+c.p[m+2],j=h+c.p[m+3],g+=c.p[m+4],h+=c.p[m+5];break;case"S":for(var m=0,n=c.p.length;n>m;m+=4)k>0&&a.contains(["C","c","S","s"],this.dataSet[k-1].c)?(d=g+(g-i),e=h+(h-j)):(d=g,e=h),b.bezierCurveTo(d*this.scale,e*this.scale,c.p[m]*this.scale,c.p[m+1]*this.scale,c.p[m+2]*this.scale,c.p[m+3]*this.scale),i=c.p[m],j=c.p[m+1],g=c.p[m+2],h=c.p[m+3];break;case"s":for(var m=0,n=c.p.length;n>m;m+=4)k>0&&a.contains(["C","c","S","s"],this.dataSet[k-1].c)?(d=g+(g-i),e=h+(h-j)):(d=g,e=h),b.bezierCurveTo(d*this.scale,e*this.scale,(g+c.p[m])*this.scale,(h+c.p[m+1])*this.scale,(g+c.p[m+2])*this.scale,(h+c.p[m+3])*this.scale),i=g+c.p[m],j=h+c.p[m+1],g+=c.p[m+2],h+=c.p[m+3];break;case"Q":for(var m=0,n=c.p.length;n>m;m+=4)b.quadraticCurveTo(c.p[m]*this.scale,c.p[m+1]*this.scale,c.p[m+2]*this.scale,c.p[m+3]*this.scale),i=c.p[m],j=c.p[m+1],g=c.p[m+2],h=c.p[m+3];break;case"q":for(var m=0,n=c.p.length;n>m;m+=4)b.quadraticCurveTo((g+c.p[m])*this.scale,(h+c.p[m+1])*this.scale,(g+c.p[m+2])*this.scale,(h+c.p[m+3])*this.scale),i=g+c.p[m],j=h+c.p[m+1],g+=c.p[m+2],h+=c.p[m+3];break;case"T":for(var m=0,n=c.p.length;n>m;m+=2)k>0&&a.contains(["Q","q","T","t"],this.dataSet[k-1].c)?(d=g+(g-i),e=h+(h-j)):(d=g,e=h),b.quadraticCurveTo(d*this.scale,e*this.scale,c.p[m]*this.scale,c.p[m+1]*this.scale),i=d,j=e,g=c.p[m],h=c.p[m+1];break;case"t":for(var m=0,n=c.p.length;n>m;m+=2)k>0&&a.contains(["Q","q","T","t"],this.dataSet[k-1].c)?(d=g+(g-i),e=h+(h-j)):(d=g,e=h),b.quadraticCurveTo(d*this.scale,e*this.scale,(g+c.p[m])*this.scale,(h+c.p[m+1])*this.scale),i=d,j=e,g+=c.p[m],h+=c.p[m+1]}}return this},a.Shape.prototype.clip=function(a){return a.save(),this.doOutline(a),a.clip(),this},a.Shape.prototype.clear=function(b,c){var d=a.cell[c];return this.clip(b,c),b.clearRect(0,0,d.get("actualWidth"),d.get(".actualHeight")),b.restore(),this},a.Shape.prototype.clearWithBackground=function(b,c){var d=a.cell[c];return this.clip(b,c),b.fillStyle=d.backgroundColor,b.fillRect(0,0,d.get("actualWidth"),d.get("actualHeight")),b.fillStyle=a.ctx[c].get("fillStyle"),b.restore(),this},a.Shape.prototype.draw=function(a,b){return this.doOutline(a,b),a.stroke(),this},a.Shape.prototype.fill=function(b,c){return this.doOutline(b,c),b.fill(a.ctx[this.context].get("winding")),this},a.Shape.prototype.drawFill=function(b,c){return this.doOutline(b,c),b.stroke(),this.clearShadow(b,c),b.fill(a.ctx[this.context].get("winding")),this},a.Shape.prototype.fillDraw=function(b,c){return this.doOutline(b,c),b.fill(a.ctx[this.context].get("winding")),this.clearShadow(b,c),b.stroke(),this},a.Shape.prototype.sinkInto=function(b,c){return this.doOutline(b,c),b.fill(a.ctx[this.context].get("winding")),b.stroke(),this},a.Shape.prototype.floatOver=function(b,c){return this.doOutline(b,c),b.stroke(),b.fill(a.ctx[this.context].get("winding")),this},a.Shape.prototype.checkHit=function(b){b=a.isa(b,"obj")?b:{};var c=a.cvx,d=a.xt(b.tests)?[].concat(b.tests):[b.x||!1,b.y||!1],e=!1,f=a.ctx[this.context].winding;c.mozFillRule=f,c.msFillRule=f,this.completeOutline(c);for(var g=0,h=d.length;h>g&&!(e=c.isPointInPath(d[g],d[g+1]));g+=2);return e?{x:d[g],y:d[g+1]}:!1},a.Shape.prototype.buildCollisionVectors=function(b){if(this.isLine)a.Sprite.prototype.buildCollisionVectors.call(this,b);else{for(var c=a.xt(b)?this.parseCollisionPoints(b):this.collisionPoints,d=this.getOffsetStartVector().reverse(),e=this.width/2,f=this.height/2,g=[],h=0,i=c.length;i>h;h++)if(a.isa(c[h],"str"))switch(c[h]){case"start":g.push(0),g.push(0);break;case"N":g.push(-d.x),g.push(-f-d.y);break;case"NE":g.push(e-d.x),g.push(-f-d.y);break;case"E":g.push(e-d.x),g.push(-d.y);break;case"SE":g.push(e-d.x),g.push(f-d.y);break;case"S":g.push(-d.x),g.push(f-d.y);break;case"SW":g.push(-e-d.x),g.push(f-d.y);break;case"W":g.push(-e-d.x),g.push(-d.y);break;case"NW":g.push(-e-d.x),g.push(-f-d.y);break;case"center":g.push(-d.x),g.push(-d.y)}else a.isa(c[h],"vector")&&(g.push(c[h].x),g.push(c[h].y));this.collisionVectors=g}return this},a}(scrawl);