import type { LanguageId } from './courses';
export type Question = { prompt: string; options: string[]; answer: number; explanation: string };
export const questions: Record<LanguageId, Question[]> = {
 en: [
  {prompt:'Como você diz “Bom dia” em inglês?',options:['Good night','Good morning','Goodbye'],answer:1,explanation:'Good morning é a saudação usada pela manhã.'},
  {prompt:'Complete: She ___ a teacher.',options:['am','are','is'],answer:2,explanation:'She usa a forma is do verbo to be.'},
  {prompt:'Qual frase expressa uma ação habitual?',options:['I usually walk to work.','I am walking now.','I walked yesterday.'],answer:0,explanation:'Usually com present simple descreve hábitos.'},
  {prompt:'Complete: I have lived here ___ 2020.',options:['for','since','during'],answer:1,explanation:'Since indica o momento em que uma ação começou.'},
  {prompt:'Complete: If I had more time, I ___ another language.',options:['will learn','learned','would learn'],answer:2,explanation:'O second conditional usa would para situações hipotéticas.'},
 ],
 es: [
  {prompt:'Como se diz “Obrigado” em espanhol?',options:['Gracias','Perdón','Hasta luego'],answer:0,explanation:'Gracias significa obrigado(a).'},
  {prompt:'Complete: Yo ___ estudiante.',options:['es','soy','eres'],answer:1,explanation:'Soy é a forma do verbo ser na primeira pessoa.'},
  {prompt:'Qual frase significa “Gosto de viajar”?',options:['Viajo ayer.','Me viaja.','Me gusta viajar.'],answer:2,explanation:'Me gusta + infinitivo expressa uma preferência.'},
  {prompt:'Complete: Ayer ___ al cine.',options:['fui','voy','iré'],answer:0,explanation:'Fui expressa uma ação concluída no passado.'},
  {prompt:'Complete: Si tuviera tiempo, ___ más.',options:['estudio','estudiaría','estudié'],answer:1,explanation:'O condicional estudiaría acompanha a condição hipotética.'},
 ],
 fr: [
  {prompt:'Como você diz “Obrigado” em francês?',options:['Salut','Merci','Bonsoir'],answer:1,explanation:'Merci significa obrigado(a).'},
  {prompt:'Complete: Je ___ étudiant.',options:['es','est','suis'],answer:2,explanation:'Je suis significa eu sou.'},
  {prompt:'Qual frase significa “Eu gosto de música”?',options:["J'aime la musique.","Je suis la musique.","Je vais musique."],answer:0,explanation:"J'aime expressa uma preferência."},
  {prompt:'Complete: Hier, nous ___ au musée.',options:['allons','sommes allés','irons'],answer:1,explanation:'Sommes allés é o passé composé de aller.'},
  {prompt:"Complete: Si j'avais le temps, je ___ davantage.",options:['voyage','voyagerai','voyagerais'],answer:2,explanation:'Voyagerais é o condicional para a hipótese.'},
 ],
 it: [
  {prompt:'Como se diz “Obrigado” em italiano?',options:['Grazie','Ciao','Prego'],answer:0,explanation:'Grazie significa obrigado(a).'},
  {prompt:'Complete: Io ___ uno studente.',options:['sei','sono','è'],answer:1,explanation:'Sono é a forma do verbo essere para io.'},
  {prompt:'Qual frase significa “Gosto de ler”?',options:['Sono leggere.','Leggo ieri.','Mi piace leggere.'],answer:2,explanation:'Mi piace + infinitivo expressa uma preferência.'},
  {prompt:'Complete: Ieri ___ al cinema.',options:['sono andato','vado','andrò'],answer:0,explanation:'Sono andato expressa uma ação no passado.'},
  {prompt:'Complete: Se avessi tempo, ___ di più.',options:['studio','studierei','studierò'],answer:1,explanation:'Studierei é o condicional da hipótese.'},
 ],
};
export function suggestedLevel(score:number) {
 return score <= 1 ? 'Fundamentos' : score <= 3 ? 'Básico em evolução' : 'Base intermediária';
}
