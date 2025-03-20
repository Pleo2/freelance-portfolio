import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B1yj5LBh.mjs';
import { $ as $$Layout, p as projects, a as $$Container, b as $$AnimatedBackground, c as $$AnimatedBackground2, d as $$SectionContainer, e as $$Link, f as $$Button, g as $$Divisor, h as $$Image } from '../../chunks/AnimatedBackground2_YHpxJQSs.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return projects.flatMap(
    (project, index) => [
      {
        params: { id: project.id },
        props: {
          project
        }
      }
    ]
  );
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { project } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": project.title, "description": project.description, "keywords": project.tags, "type": "website" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="h-max mx-4 pt-6 pb-6 flex flex-col md:flex-row"> ${renderComponent($$result3, "AnimatedBackground", $$AnimatedBackground, { "position": "left" })} ${renderComponent($$result3, "AnimatedBackground", $$AnimatedBackground, { "position": "right", "verticalPosition": "bottom" })} ${renderComponent($$result3, "AnimatedBackground2", $$AnimatedBackground2, { "verticalPosition": "middle" })} ${renderComponent($$result3, "SectionContainer", $$SectionContainer, {}, { "default": ($$result4) => renderTemplate` <div class="return-button section flex justify-between items-center"> <h1 class="font-display font-thin truncate mr-4 lg:text-4xl">${project.title}</h1> ${renderComponent($$result4, "Link", $$Link, { "href": "/projects" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Button", $$Button, { "text": "ver todos los proyectos", "icon": "icon-arrow-up-right", "style": "button", "size": "xs" })} ` })} </div> ${renderComponent($$result4, "Divisor", $$Divisor, { "space": "sm" })} <section class="flex flex-col md:flex-row md:gap-6"> <div class="text-section inset-shadow-2xs inset-shadow-foreground/20 bg-background/20 rounded-2xl border-foreground/20 mt-4 p-4 font-sans text-sm text-foreground/60 flex flex-col gap-2 md:flex-1 md:border-[1px] md:border-foreground/20"> <p>${project.fullDescription}</p> <div class="divisor mt-4 h-[1px] w-full bg-foreground/10 border-foreground/20"></div> <div class="flex flex-col gap-2"> <div class="flex justify-between items-center"> <p class="font-sans text-sm text-foreground/50">
Cliente
</p> <p class="font-sans text-sm text-foreground/50"> ${project.client} </p> </div> <div class="flex justify-between items-center"> <p class="font-sans text-sm text-foreground/50">
Fecha
</p> <p class="font-sans text-sm text-foreground/50"> ${project.date} </p> </div> <div class="flex justify-between items-center"> <p class="font-sans text-sm text-foreground/50">
Tecnologías
</p> <p class="font-sans text-sm text-foreground/50"> ${project.tags.join(", ")} </p> </div> <div class="flex justify-between items-center"> <p class="font-sans text-sm text-foreground/50">
Enlace
</p> ${renderComponent($$result4, "Link", $$Link, { "href": project.link ?? "/", "target": "_blank", "rel": "noopener noreferrer" }, { "default": ($$result5) => renderTemplate` <p class="font-sans text-sm text-foreground/50 flex items-center gap-1 md:hover:opacity-75">
Ver en vivo ${renderComponent($$result5, "Button", $$Button, { "class": "opacity-50", "style": "outline", "icon": "icon-arrow-up-right", "iconSize": 18 })} </p> ` })} </div> <div class="flex justify-between items-center"> <p class="font-sans text-sm text-foreground/50">
Fecha de publicación
</p> <p class="font-sans text-sm text-foreground/50"> ${project.date} </p> </div> </div> </div> <div class="images-section grid grid-col-1 gap-4 mt-4 [&>img]:rounded-2xl md:flex-2"> ${renderComponent($$result4, "Image", $$Image, { "id": project.image.id, "image": project.image })} ${project.allImages.map((image) => renderTemplate`${renderComponent($$result4, "Image", $$Image, { "id": image.id, "image": image })}`)} </div> </section> ` })} </div> ` })} ` })}`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/pages/projects/[id].astro", void 0);

const $$file = "C:/Users/leona/Dev/Web/freelance-portfolio/src/pages/projects/[id].astro";
const $$url = "/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
