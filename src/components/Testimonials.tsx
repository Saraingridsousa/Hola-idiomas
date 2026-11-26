import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { wrapCarouselPosition } from '../lib/carousel';
const stories=[
 {name:'Júlia M.',initials:'JM',profile:'19 anos · Inglês',quote:'Antes, eu tinha vergonha de falar inglês. Hoje, consigo participar de conversas sem traduzir tudo na minha cabeça.',color:'#dbe3ff'},
 {name:'Rafael L.',initials:'RL',profile:'28 anos · Espanhol',quote:'Sempre quis viajar pela América Latina. Aprender espanhol tornou esse sonho muito mais próximo.',color:'#ffe6a2'},
 {name:'Amanda C.',initials:'AC',profile:'Responsável · Kids',quote:'Minha filha começou a usar palavras em inglês no dia a dia. É muito legal perceber o interesse dela em aprender.',color:'#ffdcd5'},
 {name:'Helena P.',initials:'HP',profile:'64 anos · Italiano',quote:'Comecei a estudar italiano depois de me aposentar. Descobri um novo hobby e novas maneiras de conhecer outras culturas.',color:'#d7ece4'},
 {name:'Lucas R.',initials:'LR',profile:'16 anos · Francês',quote:'Gosto de aprender com músicas e desafios. Estudar ficou muito mais interessante quando comecei a usar o idioma no meu dia a dia.',color:'#eee2ff'},
];
export function Testimonials(){
 const rail=useRef<HTMLDivElement>(null);
 const reduced=useReducedMotion();
 const offset=useRef(0);
 const holdUntil=useRef(0);
 const keyboardFocus=useRef(false);
 const drag=useRef<{id:number;x:number;offset:number}|null>(null);
 const pending=useRef(0);
 const [dragging,setDragging]=useState(false);
 function period(){
  const el=rail.current;
  if(!el)return 0;
  const first=el.children[0] as HTMLElement|undefined;
  const repeated=el.children[stories.length] as HTMLElement|undefined;
  return first&&repeated?repeated.offsetLeft-first.offsetLeft:0;
 }
 function render(){
  const el=rail.current;
  if(!el)return;
  const width=period();
  if(width<=0)return;
  offset.current=wrapCarouselPosition(offset.current,width);
  el.style.transform='translate3d('+(-offset.current)+'px,0,0)';
 }
 function hold(){holdUntil.current=performance.now()+1800}
 useEffect(()=>{
  const el=rail.current;if(!el)return;
  let frame=0,last=0;
  function tick(now:number){
   const dt=last?Math.min(now-last,50):0;last=now;
   if(!drag.current){
    if(Math.abs(pending.current)>.1){
     const step=reduced?pending.current:pending.current*Math.min(1,dt/65);
     offset.current+=step;pending.current-=step;
    }else{
     offset.current+=pending.current;pending.current=0;
     if(!reduced&&!keyboardFocus.current&&!document.hidden&&now>=holdUntil.current)offset.current+=dt*.045;
    }
   }
   render();
   frame=requestAnimationFrame(tick);
  }
  render();frame=requestAnimationFrame(tick);
  return()=>cancelAnimationFrame(frame);
 },[reduced]);
 function move(direction:number){
  hold();
  const card=rail.current?.firstElementChild as HTMLElement|null;
  pending.current+=direction*((card?.offsetWidth??280)+16);
 }
 function startDrag(e:PointerEvent<HTMLDivElement>){
  if(!e.isPrimary||(e.pointerType==='mouse'&&e.button!==0))return;
  hold();pending.current=0;
  drag.current={id:e.pointerId,x:e.clientX,offset:offset.current};
  e.currentTarget.setPointerCapture(e.pointerId);setDragging(true);
 }
 function moveDrag(e:PointerEvent<HTMLDivElement>){
  const active=drag.current;if(!active||active.id!==e.pointerId)return;
  offset.current=active.offset+active.x-e.clientX;render();
 }
 function finishDrag(e:PointerEvent<HTMLDivElement>){
  if(drag.current?.id!==e.pointerId)return;
  drag.current=null;setDragging(false);hold();
  if(e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId);
 }
 return <section className="wrap section testimonials" id="historias">
 <div className="section-head"><div><div className="eyebrow">CONEXÕES QUE TRANSFORMAM</div><h2>Histórias que começam<br/>com um olá<span className="accent">.</span></h2><p className="fiction-note">Depoimentos fictícios, criados para ilustrar a experiência de alunos.</p></div>
 <div className="story-controls"><button type="button" aria-label="Depoimento anterior" onClick={()=>move(-1)}><ArrowLeft/></button><button type="button" aria-label="Próximo depoimento" onClick={()=>move(1)}><ArrowRight/></button></div></div>
 <div className={'story-viewport'+(dragging?' is-dragging':'')} tabIndex={0} role="region" aria-label="Carrossel de depoimentos ilustrativos. Use as setas para navegar."
 onFocus={e=>{keyboardFocus.current=e.currentTarget.matches(':focus-visible')}} onBlur={()=>{keyboardFocus.current=false;hold()}}
 onKeyDown={e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowRight'?1:-1)}}}
 onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={finishDrag} onPointerCancel={finishDrag} onLostPointerCapture={finishDrag}>
 <div className="story-rail" ref={rail}>
 {[0,1,2].flatMap(copy=>stories.map(s=><article className="story-card" key={copy+'-'+s.name} aria-hidden={copy!==1?true:undefined} style={{background:s.color}}><Quote size={34} aria-hidden="true"/><blockquote>{s.quote}</blockquote><div className="story-person"><span className="story-avatar" aria-hidden="true">{s.initials}</span><div><strong>{s.name}</strong><small>{s.profile}</small></div></div></article>))}
 </div></div><p className="story-hint">Arraste para explorar outras histórias <ArrowRight size={15}/></p></section>;
}
