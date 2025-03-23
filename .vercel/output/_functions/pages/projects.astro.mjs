import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DXnayVh2.mjs';
import { $ as $$Layout, a as $$Container, b as $$AnimatedBackground, c as $$AnimatedBackground2, d as $$SectionContainer, e as $$Link, f as $$Button, g as $$Divisor, p as projects } from '../chunks/AnimatedBackground2_BntxB4G0.mjs';
import { $ as $$ProjectCard, a as $$CallToAction } from '../chunks/CallToAction_CzhPWQMk.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Proyectos | Portfolio de Dise\xF1o y Desarrollo Web";
  const pageDescription = "Explora mi portfolio de proyectos de dise\xF1o y desarrollo web. Trabajo con las \xFAltimas tecnolog\xEDas para crear sitios web r\xE1pidos, modernos y optimizados para SEO.";
  const pageKeywords = [
    "portfolio",
    "proyectos web",
    "dise\xF1o web",
    "desarrollo web",
    "casos de \xE9xito",
    "trabajos freelance"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "type": "website" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main class="pt-6 pb-24 px-4 md:px-8"> ${renderComponent($$result3, "AnimatedBackground", $$AnimatedBackground, { "position": "right" })} ${renderComponent($$result3, "AnimatedBackground", $$AnimatedBackground, { "position": "left" })} ${renderComponent($$result3, "AnimatedBackground2", $$AnimatedBackground2, {})} ${renderComponent($$result3, "SectionContainer", $$SectionContainer, {}, { "default": ($$result4) => renderTemplate` <header class="flex justify-between items-center"> <h1 class="font-display font-thin text-xl md:text-4xl">Proyectos</h1> ${renderComponent($$result4, "Link", $$Link, { "href": "/" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Button", $$Button, { "text": "regresar al inicio", "icon": "icon-arrow-up-right", "style": "button", "iconSize": 16, "size": "sm" })} ` })} </header> ${renderComponent($$result4, "Divisor", $$Divisor, { "space": "sm" })} ${renderComponent($$result4, "SectionContainer", $$SectionContainer, { "class": "md:grid md:grid-cols-2 md:gap-12" }, { "default": ($$result5) => renderTemplate`${projects.map((project) => renderTemplate`${renderComponent($$result5, "ProjectCard", $$ProjectCard, { "id": project.id, "title": project.title, "description": project.description, "image": project.image })}`)}` })} ${renderComponent($$result4, "Divisor", $$Divisor, { "space": "sm" })} ${renderComponent($$result4, "SectionContainer", $$SectionContainer, { "class": "md:grid md:grid-cols-1 place-items-center" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CallToAction", $$CallToAction, {})} ` })} ` })} </main> ` })} ` })}`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/pages/projects/index.astro", void 0);

const $$file = "/Users/pleo2/Dev/freelance/freelance-portfolio/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
