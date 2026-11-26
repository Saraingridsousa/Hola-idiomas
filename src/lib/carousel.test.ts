import { describe, expect, it } from 'vitest';
import { wrapCarouselPosition } from './carousel';
describe('continuous testimonial carousel',()=>{
 it('preserves a position inside the middle copy',()=>expect(wrapCarouselPosition(1250,1000)).toBe(1250));
 it('wraps seamlessly at either end',()=>{expect(wrapCarouselPosition(2005,1000)).toBe(1005);expect(wrapCarouselPosition(995,1000)).toBe(1995)});
 it('handles long drags and invalid dimensions',()=>{expect(wrapCarouselPosition(-2005,1000)).toBe(1995);expect(wrapCarouselPosition(12,0)).toBe(12)});
});
