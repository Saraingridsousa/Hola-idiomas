import { useState } from 'react';
import { ImageIcon } from 'lucide-react';
import { photos, photoUrl, remotePhotoUrl, type PhotoKey } from '../data/photos';
export function EditorialPhoto({photo, priority=false}: {photo:PhotoKey;priority?:boolean}) {
 const [source,setSource]=useState<'local'|'remote'|'fallback'>('local');
 if(source==='fallback')return <div className="photo-fallback" role="img" aria-label={photos[photo].alt}><ImageIcon size={36}/><span>¡hola!</span></div>;
 const url=source==='local'?photoUrl:remotePhotoUrl;
 return <img key={source} src={url(photo,priority?960:480)} srcSet={url(photo,480)+' 480w, '+url(photo,960)+' 960w'} sizes={priority?'(max-width:720px) 90vw, 46vw':'(max-width:440px) 90vw, (max-width:950px) 45vw, 27vw'} alt={photos[photo].alt} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} decoding="async" onError={()=>setSource(source==='local'?'remote':'fallback')} />;
}
