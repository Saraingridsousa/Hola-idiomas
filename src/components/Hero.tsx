import { ArrowUpRight, Globe2, MessageCircle, Sparkles, Play } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export function Hero() {
  const reduced = useReducedMotion();
  return <section className="hero wrap" id="inicio">
    <div className="hero-copy">
      <div className="eyebrow"><span className="dot"/> IDIOMAS PARA A VIDA REAL</div>
      <h1>O mundo começa<br/>com um <em>olá<span>.</span></em></h1>
      <p>Aprenda a falar, não só a traduzir. Descubra novos idiomas, culturas e possibilidades — do seu jeito, em qualquer idade.</p>
      <div className="actions"><a className="btn primary" href="#idiomas">Encontre seu curso <ArrowUpRight size={19}/></a><a className="btn text-btn" href="#nivelamento"><span className="play"><Play size={15} fill="currentColor"/></span> Teste seu nível</a></div>
      <div className="hero-note"><Globe2 size={18}/> Quatro idiomas. Inúmeras conexões.</div>
    </div>
    <motion.div className="hero-art" initial={reduced?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.6}} aria-hidden="true">
      <div className="art-grid"/><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
      <div className="art-label">01 / A CONVERSA É SÓ O COMEÇO</div>
      <svg className="people-art" viewBox="0 0 480 390" xmlns="http://www.w3.org/2000/svg">
        <defs><clipPath id="arch"><path d="M86 390V163a154 154 0 0 1 308 0v227z"/></clipPath></defs>
        <path d="M86 390V163a154 154 0 0 1 308 0v227z" fill="#f9e8a9"/>
        <g clipPath="url(#arch)">
          <circle cx="242" cy="125" r="75" fill="#ffcb45"/>
          <path d="M0 332 Q110 258 240 334 T480 328 V400H0Z" fill="#b8dcd0"/>
          <path d="M66 390v-38q12-67 82-75h25q73 3 91 75v38" fill="#ff806c"/>
          <path d="M127 282v-35h50v40q-25 23-50-5" fill="#b96e4d"/>
          <path d="M105 189q-9-59 42-66 58-10 67 49l-7 50-104-7z" fill="#18233e"/>
          <ellipse cx="156" cy="205" rx="43" ry="54" fill="#c9825b"/>
          <path d="M111 192q-17-58 38-62 41-3 58 34-29 8-53-16-15 31-43 44" fill="#18233e"/>
          <circle cx="140" cy="203" r="3" fill="#18233e"/><circle cx="174" cy="203" r="3" fill="#18233e"/>
          <path d="M145 226q12 15 26-2" stroke="#18233e" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M221 390v-36q12-72 82-77h27q77 6 89 77v36" fill="#2947d9"/>
          <path d="M292 284v-38h49v38q-23 23-49 0" fill="#e4ad86"/>
          <path d="M268 187q-12-66 49-66 54 0 55 54l-3 35h-101z" fill="#8c4b32"/>
          <ellipse cx="317" cy="205" rx="43" ry="54" fill="#edb992"/>
          <path d="M271 185q-6-63 45-63 52 0 53 42-35-20-62-14-10 26-36 35" fill="#8c4b32"/>
          <g stroke="#18233e" strokeWidth="2.5" fill="none"><rect x="280" y="193" width="31" height="21" rx="8"/><rect x="324" y="193" width="31" height="21" rx="8"/><path d="M311 201h13"/></g>
          <path d="M305 228q12 13 25-2" stroke="#18233e" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M178 390v-37l62-35 64 35v37" fill="#fff9ec"/><path d="M240 318v72m-49-30 34 14m30 0 36-14" stroke="#18233e" strokeWidth="3" fill="none"/>
        </g>
        <g fill="none" stroke="#18233e" strokeWidth="3" strokeLinecap="round"><path d="M57 123v24m-12-12h24M416 219v24m-12-12h24"/><path d="M392 58l15 15m0-15-15 15"/></g>
      </svg>
      <div className="speech speech-one"><MessageCircle size={18}/> Hello!</div>
      <div className="speech speech-two">¡Hola! <Sparkles size={17}/></div>
      <div className="speech speech-three">Bonjour.</div>
      <div className="art-sticker"><span>fala<br/>com o<br/>mundo!</span><ArrowUpRight size={24}/></div>
      <div className="art-caption"><span className="art-caption-dot"/> A próxima palavra pode mudar tudo.</div>
    </motion.div>
  </section>;
}
