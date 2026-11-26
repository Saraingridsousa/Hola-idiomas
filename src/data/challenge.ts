import type { LanguageId } from './courses';
export type Word = {word:string;options:readonly string[];correct:number;example:string};
export const speechLocales:Record<LanguageId,string>={en:'en-US',es:'es-ES',fr:'fr-FR',it:'it-IT'};
export const vocabulary:Record<LanguageId,readonly Word[]>={
 en:[
 {word:'Butterfly',options:['Borboleta','Pássaro','Abelha'],correct:0,example:'The butterfly is blue.'},
 {word:'Rainbow',options:['Nuvem','Arco-íris','Estrela'],correct:1,example:'Look at the rainbow!'},
 {word:'Sunflower',options:['Rosa','Árvore','Girassol'],correct:2,example:'The sunflower is yellow.'},
 {word:'Friendship',options:['Viagem','Amizade','Felicidade'],correct:1,example:'Friendship is important.'},
 ],
 es:[
 {word:'Mariposa',options:['Abelha','Borboleta','Pássaro'],correct:1,example:'La mariposa es azul.'},
 {word:'Arcoíris',options:['Arco-íris','Chuva','Nuvem'],correct:0,example:'¡Mira el arcoíris!'},
 {word:'Girasol',options:['Rosa','Árvore','Girassol'],correct:2,example:'El girasol es amarillo.'},
 {word:'Amistad',options:['Amizade','Felicidade','Viagem'],correct:0,example:'La amistad es importante.'},
 ],
 fr:[
 {word:'Papillon',options:['Abelha','Pássaro','Borboleta'],correct:2,example:'Le papillon est bleu.'},
 {word:'Arc-en-ciel',options:['Nuvem','Arco-íris','Chuva'],correct:1,example:'Regarde l’arc-en-ciel !'},
 {word:'Tournesol',options:['Girassol','Rosa','Árvore'],correct:0,example:'Le tournesol est jaune.'},
 {word:'Amitié',options:['Viagem','Felicidade','Amizade'],correct:2,example:'L’amitié est importante.'},
 ],
 it:[
 {word:'Farfalla',options:['Borboleta','Abelha','Pássaro'],correct:0,example:'La farfalla è blu.'},
 {word:'Arcobaleno',options:['Chuva','Nuvem','Arco-íris'],correct:2,example:'Guarda l’arcobaleno!'},
 {word:'Girasole',options:['Rosa','Girassol','Árvore'],correct:1,example:'Il girasole è giallo.'},
 {word:'Amicizia',options:['Felicidade','Amizade','Viagem'],correct:1,example:'L’amicizia è importante.'},
 ],
};
export function countCorrect(words:readonly Word[],answers:readonly number[]){return answers.reduce((total,answer,index)=>total+Number(words[index]?.correct===answer),0)}
