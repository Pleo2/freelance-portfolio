import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as renderTemplate, h as renderScript, i as addAttribute, F as Fragment } from '../chunks/astro/server_B1yj5LBh.mjs';
import { i as $$Icon, e as $$Link, f as $$Button, d as $$SectionContainer, p as projects, g as $$Divisor, b as $$AnimatedBackground, c as $$AnimatedBackground2, $ as $$Layout, a as $$Container } from '../chunks/AnimatedBackground2_YHpxJQSs.mjs';
import { $ as $$ProjectCard, a as $$CallToAction } from '../chunks/CallToAction_DQpDwJJN.mjs';
/* empty css                                 */
import { g as getActionQueryString, a as astroCalledServerError, A as ActionError, d as deserializeActionResult, b as ACTION_QUERY_PARAMS, c as appendForwardSlash } from '../chunks/astro-designed-error-pages_Cr45PHtd.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro();
const $$CardHabilities = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardHabilities;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="habilities-card mt-16 md:mt-24"> ${renderComponent($$result, "Icon", $$Icon, { "name": `${content.icon}`, "class": "w-12 h-12" })} <h2 class="text-xl lg:text-2xl mt-6"> ${content.description} </h2> </article>`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/habilities/cardHabilities.astro", void 0);

const $$Habilities = createComponent(($$result, $$props, $$slots) => {
  const mainText = "Especializado en aplicaciones escalables rendimiento web y c\xF3digo limpio.";
  const mainText2 = "Optimizaci\xF3n para motores de b\xFAsqueda desde el c\xF3digo, mejorando la visibilidad org\xE1nica de tu web.";
  const content = [
    {
      icon: "icon-command",
      description: "Implementaci\xF3n de interfaces modernas y responsivas con las mejores pr\xE1cticas del desarrollo web."
    },
    {
      icon: "icon-scan-search",
      description: "Optimizaci\xF3n para motores de b\xFAsqueda desde el c\xF3digo, mejorando la visibilidad org\xE1nica de tu web."
    },
    {
      icon: "icon-drafting-compass",
      description: "Interfaces centradas en el usuario con dise\xF1os innovadores que destacan en el mercado."
    },
    {
      icon: "icon-zap",
      description: "Sitios web de carga r\xE1pida y experiencia fluida, optimizados para dispositivos m\xF3viles."
    },
    {
      icon: "icon-boxes",
      description: "Arquitecturas modernas para sitios web r\xE1pidos, seguros y escalables."
    },
    {
      icon: "icon-cable",
      description: "Integraci\xF3n efectiva entre frontend y APIs, con gesti\xF3n optimizada de estados."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<article class="habilities-component h-max mx-4 pt-32"> <h2 class="text-left text-foreground text-3xl font-sans font-semibold lg:max-w-[64%] md:text-4xl md:leading-[2.5rem]"> ${mainText} <span class="text-neutral-400">${mainText2}</span> </h2> <section class="cardContainer md:grid md:grid-cols-3 md:grid-rows-2 md:gap-24"> ${content.map((item) => renderTemplate`${renderComponent($$result, "CardHabilities", $$CardHabilities, { "content": item })}`)} </section> </article>`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/Habilities.astro", void 0);

