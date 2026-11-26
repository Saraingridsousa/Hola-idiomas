import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Menu, X, MessagesSquare, Compass, GraduationCap, Globe2, CalendarDays, Laptop, Users, BookOpen, Sparkles } from 'lucide-react';
import { Hero } from './components/Hero';
import { languages, type LanguageId } from './data/courses';
import { CourseFinder } from './components/CourseFinder';

const methods = [
  { number:'01', icon:MessagesSquare, title:'Fale desde o início.', description:'Situações reais, conversas guiadas e confiança para se expressar.' },
  { number:'02', icon:Compass, title:'Aprenda com propósito.', description:'Atividades conectadas aos seus interesses, da viagem à carreira.' },
  { number:'03', icon:GraduationCap, title:'Evolua no seu ritmo.', description:'Uma jornada em etapas, com prática e feedback para continuar.' },
];
const faqs = [
  ['Preciso saber alguma coisa antes de começar?', 'Não. A proposta inclui cursos para iniciantes e para quem já tem experiência.'],
  ['Quais idades podem participar?', 'A escola foi idealizada para crianças, adolescentes, adultos e pessoas com 60 anos ou mais.'],
  ['Como funcionam as modalidades?', 'O catálogo apresenta aulas online, presenciais e particulares como opções demonstrativas.'],
  ['O teste de nível é uma certificação?', 'Não. É uma atividade educativa e uma estimativa inicial, sem validade oficial.'],
  ['Posso agendar uma aula real?', 'Não. A ¡Hola! Idiomas é uma escola fictícia criada para demonstrar uma experiência digital.'],
];
export default function App() {
  const [menu, setMenu] = useState(false);
  const [language, setLanguage] = useState<LanguageId>('en');
  return <>
    <a className="skip" href="#main">Ir para o conteúdo</a>
    <header className="header"><div className="wrap nav">
      <a href="#inicio" className="brand" aria-label="Hola Idiomas, início"><span>¡hola<span className="brand-accent">!</span></span><small>IDIOMAS</small></a>
      <button className="mobile-menu" aria-label={menu?'Fechar menu':'Abrir menu'} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      <nav className={menu?'navlinks open':'navlinks'} aria-label="Principal">
        <a href="#idiomas" onClick={()=>setMenu(false)}>Idiomas</a><a href="#metodo" onClick={()=>setMenu(false)}>Metodologia</a><a href="#modalidades" onClick={()=>setMenu(false)}>Modalidades</a><a href="#nivelamento" onClick={()=>setMenu(false)}>Nivelamento</a>
        <a className="btn small primary" href="#experimental" onClick={()=>setMenu(false)}>Aula experimental <ArrowUpRight size={16}/></a>
      </nav>
    </div></header>
    <main id="main">
      <Hero/>
      <div className="language-band" aria-hidden="true"><div className="band-track">{[0,1].map(i=><div key={i} className="band-group"><span>Hello!</span><Sparkles/><span>¡Hola!</span><Sparkles/><span>Bonjour!</span><Sparkles/><span>Ciao!</span><Sparkles/><span>Let's talk.</span><Sparkles/></div>)}</div></div>
      <section className="wrap section" id="idiomas">
        <div className="section-head"><div><div className="eyebrow">01 / ESCOLHA SUA PRÓXIMA PALAVRA</div><h2>Qual idioma<br/>é a sua cara<span className="accent">?</span></h2></div><p>Quatro maneiras de conhecer o mundo. Escolha a que faz sentido para sua história.</p></div>
        <div className="language-grid">{languages.map(l=><article className="language-card" key={l.id} style={{background:l.accent}}><span className="language-code">{l.symbol} /</span><div className="greeting">{l.greeting}</div><h3>{l.name}</h3><p>{l.description}</p><a href="#recomendacao" onClick={()=>setLanguage(l.id)} className="round-link" aria-label={'Conhecer curso de '+l.name}><ArrowUpRight/></a></article>)}</div>
      </section>
      <CourseFinder language={language} onLanguageChange={setLanguage}/>
      <section className="wrap section" id="perfil"><div className="profile-banner"><div><div className="eyebrow">02 / PARA CADA FASE DA VIDA</div><h2>Seu ritmo.<br/>Sua história.</h2><p>Não existe uma idade certa para aprender. Existe a vontade de começar.</p></div><div className="profile-tiles">{['Kids · 6–11','Teens · 12–17','Adults · 18+','Conexões · 60+'].map((a,i)=><div className="profile-tile" key={a}><span>0{i+1}</span>{a}<ArrowRight size={17}/></div>)}</div></div></section>
      <section className="wrap section" id="metodo"><div className="section-head"><div><div className="eyebrow">03 / NOSSA METODOLOGIA</div><h2>Menos decoreba.<br/>Mais conversa<span className="accent">.</span></h2></div><p>O idioma ganha sentido quando faz parte da sua vida.</p></div><div className="method-grid">{methods.map(m=><article className="method-card" key={m.number}><div className="method-top"><m.icon size={31}/><span>{m.number}</span></div><h3>{m.title}</h3><p>{m.description}</p></article>)}</div></section>
      <section className="wrap section" id="modalidades"><div className="section-head"><div><div className="eyebrow">04 / DO SEU JEITO</div><h2>O mundo cabe<br/>na sua rotina.</h2></div></div><div className="modality-grid">{[{icon:Laptop,title:'Online',text:'Aprenda de onde estiver.'},{icon:Users,title:'Presencial',text:'Conexões em sala de aula.'},{icon:BookOpen,title:'Particular',text:'Atenção individual ao seu objetivo.'}].map(m=><article key={m.title}><m.icon size={30}/><h3>{m.title}</h3><p>{m.text}</p></article>)}</div></section>
      <section className="wrap section" id="nivelamento"><div className="cta-panel"><div><div className="eyebrow">05 / DESCUBRA SEU PONTO DE PARTIDA</div><h2>Qual é o seu nível?</h2><p>Uma experiência rápida para conhecer seu ponto de partida. Em desenvolvimento.</p></div><a className="btn yellow" href="#experimental">Comece sua jornada <ArrowUpRight/></a></div></section>
      <section className="wrap section" id="experimental"><div className="section-head"><div><div className="eyebrow">06 / PRIMEIRO PASSO</div><h2>Vamos conversar<span className="accent">?</span></h2></div><p>Em breve, uma simulação de aula experimental para experimentar a jornada de um aluno.</p></div><div className="demo-note"><CalendarDays/> Projeto demonstrativo — não realizamos reservas reais.</div></section>
      <section className="wrap section faq" id="faq"><div><div className="eyebrow">07 / PERGUNTAS FREQUENTES</div><h2>Ainda ficou<br/>alguma dúvida?</h2></div><div>{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    </main>
    <footer><div className="wrap footer-inner"><div><a className="brand" href="#inicio"><span>¡hola!</span><small>IDIOMAS</small></a><p>Toda conexão começa com um olá.</p></div><div><Globe2 size={23}/><p>Projeto fictício de portfólio. Sem aulas, matrículas ou reservas reais.</p></div><a href="#inicio">Voltar ao topo ↑</a></div></footer>
  </>;
}
