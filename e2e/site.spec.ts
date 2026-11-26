import { test,expect } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
test('shared language and modality, placement and booking',async({page})=>{
 await page.goto('/');
 await page.locator('#recomendacao').getByRole('combobox',{name:'01. Qual idioma?'}).click();
 await page.getByRole('option',{name:'Espanhol',exact:true}).click();
 await page.locator('#recomendacao').getByRole('combobox',{name:'04. Como estudar?'}).click();
 await page.getByRole('option',{name:'Particular',exact:true}).click();
 await page.getByRole('button',{name:'Descobrir meu curso'}).click();
 await expect(page.locator('.recommendation')).toContainText('Espanhol Conversation');
 await expect(page.locator('#desafio').getByRole('combobox')).toContainText('Espanhol');
 const quiz=page.locator('#nivelamento');
 await expect(quiz.getByRole('combobox')).toContainText('Espanhol');
 const booking=page.locator('#experimental');
 await expect(booking.getByRole('combobox',{name:'Idioma'})).toContainText('Espanhol');
 await expect(booking.getByRole('combobox',{name:'Modalidade'})).toContainText('Particular');
 await quiz.getByRole('button',{name:'Iniciar teste'}).click();
 for(let i=0;i<5;i++){
  await quiz.locator('.quiz-option').first().click();
  await quiz.getByRole('button',{name:i===4?'Ver resultado':'Próxima questão'}).click();
 }
 await expect(quiz.getByText('ATIVIDADE CONCLUÍDA')).toBeVisible();
 await expect(booking.locator('.journey-level')).toBeVisible();
 await booking.locator('input[type=date]').fill('2099-01-01');
 await booking.getByRole('button',{name:'Simular agendamento'}).click();
 await expect(booking.getByText('Nenhuma aula real foi agendada.')).toBeVisible();
});
test('FAQ expands and collapses with accessible controls',async({page})=>{
 await page.goto('/');
 const faq=page.locator('#faq');
 const question=faq.getByRole('button',{name:'Quais idades podem participar?'});
 await question.click();
 await expect(question).toHaveAttribute('aria-expanded','true');
 await expect(faq.getByText('A escola foi idealizada para crianças', {exact:false})).toBeVisible();
 await question.click();
 await expect(question).toHaveAttribute('aria-expanded','false');
});
test('carousel moves automatically without a pause button',async({page})=>{
 await page.emulateMedia({reducedMotion:'no-preference'});
 await page.goto('/');
 const rail=page.locator('.story-rail');
 await rail.scrollIntoViewIfNeeded();
 const initial=await rail.evaluate(el=>getComputedStyle(el).transform);
 await expect.poll(()=>rail.evaluate(el=>getComputedStyle(el).transform)).not.toBe(initial);
 await expect(page.locator('#historias').getByRole('button')).toHaveCount(2);
});
for(const width of [390,768,1440]){
 test('responsive layout at '+width+'px',async({page})=>{
  await page.setViewportSize({width,height:width===1440?960:844});
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1);
  expect(overflow).toBe(false);
  if(width<901){
   const menu=page.getByRole('button',{name:'Abrir menu'});
   await menu.click();
   await expect(page.getByRole('navigation',{name:'Principal'})).toBeVisible();
   await page.getByRole('button',{name:'Fechar menu'}).click();
  }
  if(width!==768){
   await mkdir('dist/screenshots',{recursive:true});
   await page.screenshot({path:'dist/screenshots/'+(width===390?'mobile':'desktop')+'.png',animations:'disabled'});
  }
 });
}
