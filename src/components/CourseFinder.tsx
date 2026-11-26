import { useState } from 'react';
import { StyledSelect, textChoices } from './StyledSelect';
import { ArrowRight, Check, Compass } from 'lucide-react';
import { languages, audiences, modalities, type LanguageId } from '../data/courses';
import { goals, recommendCourse, type Profile } from '../lib/recommendation';

export function CourseFinder({language, onLanguageChange, audience, onAudienceChange}: {language: LanguageId; onLanguageChange: (id: LanguageId) => void; audience: Profile['audience']; onAudienceChange: (audience: Profile['audience']) => void}) {
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
          <StyledSelect label="01. Qual idioma?" value={language} onChange={onLanguageChange} options={languages.map(l=>({value:l.id,label:l.name,tag:l.symbol,accent:l.accent}))}/>
          <StyledSelect label="02. Para quem?" value={audience} onChange={onAudienceChange} options={textChoices(audiences)}/>
          <StyledSelect label="03. Seu objetivo" value={goal} onChange={setGoal} options={textChoices(goals)}/>
          <StyledSelect label="04. Como estudar?" value={modality} onChange={setModality} options={textChoices(modalities)}/>
        </div>
        <button className="btn primary w-full" type="submit">Descobrir meu curso <ArrowRight size={19}/></button>
        <div aria-live="polite">{current && result && <div className="recommendation" style={{background:result.accent}}><span className="result-label"><Check size={16}/> SUA TRILHA SUGERIDA</span><h3>{result.title}</h3><p>{result.description} Modalidade: {result.modality}.</p><a href="#nivelamento">Descobrir meu nível <ArrowRight size={16}/></a></div>}</div>
      </form>
    </div>
  </section>;
}
