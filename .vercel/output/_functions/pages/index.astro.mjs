import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate, k as renderScript, l as addAttribute, s as spreadAttributes, n as renderSlot, F as Fragment } from '../chunks/astro/server_BkGDJkZ1.mjs';
import { i as $$Icon, d as $$SectionContainer, e as $$Link, f as $$Button, p as projects, g as $$Divisor, b as $$AnimatedBackground, c as $$AnimatedBackground2, $ as $$Layout, a as $$Container } from '../chunks/AnimatedBackground2_Do4Ys7CZ.mjs';
import { $ as $$ProjectCard, a as $$CallToAction } from '../chunks/CallToAction_DzOLZoGe.mjs';
/* empty css                                 */
import { a as actions } from '../chunks/_astro_actions_Cw1ttZse.mjs';
import { tv } from 'tailwind-variants';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { useEffect } from 'react';
import * as THREE from 'three';
export { renderers } from '../renderers.mjs';

const $$Astro$8 = createAstro("https://freelance-portfolio-neon.vercel.app/");
const $$CardHabilities = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CardHabilities;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="habilities-card mt-16 md:mt-24"> ${renderComponent($$result, "Icon", $$Icon, { "name": `${content.icon}`, "class": "w-12 h-12" })} <h2 class="text-xl lg:text-2xl mt-6"> ${content.description} </h2> </article>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/habilities/cardHabilities.astro", void 0);

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
  return renderTemplate`${maybeRenderHead()}<article class="habilities-component h-max mx-4 pt-32" id="skills"> ${renderComponent($$result, "SectionContainer", $$SectionContainer, {}, { "default": ($$result2) => renderTemplate` <h2 class="text-left text-foreground text-3xl font-sans font-semibold lg:max-w-[64%] md:text-4xl md:leading-[2.5rem]"> ${mainText} <span class="text-neutral-400">${mainText2}</span> </h2> <section class="cardContainer md:grid md:grid-cols-3 md:grid-rows-2 md:gap-24"> ${content.map((item) => renderTemplate`${renderComponent($$result2, "CardHabilities", $$CardHabilities, { "content": item })}`)} </section> ` })} </article>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/Habilities.astro", void 0);

const $$Astro$7 = createAstro("https://freelance-portfolio-neon.vercel.app/");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { title = "Proyectos", showLink = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="title-container rounded-lg flex items-center justify-between"> <h2 class="font-display font-thin text-2xl rounded-lg py-1">${title}</h2> ${showLink && renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": "/projects", "style": "primary", "class": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "text": "ver todos los proyectos", "size": "sm", "style": "button", "iconSize": 16, "icon": "icon-arrow-up-right" })} ` })}`} </div>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/ui/SectionTitle.astro", void 0);

const $$Project = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="habilities-component h-max mx-4 pt-24"> ${renderComponent($$result, "SectionContainer", $$SectionContainer, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, {})} ${renderComponent($$result2, "Divisor", $$Divisor, { "space": "sm" })} <div class="project-container flex flex-col items-center md:flex-row md:justify-between"> ${projects.slice(0, 2).map((_) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "id": _.id, "title": _.title, "description": _.description, "image": _.image })}`)} </div> ` })} </article>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/Project.astro", void 0);

const $$Astro$6 = createAstro("https://freelance-portfolio-neon.vercel.app/");
const $$FaqSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FaqSection;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="habilities-component h-max mx-4 pt-24" data-astro-cid-cpjdupfh> ${renderComponent($$result, "SectionContainer", $$SectionContainer, { "data-astro-cid-cpjdupfh": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Preguntas Frecuentes", "showLink": false, "data-astro-cid-cpjdupfh": true })} <div class="flex flex-col gap-4 mt-4" data-astro-cid-cpjdupfh> ${items.map((item) => renderTemplate`<div class="faq-item rounded-lg inset-shadow-2xs inset-shadow-foreground/20" data-astro-cid-cpjdupfh> <button class="faq-question w-full flex justify-between items-center p-2 bg-background/20 cursor-pointer text-left font-xl text-foreground/80 hover:bg-background/30 transition-colors duration-200" data-astro-cid-cpjdupfh> <span data-astro-cid-cpjdupfh>${item.question}</span> <svg class="faq-icon w-6 h-6 text-foreground/80 transition-transform duration-300 ease-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-cpjdupfh> <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" data-astro-cid-cpjdupfh></path> </svg> </button> <div class="faq-answer nset-shadow-2xs inset-shadow-foreground/20 max-h-0 overflow-hidden transition-all duration-200 ease-out bg-background/20" data-astro-cid-cpjdupfh> <p class="font-sans text-sm text-foreground/70 leading-relaxed mx-2" data-astro-cid-cpjdupfh> ${item.answer} </p> </div> </div>`)} </div> ` })} </div>  ${renderScript($$result, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/faq/FaqSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/faq/FaqSection.astro", void 0);

const $$Astro$5 = createAstro("https://freelance-portfolio-neon.vercel.app/");
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Faq;
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
  return renderTemplate`${maybeRenderHead()}<article class="habilities-component h-max " id="Faq"> ${renderComponent($$result, "FaqSection", $$FaqSection, { "items": faqItems })} </article>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/Faq.astro", void 0);

const $$Astro$4 = createAstro("https://freelance-portfolio-neon.vercel.app/");
const $$Textarea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Textarea;
  const textarea = tv({
    base: [
      "bg-background text-foreground/80 font-sans min-h-10 w-full rounded-md border-[1px] border-foreground/20",
      "focus:outline-[1px] focus:border-foreground/40",
      "file:text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "peer placeholder:text-muted-foreground"
    ],
    variants: {
      size: {
        sm: "min-h-9 px-2 py-1 text-sm",
        md: "min-h-10 px-3 py-2 text-base",
        lg: "min-h-12 px-4 py-3 text-lg"
      }
    },
    defaultVariants: { size: "md" }
  });
  const { size = "md", class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<textarea${addAttribute(textarea({ size, class: className }), "class")}${spreadAttributes(rest)}></textarea>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/starwind/starwind/textarea/Textarea.astro", void 0);

const $$Astro$3 = createAstro("https://freelance-portfolio-neon.vercel.app/");
const $$Label = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Label;
  const label = tv({
    base: [
      "font-display",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-70 has-[+:disabled]:cursor-not-allowed has-[+:disabled]:opacity-70"
    ],
    variants: { size: { sm: "text-sm", md: "text-base", lg: "text-lg" } },
    defaultVariants: { size: "md" }
  });
  const { size = "md", class: className = "", ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(label({ size, class: className }), "class")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </label>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/starwind/starwind/label/Label.astro", void 0);

const $$Astro$2 = createAstro("https://freelance-portfolio-neon.vercel.app/");
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Input;
  const input = tv({
    base: [
      "bg-background text-foreground/80 font-sans min-h-10 w-full rounded-md border-[1px] border-foreground/20",
      "focus:outline-[1px] focus:border-foreground/40",
      "file:text-foreground file:my-auto file:mr-4 file:h-full file:border-0 file:bg-transparent file:text-sm file:font-medium",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "peer placeholder:text-muted-foreground"
    ],
    variants: {
      size: { sm: "h-9 px-2 text-sm", md: "h-11 px-3 text-base", lg: "h-12 px-4 text-lg" }
    },
    defaultVariants: { size: "md" }
  });
  const { size = "md", class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<input${addAttribute(input({ size, class: className }), "class")}${spreadAttributes(rest)}>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/starwind/starwind/input/Input.astro", void 0);

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="w-full max-w-2xl mt-4 mx-auto space-y-2 px-2 md:flex md:flex-col md:justify-center"${addAttribute(actions.send, "action")} method="POST"> <div class="flex flex-col gap-2 w-full"> ${renderComponent($$result, "Label", $$Label, { "for": "name", "id": "name", "size": "sm" }, { "default": ($$result2) => renderTemplate`Nombre` })} ${renderComponent($$result, "Input", $$Input, { "id": "name", "name": "name", "type": "text", "placeholder": "Ingresa tu Nombre" })} </div> <div class="flex flex-col gap-2 w-full"> ${renderComponent($$result, "Label", $$Label, { "for": "email", "id": "email", "size": "sm" }, { "default": ($$result2) => renderTemplate`Email` })} ${renderComponent($$result, "Input", $$Input, { "id": "email", "name": "email", "required": true, "type": "email", "placeholder": "Ingresa tu e-mail" })} <div class="flex flex-col gap-2 w-full"> ${renderComponent($$result, "Label", $$Label, { "for": "message", "id": "message", "size": "sm" }, { "default": ($$result2) => renderTemplate`Mensaje` })} ${renderComponent($$result, "Textarea", $$Textarea, { "name": "message", "size": "md", "placeholder": "Escribe tu mensaje por favor" })} </div> ${renderComponent($$result, "Button", $$Button, { "type": "submit", "style": "button", "size": "lg", "text": "Enviar", "icon": "icon-arrow-up-right", "class": "w-max self-center mt-2" })} </div> </form>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/ui/Form.astro", void 0);

const $$Astro$1 = createAstro("https://freelance-portfolio-neon.vercel.app/");
const $$ContactElement = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactElement;
  const { icon, title, detail } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="contact-element flex items-center justify-start gap-2 mt-2"> <div class="container-icon bg-background text-foreground p-2 rounded-lg"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": 24, "class": "text-eggplant" })} </div> <div class="container-name-element-more-info"> <div class="title-name-info">${title}</div> <div class="info-detail">${detail}</div> </div> </div>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/contact/ContactElement.astro", void 0);

const $$ContactInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-96 h-max font-display px-2 md:flex md:flex-row md:justify-between"> <div> <div class="title">Contactanos y obten una asesoria gratis</div> <div class="socials flex gap-2 [&>div]:bg-foreground/10 [&>div]:text-foreground [&>div]:p-2 [&>div]:rounded-lg mt-2"> <div class="github-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon-github" })} </div> <div class="icon-email"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon-at" })} </div> <div class="x-icon"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon-x" })} </div> </div> </div> <div> <div class="contact-info mt-4"> <p>Informacion de contacto</p> </div> ${renderComponent($$result, "ContactElement", $$ContactElement, { "icon": "icon-mail-box", "title": "Email", "detail": "leooel23m@gmail.com" })} ${renderComponent($$result, "ContactElement", $$ContactElement, { "icon": "icon-phone", "title": "Phone", "detail": "+58 412-454-4213" })} ${renderComponent($$result, "ContactElement", $$ContactElement, { "icon": "icon-map-pin", "title": "Location", "detail": "2005 Naguanagua, Manantial" })} </div> </div>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/contact/ContactInfo.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="contact-section h-max" id="contact"> <div class="h-max mx-4 pt-24"> ${renderComponent($$result, "SectionContainer", $$SectionContainer, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "title": "Contacto", "showLink": false })} ${renderComponent($$result2, "Divisor", $$Divisor, { "space": "xs" })} <div class="flex flex-col md:flex-row items-stretch justify-between md:items-center gap-8 md:gap-12 my-6 w-full max-w-6xl "> <div class="w-full md:flex-1"> ${renderComponent($$result2, "Form", $$Form, {})} </div> <div class="w-full md:flex-1"> ${renderComponent($$result2, "ContactInfo", $$ContactInfo, {})} </div> </div> ` })} </div> </article> ${renderScript($$result, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/Contact.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "/projects" },
    { name: "Faq", href: "#Faq" }
    // { name: "Testimonios", href: "#testimonials" },
    // { name: "Contacto", href: "#contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="header-mobile" class="fixed top-0 left-0 py-6 max-w-[90rem] max-h-dvh w-dvw h-dvh z-50 transition-all duration-500 md:max-w-full md:backdrop-blur-xl md:h-max hidden "> <div class="container px-4 mx-auto flex items-center justify-between md:max-w-[90rem] md:px-8"> ${renderComponent($$result, "Link", $$Link, { "id": "branding", "href": "/", "class": "font-heading font-display font-bold text-2xl md:text-4xl tracking-tight text-gradient transition-opacity duration-500" }, { "default": ($$result2) => renderTemplate`
JM
` })}  <nav class="hidden md:flex items-center space-x-8"> ${navLinks.map((link) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "key": link.name }, { "default": ($$result2) => renderTemplate` <a${addAttribute(link.href, "href")} class="text-xl font-sans text-foreground/80 hover:text-foreground link-underline hover:underline hover:decoration-wavy hover:decoration-foreground duration-300 transition-all"> ${link.name} </a> ` })}`)} <a href="#contact"> ${renderComponent($$result, "Button", $$Button, { "style": "primary", "text": "Hablemos", "size": "lg" })} </a> </nav>  <button id="toggleMenu" class="toggle-menu md:hidden flex flex-col gap-[0.3rem] bg-transparent border-0 focus:outline-none z-50"> <span class="block w-5 h-0.5 bg-foreground rounded-full transition-transform origin-right duration-300 ease-in-out"></span> <span class="block w-5 h-0.5 bg-foreground rounded-full transition-opacity duration-300 ease-in-out"></span> <span class="block w-5 h-0.5 bg-foreground rounded-full transition-transform origin-right duration-300 ease-in-out"></span> </button> </div> <div id="mobileModal" class="fixed inset-0 bg-black/90 backdrop-blur-2xl z-40 flex flex-col justify-center items-center transition-all duration-300 md:hidden opacity-0 pointer-events-none"> <nav class="flex flex-col items-start space-y-6"> ${navLinks.map((link) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "key": link.name }, { "default": ($$result2) => renderTemplate` <a${addAttribute(link.href, "href")} class="text-5xl font-semibold text-white hover:text-white transition-colors"> ${link.name} </a> ` })}`)} </nav> </div> </header> ${renderScript($$result, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/navigation/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/navigation/Navbar.astro", void 0);

const $$MouseBounce = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mouse bounce icon"> <span class="w-full justify-center items-center animate-bounce hidden md:flex"> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon-mouse", "size": 36 })} </span> </div>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/ui/mouseBounce.astro", void 0);

const Modelo = () => {
  const gltf = useLoader(
    GLTFLoader,
    "/gltf/scene/scene.gltf",
    (loader) => {
      loader.setMeshoptDecoder(MeshoptDecoder);
    }
  );
  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.computeVertexNormals();
        child.material.roughness = 0.8;
      }
    });
    const box = new THREE.Box3().setFromObject(gltf.scene);
    const center = box.getCenter(new THREE.Vector3());
    gltf.scene.position.sub(center);
  }, [gltf]);
  return /* @__PURE__ */ jsx(
    "primitive",
    {
      object: gltf.scene,
      scale: 1,
      position: [0, 0, 0]
    }
  );
};
const Scene = () => {
  return /* @__PURE__ */ jsxs(
    Canvas,
    {
      style: {
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible"
      },
      camera: {
        position: [5, 2, 5],
        fov: 35
      },
      shadows: true,
      children: [
        /* @__PURE__ */ jsx("ambientLight", { intensity: 0.5 }),
        /* @__PURE__ */ jsx("directionalLight", { position: [10, 10, 5], intensity: 1 }),
        /* @__PURE__ */ jsx(Modelo, {}),
        /* @__PURE__ */ jsx(
          OrbitControls,
          {
            enableZoom: false,
            enablePan: false,
            autoRotate: true,
            autoRotateSpeed: -2,
            minPolarAngle: Math.PI / 4,
            maxPolarAngle: Math.PI / 2,
            target: [0, 0.5, 0]
          }
        )
      ]
    }
  );
};

const $$Astro = createAstro("https://freelance-portfolio-neon.vercel.app/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { dynamic = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative isolate h-dvh dark:bg-stone-950 mx-auto overflow-hidden lg:overflow-visible md:mt-0 md:justify-center md:flex md:flex-col md:gap-12 md:h-screen md:w-full"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "AnimatedBackground", $$AnimatedBackground, { "position": "left" })} ${renderComponent($$result, "AnimatedBackground", $$AnimatedBackground, { "position": "right", "verticalPosition": "bottom" })} ${renderComponent($$result, "AnimatedBackground2", $$AnimatedBackground2, { "verticalPosition": "middle" })} <main class="mt-24 flex flex-col justify-between items-center gap-4 px-4 md:flex-row md:gap-0 2xl:mt-24"> ${renderComponent($$result, "SectionContainer", $$SectionContainer, { "class": "md:flex-row md:flex" }, { "default": ($$result2) => renderTemplate` <section class="text flex-2 flex flex-col gap-1 items-start justify-center"> <h3 class="inline-block font-mono font-medium text-xs w-max px-2 py-1 bg-white/5 backdrop-blur-md border border-foreground/10 rounded-full animate-fade-in">
Desarrollador Frontend Freelance
</h3> <h1 class="text-4xl md:text-7xl font-sans leading-tight my-3"> <span class="inline">Transformamos</span> <span class="font-bold p-1 rounded"> Ideas </span> <span> en </span> <span class="font-bold p-1 rounded"> Experiencias </span> <span> digitales con impacto. </span> </h1> <h2 class="flex flex-col text-xl font-semibold mb-3 [&>span]:inline-block mt-6"> <span>+ Desarrollo frontend avanzado </span> <span>+ SEO optimizado </span> <span>+ Diseños innovadores </span> <span class="text-neutral-400 text-xs inline-block font-medium font-mono">
Contactenos para obtener una consulta gratuita.
</span> </h2> <button class="flex gap-1 px-6 py-2.5 mt-4 text-xl font-semibold bg-foreground text-background rounded-xl items-center justify-center">Contactanos
<span class="w-6 h-6"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span> </button> </section> <section class="overflow-hidden flex-1 w-full mx-auto -bottom-[0px]"> <div class="w-full h-full aspect-ratio rounded-full mx-auto"> ${renderComponent($$result2, "Scene", Scene, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/react/Scene.tsx", "client:component-export": "Scene" })} </div> </section> ` })} </main> ${renderComponent($$result, "MouseBounce", $$MouseBounce, {})} </div>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/Hero.astro", void 0);

const $$CalltoactionSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="calltoaction-component h-max mx-4 pt-24 "> ${renderComponent($$result, "SectionContainer", $$SectionContainer, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} ` })} </article>`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/components/CalltoactionSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Portfolio Freelance | Dise\xF1o y Desarrollo Web Profesional";
  const pageDescription = "Servicios de dise\xF1o web y desarrollo web profesional. Creaci\xF3n de sitios web modernos, r\xE1pidos y con un enfoque en SEO que destacan en el mercado.";
  const pageKeywords = ["dise\xF1o web", "desarrollo web", "freelance", "portfolio", "dise\xF1o responsive", "SEO", "UX/UI", "aplicaciones web", "sitios web r\xE1pidos"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": "Tu Nombre", "type": "website" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Habilities", $$Habilities, {})} ${renderComponent($$result3, "Project", $$Project, {})} ${renderComponent($$result3, "CalltoactionSection", $$CalltoactionSection, {})}  ${renderComponent($$result3, "Faq", $$Faq, {})} ${renderComponent($$result3, "Contact", $$Contact, {})}  ` })} ` })}`;
}, "/Users/pleo2/Dev/freelance/freelance-portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/pleo2/Dev/freelance/freelance-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
