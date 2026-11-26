import { ArrowUpRight, MessagesSquare } from 'lucide-react';
import { motion,useReducedMotion } from 'motion/react';
import { EditorialPhoto } from './EditorialPhoto';
import type { LanguageId } from '../data/courses';
import type { PhotoKey } from '../data/photos';
const teachers:{name:string;language:LanguageId;tag:string;photo:PhotoKey;specialty:string;hello:string;color:string}[]=[
 {name:'Teacher Sophie',language:'en',tag:'INGLÊS',photo:'teacherEn',specialty:'Conversação e inglês do cotidiano.',hello:'Hello!',color:'#dbe3ff'},
 {name:'Profe Miguel',language:'es',tag:'ESPANHOL',photo:'teacherEs',specialty:'Comunicação e cultura latino-americana.',hello:'¡Hola!',color:'#ffe6a2'},
 {name:'Prof. Camille',language:'fr',tag:'FRANCÊS',photo:'teacherFr',specialty:'Expressão oral e descobertas culturais.',hello:'Bonjour!',color:'#ffdcd5'},
 {name:'Prof. Luca',language:'it',tag:'ITALIANO',photo:'teacherIt',specialty:'Italiano para viagens e conversas reais.',hello:'Ciao!',color:'#d7ece4'},
];
export function Teachers({onChoose}:{onChoose:(id:LanguageId)=>void}){
 const reduced=useReducedMotion();
 return <section className="wrap section" id="professores">
 <div className="section-head"><div><div className="eyebrow">GENTE QUE ENSINA, GENTE QUE CONECTA</div><h2>Conheça quem vai<br/>conversar com você<span className="accent">.</span></h2></div><p>Quatro perfis fictícios de educadores para imaginar diferentes formas de aprender. As fotos são ilustrativas e não identificam os personagens.</p></div>
 <div className="teacher-grid">{teachers.map((t,i)=><motion.article key={t.language} className="teacher-card" style={{background:t.color}} initial={reduced?false:{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.4,delay:reduced?0:i*.07}}>
 <div className="teacher-photo"><EditorialPhoto photo={t.photo}/><span className="teacher-greeting"><MessagesSquare size={16}/>{t.hello}</span><span className="teacher-photo-label">FOTO ILUSTRATIVA</span></div>
 <div className="teacher-copy"><div className="teacher-tag">{t.tag} · PERFIL FICTÍCIO</div><h3>{t.name}</h3><p>{t.specialty}</p><a href="#experimental" onClick={()=>onChoose(t.language)} className="audience-link">Explorar uma aula <ArrowUpRight size={17}/></a></div>
 </motion.article>)}</div></section>;
}
