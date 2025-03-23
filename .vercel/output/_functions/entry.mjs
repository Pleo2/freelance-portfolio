import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_astro-internal_actions_CRS6BNoq.mjs';
import { c as createExports } from './chunks/entrypoint_jVzX7BbM.mjs';
import { manifest } from './manifest_BDOENWhU.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/projects/_id_.astro.mjs');
const _page3 = () => import('./pages/projects.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.5.3_@types+node@22.13.10_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.4.2_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.5.3_@types+node@22.13.10_jiti@2.4.2_lightningcss@1.29.2_rollup@4.36.0_typescript@5.4.2_yaml@2.7.0/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/projects/[id].astro", _page2],
    ["src/pages/projects/index.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1e62b2fc-29fb-4481-aaed-c3c94f1d840e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
