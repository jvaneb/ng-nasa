import{b}from"./chunk-RUYQCXTC.js";import{a as S}from"./chunk-7DM7XMOA.js";import{Ha as r,Ia as o,Ja as u,La as c,Pa as l,Qa as p,Ra as f,Sa as v,W as y,Wa as x,Xa as h,pa as s,sa as a,sb as g,ta as m,tb as A}from"./chunk-TUPHTI4F.js";var M=(()=>{let i=class i{constructor(t,n){this.apiService=t,this.route=n,this.paramValue=null,this.arrayApod=null}ngOnInit(){this.paramValue=this.route.snapshot.paramMap.get("date"),this.apiService.apodDate(this.paramValue).subscribe(t=>{this.arrayApod=t,console.log(this.arrayApod)},t=>{console.error(t)})}};i.\u0275fac=function(n){return new(n||i)(m(S),m(b))},i.\u0275cmp=y({type:i,selectors:[["app-blog-detail"]],standalone:!0,features:[v],decls:15,vars:8,consts:[[1,"container","mx-auto","py-10"],[1,"bg-center","p-4","object-none","h-80","w-full","transition-all","duration-300","cursor-pointer","filter","grayscale","hover:grayscale-0","rounded-md",3,"src"],[1,"mb-4","text-3xl","font-extrabold","text-center","text-gray-900","dark:text-white","md:text-5xl","lg:text-6xl"],[1,"text-transparent","bg-clip-text","bg-gradient-to-r","to-red-800","from-red-400"],[1,"text-zinc-100","hover:text-slate-400","transition-all","duration-300","text-xl","mb-4","p-4","text-justify"],[1,"flex","items-center","gap-4"],["alt","",1,"w-10","h-10","rounded-full",3,"src"],[1,"font-medium","text-white"],[1,"text-sm","text-gray-500","dark:text-gray-400"]],template:function(n,e){n&1&&(r(0,"section",0),u(1,"img",1),r(2,"h1",2)(3,"span",3),l(4),o()(),r(5,"p",4),l(6),o(),r(7,"div",5),u(8,"img",6),r(9,"div",7)(10,"div"),l(11),o(),r(12,"div",8),l(13),x(14,"date"),o()()()()),n&2&&(a(),c("src",e.arrayApod==null?null:e.arrayApod.url,s),a(3),p(e.arrayApod==null?null:e.arrayApod.title),a(2),p(e.arrayApod==null?null:e.arrayApod.explanation),a(2),c("src",e.arrayApod==null?null:e.arrayApod.url,s),a(3),p(e.arrayApod==null?null:e.arrayApod.copyright),a(2),f(" ",h(14,6,e.arrayApod==null?null:e.arrayApod.date)," "))},dependencies:[A,g]});let d=i;return d})();export{M as BlogDetailComponent};
