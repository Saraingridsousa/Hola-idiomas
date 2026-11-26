import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { EditorialPhoto } from './EditorialPhoto';
import type { PhotoKey } from '../data/photos';
import type { Profile } from '../lib/recommendation';
const profiles: {name:string; age:string; description:string; audience:Profile['audience']; photo:PhotoKey; color:string}[] = [
 {name:'Hola! Kids',age:'6–11 ANOS',description:'Pequenas palavras, grandes descobertas.',audience:'Crianças',photo:'kids',color:'#ffe6a2'},
 {name:'Hola! Teens',age:'12–17 ANOS',description:'Música, cultura e seu universo em novos idiomas.',audience:'Adolescentes',photo:'teens',color:'#ffdcd5'},
 {name:'Hola! Adults',age:'18–59 ANOS',description:'Trabalho, viagens e novas oportunidades.',audience:'Adultos',photo:'adults',color:'#dbe3ff'},
 {name:'Hola! Conexões',age:'60+ ANOS',description:'Curiosidade e novas amizades em qualquer idade.',audience:'60+',photo:'senior',color:'#d7ece4'},
];
export function AudienceCards({onChoose}:{onChoose:(audience:Profile['audience'])=>void}){
 const reduced=useReducedMotion();
 return <section className="wrap section" id="perfil">
 <div className="section-head"><div><div className="eyebrow">02 / PARA CADA FASE DA VIDA</div><h2>Seu ritmo.<br/>Sua história<span className="accent">.</span></h2></div><p>Não existe uma idade certa para aprender. Escolha sua fase e encontre uma trilha que combine com você.</p></div>
 <div className="audience-grid">{profiles.map((p,i)=><motion.article key={p.audience} className="audience-card" style={{background:p.color}} initial={reduced?false:{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.4,delay:reduced?0:i*.07}}>
 <div className="audience-image"><EditorialPhoto photo={p.photo}/><span>{p.age}</span></div><div className="audience-copy"><h3>{p.name}</h3><p>{p.description}</p><a className="audience-link" href="#recomendacao" onClick={()=>onChoose(p.audience)}>Encontrar meu curso <ArrowUpRight size={17}/></a></div></motion.article>)}</div>
 </section>;
}
