/* ONTO design system v1 · behaviour: waffles, dock, model sphere */
document.querySelectorAll('.waffle[data-n]').forEach(w=>{const n=+w.dataset.n,f=+w.dataset.f;let h='';for(let i=0;i<n;i++)h+=i<f?'<i class="on"></i>':'<i></i>';w.innerHTML=h});
(()=>{const d=document.querySelector('.dock'),h=document.querySelector('.top');if(!d||!h)return;new IntersectionObserver(e=>d.classList.toggle('on',!e[0].isIntersecting)).observe(h)})();

const PAL={idle:[[40,140,255],[110,80,240],[255,120,40]],think:[[90,90,255],[200,80,230],[40,200,255]],limit:[[90,90,255],[255,59,48],[255,140,60]],ok:[[60,120,255],[52,199,89],[40,220,200]]};
const SPD={idle:.25,think:1.4,limit:.6,ok:.35};
document.querySelectorAll('canvas[data-s]').forEach(c=>{const px=Math.min(+(c.dataset.px||260),innerWidth<700?innerWidth-120:9999),D=Math.min(2,devicePixelRatio||1);c.width=px*D;c.height=px*D;c.style.width=px+'px';c.style.height=px+'px';c._x=c.getContext('2d');c._x.scale(D,D);c._px=px});
function orb(c,t){const x=c._x,S=c._px,R=S*.42,cx=S/2,cy=S/2,s=c.dataset.s,p=PAL[s],k=SPD[s];x.clearRect(0,0,S,S);
 // halo
 let g=x.createRadialGradient(cx,cy,R*.9,cx,cy,R*1.13);g.addColorStop(0,`rgba(${p[0]},.35)`);g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.beginPath();x.arc(cx,cy,R*1.13,0,7);x.fill();
 x.save();x.beginPath();x.arc(cx,cy,R,0,7);x.clip();
 x.fillStyle='#05060c';x.fillRect(0,0,S,S);
 x.globalCompositeOperation='screen';
 p.forEach((col,i)=>{const a=t*.001*k*(1+i*.35)+i*2.1,rr=R*(.35+.12*Math.sin(t*.0007*k+i));const px=cx+Math.cos(a)*R*.38,py=cy+Math.sin(a*1.3)*R*.32;
  g=x.createRadialGradient(px,py,0,px,py,R*.95);g.addColorStop(0,`rgba(${col},.85)`);g.addColorStop(.5,`rgba(${col},.3)`);g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,S,S)});
 if(s==='limit'){const y=cy+Math.sin(t*.002)*R*.15;g=x.createLinearGradient(0,y-R*.12,0,y+R*.12);g.addColorStop(0,'rgba(255,59,48,0)');g.addColorStop(.5,'rgba(255,90,70,.95)');g.addColorStop(1,'rgba(255,59,48,0)');x.fillStyle=g;x.fillRect(0,y-R*.12,S,R*.24)}
 // the tangle: the same light threads sometimes drift into a double helix, then fall back into chaos
 if(!c._ev){c._ev={next:2000+Math.random()*6000,start:-1e9}}const ev=c._ev;if(t>ev.next&&t-ev.start>9000){ev.start=t;ev.next=t+12000+Math.random()*14000}
 const el=t-ev.start,D=7000;let f=0;if(el<D){const q=el/D;f=q<.35?q/.35:q<.65?1:1-(q-.65)/.35;f=f*f*(3-2*f)}
 if(S>=48){const L=14,M=64,rot=t*.0004*k,A=R*.27,Hh=R*1.45,tilt=-.3;
  for(let i=0;i<L;i++){const strand=i%2,off=(i>>1)*.035-.1;x.beginPath();
   for(let j=0;j<=M;j++){const th=j/M*Math.PI*2;
    const ea=rot+i*.45,rx=R*(.2+i*.055),ry=R*(.12+i*.04),ex=Math.cos(th)*rx,ey=Math.sin(th)*ry,X0=cx+ex*Math.cos(ea)-ey*Math.sin(ea),Y0=cy+ex*Math.sin(ea)+ey*Math.cos(ea);
    const u=j/M,yy=-Hh/2+Hh*u,ang=u*Math.PI*3.6+t*.0011+strand*Math.PI+off,hx=Math.cos(ang)*A*(1+off),X1=cx+hx*Math.cos(tilt)-yy*Math.sin(tilt),Y1=cy+hx*Math.sin(tilt)+yy*Math.cos(tilt);
    const px=X0+(X1-X0)*f,py=Y0+(Y1-Y0)*f;j?x.lineTo(px,py):x.moveTo(px,py)}
   x.strokeStyle=`rgba(255,255,255,${.08+.22*f})`;x.lineWidth=1+.6*f;x.stroke()}
  if(f>.45){const g2=(f-.45)/.55,nr=18;for(let r=1;r<nr;r++){const u=r/nr,yy=-Hh/2+Hh*u,a0=u*Math.PI*3.6+t*.0011;const P=sh=>{const hx=Math.cos(a0+sh)*A;return [cx+hx*Math.cos(tilt)-yy*Math.sin(tilt),cy+hx*Math.sin(tilt)+yy*Math.cos(tilt)]};const [ax,ay]=P(0),[bx,by]=P(Math.PI);const hot=s==="limit"&&r===9;x.strokeStyle=hot?`rgba(255,80,60,${g2})`:`rgba(255,255,255,${.3*g2})`;x.lineWidth=hot?Math.max(2,S*.018):1;x.beginPath();x.moveTo(ax,ay);x.lineTo(bx,by);x.stroke()}}}
 x.globalCompositeOperation='source-over';x.restore();
 // glass rim + highlight
 x.lineWidth=Math.max(1,S*.008);g=x.createLinearGradient(0,cy-R,0,cy+R);g.addColorStop(0,'rgba(255,255,255,.75)');g.addColorStop(.5,'rgba(255,255,255,.12)');g.addColorStop(1,'rgba(255,255,255,.45)');x.strokeStyle=g;x.beginPath();x.arc(cx,cy,R,0,7);x.stroke();
 g=x.createRadialGradient(cx-R*.35,cy-R*.45,0,cx-R*.35,cy-R*.45,R*.6);g.addColorStop(0,'rgba(255,255,255,.35)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.beginPath();x.arc(cx,cy,R,0,7);x.fill()}
const cs=[...document.querySelectorAll('canvas[data-s]')];const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
function f(t){cs.forEach(c=>orb(c,t));if(!RM)requestAnimationFrame(f)}if(cs.length)requestAnimationFrame(f);

document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',()=>{try{navigator.clipboard.writeText(b.dataset.copy);const t=b.textContent;b.textContent='Copied';setTimeout(()=>b.textContent=t,1500)}catch(e){}}));
