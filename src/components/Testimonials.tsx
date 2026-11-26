import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
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
 const [edges,setEdges]=useState({start:true,end:false});
 function sync(){const el=track.current;if(el)setEdges({start:el.scrollLeft<2,end:el.scrollLeft+el.clientWidth>=el.scrollWidth-2})}
 function move(direction:number){const el=track.current;if(!el)return;const card=el.firstElementChild as HTMLElement|null;el.scrollBy({left:direction*((card?.offsetWidth??280)+16),behavior:reduced?'instant':'smooth'})}
 return <section className="wrap section testimonials" id="historias"><div className="section-head"><div><div className="eyebrow">CONEXÕES QUE TRANSFORMAM</div><h2>Histórias que começam<br/>com um olá<span className="accent">.</span></h2><p className="fiction-note">Depoimentos fictícios, criados para ilustrar a experiência de alunos.</p></div><div className="story-controls"><button type="button" aria-label="Depoimento anterior" onClick={()=>move(-1)} disabled={edges.start}><ArrowLeft/></button><button type="button" aria-label="Próximo depoimento" onClick={()=>move(1)} disabled={edges.end}><ArrowRight/></button></div></div>
 <div className="story-track" ref={track} onScroll={sync} tabIndex={0} aria-label="Carrossel de depoimentos ilustrativos">{stories.map(s=><article className="story-card" key={s.name} style={{background:s.color}}><Quote size={34} aria-hidden="true"/><blockquote>{s.quote}</blockquote><div className="story-person"><span className="story-avatar" aria-hidden="true">{s.initials}</span><div><strong>{s.name}</strong><small>{s.profile}</small></div></div></article>)}</div><p className="story-hint">Deslize para explorar outras histórias <ArrowRight size={15}/></p></section>;
}
