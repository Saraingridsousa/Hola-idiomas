import { describe,it,expect } from 'vitest';
import { vocabulary,countCorrect } from '../data/challenge';
describe('vocabulary challenge',()=>{
 it('contains four valid choices per language',()=>{for(const words of Object.values(vocabulary)){expect(words).toHaveLength(4);for(const word of words){expect(word.options).toHaveLength(3);expect(word.correct).toBeGreaterThanOrEqual(0);expect(word.correct).toBeLessThan(word.options.length)}}});
 it('calculates the score from submitted answers',()=>{expect(countCorrect(vocabulary.en,[0,1,2,1])).toBe(4);expect(countCorrect(vocabulary.en,[1,1,0,1])).toBe(2);expect(countCorrect(vocabulary.en,[])).toBe(0)});
});
