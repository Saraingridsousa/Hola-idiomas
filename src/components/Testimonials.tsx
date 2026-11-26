import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { ArrowLeft, ArrowRight, Quote, Pause, Play } from 'lucide-react';
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
 const track=useRef<HTMLDivElement>(null);
 const reduced=useReducedMotion();
 const [paused,setPaused]=useState(false);
 const hover=useRef(false);
 const focus=useRef(false);
 const manualUntil=useRef(0);
 const drag=useRef<{id:number;x:number;left:number}|null>(null);
 const [dragging,setDragging]=useState(false);
 const hold=()=>{manualUntil.current=performance.now()+2600};
 const period=(el:HTMLDivElement)=>{const first=el.children[0] as HTMLElement|undefined;const next=el.children[stories.length] as HTMLElement|undefined;return first&&next?next.offsetLeft-first.offsetLeft:0};
 useEffect(()=>{
  const el=track.current;if(!el)return;
  el.scrollLeft=period(el);
 },[]);
 useEffect(()=>{
  const el=track.current;if(!el||paused||reduced)return;
  let frame=0,last=0,carry=0,visible=true;
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting});
  observer.observe(el);
  function tick(now:number){
   const elapsed=last?Math.min(now-last,50):0;last=now;
   if(el&&visible&&!document.hidden&&!hover.current&&!focus.current&&!drag.current&&now>=manualUntil.current){
    const width=period(el);
    if(width>0){
     const position=wrapCarouselPosition(el.scrollLeft,width);
     carry+=elapsed*0.035;
     const whole=Math.floor(carry);carry-=whole;
     el.scrollLeft=wrapCarouselPosition(position+whole,width);
    }
   }else carry=0;
   frame=requestAnimationFrame(tick);
  }
  frame=requestAnimationFrame(tick);
  return()=>{cancelAnimationFrame(frame);observer.disconnect()};
 },[paused,reduced]);
 function move(direction:number){
  const el=track.current;if(!el)return;
  hold();
  const width=period(el);
  if(width>0)el.scrollLeft=wrapCarouselPosition(el.scrollLeft,width);
  const card=el.firstElementChild as HTMLElement|null;
  el.scrollBy({left:direction*((card?.offsetWidth??280)+16),behavior:reduced?'instant':'smooth'});
 }
 function startDrag(e:PointerEvent<HTMLDivElement>){
  hold();
  if(e.pointerType!=='mouse'||e.button!==0)return;
  const el=e.currentTarget;const width=period(el);
  if(width>0)el.scrollLeft=wrapCarouselPosition(el.scrollLeft,width);
  drag.current={id:e.pointerId,x:e.clientX,left:el.scrollLeft};
  el.setPointerCapture(e.pointerId);setDragging(true);
 }
 function moveDrag(e:PointerEvent<HTMLDivElement>){
  const active=drag.current;if(!active||active.id!==e.pointerId)return;
  const el=e.currentTarget;const width=period(el);
  const next=active.left+active.x-e.clientX;
  el.scrollLeft=width>0?wrapCarouselPosition(next,width):next;
  hold();
 }
 function finishDrag(e:PointerEvent<HTMLDivElement>){
  if(drag.current?.id===e.pointerId){drag.current=null;setDragging(false);if(e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId)}
  hold();
 }
 return <section className="wrap section testimonials" id="historias"><div className="section-head"><div><div className="eyebrow">CONEXÕES QUE TRANSFORMAM</div><h2>Histórias que começam<br/>com um olá<span className="accent">.</span></h2><p className="fiction-note">Depoimentos fictícios, criados para ilustrar a experiência de alunos.</p></div><div className="story-controls">
 <button type="button" aria-label="Depoimento anterior" onClick={()=>move(-1)}><ArrowLeft/></button>
 {!reduced&&<button type="button" aria-label={paused?'Reproduzir movimento automático':'Pausar movimento automático'} title={paused?'Reproduzir':'Pausar'} onClick={()=>{setPaused(p=>!p);hold()}}>{paused?<Play size={19}/>:<Pause size={19}/>}</button>}
 <button type="button" aria-label="Próximo depoimento" onClick={()=>move(1)}><ArrowRight/></button></div></div>
 <div className={'story-track story-loop'+(dragging?' is-dragging':'')} ref={track} tabIndex={0} role="region" aria-label="Carrossel de depoimentos ilustrativos. Use as setas para navegar."
 onMouseEnter={()=>{hover.current=true}} onMouseLeave={()=>{hover.current=false;hold()}}
 onFocus={e=>{focus.current=e.currentTarget.matches(':focus-visible')}} onBlur={()=>{focus.current=false;hold()}}
 onKeyDown={e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowRight'?1:-1)}}}
 onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={finishDrag} onPointerCancel={finishDrag} onLostPointerCapture={finishDrag}
 onTouchMove={hold} onTouchEnd={hold} onWheel={hold}>
 {[0,1,2].flatMap(copy=>stories.map(s=><article className="story-card" key={copy+'-'+s.name} aria-hidden={copy!==1?true:undefined} style={{background:s.color}}><Quote size={34} aria-hidden="true"/><blockquote>{s.quote}</blockquote><div className="story-person"><span className="story-avatar" aria-hidden="true">{s.initials}</span><div><strong>{s.name}</strong><small>{s.profile}</small></div></div></article>))}</div>
 <p className="story-hint">Arraste para explorar outras histórias <ArrowRight size={15}/></p></section>;
}
