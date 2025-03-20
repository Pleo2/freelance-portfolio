import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_CjphUGoF.mjs';
import { manifest } from './manifest_cjowlst8.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/projects/_id_.astro.mjs');
const _page2 = () => import('./pages/projects.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["../../../AppData/Local/Yarn/Berry/cache/astro-npm-5.5.2-e31fbdfe1a-10c0.zip/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/projects/[id].astro", _page1],
    ["src/pages/projects/index.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6d836443-9ab2-4541-b354-52639d9be1ee",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