const $$Astro$4 = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { title = "Proyectos", showLink = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="title-container rounded-lg flex items-center justify-between"> <h2 class="font-display font-thin text-2xl rounded-lg py-1">${title}</h2> ${showLink && renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": "/projects", "style": "primary", "class": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "text": "ver todos los proyectos", "size": "sm", "style": "button", "iconSize": 16, "icon": "icon-arrow-up-right" })} ` })}`} </div>`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/ui/SectionTitle.astro", void 0);

const $$Project = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="habilities-component h-max mx-4 pt-24"> ${renderComponent($$result, "SectionContainer", $$SectionContainer, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, {})} ${renderComponent($$result2, "Divisor", $$Divisor, { "space": "sm" })} <div class="project-container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12"> ${projects.slice(0, 2).map((_) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "id": _.id, "title": _.title, "description": _.description, "image": _.image })}`)} </div> ` })} </article>`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/Project.astro", void 0);

const $$Astro$3 = createAstro();
const $$FaqSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FaqSection;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="habilities-component h-max mx-4 pt-24" data-astro-cid-cpjdupfh> ${renderComponent($$result, "SectionContainer", $$SectionContainer, { "data-astro-cid-cpjdupfh": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Metodologia de trabajo", "showLink": false, "data-astro-cid-cpjdupfh": true })} ${renderComponent($$result2, "Divisor", $$Divisor, { "space": "sm", "data-astro-cid-cpjdupfh": true })} <div class="flex flex-col gap-4 mt-4" data-astro-cid-cpjdupfh> ${items.map((item) => renderTemplate`<div class="faq-item rounded-lg inset-shadow-2xs inset-shadow-foreground/20" data-astro-cid-cpjdupfh> <button class="faq-question w-full flex justify-between items-center p-2 bg-background/20 cursor-pointer text-left font-xl text-foreground/80 hover:bg-background/30 transition-colors duration-200" data-astro-cid-cpjdupfh> <span data-astro-cid-cpjdupfh>${item.question}</span> <svg class="faq-icon w-6 h-6 text-foreground/80 transition-transform duration-300 ease-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-cpjdupfh> <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" data-astro-cid-cpjdupfh></path> </svg> </button> <div class="faq-answer nset-shadow-2xs inset-shadow-foreground/20 max-h-0 overflow-hidden transition-all duration-200 ease-out bg-background/20" data-astro-cid-cpjdupfh> <p class="font-sans text-sm text-foreground/70 leading-relaxed mx-2" data-astro-cid-cpjdupfh> ${item.answer} </p> </div> </div>`)} </div> ` })} </article>  ${renderScript($$result, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/faq/FaqSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/faq/FaqSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$Methodology = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Methodology;
  const faqItems = [
    {
      question: "\xBFQu\xE9 es Astro?",
      answer: "Astro es un framework web moderno que permite construir sitios web m\xE1s r\xE1pidos con menos JavaScript. Combina lo mejor de los frameworks est\xE1ticos y din\xE1micos."
    },
    {
      question: "\xBFPor qu\xE9 usar Tailwind CSS?",
      answer: "Tailwind CSS es un framework de utilidades CSS que permite dise\xF1ar r\xE1pidamente interfaces personalizadas sin salir de tu HTML. Proporciona flexibilidad y mantenibilidad sin sacrificar la velocidad de desarrollo."
    },
    {
      question: "\xBFC\xF3mo funciona Alpine.js?",
      answer: "Alpine.js es un framework JavaScript minimalista que te permite agregar comportamiento din\xE1mico a tu HTML con una sintaxis declarativa simple. Es perfecto para interacciones peque\xF1as como men\xFAs desplegables y modales."
    },
    {
      question: "\xBFEs responsive este dise\xF1o?",
      answer: "S\xED, este dise\xF1o es completamente responsive y se adapta a diferentes tama\xF1os de pantalla gracias a las utilidades de Tailwind CSS."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<article class="habilities-component h-max "> ${renderComponent($$result, "FaqSection", $$FaqSection, { "items": faqItems })} </article>`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/Methodology.astro", void 0);

const $$Results = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="habilities-component h-dvh md:h-screen bg-desert-sand"></article>`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/Results.astro", void 0);

const apiContextRoutesSymbol = Symbol.for("context.routes");
const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
function getActionPath(action) {
  let path = `${"/".replace(/\/$/, "")}/_actions/${new URLSearchParams(action.toString()).get(ACTION_QUERY_PARAMS.actionName)}`;
  {
    path = appendForwardSlash(path);
  }
  return path;
}
async function handleAction(param, path, context) {
  if (context) {
    const pipeline = Reflect.get(context, apiContextRoutesSymbol);
    if (!pipeline) {
      throw astroCalledServerError();
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
  const headers = new Headers();
  headers.set("Accept", "application/json");
  let body = param;
  if (!(body instanceof FormData)) {
    try {
      body = JSON.stringify(param);
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: `Failed to serialize request body to JSON. Full error: ${e.message}`
      });
    }
    if (body) {
      headers.set("Content-Type", "application/json");
    } else {
      headers.set("Content-Length", "0");
    }
  }
  const rawResult = await fetch(
    getActionPath({
      toString() {
        return getActionQueryString(path);
      }
    }),
    {
      method: "POST",
      body,
      headers
    }
  );
  if (rawResult.status === 204) {
    return deserializeActionResult({ type: "empty", status: 204 });
  }
  return deserializeActionResult({
    type: rawResult.ok ? "data" : "error",
    body: await rawResult.text()
  });
}
const actions = toActionProxy();

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="contact-section h-max mx-4 pt-24"> ${renderComponent($$result, "SectionContainer", $$SectionContainer, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Contacto", "showLink": false })} ${renderComponent($$result2, "Divisor", $$Divisor, { "space": "sm" })} <form class="max-w-2xl mx-auto space-y-6 md:flex md:items-center "${addAttribute(actions.send, "action")} method="POST"> <div class="flex flex-col"> <div class="space-y-2"> <label class="block font-display text-foreground/80">
Nombre completo
</label> <input type="text" name="name" required class="w-full px-4 py-2 bg-background/20 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"> </div> <div class="space-y-2"> <label class="block font-display text-foreground/80">
Correo electrónico
</label> <input type="email" name="email" required class="w-full px-4 py-2 bg-background/20 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"> </div> </div> <div class="space-y-2"> <label class="block font-display text-foreground/80">
Mensaje
</label> <textarea name="message" rows="5" required class="w-full px-4 py-2 bg-background/20 border border-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"></textarea> </div> <div class="flex justify-center"> ${renderComponent($$result2, "Button", $$Button, { "text": "Enviar", "icon": "icon-arrow-up-right", "style": "white", "size": "sm", "type": "submit" })} </div> </form> ` })} </article> ${renderScript($$result, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/Contact.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeSelector = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="z-50 absolute"> <label for="theme">Theme:</label> <select class="bg-background" id="theme" onchange="changeTheme(this.value)"> <option value="system">System</option> <option value="light">Light</option> <option value="dark">Dark</option> </select> </div> <script>\n    function changeTheme(theme) {\n        if (theme === "system") {\n            localStorage.removeItem("theme");\n        } else {\n            localStorage.theme = theme;\n        }\n        handleThemeChange();\n    }\n\n    // Set the select value based on the current theme\n    document.getElementById("theme").value = localStorage.theme || "system";\n<\/script>'])), maybeRenderHead());
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/ThemeSelector.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="habilities-component h-dvh md:h-screen bg-pomp-and-power"> ${renderComponent($$result, "ThemeSelector", $$ThemeSelector, {})} </article>`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "/projects" },
    { name: "Metodolog\xEDa", href: "#methodology" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Contacto", href: "#contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="header-mobile" class="fixed top-0 left-0 py-6 max-w-[90rem] max-h-dvh w-dvw h-dvh z-50 transition-all duration-500 md:max-w-full md:backdrop-blur-xl md:h-max hidden"> <div class="container px-4 mx-auto flex items-center justify-between md:max-w-[90rem]"> ${renderComponent($$result, "Link", $$Link, { "id": "branding", "href": "/", "class": "font-heading font-display font-bold text-2xl md:text-4xl tracking-tight text-gradient transition-opacity duration-500" }, { "default": ($$result2) => renderTemplate`
JM
` })}  <nav class="hidden md:flex items-center space-x-8"> ${navLinks.map((link) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "key": link.name }, { "default": ($$result2) => renderTemplate` <a${addAttribute(link.href, "href")} class="text-xl font-sans text-foreground/80 hover:text-foreground link-underline hover:underline hover:decoration-wavy hover:decoration-foreground duration-300 transition-all"> ${link.name} </a> ` })}`)} ${renderComponent($$result, "Button", $$Button, { "href": "/contact", "style": "primary", "text": "Hablemos", "size": "lg" })} </nav>  <button id="toggleMenu" class="toggle-menu md:hidden flex flex-col gap-[0.3rem] bg-transparent border-0 focus:outline-none z-50"> <span class="block w-5 h-0.5 bg-foreground rounded-full transition-transform origin-right duration-300 ease-in-out"></span> <span class="block w-5 h-0.5 bg-foreground rounded-full transition-opacity duration-300 ease-in-out"></span> <span class="block w-5 h-0.5 bg-foreground rounded-full transition-transform origin-right duration-300 ease-in-out"></span> </button> </div> <div id="mobileModal" class="fixed inset-0 bg-black/90 backdrop-blur-2xl z-40 flex flex-col justify-center items-center transition-all duration-300 md:hidden opacity-0 pointer-events-none"> <nav class="flex flex-col items-start space-y-6"> ${navLinks.map((link) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "key": link.name }, { "default": ($$result2) => renderTemplate` <a${addAttribute(link.href, "href")} class="text-5xl font-semibold text-foreground/90 hover:text-white transition-colors"> ${link.name} </a> ` })}`)} </nav> </div> </header> ${renderScript($$result, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/navigation/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/navigation/Navbar.astro", void 0);

const $$MouseBounce = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mouse bounce icon"> <span class="w-full justify-center items-center animate-bounce hidden md:flex"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon-mouse", "size": 36 })} </span> </div>`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/ui/MouseBounce.astro", void 0);

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { dynamic = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative isolate h-dvh dark:bg-stone-950 overflow-hidden lg:overflow-visible md:mt-0 md:justify-center md:flex md:flex-col md:gap-12 md:h-screen md:w-full"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "AnimatedBackground", $$AnimatedBackground, { "position": "left" })} ${renderComponent($$result, "AnimatedBackground", $$AnimatedBackground, { "position": "right", "verticalPosition": "bottom" })} ${renderComponent($$result, "AnimatedBackground2", $$AnimatedBackground2, { "verticalPosition": "middle" })} <main class="mt-24 flex flex-col justify-between items-center gap-4 px-4 md:flex-row md:gap-0 2xl:mt-24"> <section class="text flex-2 flex flex-col gap-1 items-start justify-center"> <h3 class="inline-block font-mono font-medium text-xs w-max px-2 py-1 bg-white/5 backdrop-blur-md border border-foreground/10 rounded-full animate-fade-in">
Desarrollador Frontend Freelance
</h3> <h1 class="text-4xl md:text-7xl font-sans leading-tight my-3"> <span class="inline">Transformamos</span> <span class="font-bold p-1 rounded"> Ideas </span> <span> en </span> <span class="font-bold p-1 rounded"> Experiencias </span> <span> digitales con impacto. </span> </h1> <h2 class="flex flex-col text-xl font-semibold mb-3 [&>span]:inline-block mt-6"> <span>+ Desarrollo frontend avanzado </span> <span>+ SEO optimizado </span> <span>+ Diseños innovadores </span> <span class="text-neutral-400 text-xs inline-block font-medium font-mono">
Contactenos para obtener una consulta gratuita.
</span> </h2> <button class="flex gap-1 px-6 py-2.5 mt-4 text-xl font-semibold bg-foreground text-background rounded-xl items-center justify-center">Contactanos
<span class="w-6 h-6"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span> </button> </section> <section class="overflow-hidden flex-1 w-full mx-auto -bottom-[0px]"> <div class="from-blue-500 to-blue-200 h-80 w-80 aspect-ratio rounded-full mx-auto"> <img src="https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bg-image" class="w-full h-full bg-cover rounded-full"> </div> </section> </main> ${renderComponent($$result, "MouseBounce", $$MouseBounce, {})} </div>`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/Hero.astro", void 0);

const $$CalltoactionSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="calltoaction-component h-max mx-4 pt-24 "> ${renderComponent($$result, "SectionContainer", $$SectionContainer, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} ` })} </article>`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/components/CalltoactionSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Portfolio Freelance | Dise\xF1o y Desarrollo Web Profesional";
  const pageDescription = "Servicios de dise\xF1o web y desarrollo web profesional. Creaci\xF3n de sitios web modernos, r\xE1pidos y con un enfoque en SEO que destacan en el mercado.";
  const pageKeywords = ["dise\xF1o web", "desarrollo web", "freelance", "portfolio", "dise\xF1o responsive", "SEO", "UX/UI", "aplicaciones web", "sitios web r\xE1pidos"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": "Tu Nombre", "type": "website" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Habilities", $$Habilities, {})} ${renderComponent($$result3, "Project", $$Project, {})} ${renderComponent($$result3, "CalltoactionSection", $$CalltoactionSection, {})} ${renderComponent($$result3, "Methodology", $$Methodology, {})} ${renderComponent($$result3, "Results", $$Results, {})} ${renderComponent($$result3, "Contact", $$Contact, {})} ${renderComponent($$result3, "Footer", $$Footer, {})} ` })} ` })}`;
}, "C:/Users/leona/Dev/Web/freelance-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/leona/Dev/Web/freelance-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
