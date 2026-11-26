import { useId,useState } from 'react';
import { Plus, MessageCircle, ArrowUpRight } from 'lucide-react';
const faqs = [
 ['Preciso saber alguma coisa antes de começar?', 'Não. A proposta inclui cursos para iniciantes e para quem já tem experiência.'],
 ['Quais idades podem participar?', 'A escola foi idealizada para crianças, adolescentes, adultos e pessoas com 60 anos ou mais.'],
 ['Como funcionam as modalidades?', 'O catálogo apresenta aulas online, presenciais e particulares como opções demonstrativas.'],
 ['O teste de nível é uma certificação?', 'Não. É uma atividade educativa e uma estimativa inicial, sem validade oficial.'],
 ['Posso agendar uma aula real?', 'Não. A ¡Hola! Idiomas é uma escola fictícia criada para demonstrar uma experiência digital.'],
];
export function Faq(){
 const id=useId();
 const [open,setOpen]=useState<number|null>(0);
 return <section className="wrap section faq" id="faq">
 <div><div className="eyebrow">07 / PERGUNTAS FREQUENTES</div><h2>Ainda ficou<br/>alguma dúvida<span className="accent">?</span></h2><div className="faq-aside"><MessageCircle size={25}/><div><p>Que tal experimentar a jornada?</p><a href="#recomendacao">Encontre seu curso <ArrowUpRight size={15}/></a></div></div></div>
 <div className="faq-list">{faqs.map(([q,a],i)=>{
 const expanded=open===i;const button=id+'-question-'+i;const panel=id+'-answer-'+i;
 return <article className={'faq-item'+(expanded?' is-open':'')} key={q}><h3><button id={button} type="button" aria-expanded={expanded} aria-controls={panel} onClick={()=>setOpen(expanded?null:i)}><span>{q}</span><span className="faq-icon"><Plus size={20}/></span></button></h3><div id={panel} role="region" aria-labelledby={button} aria-hidden={!expanded} className="faq-answer"><div><p>{a}</p></div></div></article>
 })}</div></section>;
}
