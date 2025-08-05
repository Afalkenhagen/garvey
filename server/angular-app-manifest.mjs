
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/garvey"
  },
  {
    "renderMode": 2,
    "route": "/garvey/nav"
  },
  {
    "renderMode": 2,
    "route": "/garvey/footer"
  },
  {
    "renderMode": 2,
    "route": "/garvey/contacto"
  },
  {
    "renderMode": 2,
    "route": "/garvey/nosotros"
  },
  {
    "renderMode": 2,
    "route": "/garvey/productos"
  },
  {
    "renderMode": 2,
    "route": "/garvey/limpieza"
  },
  {
    "renderMode": 2,
    "route": "/garvey/aditivos"
  },
  {
    "renderMode": 2,
    "route": "/garvey/materia"
  },
  {
    "renderMode": 2,
    "route": "/garvey/produccion"
  }
],
  assets: new Map([
['index.csr.html', {size: 25420, hash: 'f024253e2864d3840cbb477052b0b8a9e59337f63e1df8d925f3de1494d6758f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 17294, hash: '942a107f4fca8fb69ebb45eb0ae2b790811260b06adc9689363ea2516ac58f9d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 75234, hash: '35fd5eef2dde9ff6f710d924c89ac26949a216d48202163f0a79827ab0cf428b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['nav/index.html', {size: 75234, hash: '35fd5eef2dde9ff6f710d924c89ac26949a216d48202163f0a79827ab0cf428b', text: () => import('./assets-chunks/nav_index_html.mjs').then(m => m.default)}], 
['footer/index.html', {size: 75234, hash: '35fd5eef2dde9ff6f710d924c89ac26949a216d48202163f0a79827ab0cf428b', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)}], 
['contacto/index.html', {size: 75234, hash: '35fd5eef2dde9ff6f710d924c89ac26949a216d48202163f0a79827ab0cf428b', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)}], 
['nosotros/index.html', {size: 75234, hash: '35fd5eef2dde9ff6f710d924c89ac26949a216d48202163f0a79827ab0cf428b', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)}], 
['productos/index.html', {size: 75234, hash: '35fd5eef2dde9ff6f710d924c89ac26949a216d48202163f0a79827ab0cf428b', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)}], 
['limpieza/index.html', {size: 75234, hash: '35fd5eef2dde9ff6f710d924c89ac26949a216d48202163f0a79827ab0cf428b', text: () => import('./assets-chunks/limpieza_index_html.mjs').then(m => m.default)}], 
['aditivos/index.html', {size: 75234, hash: '35fd5eef2dde9ff6f710d924c89ac26949a216d48202163f0a79827ab0cf428b', text: () => import('./assets-chunks/aditivos_index_html.mjs').then(m => m.default)}], 
['materia/index.html', {size: 75234, hash: '35fd5eef2dde9ff6f710d924c89ac26949a216d48202163f0a79827ab0cf428b', text: () => import('./assets-chunks/materia_index_html.mjs').then(m => m.default)}], 
['produccion/index.html', {size: 75234, hash: '35fd5eef2dde9ff6f710d924c89ac26949a216d48202163f0a79827ab0cf428b', text: () => import('./assets-chunks/produccion_index_html.mjs').then(m => m.default)}], 
['styles-HMC2XGQT.css', {size: 28312, hash: 'oiDsFU5hRn8', text: () => import('./assets-chunks/styles-HMC2XGQT_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
