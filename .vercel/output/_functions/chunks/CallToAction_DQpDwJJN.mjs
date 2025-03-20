import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './astro/server_B1yj5LBh.mjs';
import { h as $$Image, e as $$Link, f as $$Button } from './AnimatedBackground2_YHpxJQSs.mjs';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { id, title, description, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="project-card mt-4"> <!-- @ts-ignore --> ${renderComponent($$result, "Image", $$Image, { "id": id, "image": image })} <div class="project-info-redirect flex justify-start items-center gap-4 h-max"> ${renderComponent($$result, "Link", $$Link, { "href": `/projects/${id}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "icon": "icon-arrow-up-right", "iconSize": 16, "style": "button", "class": "h-12 w-12 text-foreground/50" })} ` })} <div class="project-info flex-1 w-[80%] h-12"> <h3 class="font-display font-thing text-foreground text-xl"> ${title} </h3> <p class="font-sans truncate line-clamp-2 max-w-3/4 text-[0.7rem] text-foreground/50"> ${description} </p> </div> </div> </div>`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/projects/ProjectCard.astro", void 0);

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center gap-6"> <h2 class="text-xl text-center font-thin font-display text-foreground">
¿Tienes un proyecto en mente?
</h2> <p class="text mx-7 text-center font-sans text-foreground/80 max-w-2xl ">
Estoy disponible para nuevos proyectos. Contáctame y conversemos sobre
        cómo puedo ayudarte a llevar tu idea al siguiente nivel.
</p> ${renderComponent($$result, "Link", $$Link, { "href": "/contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "text": "Contactar", "icon": "icon-message-circle", "style": "button", "size": "sm" })} ` })} </div>`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/contact/CallToAction.astro", void 0);

export { $$ProjectCard as $, $$CallToAction as a };
