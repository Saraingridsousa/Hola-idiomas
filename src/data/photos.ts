export const photos = {
 hero: { id:5537562, alt:'Duas jovens conversando enquanto estudam juntas', source:'https://www.pexels.com/photo/happy-multiethnic-students-with-workbook-talking-while-studying-5537562/' },
 kids: { id:5306484, alt:'Crianças participando de uma atividade em sala', source:'https://www.pexels.com/photo/a-teacher-and-students-having-fun-inside-the-classroom-5306484/' },
 teens: { id:8457292, alt:'Jovens colaborando com livros e notebooks', source:'https://www.pexels.com/photo/students-studying-together-8457292/' },
 adults: { id:8199163, alt:'Estudantes adultos conversando em sala', source:'https://www.pexels.com/photo/students-sitting-inside-a-classroom-8199163/' },
 senior: { id:7983560, alt:'Pessoas mais velhas aprendendo em grupo', source:'https://www.pexels.com/photo/elderly-people-sitting-in-a-classroom-learning-to-use-computers-7983560/' },
 group: { id:8423407, alt:'Estudantes conversando durante atividade colaborativa', source:'https://www.pexels.com/photo/a-students-talking-together-in-classroom-8423407/' },
 online: { id:4126709, alt:'Mulher conversando por vídeo com fones de ouvido', source:'https://www.pexels.com/photo/positive-woman-in-headphones-having-video-call-4126709/' },
 culture: { id:6238046, alt:'Grupo de estudantes compartilhando ideias e materiais', source:'https://www.pexels.com/photo/diverse-students-doing-homework-together-in-classroom-6238046/' },
} as const;
export type PhotoKey = keyof typeof photos;
export function photoUrl(photo: PhotoKey, width: number) {
 const id = photos[photo].id;
 return 'https://images.pexels.com/photos/'+id+'/pexels-photo-'+id+'.jpeg?auto=compress&cs=tinysrgb&w='+width;
}
