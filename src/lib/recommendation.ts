import { languages, type LanguageId, audiences, modalities } from '../data/courses';
export const goals = ['Começar do zero', 'Conversação', 'Viagens', 'Carreira e estudos'] as const;
export type Profile = { language: LanguageId; audience: typeof audiences[number]; goal: typeof goals[number]; modality: typeof modalities[number] };
export function recommendCourse(profile: Profile) {
  const language = languages.find(l => l.id === profile.language)!;
  const track = profile.audience === 'Crianças' ? 'Kids' : profile.audience === 'Adolescentes' ? 'Teens' : profile.audience === '60+' ? 'Conexões' : ({ 'Começar do zero':'Essentials', 'Conversação':'Conversation', 'Viagens':'Travel', 'Carreira e estudos':'Professional' } as const)[profile.goal];
  return { title: language.name + ' ' + track, description: 'Uma trilha de ' + language.name.toLowerCase() + ' para ' + profile.audience.toLowerCase() + ', com foco em ' + profile.goal.toLowerCase() + '.', modality: profile.modality, accent: language.accent };
}
