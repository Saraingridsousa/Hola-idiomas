export const languages = [
  { id:'en', name:'Inglês', greeting:'Hello!', accent:'#dbe3ff', symbol:'EN', description:'Do primeiro hello à conversa sem medo.' },
  { id:'es', name:'Espanhol', greeting:'¡Hola!', accent:'#ffe6a2', symbol:'ES', description:'Conecte-se com a América Latina e além.' },
  { id:'fr', name:'Francês', greeting:'Bonjour!', accent:'#ffdcd5', symbol:'FR', description:'Explore um universo de cultura e expressão.' },
  { id:'it', name:'Italiano', greeting:'Ciao!', accent:'#d7ece4', symbol:'IT', description:'Descubra a língua da arte e da boa conversa.' },
] as const;
export const audiences = ['Crianças', 'Adolescentes', 'Adultos', '60+'] as const;
export const modalities = ['Online', 'Presencial', 'Particular'] as const;
export type LanguageId = typeof languages[number]['id'];
