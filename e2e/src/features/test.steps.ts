const { Given, Then, When } = require('@cucumber/cucumber');
const { browser, by, element } =  require('protractor') ;

const linkdev = "http://localhost:4200/";
const linkprod = "https://frontevalua.onrender.com/";
Given('estoy en la página principal', async () => {
  await browser.get(linkdev);
});

Then('debería ver el título AppEvalua', async () => {
  const actualTitle = await browser.getTitle();
   return actualTitle == "AppEvalua";
});


Given('estoy en la página Evalua', async () => {
  await browser.get(linkdev);
});

When('hago clic en el botón Empezar ahora', async () => {
  const button = element(by.className("btn-book-a-table"));
  await button.click();
});

Then('debería estar en la página de destino', async () => {
  const currentUrl = await browser.getCurrentUrl();
  // Verifica la URL de la página de destino según tu aplicación
  return currentUrl ==linkdev +'tipoBebida'
});

Given('estoy en la página Evaluacion', async () => {
  await browser.get(linkdev+'evaluacion');
});

When('hago clic en el botón Aroma', async () => {
  const firstElement = element(by.css("img"));
  await firstElement.click();
});

Then('debería estar en la página de Aroma', async () => {
  const currentUrl = await browser.getCurrentUrl();
  // Verifica la URL de la página de destino según tu aplicación
  return currentUrl ==linkdev 
});

Given('estoy en la página Evaluacion 2', async () => {
  await browser.get(linkdev+'evaluacion');
});

When('hago clic en el botón Apariencia', async () => {
  // const firstElement = element(by.id('apariencia'));
  // await firstElement.click();
});

Then('debería estar en la página Apariencia', async () => {
  const currentUrl = await browser.getCurrentUrl();
  // Verifica la URL de la página de destino según tu aplicación
  return currentUrl == linkdev
});

Given('estoy en la página Evaluacion 3', async () => {
  await browser.get(linkdev+'evaluacion');
});

When('hago clic en el botón Sabor', async () => {
  // const firstElement = element(by.id('apariencia'));
  // await firstElement.click();
});

Then('debería estar en la página Sabor', async () => {
  const currentUrl = await browser.getCurrentUrl();
  // Verifica la URL de la página de destino según tu aplicación
  return currentUrl == linkdev
});

Given('estoy en la página Evaluacion 4', async () => {
  await browser.get(linkdev+'evaluacion');
});

When('hago clic en el botón Sensacion', async () => {
  // const firstElement = element(by.id('apariencia'));
  // await firstElement.click();
});

Then('debería estar en la página Sensacion', async () => {
  const currentUrl = await browser.getCurrentUrl();
  // Verifica la URL de la página de destino según tu aplicación
  return currentUrl == linkdev
});

Given('estoy en la página Evaluacion 5', async () => {
  await browser.get(linkdev+'evaluacion');
});

When('hago clic en el botón Fallas', async () => {
  // const firstElement = element(by.id('apariencia'));
  // await firstElement.click();
});

Then('debería estar en la página Fallas', async () => {
  const currentUrl = await browser.getCurrentUrl();
  // Verifica la URL de la página de destino según tu aplicación
  return currentUrl == linkdev
});

Given('estoy en la página Evaluacion 6', async () => {
  await browser.get(linkdev+'evaluacion');
});

When('hago clic en el botón General', async () => {
  // const firstElement = element(by.id('apariencia'));
  // await firstElement.click();
});

Then('debería estar en la página General', async () => {
  const currentUrl = await browser.getCurrentUrl();
  // Verifica la URL de la página de destino según tu aplicación
  return currentUrl == linkdev
});
