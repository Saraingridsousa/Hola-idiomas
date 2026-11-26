/** Keep the visible sequence inside the middle copy of a repeating track. */
export function wrapCarouselPosition(position:number,period:number):number {
 if(!Number.isFinite(period)||period<=0)return position;
 return period+((position%period)+period)%period;
}
