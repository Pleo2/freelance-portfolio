import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B1yj5LBh.mjs';
import { $ as $$Layout, a as $$Container, b as $$AnimatedBackground, c as $$AnimatedBackground2, e as $$Link, f as $$Button, g as $$Divisor, d as $$SectionContainer, p as projects } from '../chunks/AnimatedBackground2_YHpxJQSs.mjs';
import { $ as $$ProjectCard, a as $$CallToAction } from '../chunks/CallToAction_DQpDwJJN.mjs';
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "type": "website" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main class="pt-6 pb-24 px-4 md:px-8"> ${renderComponent($$result3, "AnimatedBackground", $$AnimatedBackground, { "position": "right" })} ${renderComponent($$result3, "AnimatedBackground", $$AnimatedBackground, { "position": "left" })} ${renderComponent($$result3, "AnimatedBackground2", $$AnimatedBackground2, {})} <div class="container-projects border-[1px] border-foreground/20 rounded-lg p-4"> <header class="flex justify-between items-center"> <h1 class="font-display font-thin text-xl md:text-4xl">Proyectos</h1> ${renderComponent($$result3, "Link", $$Link, { "href": "/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Button", $$Button, { "text": "regresar al inicio", "icon": "icon-arrow-up-right", "style": "button", "iconSize": 16, "size": "sm" })} ` })} </header> ${renderComponent($$result3, "Divisor", $$Divisor, { "space": "sm" })} ${renderComponent($$result3, "SectionContainer", $$SectionContainer, { "class": "md:grid md:grid-cols-2 md:gap-12" }, { "default": ($$result4) => renderTemplate`${projects.map((project) => renderTemplate`${renderComponent($$result4, "ProjectCard", $$ProjectCard, { "id": project.id, "title": project.title, "description": project.description, "image": project.image })}`)}` })} ${renderComponent($$result3, "Divisor", $$Divisor, { "space": "sm" })} ${renderComponent($$result3, "SectionContainer", $$SectionContainer, { "class": "md:grid md:grid-cols-1 place-items-center" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CallToAction", $$CallToAction, {})} ` })} </div> </main> ` })} ` })}`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/leona/Dev/Web/freelance-portfolio/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
