import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw, Trophy, Volume2, XCircle, Zap } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { languages, type LanguageId } from '../data/courses';
import { vocabulary, speechLocales, countCorrect } from '../data/challenge';
import { StyledSelect } from './StyledSelect';
function readBest(lang:LanguageId){try{return Math.max(0,Math.min(vocabulary[lang].length,Number(localStorage.getItem('hola-best-'+lang))||0))}catch{return 0}}
export function Challenge({preferredLanguage,onLanguageChange}:{preferredLanguage:LanguageId;onLanguageChange:(id:LanguageId)=>void}){
 const [activeLanguage,setActiveLanguage]=useState<LanguageId>(preferredLanguage);
 const [started,setStarted]=useState(false);
 const [answers,setAnswers]=useState<number[]>([]);
 const [choice,setChoice]=useState<number|null>(null);
 const [audioMessage,setAudioMessage]=useState('');
 const [records,setRecords]=useState<Record<LanguageId,number>>(()=>({en:readBest('en'),es:readBest('es'),fr:readBest('fr'),it:readBest('it')}));
 const language=started?activeLanguage:preferredLanguage;
 const best=records[language];
 const reduced=useReducedMotion();
 const words=vocabulary[language],index=answers.length,done=index===words.length,word=words[index],score=countCorrect(words,answers);
 const canSpeak=typeof window!=='undefined'&&'speechSynthesis' in window&&'SpeechSynthesisUtterance' in window;
 function stopAudio(){if(canSpeak)window.speechSynthesis.cancel()}
 useEffect(()=>()=>{if(typeof window!=='undefined'&&'speechSynthesis' in window)window.speechSynthesis.cancel()},[]);
 function restart(){stopAudio();setAnswers([]);setChoice(null);setStarted(false);setAudioMessage('')}
 function switchLanguage(next:LanguageId){restart();onLanguageChange(next)}
 function speak(text:string){if(!canSpeak)return;stopAudio();const utterance=new SpeechSynthesisUtterance(text);utterance.lang=speechLocales[language];utterance.rate=.85;utterance.onerror=()=>setAudioMessage('Áudio indisponível neste navegador.');setAudioMessage('');window.speechSynthesis.speak(utterance)}
 function advance(){if(choice===null)return;const next=[...answers,choice];setAnswers(next);setChoice(null);setAudioMessage('');stopAudio();if(next.length===words.length){const result=countCorrect(words,next);const record=Math.max(best,result);setRecords(previous=>({...previous,[language]:record}));try{localStorage.setItem('hola-best-'+language,String(record))}catch{/* storage optional */}}}
 return <section className="wrap section" id="desafio"><div className="challenge-panel">
 <div className="challenge-intro"><div className="challenge-bolt"><Zap size={37} fill="currentColor"/></div><div className="eyebrow">UM MINUTO DE APRENDIZAGEM</div><h2>Hola!<br/>Challenge<span>.</span></h2><p>Quatro palavras, quatro chances de descobrir algo novo. Sem cadastro, sem pressão.</p><span className="challenge-pill"><Trophy size={17}/> Seu progresso, no seu ritmo</span></div>
 <div className="challenge-card">
 {!started?<><div className="challenge-meta"><span>VOCABULÁRIO EXPRESS</span><span>4 PALAVRAS</span></div><h3>Bora praticar?</h3><p>Escolha um idioma e descubra o significado das palavras.</p><StyledSelect label="Seu idioma" value={language} onChange={switchLanguage} options={languages.map(l=>({value:l.id,label:l.name,tag:l.symbol,accent:l.accent}))}/><button className="btn primary" onClick={()=>{setActiveLanguage(preferredLanguage);setStarted(true)}}>Começar desafio <ArrowRight size={18}/></button>{best>0&&<small>Seu recorde neste idioma: {best}/{words.length}</small>}</>:done?<motion.div className="challenge-result" initial={reduced?false:{opacity:0,scale:.96}} animate={{opacity:1,scale:1}}><Trophy size={48}/><h3>Desafio concluído!</h3><strong>{score} / {words.length}</strong><p>{score===words.length?'Você acertou todas!':'Cada tentativa é uma nova oportunidade de aprender.'} Seu recorde: {best}/{words.length}.</p><div className="journey-links"><a href="#nivelamento" onClick={()=>onLanguageChange(language)}>Descobrir meu nível <ArrowRight size={16}/></a><a href="#experimental" onClick={()=>onLanguageChange(language)}>Experimentar uma aula <ArrowRight size={16}/></a></div><button className="btn primary" onClick={restart}><RotateCcw size={18}/> Jogar novamente</button></motion.div>:<>
 <div className="challenge-meta"><span>PALAVRA {index+1} DE {words.length}</span><button type="button" className="quiz-reset" onClick={restart}>Recomeçar</button></div><progress max={words.length} value={index} aria-label="Progresso do desafio"/>
 <motion.div key={index} initial={reduced?false:{opacity:0,x:8}} animate={{opacity:1,x:0}} className="challenge-word"><span>O que significa...</span><div><strong lang={speechLocales[language]}>{word.word}</strong>{canSpeak&&<button type="button" className="audio-btn" aria-label={'Ouvir '+word.word} onClick={()=>speak(word.word)}><Volume2 size={21}/></button>}</div></motion.div>
 <div className="quiz-options">{word.options.map((option,i)=><button type="button" key={option} disabled={choice!==null} className={'quiz-option '+(choice!==null&&i===word.correct?'correct':choice===i?'incorrect':'')} onClick={()=>setChoice(i)}>{option}{choice!==null&&i===word.correct?<CheckCircle2 size={18}/>:choice===i?<XCircle size={18}/>:null}</button>)}</div>
 {choice!==null&&<div className="challenge-feedback" role="status"><strong>{choice===word.correct?'Muito bem!':'Continue tentando!'}</strong><span>Exemplo: <span lang={speechLocales[language]}>{word.example}</span></span>{canSpeak&&<button type="button" className="audio-text" onClick={()=>speak(word.example)}>Ouvir exemplo <Volume2 size={16}/></button>}</div>}{audioMessage&&<small role="status">{audioMessage}</small>}
 {choice!==null&&<button type="button" className="btn primary" onClick={advance}>{index===words.length-1?'Ver resultado':'Próxima palavra'} <ArrowRight size={18}/></button>}
 </>}
 </div></div></section>;
}
