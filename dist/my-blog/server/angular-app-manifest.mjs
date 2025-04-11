
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9808, hash: 'fb46019b5730043e4a78848f99f4bcb7901ff7acf4f1d06333c93c2e510f2e24', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9910, hash: '317eb2f012c149bb14ba6414b6f5dc3bed0a726b81a8c6fa0c743ff8df46c9f2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19158, hash: '073182a288351659ed62aa98a5ad11d008c7e7ea663edf6d236c0f477ad9c04b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 18450, hash: 'a3ae044eeaa0232363fcabbd48dc7dfa92af1f55ff830c2be321bc3ec8124c69', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 22717, hash: 'e5d36d99bd2afb2b88046722c6eab0bb104208722f708838997f204b75ef98a5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 17031, hash: '622987db96a899799d7493e7f23758b692a2d99b4aec0830c031ef097f775fcc', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-CSGJZFWR.css': {size: 359, hash: 'RYx8bvNE++g', text: () => import('./assets-chunks/styles-CSGJZFWR_css.mjs').then(m => m.default)}
  },
};
