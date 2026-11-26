import { MessagesSquare, Headphones, Globe2, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { EditorialPhoto } from './EditorialPhoto';
const activities = [
 {photo:'group',icon:MessagesSquare,title:'Conversa sem roteiro.',text:'Role-plays, situações do dia a dia e muita troca de ideias.',tag:'01 / TALK TOGETHER'},
 {photo:'online',icon:Headphones,title:'Aprenda onde estiver.',text:'Aulas online, escuta ativa e atividades que cabem na rotina.',tag:'02 / CONNECT'},
 {photo:'culture',icon:Globe2,title:'Cultura em movimento.',text:'Explore música, cinema, viagens e novas perspectivas.',tag:'03 / EXPLORE'},
] as const;
export function LearningExperiences(){
 const reduced=useReducedMotion();
 return <section className="wrap section" id="experiencias"><div className="section-head"><div><div className="eyebrow">APRENDIZAGEM ALÉM DA SALA</div><h2>O idioma acontece<br/>fora do livro<span className="accent">.</span></h2></div><p>O melhor jeito de aprender é fazer o idioma participar da sua vida.</p></div>
 <div className="experience-grid">{activities.map((a,i)=><motion.article key={a.photo} className={'experience-card experience-'+i} initial={reduced?false:{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.45,delay:reduced?0:i*.08}}><div className="experience-image"><EditorialPhoto photo={a.photo}/></div><div className="experience-copy"><div className="experience-tag"><a.icon size={20}/>{a.tag}</div><h3>{a.title}</h3><p>{a.text}</p></div></motion.article>)}</div>
 <a className="experience-cta" href="#experimental">Experimente uma aula <ArrowUpRight size={18}/></a></section>;
}
