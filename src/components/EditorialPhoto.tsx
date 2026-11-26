import { useState } from 'react';
import { ImageIcon } from 'lucide-react';
import { photos, photoUrl, type PhotoKey } from '../data/photos';
export function EditorialPhoto({photo, priority=false}: {photo:PhotoKey;priority?:boolean}) {
 const [failed,setFailed]=useState(false);
 if(failed) return <div className="photo-fallback" role="img" aria-label={photos[photo].alt}><ImageIcon size={36}/><span>¡hola!</span></div>;
 return <img src={photoUrl(photo,priority?1100:640)} srcSet={photoUrl(photo,480)+' 480w, '+photoUrl(photo,800)+' 800w, '+photoUrl(photo,1200)+' 1200w'} sizes={priority?'(max-width:720px) 90vw, 46vw':'(max-width:720px) 90vw, 32vw'} alt={photos[photo].alt} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} decoding="async" onError={()=>setFailed(true)} />;
}
