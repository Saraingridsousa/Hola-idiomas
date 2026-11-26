import { useState } from 'react';
import { StyledSelect } from './StyledSelect';
import { ArrowRight, CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { languages, type LanguageId } from '../data/courses';
import { questions, suggestedLevel } from '../data/quiz';
import type { PlacementResult } from '../lib/journey';

export function PlacementQuiz({preferredLanguage,onLanguageChange,onResult}:{preferredLanguage:LanguageId;onLanguageChange:(id:LanguageId)=>void;onResult:(result:PlacementResult)=>void}) {
 const [activeLanguage,setActiveLanguage]=useState<LanguageId>(preferredLanguage);
 const [step,setStep]=useState(0);
 const [answers,setAnswers]=useState<number[]>([]);
 const [selected,setSelected]=useState<number|null>(null);
 const [started,setStarted]=useState(false);
 const language=started?activeLanguage:preferredLanguage;
 const list=questions[language], question=list[step], done=step===list.length;
 const score=answers.reduce((sum,answer,i)=>sum+Number(answer===list[i].answer),0);
 const reset=()=>{setStep(0);setAnswers([]);setSelected(null);setStarted(false)};
 return <section className="wrap section" id="nivelamento"><div className="quiz-panel">
   <div className="quiz-intro"><div className="eyebrow">05 / DESCUBRA SEU PONTO DE PARTIDA</div><h2>Qual é<br/>o seu nível<span>?</span></h2><p>Uma pequena atividade de cinco perguntas para explorar o que você já sabe.</p><small>Estimativa educativa, sem equivalência oficial ao CEFR.</small></div>
   <div className="quiz-card" aria-live="polite">
    {!started?<><h3>Vamos começar?</h3><StyledSelect label="Escolha seu idioma" value={language} onChange={onLanguageChange} options={languages.map(l=>({value:l.id,label:l.name,tag:l.symbol,accent:l.accent}))}/><button className="btn primary" onClick={()=>{setActiveLanguage(preferredLanguage);setStarted(true)}}>Iniciar teste <ArrowRight size={18}/></button></>:done?<><span className="result-label"><CheckCircle2 size={18}/> ATIVIDADE CONCLUÍDA</span><h3>{suggestedLevel(score)}</h3><div className="quiz-score">{score}<span> / {list.length}</span></div><p>Você acertou {score} de {list.length} questões. Use este resultado apenas como ponto de partida para continuar aprendendo.</p><div className="journey-links"><a href="#desafio" onClick={()=>onLanguageChange(language)}>Praticar este idioma <ArrowRight size={16}/></a><a href="#experimental" onClick={()=>onLanguageChange(language)}>Experimentar uma aula <ArrowRight size={16}/></a></div><button className="btn primary" onClick={reset}><RotateCcw size={18}/> Fazer outro teste</button></>:<>
     <div className="quiz-progress"><span>Questão {step+1} de {list.length}</span><button className="quiz-reset" onClick={reset}>Recomeçar</button></div><progress value={step+1} max={list.length} aria-label="Progresso do teste"/>
     <h3>{question.prompt}</h3>
     <div className="quiz-options" role="group" aria-label="Respostas">{question.options.map((option,i)=><button key={option} disabled={selected!==null} className={'quiz-option '+(selected!==null&&i===question.answer?'correct':selected===i?'incorrect':'')} onClick={()=>setSelected(i)}><span>{String.fromCharCode(65+i)}.</span>{option}{selected!==null&&i===question.answer?<CheckCircle2 size={18}/>:selected===i?<XCircle size={18}/>:null}</button>)}</div>
     {selected!==null&&<><p className="quiz-feedback">{question.explanation}</p><button className="btn primary" onClick={()=>{const nextScore=score+Number(selected===question.answer);if(step===list.length-1)onResult({language,score:nextScore,total:list.length,level:suggestedLevel(nextScore)});setAnswers(a=>[...a,selected]);setStep(s=>s+1);setSelected(null)}}>{step===list.length-1?'Ver resultado':'Próxima questão'} <ArrowRight size={18}/></button></>}
    </>}
   </div>
 </div></section>;
}
