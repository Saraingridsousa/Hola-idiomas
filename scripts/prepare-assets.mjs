import { mkdir, readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';
const photos=JSON.parse(await readFile(new URL('../scripts/photos.json',import.meta.url),'utf8'));
const dir=resolve('public/images');
await mkdir(dir,{recursive:true});
async function exists(path){try{await access(path);return true}catch{return false}}
async function prepare([name,id]){
 const targets=[480,960].map(width=>({width,path:resolve(dir,name+'-'+width+'.webp')}));
 if((await Promise.all(targets.map(t=>exists(t.path)))).every(Boolean))return;
 for(let attempt=0;attempt<2;attempt++){
  try{
   const response=await fetch('https://images.pexels.com/photos/'+id+'/pexels-photo-'+id+'.jpeg?auto=compress&cs=tinysrgb&w=1100',{signal:AbortSignal.timeout(12000)});
   if(!response.ok)throw new Error('HTTP '+response.status);
   const buffer=Buffer.from(await response.arrayBuffer());
   await Promise.all(targets.map(({width,path})=>sharp(buffer).rotate().resize({width,withoutEnlargement:true}).webp({quality:80}).toFile(path)));
   console.log('Prepared '+name);
   return;
  }catch(error){if(attempt===1)console.warn('Image '+name+' unavailable; browser fallback enabled: '+error.message)}
 }
}
const queue=Object.entries(photos);
await Promise.all(Array.from({length:4},async()=>{while(queue.length)await prepare(queue.shift())}));
await sharp(await readFile('public/social-preview.svg')).png().toFile('public/social-preview.png');
