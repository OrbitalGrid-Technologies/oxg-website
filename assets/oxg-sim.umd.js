(function($t,Ft){typeof exports=="object"&&typeof module<"u"?Ft(exports):typeof define=="function"&&define.amd?define(["exports"],Ft):($t=typeof globalThis<"u"?globalThis:$t||self,Ft($t.OXGSim={}))})(this,function($t){"use strict";var Z_=Object.defineProperty;var K_=($t,Ft,rn)=>Ft in $t?Z_($t,Ft,{enumerable:!0,configurable:!0,writable:!0,value:rn}):$t[Ft]=rn;var j=($t,Ft,rn)=>K_($t,typeof Ft!="symbol"?Ft+"":Ft,rn);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ft="170",rn={ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ad=0,Yo=1,Rd=2,jo=1,Cd=2,wn=3,Gn=0,kt=1,vn=2,Wn=0,Li=1,Kr=2,Zo=3,Ko=4,Pd=5,di=100,Dd=101,Ld=102,Id=103,Ud=104,Nd=200,Od=201,Fd=202,kd=203,Jr=204,Qr=205,Bd=206,zd=207,Hd=208,Vd=209,Gd=210,Wd=211,Xd=212,$d=213,qd=214,ea=0,ta=1,na=2,Ii=3,ia=4,sa=5,ra=6,aa=7,Jo=0,Yd=1,jd=2,Xn=0,Zd=1,Kd=2,Jd=3,Qo=4,Qd=5,eu=6,tu=7,el=300,Ui=301,Ni=302,oa=303,la=304,Ws=306,Xs=1e3,$n=1001,ca=1002,an=1003,nu=1004,$s=1005,xn=1006,da=1007,ui=1008,An=1009,tl=1010,nl=1011,_s=1012,ua=1013,hi=1014,Rn=1015,vs=1016,ha=1017,fa=1018,Oi=1020,il=35902,sl=1021,rl=1022,on=1023,al=1024,ol=1025,Fi=1026,ki=1027,ll=1028,pa=1029,cl=1030,ma=1031,ga=1033,qs=33776,Ys=33777,js=33778,Zs=33779,_a=35840,va=35841,xa=35842,ya=35843,Sa=36196,ba=37492,Ma=37496,Ea=37808,Ta=37809,wa=37810,Aa=37811,Ra=37812,Ca=37813,Pa=37814,Da=37815,La=37816,Ia=37817,Ua=37818,Na=37819,Oa=37820,Fa=37821,Ks=36492,ka=36494,Ba=36495,dl=36283,za=36284,Ha=36285,Va=36286,iu=3200,su=3201,ru=0,au=1,qn="",Pt="srgb",Bi="srgb-linear",Js="linear",ot="srgb",zi=7680,ul=519,ou=512,lu=513,cu=514,hl=515,du=516,uu=517,hu=518,fu=519,Ga=35044,fl="300 es",Cn=2e3,Qs=2001;class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pl=1234567;const xs=Math.PI/180,ys=180/Math.PI;function Pn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function Wa(i,e){return(i%e+e)%e}function pu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function mu(i,e,t){return i!==e?(t-i)/(e-i):0}function Ss(i,e,t){return(1-t)*i+t*e}function gu(i,e,t,n){return Ss(i,e,1-Math.exp(-t*n))}function _u(i,e=1){return e-Math.abs(Wa(i,e*2)-e)}function vu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Su(i,e){return i+Math.random()*(e-i)}function bu(i){return i*(.5-Math.random())}function Mu(i){i!==void 0&&(pl=i);let e=pl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Eu(i){return i*xs}function Tu(i){return i*ys}function wu(i){return(i&i-1)===0&&i!==0}function Au(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ru(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cu(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),h=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*h,l*u,o*c);break;case"YZY":i.set(l*u,o*d,l*h,o*c);break;case"ZXZ":i.set(l*h,l*u,o*d,o*c);break;case"XZX":i.set(o*d,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*d,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ml={DEG2RAD:xs,RAD2DEG:ys,generateUUID:Pn,clamp:Et,euclideanModulo:Wa,mapLinear:pu,inverseLerp:mu,lerp:Ss,damp:gu,pingpong:_u,smoothstep:vu,smootherstep:xu,randInt:yu,randFloat:Su,randFloatSpread:bu,seededRandom:Mu,degToRad:Eu,radToDeg:Tu,isPowerOfTwo:wu,ceilPowerOfTwo:Au,floorPowerOfTwo:Ru,setQuaternionFromProperEuler:Cu,normalize:rt,denormalize:ln};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,s,r,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],p=n[5],_=n[8],g=s[0],m=s[3],f=s[6],M=s[1],b=s[4],x=s[7],L=s[2],w=s[5],R=s[8];return r[0]=a*g+o*M+l*L,r[3]=a*m+o*b+l*w,r[6]=a*f+o*x+l*R,r[1]=c*g+d*M+h*L,r[4]=c*m+d*b+h*w,r[7]=c*f+d*x+h*R,r[2]=u*g+p*M+_*L,r[5]=u*m+p*b+_*w,r[8]=u*f+p*x+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*r,p=c*r-a*l,_=t*h+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*c-d*n)*g,e[2]=(o*n-s*a)*g,e[3]=u*g,e[4]=(d*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new ze;function gl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pu(){const i=bs("canvas");return i.style.display="block",i}const _l={};function Ms(i){i in _l||(_l[i]=!0,console.warn(i))}function Du(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Lu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Iu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(i.r=Dn(i.r),i.g=Dn(i.g),i.b=Dn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?Js:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const vl=[.64,.33,.3,.6,.15,.06],xl=[.2126,.7152,.0722],yl=[.3127,.329],Sl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Bi]:{primaries:vl,whitePoint:yl,transfer:Js,toXYZ:Sl,fromXYZ:bl,luminanceCoefficients:xl,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:vl,whitePoint:yl,transfer:ot,toXYZ:Sl,fromXYZ:bl,luminanceCoefficients:xl,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}});let Vi;class Uu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=bs("canvas")),Vi.width=e.width,Vi.height=e.height;const n=Vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nu=0;class Ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($a(s[a].image)):r.push($a(s[a]))}else r=$a(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function $a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ou=0;class Lt extends fi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=$n,s=$n,r=xn,a=ui,o=on,l=An,c=Lt.DEFAULT_ANISOTROPY,d=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Pn(),this.name="",this.source=new Ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==el)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null,Lt.DEFAULT_MAPPING=el,Lt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(p+1)/2,L=(f+1)/2,w=(d+u)/4,R=(h+g)/4,P=(_+m)/4;return b>x&&b>L?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=R/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=P/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-g)/M,this.z=(u-d)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fu extends fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Lt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ml(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Fu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class El extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ku extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3];const u=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==u||c!==p||d!==_){let m=1-o;const f=l*u+c*p+d*_+h*g,M=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const L=Math.sqrt(b),w=Math.atan2(L,f*M);m=Math.sin(m*w)/L,o=Math.sin(o*w)/L}const x=o*M;if(l=l*m+u*x,c=c*m+p*x,d=d*m+_*x,h=h*m+g*x,m===1-o){const L=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=L,c*=L,d*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+d*h+l*p-c*u,e[t+1]=l*_+d*u+c*h-o*p,e[t+2]=c*_+d*p+o*u-l*h,e[t+3]=d*_-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),u=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*d*h+c*p*_,this._y=c*p*h-u*d*_,this._z=c*d*_+u*p*h,this._w=c*d*h-u*p*_;break;case"YXZ":this._x=u*d*h+c*p*_,this._y=c*p*h-u*d*_,this._z=c*d*_-u*p*h,this._w=c*d*h+u*p*_;break;case"ZXY":this._x=u*d*h-c*p*_,this._y=c*p*h+u*d*_,this._z=c*d*_+u*p*h,this._w=c*d*h-u*p*_;break;case"ZYX":this._x=u*d*h-c*p*_,this._y=c*p*h+u*d*_,this._z=c*d*_-u*p*h,this._w=c*d*h+u*p*_;break;case"YZX":this._x=u*d*h+c*p*_,this._y=c*p*h+u*d*_,this._z=c*d*_-u*p*h,this._w=c*d*h-u*p*_;break;case"XZY":this._x=u*d*h-c*p*_,this._y=c*p*h-u*d*_,this._z=c*d*_+u*p*h,this._w=c*d*h+u*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new C,Tl=new mi;class Yn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),tr.subVectors(this.max,Es),Gi.subVectors(e.a,Es),Wi.subVectors(e.b,Es),Xi.subVectors(e.c,Es),jn.subVectors(Wi,Gi),Zn.subVectors(Xi,Wi),gi.subVectors(Gi,Xi);let t=[0,-jn.z,jn.y,0,-Zn.z,Zn.y,0,-gi.z,gi.y,jn.z,0,-jn.x,Zn.z,0,-Zn.x,gi.z,0,-gi.x,-jn.y,jn.x,0,-Zn.y,Zn.x,0,-gi.y,gi.x,0];return!Ya(t,Gi,Wi,Xi,tr)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,Gi,Wi,Xi,tr))?!1:(nr.crossVectors(jn,Zn),t=[nr.x,nr.y,nr.z],Ya(t,Gi,Wi,Xi,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new C,new C,new C,new C,new C,new C,new C,new C],cn=new C,er=new Yn,Gi=new C,Wi=new C,Xi=new C,jn=new C,Zn=new C,gi=new C,Es=new C,tr=new C,nr=new C,_i=new C;function Ya(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){_i.fromArray(i,r);const o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),d=n.dot(_i);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Bu=new Yn,Ts=new C,ja=new C;class vi{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(ja)),this.expandByPoint(Ts.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new C,Za=new C,ir=new C,Kn=new C,Ka=new C,sr=new C,Ja=new C;class rr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Za.copy(e).add(t).multiplyScalar(.5),ir.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Za);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ir),o=Kn.dot(this.direction),l=-Kn.dot(ir),c=Kn.lengthSq(),d=Math.abs(1-a*a);let h,u,p,_;if(d>0)if(h=a*l-o,u=a*o-l,_=r*d,h>=0)if(u>=-_)if(u<=_){const g=1/d;h*=g,u*=g,p=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-_?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=_?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Za).addScaledVector(ir,u),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,s,r){Ka.subVectors(t,e),sr.subVectors(n,e),Ja.crossVectors(Ka,sr);let a=this.direction.dot(Ja),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const l=o*this.direction.dot(sr.crossVectors(Kn,sr));if(l<0)return null;const c=o*this.direction.dot(Ka.cross(Kn));if(c<0||l+c>a)return null;const d=-o*Kn.dot(Ja);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,s,r,a,o,l,c,d,h,u,p,_,g,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,h,u,p,_,g,m)}set(e,t,n,s,r,a,o,l,c,d,h,u,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),a=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,p=a*h,_=o*d,g=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,_=c*d,g=c*h;t[0]=u+g*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=p*o-_,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,_=c*d,g=c*h;t[0]=u-g*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*d,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,p=a*h,_=o*d,g=o*h;t[0]=l*d,t[4]=_*c-p,t[8]=u*c+g,t[1]=l*h,t[5]=g*c+u,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*d,t[4]=g-u*h,t[8]=_*h+p,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*h+_,t[10]=u-g*h}else if(e.order==="XZY"){const u=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+g,t[5]=a*d,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*d,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zu,e,Hu)}lookAt(e,t,n){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Jn.crossVectors(n,qt),Jn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Jn.crossVectors(n,qt)),Jn.normalize(),ar.crossVectors(qt,Jn),s[0]=Jn.x,s[4]=ar.x,s[8]=qt.x,s[1]=Jn.y,s[5]=ar.y,s[9]=qt.y,s[2]=Jn.z,s[6]=ar.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],M=n[3],b=n[7],x=n[11],L=n[15],w=s[0],R=s[4],P=s[8],E=s[12],y=s[1],A=s[5],k=s[9],O=s[13],G=s[2],$=s[6],z=s[10],te=s[14],W=s[3],ae=s[7],ce=s[11],Ee=s[15];return r[0]=a*w+o*y+l*G+c*W,r[4]=a*R+o*A+l*$+c*ae,r[8]=a*P+o*k+l*z+c*ce,r[12]=a*E+o*O+l*te+c*Ee,r[1]=d*w+h*y+u*G+p*W,r[5]=d*R+h*A+u*$+p*ae,r[9]=d*P+h*k+u*z+p*ce,r[13]=d*E+h*O+u*te+p*Ee,r[2]=_*w+g*y+m*G+f*W,r[6]=_*R+g*A+m*$+f*ae,r[10]=_*P+g*k+m*z+f*ce,r[14]=_*E+g*O+m*te+f*Ee,r[3]=M*w+b*y+x*G+L*W,r[7]=M*R+b*A+x*$+L*ae,r[11]=M*P+b*k+x*z+L*ce,r[15]=M*E+b*O+x*te+L*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*l*h-s*c*h-r*o*u+n*c*u+s*o*p-n*l*p)+g*(+t*l*p-t*c*u+r*a*u-s*a*p+s*c*d-r*l*d)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*d-n*c*d)+f*(-s*o*d-t*l*h+t*o*u+s*a*h-n*a*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],M=h*m*c-g*u*c+g*l*p-o*m*p-h*l*f+o*u*f,b=_*u*c-d*m*c-_*l*p+a*m*p+d*l*f-a*u*f,x=d*g*c-_*h*c+_*o*p-a*g*p-d*o*f+a*h*f,L=_*h*l-d*g*l-_*o*u+a*g*u+d*o*m-a*h*m,w=t*M+n*b+s*x+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=M*R,e[1]=(g*u*r-h*m*r-g*s*p+n*m*p+h*s*f-n*u*f)*R,e[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*f+n*l*f)*R,e[3]=(h*l*r-o*u*r-h*s*c+n*u*c+o*s*p-n*l*p)*R,e[4]=b*R,e[5]=(d*m*r-_*u*r+_*s*p-t*m*p-d*s*f+t*u*f)*R,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*f-t*l*f)*R,e[7]=(a*u*r-d*l*r+d*s*c-t*u*c-a*s*p+t*l*p)*R,e[8]=x*R,e[9]=(_*h*r-d*g*r-_*n*p+t*g*p+d*n*f-t*h*f)*R,e[10]=(a*g*r-_*o*r+_*n*c-t*g*c-a*n*f+t*o*f)*R,e[11]=(d*o*r-a*h*r-d*n*c+t*h*c+a*n*p-t*o*p)*R,e[12]=L*R,e[13]=(d*g*s-_*h*s+_*n*u-t*g*u-d*n*m+t*h*m)*R,e[14]=(_*o*s-a*g*s-_*n*l+t*g*l+a*n*m-t*o*m)*R,e[15]=(a*h*s-d*o*s+d*n*l-t*h*l-a*n*u+t*o*u)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,h=o+o,u=r*c,p=r*d,_=r*h,g=a*d,m=a*h,f=o*h,M=l*c,b=l*d,x=l*h,L=n.x,w=n.y,R=n.z;return s[0]=(1-(g+f))*L,s[1]=(p+x)*L,s[2]=(_-b)*L,s[3]=0,s[4]=(p-x)*w,s[5]=(1-(u+f))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(_+b)*R,s[9]=(m-M)*R,s[10]=(1-(u+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const a=$i.set(s[4],s[5],s[6]).length(),o=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const c=1/r,d=1/a,h=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=d,dn.elements[5]*=d,dn.elements[6]*=d,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,t.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Cn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),u=(n+s)/(n-s);let p,_;if(o===Cn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Qs)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Cn){const l=this.elements,c=1/(t-e),d=1/(n-s),h=1/(a-r),u=(t+e)*c,p=(n+s)*d;let _,g;if(o===Cn)_=(a+r)*h,g=-2*h;else if(o===Qs)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new C,dn=new pt,zu=new C(0,0,0),Hu=new C(1,1,1),Jn=new C,ar=new C,qt=new C,wl=new pt,Al=new mi;class Un{constructor(e=0,t=0,n=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vu=0;const Cl=new C,qi=new mi,Nn=new pt,or=new C,ws=new C,Gu=new C,Wu=new mi,Pl=new C(1,0,0),Dl=new C(0,1,0),Ll=new C(0,0,1),Il={type:"added"},Xu={type:"removed"},Yi={type:"childadded",child:null},Qa={type:"childremoved",child:null};class It extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new C,t=new Un,n=new mi,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new ze}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Pl,e)}rotateY(e){return this.rotateOnAxis(Dl,e)}rotateZ(e){return this.rotateOnAxis(Ll,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pl,e)}translateY(e){return this.translateOnAxis(Dl,e)}translateZ(e){return this.translateOnAxis(Ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?or.copy(e):or.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ws,or,this.up):Nn.lookAt(or,ws,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Nn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Il),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xu),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Il),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Gu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Wu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}It.DEFAULT_UP=new C(0,1,0),It.DEFAULT_MATRIX_AUTO_UPDATE=!0,It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new C,On=new C,eo=new C,Fn=new C,ji=new C,Zi=new C,Ul=new C,to=new C,no=new C,io=new C,so=new ct,ro=new ct,ao=new ct;class Kt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),On.subVectors(n,t),eo.subVectors(e,t);const a=un.dot(un),o=un.dot(On),l=un.dot(eo),c=On.dot(On),d=On.dot(eo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,_=(a*d-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return so.setScalar(0),ro.setScalar(0),ao.setScalar(0),so.fromBufferAttribute(e,t),ro.fromBufferAttribute(e,n),ao.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(so,r.x),a.addScaledVector(ro,r.y),a.addScaledVector(ao,r.z),a}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),On.subVectors(e,t),un.cross(On).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),On.subVectors(this.a,this.b),un.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ji.subVectors(s,n),Zi.subVectors(r,n),to.subVectors(e,n);const l=ji.dot(to),c=Zi.dot(to);if(l<=0&&c<=0)return t.copy(n);no.subVectors(e,s);const d=ji.dot(no),h=Zi.dot(no);if(d>=0&&h<=d)return t.copy(s);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(ji,a);io.subVectors(e,r);const p=ji.dot(io),_=Zi.dot(io);if(_>=0&&p<=_)return t.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Zi,o);const m=d*_-p*h;if(m<=0&&h-d>=0&&p-_>=0)return Ul.subVectors(r,s),o=(h-d)/(h-d+(p-_)),t.copy(s).addScaledVector(Ul,o);const f=1/(m+g+u);return a=g*f,o=u*f,t.copy(n).addScaledVector(ji,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function oo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Wa(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=oo(a,r,e+1/3),this.g=oo(a,r,e),this.b=oo(a,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Nl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Je.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Et(Ut.r*255,0,255))*65536+Math.round(Et(Ut.g*255,0,255))*256+Math.round(Et(Ut.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,s=Ut.g,r=Ut.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Pt){Je.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,s=Ut.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(lr);const n=Ss(Qn.h,lr.h,t),s=Ss(Qn.s,lr.s,t),r=Ss(Qn.l,lr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Be;Be.NAMES=Nl;let $u=0;class xi extends fi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Pn(),this.name="",this.blending=Li,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class As extends xi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new C,cr=new Le;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ga,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}}class Ol extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fl extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qu=0;const Qt=new pt,lo=new It,Ki=new C,Yt=new Yn,Rs=new Yn,Mt=new C;class wt extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gl(e)?Fl:Ol)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Yt.min,Rs.min),Yt.expandByPoint(Mt),Mt.addVectors(Yt.max,Rs.max),Yt.expandByPoint(Mt)):(Yt.expandByPoint(Rs.min),Yt.expandByPoint(Rs.max))}Yt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Mt.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(e,c),Mt.add(Ki)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;const c=new C,d=new C,h=new C,u=new Le,p=new Le,_=new Le,g=new C,m=new C;function f(P,E,y){c.fromBufferAttribute(n,P),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,y),d.sub(c),h.sub(c),p.sub(u),_.sub(u);const A=1/(p.x*_.y-_.x*p.y);isFinite(A)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(A),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(A),o[P].add(g),o[E].add(g),o[y].add(g),l[P].add(m),l[E].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,E=M.length;P<E;++P){const y=M[P],A=y.start,k=y.count;for(let O=A,G=A+k;O<G;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new C,x=new C,L=new C,w=new C;function R(P){L.fromBufferAttribute(s,P),w.copy(L);const E=o[P];b.copy(E),b.sub(L.multiplyScalar(L.dot(E))).normalize(),x.crossVectors(w,E);const A=x.dot(l[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,A)}for(let P=0,E=M.length;P<E;++P){const y=M[P],A=y.start,k=y.count;for(let O=A,G=A+k;O<G;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,d=new C,h=new C;if(e)for(let u=0,p=e.count;u<p;u+=3){const _=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*d;for(let f=0;f<d;f++)u[_++]=c[p++]}return new Jt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kl=new pt,yi=new rr,dr=new vi,Bl=new C,ur=new C,hr=new C,fr=new C,co=new C,pr=new C,zl=new C,mr=new C;class Ht extends It{constructor(e=new wt,t=new As){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(co.fromBufferAttribute(h,e),a?pr.addScaledVector(co,d):pr.addScaledVector(co.sub(t),d))}t.add(pr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(dr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(dr,Bl)===null||yi.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(kl.copy(r).invert(),yi.copy(e.ray).applyMatrix4(kl),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const m=u[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,L=b;x<L;x+=3){const w=o.getX(x),R=o.getX(x+1),P=o.getX(x+2);s=gr(this,f,e,n,c,d,h,w,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const M=o.getX(m),b=o.getX(m+1),x=o.getX(m+2);s=gr(this,a,e,n,c,d,h,M,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const m=u[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,L=b;x<L;x+=3){const w=x,R=x+1,P=x+2;s=gr(this,f,e,n,c,d,h,w,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const M=m,b=m+1,x=m+2;s=gr(this,a,e,n,c,d,h,M,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Yu(i,e,t,n,s,r,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Gn,o),l===null)return null;mr.copy(o),mr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(mr);return c<t.near||c>t.far?null:{distance:c,point:mr.clone(),object:i}}function gr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ur),i.getVertexPosition(l,hr),i.getVertexPosition(c,fr);const d=Yu(i,e,t,n,ur,hr,fr,zl);if(d){const h=new C;Kt.getBarycoord(zl,ur,hr,fr,h),s&&(d.uv=Kt.getInterpolatedAttribute(s,o,l,c,h,new Le)),r&&(d.uv1=Kt.getInterpolatedAttribute(r,o,l,c,h,new Le)),a&&(d.normal=Kt.getInterpolatedAttribute(a,o,l,c,h,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};Kt.getNormal(ur,hr,fr,u.normal),d.face=u,d.barycoord=h}return d}class Cs extends wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(h,2));function _(g,m,f,M,b,x,L,w,R,P,E){const y=x/R,A=L/P,k=x/2,O=L/2,G=w/2,$=R+1,z=P+1;let te=0,W=0;const ae=new C;for(let ce=0;ce<z;ce++){const Ee=ce*A-O;for(let Fe=0;Fe<$;Fe++){const Ze=Fe*y-k;ae[g]=Ze*M,ae[m]=Ee*b,ae[f]=G,c.push(ae.x,ae.y,ae.z),ae[g]=0,ae[m]=0,ae[f]=w>0?1:-1,d.push(ae.x,ae.y,ae.z),h.push(Fe/R),h.push(1-ce/P),te+=1}}for(let ce=0;ce<P;ce++)for(let Ee=0;Ee<R;Ee++){const Fe=u+Ee+$*ce,Ze=u+Ee+$*(ce+1),F=u+(Ee+1)+$*(ce+1),Z=u+(Ee+1)+$*ce;l.push(Fe,Ze,Z),l.push(Ze,F,Z),W+=6}o.addGroup(p,W,E),p+=W,u+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=Ji(i[t]);for(const s in n)e[s]=n[s]}return e}function ju(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const uo={clone:Ji,merge:Bt};var Zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends xi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zu,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vl extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new C,Gl=new Le,Wl=new Le;class en extends Vl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,Gl,Wl),t.subVectors(Wl,Gl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,es=1;class Ju extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(Qi,es,e,t);s.layers=this.layers,this.add(s);const r=new en(Qi,es,e,t);r.layers=this.layers,this.add(r);const a=new en(Qi,es,e,t);a.layers=this.layers,this.add(a);const o=new en(Qi,es,e,t);o.layers=this.layers,this.add(o);const l=new en(Qi,es,e,t);l.layers=this.layers,this.add(l);const c=new en(Qi,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Xl extends Lt{constructor(e,t,n,s,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qu extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Cs(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Wn});r.uniforms.tEquirect.value=t;const a=new Ht(s,r),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=xn),new Ju(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const ho=new C,eh=new C,th=new ze;class ti{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ho.subVectors(n,t).cross(eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ho),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||th.getNormalMatrix(e),s=this.coplanarPoint(ho).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new vi,_r=new C;class $l{constructor(e=new ti,t=new ti,n=new ti,s=new ti,r=new ti,a=new ti){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],h=s[6],u=s[7],p=s[8],_=s[9],g=s[10],m=s[11],f=s[12],M=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,u-c,m-p,x-f).normalize(),n[1].setComponents(l+r,u+c,m+p,x+f).normalize(),n[2].setComponents(l+a,u+d,m+_,x+M).normalize(),n[3].setComponents(l-a,u-d,m-_,x-M).normalize(),n[4].setComponents(l-o,u-h,m-g,x-b).normalize(),t===Cn)n[5].setComponents(l+o,u+h,m+g,x+b).normalize();else if(t===Qs)n[5].setComponents(o,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(_r.x=s.normal.x>0?e.max.x:e.min.x,_r.y=s.normal.y>0?e.max.y:e.min.y,_r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ql(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function nh(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<h.length;p++){const _=h[u],g=h[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,h[u]=g)}h.length=u+1;for(let p=0,_=h.length;p<_;p++){const g=h[p];i.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class vr extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=e/o,u=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<d;f++){const M=f*u-a;for(let b=0;b<c;b++){const x=b*h-r;_.push(x,-M,0),g.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const b=M+c*f,x=M+c*(f+1),L=M+1+c*(f+1),w=M+1+c*f;p.push(b,x,w),p.push(x,L,w)}this.setIndex(p),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(g,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.widthSegments,e.heightSegments)}}var ih=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ch=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ah=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ph=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$h=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,af=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,of=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ff=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,If=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$f=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ge={alphahash_fragment:ih,alphahash_pars_fragment:sh,alphamap_fragment:rh,alphamap_pars_fragment:ah,alphatest_fragment:oh,alphatest_pars_fragment:lh,aomap_fragment:ch,aomap_pars_fragment:dh,batching_pars_vertex:uh,batching_vertex:hh,begin_vertex:fh,beginnormal_vertex:ph,bsdfs:mh,iridescence_fragment:gh,bumpmap_pars_fragment:_h,clipping_planes_fragment:vh,clipping_planes_pars_fragment:xh,clipping_planes_pars_vertex:yh,clipping_planes_vertex:Sh,color_fragment:bh,color_pars_fragment:Mh,color_pars_vertex:Eh,color_vertex:Th,common:wh,cube_uv_reflection_fragment:Ah,defaultnormal_vertex:Rh,displacementmap_pars_vertex:Ch,displacementmap_vertex:Ph,emissivemap_fragment:Dh,emissivemap_pars_fragment:Lh,colorspace_fragment:Ih,colorspace_pars_fragment:Uh,envmap_fragment:Nh,envmap_common_pars_fragment:Oh,envmap_pars_fragment:Fh,envmap_pars_vertex:kh,envmap_physical_pars_fragment:jh,envmap_vertex:Bh,fog_vertex:zh,fog_pars_vertex:Hh,fog_fragment:Vh,fog_pars_fragment:Gh,gradientmap_pars_fragment:Wh,lightmap_pars_fragment:Xh,lights_lambert_fragment:$h,lights_lambert_pars_fragment:qh,lights_pars_begin:Yh,lights_toon_fragment:Zh,lights_toon_pars_fragment:Kh,lights_phong_fragment:Jh,lights_phong_pars_fragment:Qh,lights_physical_fragment:ef,lights_physical_pars_fragment:tf,lights_fragment_begin:nf,lights_fragment_maps:sf,lights_fragment_end:rf,logdepthbuf_fragment:af,logdepthbuf_pars_fragment:of,logdepthbuf_pars_vertex:lf,logdepthbuf_vertex:cf,map_fragment:df,map_pars_fragment:uf,map_particle_fragment:hf,map_particle_pars_fragment:ff,metalnessmap_fragment:pf,metalnessmap_pars_fragment:mf,morphinstance_vertex:gf,morphcolor_vertex:_f,morphnormal_vertex:vf,morphtarget_pars_vertex:xf,morphtarget_vertex:yf,normal_fragment_begin:Sf,normal_fragment_maps:bf,normal_pars_fragment:Mf,normal_pars_vertex:Ef,normal_vertex:Tf,normalmap_pars_fragment:wf,clearcoat_normal_fragment_begin:Af,clearcoat_normal_fragment_maps:Rf,clearcoat_pars_fragment:Cf,iridescence_pars_fragment:Pf,opaque_fragment:Df,packing:Lf,premultiplied_alpha_fragment:If,project_vertex:Uf,dithering_fragment:Nf,dithering_pars_fragment:Of,roughnessmap_fragment:Ff,roughnessmap_pars_fragment:kf,shadowmap_pars_fragment:Bf,shadowmap_pars_vertex:zf,shadowmap_vertex:Hf,shadowmask_pars_fragment:Vf,skinbase_vertex:Gf,skinning_pars_vertex:Wf,skinning_vertex:Xf,skinnormal_vertex:$f,specularmap_fragment:qf,specularmap_pars_fragment:Yf,tonemapping_fragment:jf,tonemapping_pars_fragment:Zf,transmission_fragment:Kf,transmission_pars_fragment:Jf,uv_pars_fragment:Qf,uv_pars_vertex:ep,uv_vertex:tp,worldpos_vertex:np,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},re={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Vt={basic:{uniforms:Bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Bt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Bt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Bt([re.points,re.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Bt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Bt([re.common,re.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Bt([re.sprite,re.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Bt([re.common,re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Bt([re.lights,re.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Vt.physical={uniforms:Bt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const xr={r:0,b:0,g:0},bi=new Un,ip=new pt;function sp(i,e,t,n,s,r,a){const o=new Be(0);let l=r===!0?0:1,c,d,h=null,u=0,p=null;function _(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b)),b}function g(M){let b=!1;const x=_(M);x===null?f(o,l):x&&x.isColor&&(f(x,1),b=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,b){const x=_(b);x&&(x.isCubeTexture||x.mapping===Ws)?(d===void 0&&(d=new Ht(new Cs(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Ji(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),bi.copy(b.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ip.makeRotationFromEuler(bi)),d.material.toneMapped=Je.getTransfer(x.colorSpace)!==ot,(h!==x||u!==x.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,h=x,u=x.version,p=i.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ht(new vr(2,2),new hn({name:"BackgroundMaterial",uniforms:Ji(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,b){M.getRGB(xr,Hl(i)),n.buffers.color.setClear(xr.r,xr.g,xr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:g,addToRenderList:m}}function rp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(y,A,k,O,G){let $=!1;const z=h(O,k,A);r!==z&&(r=z,c(r.object)),$=p(y,O,k,G),$&&_(y,O,k,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,x(y,A,k,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function d(y){return i.deleteVertexArray(y)}function h(y,A,k){const O=k.wireframe===!0;let G=n[y.id];G===void 0&&(G={},n[y.id]=G);let $=G[A.id];$===void 0&&($={},G[A.id]=$);let z=$[O];return z===void 0&&(z=u(l()),$[O]=z),z}function u(y){const A=[],k=[],O=[];for(let G=0;G<t;G++)A[G]=0,k[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:k,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,A,k,O){const G=r.attributes,$=A.attributes;let z=0;const te=k.getAttributes();for(const W in te)if(te[W].location>=0){const ce=G[W];let Ee=$[W];if(Ee===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Ee=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Ee=y.instanceColor)),ce===void 0||ce.attribute!==Ee||Ee&&ce.data!==Ee.data)return!0;z++}return r.attributesNum!==z||r.index!==O}function _(y,A,k,O){const G={},$=A.attributes;let z=0;const te=k.getAttributes();for(const W in te)if(te[W].location>=0){let ce=$[W];ce===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor));const Ee={};Ee.attribute=ce,ce&&ce.data&&(Ee.data=ce.data),G[W]=Ee,z++}r.attributes=G,r.attributesNum=z,r.index=O}function g(){const y=r.newAttributes;for(let A=0,k=y.length;A<k;A++)y[A]=0}function m(y){f(y,0)}function f(y,A){const k=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;k[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),G[y]!==A&&(i.vertexAttribDivisor(y,A),G[y]=A)}function M(){const y=r.newAttributes,A=r.enabledAttributes;for(let k=0,O=A.length;k<O;k++)A[k]!==y[k]&&(i.disableVertexAttribArray(k),A[k]=0)}function b(y,A,k,O,G,$,z){z===!0?i.vertexAttribIPointer(y,A,k,G,$):i.vertexAttribPointer(y,A,k,O,G,$)}function x(y,A,k,O){g();const G=O.attributes,$=k.getAttributes(),z=A.defaultAttributeValues;for(const te in $){const W=$[te];if(W.location>=0){let ae=G[te];if(ae===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ae!==void 0){const ce=ae.normalized,Ee=ae.itemSize,Fe=e.get(ae);if(Fe===void 0)continue;const Ze=Fe.buffer,F=Fe.type,Z=Fe.bytesPerElement,Y=F===i.INT||F===i.UNSIGNED_INT||ae.gpuType===ua;if(ae.isInterleavedBufferAttribute){const Q=ae.data,oe=Q.stride,_e=ae.offset;if(Q.isInstancedInterleavedBuffer){for(let Re=0;Re<W.locationSize;Re++)f(W.location+Re,Q.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Re=0;Re<W.locationSize;Re++)m(W.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Re=0;Re<W.locationSize;Re++)b(W.location+Re,Ee/W.locationSize,F,ce,oe*Z,(_e+Ee/W.locationSize*Re)*Z,Y)}else{if(ae.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)f(W.location+Q,ae.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Q=0;Q<W.locationSize;Q++)m(W.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Q=0;Q<W.locationSize;Q++)b(W.location+Q,Ee/W.locationSize,F,ce,Ee*Z,Ee/W.locationSize*Q*Z,Y)}}else if(z!==void 0){const ce=z[te];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(W.location,ce);break;case 3:i.vertexAttrib3fv(W.location,ce);break;case 4:i.vertexAttrib4fv(W.location,ce);break;default:i.vertexAttrib1fv(W.location,ce)}}}}M()}function L(){P();for(const y in n){const A=n[y];for(const k in A){const O=A[k];for(const G in O)d(O[G].object),delete O[G];delete A[k]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const A=n[y.id];for(const k in A){const O=A[k];for(const G in O)d(O[G].object),delete O[G];delete A[k]}delete n[y.id]}function R(y){for(const A in n){const k=n[A];if(k[y.id]===void 0)continue;const O=k[y.id];for(const G in O)d(O[G].object),delete O[G];delete k[y.id]}}function P(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function ap(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=d[_];t.update(p,n,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],d[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let _=0;for(let g=0;g<h;g++)_+=d[g]*u[g];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function op(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==on&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==An&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Rn&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:L,maxSamples:w}}function lp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ti,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||s;return s=u,n=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?d(null):c();else{const M=r?0:n,b=M*4;let x=f.clippingState||null;l.value=x,x=d(_,u,b,p);for(let L=0;L!==b;++L)x[L]=t[L];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,x=p;b!==g;++b,x+=4)a.copy(h[b]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function cp(i){let e=new WeakMap;function t(a,o){return o===oa?a.mapping=Ui:o===la&&(a.mapping=Ni),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===oa||o===la)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qu(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class dp extends Vl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ts=4,Yl=[.125,.215,.35,.446,.526,.582],Mi=20,fo=new dp,jl=new Be;let po=null,mo=0,go=0,_o=!1;const Ei=(1+Math.sqrt(5))/2,ns=1/Ei,Zl=[new C(-Ei,ns,0),new C(Ei,ns,0),new C(-ns,0,Ei),new C(ns,0,Ei),new C(0,Ei,-ns),new C(0,Ei,ns),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(po,mo,go),this._renderer.xr.enabled=_o,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:vs,format:on,colorSpace:Bi,depthBuffer:!1},s=Jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=up(r)),this._blurMaterial=hp(r,e,t)}return s}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,fo)}_sceneToCubeUV(e,t,n,s){const o=new en(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(jl),d.toneMapping=Xn,d.autoClear=!1;const p=new As({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),_=new Ht(new Cs,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(jl),g=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const b=this._cubeSize;yr(s,M*b,f>2?b:0,b,b),d.setRenderTarget(s),g&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ui||e.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;yr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zl[(s-r-1)%Zl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Ht(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),g=r/_,m=isFinite(r)?1+Math.floor(d*g):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const f=[];let M=0;for(let R=0;R<Mi;++R){const P=R/g,E=Math.exp(-P*P/2);f.push(E),R===0?M+=E:R<m&&(M+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=_,u.mipInt.value=b-n;const x=this._sizeLods[s],L=3*x*(s>b-ts?s-b+ts:0),w=4*(this._cubeSize-x);yr(t,L,w,3*x,2*x),l.setRenderTarget(t),l.render(h,fo)}}function up(i){const e=[],t=[],n=[];let s=i;const r=i-ts+1+Yl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ts?l=Yl[a-i+ts-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,g=3,m=2,f=1,M=new Float32Array(g*_*p),b=new Float32Array(m*_*p),x=new Float32Array(f*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,P=w>2?0:-1,E=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];M.set(E,g*_*w),b.set(u,m*_*w);const y=[w,w,w,w,w,w];x.set(y,f*_*w)}const L=new wt;L.setAttribute("position",new Jt(M,g)),L.setAttribute("uv",new Jt(b,m)),L.setAttribute("faceIndex",new Jt(x,f)),e.push(L),s>ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jl(i,e,t){const n=new pi(i,e,t);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function hp(i,e,t){const n=new Float32Array(Mi),s=new C(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ql(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ec(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===oa||l===la,d=l===Ui||l===Ni;if(c||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Kl(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&s(p)?(t===null&&(t=new Kl(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function pp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mp(i,e,t,n){const s={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);for(const _ in u.morphAttributes){const g=u.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const _ in u)e.update(u[_],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(h){const u=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const M=p.array;g=p.version;for(let b=0,x=M.length;b<x;b+=3){const L=M[b+0],w=M[b+1],R=M[b+2];u.push(L,w,w,R,R,L)}}else if(_!==void 0){const M=_.array;g=_.version;for(let b=0,x=M.length/3-1;b<x;b+=3){const L=b+0,w=b+1,R=b+2;u.push(L,w,w,R,R,L)}}else return;const m=new(gl(u)?Fl:Ol)(u,1);m.version=g;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function d(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function gp(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*a),t.update(p,n,1)}function c(u,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,u*a,_),t.update(p,n,_))}function d(u,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function h(u,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,g,0,_);let f=0;for(let M=0;M<_;M++)f+=p[M]*g[M];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function _p(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vp(i,e,t){const n=new WeakMap,s=new ct;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let x=o.attributes.position.count*b,L=1;x>e.maxTextureSize&&(L=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*L*4*h),R=new El(w,x,L,h);R.type=Rn,R.needsUpdate=!0;const P=b*4;for(let y=0;y<h;y++){const A=m[y],k=f[y],O=M[y],G=x*L*4*y;for(let $=0;$<A.count;$++){const z=$*P;p===!0&&(s.fromBufferAttribute(A,$),w[G+z+0]=s.x,w[G+z+1]=s.y,w[G+z+2]=s.z,w[G+z+3]=0),_===!0&&(s.fromBufferAttribute(k,$),w[G+z+4]=s.x,w[G+z+5]=s.y,w[G+z+6]=s.z,w[G+z+7]=0),g===!0&&(s.fromBufferAttribute(O,$),w[G+z+8]=s.x,w[G+z+9]=s.y,w[G+z+10]=s.z,w[G+z+11]=O.itemSize===4?s.w:1)}}u={count:h,texture:R,size:new Le(x,L)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function xp(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class tc extends Lt{constructor(e,t,n,s,r,a,o,l,c,d=Fi){if(d!==Fi&&d!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Fi&&(n=hi),n===void 0&&d===ki&&(n=Oi),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nc=new Lt,ic=new tc(1,1),sc=new El,rc=new ku,ac=new Xl,oc=[],lc=[],cc=new Float32Array(16),dc=new Float32Array(9),uc=new Float32Array(4);function is(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=oc[s];if(r===void 0&&(r=new Float32Array(s),oc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sr(i,e){let t=lc[e];t===void 0&&(t=new Int32Array(e),lc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,n))return;uc.set(n),i.uniformMatrix2fv(this.addr,!1,uc),St(t,n)}}function Tp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,n))return;dc.set(n),i.uniformMatrix3fv(this.addr,!1,dc),St(t,n)}}function wp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,n))return;cc.set(n),i.uniformMatrix4fv(this.addr,!1,cc),St(t,n)}}function Ap(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function Dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Np(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ic.compareFunction=hl,r=ic):r=nc,t.setTexture2D(e||r,s)}function Op(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rc,s)}function Fp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ac,s)}function kp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sc,s)}function Bp(i){switch(i){case 5126:return yp;case 35664:return Sp;case 35665:return bp;case 35666:return Mp;case 35674:return Ep;case 35675:return Tp;case 35676:return wp;case 5124:case 35670:return Ap;case 35667:case 35671:return Rp;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Dp;case 36294:return Lp;case 36295:return Ip;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return kp}}function zp(i,e){i.uniform1fv(this.addr,e)}function Hp(i,e){const t=is(e,this.size,2);i.uniform2fv(this.addr,t)}function Vp(i,e){const t=is(e,this.size,3);i.uniform3fv(this.addr,t)}function Gp(i,e){const t=is(e,this.size,4);i.uniform4fv(this.addr,t)}function Wp(i,e){const t=is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xp(i,e){const t=is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $p(i,e){const t=is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qp(i,e){i.uniform1iv(this.addr,e)}function Yp(i,e){i.uniform2iv(this.addr,e)}function jp(i,e){i.uniform3iv(this.addr,e)}function Zp(i,e){i.uniform4iv(this.addr,e)}function Kp(i,e){i.uniform1uiv(this.addr,e)}function Jp(i,e){i.uniform2uiv(this.addr,e)}function Qp(i,e){i.uniform3uiv(this.addr,e)}function em(i,e){i.uniform4uiv(this.addr,e)}function tm(i,e,t){const n=this.cache,s=e.length,r=Sr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||nc,r[a])}function nm(i,e,t){const n=this.cache,s=e.length,r=Sr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||rc,r[a])}function im(i,e,t){const n=this.cache,s=e.length,r=Sr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ac,r[a])}function sm(i,e,t){const n=this.cache,s=e.length,r=Sr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||sc,r[a])}function rm(i){switch(i){case 5126:return zp;case 35664:return Hp;case 35665:return Vp;case 35666:return Gp;case 35674:return Wp;case 35675:return Xp;case 35676:return $p;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return jp;case 35669:case 35673:return Zp;case 5125:return Kp;case 36294:return Jp;case 36295:return Qp;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return sm}}class am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bp(t.type)}}class om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rm(t.type)}}class lm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function hc(i,e){i.seq.push(e),i.map[e.id]=e}function cm(i,e,t){const n=i.name,s=n.length;for(xo.lastIndex=0;;){const r=xo.exec(n),a=xo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hc(t,c===void 0?new am(o,i,e):new om(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new lm(o),hc(t,h)),t=h}}}class br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);cm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function fc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const dm=37297;let um=0;function hm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const pc=new ze;function fm(i){Je._getMatrix(pc,Je.workingColorSpace,i);const e=`mat3( ${pc.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Js:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hm(i.getShaderSource(e),a)}else return s}function pm(i,e){const t=fm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mm(i,e){let t;switch(e){case Zd:t="Linear";break;case Kd:t="Reinhard";break;case Jd:t="Cineon";break;case Qo:t="ACESFilmic";break;case eu:t="AgX";break;case tu:t="Neutral";break;case Qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Mr=new C;function gm(){Je.getLuminanceCoefficients(Mr);const i=Mr.x.toFixed(4),e=Mr.y.toFixed(4),t=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function vm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ps(i){return i!==""}function gc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _c(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(i){return i.replace(ym,bm)}const Sm=new Map;function bm(i,e){let t=Ge[e];if(t===void 0){const n=Sm.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yo(t)}const Mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(i){return i.replace(Mm,Em)}function Em(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function wm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case Ni:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Am(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function Rm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jo:e="ENVMAP_BLENDING_MULTIPLY";break;case Yd:e="ENVMAP_BLENDING_MIX";break;case jd:e="ENVMAP_BLENDING_ADD";break}return e}function Cm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Tm(t),c=wm(t),d=Am(t),h=Rm(t),u=Cm(t),p=_m(t),_=vm(r),g=s.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ps).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ps).join(`
`),f.length>0&&(f+=`
`)):(m=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),f=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Xn?mm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,pm("linearToOutputTexel",t.outputColorSpace),gm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),a=yo(a),a=gc(a,t),a=_c(a,t),o=yo(o),o=gc(o,t),o=_c(o,t),a=vc(a),o=vc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=M+m+a,x=M+f+o,L=fc(s,s.VERTEX_SHADER,b),w=fc(s,s.FRAGMENT_SHADER,x);s.attachShader(g,L),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(A){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(g).trim(),O=s.getShaderInfoLog(L).trim(),G=s.getShaderInfoLog(w).trim();let $=!0,z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,L,w);else{const te=mc(s,L,"vertex"),W=mc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+te+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||G==="")&&(z=!1);z&&(A.diagnostics={runnable:$,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:f}})}s.deleteShader(L),s.deleteShader(w),P=new br(s,g),E=xm(s,g)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,dm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=um++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=w,this}let Dm=0;class Lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Im(e),t.set(e,n)),n}}class Im{constructor(e){this.id=Dm++,this.code=e,this.usedTimes=0}}function Um(i,e,t,n,s,r,a){const o=new Rl,l=new Lm,c=new Set,d=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,A,k,O){const G=k.fog,$=O.geometry,z=E.isMeshStandardMaterial?k.environment:null,te=(E.isMeshStandardMaterial?t:e).get(E.envMap||z),W=te&&te.mapping===Ws?te.image.height:null,ae=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ce=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ee=ce!==void 0?ce.length:0;let Fe=0;$.morphAttributes.position!==void 0&&(Fe=1),$.morphAttributes.normal!==void 0&&(Fe=2),$.morphAttributes.color!==void 0&&(Fe=3);let Ze,F,Z,Y;if(ae){const at=Vt[ae];Ze=at.vertexShader,F=at.fragmentShader}else Ze=E.vertexShader,F=E.fragmentShader,l.update(E),Z=l.getVertexShaderID(E),Y=l.getFragmentShaderID(E);const Q=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),_e=O.isInstancedMesh===!0,Re=O.isBatchedMesh===!0,qe=!!E.map,je=!!E.matcap,mt=!!te,N=!!E.aoMap,Wt=!!E.lightMap,me=!!E.bumpMap,De=!!E.normalMap,ge=!!E.displacementMap,$e=!!E.emissiveMap,be=!!E.metalnessMap,T=!!E.roughnessMap,v=E.anisotropy>0,B=E.clearcoat>0,K=E.dispersion>0,ee=E.iridescence>0,q=E.sheen>0,Ce=E.transmission>0,de=v&&!!E.anisotropyMap,ve=B&&!!E.clearcoatMap,et=B&&!!E.clearcoatNormalMap,ie=B&&!!E.clearcoatRoughnessMap,xe=ee&&!!E.iridescenceMap,Ie=ee&&!!E.iridescenceThicknessMap,Ue=q&&!!E.sheenColorMap,ye=q&&!!E.sheenRoughnessMap,Ke=!!E.specularMap,We=!!E.specularColorMap,dt=!!E.specularIntensityMap,D=Ce&&!!E.transmissionMap,le=Ce&&!!E.thicknessMap,X=!!E.gradientMap,J=!!E.alphaMap,pe=E.alphaTest>0,he=!!E.alphaHash,He=!!E.extensions;let gt=Xn;E.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(gt=i.toneMapping);const Ot={shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:Ze,fragmentShader:F,defines:E.defines,customVertexShaderID:Z,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Re,batchingColor:Re&&O._colorsTexture!==null,instancing:_e,instancingColor:_e&&O.instanceColor!==null,instancingMorph:_e&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Bi,alphaToCoverage:!!E.alphaToCoverage,map:qe,matcap:je,envMap:mt,envMapMode:mt&&te.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:Wt,bumpMap:me,normalMap:De,displacementMap:u&&ge,emissiveMap:$e,normalMapObjectSpace:De&&E.normalMapType===au,normalMapTangentSpace:De&&E.normalMapType===ru,metalnessMap:be,roughnessMap:T,anisotropy:v,anisotropyMap:de,clearcoat:B,clearcoatMap:ve,clearcoatNormalMap:et,clearcoatRoughnessMap:ie,dispersion:K,iridescence:ee,iridescenceMap:xe,iridescenceThicknessMap:Ie,sheen:q,sheenColorMap:Ue,sheenRoughnessMap:ye,specularMap:Ke,specularColorMap:We,specularIntensityMap:dt,transmission:Ce,transmissionMap:D,thicknessMap:le,gradientMap:X,opaque:E.transparent===!1&&E.blending===Li&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:pe,alphaHash:he,combine:E.combine,mapUv:qe&&g(E.map.channel),aoMapUv:N&&g(E.aoMap.channel),lightMapUv:Wt&&g(E.lightMap.channel),bumpMapUv:me&&g(E.bumpMap.channel),normalMapUv:De&&g(E.normalMap.channel),displacementMapUv:ge&&g(E.displacementMap.channel),emissiveMapUv:$e&&g(E.emissiveMap.channel),metalnessMapUv:be&&g(E.metalnessMap.channel),roughnessMapUv:T&&g(E.roughnessMap.channel),anisotropyMapUv:de&&g(E.anisotropyMap.channel),clearcoatMapUv:ve&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(E.sheenRoughnessMap.channel),specularMapUv:Ke&&g(E.specularMap.channel),specularColorMapUv:We&&g(E.specularColorMap.channel),specularIntensityMapUv:dt&&g(E.specularIntensityMap.channel),transmissionMapUv:D&&g(E.transmissionMap.channel),thicknessMapUv:le&&g(E.thicknessMap.channel),alphaMapUv:J&&g(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(De||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(qe||J),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:oe,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:qe&&E.map.isVideoTexture===!0&&Je.getTransfer(E.map.colorSpace)===ot,decodeVideoTextureEmissive:$e&&E.emissiveMap.isVideoTexture===!0&&Je.getTransfer(E.emissiveMap.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===vn,flipSided:E.side===kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:He&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&E.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const A in E.defines)y.push(A),y.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(M(y,E),b(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function M(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function b(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const y=_[E.type];let A;if(y){const k=Vt[y];A=uo.clone(k.uniforms)}else A=E.uniforms;return A}function L(E,y){let A;for(let k=0,O=d.length;k<O;k++){const G=d[k];if(G.cacheKey===y){A=G,++A.usedTimes;break}}return A===void 0&&(A=new Pm(i,y,E,r),d.push(A)),A}function w(E){if(--E.usedTimes===0){const y=d.indexOf(E);d[y]=d[d.length-1],d.pop(),E.destroy()}}function R(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:L,releaseProgram:w,releaseShaderCache:R,programs:d,dispose:P}}function Nm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Om(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,u,p,_,g,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function o(h,u,p,_,g,m){const f=a(h,u,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,u,p,_,g,m){const f=a(h,u,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,u){t.length>1&&t.sort(h||Om),n.length>1&&n.sort(u||yc),s.length>1&&s.sort(u||yc)}function d(){for(let h=e,u=i.length;h<u;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function Fm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Sc,i.set(n,[a])):s>=r.length?(a=new Sc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function km(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Be};break;case"SpotLight":t={position:new C,direction:new C,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Bm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let zm=0;function Hm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vm(i){const e=new km,t=Bm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new pt,a=new pt;function o(c){let d=0,h=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,M=0,b=0,x=0,L=0,w=0,R=0;c.sort(Hm);for(let E=0,y=c.length;E<y;E++){const A=c[E],k=A.color,O=A.intensity,G=A.distance,$=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=k.r*O,h+=k.g*O,u+=k.b*O;else if(A.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(A.sh.coefficients[z],O);R++}else if(A.isDirectionalLight){const z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const te=A.shadow,W=t.get(A);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=A.shadow.matrix,M++}n.directional[p]=z,p++}else if(A.isSpotLight){const z=e.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(k).multiplyScalar(O),z.distance=G,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,n.spot[g]=z;const te=A.shadow;if(A.map&&(n.spotLightMap[L]=A.map,L++,te.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[g]=te.matrix,A.castShadow){const W=t.get(A);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=$,x++}g++}else if(A.isRectAreaLight){const z=e.get(A);z.color.copy(k).multiplyScalar(O),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=z,m++}else if(A.isPointLight){const z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){const te=A.shadow,W=t.get(A);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=A.shadow.matrix,b++}n.point[_]=z,_++}else if(A.isHemisphereLight){const z=e.get(A);z.skyColor.copy(A.color).multiplyScalar(O),z.groundColor.copy(A.groundColor).multiplyScalar(O),n.hemi[f]=z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==M||P.numPointShadows!==b||P.numSpotShadows!==x||P.numSpotMaps!==L||P.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+L-w,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,P.directionalLength=p,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=M,P.numPointShadows=b,P.numSpotShadows=x,P.numSpotMaps=L,P.numLightProbes=R,n.version=zm++)}function l(c,d){let h=0,u=0,p=0,_=0,g=0;const m=d.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const b=c[f];if(b.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function bc(i){const e=new Vm(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Gm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new bc(i),e.set(s,[o])):r>=a.length?(o=new bc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Wm extends xi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xm extends xi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ym(i,e,t){let n=new $l;const s=new Le,r=new Le,a=new ct,o=new Wm({depthPacking:su}),l=new Xm,c={},d=t.maxTextureSize,h={[Gn]:kt,[kt]:Gn,[vn]:vn},u=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:$m,fragmentShader:qm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new wt;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ht(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let f=this.type;this.render=function(w,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Wn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=f!==wn&&this.type===wn,G=f===wn&&this.type!==wn;for(let $=0,z=w.length;$<z;$++){const te=w[$],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ae=W.getFrameExtents();if(s.multiply(ae),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ae.x),s.x=r.x*ae.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ae.y),s.y=r.y*ae.y,W.mapSize.y=r.y)),W.map===null||O===!0||G===!0){const Ee=this.type!==wn?{minFilter:an,magFilter:an}:{};W.map!==null&&W.map.dispose(),W.map=new pi(s.x,s.y,Ee),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ce=W.getViewportCount();for(let Ee=0;Ee<ce;Ee++){const Fe=W.getViewport(Ee);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),k.viewport(a),W.updateMatrices(te,Ee),n=W.getFrustum(),x(R,P,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===wn&&M(W,P),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,A)};function M(w,R){const P=e.update(g);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pi(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,P,u,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,P,p,g,null)}function b(w,R,P,E){let y=null;const A=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)y=A;else if(y=P.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=y.uuid,O=R.uuid;let G=c[k];G===void 0&&(G={},c[k]=G);let $=G[O];$===void 0&&($=y.clone(),G[O]=$,R.addEventListener("dispose",L)),y=$}if(y.visible=R.visible,y.wireframe=R.wireframe,E===wn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=i.properties.get(y);k.light=P}return y}function x(w,R,P,E,y){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===wn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const O=e.update(w),G=w.material;if(Array.isArray(G)){const $=O.groups;for(let z=0,te=$.length;z<te;z++){const W=$[z],ae=G[W.materialIndex];if(ae&&ae.visible){const ce=b(w,ae,E,y);w.onBeforeShadow(i,w,R,P,O,ce,W),i.renderBufferDirect(P,null,O,ce,w,W),w.onAfterShadow(i,w,R,P,O,ce,W)}}}else if(G.visible){const $=b(w,G,E,y);w.onBeforeShadow(i,w,R,P,O,$,null),i.renderBufferDirect(P,null,O,$,w,null),w.onAfterShadow(i,w,R,P,O,$,null)}}const k=w.children;for(let O=0,G=k.length;O<G;O++)x(k[O],R,P,E,y)}function L(w){w.target.removeEventListener("dispose",L);for(const P in c){const E=c[P],y=w.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const jm={[ea]:ta,[na]:ra,[ia]:aa,[Ii]:sa,[ta]:ea,[ra]:na,[aa]:ia,[sa]:Ii};function Zm(i,e){function t(){let D=!1;const le=new ct;let X=null;const J=new ct(0,0,0,0);return{setMask:function(pe){X!==pe&&!D&&(i.colorMask(pe,pe,pe,pe),X=pe)},setLocked:function(pe){D=pe},setClear:function(pe,he,He,gt,Ot){Ot===!0&&(pe*=gt,he*=gt,He*=gt),le.set(pe,he,He,gt),J.equals(le)===!1&&(i.clearColor(pe,he,He,gt),J.copy(le))},reset:function(){D=!1,X=null,J.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,X=null,J=null,pe=null;return{setReversed:function(he){if(le!==he){const He=e.get("EXT_clip_control");le?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const gt=pe;pe=null,this.setClear(gt)}le=he},getReversed:function(){return le},setTest:function(he){he?Q(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(he){X!==he&&!D&&(i.depthMask(he),X=he)},setFunc:function(he){if(le&&(he=jm[he]),J!==he){switch(he){case ea:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case Ii:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=he}},setLocked:function(he){D=he},setClear:function(he){pe!==he&&(le&&(he=1-he),i.clearDepth(he),pe=he)},reset:function(){D=!1,X=null,J=null,pe=null,le=!1}}}function s(){let D=!1,le=null,X=null,J=null,pe=null,he=null,He=null,gt=null,Ot=null;return{setTest:function(at){D||(at?Q(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(at){le!==at&&!D&&(i.stencilMask(at),le=at)},setFunc:function(at,gn,Hn){(X!==at||J!==gn||pe!==Hn)&&(i.stencilFunc(at,gn,Hn),X=at,J=gn,pe=Hn)},setOp:function(at,gn,Hn){(he!==at||He!==gn||gt!==Hn)&&(i.stencilOp(at,gn,Hn),he=at,He=gn,gt=Hn)},setLocked:function(at){D=at},setClear:function(at){Ot!==at&&(i.clearStencil(at),Ot=at)},reset:function(){D=!1,le=null,X=null,J=null,pe=null,he=null,He=null,gt=null,Ot=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],_=null,g=!1,m=null,f=null,M=null,b=null,x=null,L=null,w=null,R=new Be(0,0,0),P=0,E=!1,y=null,A=null,k=null,O=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,te=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=te>=2);let ae=null,ce={};const Ee=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Ze=new ct().fromArray(Ee),F=new ct().fromArray(Fe);function Z(D,le,X,J){const pe=new Uint8Array(4),he=i.createTexture();i.bindTexture(D,he),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<X;He++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(le+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return he}const Y={};Y[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ii),me(!1),De(Yo),Q(i.CULL_FACE),N(Wn);function Q(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function oe(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function _e(D,le){return h[D]!==le?(i.bindFramebuffer(D,le),h[D]=le,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Re(D,le){let X=p,J=!1;if(D){X=u.get(le),X===void 0&&(X=[],u.set(le,X));const pe=D.textures;if(X.length!==pe.length||X[0]!==i.COLOR_ATTACHMENT0){for(let he=0,He=pe.length;he<He;he++)X[he]=i.COLOR_ATTACHMENT0+he;X.length=pe.length,J=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,J=!0);J&&i.drawBuffers(X)}function qe(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const je={[di]:i.FUNC_ADD,[Dd]:i.FUNC_SUBTRACT,[Ld]:i.FUNC_REVERSE_SUBTRACT};je[Id]=i.MIN,je[Ud]=i.MAX;const mt={[Nd]:i.ZERO,[Od]:i.ONE,[Fd]:i.SRC_COLOR,[Jr]:i.SRC_ALPHA,[Gd]:i.SRC_ALPHA_SATURATE,[Hd]:i.DST_COLOR,[Bd]:i.DST_ALPHA,[kd]:i.ONE_MINUS_SRC_COLOR,[Qr]:i.ONE_MINUS_SRC_ALPHA,[Vd]:i.ONE_MINUS_DST_COLOR,[zd]:i.ONE_MINUS_DST_ALPHA,[Wd]:i.CONSTANT_COLOR,[Xd]:i.ONE_MINUS_CONSTANT_COLOR,[$d]:i.CONSTANT_ALPHA,[qd]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,le,X,J,pe,he,He,gt,Ot,at){if(D===Wn){g===!0&&(oe(i.BLEND),g=!1);return}if(g===!1&&(Q(i.BLEND),g=!0),D!==Pd){if(D!==m||at!==E){if((f!==di||x!==di)&&(i.blendEquation(i.FUNC_ADD),f=di,x=di),at)switch(D){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kr:i.blendFunc(i.ONE,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ko:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,b=null,L=null,w=null,R.set(0,0,0),P=0,m=D,E=at}return}pe=pe||le,he=he||X,He=He||J,(le!==f||pe!==x)&&(i.blendEquationSeparate(je[le],je[pe]),f=le,x=pe),(X!==M||J!==b||he!==L||He!==w)&&(i.blendFuncSeparate(mt[X],mt[J],mt[he],mt[He]),M=X,b=J,L=he,w=He),(gt.equals(R)===!1||Ot!==P)&&(i.blendColor(gt.r,gt.g,gt.b,Ot),R.copy(gt),P=Ot),m=D,E=!1}function Wt(D,le){D.side===vn?oe(i.CULL_FACE):Q(i.CULL_FACE);let X=D.side===kt;le&&(X=!X),me(X),D.blending===Li&&D.transparent===!1?N(Wn):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;o.setTest(J),J&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),$e(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function De(D){D!==Ad?(Q(i.CULL_FACE),D!==A&&(D===Yo?i.cullFace(i.BACK):D===Rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),A=D}function ge(D){D!==k&&(z&&i.lineWidth(D),k=D)}function $e(D,le,X){D?(Q(i.POLYGON_OFFSET_FILL),(O!==le||G!==X)&&(i.polygonOffset(le,X),O=le,G=X)):oe(i.POLYGON_OFFSET_FILL)}function be(D){D?Q(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+$-1),ae!==D&&(i.activeTexture(D),ae=D)}function v(D,le,X){X===void 0&&(ae===null?X=i.TEXTURE0+$-1:X=ae);let J=ce[X];J===void 0&&(J={type:void 0,texture:void 0},ce[X]=J),(J.type!==D||J.texture!==le)&&(ae!==X&&(i.activeTexture(X),ae=X),i.bindTexture(D,le||Y[D]),J.type=D,J.texture=le)}function B(){const D=ce[ae];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(D){Ze.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function ye(D){F.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),F.copy(D))}function Ke(D,le){let X=c.get(le);X===void 0&&(X=new WeakMap,c.set(le,X));let J=X.get(D);J===void 0&&(J=i.getUniformBlockIndex(le,D.name),X.set(D,J))}function We(D,le){const J=c.get(le).get(D);l.get(le)!==J&&(i.uniformBlockBinding(le,J,D.__bindingPointIndex),l.set(le,J))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ae=null,ce={},h={},u=new WeakMap,p=[],_=null,g=!1,m=null,f=null,M=null,b=null,x=null,L=null,w=null,R=new Be(0,0,0),P=0,E=!1,y=null,A=null,k=null,O=null,G=null,Ze.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:oe,bindFramebuffer:_e,drawBuffers:Re,useProgram:qe,setBlending:N,setMaterial:Wt,setFlipSided:me,setCullFace:De,setLineWidth:ge,setPolygonOffset:$e,setScissorTest:be,activeTexture:T,bindTexture:v,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:xe,texImage3D:Ie,updateUBOMapping:Ke,uniformBlockBinding:We,texStorage2D:et,texStorage3D:ie,texSubImage2D:q,texSubImage3D:Ce,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:Ue,viewport:ye,reset:dt}}function Mc(i,e,t,n){const s=Km(n);switch(t){case sl:return i*e;case al:return i*e;case ol:return i*e*2;case ll:return i*e/s.components*s.byteLength;case pa:return i*e/s.components*s.byteLength;case cl:return i*e*2/s.components*s.byteLength;case ma:return i*e*2/s.components*s.byteLength;case rl:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case ga:return i*e*4/s.components*s.byteLength;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case js:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:case ya:return Math.max(i,16)*Math.max(e,8)/4;case _a:case xa:return Math.max(i,8)*Math.max(e,8)/2;case Sa:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ks:case ka:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*16;case dl:case za:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ha:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Km(i){switch(i){case An:case tl:return{byteLength:1,components:1};case _s:case nl:case vs:return{byteLength:2,components:1};case ha:case fa:return{byteLength:2,components:4};case hi:case ua:case Rn:return{byteLength:4,components:1};case il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jm(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return p?new OffscreenCanvas(T,v):bs("canvas")}function g(T,v,B){let K=1;const ee=be(T);if((ee.width>B||ee.height>B)&&(K=B/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(K*ee.width),Ce=Math.floor(K*ee.height);h===void 0&&(h=_(q,Ce));const de=v?_(q,Ce):h;return de.width=q,de.height=Ce,de.getContext("2d").drawImage(T,0,0,q,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Ce+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,v,B,K,ee=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=v;if(v===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),v===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),v===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){const Ce=ee?Js:Je.getTransfer(K);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=Ce===ot?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(T,v){let B;return T?v===null||v===hi||v===Oi?B=i.DEPTH24_STENCIL8:v===Rn?B=i.DEPTH32F_STENCIL8:v===_s&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hi||v===Oi?B=i.DEPTH_COMPONENT24:v===Rn?B=i.DEPTH_COMPONENT32F:v===_s&&(B=i.DEPTH_COMPONENT16),B}function L(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==an&&T.minFilter!==xn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){const v=T.target;v.removeEventListener("dispose",w),P(v),v.isVideoTexture&&d.delete(v)}function R(T){const v=T.target;v.removeEventListener("dispose",R),y(v)}function P(T){const v=n.get(T);if(v.__webglInit===void 0)return;const B=T.source,K=u.get(B);if(K){const ee=K[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(T),Object.keys(K).length===0&&u.delete(B)}n.remove(T)}function E(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const B=T.source,K=u.get(B);delete K[v.__cacheKey],a.memory.textures--}function y(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let ee=0;ee<v.__webglFramebuffer[K].length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[K][ee]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=T.textures;for(let K=0,ee=B.length;K<ee;K++){const q=n.get(B[K]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(T)}let A=0;function k(){A=0}function O(){const T=A;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),A+=1,T}function G(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function $(T,v){const B=n.get(T);if(T.isVideoTexture&&ge(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(B,T,v);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function z(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){F(B,T,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function te(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){F(B,T,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function W(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Z(B,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const ae={[Xs]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[ca]:i.MIRRORED_REPEAT},ce={[an]:i.NEAREST,[nu]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},Ee={[ou]:i.NEVER,[fu]:i.ALWAYS,[lu]:i.LESS,[hl]:i.LEQUAL,[cu]:i.EQUAL,[hu]:i.GEQUAL,[du]:i.GREATER,[uu]:i.NOTEQUAL};function Fe(T,v){if(v.type===Rn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===xn||v.magFilter===da||v.magFilter===$s||v.magFilter===ui||v.minFilter===xn||v.minFilter===da||v.minFilter===$s||v.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ae[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ae[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ae[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==$s&&v.minFilter!==ui||v.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(T,v){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));const K=v.source;let ee=u.get(K);ee===void 0&&(ee={},u.set(K,ee));const q=G(v);if(q!==T.__cacheKey){ee[q]===void 0&&(ee[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ee[q].usedTimes++;const Ce=ee[T.__cacheKey];Ce!==void 0&&(ee[T.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(v)),T.__cacheKey=q,T.__webglTexture=ee[q].texture}return B}function F(T,v,B){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);const ee=Ze(T,v),q=v.source;t.bindTexture(K,T.__webglTexture,i.TEXTURE0+B);const Ce=n.get(q);if(q.version!==Ce.__version||ee===!0){t.activeTexture(i.TEXTURE0+B);const de=Je.getPrimaries(Je.workingColorSpace),ve=v.colorSpace===qn?null:Je.getPrimaries(v.colorSpace),et=v.colorSpace===qn||de===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ie=g(v.image,!1,s.maxTextureSize);ie=$e(v,ie);const xe=r.convert(v.format,v.colorSpace),Ie=r.convert(v.type);let Ue=b(v.internalFormat,xe,Ie,v.colorSpace,v.isVideoTexture);Fe(K,v);let ye;const Ke=v.mipmaps,We=v.isVideoTexture!==!0,dt=Ce.__version===void 0||ee===!0,D=q.dataReady,le=L(v,ie);if(v.isDepthTexture)Ue=x(v.format===ki,v.type),dt&&(We?t.texStorage2D(i.TEXTURE_2D,1,Ue,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Ue,ie.width,ie.height,0,xe,Ie,null));else if(v.isDataTexture)if(Ke.length>0){We&&dt&&t.texStorage2D(i.TEXTURE_2D,le,Ue,Ke[0].width,Ke[0].height);for(let X=0,J=Ke.length;X<J;X++)ye=Ke[X],We?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ye.width,ye.height,xe,Ie,ye.data):t.texImage2D(i.TEXTURE_2D,X,Ue,ye.width,ye.height,0,xe,Ie,ye.data);v.generateMipmaps=!1}else We?(dt&&t.texStorage2D(i.TEXTURE_2D,le,Ue,ie.width,ie.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,xe,Ie,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,ie.width,ie.height,0,xe,Ie,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){We&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Ue,Ke[0].width,Ke[0].height,ie.depth);for(let X=0,J=Ke.length;X<J;X++)if(ye=Ke[X],v.format!==on)if(xe!==null)if(We){if(D)if(v.layerUpdates.size>0){const pe=Mc(ye.width,ye.height,v.format,v.type);for(const he of v.layerUpdates){const He=ye.data.subarray(he*pe/ye.data.BYTES_PER_ELEMENT,(he+1)*pe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,he,ye.width,ye.height,1,xe,He)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,ie.depth,xe,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ue,ye.width,ye.height,ie.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,ie.depth,xe,Ie,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Ue,ye.width,ye.height,ie.depth,0,xe,Ie,ye.data)}else{We&&dt&&t.texStorage2D(i.TEXTURE_2D,le,Ue,Ke[0].width,Ke[0].height);for(let X=0,J=Ke.length;X<J;X++)ye=Ke[X],v.format!==on?xe!==null?We?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ye.width,ye.height,xe,Ie,ye.data):t.texImage2D(i.TEXTURE_2D,X,Ue,ye.width,ye.height,0,xe,Ie,ye.data)}else if(v.isDataArrayTexture)if(We){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Ue,ie.width,ie.height,ie.depth),D)if(v.layerUpdates.size>0){const X=Mc(ie.width,ie.height,v.format,v.type);for(const J of v.layerUpdates){const pe=ie.data.subarray(J*X/ie.data.BYTES_PER_ELEMENT,(J+1)*X/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,xe,Ie,pe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,xe,Ie,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,ie.width,ie.height,ie.depth,0,xe,Ie,ie.data);else if(v.isData3DTexture)We?(dt&&t.texStorage3D(i.TEXTURE_3D,le,Ue,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,xe,Ie,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,ie.width,ie.height,ie.depth,0,xe,Ie,ie.data);else if(v.isFramebufferTexture){if(dt)if(We)t.texStorage2D(i.TEXTURE_2D,le,Ue,ie.width,ie.height);else{let X=ie.width,J=ie.height;for(let pe=0;pe<le;pe++)t.texImage2D(i.TEXTURE_2D,pe,Ue,X,J,0,xe,Ie,null),X>>=1,J>>=1}}else if(Ke.length>0){if(We&&dt){const X=be(Ke[0]);t.texStorage2D(i.TEXTURE_2D,le,Ue,X.width,X.height)}for(let X=0,J=Ke.length;X<J;X++)ye=Ke[X],We?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,xe,Ie,ye):t.texImage2D(i.TEXTURE_2D,X,Ue,xe,Ie,ye);v.generateMipmaps=!1}else if(We){if(dt){const X=be(ie);t.texStorage2D(i.TEXTURE_2D,le,Ue,X.width,X.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ie,ie)}else t.texImage2D(i.TEXTURE_2D,0,Ue,xe,Ie,ie);m(v)&&f(K),Ce.__version=q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Z(T,v,B){if(v.image.length!==6)return;const K=Ze(T,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const q=n.get(ee);if(ee.version!==q.__version||K===!0){t.activeTexture(i.TEXTURE0+B);const Ce=Je.getPrimaries(Je.workingColorSpace),de=v.colorSpace===qn?null:Je.getPrimaries(v.colorSpace),ve=v.colorSpace===qn||Ce===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const et=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let J=0;J<6;J++)!et&&!ie?xe[J]=g(v.image[J],!0,s.maxCubemapSize):xe[J]=ie?v.image[J].image:v.image[J],xe[J]=$e(v,xe[J]);const Ie=xe[0],Ue=r.convert(v.format,v.colorSpace),ye=r.convert(v.type),Ke=b(v.internalFormat,Ue,ye,v.colorSpace),We=v.isVideoTexture!==!0,dt=q.__version===void 0||K===!0,D=ee.dataReady;let le=L(v,Ie);Fe(i.TEXTURE_CUBE_MAP,v);let X;if(et){We&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ke,Ie.width,Ie.height);for(let J=0;J<6;J++){X=xe[J].mipmaps;for(let pe=0;pe<X.length;pe++){const he=X[pe];v.format!==on?Ue!==null?We?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,he.width,he.height,Ue,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Ke,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,he.width,he.height,Ue,ye,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Ke,he.width,he.height,0,Ue,ye,he.data)}}}else{if(X=v.mipmaps,We&&dt){X.length>0&&le++;const J=be(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ke,J.width,J.height)}for(let J=0;J<6;J++)if(ie){We?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xe[J].width,xe[J].height,Ue,ye,xe[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ke,xe[J].width,xe[J].height,0,Ue,ye,xe[J].data);for(let pe=0;pe<X.length;pe++){const He=X[pe].image[J].image;We?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,He.width,He.height,Ue,ye,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Ke,He.width,He.height,0,Ue,ye,He.data)}}else{We?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,ye,xe[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ke,Ue,ye,xe[J]);for(let pe=0;pe<X.length;pe++){const he=X[pe];We?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Ue,ye,he.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Ke,Ue,ye,he.image[J])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),q.__version=ee.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Y(T,v,B,K,ee,q){const Ce=r.convert(B.format,B.colorSpace),de=r.convert(B.type),ve=b(B.internalFormat,Ce,de,B.colorSpace),et=n.get(v),ie=n.get(B);if(ie.__renderTarget=v,!et.__hasExternalTextures){const xe=Math.max(1,v.width>>q),Ie=Math.max(1,v.height>>q);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,ve,xe,Ie,v.depth,0,Ce,de,null):t.texImage2D(ee,q,ve,xe,Ie,0,Ce,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),De(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ee,ie.__webglTexture,0,me(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ee,ie.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(T,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const K=v.depthTexture,ee=K&&K.isDepthTexture?K.type:null,q=x(v.stencilBuffer,ee),Ce=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=me(v);De(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,q,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,T)}else{const K=v.textures;for(let ee=0;ee<K.length;ee++){const q=K[ee],Ce=r.convert(q.format,q.colorSpace),de=r.convert(q.type),ve=b(q.internalFormat,Ce,de,q.colorSpace),et=me(v);B&&De(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,ve,v.width,v.height):De(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,ve,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ve,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const ee=K.__webglTexture,q=me(v);if(v.depthTexture.format===Fi)De(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(v.depthTexture.format===ki)De(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function _e(T){const v=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=K}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");oe(v.__webglFramebuffer,T)}else if(B){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=i.createRenderbuffer(),Q(v.__webglDepthbuffer[K],T,!1);else{const ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Q(v.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(T,v,B){const K=n.get(T);v!==void 0&&Y(K.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&_e(T)}function qe(T){const v=T.texture,B=n.get(T),K=n.get(v);T.addEventListener("dispose",R);const ee=T.textures,q=T.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[de]=[];for(let ve=0;ve<v.mipmaps.length;ve++)B.__webglFramebuffer[de][ve]=i.createFramebuffer()}else B.__webglFramebuffer[de]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)B.__webglFramebuffer[de]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let de=0,ve=ee.length;de<ve;de++){const et=n.get(ee[de]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&De(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const ve=ee[de];B.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const et=r.convert(ve.format,ve.colorSpace),ie=r.convert(ve.type),xe=b(ve.internalFormat,et,ie,ve.colorSpace,T.isXRRenderTarget===!0),Ie=me(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,xe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,B.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)Y(B.__webglFramebuffer[de][ve],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else Y(B.__webglFramebuffer[de],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let de=0,ve=ee.length;de<ve;de++){const et=ee[de],ie=n.get(et);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Fe(i.TEXTURE_2D,et),Y(B.__webglFramebuffer,T,et,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(et)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,K.__webglTexture),Fe(de,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)Y(B.__webglFramebuffer[ve],T,v,i.COLOR_ATTACHMENT0,de,ve);else Y(B.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,de,0);m(v)&&f(de),t.unbindTexture()}T.depthBuffer&&_e(T)}function je(T){const v=T.textures;for(let B=0,K=v.length;B<K;B++){const ee=v[B];if(m(ee)){const q=M(T),Ce=n.get(ee).__webglTexture;t.bindTexture(q,Ce),f(q),t.unbindTexture()}}}const mt=[],N=[];function Wt(T){if(T.samples>0){if(De(T)===!1){const v=T.textures,B=T.width,K=T.height;let ee=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(T),de=v.length>1;if(de)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[ve]);const et=n.get(v[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,ee,i.NEAREST),l===!0&&(mt.length=0,N.length=0,mt.push(i.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.resolveDepthBuffer===!1&&(mt.push(q),N.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[ve]);const et=n.get(v[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function me(T){return Math.min(s.maxSamples,T.samples)}function De(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ge(T){const v=a.render.frame;d.get(T)!==v&&(d.set(T,v),T.update())}function $e(T,v){const B=T.colorSpace,K=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Bi&&B!==qn&&(Je.getTransfer(B)===ot?(K!==on||ee!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=z,this.setTexture3D=te,this.setTextureCube=W,this.rebindTextures=Re,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=De}function Qm(i,e){function t(n,s=qn){let r;const a=Je.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tl)return i.BYTE;if(n===nl)return i.SHORT;if(n===_s)return i.UNSIGNED_SHORT;if(n===ua)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===vs)return i.HALF_FLOAT;if(n===sl)return i.ALPHA;if(n===rl)return i.RGB;if(n===on)return i.RGBA;if(n===al)return i.LUMINANCE;if(n===ol)return i.LUMINANCE_ALPHA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===pa)return i.RED_INTEGER;if(n===cl)return i.RG;if(n===ma)return i.RG_INTEGER;if(n===ga)return i.RGBA_INTEGER;if(n===qs||n===Ys||n===js||n===Zs)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===va||n===xa||n===ya)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===ba||n===Ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sa||n===ba)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ea||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Ia||n===Ua||n===Na||n===Oa||n===Fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ea)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ra)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===La)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ua)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ks||n===ka||n===Ba)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ks)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dl||n===za||n===Ha||n===Va)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ks)return r.COMPRESSED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class eg extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fn extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tg={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Lt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hn({vertexShader:ng,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rg extends fi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,_=null;const g=new sg,m=t.getContextAttributes();let f=null,M=null;const b=[],x=[],L=new Le;let w=null;const R=new en;R.viewport=new ct;const P=new en;P.viewport=new ct;const E=[R,P],y=new eg;let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Z=b[F];return Z===void 0&&(Z=new So,b[F]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(F){let Z=b[F];return Z===void 0&&(Z=new So,b[F]=Z),Z.getGripSpace()},this.getHand=function(F){let Z=b[F];return Z===void 0&&(Z=new So,b[F]=Z),Z.getHandSpace()};function O(F){const Z=x.indexOf(F.inputSource);if(Z===-1)return;const Y=b[Z];Y!==void 0&&(Y.update(F.inputSource,F.frame,c||a),Y.dispatchEvent({type:F.type,data:F.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let F=0;F<b.length;F++){const Z=x[F];Z!==null&&(x[F]=null,b[F].disconnect(Z))}A=null,k=null,g.reset(),e.setRenderTarget(f),p=null,u=null,h=null,s=null,M=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new pi(p.framebufferWidth,p.framebufferHeight,{format:on,type:An,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,Y=null,Q=null;m.depth&&(Q=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?ki:Fi,Y=m.stencil?Oi:hi);const oe={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};h=new XRWebGLBinding(s,t),u=h.createProjectionLayer(oe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new pi(u.textureWidth,u.textureHeight,{format:on,type:An,depthTexture:new tc(u.textureWidth,u.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(F){for(let Z=0;Z<F.removed.length;Z++){const Y=F.removed[Z],Q=x.indexOf(Y);Q>=0&&(x[Q]=null,b[Q].disconnect(Y))}for(let Z=0;Z<F.added.length;Z++){const Y=F.added[Z];let Q=x.indexOf(Y);if(Q===-1){for(let _e=0;_e<b.length;_e++)if(_e>=x.length){x.push(Y),Q=_e;break}else if(x[_e]===null){x[_e]=Y,Q=_e;break}if(Q===-1)break}const oe=b[Q];oe&&oe.connect(Y)}}const z=new C,te=new C;function W(F,Z,Y){z.setFromMatrixPosition(Z.matrixWorld),te.setFromMatrixPosition(Y.matrixWorld);const Q=z.distanceTo(te),oe=Z.projectionMatrix.elements,_e=Y.projectionMatrix.elements,Re=oe[14]/(oe[10]-1),qe=oe[14]/(oe[10]+1),je=(oe[9]+1)/oe[5],mt=(oe[9]-1)/oe[5],N=(oe[8]-1)/oe[0],Wt=(_e[8]+1)/_e[0],me=Re*N,De=Re*Wt,ge=Q/(-N+Wt),$e=ge*-N;if(Z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX($e),F.translateZ(ge),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),oe[10]===-1)F.projectionMatrix.copy(Z.projectionMatrix),F.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const be=Re+ge,T=qe+ge,v=me-$e,B=De+(Q-$e),K=je*qe/T*be,ee=mt*qe/T*be;F.projectionMatrix.makePerspective(v,B,K,ee,be,T),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function ae(F,Z){Z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let Z=F.near,Y=F.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(Y=g.depthFar)),y.near=P.near=R.near=Z,y.far=P.far=R.far=Y,(A!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,k=y.far),R.layers.mask=F.layers.mask|2,P.layers.mask=F.layers.mask|4,y.layers.mask=R.layers.mask|P.layers.mask;const Q=F.parent,oe=y.cameras;ae(y,Q);for(let _e=0;_e<oe.length;_e++)ae(oe[_e],Q);oe.length===2?W(y,R,P):y.projectionMatrix.copy(R.projectionMatrix),ce(F,y,Q)};function ce(F,Z,Y){Y===null?F.matrix.copy(Z.matrixWorld):(F.matrix.copy(Y.matrixWorld),F.matrix.invert(),F.matrix.multiply(Z.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(Z.projectionMatrix),F.projectionMatrixInverse.copy(Z.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=ys*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(F){l=F,u!==null&&(u.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let Ee=null;function Fe(F,Z){if(d=Z.getViewerPose(c||a),_=Z,d!==null){const Y=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Q=!1;Y.length!==y.cameras.length&&(y.cameras.length=0,Q=!0);for(let _e=0;_e<Y.length;_e++){const Re=Y[_e];let qe=null;if(p!==null)qe=p.getViewport(Re);else{const mt=h.getViewSubImage(u,Re);qe=mt.viewport,_e===0&&(e.setRenderTargetTextures(M,mt.colorTexture,u.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(M))}let je=E[_e];je===void 0&&(je=new en,je.layers.enable(_e),je.viewport=new ct,E[_e]=je),je.matrix.fromArray(Re.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Re.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(qe.x,qe.y,qe.width,qe.height),_e===0&&(y.matrix.copy(je.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Q===!0&&y.cameras.push(je)}const oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const _e=h.getDepthInformation(Y[0]);_e&&_e.isValid&&_e.texture&&g.init(e,_e,s.renderState)}}for(let Y=0;Y<b.length;Y++){const Q=x[Y],oe=b[Y];Q!==null&&oe!==void 0&&oe.update(Q,Z,c||a)}Ee&&Ee(F,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Ze=new ql;Ze.setAnimationLoop(Fe),this.setAnimationLoop=function(F){Ee=F},this.dispose=function(){}}}const Ti=new Un,ag=new pt;function og(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Hl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,b,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),b=M.envMap,x=M.envMapRotation;b&&(m.envMap.value=b,Ti.copy(x),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(ag.makeRotationFromEuler(Ti)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const x=b.program;n.uniformBlockBinding(M,x)}function c(M,b){let x=s[M.id];x===void 0&&(_(M),x=d(M),s[M.id]=x,M.addEventListener("dispose",m));const L=b.program;n.updateUBOMapping(M,L);const w=e.render.frame;r[M.id]!==w&&(u(M),r[M.id]=w)}function d(M){const b=h();M.__bindingPointIndex=b;const x=i.createBuffer(),L=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const b=s[M.id],x=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,R=x.length;w<R;w++){const P=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,y=P.length;E<y;E++){const A=P[E];if(p(A,w,E,L)===!0){const k=A.__offset,O=Array.isArray(A.value)?A.value:[A.value];let G=0;for(let $=0;$<O.length;$++){const z=O[$],te=g(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,k+G,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,G),G+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,b,x,L){const w=M.value,R=b+"_"+x;if(L[R]===void 0)return typeof w=="number"||typeof w=="boolean"?L[R]=w:L[R]=w.clone(),!0;{const P=L[R];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return L[R]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(M){const b=M.uniforms;let x=0;const L=16;for(let R=0,P=b.length;R<P;R++){const E=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,A=E.length;y<A;y++){const k=E[y],O=Array.isArray(k.value)?k.value:[k.value];for(let G=0,$=O.length;G<$;G++){const z=O[G],te=g(z),W=x%L,ae=W%te.boundary,ce=W+ae;x+=ae,ce!==0&&L-ce<te.storage&&(x+=L-ce),k.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=te.storage}}}const w=x%L;return w>0&&(x+=L-w),M.__size=x,M.__cache={},this}function g(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class cg{constructor(e={}){const{canvas:t=Pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this.toneMapping=Xn,this.toneMappingExposure=1;const x=this;let L=!1,w=0,R=0,P=null,E=-1,y=null;const A=new ct,k=new ct;let O=null;const G=new Be(0);let $=0,z=t.width,te=t.height,W=1,ae=null,ce=null;const Ee=new ct(0,0,z,te),Fe=new ct(0,0,z,te);let Ze=!1;const F=new $l;let Z=!1,Y=!1;const Q=new pt,oe=new pt,_e=new C,Re=new ct,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function mt(){return P===null?W:1}let N=n;function Wt(S,I){return t.getContext(S,I)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ft}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",he,!1),N===null){const I="webgl2";if(N=Wt(I,S),N===null)throw Wt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let me,De,ge,$e,be,T,v,B,K,ee,q,Ce,de,ve,et,ie,xe,Ie,Ue,ye,Ke,We,dt,D;function le(){me=new pp(N),me.init(),We=new Qm(N,me),De=new op(N,me,e,We),ge=new Zm(N,me),De.reverseDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),$e=new _p(N),be=new Nm,T=new Jm(N,me,ge,be,De,We,$e),v=new cp(x),B=new fp(x),K=new nh(N),dt=new rp(N,K),ee=new mp(N,K,$e,dt),q=new xp(N,ee,K,$e),Ue=new vp(N,De,T),ie=new lp(be),Ce=new Um(x,v,B,me,De,dt,ie),de=new og(x,be),ve=new Fm,et=new Gm(me),Ie=new sp(x,v,B,ge,q,p,l),xe=new Ym(x,q,De),D=new lg(N,$e,De,ge),ye=new ap(N,me,$e),Ke=new gp(N,me,$e),$e.programs=Ce.programs,x.capabilities=De,x.extensions=me,x.properties=be,x.renderLists=ve,x.shadowMap=xe,x.state=ge,x.info=$e}le();const X=new rg(x,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=me.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=me.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(z,te,!1))},this.getSize=function(S){return S.set(z,te)},this.setSize=function(S,I,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=S,te=I,t.width=Math.floor(S*W),t.height=Math.floor(I*W),H===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(z*W,te*W).floor()},this.setDrawingBufferSize=function(S,I,H){z=S,te=I,W=H,t.width=Math.floor(S*H),t.height=Math.floor(I*H),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(Ee)},this.setViewport=function(S,I,H,V){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,I,H,V),ge.viewport(A.copy(Ee).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(Fe)},this.setScissor=function(S,I,H,V){S.isVector4?Fe.set(S.x,S.y,S.z,S.w):Fe.set(S,I,H,V),ge.scissor(k.copy(Fe).multiplyScalar(W).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(S){ge.setScissorTest(Ze=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){ce=S},this.getClearColor=function(S){return S.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(S=!0,I=!0,H=!0){let V=0;if(S){let U=!1;if(P!==null){const se=P.texture.format;U=se===ga||se===ma||se===pa}if(U){const se=P.texture.type,fe=se===An||se===hi||se===_s||se===Oi||se===ha||se===fa,Te=Ie.getClearColor(),we=Ie.getClearAlpha(),ke=Te.r,Ve=Te.g,Ae=Te.b;fe?(_[0]=ke,_[1]=Ve,_[2]=Ae,_[3]=we,N.clearBufferuiv(N.COLOR,0,_)):(g[0]=ke,g[1]=Ve,g[2]=Ae,g[3]=we,N.clearBufferiv(N.COLOR,0,g))}else V|=N.COLOR_BUFFER_BIT}I&&(V|=N.DEPTH_BUFFER_BIT),H&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ve.dispose(),et.dispose(),be.dispose(),v.dispose(),B.dispose(),q.dispose(),dt.dispose(),D.dispose(),Ce.dispose(),X.dispose(),X.removeEventListener("sessionstart",xd),X.removeEventListener("sessionend",yd),Pi.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=$e.autoReset,I=xe.enabled,H=xe.autoUpdate,V=xe.needsUpdate,U=xe.type;le(),$e.autoReset=S,xe.enabled=I,xe.autoUpdate=H,xe.needsUpdate=V,xe.type=U}function he(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function He(S){const I=S.target;I.removeEventListener("dispose",He),gt(I)}function gt(S){Ot(S),be.remove(S)}function Ot(S){const I=be.get(S).programs;I!==void 0&&(I.forEach(function(H){Ce.releaseProgram(H)}),S.isShaderMaterial&&Ce.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,H,V,U,se){I===null&&(I=qe);const fe=U.isMesh&&U.matrixWorld.determinant()<0,Te=q_(S,I,H,V,U);ge.setMaterial(V,fe);let we=H.index,ke=1;if(V.wireframe===!0){if(we=ee.getWireframeAttribute(H),we===void 0)return;ke=2}const Ve=H.drawRange,Ae=H.attributes.position;let nt=Ve.start*ke,ut=(Ve.start+Ve.count)*ke;se!==null&&(nt=Math.max(nt,se.start*ke),ut=Math.min(ut,(se.start+se.count)*ke)),we!==null?(nt=Math.max(nt,0),ut=Math.min(ut,we.count)):Ae!=null&&(nt=Math.max(nt,0),ut=Math.min(ut,Ae.count));const ht=ut-nt;if(ht<0||ht===1/0)return;dt.setup(U,V,Te,H,we);let Xt,it=ye;if(we!==null&&(Xt=K.get(we),it=Ke,it.setIndex(Xt)),U.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*mt()),it.setMode(N.LINES)):it.setMode(N.TRIANGLES);else if(U.isLine){let Pe=V.linewidth;Pe===void 0&&(Pe=1),ge.setLineWidth(Pe*mt()),U.isLineSegments?it.setMode(N.LINES):U.isLineLoop?it.setMode(N.LINE_LOOP):it.setMode(N.LINE_STRIP)}else U.isPoints?it.setMode(N.POINTS):U.isSprite&&it.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Pe=U._multiDrawStarts,Vn=U._multiDrawCounts,st=U._multiDrawCount,_n=we?K.get(we).bytesPerElement:1,gs=be.get(V).currentProgram.getUniforms();for(let Zt=0;Zt<st;Zt++)gs.setValue(N,"_gl_DrawID",Zt),it.render(Pe[Zt]/_n,Vn[Zt])}else if(U.isInstancedMesh)it.renderInstances(nt,ht,U.count);else if(H.isInstancedBufferGeometry){const Pe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Vn=Math.min(H.instanceCount,Pe);it.renderInstances(nt,ht,Vn)}else it.render(nt,ht)};function at(S,I,H){S.transparent===!0&&S.side===vn&&S.forceSinglePass===!1?(S.side=kt,S.needsUpdate=!0,Zr(S,I,H),S.side=Gn,S.needsUpdate=!0,Zr(S,I,H),S.side=vn):Zr(S,I,H)}this.compile=function(S,I,H=null){H===null&&(H=S),f=et.get(H),f.init(I),b.push(f),H.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),S!==H&&S.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const V=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const Te=se[fe];at(Te,H,U),V.add(Te)}else at(se,H,U),V.add(se)}),b.pop(),f=null,V},this.compileAsync=function(S,I,H=null){const V=this.compile(S,I,H);return new Promise(U=>{function se(){if(V.forEach(function(fe){be.get(fe).currentProgram.isReady()&&V.delete(fe)}),V.size===0){U(S);return}setTimeout(se,10)}me.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let gn=null;function Hn(S){gn&&gn(S)}function xd(){Pi.stop()}function yd(){Pi.start()}const Pi=new ql;Pi.setAnimationLoop(Hn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(S){gn=S,X.setAnimationLoop(S),S===null?Pi.stop():Pi.start()},X.addEventListener("sessionstart",xd),X.addEventListener("sessionend",yd),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,I,P),f=et.get(S,b.length),f.init(I),b.push(f),oe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),F.setFromProjectionMatrix(oe),Y=this.localClippingEnabled,Z=ie.init(this.clippingPlanes,Y),m=ve.get(S,M.length),m.init(),M.push(m),X.enabled===!0&&X.isPresenting===!0){const se=x.xr.getDepthSensingMesh();se!==null&&qo(se,I,-1/0,x.sortObjects)}qo(S,I,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ae,ce),je=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,je&&Ie.addToRenderList(m,S),this.info.render.frame++,Z===!0&&ie.beginShadows();const H=f.state.shadowsArray;xe.render(H,S,I),Z===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,U=m.transmissive;if(f.setupLights(),I.isArrayCamera){const se=I.cameras;if(U.length>0)for(let fe=0,Te=se.length;fe<Te;fe++){const we=se[fe];bd(V,U,S,we)}je&&Ie.render(S);for(let fe=0,Te=se.length;fe<Te;fe++){const we=se[fe];Sd(m,S,we,we.viewport)}}else U.length>0&&bd(V,U,S,I),je&&Ie.render(S),Sd(m,S,I);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(x,S,I),dt.resetDefaultState(),E=-1,y=null,b.pop(),b.length>0?(f=b[b.length-1],Z===!0&&ie.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function qo(S,I,H,V){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||F.intersectsSprite(S)){V&&Re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(oe);const fe=q.update(S),Te=S.material;Te.visible&&m.push(S,fe,Te,H,Re.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||F.intersectsObject(S))){const fe=q.update(S),Te=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Re.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Re.copy(fe.boundingSphere.center)),Re.applyMatrix4(S.matrixWorld).applyMatrix4(oe)),Array.isArray(Te)){const we=fe.groups;for(let ke=0,Ve=we.length;ke<Ve;ke++){const Ae=we[ke],nt=Te[Ae.materialIndex];nt&&nt.visible&&m.push(S,fe,nt,H,Re.z,Ae)}}else Te.visible&&m.push(S,fe,Te,H,Re.z,null)}}const se=S.children;for(let fe=0,Te=se.length;fe<Te;fe++)qo(se[fe],I,H,V)}function Sd(S,I,H,V){const U=S.opaque,se=S.transmissive,fe=S.transparent;f.setupLightsView(H),Z===!0&&ie.setGlobalState(x.clippingPlanes,H),V&&ge.viewport(A.copy(V)),U.length>0&&jr(U,I,H),se.length>0&&jr(se,I,H),fe.length>0&&jr(fe,I,H),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function bd(S,I,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new pi(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?vs:An,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const se=f.state.transmissionRenderTarget[V.id],fe=V.viewport||A;se.setSize(fe.z,fe.w);const Te=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor(G),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),je&&Ie.render(H);const we=x.toneMapping;x.toneMapping=Xn;const ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),Z===!0&&ie.setGlobalState(x.clippingPlanes,V),jr(S,H,V),T.updateMultisampleRenderTarget(se),T.updateRenderTargetMipmap(se),me.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ae=0,nt=I.length;Ae<nt;Ae++){const ut=I[Ae],ht=ut.object,Xt=ut.geometry,it=ut.material,Pe=ut.group;if(it.side===vn&&ht.layers.test(V.layers)){const Vn=it.side;it.side=kt,it.needsUpdate=!0,Md(ht,H,V,Xt,it,Pe),it.side=Vn,it.needsUpdate=!0,Ve=!0}}Ve===!0&&(T.updateMultisampleRenderTarget(se),T.updateRenderTargetMipmap(se))}x.setRenderTarget(Te),x.setClearColor(G,$),ke!==void 0&&(V.viewport=ke),x.toneMapping=we}function jr(S,I,H){const V=I.isScene===!0?I.overrideMaterial:null;for(let U=0,se=S.length;U<se;U++){const fe=S[U],Te=fe.object,we=fe.geometry,ke=V===null?fe.material:V,Ve=fe.group;Te.layers.test(H.layers)&&Md(Te,I,H,we,ke,Ve)}}function Md(S,I,H,V,U,se){S.onBeforeRender(x,I,H,V,U,se),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(x,I,H,V,S,se),U.transparent===!0&&U.side===vn&&U.forceSinglePass===!1?(U.side=kt,U.needsUpdate=!0,x.renderBufferDirect(H,I,V,U,S,se),U.side=Gn,U.needsUpdate=!0,x.renderBufferDirect(H,I,V,U,S,se),U.side=vn):x.renderBufferDirect(H,I,V,U,S,se),S.onAfterRender(x,I,H,V,U,se)}function Zr(S,I,H){I.isScene!==!0&&(I=qe);const V=be.get(S),U=f.state.lights,se=f.state.shadowsArray,fe=U.state.version,Te=Ce.getParameters(S,U.state,se,I,H),we=Ce.getProgramCacheKey(Te);let ke=V.programs;V.environment=S.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(S.isMeshStandardMaterial?B:v).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",He),ke=new Map,V.programs=ke);let Ve=ke.get(we);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===fe)return Td(S,Te),Ve}else Te.uniforms=Ce.getUniforms(S),S.onBeforeCompile(Te,x),Ve=Ce.acquireProgram(Te,we),ke.set(we,Ve),V.uniforms=Te.uniforms;const Ae=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=ie.uniform),Td(S,Te),V.needsLights=j_(S),V.lightsStateVersion=fe,V.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Ve,V.uniformsList=null,Ve}function Ed(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=br.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Td(S,I){const H=be.get(S);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function q_(S,I,H,V,U){I.isScene!==!0&&(I=qe),T.resetTextureUnits();const se=I.fog,fe=V.isMeshStandardMaterial?I.environment:null,Te=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Bi,we=(V.isMeshStandardMaterial?B:v).get(V.envMap||fe),ke=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ve=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!H.morphAttributes.position,nt=!!H.morphAttributes.normal,ut=!!H.morphAttributes.color;let ht=Xn;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ht=x.toneMapping);const Xt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,it=Xt!==void 0?Xt.length:0,Pe=be.get(V),Vn=f.state.lights;if(Z===!0&&(Y===!0||S!==y)){const sn=S===y&&V.id===E;ie.setState(V,S,sn)}let st=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Vn.state.version||Pe.outputColorSpace!==Te||U.isBatchedMesh&&Pe.batching===!1||!U.isBatchedMesh&&Pe.batching===!0||U.isBatchedMesh&&Pe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Pe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Pe.instancing===!1||!U.isInstancedMesh&&Pe.instancing===!0||U.isSkinnedMesh&&Pe.skinning===!1||!U.isSkinnedMesh&&Pe.skinning===!0||U.isInstancedMesh&&Pe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Pe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Pe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Pe.instancingMorph===!1&&U.morphTexture!==null||Pe.envMap!==we||V.fog===!0&&Pe.fog!==se||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ie.numPlanes||Pe.numIntersection!==ie.numIntersection)||Pe.vertexAlphas!==ke||Pe.vertexTangents!==Ve||Pe.morphTargets!==Ae||Pe.morphNormals!==nt||Pe.morphColors!==ut||Pe.toneMapping!==ht||Pe.morphTargetsCount!==it)&&(st=!0):(st=!0,Pe.__version=V.version);let _n=Pe.currentProgram;st===!0&&(_n=Zr(V,I,U));let gs=!1,Zt=!1,Vs=!1;const ft=_n.getUniforms(),Tn=Pe.uniforms;if(ge.useProgram(_n.program)&&(gs=!0,Zt=!0,Vs=!0),V.id!==E&&(E=V.id,Zt=!0),gs||y!==S){ge.buffers.depth.getReversed()?(Q.copy(S.projectionMatrix),Lu(Q),Iu(Q),ft.setValue(N,"projectionMatrix",Q)):ft.setValue(N,"projectionMatrix",S.projectionMatrix),ft.setValue(N,"viewMatrix",S.matrixWorldInverse);const li=ft.map.cameraPosition;li!==void 0&&li.setValue(N,_e.setFromMatrixPosition(S.matrixWorld)),De.logarithmicDepthBuffer&&ft.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ft.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Zt=!0,Vs=!0)}if(U.isSkinnedMesh){ft.setOptional(N,U,"bindMatrix"),ft.setOptional(N,U,"bindMatrixInverse");const sn=U.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),ft.setValue(N,"boneTexture",sn.boneTexture,T))}U.isBatchedMesh&&(ft.setOptional(N,U,"batchingTexture"),ft.setValue(N,"batchingTexture",U._matricesTexture,T),ft.setOptional(N,U,"batchingIdTexture"),ft.setValue(N,"batchingIdTexture",U._indirectTexture,T),ft.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ft.setValue(N,"batchingColorTexture",U._colorsTexture,T));const Gs=H.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&Ue.update(U,H,_n),(Zt||Pe.receiveShadow!==U.receiveShadow)&&(Pe.receiveShadow=U.receiveShadow,ft.setValue(N,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Tn.envMap.value=we,Tn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(Tn.envMapIntensity.value=I.environmentIntensity),Zt&&(ft.setValue(N,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Y_(Tn,Vs),se&&V.fog===!0&&de.refreshFogUniforms(Tn,se),de.refreshMaterialUniforms(Tn,V,W,te,f.state.transmissionRenderTarget[S.id]),br.upload(N,Ed(Pe),Tn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(br.upload(N,Ed(Pe),Tn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ft.setValue(N,"center",U.center),ft.setValue(N,"modelViewMatrix",U.modelViewMatrix),ft.setValue(N,"normalMatrix",U.normalMatrix),ft.setValue(N,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const sn=V.uniformsGroups;for(let li=0,ci=sn.length;li<ci;li++){const wd=sn[li];D.update(wd,_n),D.bind(wd,_n)}}return _n}function Y_(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function j_(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,I,H){be.get(S.texture).__webglTexture=I,be.get(S.depthTexture).__webglTexture=H;const V=be.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const H=be.get(S);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,H=0){P=S,w=I,R=H;let V=!0,U=null,se=!1,fe=!1;if(S){const we=be.get(S);if(we.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(we.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(we.__hasExternalTextures)T.rebindTextures(S,be.get(S.texture).__webglTexture,be.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ae=S.depthTexture;if(we.__boundDepthTexture!==Ae){if(Ae!==null&&be.has(Ae)&&(S.width!==Ae.image.width||S.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const ke=S.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(fe=!0);const Ve=be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ve[I])?U=Ve[I][H]:U=Ve[I],se=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?U=be.get(S).__webglMultisampledFramebuffer:Array.isArray(Ve)?U=Ve[H]:U=Ve,A.copy(S.viewport),k.copy(S.scissor),O=S.scissorTest}else A.copy(Ee).multiplyScalar(W).floor(),k.copy(Fe).multiplyScalar(W).floor(),O=Ze;if(ge.bindFramebuffer(N.FRAMEBUFFER,U)&&V&&ge.drawBuffers(S,U),ge.viewport(A),ge.scissor(k),ge.setScissorTest(O),se){const we=be.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,we.__webglTexture,H)}else if(fe){const we=be.get(S.texture),ke=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.__webglTexture,H||0,ke)}E=-1},this.readRenderTargetPixels=function(S,I,H,V,U,se,fe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(Te=Te[fe]),Te){ge.bindFramebuffer(N.FRAMEBUFFER,Te);try{const we=S.texture,ke=we.format,Ve=we.type;if(!De.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-V&&H>=0&&H<=S.height-U&&N.readPixels(I,H,V,U,We.convert(ke),We.convert(Ve),se)}finally{const we=P!==null?be.get(P).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,I,H,V,U,se,fe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(Te=Te[fe]),Te){const we=S.texture,ke=we.format,Ve=we.type;if(!De.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=S.width-V&&H>=0&&H<=S.height-U){ge.bindFramebuffer(N.FRAMEBUFFER,Te);const Ae=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),N.readPixels(I,H,V,U,We.convert(ke),We.convert(Ve),0);const nt=P!==null?be.get(P).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,nt);const ut=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Du(N,ut,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.deleteBuffer(Ae),N.deleteSync(ut),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,I=null,H=0){S.isTexture!==!0&&(Ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-H),U=Math.floor(S.image.width*V),se=Math.floor(S.image.height*V),fe=I!==null?I.x:0,Te=I!==null?I.y:0;T.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,fe,Te,U,se),ge.unbindTexture()},this.copyTextureToTexture=function(S,I,H=null,V=null,U=0){S.isTexture!==!0&&(Ms("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],I=arguments[2],U=arguments[3]||0,H=null);let se,fe,Te,we,ke,Ve,Ae,nt,ut;const ht=S.isCompressedTexture?S.mipmaps[U]:S.image;H!==null?(se=H.max.x-H.min.x,fe=H.max.y-H.min.y,Te=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,ke=H.min.y,Ve=H.isBox3?H.min.z:0):(se=ht.width,fe=ht.height,Te=ht.depth||1,we=0,ke=0,Ve=0),V!==null?(Ae=V.x,nt=V.y,ut=V.z):(Ae=0,nt=0,ut=0);const Xt=We.convert(I.format),it=We.convert(I.type);let Pe;I.isData3DTexture?(T.setTexture3D(I,0),Pe=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(T.setTexture2DArray(I,0),Pe=N.TEXTURE_2D_ARRAY):(T.setTexture2D(I,0),Pe=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const Vn=N.getParameter(N.UNPACK_ROW_LENGTH),st=N.getParameter(N.UNPACK_IMAGE_HEIGHT),_n=N.getParameter(N.UNPACK_SKIP_PIXELS),gs=N.getParameter(N.UNPACK_SKIP_ROWS),Zt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,we),N.pixelStorei(N.UNPACK_SKIP_ROWS,ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);const Vs=S.isDataArrayTexture||S.isData3DTexture,ft=I.isDataArrayTexture||I.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Tn=be.get(S),Gs=be.get(I),sn=be.get(Tn.__renderTarget),li=be.get(Gs.__renderTarget);ge.bindFramebuffer(N.READ_FRAMEBUFFER,sn.__webglFramebuffer),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ci=0;ci<Te;ci++)Vs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(S).__webglTexture,U,Ve+ci),S.isDepthTexture?(ft&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(I).__webglTexture,U,ut+ci),N.blitFramebuffer(we,ke,se,fe,Ae,nt,se,fe,N.DEPTH_BUFFER_BIT,N.NEAREST)):ft?N.copyTexSubImage3D(Pe,U,Ae,nt,ut+ci,we,ke,se,fe):N.copyTexSubImage2D(Pe,U,Ae,nt,ut+ci,we,ke,se,fe);ge.bindFramebuffer(N.READ_FRAMEBUFFER,null),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ft?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Pe,U,Ae,nt,ut,se,fe,Te,Xt,it,ht.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Pe,U,Ae,nt,ut,se,fe,Te,Xt,ht.data):N.texSubImage3D(Pe,U,Ae,nt,ut,se,fe,Te,Xt,it,ht):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,Ae,nt,se,fe,Xt,it,ht.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,Ae,nt,ht.width,ht.height,Xt,ht.data):N.texSubImage2D(N.TEXTURE_2D,U,Ae,nt,se,fe,Xt,it,ht);N.pixelStorei(N.UNPACK_ROW_LENGTH,Vn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_n),N.pixelStorei(N.UNPACK_SKIP_ROWS,gs),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zt),U===0&&I.generateMipmaps&&N.generateMipmap(Pe),ge.unbindTexture()},this.copyTextureToTexture3D=function(S,I,H=null,V=null,U=0){return S.isTexture!==!0&&(Ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,S=arguments[2],I=arguments[3],U=arguments[4]||0),Ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,I,H,V,U)},this.initRenderTarget=function(S){be.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),ge.unbindTexture()},this.resetState=function(){w=0,R=0,P=null,ge.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class dg extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ec{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ga,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new C;class yn{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ds extends xi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ss;const Ls=new C,rs=new C,as=new C,os=new Le,Is=new Le,Tc=new pt,Er=new C,Us=new C,Tr=new C,wc=new Le,bo=new Le,Ac=new Le;class wr extends It{constructor(e=new Ds){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ec(t,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new yn(n,3,0,!1)),ss.setAttribute("uv",new yn(n,2,3,!1))}this.geometry=ss,this.material=e,this.center=new Le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Tc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-as.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ar(Er.set(-.5,-.5,0),as,a,rs,s,r),Ar(Us.set(.5,-.5,0),as,a,rs,s,r),Ar(Tr.set(.5,.5,0),as,a,rs,s,r),wc.set(0,0),bo.set(1,0),Ac.set(1,1);let o=e.ray.intersectTriangle(Er,Us,Tr,!1,Ls);if(o===null&&(Ar(Us.set(-.5,.5,0),as,a,rs,s,r),bo.set(0,1),o=e.ray.intersectTriangle(Er,Tr,Us,!1,Ls),o===null))return;const l=e.ray.origin.distanceTo(Ls);l<e.near||l>e.far||t.push({distance:l,point:Ls.clone(),uv:Kt.getInterpolation(Ls,Er,Us,Tr,wc,bo,Ac,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ar(i,e,t,n,s,r){os.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Is.x=r*os.x-s*os.y,Is.y=s*os.x+r*os.y):Is.copy(os),i.copy(e),i.x+=Is.x,i.y+=Is.y,i.applyMatrix4(Tc)}class Mo extends xi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rr=new C,Cr=new C,Rc=new pt,Ns=new rr,Pr=new vi,Eo=new C,Cc=new C;class Pc extends It{constructor(e=new wt,t=new Mo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Rr.fromBufferAttribute(t,s-1),Cr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Rr.distanceTo(Cr);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=r,e.ray.intersectsSphere(Pr)===!1)return;Rc.copy(s).invert(),Ns.copy(e.ray).applyMatrix4(Rc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){const f=d.getX(g),M=d.getX(g+1),b=Dr(this,e,Ns,l,f,M);b&&t.push(b)}if(this.isLineLoop){const g=d.getX(_-1),m=d.getX(p),f=Dr(this,e,Ns,l,g,m);f&&t.push(f)}}else{const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){const f=Dr(this,e,Ns,l,g,g+1);f&&t.push(f)}if(this.isLineLoop){const g=Dr(this,e,Ns,l,_-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Dr(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(Rr.fromBufferAttribute(a,s),Cr.fromBufferAttribute(a,r),t.distanceSqToSegment(Rr,Cr,Eo,Cc)>n)return;Eo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Eo);if(!(l<e.near||l>e.far))return{distance:l,point:Cc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Dc extends xi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lc=new pt,To=new rr,Lr=new vi,Ir=new C;class ug extends It{constructor(e=new wt,t=new Dc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,e.ray.intersectsSphere(Lr)===!1)return;Lc.copy(s).invert(),To.copy(e.ray).applyMatrix4(Lc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=u,g=p;_<g;_++){const m=c.getX(_);Ir.fromBufferAttribute(h,m),Ic(Ir,m,l,s,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=u,g=p;_<g;_++)Ir.fromBufferAttribute(h,_),Ic(Ir,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ic(i,e,t,n,s,r,a){const o=To.distanceSqToPoint(i);if(o<t){const l=new C;To.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Os extends Lt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wo extends wt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let h=e;const u=(t-e)/s,p=new C,_=new Le;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,d.push(_.x,_.y)}h+=u}for(let g=0;g<s;g++){const m=g*(n+1);for(let f=0;f<n;f++){const M=f+m,b=M,x=M+n+1,L=M+n+2,w=M+1;o.push(b,x,w),o.push(x,L,w)}}this.setIndex(o),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fs extends wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new C,u=new C,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const M=[],b=f/n;let x=0;f===0&&a===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){const w=L/t;h.x=-e*Math.cos(s+w*r)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(s+w*r)*Math.sin(a+b*o),_.push(h.x,h.y,h.z),u.copy(h).normalize(),g.push(u.x,u.y,u.z),m.push(w+x,1-b),M.push(c++)}d.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){const b=d[f][M+1],x=d[f][M],L=d[f+1][M],w=d[f+1][M+1];(f!==0||a>0)&&p.push(b,x,w),(f!==n-1||l<Math.PI)&&p.push(x,L,w)}this.setIndex(p),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(g,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hg extends wt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new C,r=new C;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,d=l.length;c<d;++c){const h=l[c],u=h.start,p=h.count;for(let _=u,g=u+p;_<g;_+=3)for(let m=0;m<3;m++){const f=o.getX(_+m),M=o.getX(_+(m+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,M),Uc(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const d=3*o+c,h=3*o+(c+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,h),Uc(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Tt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Uc(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}const Nc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class fg{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return _}return null}}}const pg=new fg;class Ao{constructor(e){this.manager=e!==void 0?e:pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";class mg extends Ao{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Nc.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=bs("img");function l(){d(),Nc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){d(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class gg extends Ao{constructor(e){super(e)}load(e,t,n,s){const r=new Lt,a=new mg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class _g extends wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ro extends Ec{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Oc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Fc=new C,Ur=new C;class vg{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Fc.subVectors(e,this.start),Ur.subVectors(this.end,this.start);const n=Ur.dot(Ur);let r=Ur.dot(Fc)/n;return t&&(r=Et(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class xg extends fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ft}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ft);var tt;(function(i){i.assertEqual=s=>{};function e(s){}i.assertIs=e;function t(s){throw new Error}i.assertNever=t,i.arrayToEnum=s=>{const r={};for(const a of s)r[a]=a;return r},i.getValidEnumValues=s=>{const r=i.objectKeys(s).filter(o=>typeof s[s[o]]!="number"),a={};for(const o of r)a[o]=s[o];return i.objectValues(a)},i.objectValues=s=>i.objectKeys(s).map(function(r){return s[r]}),i.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const r=[];for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&r.push(a);return r},i.find=(s,r)=>{for(const a of s)if(r(a))return a},i.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&Number.isFinite(s)&&Math.floor(s)===s;function n(s,r=" | "){return s.map(a=>typeof a=="string"?`'${a}'`:a).join(r)}i.joinValues=n,i.jsonStringifyReplacer=(s,r)=>typeof r=="bigint"?r.toString():r})(tt||(tt={}));var kc;(function(i){i.mergeShapes=(e,t)=>({...e,...t})})(kc||(kc={}));const Se=tt.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ni=i=>{switch(typeof i){case"undefined":return Se.undefined;case"string":return Se.string;case"number":return Number.isNaN(i)?Se.nan:Se.number;case"boolean":return Se.boolean;case"function":return Se.function;case"bigint":return Se.bigint;case"symbol":return Se.symbol;case"object":return Array.isArray(i)?Se.array:i===null?Se.null:i.then&&typeof i.then=="function"&&i.catch&&typeof i.catch=="function"?Se.promise:typeof Map<"u"&&i instanceof Map?Se.map:typeof Set<"u"&&i instanceof Set?Se.set:typeof Date<"u"&&i instanceof Date?Se.date:Se.object;default:return Se.unknown}},ne=tt.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class kn extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(r){return r.message},n={_errors:[]},s=r=>{for(const a of r.issues)if(a.code==="invalid_union")a.unionErrors.map(s);else if(a.code==="invalid_return_type")s(a.returnTypeError);else if(a.code==="invalid_arguments")s(a.argumentsError);else if(a.path.length===0)n._errors.push(t(a));else{let o=n,l=0;for(;l<a.path.length;){const c=a.path[l];l===a.path.length-1?(o[c]=o[c]||{_errors:[]},o[c]._errors.push(t(a))):o[c]=o[c]||{_errors:[]},o=o[c],l++}}};return s(this),n}static assert(e){if(!(e instanceof kn))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,tt.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},n=[];for(const s of this.issues)if(s.path.length>0){const r=s.path[0];t[r]=t[r]||[],t[r].push(e(s))}else n.push(e(s));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}}kn.create=i=>new kn(i);const Co=(i,e)=>{let t;switch(i.code){case ne.invalid_type:i.received===Se.undefined?t="Required":t=`Expected ${i.expected}, received ${i.received}`;break;case ne.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(i.expected,tt.jsonStringifyReplacer)}`;break;case ne.unrecognized_keys:t=`Unrecognized key(s) in object: ${tt.joinValues(i.keys,", ")}`;break;case ne.invalid_union:t="Invalid input";break;case ne.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${tt.joinValues(i.options)}`;break;case ne.invalid_enum_value:t=`Invalid enum value. Expected ${tt.joinValues(i.options)}, received '${i.received}'`;break;case ne.invalid_arguments:t="Invalid function arguments";break;case ne.invalid_return_type:t="Invalid function return type";break;case ne.invalid_date:t="Invalid date";break;case ne.invalid_string:typeof i.validation=="object"?"includes"in i.validation?(t=`Invalid input: must include "${i.validation.includes}"`,typeof i.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${i.validation.position}`)):"startsWith"in i.validation?t=`Invalid input: must start with "${i.validation.startsWith}"`:"endsWith"in i.validation?t=`Invalid input: must end with "${i.validation.endsWith}"`:tt.assertNever(i.validation):i.validation!=="regex"?t=`Invalid ${i.validation}`:t="Invalid";break;case ne.too_small:i.type==="array"?t=`Array must contain ${i.exact?"exactly":i.inclusive?"at least":"more than"} ${i.minimum} element(s)`:i.type==="string"?t=`String must contain ${i.exact?"exactly":i.inclusive?"at least":"over"} ${i.minimum} character(s)`:i.type==="number"?t=`Number must be ${i.exact?"exactly equal to ":i.inclusive?"greater than or equal to ":"greater than "}${i.minimum}`:i.type==="bigint"?t=`Number must be ${i.exact?"exactly equal to ":i.inclusive?"greater than or equal to ":"greater than "}${i.minimum}`:i.type==="date"?t=`Date must be ${i.exact?"exactly equal to ":i.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(i.minimum))}`:t="Invalid input";break;case ne.too_big:i.type==="array"?t=`Array must contain ${i.exact?"exactly":i.inclusive?"at most":"less than"} ${i.maximum} element(s)`:i.type==="string"?t=`String must contain ${i.exact?"exactly":i.inclusive?"at most":"under"} ${i.maximum} character(s)`:i.type==="number"?t=`Number must be ${i.exact?"exactly":i.inclusive?"less than or equal to":"less than"} ${i.maximum}`:i.type==="bigint"?t=`BigInt must be ${i.exact?"exactly":i.inclusive?"less than or equal to":"less than"} ${i.maximum}`:i.type==="date"?t=`Date must be ${i.exact?"exactly":i.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(i.maximum))}`:t="Invalid input";break;case ne.custom:t="Invalid input";break;case ne.invalid_intersection_types:t="Intersection results could not be merged";break;case ne.not_multiple_of:t=`Number must be a multiple of ${i.multipleOf}`;break;case ne.not_finite:t="Number must be finite";break;default:t=e.defaultError,tt.assertNever(i)}return{message:t}};let yg=Co;function Sg(){return yg}const bg=i=>{const{data:e,path:t,errorMaps:n,issueData:s}=i,r=[...t,...s.path||[]],a={...s,path:r};if(s.message!==void 0)return{...s,path:r,message:s.message};let o="";const l=n.filter(c=>!!c).slice().reverse();for(const c of l)o=c(a,{data:e,defaultError:o}).message;return{...s,path:r,message:o}};function ue(i,e){const t=Sg(),n=bg({issueData:e,data:i.data,path:i.path,errorMaps:[i.common.contextualErrorMap,i.schemaErrorMap,t,t===Co?void 0:Co].filter(s=>!!s)});i.common.issues.push(n)}class jt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const n=[];for(const s of t){if(s.status==="aborted")return Ne;s.status==="dirty"&&e.dirty(),n.push(s.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,t){const n=[];for(const s of t){const r=await s.key,a=await s.value;n.push({key:r,value:a})}return jt.mergeObjectSync(e,n)}static mergeObjectSync(e,t){const n={};for(const s of t){const{key:r,value:a}=s;if(r.status==="aborted"||a.status==="aborted")return Ne;r.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),r.value!=="__proto__"&&(typeof a.value<"u"||s.alwaysSet)&&(n[r.value]=a.value)}return{status:e.value,value:n}}}const Ne=Object.freeze({status:"aborted"}),ks=i=>({status:"dirty",value:i}),tn=i=>({status:"valid",value:i}),Bc=i=>i.status==="aborted",zc=i=>i.status==="dirty",ls=i=>i.status==="valid",Nr=i=>typeof Promise<"u"&&i instanceof Promise;var Me;(function(i){i.errToObj=e=>typeof e=="string"?{message:e}:e||{},i.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(Me||(Me={}));class ii{constructor(e,t,n,s){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=s}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Hc=(i,e)=>{if(ls(e))return{success:!0,data:e.value};if(!i.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new kn(i.common.issues);return this._error=t,this._error}}};function Xe(i){if(!i)return{};const{errorMap:e,invalid_type_error:t,required_error:n,description:s}=i;if(e&&(t||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(a,o)=>{const{message:l}=i;return a.code==="invalid_enum_value"?{message:l??o.defaultError}:typeof o.data>"u"?{message:l??n??o.defaultError}:a.code!=="invalid_type"?{message:o.defaultError}:{message:l??t??o.defaultError}},description:s}}class Qe{get description(){return this._def.description}_getType(e){return ni(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:ni(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new jt,ctx:{common:e.parent.common,data:e.data,parsedType:ni(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Nr(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){const n={common:{issues:[],async:(t==null?void 0:t.async)??!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ni(e)},s=this._parseSync({data:e,path:n.path,parent:n});return Hc(n,s)}"~validate"(e){var n,s;const t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ni(e)};if(!this["~standard"].async)try{const r=this._parseSync({data:e,path:[],parent:t});return ls(r)?{value:r.value}:{issues:t.common.issues}}catch(r){(s=(n=r==null?void 0:r.message)==null?void 0:n.toLowerCase())!=null&&s.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(r=>ls(r)?{value:r.value}:{issues:t.common.issues})}async parseAsync(e,t){const n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){const n={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ni(e)},s=this._parse({data:e,path:n.path,parent:n}),r=await(Nr(s)?s:Promise.resolve(s));return Hc(n,r)}refine(e,t){const n=s=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(s):t;return this._refinement((s,r)=>{const a=e(s),o=()=>r.addIssue({code:ne.custom,...n(s)});return typeof Promise<"u"&&a instanceof Promise?a.then(l=>l?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,t){return this._refinement((n,s)=>e(n)?!0:(s.addIssue(typeof t=="function"?t(n,s):t),!1))}_refinement(e){return new hs({schema:this,typeName:Oe.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return ai.create(this,this._def)}nullable(){return fs.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Sn.create(this)}promise(){return Br.create(this,this._def)}or(e){return Fr.create([this,e],this._def)}and(e){return kr.create(this,e,this._def)}transform(e){return new hs({...Xe(this._def),schema:this,typeName:Oe.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Io({...Xe(this._def),innerType:this,defaultValue:t,typeName:Oe.ZodDefault})}brand(){return new Xg({typeName:Oe.ZodBranded,type:this,...Xe(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Uo({...Xe(this._def),innerType:this,catchValue:t,typeName:Oe.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return No.create(this,e)}readonly(){return Oo.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Mg=/^c[^\s-]{8,}$/i,Eg=/^[0-9a-z]+$/,Tg=/^[0-9A-HJKMNP-TV-Z]{26}$/i,wg=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Ag=/^[a-z0-9_-]{21}$/i,Rg=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Cg=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Pg=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Dg="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Po;const Lg=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Ig=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Ug=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Ng=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Og=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Fg=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Vc="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",kg=new RegExp(`^${Vc}$`);function Gc(i){let e="[0-5]\\d";i.precision?e=`${e}\\.\\d{${i.precision}}`:i.precision==null&&(e=`${e}(\\.\\d+)?`);const t=i.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function Bg(i){return new RegExp(`^${Gc(i)}$`)}function zg(i){let e=`${Vc}T${Gc(i)}`;const t=[];return t.push(i.local?"Z?":"Z"),i.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function Hg(i,e){return!!((e==="v4"||!e)&&Lg.test(i)||(e==="v6"||!e)&&Ug.test(i))}function Vg(i,e){if(!Rg.test(i))return!1;try{const[t]=i.split(".");if(!t)return!1;const n=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),s=JSON.parse(atob(n));return!(typeof s!="object"||s===null||"typ"in s&&(s==null?void 0:s.typ)!=="JWT"||!s.alg||e&&s.alg!==e)}catch{return!1}}function Gg(i,e){return!!((e==="v4"||!e)&&Ig.test(i)||(e==="v6"||!e)&&Ng.test(i))}class si extends Qe{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==Se.string){const r=this._getOrReturnCtx(e);return ue(r,{code:ne.invalid_type,expected:Se.string,received:r.parsedType}),Ne}const n=new jt;let s;for(const r of this._def.checks)if(r.kind==="min")e.data.length<r.value&&(s=this._getOrReturnCtx(e,s),ue(s,{code:ne.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),n.dirty());else if(r.kind==="max")e.data.length>r.value&&(s=this._getOrReturnCtx(e,s),ue(s,{code:ne.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),n.dirty());else if(r.kind==="length"){const a=e.data.length>r.value,o=e.data.length<r.value;(a||o)&&(s=this._getOrReturnCtx(e,s),a?ue(s,{code:ne.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}):o&&ue(s,{code:ne.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}),n.dirty())}else if(r.kind==="email")Pg.test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"email",code:ne.invalid_string,message:r.message}),n.dirty());else if(r.kind==="emoji")Po||(Po=new RegExp(Dg,"u")),Po.test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"emoji",code:ne.invalid_string,message:r.message}),n.dirty());else if(r.kind==="uuid")wg.test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"uuid",code:ne.invalid_string,message:r.message}),n.dirty());else if(r.kind==="nanoid")Ag.test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"nanoid",code:ne.invalid_string,message:r.message}),n.dirty());else if(r.kind==="cuid")Mg.test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"cuid",code:ne.invalid_string,message:r.message}),n.dirty());else if(r.kind==="cuid2")Eg.test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"cuid2",code:ne.invalid_string,message:r.message}),n.dirty());else if(r.kind==="ulid")Tg.test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"ulid",code:ne.invalid_string,message:r.message}),n.dirty());else if(r.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),ue(s,{validation:"url",code:ne.invalid_string,message:r.message}),n.dirty()}else r.kind==="regex"?(r.regex.lastIndex=0,r.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"regex",code:ne.invalid_string,message:r.message}),n.dirty())):r.kind==="trim"?e.data=e.data.trim():r.kind==="includes"?e.data.includes(r.value,r.position)||(s=this._getOrReturnCtx(e,s),ue(s,{code:ne.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),n.dirty()):r.kind==="toLowerCase"?e.data=e.data.toLowerCase():r.kind==="toUpperCase"?e.data=e.data.toUpperCase():r.kind==="startsWith"?e.data.startsWith(r.value)||(s=this._getOrReturnCtx(e,s),ue(s,{code:ne.invalid_string,validation:{startsWith:r.value},message:r.message}),n.dirty()):r.kind==="endsWith"?e.data.endsWith(r.value)||(s=this._getOrReturnCtx(e,s),ue(s,{code:ne.invalid_string,validation:{endsWith:r.value},message:r.message}),n.dirty()):r.kind==="datetime"?zg(r).test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{code:ne.invalid_string,validation:"datetime",message:r.message}),n.dirty()):r.kind==="date"?kg.test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{code:ne.invalid_string,validation:"date",message:r.message}),n.dirty()):r.kind==="time"?Bg(r).test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{code:ne.invalid_string,validation:"time",message:r.message}),n.dirty()):r.kind==="duration"?Cg.test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"duration",code:ne.invalid_string,message:r.message}),n.dirty()):r.kind==="ip"?Hg(e.data,r.version)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"ip",code:ne.invalid_string,message:r.message}),n.dirty()):r.kind==="jwt"?Vg(e.data,r.alg)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"jwt",code:ne.invalid_string,message:r.message}),n.dirty()):r.kind==="cidr"?Gg(e.data,r.version)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"cidr",code:ne.invalid_string,message:r.message}),n.dirty()):r.kind==="base64"?Og.test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"base64",code:ne.invalid_string,message:r.message}),n.dirty()):r.kind==="base64url"?Fg.test(e.data)||(s=this._getOrReturnCtx(e,s),ue(s,{validation:"base64url",code:ne.invalid_string,message:r.message}),n.dirty()):tt.assertNever(r);return{status:n.value,value:e.data}}_regex(e,t,n){return this.refinement(s=>e.test(s),{validation:t,code:ne.invalid_string,...Me.errToObj(n)})}_addCheck(e){return new si({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Me.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Me.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Me.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Me.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...Me.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Me.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Me.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Me.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...Me.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...Me.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...Me.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Me.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...Me.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(e==null?void 0:e.offset)??!1,local:(e==null?void 0:e.local)??!1,...Me.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...Me.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...Me.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...Me.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...Me.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...Me.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...Me.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...Me.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...Me.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...Me.errToObj(t)})}nonempty(e){return this.min(1,Me.errToObj(e))}trim(){return new si({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new si({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new si({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}si.create=i=>new si({checks:[],typeName:Oe.ZodString,coerce:(i==null?void 0:i.coerce)??!1,...Xe(i)});function Wg(i,e){const t=(i.toString().split(".")[1]||"").length,n=(e.toString().split(".")[1]||"").length,s=t>n?t:n,r=Number.parseInt(i.toFixed(s).replace(".","")),a=Number.parseInt(e.toFixed(s).replace(".",""));return r%a/10**s}class cs extends Qe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==Se.number){const r=this._getOrReturnCtx(e);return ue(r,{code:ne.invalid_type,expected:Se.number,received:r.parsedType}),Ne}let n;const s=new jt;for(const r of this._def.checks)r.kind==="int"?tt.isInteger(e.data)||(n=this._getOrReturnCtx(e,n),ue(n,{code:ne.invalid_type,expected:"integer",received:"float",message:r.message}),s.dirty()):r.kind==="min"?(r.inclusive?e.data<r.value:e.data<=r.value)&&(n=this._getOrReturnCtx(e,n),ue(n,{code:ne.too_small,minimum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),s.dirty()):r.kind==="max"?(r.inclusive?e.data>r.value:e.data>=r.value)&&(n=this._getOrReturnCtx(e,n),ue(n,{code:ne.too_big,maximum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),s.dirty()):r.kind==="multipleOf"?Wg(e.data,r.value)!==0&&(n=this._getOrReturnCtx(e,n),ue(n,{code:ne.not_multiple_of,multipleOf:r.value,message:r.message}),s.dirty()):r.kind==="finite"?Number.isFinite(e.data)||(n=this._getOrReturnCtx(e,n),ue(n,{code:ne.not_finite,message:r.message}),s.dirty()):tt.assertNever(r);return{status:s.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Me.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Me.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Me.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Me.toString(t))}setLimit(e,t,n,s){return new cs({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:Me.toString(s)}]})}_addCheck(e){return new cs({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Me.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Me.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Me.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Me.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Me.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Me.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:Me.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Me.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Me.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&tt.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(t===null||n.value>t)&&(t=n.value):n.kind==="max"&&(e===null||n.value<e)&&(e=n.value)}return Number.isFinite(t)&&Number.isFinite(e)}}cs.create=i=>new cs({checks:[],typeName:Oe.ZodNumber,coerce:(i==null?void 0:i.coerce)||!1,...Xe(i)});class Bs extends Qe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==Se.bigint)return this._getInvalidInput(e);let n;const s=new jt;for(const r of this._def.checks)r.kind==="min"?(r.inclusive?e.data<r.value:e.data<=r.value)&&(n=this._getOrReturnCtx(e,n),ue(n,{code:ne.too_small,type:"bigint",minimum:r.value,inclusive:r.inclusive,message:r.message}),s.dirty()):r.kind==="max"?(r.inclusive?e.data>r.value:e.data>=r.value)&&(n=this._getOrReturnCtx(e,n),ue(n,{code:ne.too_big,type:"bigint",maximum:r.value,inclusive:r.inclusive,message:r.message}),s.dirty()):r.kind==="multipleOf"?e.data%r.value!==BigInt(0)&&(n=this._getOrReturnCtx(e,n),ue(n,{code:ne.not_multiple_of,multipleOf:r.value,message:r.message}),s.dirty()):tt.assertNever(r);return{status:s.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return ue(t,{code:ne.invalid_type,expected:Se.bigint,received:t.parsedType}),Ne}gte(e,t){return this.setLimit("min",e,!0,Me.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Me.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Me.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Me.toString(t))}setLimit(e,t,n,s){return new Bs({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:Me.toString(s)}]})}_addCheck(e){return new Bs({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Me.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Me.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Me.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Me.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Me.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Bs.create=i=>new Bs({checks:[],typeName:Oe.ZodBigInt,coerce:(i==null?void 0:i.coerce)??!1,...Xe(i)});class Do extends Qe{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==Se.boolean){const n=this._getOrReturnCtx(e);return ue(n,{code:ne.invalid_type,expected:Se.boolean,received:n.parsedType}),Ne}return tn(e.data)}}Do.create=i=>new Do({typeName:Oe.ZodBoolean,coerce:(i==null?void 0:i.coerce)||!1,...Xe(i)});class Or extends Qe{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==Se.date){const r=this._getOrReturnCtx(e);return ue(r,{code:ne.invalid_type,expected:Se.date,received:r.parsedType}),Ne}if(Number.isNaN(e.data.getTime())){const r=this._getOrReturnCtx(e);return ue(r,{code:ne.invalid_date}),Ne}const n=new jt;let s;for(const r of this._def.checks)r.kind==="min"?e.data.getTime()<r.value&&(s=this._getOrReturnCtx(e,s),ue(s,{code:ne.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:"date"}),n.dirty()):r.kind==="max"?e.data.getTime()>r.value&&(s=this._getOrReturnCtx(e,s),ue(s,{code:ne.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:"date"}),n.dirty()):tt.assertNever(r);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Or({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:Me.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:Me.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Or.create=i=>new Or({checks:[],coerce:(i==null?void 0:i.coerce)||!1,typeName:Oe.ZodDate,...Xe(i)});class Wc extends Qe{_parse(e){if(this._getType(e)!==Se.symbol){const n=this._getOrReturnCtx(e);return ue(n,{code:ne.invalid_type,expected:Se.symbol,received:n.parsedType}),Ne}return tn(e.data)}}Wc.create=i=>new Wc({typeName:Oe.ZodSymbol,...Xe(i)});class Xc extends Qe{_parse(e){if(this._getType(e)!==Se.undefined){const n=this._getOrReturnCtx(e);return ue(n,{code:ne.invalid_type,expected:Se.undefined,received:n.parsedType}),Ne}return tn(e.data)}}Xc.create=i=>new Xc({typeName:Oe.ZodUndefined,...Xe(i)});class $c extends Qe{_parse(e){if(this._getType(e)!==Se.null){const n=this._getOrReturnCtx(e);return ue(n,{code:ne.invalid_type,expected:Se.null,received:n.parsedType}),Ne}return tn(e.data)}}$c.create=i=>new $c({typeName:Oe.ZodNull,...Xe(i)});class qc extends Qe{constructor(){super(...arguments),this._any=!0}_parse(e){return tn(e.data)}}qc.create=i=>new qc({typeName:Oe.ZodAny,...Xe(i)});class Yc extends Qe{constructor(){super(...arguments),this._unknown=!0}_parse(e){return tn(e.data)}}Yc.create=i=>new Yc({typeName:Oe.ZodUnknown,...Xe(i)});class ri extends Qe{_parse(e){const t=this._getOrReturnCtx(e);return ue(t,{code:ne.invalid_type,expected:Se.never,received:t.parsedType}),Ne}}ri.create=i=>new ri({typeName:Oe.ZodNever,...Xe(i)});class jc extends Qe{_parse(e){if(this._getType(e)!==Se.undefined){const n=this._getOrReturnCtx(e);return ue(n,{code:ne.invalid_type,expected:Se.void,received:n.parsedType}),Ne}return tn(e.data)}}jc.create=i=>new jc({typeName:Oe.ZodVoid,...Xe(i)});class Sn extends Qe{_parse(e){const{ctx:t,status:n}=this._processInputParams(e),s=this._def;if(t.parsedType!==Se.array)return ue(t,{code:ne.invalid_type,expected:Se.array,received:t.parsedType}),Ne;if(s.exactLength!==null){const a=t.data.length>s.exactLength.value,o=t.data.length<s.exactLength.value;(a||o)&&(ue(t,{code:a?ne.too_big:ne.too_small,minimum:o?s.exactLength.value:void 0,maximum:a?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),n.dirty())}if(s.minLength!==null&&t.data.length<s.minLength.value&&(ue(t,{code:ne.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),n.dirty()),s.maxLength!==null&&t.data.length>s.maxLength.value&&(ue(t,{code:ne.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((a,o)=>s.type._parseAsync(new ii(t,a,t.path,o)))).then(a=>jt.mergeArray(n,a));const r=[...t.data].map((a,o)=>s.type._parseSync(new ii(t,a,t.path,o)));return jt.mergeArray(n,r)}get element(){return this._def.type}min(e,t){return new Sn({...this._def,minLength:{value:e,message:Me.toString(t)}})}max(e,t){return new Sn({...this._def,maxLength:{value:e,message:Me.toString(t)}})}length(e,t){return new Sn({...this._def,exactLength:{value:e,message:Me.toString(t)}})}nonempty(e){return this.min(1,e)}}Sn.create=(i,e)=>new Sn({type:i,minLength:null,maxLength:null,exactLength:null,typeName:Oe.ZodArray,...Xe(e)});function ds(i){if(i instanceof vt){const e={};for(const t in i.shape){const n=i.shape[t];e[t]=ai.create(ds(n))}return new vt({...i._def,shape:()=>e})}else return i instanceof Sn?new Sn({...i._def,type:ds(i.element)}):i instanceof ai?ai.create(ds(i.unwrap())):i instanceof fs?fs.create(ds(i.unwrap())):i instanceof wi?wi.create(i.items.map(e=>ds(e))):i}class vt extends Qe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=tt.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==Se.object){const c=this._getOrReturnCtx(e);return ue(c,{code:ne.invalid_type,expected:Se.object,received:c.parsedType}),Ne}const{status:n,ctx:s}=this._processInputParams(e),{shape:r,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof ri&&this._def.unknownKeys==="strip"))for(const c in s.data)a.includes(c)||o.push(c);const l=[];for(const c of a){const d=r[c],h=s.data[c];l.push({key:{status:"valid",value:c},value:d._parse(new ii(s,h,s.path,c)),alwaysSet:c in s.data})}if(this._def.catchall instanceof ri){const c=this._def.unknownKeys;if(c==="passthrough")for(const d of o)l.push({key:{status:"valid",value:d},value:{status:"valid",value:s.data[d]}});else if(c==="strict")o.length>0&&(ue(s,{code:ne.unrecognized_keys,keys:o}),n.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const d of o){const h=s.data[d];l.push({key:{status:"valid",value:d},value:c._parse(new ii(s,h,s.path,d)),alwaysSet:d in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const c=[];for(const d of l){const h=await d.key,u=await d.value;c.push({key:h,value:u,alwaysSet:d.alwaysSet})}return c}).then(c=>jt.mergeObjectSync(n,c)):jt.mergeObjectSync(n,l)}get shape(){return this._def.shape()}strict(e){return Me.errToObj,new vt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,n)=>{var r,a;const s=((a=(r=this._def).errorMap)==null?void 0:a.call(r,t,n).message)??n.defaultError;return t.code==="unrecognized_keys"?{message:Me.errToObj(e).message??s}:{message:s}}}:{}})}strip(){return new vt({...this._def,unknownKeys:"strip"})}passthrough(){return new vt({...this._def,unknownKeys:"passthrough"})}extend(e){return new vt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new vt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Oe.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new vt({...this._def,catchall:e})}pick(e){const t={};for(const n of tt.objectKeys(e))e[n]&&this.shape[n]&&(t[n]=this.shape[n]);return new vt({...this._def,shape:()=>t})}omit(e){const t={};for(const n of tt.objectKeys(this.shape))e[n]||(t[n]=this.shape[n]);return new vt({...this._def,shape:()=>t})}deepPartial(){return ds(this)}partial(e){const t={};for(const n of tt.objectKeys(this.shape)){const s=this.shape[n];e&&!e[n]?t[n]=s:t[n]=s.optional()}return new vt({...this._def,shape:()=>t})}required(e){const t={};for(const n of tt.objectKeys(this.shape))if(e&&!e[n])t[n]=this.shape[n];else{let r=this.shape[n];for(;r instanceof ai;)r=r._def.innerType;t[n]=r}return new vt({...this._def,shape:()=>t})}keyof(){return Qc(tt.objectKeys(this.shape))}}vt.create=(i,e)=>new vt({shape:()=>i,unknownKeys:"strip",catchall:ri.create(),typeName:Oe.ZodObject,...Xe(e)}),vt.strictCreate=(i,e)=>new vt({shape:()=>i,unknownKeys:"strict",catchall:ri.create(),typeName:Oe.ZodObject,...Xe(e)}),vt.lazycreate=(i,e)=>new vt({shape:i,unknownKeys:"strip",catchall:ri.create(),typeName:Oe.ZodObject,...Xe(e)});class Fr extends Qe{_parse(e){const{ctx:t}=this._processInputParams(e),n=this._def.options;function s(r){for(const o of r)if(o.result.status==="valid")return o.result;for(const o of r)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const a=r.map(o=>new kn(o.ctx.common.issues));return ue(t,{code:ne.invalid_union,unionErrors:a}),Ne}if(t.common.async)return Promise.all(n.map(async r=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await r._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(s);{let r;const a=[];for(const l of n){const c={...t,common:{...t.common,issues:[]},parent:null},d=l._parseSync({data:t.data,path:t.path,parent:c});if(d.status==="valid")return d;d.status==="dirty"&&!r&&(r={result:d,ctx:c}),c.common.issues.length&&a.push(c.common.issues)}if(r)return t.common.issues.push(...r.ctx.common.issues),r.result;const o=a.map(l=>new kn(l));return ue(t,{code:ne.invalid_union,unionErrors:o}),Ne}}get options(){return this._def.options}}Fr.create=(i,e)=>new Fr({options:i,typeName:Oe.ZodUnion,...Xe(e)});function Lo(i,e){const t=ni(i),n=ni(e);if(i===e)return{valid:!0,data:i};if(t===Se.object&&n===Se.object){const s=tt.objectKeys(e),r=tt.objectKeys(i).filter(o=>s.indexOf(o)!==-1),a={...i,...e};for(const o of r){const l=Lo(i[o],e[o]);if(!l.valid)return{valid:!1};a[o]=l.data}return{valid:!0,data:a}}else if(t===Se.array&&n===Se.array){if(i.length!==e.length)return{valid:!1};const s=[];for(let r=0;r<i.length;r++){const a=i[r],o=e[r],l=Lo(a,o);if(!l.valid)return{valid:!1};s.push(l.data)}return{valid:!0,data:s}}else return t===Se.date&&n===Se.date&&+i==+e?{valid:!0,data:i}:{valid:!1}}class kr extends Qe{_parse(e){const{status:t,ctx:n}=this._processInputParams(e),s=(r,a)=>{if(Bc(r)||Bc(a))return Ne;const o=Lo(r.value,a.value);return o.valid?((zc(r)||zc(a))&&t.dirty(),{status:t.value,value:o.data}):(ue(n,{code:ne.invalid_intersection_types}),Ne)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([r,a])=>s(r,a)):s(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}kr.create=(i,e,t)=>new kr({left:i,right:e,typeName:Oe.ZodIntersection,...Xe(t)});class wi extends Qe{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==Se.array)return ue(n,{code:ne.invalid_type,expected:Se.array,received:n.parsedType}),Ne;if(n.data.length<this._def.items.length)return ue(n,{code:ne.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ne;!this._def.rest&&n.data.length>this._def.items.length&&(ue(n,{code:ne.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const r=[...n.data].map((a,o)=>{const l=this._def.items[o]||this._def.rest;return l?l._parse(new ii(n,a,n.path,o)):null}).filter(a=>!!a);return n.common.async?Promise.all(r).then(a=>jt.mergeArray(t,a)):jt.mergeArray(t,r)}get items(){return this._def.items}rest(e){return new wi({...this._def,rest:e})}}wi.create=(i,e)=>{if(!Array.isArray(i))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new wi({items:i,typeName:Oe.ZodTuple,rest:null,...Xe(e)})};class Zc extends Qe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==Se.map)return ue(n,{code:ne.invalid_type,expected:Se.map,received:n.parsedType}),Ne;const s=this._def.keyType,r=this._def.valueType,a=[...n.data.entries()].map(([o,l],c)=>({key:s._parse(new ii(n,o,n.path,[c,"key"])),value:r._parse(new ii(n,l,n.path,[c,"value"]))}));if(n.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const l of a){const c=await l.key,d=await l.value;if(c.status==="aborted"||d.status==="aborted")return Ne;(c.status==="dirty"||d.status==="dirty")&&t.dirty(),o.set(c.value,d.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const l of a){const c=l.key,d=l.value;if(c.status==="aborted"||d.status==="aborted")return Ne;(c.status==="dirty"||d.status==="dirty")&&t.dirty(),o.set(c.value,d.value)}return{status:t.value,value:o}}}}Zc.create=(i,e,t)=>new Zc({valueType:e,keyType:i,typeName:Oe.ZodMap,...Xe(t)});class zs extends Qe{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==Se.set)return ue(n,{code:ne.invalid_type,expected:Se.set,received:n.parsedType}),Ne;const s=this._def;s.minSize!==null&&n.data.size<s.minSize.value&&(ue(n,{code:ne.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),t.dirty()),s.maxSize!==null&&n.data.size>s.maxSize.value&&(ue(n,{code:ne.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),t.dirty());const r=this._def.valueType;function a(l){const c=new Set;for(const d of l){if(d.status==="aborted")return Ne;d.status==="dirty"&&t.dirty(),c.add(d.value)}return{status:t.value,value:c}}const o=[...n.data.values()].map((l,c)=>r._parse(new ii(n,l,n.path,c)));return n.common.async?Promise.all(o).then(l=>a(l)):a(o)}min(e,t){return new zs({...this._def,minSize:{value:e,message:Me.toString(t)}})}max(e,t){return new zs({...this._def,maxSize:{value:e,message:Me.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}zs.create=(i,e)=>new zs({valueType:i,minSize:null,maxSize:null,typeName:Oe.ZodSet,...Xe(e)});class Kc extends Qe{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Kc.create=(i,e)=>new Kc({getter:i,typeName:Oe.ZodLazy,...Xe(e)});class Jc extends Qe{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return ue(t,{received:t.data,code:ne.invalid_literal,expected:this._def.value}),Ne}return{status:"valid",value:e.data}}get value(){return this._def.value}}Jc.create=(i,e)=>new Jc({value:i,typeName:Oe.ZodLiteral,...Xe(e)});function Qc(i,e){return new us({values:i,typeName:Oe.ZodEnum,...Xe(e)})}class us extends Qe{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),n=this._def.values;return ue(t,{expected:tt.joinValues(n),received:t.parsedType,code:ne.invalid_type}),Ne}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const t=this._getOrReturnCtx(e),n=this._def.values;return ue(t,{received:t.data,code:ne.invalid_enum_value,options:n}),Ne}return tn(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return us.create(e,{...this._def,...t})}exclude(e,t=this._def){return us.create(this.options.filter(n=>!e.includes(n)),{...this._def,...t})}}us.create=Qc;class ed extends Qe{_parse(e){const t=tt.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==Se.string&&n.parsedType!==Se.number){const s=tt.objectValues(t);return ue(n,{expected:tt.joinValues(s),received:n.parsedType,code:ne.invalid_type}),Ne}if(this._cache||(this._cache=new Set(tt.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const s=tt.objectValues(t);return ue(n,{received:n.data,code:ne.invalid_enum_value,options:s}),Ne}return tn(e.data)}get enum(){return this._def.values}}ed.create=(i,e)=>new ed({values:i,typeName:Oe.ZodNativeEnum,...Xe(e)});class Br extends Qe{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Se.promise&&t.common.async===!1)return ue(t,{code:ne.invalid_type,expected:Se.promise,received:t.parsedType}),Ne;const n=t.parsedType===Se.promise?t.data:Promise.resolve(t.data);return tn(n.then(s=>this._def.type.parseAsync(s,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Br.create=(i,e)=>new Br({type:i,typeName:Oe.ZodPromise,...Xe(e)});class hs extends Qe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Oe.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:n}=this._processInputParams(e),s=this._def.effect||null,r={addIssue:a=>{ue(n,a),a.fatal?t.abort():t.dirty()},get path(){return n.path}};if(r.addIssue=r.addIssue.bind(r),s.type==="preprocess"){const a=s.transform(n.data,r);if(n.common.async)return Promise.resolve(a).then(async o=>{if(t.value==="aborted")return Ne;const l=await this._def.schema._parseAsync({data:o,path:n.path,parent:n});return l.status==="aborted"?Ne:l.status==="dirty"||t.value==="dirty"?ks(l.value):l});{if(t.value==="aborted")return Ne;const o=this._def.schema._parseSync({data:a,path:n.path,parent:n});return o.status==="aborted"?Ne:o.status==="dirty"||t.value==="dirty"?ks(o.value):o}}if(s.type==="refinement"){const a=o=>{const l=s.refinement(o,r);if(n.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return o.status==="aborted"?Ne:(o.status==="dirty"&&t.dirty(),a(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>o.status==="aborted"?Ne:(o.status==="dirty"&&t.dirty(),a(o.value).then(()=>({status:t.value,value:o.value}))))}if(s.type==="transform")if(n.common.async===!1){const a=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!ls(a))return Ne;const o=s.transform(a.value,r);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(a=>ls(a)?Promise.resolve(s.transform(a.value,r)).then(o=>({status:t.value,value:o})):Ne);tt.assertNever(s)}}hs.create=(i,e,t)=>new hs({schema:i,typeName:Oe.ZodEffects,effect:e,...Xe(t)}),hs.createWithPreprocess=(i,e,t)=>new hs({schema:e,effect:{type:"preprocess",transform:i},typeName:Oe.ZodEffects,...Xe(t)});class ai extends Qe{_parse(e){return this._getType(e)===Se.undefined?tn(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ai.create=(i,e)=>new ai({innerType:i,typeName:Oe.ZodOptional,...Xe(e)});class fs extends Qe{_parse(e){return this._getType(e)===Se.null?tn(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}fs.create=(i,e)=>new fs({innerType:i,typeName:Oe.ZodNullable,...Xe(e)});class Io extends Qe{_parse(e){const{ctx:t}=this._processInputParams(e);let n=t.data;return t.parsedType===Se.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Io.create=(i,e)=>new Io({innerType:i,typeName:Oe.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Xe(e)});class Uo extends Qe{_parse(e){const{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},s=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return Nr(s)?s.then(r=>({status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new kn(n.common.issues)},input:n.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new kn(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}Uo.create=(i,e)=>new Uo({innerType:i,typeName:Oe.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Xe(e)});class td extends Qe{_parse(e){if(this._getType(e)!==Se.nan){const n=this._getOrReturnCtx(e);return ue(n,{code:ne.invalid_type,expected:Se.nan,received:n.parsedType}),Ne}return{status:"valid",value:e.data}}}td.create=i=>new td({typeName:Oe.ZodNaN,...Xe(i)});class Xg extends Qe{_parse(e){const{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}}class No extends Qe{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{const r=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return r.status==="aborted"?Ne:r.status==="dirty"?(t.dirty(),ks(r.value)):this._def.out._parseAsync({data:r.value,path:n.path,parent:n})})();{const s=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return s.status==="aborted"?Ne:s.status==="dirty"?(t.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:n.path,parent:n})}}static create(e,t){return new No({in:e,out:t,typeName:Oe.ZodPipeline})}}class Oo extends Qe{_parse(e){const t=this._def.innerType._parse(e),n=s=>(ls(s)&&(s.value=Object.freeze(s.value)),s);return Nr(t)?t.then(s=>n(s)):n(t)}unwrap(){return this._def.innerType}}Oo.create=(i,e)=>new Oo({innerType:i,typeName:Oe.ZodReadonly,...Xe(e)});var Oe;(function(i){i.ZodString="ZodString",i.ZodNumber="ZodNumber",i.ZodNaN="ZodNaN",i.ZodBigInt="ZodBigInt",i.ZodBoolean="ZodBoolean",i.ZodDate="ZodDate",i.ZodSymbol="ZodSymbol",i.ZodUndefined="ZodUndefined",i.ZodNull="ZodNull",i.ZodAny="ZodAny",i.ZodUnknown="ZodUnknown",i.ZodNever="ZodNever",i.ZodVoid="ZodVoid",i.ZodArray="ZodArray",i.ZodObject="ZodObject",i.ZodUnion="ZodUnion",i.ZodDiscriminatedUnion="ZodDiscriminatedUnion",i.ZodIntersection="ZodIntersection",i.ZodTuple="ZodTuple",i.ZodRecord="ZodRecord",i.ZodMap="ZodMap",i.ZodSet="ZodSet",i.ZodFunction="ZodFunction",i.ZodLazy="ZodLazy",i.ZodLiteral="ZodLiteral",i.ZodEnum="ZodEnum",i.ZodEffects="ZodEffects",i.ZodNativeEnum="ZodNativeEnum",i.ZodOptional="ZodOptional",i.ZodNullable="ZodNullable",i.ZodDefault="ZodDefault",i.ZodCatch="ZodCatch",i.ZodPromise="ZodPromise",i.ZodBranded="ZodBranded",i.ZodPipeline="ZodPipeline",i.ZodReadonly="ZodReadonly"})(Oe||(Oe={}));const xt=si.create,Ye=cs.create,nn=Do.create;ri.create;const Bn=Sn.create,pn=vt.create;Fr.create,kr.create,wi.create;const nd=us.create;Br.create,ai.create,fs.create,pn({sim:pn({windowHours:Ye().positive(),stepSeconds:Ye().positive(),epochUTC:xt(),speedPresets:Bn(Ye())}),links:pn({ground:pn({elevationMaskDeg:Ye(),maxRangeKm:Ye()}),customerToRelay:pn({maxRangeKm:Ye(),antennaHalfAngleDeg:Ye(),steerable:nn(),slewRateDegPerSec:Ye(),handoverTimeSec:Ye()}),relayToRelay:pn({maxRangeKm:Ye(),antennaHalfAngleDeg:Ye(),steerable:nn(),slewRateDegPerSec:Ye(),handoverTimeSec:Ye()}),earthGrazeMarginKm:Ye(),allowRelayToRelay:nn(),maxHops:Ye().int().positive(),capacityModelEnabled:nn().optional(),maxSimultaneousCustomerLinksPerRelay:Ye().optional(),relayDataRateMbps:Ye().optional(),eclipseLimitsRelay:nn().optional()}),relayAltitudeKm:Ye().positive(),raanOffsetDeg:Ye().optional(),phaseOffsetDeg:Ye().optional(),customerLtanOffsetMinutes:Ye().optional(),relayPlanes:Bn(pn({id:xt(),name:xt(),enabled:nn(),altitudeKm:Ye().optional(),sunSynchronous:nn(),inclinationDeg:Ye().optional(),raanDeg:Ye().optional(),ltanHours:Ye().optional(),satsInPlane:Ye().int().positive(),phasingDeg:Ye(),color:xt()})),groundStations:Bn(pn({id:xt(),name:xt(),latDeg:Ye(),lonDeg:Ye(),minElevationDeg:Ye(),enabled:nn(),isIndiaStation:nn().optional(),isAlternateSite:nn().optional(),country:xt().optional(),network:xt().optional()})),customerPresets:Bn(pn({id:xt(),label:xt(),satCount:Ye().int().positive(),altitudeKm:Ye().positive(),inclinationDeg:Ye(),planes:Ye().int().positive(),raanSpreadDeg:Ye(),sunSynchronous:nn().optional(),tleList:Bn(xt()).optional()})),activeCustomerPresetId:xt(),rollout:Bn(pn({id:xt(),label:xt(),enabledRelayPlaneIds:Bn(xt())})),activeRolloutStageId:xt(),scenarios:Bn(pn({id:xt(),label:xt(),stationFilter:nd(["bengaluru_only","all"]),ringEnabled:nn(),relayPlaneIds:Bn(xt()).optional()})),activeScenarioId:xt(),activeAltitudeScenario:nd(["600km_baseline","800km_compact"])});const id={showPresets:!1,showRollout:!1,showCustomOrbit:!1,showABCompare:!1,showGeoDebugBtn:!1,showParamsBtn:!1},Fo=398600.4418,Nt=6378.137,zr=.00108263,$g=7292115146706979e-20,qg=360/365.2422/86400*(Math.PI/180);function Ai(i,e,t=1){const n=i*Math.PI/180,s=e*Math.PI/180,r=t*Math.cos(n)*Math.cos(s),a=t*Math.cos(n)*Math.sin(s),o=t*Math.sin(n);return new C(r,o,-a)}function zn(i){const e=i.x/Nt,t=i.y/Nt,n=i.z/Nt;return new C(e,n,-t)}function mn(i){const e=Nt+i,t=Math.sqrt(Fo/(e*e*e)),n=1.5*zr*(Nt/e)*(Nt/e)*t,s=-qg/n;if(s<-1||s>1)throw new Error(`Invalid SSO altitude ${i} km`);return Math.acos(s)*180/Math.PI}function Yg(i,e="2026-09-21T00:00:00Z"){const t=Vr(0,e);return((Math.atan2(t.y,t.x)+(i-12)*(Math.PI/12))*180/Math.PI%360+360)%360}function Hr(i){const e=Nt+i;return 2*Math.PI*Math.sqrt(e*e*e/Fo)}function jg(i,e){const t=e*Math.PI/180,n=Nt/(Nt+i)*Math.cos(t),s=Math.asin(n);return(Math.PI/2-t-s)*180/Math.PI}function Zg(i,e){const t=e*Math.PI/180,n=Nt;return Math.sqrt(n*n*Math.sin(t)*Math.sin(t)+2*n*i+i*i)-n*Math.sin(t)}class ko{propagate(e,t,n){const s=e.altitudeKm,r=Nt+s;let a=e.inclinationDeg;e.sunSynchronous&&(a=mn(s));const o=a*Math.PI/180,l=Math.sqrt(Fo/(r*r*r)),c=Nt/r*(Nt/r),d=Math.sin(o),h=Math.cos(o),u=l*(1+1.5*zr*c*(1-1.5*d*d)),p=-1.5*zr*c*u*h,_=1.5*zr*c*u*(2-2.5*d*d),g=u+_;let m=0;e.raanDeg!==void 0?m=e.raanDeg*Math.PI/180:e.ltanHours!==void 0&&(m=Yg(e.ltanHours)*Math.PI/180);const f=360/e.satsInPlane,M=e.phasingDeg??0,x=(t*f+M)*Math.PI/180,L=m+p*n,w=x+g*n,R=Math.cos(w),P=Math.sin(w),E=Math.cos(L),y=Math.sin(L),A=r*(R*E-P*y*h),k=r*(R*y+P*E*h),O=r*(P*d),G=r*g*(-P*E-R*y*h),$=r*g*(-P*y+R*E*h),z=r*g*(R*d);return{x:A,y:k,z:O,vx:G,vy:$,vz:z}}}function ps(i,e="2026-09-21T00:00:00Z"){const a=(280.46061837+360.98564736629*(new Date(e).getTime()/1e3/86400+24405875e-1-2451545))%360,l=((a<0?a+360:a)*(Math.PI/180)+$g*i)%(2*Math.PI);return l<0?l+2*Math.PI:l}function oi(i,e){const t=Math.cos(e),n=Math.sin(e);return{x:i.x*t+i.y*n,y:-i.x*n+i.y*t,z:i.z}}function sd(i){const e=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z),t=Math.asin(i.z/e),n=Math.atan2(i.y,i.x);return{latDeg:t*180/Math.PI,lonDeg:n*180/Math.PI,altKm:e-Nt}}function Kg(i,e,t=0){const n=i*Math.PI/180,s=e*Math.PI/180,r=Nt+t;return{x:r*Math.cos(n)*Math.cos(s),y:r*Math.cos(n)*Math.sin(s),z:r*Math.sin(n)}}function Vr(i,e="2026-09-21T00:00:00Z"){const r=(new Date(e).getTime()/1e3+i)/86400+24405875e-1-2451545,a=(280.46+.9856474*r)%360,o=(357.528+.9856003*r)%360*(Math.PI/180),c=(a+1.915*Math.sin(o)+.02*Math.sin(2*o))*Math.PI/180,h=(23.439-4e-7*r)*Math.PI/180,u=1495978707e-1,p=u*Math.cos(c),_=u*Math.sin(c)*Math.cos(h),g=u*Math.sin(c)*Math.sin(h);return{x:p,y:_,z:g,vx:0,vy:0,vz:0}}const Jg=[{id:"bengaluru",name:"Bengaluru",latDeg:13.03,lonDeg:77.52,minElevationDeg:5,enabled:!0,isIndiaStation:!0,country:"India",network:"ISTRAC"},{id:"delhi",name:"Delhi",latDeg:28.61,lonDeg:77.21,minElevationDeg:5,enabled:!0,isIndiaStation:!0,country:"India",network:"SAC"},{id:"port_blair",name:"Port Blair",latDeg:11.62,lonDeg:92.73,minElevationDeg:5,enabled:!0,isIndiaStation:!0,country:"India",network:"ISTRAC"},{id:"brunei",name:"Brunei ground station",latDeg:4.9,lonDeg:114.94,minElevationDeg:5,enabled:!0,country:"Brunei",network:"ISTRAC"},{id:"biak",name:"Biak",latDeg:-1.19,lonDeg:136.08,minElevationDeg:5,enabled:!0,country:"Indonesia",network:"ISTRAC"},{id:"mauritius",name:"Mauritius ground station",latDeg:-20.35,lonDeg:57.55,minElevationDeg:5,enabled:!0,country:"Mauritius",network:"ISTRAC"},{id:"bharati",name:"Bharati (AGEOS)",latDeg:-69.41,lonDeg:76.19,minElevationDeg:5,enabled:!0,country:"Antarctica",network:"NRSC"}],rd={sim:{windowHours:24,stepSeconds:30,epochUTC:"2026-09-21T00:00:00Z",speedPresets:[1,60,600,3600]},links:{ground:{elevationMaskDeg:5,maxRangeKm:3e3},customerToRelay:{maxRangeKm:2e3,antennaHalfAngleDeg:60,steerable:!0,slewRateDegPerSec:5,handoverTimeSec:10},relayToRelay:{maxRangeKm:6e3,backboneMaxRangeKm:5e3,crossPlaneMaxRangeKm:2e3,antennaHalfAngleDeg:75,steerable:!0,slewRateDegPerSec:5,handoverTimeSec:10},earthGrazeMarginKm:100,allowRelayToRelay:!0,maxHops:20,capacityModelEnabled:!1,maxSimultaneousCustomerLinksPerRelay:4,relayDataRateMbps:1e3,eclipseLimitsRelay:!1},relayAltitudeKm:800,raanOffsetDeg:180,phaseOffsetDeg:180,customerLtanOffsetMinutes:45,relayPlanes:[{id:"p1",name:"OXG Ring (P1)",enabled:!0,altitudeKm:800,sunSynchronous:!0,inclinationDeg:98.6,ltanHours:10.5,satsInPlane:14,phasingDeg:25.7142857,color:"#B0BEC5"},{id:"p2",name:"P2 India Ring 1",enabled:!0,altitudeKm:800,sunSynchronous:!1,inclinationDeg:45,raanDeg:0,satsInPlane:14,phasingDeg:0,color:"#B0BEC5"},{id:"p3",name:"P3 India Ring 2",enabled:!0,altitudeKm:800,sunSynchronous:!1,inclinationDeg:45,raanDeg:180,satsInPlane:14,phasingDeg:180,color:"#B0BEC5"},{id:"p4",name:"OXG Ring 2 (P4 Dawn-Dusk)",enabled:!0,altitudeKm:800,sunSynchronous:!0,inclinationDeg:mn(800),ltanHours:6,satsInPlane:14,phasingDeg:0,color:"#B0BEC5"}],groundStations:Jg,customerPresets:[{id:"sso_optical",label:"Optical",satCount:1,altitudeKm:500,inclinationDeg:mn(500),planes:1,raanSpreadDeg:0,sunSynchronous:!0,ltanHours:10},{id:"sar_iceye",label:"SAR",satCount:1,altitudeKm:500,inclinationDeg:mn(500),planes:1,raanSpreadDeg:0,sunSynchronous:!0,ltanHours:6},{id:"sar_2am",label:"RF / SIGINT",satCount:1,altitudeKm:500,inclinationDeg:mn(500),planes:1,raanSpreadDeg:0,sunSynchronous:!0,ltanHours:2},{id:"mid_inc_weather",label:"Weather",satCount:1,altitudeKm:500,inclinationDeg:45,planes:1,raanSpreadDeg:0,sunSynchronous:!1}],activeCustomerPresetId:"sso_optical",rollout:[{id:"ground_only",label:"Ground Only (No OXG)",enabledRelayPlaneIds:[]},{id:"p1_only",label:"P1 Polar SSO Loop",enabledRelayPlaneIds:["p1"]},{id:"p1_p2",label:"P1 + P2 (Polar + India Loop)",enabledRelayPlaneIds:["p1","p2"]},{id:"full_network",label:"P1 + P2 + P3 Full Network",enabledRelayPlaneIds:["p1","p2","p3"]}],activeRolloutStageId:"p1_only",scenarios:[{id:"bengaluru_only",label:"India only",stationFilter:"india_only",ringEnabled:!1,relayPlaneIds:[]},{id:"all_ground",label:"India operated ground stations",stationFilter:"all",ringEnabled:!1,relayPlaneIds:[]},{id:"ring_plus_ground",label:"OXG SSO Ring 1",stationFilter:"all",ringEnabled:!0,relayPlaneIds:["p1"]},{id:"ring_2_sso",label:"OXG SSO Ring 2",stationFilter:"all",ringEnabled:!0,relayPlaneIds:["p1","p4"]},{id:"full_fleet",label:"OXG extended rings",stationFilter:"all",ringEnabled:!0,relayPlaneIds:["p1","p4","p2","p3"]},{id:"india_dual_ring",label:"India Dual-Ring (P2+P3)",stationFilter:"all",ringEnabled:!0,relayPlaneIds:["p2","p3"]}],activeScenarioId:"bengaluru_only",activeAltitudeScenario:"800km_compact",orbitArc:{behindDeg:40,aheadDeg:15,color:"#FF1744",widthPx:1.5,maxOpacity:.7},customerSat:{color:"#FF1744",sizePx:6,glowSize:1.5},relaySat:{color:"#B0BEC5",sizePx:5,glowStrength:1.2},relayLink:{color:"#B0BEC5",widthPx:1.8,opacity:.6}};function Qg(i){const e=typeof window<"u"?window.location.search:"",t=new URLSearchParams(e);return t.set("preset",i.activeCustomerPresetId),t.set("rollout",i.activeRolloutStageId),t.set("scenarioId",i.activeScenarioId),t.set("relayAlt",i.relayAltitudeKm.toString()),t.set("scenario",i.activeAltitudeScenario),i.raanOffsetDeg!==void 0&&t.set("raanOffset",i.raanOffsetDeg.toString()),i.phaseOffsetDeg!==void 0&&t.set("phaseOffset",i.phaseOffsetDeg.toString()),i.customerLtanOffsetMinutes!==void 0&&t.set("custLtanOffset",i.customerLtanOffsetMinutes.toString()),t.toString()}function e_(i,e){const t=new URLSearchParams(e),n=JSON.parse(JSON.stringify(i)),s=t.get("preset");s&&n.customerPresets.some(u=>u.id===s)&&(n.activeCustomerPresetId=s);const r=t.get("rollout");r&&n.rollout.some(u=>u.id===r)&&(n.activeRolloutStageId=r);const a=t.get("scenarioId");a&&n.scenarios.some(u=>u.id===a)&&(n.activeScenarioId=a);const o=t.get("raanOffset");o&&!isNaN(Number(o))&&(n.raanOffsetDeg=Number(o));const l=t.get("phaseOffset");l&&!isNaN(Number(l))&&(n.phaseOffsetDeg=Number(l));const c=t.get("custLtanOffset");c&&!isNaN(Number(c))&&(n.customerLtanOffsetMinutes=Number(c));const d=t.get("relayAlt");if(d&&!isNaN(Number(d))){const u=Number(d);n.relayAltitudeKm=u,n.relayPlanes.forEach(p=>{p.altitudeKm=u})}const h=t.get("scenario");return(h==="600km_baseline"||h==="800km_compact")&&(n.activeAltitudeScenario=h),n}function Gr(i){const e=i.relayPlanes.find(s=>s.id==="p2"),t=(e==null?void 0:e.raanDeg)??0,n=(e==null?void 0:e.phasingDeg)??0;return i.relayPlanes.map(s=>{const r=s.altitudeKm??i.relayAltitudeKm,a=s.sunSynchronous?mn(r):s.inclinationDeg??98.6;let o=s.raanDeg,l=s.phasingDeg??0;if(s.id==="p3"){const c=i.raanOffsetDeg??180,d=i.phaseOffsetDeg??180;o=(t+c)%360,l=(n+d)%360}return{id:s.id,name:s.name,altitudeKm:r,inclinationDeg:a,sunSynchronous:s.sunSynchronous,raanDeg:o,ltanHours:s.ltanHours,satsInPlane:s.satsInPlane,phasingDeg:l,color:s.color}})}function t_(i,e){const t=e.x-i.x,n=e.y-i.y,s=e.z-i.z;return Math.sqrt(t*t+n*n+s*s)}function n_(i,e){const t=i*Math.PI/180,n=e*Math.PI/180;return{x:Math.cos(t)*Math.cos(n),y:Math.cos(t)*Math.sin(n),z:Math.sin(t)}}function i_(i,e){const t=Kg(e.latDeg,e.lonDeg,0),n=n_(e.latDeg,e.lonDeg),s=i.x-t.x,r=i.y-t.y,a=i.z-t.z,o=Math.sqrt(s*s+r*r+a*a);if(o===0)return{elevationDeg:90,slantRangeKm:0};const l=(s*n.x+r*n.y+a*n.z)/o,c=Math.max(-1,Math.min(1,l));return{elevationDeg:Math.asin(c)*180/Math.PI,slantRangeKm:o}}function Ri(i,e,t,n){if(!e.enabled)return!1;const{elevationDeg:s,slantRangeKm:r}=i_(i,e),a=n!==void 0?n:e.minElevationDeg;return s>=a&&r<=t}function s_(i,e,t=100){const n=Nt+t,s=e.x-i.x,r=e.y-i.y,a=e.z-i.z,o=s*s+r*r+a*a;if(o===0)return!0;const l=-(i.x*s+i.y*r+i.z*a)/o,c=Math.max(0,Math.min(1,l)),d=i.x+c*s,h=i.y+c*r,u=i.z+c*a;return d*d+h*h+u*u>=n*n}function Bo(i,e,t,n,s=100,r=!0){const a=t_(i,e);if(a>t||a===0)return!1;if(!r){const o=e.x-i.x,l=e.y-i.y,c=e.z-i.z,d=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z),h=(i.x*o+i.y*l+i.z*c)/(d*a),u=Math.acos(Math.max(-1,Math.min(1,h)))*180/Math.PI;if(u>n&&180-u>n)return!1}return s_(i,e,s)}function r_(i,e,t,n){const s=t.filter(u=>u.enabled),r=new Map,a=new Map,o=[];for(const u of i)for(const p of s)Ri(u.ecef,p,n.ground.maxRangeKm,n.ground.elevationMaskDeg)&&(a.has(u.id)||a.set(u.id,{customerSatId:u.id,groundStationId:p.id,pathNodeIds:[u.id,p.id],hops:1}));if(e.length===0)return{withOXGPaths:a,groundOnlyPaths:a,activeLinkEdges:o};const l=new Map;i.forEach(u=>l.set(u.id,{id:u.id,type:"customer",sat:u})),e.forEach(u=>l.set(u.id,{id:u.id,type:"relay",sat:u})),s.forEach(u=>l.set(u.id,{id:u.id,type:"ground",gs:u}));const c=new Map;l.forEach((u,p)=>c.set(p,[]));const d=(u,p,_)=>{c.get(u).push(p),c.get(p).push(u),o.push({fromId:u,toId:p,distanceKm:_})};for(const u of i)for(const p of s)Ri(u.ecef,p,n.ground.maxRangeKm,n.ground.elevationMaskDeg)&&d(u.id,p.id,0);for(const u of i)for(const p of e)Bo(u.eci,p.eci,n.customerToRelay.maxRangeKm,n.customerToRelay.antennaHalfAngleDeg,n.earthGrazeMarginKm,n.customerToRelay.steerable)&&d(u.id,p.id,0);if(n.allowRelayToRelay)for(let u=0;u<e.length;u++)for(let p=u+1;p<e.length;p++){const _=e[u],g=e[p],m=_.planeId??_.id.split("-")[1],f=g.planeId??g.id.split("-")[1],b=m===f?n.relayToRelay.backboneMaxRangeKm??5e3:n.relayToRelay.crossPlaneMaxRangeKm??1500;Bo(_.eci,g.eci,b,n.relayToRelay.antennaHalfAngleDeg,n.earthGrazeMarginKm,n.relayToRelay.steerable)&&d(_.id,g.id,0)}for(const u of e)for(const p of s)Ri(u.ecef,p,n.ground.maxRangeKm,n.ground.elevationMaskDeg)&&d(u.id,p.id,0);const h=new Set(s.map(u=>u.id));for(const u of i){const p=[{nodeId:u.id,path:[u.id]}],_=new Set([u.id]);let g=null;for(;p.length>0;){const{nodeId:m,path:f}=p.shift(),M=f.length-1;if(M>n.maxHops)continue;if(h.has(m)&&M>=1){g={customerSatId:u.id,groundStationId:m,pathNodeIds:f,hops:M};break}const b=c.get(m)??[];for(const x of b)_.has(x)||(_.add(x),p.push({nodeId:x,path:[...f,x]}))}g&&r.set(u.id,g)}return{withOXGPaths:r,groundOnlyPaths:a,activeLinkEdges:o}}function ad(i,e,t,n,s){if(i.length===0||t===0)return{inContactPercent:0,averageSessionSec:0,worstWaitSec:0,averageWaitSec:0,orbitStatesPropagated:0,linkPairsEvaluated:0,contactWindowsCount:0,totalContactTimeSec:0};let r=0,a=0,o=0,l=0;for(const _ of i){const g=e.filter(x=>x.customerSatId===_).sort((x,L)=>x.startTimeSec-L.startTimeSec),m=[];for(const x of g)if(m.length===0)m.push({start:x.startTimeSec,end:x.endTimeSec});else{const L=m[m.length-1];x.startTimeSec<=L.end?L.end=Math.max(L.end,x.endTimeSec):m.push({start:x.startTimeSec,end:x.endTimeSec})}let f=0;m.forEach(x=>{f+=Math.min(t,x.end)-Math.max(0,x.start)}),r+=f,a+=m.length;const M=[];let b=0;for(const x of m)x.start>b&&M.push(x.start-b),b=Math.max(b,x.end);b<t&&M.push(t-b);for(const x of M)x>o&&(o=x),l+=x*x}const c=i.length*t,d=r/c*100,h=a>0?r/a:0,u=o,p=l/(2*c);return{inContactPercent:Math.min(100,Math.max(0,d)),averageSessionSec:h,worstWaitSec:u,averageWaitSec:p,orbitStatesPropagated:n,linkPairsEvaluated:s,contactWindowsCount:e.length,totalContactTimeSec:r}}function od(i,e){var ae,ce,Ee,Fe,Ze;const t=new ko,n=i.sim.windowHours*3600,s=i.sim.stepSeconds,r=Math.floor(n/s),a=i.customerPresets.find(F=>F.id===i.activeCustomerPresetId)??i.customerPresets[0],o=i.rollout.find(F=>F.id===i.activeRolloutStageId)??i.rollout[0],l=((ae=i.scenarios)==null?void 0:ae.find(F=>F.id===i.activeScenarioId))??((ce=i.scenarios)==null?void 0:ce[0]),c=l!=null&&l.ringEnabled?l.relayPlaneIds??["p1"]:[],d=i.relayPlanes.filter(F=>F.enabled?l?c.includes(F.id):o.enabledRelayPlaneIds.includes(F.id):!1),h=[],u=Math.ceil(a.satCount/a.planes),p=((Ee=i.relayPlanes.find(F=>F.id==="p1"))==null?void 0:Ee.ltanHours)??10.5,_=(i.customerLtanOffsetMinutes??45)/60,g=a.ltanHours??p+_;for(let F=0;F<a.planes;F++){const Z=F*a.raanSpreadDeg/a.planes,Y=a.sunSynchronous?mn(a.altitudeKm):a.inclinationDeg;h.push({id:`cust-plane-${F}`,name:`${a.label} Plane ${F+1}`,altitudeKm:a.altitudeKm,inclinationDeg:Y,sunSynchronous:a.sunSynchronous,raanDeg:a.raanSpreadDeg>0?Z:void 0,ltanHours:a.sunSynchronous?(g+F*24/a.planes)%24:void 0,satsInPlane:u})}const m=Gr(i),f=new Set(d.map(F=>F.id)),M=m.filter(F=>f.has(F.id)),b=[],x=[],L=[],w=[],R=[];let P=0;for(let F=0;F<a.planes;F++)for(let Z=0;Z<u;Z++)P<a.satCount&&(R.push(`cust-sat-${P}`),P++);const E=new Map,y=new Map,A=new Map,k=new Map,O=[],G=[];let $=0,z=0;for(let F=0;F<=r;F++){const Z=F*s;b.push(Z);const Y=ps(Z,i.sim.epochUTC),Q=[];let oe=0;for(let me=0;me<h.length;me++){const De=h[me];for(let ge=0;ge<De.satsInPlane&&!(oe>=a.satCount);ge++){const $e=t.propagate(De,ge,Z),be=oi($e,Y),T=sd(be);Q.push({id:R[oe],name:`Customer Sat ${oe+1}`,type:"customer",planeId:De.id,indexInPlane:ge,eci:$e,ecef:be,latLonAlt:T}),oe++}}x.push(Q);const _e=[];for(let me=0;me<M.length;me++){const De=M[me];for(let ge=0;ge<De.satsInPlane;ge++){const $e=t.propagate(De,ge,Z),be=oi($e,Y),T=sd(be);_e.push({id:`relay-${De.id}-${ge}`,name:`${De.name} #${ge+1}`,type:"relay",planeId:De.id,indexInPlane:ge,eci:$e,ecef:be,latLonAlt:T})}}L.push(_e),$+=Q.length+_e.length,z+=Q.length*_e.length+Q.length*i.groundStations.length;const Re=((Fe=i.scenarios)==null?void 0:Fe.find(me=>me.id===i.activeScenarioId))??((Ze=i.scenarios)==null?void 0:Ze[0])??{stationFilter:"bengaluru_only",ringEnabled:!1},qe=i.groundStations.filter(me=>me.enabled?Re.stationFilter==="india_only"||Re.stationFilter==="bengaluru_only"?me.isIndiaStation===!0||me.country==="India"||me.id==="bengaluru"||me.id==="delhi"||me.id==="port_blair":!0:!1),je=Re.ringEnabled?_e:[],{withOXGPaths:mt,groundOnlyPaths:N,activeLinkEdges:Wt}=r_(Q,je,qe,i.links);w.push(Wt);for(const me of R){const De=mt.get(me),ge=De!==void 0,$e=E.get(me)??!1;if(ge&&!$e)E.set(me,!0),y.set(me,Z);else if(!ge&&$e){E.set(me,!1);const be=y.get(me)??Z;O.push({customerSatId:me,targetId:De?De.groundStationId:"oxg-network",targetType:"relay",startTimeSec:be,endTimeSec:Z,durationSec:Z-be,isDirectGround:!1})}}for(const me of R){const De=N.get(me),ge=De!==void 0,$e=A.get(me)??!1;if(ge&&!$e)A.set(me,!0),k.set(me,Z);else if(!ge&&$e){A.set(me,!1);const be=k.get(me)??Z;G.push({customerSatId:me,targetId:De?De.groundStationId:"ground-network",targetType:"ground",startTimeSec:be,endTimeSec:Z,durationSec:Z-be,isDirectGround:!0})}}}for(const F of R){if(E.get(F)){const Z=y.get(F)??0;O.push({customerSatId:F,targetId:"oxg-network",targetType:"relay",startTimeSec:Z,endTimeSec:n,durationSec:n-Z,isDirectGround:!1})}if(A.get(F)){const Z=k.get(F)??0;G.push({customerSatId:F,targetId:"ground-network",targetType:"ground",startTimeSec:Z,endTimeSec:n,durationSec:n-Z,isDirectGround:!0})}}const te=ad(R,O,n,$,z),W=ad(R,G,n,$,z);return{config:i,timestampsSec:b,customerSats:x,relaySats:L,activeLinkEdgesTrajectory:w,contactWindowsWithOXG:O,contactWindowsGroundOnly:G,metricsWithOXG:te,metricsGroundOnly:W}}const ld={type:"change"},zo={type:"start"},cd={type:"end"},Wr=new rr,dd=new ti,a_=Math.cos(70*ml.DEG2RAD),bt=new C,Gt=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ho=1e-6;class o_ extends xg{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rn.ROTATE,MIDDLE:rn.DOLLY,RIGHT:rn.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new mi,this._lastTargetPosition=new C,this._quat=new mi().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Oc,this._sphericalDelta=new Oc,this._scale=1,this._panOffset=new C,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new C,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c_.bind(this),this._onPointerDown=l_.bind(this),this._onPointerUp=d_.bind(this),this._onContextMenu=__.bind(this),this._onMouseWheel=f_.bind(this),this._onKeyDown=p_.bind(this),this._onTouchStart=m_.bind(this),this._onTouchMove=g_.bind(this),this._onMouseDown=u_.bind(this),this._onMouseMove=h_.bind(this),this._interceptControlDown=v_.bind(this),this._interceptControlUp=x_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ld),this.update(),this.state=lt.NONE}update(e=null){const t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Gt:n>Math.PI&&(n-=Gt),s<-Math.PI?s+=Gt:s>Math.PI&&(s-=Gt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=bt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Wr.origin.copy(this.object.position),Wr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wr.direction))<a_?this.object.lookAt(this.target):(dd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wr.intersectPlane(dd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ho||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ho||this._lastTargetPosition.distanceToSquared(this.target)>Ho?(this.dispatchEvent(ld),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gt/60*this.autoRotateSpeed*e:Gt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;bt.copy(s).sub(this.target);let r=bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function l_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function c_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function d_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cd),this.state=lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function u_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case rn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=lt.DOLLY;break;case rn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}break;case rn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(zo)}function h_(i){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function f_(i){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(i.preventDefault(),this.dispatchEvent(zo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(cd))}function p_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function m_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=lt.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=lt.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(zo)}function g_(i){switch(this._trackPointer(i),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=lt.NONE}}function __(i){this.enabled!==!1&&i.preventDefault()}function v_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const y_=[{latDeg:0,lonDeg:0,label:"(0°N, 0°E) Gulf of Guinea",color:16711765},{latDeg:0,lonDeg:90,label:"(0°N, 90°E) Indian Ocean",color:58879},{latDeg:0,lonDeg:180,label:"(0°N, 180°) Pacific Ocean",color:7798531},{latDeg:90,lonDeg:0,label:"(90°N) North Pole",color:16771584},{latDeg:12.97,lonDeg:77.59,label:"Bengaluru (12.97°N, 77.59°E)",color:16748800},{latDeg:28.61,lonDeg:77.21,label:"Delhi (28.61°N, 77.21°E)",color:16748800},{latDeg:51.48,lonDeg:0,label:"Greenwich (51.48°N, 0°E)",color:14696699},{latDeg:78.2,lonDeg:15.4,label:"Svalbard (78.2°N, 15.4°E)",color:58879}];class S_{constructor(e){j(this,"group");this.group=new fn,e.add(this.group),this.buildMarkers(),this.setVisible(!1)}buildMarkers(){for(const t of y_){const n=Ai(t.latDeg,t.lonDeg,1.008),s=n.clone().normalize(),r=new Fs(.018,16,16),a=new As({color:t.color}),o=new Ht(r,a);o.position.copy(n),this.group.add(o);const l=new wo(.025,.032,32),c=new As({color:t.color,side:vn,transparent:!0,opacity:.85}),d=new Ht(l,c);d.position.copy(n),d.quaternion.setFromUnitVectors(new C(0,0,1),s),this.group.add(d);const h=n.clone().add(s.clone().multiplyScalar(.08)),u=new wt().setFromPoints([n,h]),p=new Mo({color:t.color,linewidth:3}),_=new Pc(u,p);this.group.add(_)}}setVisible(e){this.group.visible=e}}const Vo={earthDim:0,nightAmbient:.2,nightBoost:.9,earthBrightness:1.65,earthSaturation:.7,earthContrast:.82,oceanLift:.2,glintStrength:0,surfaceHaze:1,showOceanMask:!1,lightingMode:"sun",azimuthDeg:55,elevationDeg:20,terminatorWidth:1.9,terminatorPower:3,terminatorTint:.05,terminatorTintColor:"#5a8fe0",autoRotateSpeed:.3,idleResumeSec:5,layers:{...{stations:!0,stationLabels:!1,orbitLines:!1,relaySatellites:!0,relayLinks:!0,customerSatellites:!0,links:!1,groundLinks:!0,geoDebugMarkers:!1}},orbitArc:{behindDeg:40,aheadDeg:15,color:"#FF1744",widthPx:1.5,maxOpacity:.7},customerSat:{color:"#FF1744",sizePx:6,glowSize:1.5},relaySat:{color:"#B0BEC5",sizePx:5,glowStrength:1.2},relayLink:{color:"#B0BEC5",widthPx:1.8,opacity:.6}};function b_(i,e,t=Vo){return new hn({toneMapped:!1,uniforms:{dayTexture:{value:i},nightTexture:{value:e},sunDirection:{value:new C(1,0,0)},cameraDirection:{value:new C(0,0,1)},earthDim:{value:t.earthDim},nightAmbient:{value:t.nightAmbient},nightBoost:{value:t.nightBoost},earthBrightness:{value:t.earthBrightness},earthSaturation:{value:t.earthSaturation},earthContrast:{value:t.earthContrast},oceanLift:{value:t.oceanLift},glintStrength:{value:t.glintStrength},surfaceHaze:{value:t.surfaceHaze},showOceanMask:{value:t.showOceanMask?1:0},terminatorWidth:{value:t.terminatorWidth},terminatorPower:{value:t.terminatorPower},terminatorTint:{value:t.terminatorTint},terminatorTintColor:{value:new Be(t.terminatorTintColor)}},vertexShader:`
      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vWorldPosition;

      void main() {
        vUv = uv;
        vNormal = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,fragmentShader:`
      uniform sampler2D dayTexture;
      uniform sampler2D nightTexture;
      uniform vec3 sunDirection;
      uniform vec3 cameraDirection;

      uniform float earthDim;
      uniform float nightAmbient;
      uniform float nightBoost;
      uniform float earthBrightness;
      uniform float earthSaturation;
      uniform float earthContrast;

      uniform float oceanLift;
      uniform float glintStrength;
      uniform float surfaceHaze;
      uniform float showOceanMask;

      uniform float terminatorWidth;
      uniform float terminatorPower;
      uniform float terminatorTint;
      uniform vec3 terminatorTintColor;

      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vWorldPosition;

      vec3 applySaturation(vec3 color, float sat) {
        float gray = dot(color, vec3(0.299, 0.587, 0.114));
        return mix(vec3(gray), color, sat);
      }

      vec3 applyContrast(vec3 color, float contrast) {
        return clamp((color - 0.5) * contrast + 0.5, 0.0, 1.0);
      }

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(sunDirection);
        vec3 viewDir = normalize(cameraDirection);

        float L = dot(normal, lightDir);
        
        // Wide, smooth terminator
        float low = -0.35 * max(0.1, terminatorWidth);
        float high = 0.45 * max(0.1, terminatorWidth);
        float rawLit = smoothstep(low, high, L);
        float lit = pow(rawLit, max(0.1, terminatorPower));

        vec4 dayTexColor = texture2D(dayTexture, vUv);
        vec4 nightTexColor = texture2D(nightTexture, vUv);

        // Ocean Mask Detection (blue dominant, low red)
        float blueDominance = dayTexColor.b - max(dayTexColor.r, dayTexColor.g * 0.85);
        float oceanMask = clamp(blueDominance * 4.5, 0.0, 1.0);

        if (showOceanMask > 0.5) {
          gl_FragColor = vec4(vec3(oceanMask), 1.0);
          return;
        }

        // Base Day Color
        vec3 dayColor = dayTexColor.rgb;

        // Ocean Lift towards deep vibrant blue (#1f5fa8 = vec3(0.12, 0.37, 0.66))
        vec3 targetOceanBlue = vec3(0.12, 0.37, 0.66);
        dayColor = mix(dayColor, targetOceanBlue, oceanMask * oceanLift);

        // Soft Ocean Sun Glint
        vec3 reflectDir = reflect(-lightDir, normal);
        float spec = pow(max(0.0, dot(reflectDir, viewDir)), 12.0);
        vec3 glintColor = vec3(0.85, 0.95, 1.0) * spec * oceanMask * glintStrength;
        dayColor += glintColor;

        // Color adjustments (Saturation, Contrast, Brightness & Dimming)
        dayColor = applySaturation(dayColor, earthSaturation);
        dayColor = applyContrast(dayColor, earthContrast);
        dayColor *= earthBrightness * (1.0 - earthDim * 0.7);

        // Cool Twilight Tint (#5a8fe0) mixed into day color between lit 0.1 and 0.5
        float tintBand = smoothstep(0.1, 0.3, lit) * (1.0 - smoothstep(0.3, 0.5, lit));
        dayColor = mix(dayColor, terminatorTintColor, tintBand * terminatorTint);

        // Surface Fresnel Blue Haze on lit limb (#5aa2ff = vec3(0.35, 0.64, 1.0)), scaled by lit
        float viewDotNormal = max(0.0, dot(viewDir, normal));
        float surfaceFresnel = pow(1.0 - viewDotNormal, 3.0);
        vec3 hazeColor = vec3(0.35, 0.64, 1.0) * surfaceFresnel * surfaceHaze * lit;
        dayColor += hazeColor;

        // Day Lit by smooth lighting (darken day side by lighting, no texture crossfade)
        vec3 dayLit = dayColor * mix(nightAmbient, 1.0, lit);

        // Night lights fade in separately once actually dark
        float nightLightsFactor = 1.0 - smoothstep(0.05, 0.45, lit);
        vec3 nightLights = nightTexColor.rgb * nightBoost * nightLightsFactor;

        // Final additive combination (linear blend)
        vec3 finalRGB = dayLit + nightLights;
        gl_FragColor = vec4(finalRGB, 1.0);
      }
    `})}function M_(){return new hn({uniforms:{sunDirection:{value:new C(1,0,0)},cameraDirection:{value:new C(0,0,1)},surfaceHaze:{value:.5}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      void main() {
        vNormal = normalize(modelMatrix * vec4(normal, 0.0)).xyz;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,fragmentShader:`
      uniform vec3 sunDirection;
      uniform vec3 cameraDirection;
      uniform float surfaceHaze;

      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(sunDirection);
        vec3 viewDir = normalize(cameraDirection);

        // Fresnel glow around limb
        float fresnel = pow(1.0 - max(0.0, dot(viewDir, normal)), 2.5);

        // Brighter on lit limb, nearly invisible on dark limb
        float litFactor = clamp(dot(normal, lightDir) + 0.3, 0.0, 1.0);

        vec3 atmosphereColor = vec3(0.35, 0.68, 1.0);
        float alpha = fresnel * litFactor * 0.7 * surfaceHaze;
        gl_FragColor = vec4(atmosphereColor, alpha);
      }
    `,blending:Kr,side:kt,transparent:!0,depthWrite:!1})}class E_{constructor(e,t=Vo){j(this,"scene");j(this,"camera");j(this,"renderer");j(this,"controls");j(this,"earthGroup");j(this,"earthMesh");j(this,"earthMat",null);j(this,"atmosphereMesh");j(this,"atmosphereMat");j(this,"geoDebug");j(this,"config");j(this,"container");j(this,"animationFrameId",null);j(this,"onRenderCallbacks",[]);j(this,"tSec",0);j(this,"isUserInteracting",!1);j(this,"lastInteractionTime",0);j(this,"autoRotateEnabled",!0);j(this,"isFlyingTo",!1);j(this,"flyStartCamPos",new C);j(this,"flyTargetCamPos",new C);j(this,"flyStartTime",0);j(this,"flyDurationMs",1500);this.container=e,this.config={...Vo,...t},this.scene=new dg,this.scene.background=new Be(131848);const n=e.clientWidth||window.innerWidth,s=e.clientHeight||window.innerHeight;this.camera=new en(45,n/s,.01,100);const r=Ai(20,78,3.9);this.camera.position.copy(r),this.renderer=new cg({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(n,s),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Pt,this.renderer.toneMapping=Qo,this.renderer.toneMappingExposure=1,e.appendChild(this.renderer.domElement),this.controls=new o_(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=1.1,this.controls.maxDistance=25,this.controls.addEventListener("start",()=>{this.isUserInteracting=!0}),this.controls.addEventListener("end",()=>{this.isUserInteracting=!1,this.lastInteractionTime=performance.now()}),this.earthGroup=new fn,this.scene.add(this.earthGroup);const a=new Fs(1,128,64),o=new As({color:660520,wireframe:!0});this.earthMesh=new Ht(a,o),this.earthGroup.add(this.earthMesh);const l=new Fs(1.02,64,64);this.atmosphereMat=M_(),this.atmosphereMesh=new Ht(l,this.atmosphereMat),this.scene.add(this.atmosphereMesh),this.addStarsBackground(),this.geoDebug=new S_(this.earthMesh),this.loadEarthTextures(),window.addEventListener("resize",this.onWindowResize.bind(this)),document.addEventListener("visibilitychange",this.onVisibilityChange.bind(this)),this.animate()}loadEarthTextures(){const e=new gg,t=this.renderer.capabilities.getMaxAnisotropy(),n=h=>{h.colorSpace=Pt,h.anisotropy=t,h.generateMipmaps=!0,h.wrapS=Xs,h.wrapT=$n},s=h=>{const u=document.createElement("canvas");u.width=4,u.height=4;const p=u.getContext("2d");p&&(p.fillStyle=`#${h.toString(16).padStart(6,"0")}`,p.fillRect(0,0,4,4));const _=new Os(u);return n(_),_};let r=null,a=null;const o="textures/earth_day_2048.webp",l="textures/earth_night_2048.webp";let c=0;const d=()=>{c++,c===2&&(r||(r=s(1715020)),a||(a=s(330260)),this.earthMat=b_(r,a,this.config),this.earthMesh.material=this.earthMat,console.log("Earth 2048 textures / shader active."),window.innerWidth>=768&&(e.load("textures/earth_day_4096.webp",h=>{n(h),this.earthMat&&(this.earthMat.uniforms.dayTexture.value=h,this.earthMat.uniformsNeedUpdate=!0)}),e.load("textures/earth_night_4096.webp",h=>{n(h),this.earthMat&&(this.earthMat.uniforms.nightTexture.value=h,this.earthMat.uniformsNeedUpdate=!0)})))};e.load(o,h=>{n(h),r=h,d()},void 0,h=>{console.warn(`Failed loading day texture: ${o}, activating procedural fallback`,h),r=s(1715020),d()}),e.load(l,h=>{n(h),a=h,d()},void 0,h=>{console.warn(`Failed loading night texture: ${l}, activating procedural fallback`,h),a=s(330260),d()})}addStarsBackground(){const t=new Float32Array(45e3);for(let a=0;a<15e3*3;a+=3){const o=80+Math.random()*20,l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1);t[a]=o*Math.sin(c)*Math.cos(l),t[a+1]=o*Math.sin(c)*Math.sin(l),t[a+2]=o*Math.cos(c)}const n=new wt;n.setAttribute("position",new Jt(t,3));const s=new Dc({color:16777215,size:.08,transparent:!0,opacity:.75,depthWrite:!1}),r=new ug(n,s);this.scene.add(r)}setFrontView(){this.camera.position.set(2.5,0,0),this.controls.target.set(0,0,0),this.controls.update()}setTopView(){this.camera.position.set(0,3.2,0),this.controls.target.set(0,0,0),this.controls.update()}resetView(){this.focusIndia()}focusIndia(){const e=Ai(20,78,3.9);this.flyToPosition(e)}focusSatellite(e){const t=new C(e.x,e.y,e.z),s=t.clone().normalize().clone().multiplyScalar(1.45);this.camera.position.copy(s),this.controls.target.copy(t),this.controls.update()}focusSatelliteLimb(e){const t=new C(e.x,e.y,e.z),n=t.clone().normalize(),s=new C(-n.z,.2,n.x).normalize(),r=t.clone().add(s.clone().multiplyScalar(.75)).add(n.clone().multiplyScalar(.25));this.camera.position.copy(r),this.controls.target.copy(t),this.controls.update()}flyToPosition(e){this.isFlyingTo=!0,this.flyStartCamPos.copy(this.camera.position),this.flyTargetCamPos.copy(e),this.flyStartTime=performance.now()}updateUniforms(){if(!this.earthMat)return;const e=this.earthMat.uniforms;e.earthDim.value=this.config.earthDim,e.nightAmbient.value=this.config.nightAmbient,e.nightBoost.value=this.config.nightBoost,e.earthBrightness.value=this.config.earthBrightness,e.earthSaturation.value=this.config.earthSaturation,e.earthContrast.value=this.config.earthContrast,e.oceanLift.value=this.config.oceanLift,e.glintStrength.value=this.config.glintStrength,e.surfaceHaze.value=this.config.surfaceHaze,e.showOceanMask.value=this.config.showOceanMask?1:0,e.terminatorWidth.value=this.config.terminatorWidth,e.terminatorPower.value=this.config.terminatorPower,e.terminatorTint.value=this.config.terminatorTint,e.terminatorTintColor.value.set(this.config.terminatorTintColor),this.atmosphereMat&&(this.atmosphereMat.uniforms.surfaceHaze.value=this.config.surfaceHaze)}setSunView(){const e=ps(this.tSec),t=Vr(this.tSec),n=oi(t,e),s=Math.hypot(n.x,n.y,n.z),r=new C(n.x/s,n.z/s,-n.y/s).normalize();this.flyToPosition(r.clone().multiplyScalar(3.2))}updateTime(e){this.tSec=e,this.tSec<0&&(this.tSec=0),this.earthMesh.rotation.y=0;const t=this.camera.position.clone().normalize();let n;if(this.config.lightingMode==="sun"){const s=ps(e),r=Vr(e),a=oi(r,s),o=Math.hypot(a.x,a.y,a.z);n=new C(a.x/o,a.z/o,-a.y/o).normalize()}else{const s=this.config.azimuthDeg*Math.PI/180,r=this.config.elevationDeg*Math.PI/180,a=Math.sin(s)*Math.cos(r),o=Math.sin(r),l=Math.cos(s)*Math.cos(r);n=new C(a,o,l).normalize().applyQuaternion(this.camera.quaternion).normalize()}this.earthMat&&(this.earthMat.uniforms.sunDirection.value.copy(n),this.earthMat.uniforms.cameraDirection.value.copy(t),this.updateUniforms()),this.atmosphereMat&&(this.atmosphereMat.uniforms.sunDirection.value.copy(n),this.atmosphereMat.uniforms.cameraDirection.value.copy(t))}addRenderCallback(e){this.onRenderCallbacks.push(e)}animate(){if(document.hidden)return;this.animationFrameId=requestAnimationFrame(this.animate.bind(this));const e=performance.now();if(!this.isUserInteracting&&e-this.lastInteractionTime>5e3&&this.autoRotateEnabled&&!this.isFlyingTo?(this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.3):this.controls.autoRotate=!1,this.isFlyingTo){const t=e-this.flyStartTime,n=Math.min(1,t/this.flyDurationMs),s=.5-Math.cos(n*Math.PI)/2;this.camera.position.lerpVectors(this.flyStartCamPos,this.flyTargetCamPos,s),this.controls.target.set(0,0,0),n>=1&&(this.isFlyingTo=!1)}this.controls.update();for(const t of this.onRenderCallbacks)t();this.renderer.render(this.scene,this.camera)}onVisibilityChange(){!document.hidden&&this.animationFrameId===null&&this.animate()}onWindowResize(){const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),window.removeEventListener("resize",this.onWindowResize.bind(this)),document.removeEventListener("visibilitychange",this.onVisibilityChange.bind(this)),this.renderer.dispose()}}const ud=new Yn,Xr=new C;class hd extends _g{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Tt(e,3)),this.setAttribute("uv",new Tt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ro(t,6,1);return this.setAttribute("instanceStart",new yn(n,3,0)),this.setAttribute("instanceEnd",new yn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ro(t,6,1);return this.setAttribute("instanceColorStart",new yn(n,3,0)),this.setAttribute("instanceColorEnd",new yn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new hg(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ud.setFromBufferAttribute(t),this.boundingBox.union(ud))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Xr.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xr)),Xr.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xr));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}re.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Le(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},Vt.line={uniforms:uo.merge([re.common,re.fog,re.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class ms extends hn{static get type(){return"LineMaterial"}constructor(e){super({uniforms:uo.clone(Vt.line.uniforms),vertexShader:Vt.line.vertexShader,fragmentShader:Vt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Go=new ct,fd=new C,pd=new C,At=new ct,Rt=new ct,bn=new ct,Wo=new C,Xo=new pt,Ct=new vg,md=new C,$r=new Yn,qr=new vi,Mn=new ct;let En,Ci;function gd(i,e,t){return Mn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Mn.multiplyScalar(1/Mn.w),Mn.x=Ci/t.width,Mn.y=Ci/t.height,Mn.applyMatrix4(i.projectionMatrixInverse),Mn.multiplyScalar(1/Mn.w),Math.abs(Math.max(Mn.x,Mn.y))}function T_(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Ct.start.fromBufferAttribute(s,o),Ct.end.fromBufferAttribute(r,o),Ct.applyMatrix4(t);const c=new C,d=new C;En.distanceSqToSegment(Ct.start,Ct.end,d,c),d.distanceTo(c)<Ci*.5&&e.push({point:d,pointOnLine:c,distance:En.origin.distanceTo(d),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function w_(i,e,t){const n=e.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,d=Math.min(o.instanceCount,l.count),h=-e.near;En.at(1,bn),bn.w=1,bn.applyMatrix4(e.matrixWorldInverse),bn.applyMatrix4(n),bn.multiplyScalar(1/bn.w),bn.x*=r.x/2,bn.y*=r.y/2,bn.z=0,Wo.copy(bn),Xo.multiplyMatrices(e.matrixWorldInverse,a);for(let u=0,p=d;u<p;u++){if(At.fromBufferAttribute(l,u),Rt.fromBufferAttribute(c,u),At.w=1,Rt.w=1,At.applyMatrix4(Xo),Rt.applyMatrix4(Xo),At.z>h&&Rt.z>h)continue;if(At.z>h){const b=At.z-Rt.z,x=(At.z-h)/b;At.lerp(Rt,x)}else if(Rt.z>h){const b=Rt.z-At.z,x=(Rt.z-h)/b;Rt.lerp(At,x)}At.applyMatrix4(n),Rt.applyMatrix4(n),At.multiplyScalar(1/At.w),Rt.multiplyScalar(1/Rt.w),At.x*=r.x/2,At.y*=r.y/2,Rt.x*=r.x/2,Rt.y*=r.y/2,Ct.start.copy(At),Ct.start.z=0,Ct.end.copy(Rt),Ct.end.z=0;const g=Ct.closestPointToPointParameter(Wo,!0);Ct.at(g,md);const m=ml.lerp(At.z,Rt.z,g),f=m>=-1&&m<=1,M=Wo.distanceTo(md)<Ci*.5;if(f&&M){Ct.start.fromBufferAttribute(l,u),Ct.end.fromBufferAttribute(c,u),Ct.start.applyMatrix4(a),Ct.end.applyMatrix4(a);const b=new C,x=new C;En.distanceSqToSegment(Ct.start,Ct.end,x,b),t.push({point:x,pointOnLine:b,distance:En.origin.distanceTo(x),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}class A_ extends Ht{constructor(e=new hd,t=new ms({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)fd.fromBufferAttribute(t,a),pd.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+fd.distanceTo(pd);const r=new Ro(s,2,1);return e.setAttribute("instanceDistanceStart",new yn(r,1,0)),e.setAttribute("instanceDistanceEnd",new yn(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;En=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;Ci=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),qr.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Ci*.5;else{const h=Math.max(s.near,qr.distanceToPoint(En.origin));c=gd(s,h,l.resolution)}if(qr.radius+=c,En.intersectsSphere(qr)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),$r.copy(o.boundingBox).applyMatrix4(a);let d;if(n)d=Ci*.5;else{const h=Math.max(s.near,$r.distanceToPoint(En.origin));d=gd(s,h,l.resolution)}$r.expandByScalar(d),En.intersectsBox($r)!==!1&&(n?T_(this,t):w_(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Go),this.material.uniforms.resolution.value.set(Go.z,Go.w))}}class Hs extends hd{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Yr extends A_{constructor(e=new Hs,t=new ms({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}class R_{constructor(e){j(this,"group");j(this,"arcLines",new Map);j(this,"fullOrbitLines",[]);j(this,"propagator");j(this,"relayRingSegmentLines",[]);this.group=new fn,e.add(this.group),this.propagator=new ko,typeof window<"u"&&window.addEventListener("resize",()=>this.onResize())}onResize(){if(typeof window>"u")return;const e=window.innerWidth,t=window.innerHeight;for(const n of this.arcLines.values())n.material.resolution.set(e,t);for(const n of this.relayRingSegmentLines)n.material.resolution.set(e,t)}updateCustomerArc(e,t,n,s=!0,r=!0){const a=n??{behindDeg:40,aheadDeg:15};if(!s||e.length===0){for(const _ of this.arcLines.values())_.visible=!1;return}const o=new Set(e.map(_=>_.id));for(const[_,g]of this.arcLines.entries())o.has(_)||(g.visible=!1);const l=80,c=r?new Be("#FF1744"):new Be("#D32F2F"),d=r?.95:.55,h=r?3.2:2,u=typeof window<"u"?window.innerWidth:1920,p=typeof window<"u"?window.innerHeight:1080;for(const _ of e){let g=this.arcLines.get(_.id);if(!g){const R=new Hs,P=new ms({color:c,linewidth:h,resolution:new Le(u,p),transparent:!0,opacity:d,depthTest:!0,depthWrite:!1});g=new Yr(R,P),this.group.add(g),this.arcLines.set(_.id,g)}g.visible=!0,g.material.color.copy(c),g.material.linewidth=h,g.material.opacity=d,g.material.resolution.set(u,p);const m=Hr(_.altitudeKm),f=a.behindDeg/360*m,M=a.aheadDeg/360*m,b=t-f,L=t+M-b,w=[];for(let R=0;R<l;R++){const P=b+R/(l-1)*L,E=this.propagator.propagate(_,0,P),y=ps(P),A=oi(E,y),k=zn(A);w.push(k.x,k.y,k.z)}g.geometry.setPositions(w),g.computeLineDistances()}}updateRelayRingLinks(e,t,n=!0,s=1){const r=t??{color:"#B0BEC5",widthPx:1.2,opacity:.6};if(!n||e.length===0){for(const u of this.relayRingSegmentLines)u.visible=!1;return}const a={p1:"#B0BEC5",p2:"#B0BEC5",p3:"#B0BEC5",p4:"#B0BEC5"},o=new Map;for(const u of e){let p=u.planeId;p||(u.id.startsWith("relay-p1-")?p="p1":u.id.startsWith("relay-p2-")?p="p2":u.id.startsWith("relay-p3-")?p="p3":u.id.startsWith("relay-p4-")?p="p4":p="p1"),o.has(p)||o.set(p,[]),o.get(p).push(u)}const l=[];for(const[u,p]of o.entries()){let _=[...p];if(p.length>=3){const b=new C(p[0].eci.x,p[0].eci.y,p[0].eci.z).normalize();let x=new C;for(let P=1;P<p.length;P++){const E=new C(p[P].eci.x,p[P].eci.y,p[P].eci.z).normalize();if(Math.abs(b.dot(E))<.99){x.copy(E);break}}const L=b.clone().cross(x).normalize(),w=b.clone(),R=L.clone().cross(w).normalize();_.sort((P,E)=>{const y=new C(P.eci.x,P.eci.y,P.eci.z),A=new C(E.eci.x,E.eci.y,E.eci.z),k=Math.atan2(y.dot(R),y.dot(w)),O=Math.atan2(A.dot(R),A.dot(w)),G=k<0?k+2*Math.PI:k,$=O<0?O+2*Math.PI:O;return G-$})}else _.sort((b,x)=>(b.indexInPlane??0)-(x.indexInPlane??0));const g=a[u]??r.color,m=new Be(g),f=_.map(b=>zn(b.ecef)),M=f.length;for(let b=0;b<M;b++)l.push({a:f[b],b:f[(b+1)%M],color:m})}const c=l.length,d=typeof window<"u"?window.innerWidth:1920,h=typeof window<"u"?window.innerHeight:1080;for(;this.relayRingSegmentLines.length<c;){const u=new Hs,p=new ms({color:new Be(16777215),linewidth:r.widthPx,resolution:new Le(d,h),transparent:!0,opacity:r.opacity,depthTest:!0,depthWrite:!1}),_=new Yr(u,p);this.group.add(_),this.relayRingSegmentLines.push(_)}for(let u=c;u<this.relayRingSegmentLines.length;u++)this.relayRingSegmentLines[u].visible=!1;for(let u=0;u<c;u++){const p=l[u],_=this.relayRingSegmentLines[u];_.visible=!0,_.geometry.setPositions([p.a.x,p.a.y,p.a.z,p.b.x,p.b.y,p.b.z]),_.computeLineDistances();const g=p.b.clone().sub(p.a),m=g.lengthSq();let f=0;if(m>0){const w=-p.a.dot(g)/m;f=Math.max(0,Math.min(1,w))}const L=(p.a.clone().add(g.multiplyScalar(f)).length()<1.005?.15:r.opacity)*s;_.material.color.copy(p.color),_.material.linewidth=r.widthPx,_.material.opacity=L,_.material.resolution.set(d,h)}}updateOrbits(e,t,n=0){for(const o of this.fullOrbitLines)o.geometry.dispose(),o.material.dispose(),this.group.remove(o);this.fullOrbitLines=[];const s=180,r=ps(n),a=(o,l)=>{const c=[],d={...o,satsInPlane:1,phasingDeg:0};for(let g=0;g<=s;g++){const m=g/s,f=this.propagator.propagate(d,m,n),M=oi(f,r);c.push(zn(M))}const h=new wt().setFromPoints(c),u=o.color??l,p=new Mo({color:new Be(u),transparent:!0,opacity:.6}),_=new Pc(h,p);this.group.add(_),this.fullOrbitLines.push(_)};t.forEach(o=>a(o,"#00e5ff"))}setVisible(e){for(const t of this.fullOrbitLines)t.visible=e}clear(){for(const e of this.arcLines.values())e.visible=!1;for(const e of this.relayRingSegmentLines)e.visible=!1;for(const e of this.fullOrbitLines)e.geometry.dispose(),e.material.dispose(),this.group.remove(e);this.fullOrbitLines=[]}}class C_{constructor(e){j(this,"group");j(this,"customerSprites",[]);j(this,"relaySprites",[]);j(this,"relayMesh",null);j(this,"planeColorMap",new Map);j(this,"glowTexture");j(this,"tooltipElem",null);j(this,"currentHoveredSat",null);this.group=new fn,e.add(this.group),this.glowTexture=this.createGlowTexture(),this.initTooltip()}getCurrentHoveredSat(){return this.currentHoveredSat}createGlowTexture(){if(typeof document>"u")return new Os(null);const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.2,"rgba(255, 255, 255, 0.95)"),n.addColorStop(.4,"rgba(255, 255, 255, 0.6)"),n.addColorStop(.7,"rgba(255, 255, 255, 0.2)"),n.addColorStop(1,"rgba(255, 255, 255, 0.0)"),t.fillStyle=n,t.beginPath(),t.arc(32,32,32,0,Math.PI*2),t.fill();const s=new Os(e);return s.needsUpdate=!0,s}initTooltip(){typeof document>"u"||(this.tooltipElem=document.createElement("div"),this.tooltipElem.className="oxg-sat-tooltip hidden",document.body.appendChild(this.tooltipElem))}setPlaneColors(e){this.planeColorMap.clear();for(const[t,n]of Object.entries(e))this.planeColorMap.set(t,new Be(n))}setLayers(e,t){for(const n of this.customerSprites)n.visible=e;for(const n of this.relaySprites)n.visible=t;this.relayMesh&&(this.relayMesh.visible=t),e||this.hideTooltip()}updateSatellites(e,t,n,s,r=1,a=1,o){const l=n??{sizePx:6},c=new Be("#FF1744"),d=new Be("#D32F2F");for(;this.customerSprites.length<e.length;){const g=new Ds({map:this.glowTexture,color:c,transparent:!0,depthTest:!0,depthWrite:!1,sizeAttenuation:!1,toneMapped:!1}),m=new wr(g);this.group.add(m),this.customerSprites.push(m)}for(;this.customerSprites.length>e.length;){const g=this.customerSprites.pop();g.material.dispose(),this.group.remove(g)}for(let g=0;g<e.length;g++){const m=e[g],f=zn(m.ecef),M=this.customerSprites[g],b=M.material;if(M.position.copy(f),o?o.has(m.id):!0){b.color.copy(c),b.opacity=1;const L=l.sizePx*2.2/window.innerHeight;M.scale.set(L,L,1)}else{b.color.copy(d),b.opacity=.85;const L=l.sizePx*1.5/window.innerHeight;M.scale.set(L,L,1)}}const h=s??{color:"#B0BEC5",sizePx:5,glowStrength:1.2},u=new Be(h.color),_=h.sizePx*h.glowStrength/window.innerHeight*a;for(;this.relaySprites.length<t.length;){const g=new Ds({map:this.glowTexture,color:u,transparent:!0,depthTest:!0,depthWrite:!1,sizeAttenuation:!1,toneMapped:!1}),m=new wr(g);this.group.add(m),this.relaySprites.push(m)}for(;this.relaySprites.length>t.length;){const g=this.relaySprites.pop();g.material.dispose(),this.group.remove(g)}for(let g=0;g<t.length;g++){const m=t[g],f=zn(m.ecef),M=this.relaySprites[g];M.position.copy(f),M.scale.set(_,_,1);const b=this.planeColorMap.get(m.planeId)??u,x=M.material;x.color.copy(b),x.opacity=r}}handleMouseMove(e,t,n,s){if(this.customerSprites.length===0||n.length===0){this.hideTooltip();return}const r=e.clientX,a=e.clientY;let o=null,c="ontouchstart"in window||navigator.maxTouchPoints>0?36:20;const d=new C;for(let h=0;h<n.length;h++){const u=n[h],p=zn(u.ecef);if(d.copy(p).project(t),d.z>=1)continue;const _=(d.x*.5+.5)*window.innerWidth,g=(-(d.y*.5)+.5)*window.innerHeight,m=Math.hypot(_-r,g-a);m<c&&(c=m,o=u)}if(o&&this.tooltipElem){this.currentHoveredSat=o;const h=s?`${s.altitudeKm} km`:`${o.latLonAlt.altKm.toFixed(0)} km`,u=s?`${s.inclinationDeg.toFixed(1)}° SSPO`:"SSPO";this.tooltipElem.innerHTML=`
        <div class="oxg-tooltip-title">Customer Satellite (${o.id})</div>
        <div class="oxg-tooltip-detail">${h} • ${u}</div>
      `,this.tooltipElem.style.left=`${r+12}px`,this.tooltipElem.style.top=`${a-12}px`,this.tooltipElem.classList.remove("hidden")}else this.hideTooltip()}hideTooltip(){this.tooltipElem&&this.tooltipElem.classList.add("hidden"),this.currentHoveredSat=null}clear(){for(;this.customerSprites.length>0;){const e=this.customerSprites.pop();e.material.dispose(),this.group.remove(e)}for(;this.relaySprites.length>0;){const e=this.relaySprites.pop();e.material.dispose(),this.group.remove(e)}this.hideTooltip()}}function P_(i){const e=document.createElement("canvas");e.width=384,e.height=80;const t=e.getContext("2d");if(t){t.clearRect(0,0,384,80),t.fillStyle="rgba(2, 6, 18, 0.85)",t.strokeStyle="rgba(255, 255, 255, 0.4)",t.lineWidth=3;const a=8,o=8,l=368,c=64,d=16;t.beginPath(),t.moveTo(a+d,o),t.arcTo(a+l,o,a+l,o+c,d),t.arcTo(a+l,o+c,a,o+c,d),t.arcTo(a,o+c,a,o,d),t.arcTo(a,o,a+l,o,d),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#ffffff",t.font="Bold 28px system-ui, -apple-system, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,192,40)}const n=new Os(e);n.colorSpace=Pt;const s=new Ds({map:n,transparent:!0,depthTest:!1}),r=new wr(s);return r.scale.set(.18,.038,1),r}class D_{constructor(e){j(this,"group");j(this,"stationItems",[]);j(this,"stationTexture");j(this,"tooltipElem",null);j(this,"showStations",!1);j(this,"showLabels",!1);this.group=new fn,e.add(this.group),this.stationTexture=this.createCircleInSquareTexture(),this.tooltipElem=document.createElement("div"),this.tooltipElem.className="oxg-sat-tooltip hidden",document.body.appendChild(this.tooltipElem)}createCircleInSquareTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");t.clearRect(0,0,64,64),t.strokeStyle="#ffffff",t.fillStyle="#ffffff",t.lineWidth=5,t.strokeRect(8,8,48,48),t.beginPath(),t.arc(32,32,11,0,Math.PI*2),t.closePath(),t.fill();const n=new Os(e);return n.colorSpace=Pt,n.needsUpdate=!0,n}updateGroundStations(e){for(;this.group.children.length>0;){const t=this.group.children[0];this.group.remove(t)}this.stationItems=[];for(const t of e){if(!t.enabled)continue;const n=Ai(t.latDeg,t.lonDeg,1.002),s=new Ds({map:this.stationTexture,color:16777215,transparent:!0,opacity:.95,depthTest:!0,depthWrite:!1,sizeAttenuation:!1,toneMapped:!1}),r=new wr(s);r.position.copy(n);const a=10.5/window.innerHeight;r.scale.set(a,a,1),this.group.add(r);const o=t.name.split("(")[0].trim(),l=P_(o),c=Ai(t.latDeg,t.lonDeg,1.035);l.position.copy(c),this.group.add(l),this.stationItems.push({id:t.id,config:t,markerSprite:r,labelSprite:l})}}setLayers(e,t){this.showStations=e,this.showLabels=t}update(e){const t=new C,n=e.position.clone(),s=5.5/window.innerHeight;for(const r of this.stationItems){r.markerSprite.scale.set(s,s,1),r.markerSprite.getWorldPosition(t);const a=t.clone().normalize(),o=n.clone().sub(t).normalize(),l=a.dot(o);let c=0;if(l>=.3?c=1:l>.1&&(c=(l-.1)/.2),!this.showStations||c<=.001?r.markerSprite.visible=!1:(r.markerSprite.visible=!0,r.markerSprite.material.opacity=.9*c),!this.showLabels||c<=.001)r.labelSprite.visible=!1;else{r.labelSprite.visible=!0;const d=r.labelSprite.material;d.opacity=c}}}handleMouseMove(e,t){if(!this.showStations||this.stationItems.length===0){this.hideTooltip();return}const n=e.clientX,s=e.clientY;let r=null,o="ontouchstart"in window||navigator.maxTouchPoints>0?36:20;const l=new C,c=new C;for(const d of this.stationItems){if(!d.markerSprite.visible||(d.markerSprite.getWorldPosition(c),l.copy(c).project(t),l.z>=1))continue;const h=(l.x*.5+.5)*window.innerWidth,u=(-(l.y*.5)+.5)*window.innerHeight,p=Math.hypot(h-n,u-s);p<o&&(o=p,r=d)}if(r&&this.tooltipElem){const d=r.config,h=d.name.split("(")[0].trim(),u=d.country??(d.isIndiaStation?"India":"Ground Station");this.tooltipElem.innerHTML=`
        <div class="oxg-tooltip-title">${h}</div>
        <div class="oxg-tooltip-detail">${u}</div>
      `,this.tooltipElem.style.left=`${n+12}px`,this.tooltipElem.style.top=`${s-12}px`,this.tooltipElem.classList.remove("hidden")}else this.hideTooltip()}hideTooltip(){this.tooltipElem&&this.tooltipElem.classList.add("hidden")}}class L_{constructor(e){j(this,"group");j(this,"linkPairs",new Map);this.group=new fn,e.add(this.group),typeof window<"u"&&window.addEventListener("resize",()=>this.onResize())}onResize(){if(typeof window>"u")return;const e=window.innerWidth,t=window.innerHeight;for(const n of this.linkPairs.values())n.line.material.resolution.set(e,t)}updateActiveLinks(e,t,n,s,r,a=.016){const o=new Map;t.forEach(h=>o.set(h.id,zn(h.ecef))),n.forEach(h=>o.set(h.id,zn(h.ecef))),s.forEach(h=>{const u=Ai(h.latDeg,h.lonDeg,1.002);o.set(h.id,u)});const l=new Set,c=.6,d=a/.2;for(const h of e){const u=o.get(h.fromId),p=o.get(h.toId);if(!u||!p)continue;const _=`${h.fromId}_${h.toId}`,g=`${h.toId}_${h.fromId}`,m=h.fromId<h.toId?_:g,f=h.fromId.startsWith("cust-")||h.toId.startsWith("cust-"),M=h.fromId.startsWith("relay-")&&h.toId.startsWith("relay-");let b=!1,x=f?16717636:11583173,L=1;if(M){const R=h.fromId.split("-"),P=h.toId.split("-");if(b=R[1]!==P[1],b)x=11583173,L=1.5;else continue}l.add(m);let w=this.linkPairs.get(m);if(w)w.line.material.color.setHex(x),w.line.material.linewidth=L;else{const R=new Hs,P=new ms({color:x,linewidth:L,resolution:new Le(window.innerWidth,window.innerHeight),transparent:!0,opacity:c,depthTest:!0,depthWrite:!1}),E=new Yr(R,P);this.group.add(E),w={key:m,fromId:h.fromId,toId:h.toId,line:E,currentOpacity:c,isRelayToRelay:M},this.linkPairs.set(m,w)}}for(const[h,u]of this.linkPairs.entries()){const _=l.has(h)?c:0;if(u.currentOpacity<_?u.currentOpacity=Math.min(_,u.currentOpacity+c*d):u.currentOpacity>_&&(u.currentOpacity=Math.max(_,u.currentOpacity-c*d)),u.currentOpacity<=.001)u.line.visible=!1;else{const g=o.get(u.fromId),m=o.get(u.toId);if(g&&m){u.line.visible=!0,u.line.geometry.setPositions([g.x,g.y,g.z,m.x,m.y,m.z]),u.line.computeLineDistances();const f=typeof window<"u"?window.innerWidth:1920,M=typeof window<"u"?window.innerHeight:1080;u.line.material.opacity=u.currentOpacity,u.line.material.resolution.set(f,M)}else u.line.visible=!1}}}setVisible(e){this.group.visible=e}clear(){for(const e of this.linkPairs.values())e.line.geometry.dispose(),e.line.material.dispose(),this.group.remove(e.line);this.linkPairs.clear()}}class I_{constructor(e){j(this,"group");j(this,"linkPairs",new Map);this.group=new fn,e.add(this.group),typeof window<"u"&&window.addEventListener("resize",()=>this.onResize())}onResize(){if(!(typeof window>"u"))for(const e of this.linkPairs.values())e.line.material.resolution.set(window.innerWidth,window.innerHeight)}updateGroundLinks(e,t,n,s=.016,r=!0,a=[]){const o=t.filter(_=>_.enabled),l=a??[],c=.6,d=s/.2,h=[...e,...l],u=new Map;h.forEach(_=>u.set(_.id,zn(_.ecef))),o.forEach(_=>u.set(_.id,Ai(_.latDeg,_.lonDeg,1.002)));const p=new Set;if(r){for(const _ of h)for(const g of o){const m=`${_.id}_${g.id}`;Ri(_.ecef,g,n.ground.maxRangeKm,n.ground.elevationMaskDeg)&&(p.add(m),this.ensureLinkPair(m,_.id,g.id))}for(const _ of e)for(const g of l){const m=`${_.id}_${g.id}`;Bo(_.ecef,g.ecef,n.customerToRelay.maxRangeKm,n.customerToRelay.antennaHalfAngleDeg,n.earthGrazeMarginKm,n.customerToRelay.steerable)&&(p.add(m),this.ensureLinkPair(m,_.id,g.id))}}for(const[_,g]of this.linkPairs.entries()){const f=p.has(_)?c:0;if(g.currentOpacity<f?g.currentOpacity=Math.min(f,g.currentOpacity+c*d):g.currentOpacity>f&&(g.currentOpacity=Math.max(f,g.currentOpacity-c*d)),g.currentOpacity<=.001)g.line.visible=!1;else{const M=u.get(g.satId),b=u.get(g.targetId);if(M&&b){g.line.visible=!0,g.line.geometry.setPositions([M.x,M.y,M.z,b.x,b.y,b.z]),g.line.computeLineDistances();const x=typeof window<"u"?window.innerWidth:1920,L=typeof window<"u"?window.innerHeight:1080;g.line.material.opacity=g.currentOpacity,g.line.material.resolution.set(x,L)}else g.line.visible=!1}}}ensureLinkPair(e,t,n){if(!this.linkPairs.has(e)){const r=t.startsWith("cust-")||n.startsWith("cust-")?16717636:11583173,a=typeof window<"u"?window.innerWidth:1920,o=typeof window<"u"?window.innerHeight:1080,l=new Hs,c=new ms({color:r,linewidth:1,resolution:new Le(a,o),transparent:!0,opacity:0,depthTest:!0,depthWrite:!1}),d=new Yr(l,c);this.group.add(d),this.linkPairs.set(e,{key:e,satId:t,targetId:n,line:d,currentOpacity:0})}}setVisible(e){this.group.visible=e}clear(){for(const e of this.linkPairs.values())e.line.geometry.dispose(),e.line.material.dispose(),this.group.remove(e.line);this.linkPairs.clear()}}function U_(i){i.innerHTML=""}class N_{constructor(e){j(this,"element");this.element=document.createElement("div"),this.element.className="oxg-metrics-dock",e.appendChild(this.element)}updateMetrics(e,t){const n=s=>{if(s<60)return`${Math.round(s)}s`;const r=s/60;return r<60?`${r.toFixed(1)}m`:`${(r/60).toFixed(1)}h`};this.element.innerHTML=`
      <div class="oxg-kpi-bar">
        <!-- Metric 1: % In Contact -->
        <div class="oxg-kpi-card">
          <span class="oxg-kpi-label">IN CONTACT</span>
          <div class="oxg-kpi-main">
            <span class="oxg-kpi-val">${e.inContactPercent.toFixed(1)}%</span>
            <span class="oxg-kpi-sub">${t.inContactPercent.toFixed(1)}% ground</span>
          </div>
        </div>

        <!-- Metric 2: Average Wait -->
        <div class="oxg-kpi-card" title="Expected wait time = Σ(gap²)/(2T)">
          <span class="oxg-kpi-label">AVG WAIT</span>
          <div class="oxg-kpi-main">
            <span class="oxg-kpi-val">${n(e.averageWaitSec)}</span>
            <span class="oxg-kpi-sub">${n(t.averageWaitSec)} ground</span>
          </div>
        </div>

        <!-- Metric 3: Average Session -->
        <div class="oxg-kpi-card">
          <span class="oxg-kpi-label">AVG SESSION</span>
          <div class="oxg-kpi-main">
            <span class="oxg-kpi-val">${n(e.averageSessionSec)}</span>
            <span class="oxg-kpi-sub">${n(t.averageSessionSec)} ground</span>
          </div>
        </div>

        <!-- Metric 4: Worst Wait -->
        <div class="oxg-kpi-card">
          <span class="oxg-kpi-label">WORST WAIT</span>
          <div class="oxg-kpi-main">
            <span class="oxg-kpi-val">${n(e.worstWaitSec)}</span>
            <span class="oxg-kpi-sub">${n(t.worstWaitSec)} ground</span>
          </div>
        </div>
      </div>
    `}}class O_{constructor(e,t,n,s=id){j(this,"element");j(this,"config");j(this,"uiFlags");j(this,"isPlaying",!0);j(this,"speedMultiplier",600);j(this,"currentTSec",0);j(this,"isMobileExpanded",!1);j(this,"onConfigChangeCb");j(this,"onPlaybackChangeCb");j(this,"onScrubCb");j(this,"onResetViewCb");this.config=t,this.uiFlags=s,this.onConfigChangeCb=n.onConfigChange,this.onPlaybackChangeCb=n.onPlaybackChange,this.onScrubCb=n.onScrub,this.onResetViewCb=n.onResetView,this.element=document.createElement("div"),this.element.className="oxg-controls-dock",e.appendChild(this.element),this.render()}setConfig(e){this.config=e,this.render()}updateTime(e){this.currentTSec=e;const t=this.element.querySelector("#oxg-scrubber"),n=this.element.querySelector("#oxg-time-display");if(t&&(t.value=e.toString()),n){const s=Math.floor(e/3600),r=Math.floor(e%3600/60);n.textContent=`${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")}`}}render(){this.element.innerHTML=`
      <div class="oxg-dock-wrapper oxg-vertical-cluster ${this.isMobileExpanded?"mobile-expanded":""}">
        <!-- Play / Pause Button (Top of Vertical Cluster) -->
        <button id="oxg-play-btn" class="oxg-icon-play-btn" title="Play / Pause (Spacebar)">
          ${this.isPlaying?"⏸":"▶"}
        </button>

        <!-- Speed Select Dropdown -->
        <select id="oxg-speed-select" class="oxg-pill-select oxg-cluster-item" title="Simulation Speed">
          ${this.config.sim.speedPresets.map(e=>`<option value="${e}" ${e===this.speedMultiplier?"selected":""}>${e===600?"10m/s (600x)":`${e}x`}</option>`).join("")}
        </select>

        <!-- Timeline Scrubber -->
        <div class="oxg-scrubber-box oxg-cluster-item">
          <input type="range" id="oxg-scrubber" min="0" max="${this.config.sim.windowHours*3600}" value="${this.currentTSec}" step="30" class="oxg-timeline-input" title="Time Scrubber" />
        </div>

        <!-- Time Readout Display -->
        <span id="oxg-time-display" class="oxg-time-str oxg-cluster-item">00:00</span>

        <!-- Reset View Icon Button (Below Playback Controls) -->
        <button id="btn-focus-india" class="oxg-icon-play-btn oxg-cluster-item oxg-reset-icon-btn" title="Reset Globe View">
          ↺
        </button>

        <!-- Mobile Expand Toggle (Visible on <768px only) -->
        <button id="oxg-mobile-expand-btn" class="oxg-mobile-expand-trigger" title="Toggle Playback Options">
          ${this.isMobileExpanded?"✕":"⚙"}
        </button>
      </div>
    `,this.bindEvents()}bindEvents(){const e=this.element.querySelector("#oxg-play-btn");e&&e.addEventListener("click",()=>{this.isPlaying=!this.isPlaying,e.textContent=this.isPlaying?"⏸":"▶",this.onPlaybackChangeCb&&this.onPlaybackChangeCb(this.isPlaying,this.speedMultiplier)});const t=this.element.querySelector("#oxg-speed-select");t&&t.addEventListener("change",()=>{this.speedMultiplier=Number(t.value),this.onPlaybackChangeCb&&this.onPlaybackChangeCb(this.isPlaying,this.speedMultiplier)});const n=this.element.querySelector("#oxg-scrubber");n&&n.addEventListener("input",()=>{const a=Number(n.value);this.currentTSec=a,this.onScrubCb&&this.onScrubCb(a)});const s=this.element.querySelector("#btn-focus-india");s&&s.addEventListener("click",()=>{this.onResetViewCb&&this.onResetViewCb()});const r=this.element.querySelector("#oxg-mobile-expand-btn");r&&r.addEventListener("click",()=>{this.isMobileExpanded=!this.isMobileExpanded,this.render()})}}class F_{constructor(e){j(this,"element");j(this,"isVisible",!1);this.element=document.createElement("div"),this.element.className="oxg-drawer-panel hidden",e.appendChild(this.element)}toggle(){this.isVisible=!this.isVisible,this.isVisible?this.element.classList.remove("hidden"):this.element.classList.add("hidden")}hide(){this.isVisible=!1,this.element.classList.add("hidden")}updateParameters(e,t){const n=e.customerPresets.find(l=>l.id===e.activeCustomerPresetId)??e.customerPresets[0],s=e.rollout.find(l=>l.id===e.activeRolloutStageId)??e.rollout[0],r=e.relayPlanes.filter(l=>s.enabledRelayPlaneIds.includes(l.id));let a="";for(const l of r){const c=l.altitudeKm??e.relayAltitudeKm,d=(Hr(c)/60).toFixed(1),h=l.sunSynchronous?mn(c).toFixed(1):(l.inclinationDeg??20).toFixed(1),u=jg(c,5).toFixed(1),p=Zg(c,5).toFixed(0);a+=`
        <div class="oxg-drawer-plane-item" style="border-left: 3px solid ${l.color}">
          <div class="oxg-plane-head">${l.name} (${l.satsInPlane} sats @ ${c}km)</div>
          <div class="oxg-plane-stats">
            <span>Period: ${d}m | Inc: ${h}° | Range: ${p}km | Footprint: ${u}°</span>
          </div>
        </div>
      `}this.element.innerHTML=`
      <div class="oxg-drawer-card">
        <div class="oxg-drawer-header">
          <h3>SIMULATION PARAMETERS</h3>
          <button id="oxg-drawer-close" class="oxg-btn-close">✖</button>
        </div>
        <div class="oxg-drawer-body">
          <div class="oxg-drawer-sec">
            <span class="oxg-sec-label">CUSTOMER MISSION</span>
            <p>${n.label} (${n.satCount} sats @ ${n.altitudeKm}km, ${n.planes} planes)</p>
          </div>

          <div class="oxg-drawer-sec">
            <span class="oxg-sec-label">OXG RELAY NETWORK</span>
            ${a}
          </div>

          <div class="oxg-drawer-sec">
            <span class="oxg-sec-label">GROUND STATIONS</span>
            <p>${e.groundStations.filter(l=>l.enabled).map(l=>l.name).join(", ")}</p>
          </div>

          ${t?`
            <div class="oxg-drawer-sec">
              <span class="oxg-sec-label">PROPAGATION STATS</span>
              <p>States Propagated: ${t.orbitStatesPropagated.toLocaleString()}</p>
            </div>
          `:""}
        </div>
      </div>
    `;const o=this.element.querySelector("#oxg-drawer-close");o&&o.addEventListener("click",()=>this.hide())}}class k_{constructor(e){j(this,"modalOverlay");this.modalOverlay=document.createElement("div"),this.modalOverlay.className="oxg-modal-overlay hidden",this.modalOverlay.innerHTML=`
      <div class="oxg-modal-card">
        <div class="oxg-modal-header">
          <h2>MODEL ASSUMPTIONS & PHYSICS SPECIFICATION</h2>
          <button id="oxg-modal-close" class="oxg-btn-close">✖</button>
        </div>
        <div class="oxg-modal-body">
          <div class="oxg-assumption-block">
            <h3>1. Astrodynamics & Orbit Propagation</h3>
            <p><strong>Primary Propagator:</strong> Analytical Circular Keplerian model with J2 secular perturbations (WGS84 Earth radius (R_E = 6378.137	ext{ km}), (J_2 = 1.08263 	imes 10^{-3})).</p>
            <p><strong>Sun-Synchronous Orbits (SSO):</strong> SSO inclination is derived dynamically from altitude using first-order J2 nodal precession balance ((sim 97.8^circ) at 600 km, (sim 98.6^circ) at 800 km). Never hardcoded.</p>
            <p><strong>TLE Support:</strong> SGP4 propagation model integrated via <code>satellite.js</code> for TLE input strings.</p>
          </div>

          <div class="oxg-assumption-block">
            <h3>2. Link Feasibility & Line-of-Sight</h3>
            <p><strong>Customer Access Links (5G NTN):</strong> Customer satellites connect to OXG floating base stations via standardized 5G Non-Terrestrial Network (NTN) RF links (elevation (ge 5^circ), range (le 3000	ext{ km}), no optical terminal required on customer spacecraft).</p>
            <p><strong>OXG Relay Mesh Backhaul (OISL):</strong> High-capacity Optical Inter-Satellite Links (OISL) form a laser mesh backbone strictly between OXG satellites, clearing Earth's surface by at least <code>earthGrazeMarginKm = 100 km</code>.</p>
          </div>

          <div class="oxg-assumption-block">
            <h3>3. Time-Step Bisection Refinement</h3>
            <p>Base propagation step size is 30 seconds. Link visibility transitions detected between discrete steps are refined using bisection root-finding to (sim 1	ext{s}) accuracy to eliminate time-step aliasing.</p>
          </div>

          <div class="oxg-assumption-block">
            <h3>4. Headline Metrics Formulas</h3>
            <p><strong>In Contact %:</strong> (\frac{T_{	ext{contact}}}{T_{	ext{total}}} 	imes 100%)</p>
            <p><strong>Average Session:</strong> Mean duration of contiguous contact intervals.</p>
            <p><strong>Worst Wait Gap:</strong> Longest contiguous gap with no contact over the simulation window.</p>
            <p><strong>Average Wait (Expected Wait):</strong> Expected wait time until next contact from a random instant in time, calculated as:
               $$	ext{Average Wait} = \frac{sum_i 	ext{gap}_i^2}{2 T_{	ext{total}}}$$
            </p>
          </div>
        </div>
      </div>
    `,e.appendChild(this.modalOverlay);const t=this.modalOverlay.querySelector("#oxg-modal-close");t&&t.addEventListener("click",()=>this.hide()),this.modalOverlay.addEventListener("click",n=>{n.target===this.modalOverlay&&this.hide()})}show(){this.modalOverlay.classList.remove("hidden")}hide(){this.modalOverlay.classList.add("hidden")}}class B_{constructor(e){j(this,"element");j(this,"resultA",null);j(this,"resultB",null);this.element=document.createElement("div"),this.element.className="oxg-ab-compare-container hidden",e.appendChild(this.element)}setResults(e,t){this.resultA=e,this.resultB=t,this.render()}show(){this.element.classList.remove("hidden")}hide(){this.element.classList.add("hidden")}render(){if(!this.resultA||!this.resultB)return;const e=this.resultA.metricsWithOXG,t=this.resultB.metricsWithOXG,n=r=>r<60?`${r.toFixed(0)}s`:`${(r/60).toFixed(1)}m`;this.element.innerHTML=`
      <div class="oxg-ab-card">
        <div class="oxg-ab-header">
          <h3>A/B SCENARIO COMPARISON PANEL</h3>
          <button id="oxg-ab-close" class="oxg-btn-close">✖</button>
        </div>
        <div class="oxg-ab-grid">
          <!-- Column A -->
          <div class="oxg-ab-col col-a">
            <h4>SCENARIO A: ${this.resultA.config.activeAltitudeScenario.toUpperCase()}</h4>
            <div class="oxg-ab-stat"><span>% In Contact:</span> <strong>${e.inContactPercent.toFixed(1)}%</strong></div>
            <div class="oxg-ab-stat"><span>Average Session:</span> <strong>${n(e.averageSessionSec)}</strong></div>
            <div class="oxg-ab-stat"><span>Worst Wait Gap:</span> <strong>${n(e.worstWaitSec)}</strong></div>
            <div class="oxg-ab-stat"><span>Average Wait:</span> <strong>${n(e.averageWaitSec)}</strong></div>
          </div>

          <!-- Column B -->
          <div class="oxg-ab-col col-b">
            <h4>SCENARIO B: ${this.resultB.config.activeAltitudeScenario.toUpperCase()}</h4>
            <div class="oxg-ab-stat"><span>% In Contact:</span> <strong>${t.inContactPercent.toFixed(1)}%</strong></div>
            <div class="oxg-ab-stat"><span>Average Session:</span> <strong>${n(t.averageSessionSec)}</strong></div>
            <div class="oxg-ab-stat"><span>Worst Wait Gap:</span> <strong>${n(t.worstWaitSec)}</strong></div>
            <div class="oxg-ab-stat"><span>Average Wait:</span> <strong>${n(t.averageWaitSec)}</strong></div>
          </div>
        </div>
      </div>
    `;const s=this.element.querySelector("#oxg-ab-close");s&&s.addEventListener("click",()=>this.hide())}}class z_{constructor(e,t="/api/request-simulation"){j(this,"element");this.element=document.createElement("div"),this.element.className="oxg-modal-overlay hidden",this.element.innerHTML=`
      <div class="oxg-modal-card oxg-cta-card">
        <div class="oxg-modal-header">
          <h2>RUN THIS FOR YOUR CONSTELLATION</h2>
          <button id="oxg-cta-close" class="oxg-btn-close">✖</button>
        </div>
        <div class="oxg-modal-body">
          <p class="oxg-cta-intro">Request a custom OXG relay network latency and contact time analysis tailored to your satellite constellation parameters.</p>
          <form id="oxg-cta-form" class="oxg-cta-form">
            <div class="oxg-form-group">
              <label>Work Email *</label>
              <input type="email" required placeholder="operator@satellite.com" class="oxg-input" />
            </div>
            <div class="oxg-form-group">
              <label>Constellation Name / Operator</label>
              <input type="text" placeholder="e.g. EarthSat Constellation" class="oxg-input" />
            </div>
            <div class="oxg-form-row">
              <div class="oxg-form-group">
                <label>Number of Spacecraft</label>
                <input type="number" min="1" max="1000" value="12" class="oxg-input" />
              </div>
              <div class="oxg-form-group">
                <label>Target Altitude (km)</label>
                <input type="number" min="300" max="2000" value="550" class="oxg-input" />
              </div>
            </div>
            <div class="oxg-form-group">
              <label>Primary Operational Objectives</label>
              <textarea placeholder="e.g. In-orbit compute downlink, persistent SAR monitoring..." class="oxg-textarea"></textarea>
            </div>
            <button type="submit" class="oxg-btn-primary oxg-btn-submit">SUBMIT SIMULATION REQUEST 🚀</button>
          </form>
          <div id="oxg-cta-success" class="oxg-cta-success hidden">
            ✅ Thank you! Our orbital network team will contact you shortly with a tailored simulation report.
          </div>
        </div>
      </div>
    `,e.appendChild(this.element);const n=this.element.querySelector("#oxg-cta-close");n&&n.addEventListener("click",()=>this.hide());const s=this.element.querySelector("#oxg-cta-form");s&&s.addEventListener("submit",r=>{r.preventDefault();const a=this.element.querySelector("#oxg-cta-success");a&&(s.classList.add("hidden"),a.classList.remove("hidden"))}),this.element.addEventListener("click",r=>{r.target===this.element&&this.hide()})}show(){this.element.classList.remove("hidden")}hide(){this.element.classList.add("hidden")}}class H_{constructor(e,t,n){j(this,"element");j(this,"onCustomOrbitAdd");this.onCustomOrbitAdd=n,this.element=document.createElement("div"),this.element.className="oxg-modal-overlay hidden",this.element.innerHTML=`
      <div class="oxg-modal-card oxg-custom-orbit-card">
        <div class="oxg-modal-header">
          <h2>CUSTOM ORBIT & TLE INPUT (PHASE 2)</h2>
          <button id="oxg-custom-close" class="oxg-btn-close">✖</button>
        </div>
        <div class="oxg-modal-body">
          <div class="oxg-tabs">
            <button id="tab-btn-params" class="oxg-tab-btn active">ORBIT PARAMETERS</button>
            <button id="tab-btn-tle" class="oxg-tab-btn">TLE PASTE</button>
            <button id="tab-btn-inorbit" class="oxg-tab-btn">IN-ORBIT COMPUTE</button>
          </div>

          <!-- Tab 1: Parameters Form -->
          <form id="oxg-custom-params-form" class="oxg-tab-content">
            <div class="oxg-form-group">
              <label>Constellation Label</label>
              <input type="text" id="cust-label" value="My Custom Fleet" class="oxg-input" />
            </div>
            <div class="oxg-form-row">
              <div class="oxg-form-group">
                <label>Number of Spacecraft</label>
                <input type="number" id="cust-sats" min="1" max="200" value="8" class="oxg-input" />
              </div>
              <div class="oxg-form-group">
                <label>Altitude (km)</label>
                <input type="number" id="cust-alt" min="300" max="2000" value="550" class="oxg-input" />
              </div>
            </div>
            <div class="oxg-form-row">
              <div class="oxg-form-group">
                <label>Inclination (deg)</label>
                <input type="number" id="cust-inc" min="0" max="180" step="0.1" value="53.0" class="oxg-input" />
              </div>
              <div class="oxg-form-group">
                <label>Number of Planes</label>
                <input type="number" id="cust-planes" min="1" max="20" value="2" class="oxg-input" />
              </div>
            </div>
            <button type="submit" class="oxg-btn-primary">APPLY CUSTOM CONSTELLATION 🛰️</button>
          </form>

          <!-- Tab 2: TLE Paste -->
          <div id="oxg-tab-tle-content" class="oxg-tab-content hidden">
            <div class="oxg-form-group">
              <label>Paste Two-Line Element (TLE) Set</label>
              <textarea id="tle-input" placeholder="1 25544U 98067A   24001.50000000 ...&#10;2 25544  51.6416 280.1234 ..." class="oxg-textarea tle-area"></textarea>
            </div>
            <div id="tle-error" class="oxg-error-msg hidden"></div>
            <button id="btn-parse-tle" class="oxg-btn-primary">LOAD TLE ORBIT 🚀</button>
          </div>

          <!-- Tab 3: In-Orbit Compute View -->
          <div id="oxg-tab-inorbit-content" class="oxg-tab-content hidden">
            <div class="oxg-inorbit-box">
              <h3>IN-ORBIT COMPUTE REDUCTION MODEL</h3>
              <p>Simulate onboard AI processing data reduction before RF downlink.</p>
              <div class="oxg-form-row">
                <div class="oxg-form-group">
                  <label>Raw Capture Rate (GB/orbit)</label>
                  <input type="number" value="100" class="oxg-input" />
                </div>
                <div class="oxg-form-group">
                  <label>Onboard AI Reduction (%)</label>
                  <input type="number" value="90" class="oxg-input" />
                </div>
              </div>
              <div class="oxg-compute-summary">
                <span>Net Downlink Requirement: <strong>10 GB/orbit</strong> (90% Bandwidth Savings)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,e.appendChild(this.element),this.bindEvents()}show(){this.element.classList.remove("hidden")}hide(){this.element.classList.add("hidden")}bindEvents(){const e=this.element.querySelector("#oxg-custom-close");e&&e.addEventListener("click",()=>this.hide());const t=this.element.querySelector("#tab-btn-params"),n=this.element.querySelector("#tab-btn-tle"),s=this.element.querySelector("#tab-btn-inorbit"),r=this.element.querySelector("#oxg-custom-params-form"),a=this.element.querySelector("#oxg-tab-tle-content"),o=this.element.querySelector("#oxg-tab-inorbit-content"),l=(d,h)=>{[t,n,s].forEach(u=>u==null?void 0:u.classList.remove("active")),[r,a,o].forEach(u=>u==null?void 0:u.classList.add("hidden")),d.classList.add("active"),h.classList.remove("hidden")};t&&r&&t.addEventListener("click",()=>l(t,r)),n&&a&&n.addEventListener("click",()=>l(n,a)),s&&o&&s.addEventListener("click",()=>l(s,o));const c=this.element.querySelector("#oxg-custom-params-form");c&&c.addEventListener("submit",d=>{d.preventDefault();const h=this.element.querySelector("#cust-label").value,u=Number(this.element.querySelector("#cust-sats").value),p=Number(this.element.querySelector("#cust-alt").value),_=Number(this.element.querySelector("#cust-inc").value),g=Number(this.element.querySelector("#cust-planes").value),m={id:`custom_${Date.now()}`,label:h,satCount:u,altitudeKm:p,inclinationDeg:_,planes:g,raanSpreadDeg:360};this.onCustomOrbitAdd&&this.onCustomOrbitAdd(m),this.hide()})}}function _d(i,e,t){var x,L,w,R,P,E,y,A;const n=new ko,s=(((x=i.sim)==null?void 0:x.windowHours)??24)*3600,r=((L=i.sim)==null?void 0:L.stepSeconds)??30,a=Math.floor(s/r),o=JSON.parse(JSON.stringify(i));e!==void 0&&(o.raanOffsetDeg=e),t!==void 0&&(o.phaseOffsetDeg=t);const l=Gr(o),c=l.find(k=>k.id==="p2"),d=l.find(k=>k.id==="p3"),h=((w=i.groundStations)==null?void 0:w.find(k=>k.id==="bengaluru"))??{latDeg:13.03,lonDeg:77.52,minElevationDeg:5,enabled:!0},u=((P=(R=i.links)==null?void 0:R.ground)==null?void 0:P.elevationMaskDeg)??5,p=((y=(E=i.links)==null?void 0:E.ground)==null?void 0:y.maxRangeKm)??3e3;let _=0,g=0,m=0;for(let k=0;k<=a;k++){const O=k*r,G=ps(O,(A=i.sim)==null?void 0:A.epochUTC);let $=!1;for(let z=0;z<c.satsInPlane;z++){const te=n.propagate(c,z,O),W=oi(te,G);if(Ri(W,h,p,u)){$=!0;break}}if(!$)for(let z=0;z<d.satsInPlane;z++){const te=n.propagate(d,z,O),W=oi(te,G);if(Ri(W,h,p,u)){$=!0;break}}$?(_++,g>m&&(m=g),g=0):g++}g>m&&(m=g);const f=a+1,M=_/f*100,b=m*r/60;return{coveragePercent:M,longestGapMinutes:b,totalSteps:f,coveredSteps:_}}class V_{constructor(e,t){j(this,"container");j(this,"globeView");j(this,"isVisible",!1);this.globeView=t;const n=new URLSearchParams(window.location.search);this.isVisible=n.has("debug")&&n.get("debug")==="1",this.container=document.createElement("div"),this.container.className="oxg-debug-panel",this.isVisible||(this.container.style.display="none"),e.appendChild(this.container),this.render()}render(){var h,u,p,_;const e=this.globeView.config,t=e.layers,n=(h=window.app)==null?void 0:h.config,s=((p=(u=n==null?void 0:n.links)==null?void 0:u.ground)==null?void 0:p.elevationMaskDeg)??5,r=(n==null?void 0:n.raanOffsetDeg)??30,a=(n==null?void 0:n.phaseOffsetDeg)??90,o=n?_d(n,r,a):{coveragePercent:65.9,longestGapMinutes:392.5},l=((_=n==null?void 0:n.relayPlanes)==null?void 0:_[0])??{altitudeKm:800,satsInPlane:14,ltanHours:6},c=mn(l.altitudeKm),d=Hr(l.altitudeKm)/60;this.container.innerHTML=`
      <div class="oxg-debug-header">
        <span>🛠️ Globe Shader & Layer Debug</span>
        <button id="oxg-debug-close" class="oxg-debug-close-btn">&times;</button>
      </div>

      <div class="oxg-debug-body">
        <div class="oxg-debug-section-title">Overlay Layers</div>
        
        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-stations">Ground Stations</label>
          <input type="checkbox" id="lyr-stations" ${t.stations?"checked":""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-station-labels">Station Labels</label>
          <input type="checkbox" id="lyr-station-labels" ${t.stationLabels?"checked":""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-orbit-lines">Orbit Lines</label>
          <input type="checkbox" id="lyr-orbit-lines" ${t.orbitLines?"checked":""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-relay-sats">Relay Satellites</label>
          <input type="checkbox" id="lyr-relay-sats" ${t.relaySatellites?"checked":""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-relay-links">Relay Ring Links</label>
          <input type="checkbox" id="lyr-relay-links" ${t.relayLinks?"checked":""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-customer-sats">Customer Satellites</label>
          <input type="checkbox" id="lyr-customer-sats" ${t.customerSatellites?"checked":""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-links">Link Beams</label>
          <input type="checkbox" id="lyr-links" ${t.links?"checked":""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-ground-links">Direct Ground Links</label>
          <input type="checkbox" id="lyr-ground-links" ${t.groundLinks?"checked":""}>
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="lyr-geo-debug">Geo Debug Markers</label>
          <input type="checkbox" id="lyr-geo-debug" ${t.geoDebugMarkers?"checked":""}>
        </div>

        <div class="oxg-debug-section-title" style="margin-top: 12px;">OXG Ring (P1)</div>

        <div class="oxg-debug-row">
          <label>Altitude (km): <span id="val-p1-alt">${l.altitudeKm}</span></label>
          <input type="range" id="dbg-p1-alt" min="500" max="1000" step="10" value="${l.altitudeKm}">
        </div>

        <div class="oxg-debug-row">
          <label>Satellites in Plane: <span id="val-p1-sats">${l.satsInPlane}</span></label>
          <input type="range" id="dbg-p1-sats" min="4" max="30" step="1" value="${l.satsInPlane}">
        </div>

        <div class="oxg-debug-row">
          <label>Orbit LTAN</label>
          <select id="dbg-p1-ltan">
            <option value="6.0" ${l.ltanHours===6?"selected":""}>Dawn (06:00)</option>
            <option value="18.0" ${l.ltanHours===18?"selected":""}>Dusk (18:00)</option>
            <option value="12.0" ${l.ltanHours===12?"selected":""}>Noon (12:00)</option>
            <option value="0.0" ${l.ltanHours===0?"selected":""}>Midnight (00:00)</option>
          </select>
        </div>

        <div class="oxg-debug-row oxg-debug-color-row">
          <label>Marker Color</label>
          <input type="color" id="dbg-p1-color" value="${e.relaySat.color}">
        </div>

        <div class="oxg-debug-row">
          <label>Marker Size (px): <span id="val-p1-satsize">${e.relaySat.sizePx}</span></label>
          <input type="range" id="dbg-p1-satsize" min="2" max="15" step="0.5" value="${e.relaySat.sizePx}">
        </div>

        <div class="oxg-debug-row">
          <label>Glow Strength: <span id="val-p1-glow">${e.relaySat.glowStrength}</span></label>
          <input type="range" id="dbg-p1-glow" min="0.5" max="3.0" step="0.1" value="${e.relaySat.glowStrength}">
        </div>

        <div class="oxg-debug-row">
          <label>Link Width (px): <span id="val-p1-linkwidth">${e.relayLink.widthPx}</span></label>
          <input type="range" id="dbg-p1-linkwidth" min="0.5" max="5.0" step="0.1" value="${e.relayLink.widthPx}">
        </div>

        <div class="oxg-debug-row">
          <label>Link Opacity: <span id="val-p1-linkopacity">${e.relayLink.opacity}</span></label>
          <input type="range" id="dbg-p1-linkopacity" min="0.1" max="1.0" step="0.05" value="${e.relayLink.opacity}">
        </div>

        <div class="oxg-debug-row">
          <label>Computed Inclination:</label>
          <span id="val-p1-inc" style="font-weight: 600; color: #B0BEC5;">${c.toFixed(1)}°</span>
        </div>

        <div class="oxg-debug-row">
          <label>Orbital Period:</label>
          <span id="val-p1-period" style="font-weight: 600; color: #B0BEC5;">${d.toFixed(1)} min</span>
        </div>

        <div class="oxg-debug-row">
          <label>Normal vs Sun Angle:</label>
          <span id="val-p1-sun-angle" style="font-weight: 600; color: #B0BEC5;">90.0°</span>
        </div>

        <div class="oxg-debug-row">
          <button id="btn-sun-view" class="oxg-debug-btn-primary" style="margin-top: 4px; width: 100%;">☀️ Sun View Camera</button>
        </div>

        <div class="oxg-debug-section-title" style="margin-top: 12px;">Customer Orbit Arc & Marker</div>

        <div class="oxg-debug-row">
          <label>Trail Behind (°): <span id="val-behind">${e.orbitArc.behindDeg}</span></label>
          <input type="range" id="dbg-behind" min="0" max="180" step="1" value="${e.orbitArc.behindDeg}">
        </div>

        <div class="oxg-debug-row">
          <label>Lead Ahead (°): <span id="val-ahead">${e.orbitArc.aheadDeg}</span></label>
          <input type="range" id="dbg-ahead" min="0" max="90" step="1" value="${e.orbitArc.aheadDeg}">
        </div>

        <div class="oxg-debug-row oxg-debug-color-row">
          <label>Arc Color</label>
          <input type="color" id="dbg-arccolor" value="${e.orbitArc.color}">
        </div>

        <div class="oxg-debug-row">
          <label>Arc Width (px): <span id="val-arcwidth">${e.orbitArc.widthPx}</span></label>
          <input type="range" id="dbg-arcwidth" min="0.5" max="5.0" step="0.5" value="${e.orbitArc.widthPx}">
        </div>

        <div class="oxg-debug-row">
          <label>Arc Max Opacity: <span id="val-arcopacity">${e.orbitArc.maxOpacity}</span></label>
          <input type="range" id="dbg-arcopacity" min="0.1" max="1.0" step="0.05" value="${e.orbitArc.maxOpacity}">
        </div>

        <div class="oxg-debug-row oxg-debug-color-row">
          <label>Marker Color</label>
          <input type="color" id="dbg-satcolor" value="${e.customerSat.color}">
        </div>

        <div class="oxg-debug-row">
          <label>Marker Size (px): <span id="val-satsize">${e.customerSat.sizePx}</span></label>
          <input type="range" id="dbg-satsize" min="2" max="20" step="1" value="${e.customerSat.sizePx}">
        </div>

        <div class="oxg-debug-row">
          <label>Glow Scale: <span id="val-glowsize">${e.customerSat.glowSize}</span></label>
          <input type="range" id="dbg-glowsize" min="0.5" max="4.0" step="0.1" value="${e.customerSat.glowSize}">
        </div>

        <div class="oxg-debug-section-title" style="margin-top: 12px;">Ground Link Feasibility</div>

        <div class="oxg-debug-row">
          <label>Elevation Mask (°): <span id="val-elev-mask">${s}</span></label>
          <input type="range" id="dbg-elev-mask" min="3" max="15" step="0.5" value="${s}">
        </div>

        <div class="oxg-debug-section-title" style="margin-top: 12px;">India Dual-Ring Coverage (P2+P3)</div>

        <div class="oxg-debug-row">
          <label>RAAN Offset (°): <span id="val-raan-offset">${r}</span></label>
          <input type="range" id="dbg-raan-offset" min="0" max="60" step="1" value="${r}">
        </div>

        <div class="oxg-debug-row">
          <label>Phase Offset (°): <span id="val-phase-offset">${a}</span></label>
          <input type="range" id="dbg-phase-offset" min="0" max="180" step="1" value="${a}">
        </div>

        <div class="oxg-debug-row">
          <label>Bengaluru Coverage:</label>
          <span id="val-bengaluru-cov" style="font-weight: 600; color: #FF1744;">${o.coveragePercent.toFixed(1)}%</span>
        </div>

        <div class="oxg-debug-row">
          <label>Longest Gap:</label>
          <span id="val-bengaluru-gap" style="font-weight: 600; color: #FF6B35;">${o.longestGapMinutes.toFixed(1)} min</span>
        </div>

        <div class="oxg-debug-section-title" style="margin-top: 12px;">Shader & Lighting</div>

        <div class="oxg-debug-row">
          <label>Lighting Mode</label>
          <select id="dbg-mode">
            <option value="sun" ${e.lightingMode==="sun"?"selected":""}>sun (physical)</option>
            <option value="viewRelative" ${e.lightingMode==="viewRelative"?"selected":""}>viewRelative</option>
          </select>
        </div>

        <div class="oxg-debug-row">
          <label>Azimuth (°): <span id="val-az">${e.azimuthDeg}</span></label>
          <input type="range" id="dbg-az" min="-180" max="180" step="1" value="${e.azimuthDeg}">
        </div>

        <div class="oxg-debug-row">
          <label>Elevation (°): <span id="val-el">${e.elevationDeg}</span></label>
          <input type="range" id="dbg-el" min="-90" max="90" step="1" value="${e.elevationDeg}">
        </div>

        <div class="oxg-debug-row">
          <label>Terminator Width: <span id="val-twidth">${e.terminatorWidth}</span></label>
          <input type="range" id="dbg-twidth" min="0.2" max="3.0" step="0.1" value="${e.terminatorWidth}">
        </div>

        <div class="oxg-debug-row">
          <label>Terminator Power: <span id="val-tpow">${e.terminatorPower}</span></label>
          <input type="range" id="dbg-tpow" min="0.5" max="3.0" step="0.1" value="${e.terminatorPower}">
        </div>

        <div class="oxg-debug-row">
          <label>Terminator Tint Str: <span id="val-ttint">${e.terminatorTint}</span></label>
          <input type="range" id="dbg-ttint" min="0.0" max="1.0" step="0.05" value="${e.terminatorTint}">
        </div>

        <div class="oxg-debug-row oxg-debug-color-row">
          <label>Terminator Tint Color</label>
          <input type="color" id="dbg-ttintcolor" value="${e.terminatorTintColor}">
        </div>

        <div class="oxg-debug-row">
          <label>Brightness: <span id="val-bright">${e.earthBrightness}</span></label>
          <input type="range" id="dbg-bright" min="0.5" max="2.5" step="0.05" value="${e.earthBrightness}">
        </div>

        <div class="oxg-debug-row">
          <label>Saturation: <span id="val-sat">${e.earthSaturation}</span></label>
          <input type="range" id="dbg-sat" min="0.1" max="2.0" step="0.05" value="${e.earthSaturation}">
        </div>

        <div class="oxg-debug-row">
          <label>Contrast: <span id="val-contrast">${e.earthContrast}</span></label>
          <input type="range" id="dbg-contrast" min="0.5" max="1.5" step="0.02" value="${e.earthContrast}">
        </div>

        <div class="oxg-debug-row">
          <label>Ocean Lift: <span id="val-lift">${e.oceanLift}</span></label>
          <input type="range" id="dbg-lift" min="0.0" max="1.0" step="0.05" value="${e.oceanLift}">
        </div>

        <div class="oxg-debug-row">
          <label>Glint Strength: <span id="val-glint">${e.glintStrength}</span></label>
          <input type="range" id="dbg-glint" min="0.0" max="1.0" step="0.05" value="${e.glintStrength}">
        </div>

        <div class="oxg-debug-row">
          <label>Surface Haze: <span id="val-haze">${e.surfaceHaze}</span></label>
          <input type="range" id="dbg-haze" min="0.0" max="1.0" step="0.05" value="${e.surfaceHaze}">
        </div>

        <div class="oxg-debug-row">
          <label>Night Boost: <span id="val-nboost">${e.nightBoost}</span></label>
          <input type="range" id="dbg-nboost" min="0.1" max="3.0" step="0.1" value="${e.nightBoost}">
        </div>

        <div class="oxg-debug-row">
          <label>Night Ambient: <span id="val-namb">${e.nightAmbient}</span></label>
          <input type="range" id="dbg-namb" min="0.0" max="1.0" step="0.05" value="${e.nightAmbient}">
        </div>

        <div class="oxg-debug-row oxg-debug-checkbox">
          <label for="dbg-mask">Show Ocean Mask Debug</label>
          <input type="checkbox" id="dbg-mask" ${e.showOceanMask?"checked":""}>
        </div>

        <div class="oxg-debug-actions">
          <button id="oxg-debug-copy-btn" class="oxg-debug-btn-primary">📋 Copy Config (JSON)</button>
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){const e=this.container.querySelector("#oxg-debug-close");e&&e.addEventListener("click",()=>{this.container.style.display="none"});const t=this.globeView.config,n=t.layers,s=(Y,Q)=>{const oe=this.container.querySelector(`#${Y}`);oe&&oe.addEventListener("change",()=>{n[Q]=oe.checked})};s("lyr-stations","stations"),s("lyr-station-labels","stationLabels"),s("lyr-orbit-lines","orbitLines"),s("lyr-relay-sats","relaySatellites"),s("lyr-relay-links","relayLinks"),s("lyr-customer-sats","customerSatellites"),s("lyr-links","links"),s("lyr-ground-links","groundLinks"),s("lyr-geo-debug","geoDebugMarkers");const r=this.container.querySelector("#dbg-elev-mask"),a=this.container.querySelector("#val-elev-mask");r&&a&&r.addEventListener("input",()=>{a.textContent=r.value;const Y=window.app;Y&&Y.config&&Y.config.links&&Y.config.links.ground&&(Y.config.links.ground.elevationMaskDeg=Number(r.value),Y.onConfigChange(Y.config),p())});const o=this.container.querySelector("#dbg-raan-offset"),l=this.container.querySelector("#val-raan-offset"),c=this.container.querySelector("#dbg-phase-offset"),d=this.container.querySelector("#val-phase-offset"),h=this.container.querySelector("#val-bengaluru-cov"),u=this.container.querySelector("#val-bengaluru-gap"),p=()=>{const Y=window.app;if(!(Y!=null&&Y.config))return;const Q=o?Number(o.value):Y.config.raanOffsetDeg??30,oe=c?Number(c.value):Y.config.phaseOffsetDeg??90;if(Y.config.raanOffsetDeg=Q,Y.config.phaseOffsetDeg=oe,Y.config.relayPlanes){const Re=Y.config.relayPlanes.find(qe=>qe.id==="p3");Re&&(Re.raanDeg=Q,Re.phasingDeg=oe)}const _e=_d(Y.config,Q,oe);l&&(l.textContent=Q.toString()),d&&(d.textContent=oe.toString()),h&&(h.textContent=`${_e.coveragePercent.toFixed(1)}%`),u&&(u.textContent=`${_e.longestGapMinutes.toFixed(1)} min`),Y.onConfigChange(Y.config)};o&&o.addEventListener("input",p),c&&c.addEventListener("input",p);const _=this.container.querySelector("#dbg-p1-alt"),g=this.container.querySelector("#val-p1-alt"),m=this.container.querySelector("#dbg-p1-sats"),f=this.container.querySelector("#val-p1-sats"),M=this.container.querySelector("#dbg-p1-ltan"),b=this.container.querySelector("#val-p1-inc"),x=this.container.querySelector("#val-p1-period"),L=Y=>{b&&(b.textContent=`${mn(Y).toFixed(1)}°`),x&&(x.textContent=`${(Hr(Y)/60).toFixed(1)} min`)},w=()=>{const Y=window.app;if(Y&&Y.config&&Y.config.relayPlanes&&Y.config.relayPlanes[0]){const Q=Y.config.relayPlanes[0];_&&(Q.altitudeKm=Number(_.value)),m&&(Q.satsInPlane=Number(m.value),Q.phasingDeg=360/Q.satsInPlane),M&&(Q.ltanHours=Number(M.value)),Q.inclinationDeg=mn(Q.altitudeKm),L(Q.altitudeKm),Y.onConfigChange(Y.config)}};_&&g&&_.addEventListener("input",()=>{g.textContent=_.value,w()}),m&&f&&m.addEventListener("input",()=>{f.textContent=m.value,w()}),M&&M.addEventListener("change",()=>{w()});const R=this.container.querySelector("#dbg-p1-color");R&&R.addEventListener("input",()=>{var Q,oe;t.relaySat.color=R.value,t.relayLink.color=R.value;const Y=window.app;(oe=(Q=Y==null?void 0:Y.config)==null?void 0:Q.relayPlanes)!=null&&oe[0]&&(Y.config.relayPlanes[0].color=R.value)});const P=this.container.querySelector("#dbg-p1-satsize"),E=this.container.querySelector("#val-p1-satsize");P&&E&&P.addEventListener("input",()=>{E.textContent=P.value,t.relaySat.sizePx=Number(P.value)});const y=this.container.querySelector("#dbg-p1-glow"),A=this.container.querySelector("#val-p1-glow");y&&A&&y.addEventListener("input",()=>{A.textContent=y.value,t.relaySat.glowStrength=Number(y.value)});const k=this.container.querySelector("#dbg-p1-linkwidth"),O=this.container.querySelector("#val-p1-linkwidth");k&&O&&k.addEventListener("input",()=>{O.textContent=k.value,t.relayLink.widthPx=Number(k.value)});const G=this.container.querySelector("#dbg-p1-linkopacity"),$=this.container.querySelector("#val-p1-linkopacity");G&&$&&G.addEventListener("input",()=>{$.textContent=G.value,t.relayLink.opacity=Number(G.value)});const z=(Y,Q,oe)=>{const _e=this.container.querySelector(`#${Y}`),Re=this.container.querySelector(`#${Q}`);_e&&Re&&_e.addEventListener("input",()=>{const qe=Number(_e.value);Re.textContent=qe.toString(),t[oe]=qe,this.globeView.updateUniforms()})},te=this.container.querySelector("#dbg-mode");te&&te.addEventListener("change",()=>{t.lightingMode=te.value}),z("dbg-az","val-az","azimuthDeg"),z("dbg-el","val-el","elevationDeg"),z("dbg-twidth","val-twidth","terminatorWidth"),z("dbg-tpow","val-tpow","terminatorPower"),z("dbg-ttint","val-ttint","terminatorTint");const W=this.container.querySelector("#dbg-ttintcolor");W&&W.addEventListener("input",()=>{t.terminatorTintColor=W.value,this.globeView.updateUniforms()}),z("dbg-bright","val-bright","earthBrightness"),z("dbg-sat","val-sat","earthSaturation"),z("dbg-contrast","val-contrast","earthContrast"),z("dbg-lift","val-lift","oceanLift"),z("dbg-glint","val-glint","glintStrength"),z("dbg-haze","val-haze","surfaceHaze"),z("dbg-nboost","val-nboost","nightBoost"),z("dbg-namb","val-namb","nightAmbient");const ae=(Y,Q,oe)=>{const _e=this.container.querySelector(`#${Y}`),Re=this.container.querySelector(`#${Q}`);_e&&Re&&_e.addEventListener("input",()=>{const qe=Number(_e.value);Re.textContent=qe.toString(),t.orbitArc[oe]=qe})};ae("dbg-behind","val-behind","behindDeg"),ae("dbg-ahead","val-ahead","aheadDeg"),ae("dbg-arcwidth","val-arcwidth","widthPx"),ae("dbg-arcopacity","val-arcopacity","maxOpacity");const ce=this.container.querySelector("#dbg-arccolor");ce&&ce.addEventListener("input",()=>{t.orbitArc.color=ce.value});const Ee=(Y,Q,oe)=>{const _e=this.container.querySelector(`#${Y}`),Re=this.container.querySelector(`#${Q}`);_e&&Re&&_e.addEventListener("input",()=>{const qe=Number(_e.value);Re.textContent=qe.toString(),t.customerSat[oe]=qe})};Ee("dbg-satsize","val-satsize","sizePx"),Ee("dbg-glowsize","val-glowsize","glowSize");const Fe=this.container.querySelector("#dbg-satcolor");Fe&&Fe.addEventListener("input",()=>{t.customerSat.color=Fe.value});const Ze=this.container.querySelector("#dbg-mask");Ze&&Ze.addEventListener("change",()=>{t.showOceanMask=Ze.checked,this.globeView.updateUniforms()});const F=this.container.querySelector("#oxg-debug-copy-btn");F&&F.addEventListener("click",()=>{var _e,Re;const Y=window.app,Q={lightingMode:t.lightingMode,azimuthDeg:t.azimuthDeg,elevationDeg:t.elevationDeg,terminatorWidth:t.terminatorWidth,terminatorPower:t.terminatorPower,terminatorTint:t.terminatorTint,terminatorTintColor:t.terminatorTintColor,earthBrightness:t.earthBrightness,earthSaturation:t.earthSaturation,earthContrast:t.earthContrast,oceanLift:t.oceanLift,glintStrength:t.glintStrength,surfaceHaze:t.surfaceHaze,nightBoost:t.nightBoost,nightAmbient:t.nightAmbient,layers:t.layers,orbitArc:t.orbitArc,customerSat:t.customerSat,relaySat:t.relaySat,relayLink:t.relayLink,oxgRingP1:((Re=(_e=Y==null?void 0:Y.config)==null?void 0:_e.relayPlanes)==null?void 0:Re[0])??null},oe=JSON.stringify(Q,null,2);console.log(`Shader & Layer Config Export:
`,oe),navigator.clipboard.writeText(oe).then(()=>{F.textContent="✅ Copied to Clipboard!",setTimeout(()=>{F.textContent="📋 Copy Config (JSON)"},2e3)})});const Z=this.container.querySelector("#btn-sun-view");Z&&Z.addEventListener("click",()=>{this.globeView.setSunView()})}updateSunAngle(e){const t=this.container.querySelector("#val-p1-sun-angle");t&&(t.textContent=`${e.toFixed(1)}°`)}}class G_{constructor(e,t,n,s){j(this,"element");j(this,"presets");j(this,"activePresetId");j(this,"onSelect");j(this,"isOpen",!1);j(this,"documentClickHandler");this.presets=t,this.activePresetId=n,this.onSelect=s,this.element=document.createElement("div"),this.element.className="oxg-preset-selector-container",e.appendChild(this.element),this.documentClickHandler=r=>{this.isOpen&&!this.element.contains(r.target)&&(this.isOpen=!1,this.render())},document.addEventListener("click",this.documentClickHandler),this.render()}updatePresets(e,t){this.presets=e,this.activePresetId=t,this.render()}setActivePreset(e){this.activePresetId=e,this.render()}destroy(){document.removeEventListener("click",this.documentClickHandler)}formatOrbitSubtext(e){const t=`${e.altitudeKm}km`;if(e.sunSynchronous){const n=e.ltanHours!==void 0?`${String(Math.floor(e.ltanHours)).padStart(2,"0")}:00 LTAN`:"SSO";return`${t} SSO ${n}`}else return`${t} ${e.inclinationDeg}° INC`}render(){this.element.innerHTML=`
      <!-- Desktop Header Label (Visible on wide screens) -->
      <div class="oxg-scenario-header">MISSION PRESETS</div>

      <!-- Mobile/Narrow Screen Toggle Button (Visible on narrow screens) -->
      <button type="button" class="oxg-preset-toggle-btn" id="btn-toggle-presets" title="Toggle Mission Presets">
        <span>MISSION PRESETS ▾</span>
      </button>

      <!-- Mission Options List / Dropdown -->
      <div class="oxg-preset-dropdown ${this.isOpen?"open":""}">
        ${this.presets.map(n=>`
              <div class="oxg-scenario-option ${n.id===this.activePresetId?"selected":""}" data-id="${n.id}">
                <div class="oxg-scenario-text-wrap">
                  <span class="oxg-scenario-label">${n.label}</span>
                  <span class="oxg-scenario-subtext">${this.formatOrbitSubtext(n)}</span>
                </div>
              </div>
            `).join("")}
      </div>
    `;const e=this.element.querySelector("#btn-toggle-presets");e&&e.addEventListener("click",n=>{n.stopPropagation(),this.isOpen=!this.isOpen,this.render()}),this.element.querySelectorAll(".oxg-scenario-option").forEach(n=>{n.addEventListener("click",s=>{s.stopPropagation();const r=n.getAttribute("data-id");r&&(this.activePresetId=r,this.isOpen=!1,this.render(),this.onSelect(r))})})}}class W_{constructor(e,t,n,s){j(this,"element");j(this,"steps");j(this,"activeStepIndex",0);j(this,"onSelectStep");this.steps=t,this.onSelectStep=s;const r=this.steps.findIndex(a=>a.id===n);this.activeStepIndex=r>=0?r:0,this.element=document.createElement("div"),this.element.className="oxg-rollout-timeline-container",e.appendChild(this.element),this.render(),this.bindEvents()}setActiveStep(e){const t=this.steps.findIndex(n=>n.id===e);t>=0&&t!==this.activeStepIndex&&(t>this.activeStepIndex,this.activeStepIndex=t,this.render())}getActiveStepIndex(){return this.activeStepIndex}bindEvents(){window.addEventListener("keydown",e=>{e.key==="ArrowLeft"?this.stepPrev():e.key==="ArrowRight"&&this.stepNext()}),window.addEventListener("resize",()=>{this.scrollToActiveStep()})}stepPrev(){if(this.activeStepIndex>0){this.activeStepIndex--;const e=this.steps[this.activeStepIndex];this.render(),this.onSelectStep(e.id,!1)}}stepNext(){if(this.activeStepIndex<this.steps.length-1){this.activeStepIndex++;const e=this.steps[this.activeStepIndex];this.render(),this.onSelectStep(e.id,!0)}}scrollToActiveStep(){const e=this.element.querySelector(".oxg-timeline-scroll-container"),t=this.element.querySelector(".oxg-timeline-slot.active");if(e&&t){const n=e.clientWidth,s=t.offsetLeft,r=t.clientWidth,a=s+r/2-n/2;e.scrollTo({left:Math.max(0,a),behavior:"smooth"})}}render(){const e=this.steps.length,t=[{type:"step",step:this.steps[0],titleLines:["INDIA","ONLY"],idx:0,posPct:8.333,year:"TODAY"},{type:"step",step:this.steps[1],titleLines:["INDIA OPERATED","GROUND STATIONS"],idx:1,posPct:25,year:"TODAY"},{type:"synapse",titleLines:["MISSION","SYNAPSE"],posPct:41.666,year:"2027"},{type:"step",step:this.steps[2],titleLines:["OXG SSO","RING 1"],idx:2,posPct:58.333,year:"TBD"},{type:"step",step:this.steps[3],titleLines:["OXG SSO","RING 2"],idx:3,posPct:75,year:"TBD"},{type:"step",step:this.steps[4],titleLines:["OXG EXTENDED","RINGS"],idx:4,posPct:91.666,year:"TBD"}],n={x:83.33,y:55},s={x:500,y:11},r={x:916.67,y:55},a=`M ${n.x.toFixed(2)},${n.y.toFixed(2)} Q ${s.x.toFixed(2)},${s.y.toFixed(2)} ${r.x.toFixed(2)},${r.y.toFixed(2)}`,o=t.map((g,m)=>{const f=m/5,M=1-f,b=M*M*n.x+2*M*f*s.x+f*f*r.x,x=M*M*n.y+2*M*f*s.y+f*f*r.y;return{x:b,y:x,t:f,item:g,itemIndex:m}}),d=({0:0,1:1,2:3,3:4,4:5}[this.activeStepIndex]??0)/5;let h="";if(d>0){const g=1-d,m=g*n.x+d*s.x,f=g*n.y+d*s.y,M=g*g*n.x+2*g*d*s.x+d*d*r.x,b=g*g*n.y+2*g*d*s.y+d*d*r.y;h=`M ${n.x.toFixed(2)},${n.y.toFixed(2)} Q ${m.toFixed(2)},${f.toFixed(2)} ${M.toFixed(2)},${b.toFixed(2)}`}this.element.innerHTML=`
      <div class="oxg-stepper-dock">
        <div class="oxg-timeline-controls-row">
          <button id="oxg-step-prev" class="oxg-stepper-nav" title="Previous Step (Left Arrow)" ${this.activeStepIndex===0?"disabled":""}>‹</button>

          <div class="oxg-timeline-scroll-container">
            <div class="oxg-stepper-track-wrapper">
              <!-- Single Smooth Master Arc Curve SVG -->
              <svg class="oxg-timeline-curve-svg" viewBox="0 0 1000 90" preserveAspectRatio="none">
                <path class="oxg-curve-baseline" d="${a}" />
                ${h?`<path class="oxg-curve-progress" d="${h}" />`:""}
              </svg>

              <!-- 6 Equal Horizontal Slots (16.666% each) -->
              <div class="oxg-stepper-slots">
                ${o.map(({item:g,y:m,itemIndex:f})=>{if(g.type==="synapse")return`
                        <div class="oxg-timeline-slot synapse-slot" style="left: ${f*100/6}%; width: ${100/6}%;">
                          <div class="oxg-step-title-box top-label-row">
                            <span class="oxg-step-title-line">${g.titleLines[0]}</span>
                            <span class="oxg-step-title-line synapse-sub">${g.titleLines[1]}</span>
                          </div>

                          <div class="oxg-node-wrapper" style="top: ${m}px;">
                            <div class="oxg-synapse-node" title="OXG Pathfinder Mission">◆</div>
                          </div>

                          <div class="oxg-step-year-box bottom-label-row">
                            <span class="oxg-step-year synapse-year">${g.year}</span>
                          </div>
                        </div>
                      `;const M=g.step,b=g.idx,x=b===this.activeStepIndex,L=b<this.activeStepIndex;return`
                      <div class="oxg-timeline-slot ${x?"active":""} ${L?"completed":""}" data-index="${b}" data-id="${M.id}" style="left: ${f*100/6}%; width: ${100/6}%;">
                        <div class="oxg-step-title-box top-label-row">
                          <span class="oxg-step-title-line">${g.titleLines[0]}</span>
                          <span class="oxg-step-title-line">${g.titleLines[1]}</span>
                        </div>

                        <div class="oxg-node-wrapper" style="top: ${m}px;">
                          <div class="oxg-step-node"></div>
                        </div>

                        <div class="oxg-step-year-box bottom-label-row">
                          <span class="oxg-step-year">${g.year}</span>
                        </div>
                      </div>
                    `}).join("")}
              </div>
            </div>
          </div>

          <button id="oxg-step-next" class="oxg-stepper-nav" title="Next Step (Right Arrow)" ${this.activeStepIndex===e-1?"disabled":""}>›</button>
        </div>
      </div>
    `;const u=this.element.querySelector("#oxg-step-prev");u&&u.addEventListener("click",()=>this.stepPrev());const p=this.element.querySelector("#oxg-step-next");p&&p.addEventListener("click",()=>this.stepNext()),this.element.querySelectorAll(".oxg-timeline-slot:not(.synapse-slot)").forEach(g=>{g.addEventListener("click",()=>{const m=g.getAttribute("data-index"),f=g.getAttribute("data-id");if(m!==null&&f){const M=parseInt(m,10);if(M!==this.activeStepIndex){const b=M>this.activeStepIndex;this.activeStepIndex=M,this.render(),this.onSelectStep(f,b)}}})}),setTimeout(()=>this.scrollToActiveStep(),30)}}class X_{constructor(e){j(this,"element");this.element=document.createElement("div"),this.element.className="oxg-legend-dock",e.appendChild(this.element),this.render()}render(){this.element.innerHTML=`
      <div class="oxg-legend-container">
        <div class="oxg-scenario-header oxg-legend-header">MAP LEGEND</div>
        <div class="oxg-legend-grid">
          <!-- Ground Station Marker (Circle within Square) -->
          <div class="oxg-legend-item" title="Ground Station">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="oxg-legend-icon">
              <rect x="0.5" y="0.5" width="11" height="11" stroke="#ffffff" stroke-width="1.2" fill="none"/>
              <circle cx="6" cy="6" r="2.5" fill="#ffffff"/>
            </svg>
            <span class="oxg-legend-label">Ground Station</span>
          </div>

          <!-- OXG Relay Satellite (-- o -- white) -->
          <div class="oxg-legend-item" title="OXG Relay Satellites">
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" class="oxg-legend-icon oxg-sat-icon">
              <line x1="0" y1="5" x2="20" y2="5" stroke="#ffffff" stroke-width="1.2" opacity="0.6"/>
              <circle cx="10" cy="5" r="2.5" fill="#ffffff"/>
            </svg>
            <span class="oxg-legend-label">OXG Satellites</span>
          </div>

          <!-- Customer Satellite (-- o -- red/maroon) -->
          <div class="oxg-legend-item" title="Your Satellite">
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" class="oxg-legend-icon oxg-sat-icon">
              <line x1="0" y1="5" x2="20" y2="5" stroke="#FF1744" stroke-width="2"/>
              <circle cx="10" cy="5" r="3" fill="#FF1744"/>
            </svg>
            <span class="oxg-legend-label">Your Satellite</span>
          </div>
        </div>
      </div>
    `}}class $_{constructor(e,t,n){j(this,"container");j(this,"config");j(this,"uiFlags");j(this,"simResult",null);j(this,"globeView");j(this,"orbitsMesh");j(this,"satellitesMesh");j(this,"groundStationsMesh");j(this,"linksMesh");j(this,"groundLinksMesh");j(this,"headlineMetricsPanel");j(this,"presetSelectorPanel");j(this,"mapLegendPanel");j(this,"rolloutTimeline");j(this,"controlsBar");j(this,"parametersPanel");j(this,"assumptionsModal");j(this,"abComparePanel");j(this,"ctaModal");j(this,"customOrbitForm");j(this,"debugPanel");j(this,"currentStepIndex",0);j(this,"isPlaying",!0);j(this,"speedMultiplier",600);j(this,"lastFrameTimestamp",0);j(this,"isGeoDebugActive",!1);j(this,"isRingTransitioning",!1);j(this,"ringTransitionStartTime",0);this.container=e,this.container.className="oxg-mission-console",this.uiFlags=n??id;const s=t??rd;if(this.config=e_(s,window.location.search),window.location.search!==""&&!window.location.search.includes("debug=1")){const g=window.location.pathname+window.location.hash;window.history.replaceState(null,"",g)}this.container.innerHTML=`
      <!-- SpaceX-Style Minimalist Orbital Loader -->
      <div id="oxg-demo-loader" class="oxg-demo-loader-overlay">
        <div class="oxg-loader-spinner"></div>
        <div class="oxg-loader-text">INITIALIZING ORBITAL SIMULATION...</div>
      </div>

      <div id="oxg-globe-container" class="oxg-globe-container"></div>
      <div id="oxg-header-mount"></div>
      <div id="oxg-metrics-mount"></div>
      <div id="oxg-preset-mount"></div>
      <div id="oxg-legend-mount"></div>
      <div id="oxg-controls-mount"></div>
      <div id="oxg-timeline-mount"></div>
      <div id="oxg-parameters-mount"></div>
      <div id="oxg-modals-mount"></div>

      <!-- Action & View Controls Bar (Bottom Right Debug Tools) -->
      <div class="oxg-action-pill-bar">
        ${this.uiFlags.showGeoDebugBtn?'<button id="btn-geo-debug" class="oxg-pill-btn-subtle" title="Toggle Geo-Registration Debug Mode">GEO DEBUG</button>':""}
        ${this.uiFlags.showParamsBtn?'<button id="btn-toggle-params" class="oxg-pill-btn-subtle">⚙️ Params</button>':""}
        ${this.uiFlags.showCustomOrbit?'<button id="fab-custom-orbit" class="oxg-pill-btn-subtle">🛰️ Custom Orbit</button>':""}
        ${this.uiFlags.showABCompare?'<button id="fab-ab-compare" class="oxg-pill-btn-subtle">⚖️ A/B Compare</button>':""}
      </div>

      <!-- Mandatory Credit Footer -->
      <div class="oxg-credit-footer">
        Earth imagery: NASA Earth Observatory
      </div>
    `;const r=this.container.querySelector("#oxg-globe-container");this.globeView=new E_(r),window.globeView=this.globeView,this.orbitsMesh=new R_(this.globeView.scene),this.satellitesMesh=new C_(this.globeView.scene),this.groundStationsMesh=new D_(this.globeView.earthMesh),this.groundLinksMesh=new I_(this.globeView.earthMesh),this.linksMesh=new L_(this.globeView.scene);const a=this.container.querySelector("#oxg-header-mount");U_(a);const o=this.container.querySelector("#oxg-metrics-mount");this.headlineMetricsPanel=new N_(o);const l=this.container.querySelector("#oxg-preset-mount");this.presetSelectorPanel=new G_(l,this.config.customerPresets,this.config.activeCustomerPresetId,g=>{this.config.activeCustomerPresetId=g,this.onConfigChange(this.config)});const c=this.container.querySelector("#oxg-legend-mount");this.mapLegendPanel=new X_(c);const d=this.container.querySelector("#oxg-timeline-mount"),h=(this.config.scenarios??[]).filter(g=>g.id!=="india_dual_ring");this.rolloutTimeline=new W_(d,h,this.config.activeScenarioId,g=>{this.startRingTransition(),this.config.activeScenarioId=g,this.onConfigChange(this.config)});const u=this.container.querySelector("#oxg-controls-mount");this.controlsBar=new O_(u,this.config,{onConfigChange:g=>this.onConfigChange(g),onPlaybackChange:(g,m)=>{this.isPlaying=g,this.speedMultiplier=m},onScrub:g=>{var f;const m=Math.min((((f=this.simResult)==null?void 0:f.timestampsSec.length)??1)-1,Math.floor(g/(this.config.sim.stepSeconds??30)));this.currentStepIndex=m},onResetView:()=>{this.globeView.focusIndia()}},this.uiFlags);const p=this.container.querySelector("#oxg-parameters-mount");this.parametersPanel=new F_(p);const _=this.container.querySelector("#oxg-modals-mount");this.assumptionsModal=new k_(_),this.abComparePanel=new B_(_),this.ctaModal=new z_(_),this.customOrbitForm=new H_(_,this.config,g=>{this.config.customerPresets.push(g),this.config.activeCustomerPresetId=g.id,this.presetSelectorPanel.updatePresets(this.config.customerPresets,this.config.activeCustomerPresetId),this.onConfigChange(this.config)}),this.debugPanel=new V_(this.container,this.globeView),this.bindEvents(),this.recomputeSimulation(),this.globeView.addRenderCallback(this.updatePlaybackLoop.bind(this)),requestAnimationFrame(()=>{setTimeout(()=>{const g=this.container.querySelector("#oxg-demo-loader");g&&(g.style.opacity="0",setTimeout(()=>g.remove(),500))},250)}),window.app=this,window.globeView=this.globeView,window.debugPanel=this.debugPanel}bindEvents(){const e=this.container.querySelectorAll("#btn-toggle-presets, #btn-toggle-presets-mobile"),t=this.container.querySelector(".oxg-preset-selector");t&&e.forEach(h=>{h.addEventListener("click",u=>{u.stopPropagation(),t.classList.toggle("open"),e.forEach(p=>p.classList.toggle("active",t.classList.contains("open")))})});const n=this.container.querySelector("#btn-focus-india");n&&n.addEventListener("click",()=>this.globeView.focusIndia());const s=this.container.querySelector("#btn-geo-debug");s&&s.addEventListener("click",()=>{this.isGeoDebugActive=!this.isGeoDebugActive,s.classList.toggle("active",this.isGeoDebugActive),this.globeView.geoDebug.setVisible(this.isGeoDebugActive)});const r=this.container.querySelector("#btn-toggle-params");r&&r.addEventListener("click",()=>this.parametersPanel.toggle());const a=this.container.querySelector("#btn-toggle-assumptions");a&&a.addEventListener("click",()=>this.assumptionsModal.show());const o=this.container.querySelector("#fab-cta");o&&o.addEventListener("click",()=>this.ctaModal.show());const l=this.container.querySelector("#fab-custom-orbit");l&&l.addEventListener("click",()=>this.customOrbitForm.show());const c=this.container.querySelector("#fab-ab-compare");c&&c.addEventListener("click",()=>{const h=JSON.parse(JSON.stringify(this.config));h.activeAltitudeScenario=this.config.activeAltitudeScenario==="800km_compact"?"600km_baseline":"800km_compact",h.relayAltitudeKm=h.activeAltitudeScenario==="600km_baseline"?600:800,h.relayPlanes.forEach(p=>p.altitudeKm=h.relayAltitudeKm);const u=od(h);this.simResult&&(this.abComparePanel.setResults(this.simResult,u),this.abComparePanel.show())});const d=h=>{var f;let u=0,p=0;if("touches"in h&&h.touches&&h.touches.length>0)u=h.touches[0].clientX,p=h.touches[0].clientY;else if("changedTouches"in h&&h.changedTouches&&h.changedTouches.length>0)u=h.changedTouches[0].clientX,p=h.changedTouches[0].clientY;else if("clientX"in h)u=h.clientX,p=h.clientY;else return;const _=this.config.customerPresets.find(M=>M.id===this.config.activeCustomerPresetId)??this.config.customerPresets[0],g=((f=this.simResult)==null?void 0:f.customerSats[Math.floor(this.currentStepIndex)])??[],m={clientX:u,clientY:p};this.satellitesMesh.handleMouseMove(m,this.globeView.camera,g,{altitudeKm:_.altitudeKm,inclinationDeg:_.inclinationDeg}),this.groundStationsMesh.handleMouseMove(m,this.globeView.camera)};this.container.addEventListener("mousemove",d),this.container.addEventListener("pointerdown",d),this.container.addEventListener("click",d)}onConfigChange(e){if(this.config=e,window.location.search.includes("debug=1")){const t=Qg(this.config);window.history.replaceState(null,"",`?${t}&debug=1`)}else if(window.location.search!==""){const t=window.location.pathname+window.location.hash;window.history.replaceState(null,"",t)}this.recomputeSimulation()}startRingTransition(){this.isRingTransitioning=!0,this.ringTransitionStartTime=performance.now()}recomputeSimulation(){var u,p,_;this.orbitsMesh.clear(),this.satellitesMesh.clear(),this.linksMesh.clear(),this.groundLinksMesh.clear(),this.simResult=od(this.config),window.simResult=this.simResult,this.currentStepIndex=0,this.headlineMetricsPanel.updateMetrics(this.simResult.metricsWithOXG,this.simResult.metricsGroundOnly),this.presetSelectorPanel.setActivePreset(this.config.activeCustomerPresetId),this.rolloutTimeline.setActiveStep(this.config.activeScenarioId),this.parametersPanel.updateParameters(this.config,this.simResult.metricsWithOXG);const e=this.config.customerPresets.find(g=>g.id===this.config.activeCustomerPresetId)??this.config.customerPresets[0],t=this.config.rollout.find(g=>g.id===this.config.activeRolloutStageId)??this.config.rollout[0],n=((u=this.config.relayPlanes.find(g=>g.id==="p1"))==null?void 0:u.ltanHours)??10.5,s=(this.config.customerLtanOffsetMinutes??45)/60,r=e.ltanHours??n+s,a=[{id:e.id,name:e.label,altitudeKm:e.altitudeKm,inclinationDeg:e.inclinationDeg,sunSynchronous:e.sunSynchronous,ltanHours:e.sunSynchronous?r:void 0,satsInPlane:e.satCount,color:"#FF1744"}],o=((p=this.config.scenarios)==null?void 0:p.find(g=>g.id===this.config.activeScenarioId))??((_=this.config.scenarios)==null?void 0:_[0]),l=o!=null&&o.ringEnabled?o.relayPlaneIds??["p1"]:[],d=Gr(this.config).filter(g=>{const m=this.config.relayPlanes.find(f=>f.id===g.id);return m!=null&&m.enabled?o?l.includes(g.id):t.enabledRelayPlaneIds.includes(g.id):!1});this.orbitsMesh.updateOrbits(a,d);const h=this.config.groundStations.filter(g=>g.enabled?o.stationFilter==="india_only"||o.stationFilter==="bengaluru_only"?g.isIndiaStation===!0||g.country==="India"||g.id==="bengaluru"||g.id==="delhi"||g.id==="port_blair":!0:!1);this.groundStationsMesh.updateGroundStations(h)}updatePlaybackLoop(){var R,P,E,y;if(!this.simResult)return;const e=performance.now();this.lastFrameTimestamp===0&&(this.lastFrameTimestamp=e);const t=e-this.lastFrameTimestamp;if(this.lastFrameTimestamp=e,this.isPlaying){const k=t/1e3*this.speedMultiplier/this.config.sim.stepSeconds;this.currentStepIndex=(this.currentStepIndex+k)%this.simResult.timestampsSec.length}const n=Math.floor(this.currentStepIndex),s=this.simResult.timestampsSec[n]??0;this.globeView.updateTime(s),this.controlsBar.updateTime(s);const r=this.simResult.customerSats[n]??[],a=this.simResult.relaySats[n]??[],o=((R=this.config.scenarios)==null?void 0:R.find(A=>A.id===this.config.activeScenarioId))??((P=this.config.scenarios)==null?void 0:P[0])??{stationFilter:"india_only",ringEnabled:!1},l=this.config.groundStations.filter(A=>A.enabled?o.stationFilter==="india_only"||o.stationFilter==="bengaluru_only"?A.isIndiaStation===!0||A.country==="India"||A.id==="bengaluru"||A.id==="delhi"||A.id==="port_blair":!0:!1);this.groundStationsMesh.updateGroundStations(l);const c=this.globeView.config.layers,d=c.relaySatellites&&o.ringEnabled;this.orbitsMesh.setVisible(c.orbitLines),this.satellitesMesh.setLayers(c.customerSatellites,d),this.groundStationsMesh.setLayers(c.stations,c.stationLabels),this.linksMesh.setVisible(c.links||d&&c.relayLinks),this.globeView.geoDebug.setVisible(c.geoDebugMarkers);const h=this.config.customerPresets.find(A=>A.id===this.config.activeCustomerPresetId)??this.config.customerPresets[0],u=((E=this.config.relayPlanes.find(A=>A.id==="p1"))==null?void 0:E.ltanHours)??10.5,p=(this.config.customerLtanOffsetMinutes??45)/60,_=h.ltanHours??u+p,g=[{id:h.id,name:h.label,altitudeKm:h.altitudeKm,inclinationDeg:h.inclinationDeg,sunSynchronous:h.sunSynchronous,ltanHours:h.sunSynchronous?_:void 0,satsInPlane:h.satCount,color:"#FF1744"}],m=((y=this.simResult.activeLinkEdgesTrajectory)==null?void 0:y[n])??[],f=new Set;for(const A of r){const k=l.some(G=>Ri(A.ecef,G,this.config.links.ground.maxRangeKm,this.config.links.ground.elevationMaskDeg)),O=m.some(G=>G.fromId===A.id||G.toId===A.id);(k||O)&&f.add(A.id)}const M=f.size>0;if(this.orbitsMesh.updateCustomerArc(g,s,this.globeView.config.orbitArc,c.customerSatellites,M),c.orbitLines){const A=o!=null&&o.ringEnabled?o.relayPlaneIds??["p1"]:[],k=this.config.rollout.find($=>$.id===this.config.activeRolloutStageId)??this.config.rollout[0],G=Gr(this.config).filter($=>{const z=this.config.relayPlanes.find(te=>te.id===$.id);return z!=null&&z.enabled?o?A.includes($.id):k.enabledRelayPlaneIds.includes($.id):!1});this.orbitsMesh.updateOrbits(g,G,s)}let b=1,x=1;if(this.isRingTransitioning){const A=(e-this.ringTransitionStartTime)/1e3,k=Math.min(1,A/.6),O=k*(2-k);b=O,x=.5+.5*O,k>=1&&(this.isRingTransitioning=!1)}this.orbitsMesh.updateRelayRingLinks(a,this.globeView.config.relayLink,d&&c.relayLinks,b),this.satellitesMesh.updateSatellites(r,o.ringEnabled?a:[],this.globeView.config.customerSat,this.globeView.config.relaySat,b,x,f),this.groundStationsMesh.update(this.globeView.camera);const L=Math.min(.1,Math.max(.001,t/1e3));this.groundLinksMesh.updateGroundLinks(r,l,this.config.links,L,c.groundLinks,o.ringEnabled?a:[]),this.linksMesh.updateActiveLinks(m,r,a,l,s,L);const w=a.filter(A=>A.planeId==="p1"||A.id.startsWith("relay-p1-"));if(w.length>=2){const A=new C(w[0].eci.x,w[0].eci.y,w[0].eci.z),k=new C(w[Math.floor(w.length/4)].eci.x,w[Math.floor(w.length/4)].eci.y,w[Math.floor(w.length/4)].eci.z),O=A.clone().cross(k).normalize(),G=Vr(s),$=new C(G.x,G.y,G.z).normalize(),z=Math.abs(O.dot($)),te=Math.acos(Math.min(1,z))*180/Math.PI;this.debugPanel.updateSunAngle(te)}}}const vd={mount:(i,e)=>new $_(i,e??rd)};function $o(){if(typeof document>"u")return;const i=document.getElementById("oxg-sim-app")||document.getElementById("app");if(i&&!i.__oxg_mounted__){i.__oxg_mounted__=!0;const e=vd.mount(i);window.app=e,window.mainApp=e}}$o(),typeof document<"u"&&document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",$o),$t.OXGSim=vd,$t.autoMount=$o,Object.defineProperty($t,Symbol.toStringTag,{value:"Module"})});
