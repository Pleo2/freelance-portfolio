import { d as decodeKey } from './chunks/astro/server_B1yj5LBh.mjs';
import './chunks/astro-designed-error-pages_Cr45PHtd.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BIwOTgKq.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/leona/Dev/Web/freelance-portfolio/","cacheDir":"file:///C:/Users/leona/Dev/Web/freelance-portfolio/node_modules/.astro/","outDir":"file:///C:/Users/leona/Dev/Web/freelance-portfolio/dist/","srcDir":"file:///C:/Users/leona/Dev/Web/freelance-portfolio/src/","publicDir":"file:///C:/Users/leona/Dev/Web/freelance-portfolio/public/","buildClientDir":"file:///C:/Users/leona/Dev/Web/freelance-portfolio/dist/client/","buildServerDir":"file:///C:/Users/leona/Dev/Web/freelance-portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../../AppData/Local/Yarn/Berry/cache/astro-npm-5.5.2-e31fbdfe1a-10c0.zip/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".button-primary[data-astro-cid-d4sasgt5]{transition:color .2s}.button-primary[data-astro-cid-d4sasgt5]:hover{opacity:.85}.button-primary[data-astro-cid-d4sasgt5] [data-astro-cid-d4sasgt5][data-icon=\"iconamoon:arrow-top-right-1-thin\"]{transition:transform .2s}.button-primary[data-astro-cid-d4sasgt5]:hover [data-astro-cid-d4sasgt5][data-icon=\"iconamoon:arrow-top-right-1-thin\"]{transform:translate(3px,-3px)}\n"},{"type":"external","src":"/_astro/index.BtpCjE1Q.css"}],"routeData":{"route":"/projects/[id]","isIndex":false,"type":"page","pattern":"^\\/projects\\/([^/]+?)\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/projects/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BtpCjE1Q.css"},{"type":"inline","content":".button-primary[data-astro-cid-d4sasgt5]{transition:color .2s}.button-primary[data-astro-cid-d4sasgt5]:hover{opacity:.85}.button-primary[data-astro-cid-d4sasgt5] [data-astro-cid-d4sasgt5][data-icon=\"iconamoon:arrow-top-right-1-thin\"]{transition:transform .2s}.button-primary[data-astro-cid-d4sasgt5]:hover [data-astro-cid-d4sasgt5][data-icon=\"iconamoon:arrow-top-right-1-thin\"]{transform:translate(3px,-3px)}\n"}],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BtpCjE1Q.css"},{"type":"inline","content":".faq-item[data-astro-cid-cpjdupfh].active .faq-icon[data-astro-cid-cpjdupfh]{transform:rotate(180deg)}.faq-item[data-astro-cid-cpjdupfh].active .faq-answer[data-astro-cid-cpjdupfh]{max-height:500px}\n.button-primary[data-astro-cid-d4sasgt5]{transition:color .2s}.button-primary[data-astro-cid-d4sasgt5]:hover{opacity:.85}.button-primary[data-astro-cid-d4sasgt5] [data-astro-cid-d4sasgt5][data-icon=\"iconamoon:arrow-top-right-1-thin\"]{transition:transform .2s}.button-primary[data-astro-cid-d4sasgt5]:hover [data-astro-cid-d4sasgt5][data-icon=\"iconamoon:arrow-top-right-1-thin\"]{transform:translate(3px,-3px)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/leona/Dev/Web/freelance-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/leona/Dev/Web/freelance-portfolio/src/pages/projects/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/leona/Dev/Web/freelance-portfolio/src/pages/projects/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/projects/[id]@_@astro":"pages/projects/_id_.astro.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"pages/projects.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:../../../AppData/Local/Yarn/Berry/cache/astro-npm-5.5.2-e31fbdfe1a-10c0.zip/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/leona/AppData/Local/Yarn/Berry/cache/astro-npm-5.5.2-e31fbdfe1a-10c0.zip/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CSXjO30W.mjs","\u0000@astrojs-manifest":"manifest_cjowlst8.mjs","C:/Users/leona/Dev/Web/freelance-portfolio/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","C:/Users/leona/Dev/Web/freelance-portfolio/src/components/faq/FaqSection.astro?astro&type=script&index=0&lang.ts":"_astro/FaqSection.astro_astro_type_script_index_0_lang.aTAZxWcx.js","C:/Users/leona/Dev/Web/freelance-portfolio/src/components/navigation/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.Dt297ROw.js","C:/Users/leona/AppData/Local/Yarn/Berry/cache/astro-npm-5.5.2-e31fbdfe1a-10c0.zip/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/leona/Dev/Web/freelance-portfolio/src/components/Contact.astro?astro&type=script&index=0&lang.ts",""],["C:/Users/leona/Dev/Web/freelance-portfolio/src/components/faq/FaqSection.astro?astro&type=script&index=0&lang.ts","function t(){document.querySelectorAll(\".faq-question\").forEach(e=>{e.addEventListener(\"click\",()=>{e.parentElement.classList.toggle(\"active\")})})}document.addEventListener(\"astro:page-load\",()=>{t()});"],["C:/Users/leona/Dev/Web/freelance-portfolio/src/components/navigation/Navbar.astro?astro&type=script&index=0&lang.ts","let l=!1;const i=document.getElementById(\"toggleMenu\"),n=document.getElementById(\"mobileModal\");function m(){l=!l,l?(n.style.opacity=\"1\",n.style.pointerEvents=\"auto\",document.body.style.overflow=\"hidden\"):(n.style.opacity=\"0\",n.style.pointerEvents=\"none\",document.body.style.overflow=\"\"),i.classList.toggle(\"open\")}i.addEventListener(\"click\",m);function c(){const e=document.getElementById(\"mobileModal\"),d=document.getElementById(\"toggleMenu\"),t=document.getElementsByTagName(\"header\")[0];let o=!1;function s(){o=!o,o?(e.style.opacity=\"1\",e.style.pointerEvents=\"auto\",document.body.style.overflow=\"hidden\"):(e.style.opacity=\"0\",e.style.pointerEvents=\"none\",document.body.style.overflow=\"\"),d.classList.toggle(\"open\")}d.addEventListener(\"click\",s),e.querySelectorAll(\"a\").forEach(a=>{a.addEventListener(\"click\",()=>{o&&s()})}),(()=>{window.scrollY>40?t.classList.add(\"hidden\"):t.classList.remove(\"hidden\")})(),window.addEventListener(\"scroll\",()=>{window.scrollY>40?t.classList.add(\"hidden\"):t.classList.remove(\"hidden\")})}document.addEventListener(\"DOMContentLoaded\",c);document.addEventListener(\"astro:page-load\",c);"]],"assets":["/_astro/inter-tight-cyrillic-ext-wght-normal.CE3EbjzZ.woff2","/_astro/inter-tight-cyrillic-wght-normal.x48QYbAL.woff2","/_astro/inter-tight-greek-ext-wght-normal.pNDv5Qab.woff2","/_astro/inter-tight-greek-wght-normal.B1lUOBKV.woff2","/_astro/inter-tight-vietnamese-wght-normal.CxflIBSm.woff2","/_astro/inter-tight-latin-ext-wght-normal.C5hsmzEi.woff2","/_astro/inter-tight-latin-wght-normal.CbfoEWwi.woff2","/_astro/montserrat-cyrillic-ext-wght-normal.DV_LRdWn.woff2","/_astro/montserrat-cyrillic-wght-normal.D3on441i.woff2","/_astro/montserrat-vietnamese-wght-normal.BcziCZ2I.woff2","/_astro/montserrat-latin-ext-wght-normal.BLkAzDQP.woff2","/_astro/montserrat-latin-wght-normal.AeMhpAKq.woff2","/_astro/space-mono-vietnamese-400-normal.BNOj0Qhp.woff2","/_astro/space-mono-latin-ext-400-normal.DTLbW2xa.woff2","/_astro/space-mono-latin-400-normal.Rg4St2Dn.woff2","/_astro/space-mono-vietnamese-700-normal.DWQgDHuA.woff2","/_astro/space-mono-latin-ext-700-normal.B2s3bDs2.woff2","/_astro/space-mono-latin-700-normal.mWgeinG7.woff2","/_astro/space-mono-vietnamese-400-normal.B0PMp_xB.woff","/_astro/space-mono-latin-ext-400-normal.D4cJI_B-.woff","/_astro/space-mono-latin-400-normal._3DlpgIW.woff","/_astro/space-mono-vietnamese-700-normal.D-KrLuLr.woff","/_astro/space-mono-latin-ext-700-normal.B_E7P90g.woff","/_astro/space-mono-latin-700-normal.D7A851RN.woff","/_astro/index.BtpCjE1Q.css","/cube_fracture.zip","/favicon.svg","/robots.txt","/site.webmanifest","/sitemap.xml","/cube_fracture/license.txt","/cube_fracture/scene.bin","/cube_fracture/scene.gltf","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","/cube_fracture/textures/material_baseColor.jpeg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"OvMRQ5ncpm6EQMqAyByxrIeHFhy7qfnd6U/pFSH1rDE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
