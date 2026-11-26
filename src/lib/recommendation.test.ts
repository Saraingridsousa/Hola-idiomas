import { describe, expect, it } from 'vitest';
import { recommendCourse } from './recommendation';
import { questions, suggestedLevel } from '../data/quiz';
describe('course recommendations',()=>{
 it('uses age-specific tracks',()=>expect(recommendCourse({language:'es',audience:'Crianças',goal:'Viagens',modality:'Online'}).title).toBe('Espanhol Kids'));
 it('uses adult goals and modality',()=>expect(recommendCourse({language:'en',audience:'Adultos',goal:'Carreira e estudos',modality:'Particular'})).toMatchObject({title:'Inglês Professional',modality:'Particular'}));
 it('includes older learners',()=>expect(recommendCourse({language:'fr',audience:'60+',goal:'Conversação',modality:'Presencial'}).title).toBe('Francês Conexões'));
});
describe('placement activity',()=>{
 it('provides five valid questions per language',()=>Object.values(questions).forEach(list=>{expect(list).toHaveLength(5);list.forEach(q=>{expect(q.answer).toBeGreaterThanOrEqual(0);expect(q.answer).toBeLessThan(q.options.length)})}));
 it('maps score ranges consistently',()=>{expect(suggestedLevel(0)).toBe('Fundamentos');expect(suggestedLevel(3)).toBe('Básico em evolução');expect(suggestedLevel(5)).toBe('Base intermediária')});
});
