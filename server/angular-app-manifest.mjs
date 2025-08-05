
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/nav"
  },
  {
    "renderMode": 2,
    "route": "/footer"
  },
  {
    "renderMode": 2,
    "route": "/contacto"
  },
  {
    "renderMode": 2,
    "route": "/nosotros"
  },
  {
    "renderMode": 2,
    "route": "/productos"
  },
  {
    "renderMode": 2,
    "route": "/limpieza"
  },
  {
    "renderMode": 2,
    "route": "/aditivos"
  },
  {
    "renderMode": 2,
    "route": "/materia"
  },
  {
    "renderMode": 2,
    "route": "/produccion"
  }
],
  assets: new Map([
['index.csr.html', {size: 25413, hash: '3f8e88fe87c82e77317f4fdbb826ce2c5060acf8336c5f517a921aa93a4d8e59', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 17287, hash: '4e4d9361e4492208de946a8aa7ff0649dde86a51af22daf4ad7ff0c796a955a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['nav/index.html', {size: 37249, hash: '0bda9cd4504618b34afdd05bcaf300bc0a5f02d4bdd275300d3cbad9ab7869b6', text: () => import('./assets-chunks/nav_index_html.mjs').then(m => m.default)}], 
['footer/index.html', {size: 37156, hash: '270a472a37f7d69cf45aac9f73bb4238a9de6d196be004865cee34fb79099c45', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 75220, hash: '85679bd101339540a3a5a9b80753e8f5f55679c04d8b03f7b8189cc7227206a9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['contacto/index.html', {size: 53271, hash: 'a46c89342a6fb9e59bb1958adbaea9fb062ad7ff8856c5cc2ce4d448d8d47510', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)}], 
['nosotros/index.html', {size: 49189, hash: '087e212b3b632d6034a5287a708ae51f166b4c5c09e29de0a6f865b839c037d8', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)}], 
['productos/index.html', {size: 44480, hash: '76d0f74dbab17cdebbaccfcc4243737e4c1e6dde5b676de3bd34ea47c1a8c8d5', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)}], 
['limpieza/index.html', {size: 44772, hash: '636bbd1b1bbd979cbd0cf87ee330a0ddba0cb508eb75b4ff123e7d938991f3ca', text: () => import('./assets-chunks/limpieza_index_html.mjs').then(m => m.default)}], 
['aditivos/index.html', {size: 43035, hash: 'eaae454478077215bba9267a5539ac0031095c970b50dc812a52c7467f39d4f9', text: () => import('./assets-chunks/aditivos_index_html.mjs').then(m => m.default)}], 
['materia/index.html', {size: 44862, hash: '56dda7784b6f933b05800745ea98fbdc93245a0290b8d98374a16fab9fe00450', text: () => import('./assets-chunks/materia_index_html.mjs').then(m => m.default)}], 
['produccion/index.html', {size: 43449, hash: '6c825d95306d13aa3f678aaf9dfef4c4969b8a7e34cefe67015d535632801dba', text: () => import('./assets-chunks/produccion_index_html.mjs').then(m => m.default)}], 
['styles-HMC2XGQT.css', {size: 28312, hash: 'oiDsFU5hRn8', text: () => import('./assets-chunks/styles-HMC2XGQT_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
