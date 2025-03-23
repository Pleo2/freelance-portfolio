import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_astro-internal_actions_CjCBOGSx.mjs';
import { c as createExports } from './chunks/entrypoint_CSsItTBA.mjs';
import { manifest } from './manifest_C5oGiZ_N.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/projects/_id_.astro.mjs');
const _page3 = () => import('./pages/projects.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["../../../Library/Caches/pnpm/dlx/7f4f517d0897e21230b539f9f0c32a3869929245353828e53f91a94f36360c4d/195c1e932f0-5d5a/node_modules/.pnpm/astro@5.5.4_rollup@4.36.0_typescript@5.8.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["../../../Library/Caches/pnpm/dlx/7f4f517d0897e21230b539f9f0c32a3869929245353828e53f91a94f36360c4d/195c1e932f0-5d5a/node_modules/.pnpm/astro@5.5.4_rollup@4.36.0_typescript@5.8.2/node_modules/astro/dist/actions/runtime/route.js", _page1],
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
    "middlewareSecret": "be2294d4-295f-47f4-8e3b-107371aa9f38",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
