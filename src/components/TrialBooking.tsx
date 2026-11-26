import { useState } from 'react';
import { StyledSelect, textChoices } from './StyledSelect';
import { CalendarDays, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { languages, modalities, type LanguageId } from '../data/courses';

import { matchingPlacement, type PlacementResult } from '../lib/journey';

type Booking = { language:LanguageId; mode:typeof modalities[number]; date:string; time:string };
const hours=['09:00','11:00','14:00','16:00','19:00'];
function localToday(){const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')}
export function TrialBooking({language,onLanguageChange,mode,onModeChange,placement}:{language:LanguageId;onLanguageChange:(id:LanguageId)=>void;mode:Booking['mode'];onModeChange:(mode:Booking['mode'])=>void;placement:PlacementResult|null}){
 const level=matchingPlacement(placement,language);
 const [date,setDate]=useState('');
 const [time,setTime]=useState(hours[0]);
 const [booking,setBooking]=useState<Booking|null>(null);
 return <section className="wrap section" id="experimental">
 <div className="booking-panel"><div className="booking-intro"><CalendarDays size={33}/><div className="eyebrow">06 / PRIMEIRO PASSO</div><h2>Vamos<br/>conversar<span>?</span></h2><p>Experimente como seria marcar sua primeira aula na ¡Hola! Idiomas.</p><small>Simulação de portfólio. Não solicitamos dados pessoais nem enviamos reservas.</small></div>
 <div className="booking-content">
 {booking?<div className="booking-success" role="status"><CheckCircle2 size={40}/><h3>¡Nos vemos!</h3><p>Simulação concluída: {languages.find(l=>l.id===booking.language)?.name}, modalidade {booking.mode}, dia {booking.date.split('-').reverse().join('/')} às {booking.time}.</p><p>Nenhuma aula real foi agendada.</p><button className="btn primary" onClick={()=>setBooking(null)}>Simular outro horário</button></div>:<form onSubmit={e=>{e.preventDefault();if(date>=localToday())setBooking({language,mode,date,time})}}>
 <h3>Monte sua aula experimental</h3>{level&&<p className="journey-level">Seu nivelamento demonstrativo: <strong>{level.level}</strong> ({level.score}/{level.total}).</p>}<div className="booking-fields"><StyledSelect label="Idioma" value={language} onChange={onLanguageChange} options={languages.map(l=>({value:l.id,label:l.name,tag:l.symbol,accent:l.accent}))}/><StyledSelect label="Modalidade" value={mode} onChange={onModeChange} options={textChoices(modalities)}/><label>Data<input type="date" min={localToday()} required value={date} onChange={e=>setDate(e.target.value)}/></label><StyledSelect label="Horário" value={time} onChange={setTime} options={textChoices(hours)}/></div><button type="submit" className="btn primary w-full">Simular agendamento <ArrowUpRight size={18}/></button><p className="booking-disclaimer">Horários ilustrativos, sem consulta de disponibilidade real.</p>
 </form>}
 </div></div></section>
}
