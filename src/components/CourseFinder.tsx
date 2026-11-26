import { useState } from 'react';
import { ArrowRight, Check, Compass } from 'lucide-react';
import { languages, audiences, modalities, type LanguageId } from '../data/courses';
import { goals, recommendCourse, type Profile } from '../lib/recommendation';

export function CourseFinder({language, onLanguageChange}: {language: LanguageId; onLanguageChange: (id: LanguageId) => void}) {
  const [audience,setAudience]=useState<Profile['audience']>('Adultos');
  const [goal,setGoal]=useState<Profile['goal']>('Conversação');
  const [modality,setModality]=useState<Profile['modality']>('Online');
  const [submitted,setSubmitted]=useState<Profile|null>(null);
  const result=submitted?recommendCourse(submitted):null;
  const current = submitted && submitted.language===language && submitted.audience===audience && submitted.goal===goal && submitted.modality===modality;
  return <section className="wrap section" id="recomendacao">
    <div className="finder">
      <div className="finder-intro"><span className="finder-icon"><Compass size={34}/></span><div className="eyebrow">SEU MAPA DE APRENDIZAGEM</div><h2>O curso certo<br/>para você.</h2><p>Responda a quatro perguntas e descubra por onde começar a sua jornada.</p><span className="finder-index">01 — 04</span></div>
      <form className="finder-form" onSubmit={e=>{e.preventDefault();setSubmitted({language,audience,goal,modality})}}>
        <div className="finder-fields">
          <label>01. Qual idioma?<select value={language} onChange={e=>onLanguageChange(e.target.value as LanguageId)}>{languages.map(l=><option key={l.id} value={l.id}>{l.name}</option>)}</select></label>
          <label>02. Para quem?<select value={audience} onChange={e=>setAudience(e.target.value as Profile['audience'])}>{audiences.map(a=><option key={a}>{a}</option>)}</select></label>
          <label>03. Seu objetivo<select value={goal} onChange={e=>setGoal(e.target.value as Profile['goal'])}>{goals.map(g=><option key={g}>{g}</option>)}</select></label>
          <label>04. Como estudar?<select value={modality} onChange={e=>setModality(e.target.value as Profile['modality'])}>{modalities.map(m=><option key={m}>{m}</option>)}</select></label>
        </div>
        <button className="btn primary w-full" type="submit">Descobrir meu curso <ArrowRight size={19}/></button>
        <div aria-live="polite">{current && result && <div className="recommendation" style={{background:result.accent}}><span className="result-label"><Check size={16}/> SUA TRILHA SUGERIDA</span><h3>{result.title}</h3><p>{result.description} Modalidade: {result.modality}.</p><a href="#nivelamento">Descobrir meu nível <ArrowRight size={16}/></a></div>}</div>
      </form>
    </div>
  </section>;
}
