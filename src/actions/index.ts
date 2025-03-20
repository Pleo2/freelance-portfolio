import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: "form",
        handler: async (e: FormData) => {
            const info = Object.fromEntries(e);

            const htmlContent = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Geist&family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
            </head>
            <body style="font-family: 'Inter Tight', sans-serif; background-color: #000; margin: 0; padding: 2rem; color: #fff;">
                <div style="max-width: 680px; margin: 0 auto; background: hsl(240 10% 4%); border-radius: 0.5rem; border: 1px solid hsl(240 6% 90%/0.2); overflow: hidden;">
                    <!-- Encabezado -->
                    <div style="padding: 1.5rem; border-bottom: 1px solid hsl(240 6% 90%/0.2); display: flex; justify-content: space-between; align-items: center;">
                        <h2 style="font-family: 'Inter Tight', sans-serif; font-weight: 200; font-size: 1.5rem; color: hsla(0, 0%, 100%, 0.9); margin: 0;">
                            Nuevo contacto desde el portfolio
                        </h2>
                    </div>

                    <!-- Contenido Principal -->
                    <div style="padding: 1rem; background: hsl(240 10% 4%);">
                        <!-- Detalles del Contacto -->
                        <div style="border: 1px solid hsl(240 6% 90%/0.2); border-radius: 0.5rem; padding: 1rem; margin-top: 1rem;">
                            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
                                <svg style="width: 1.5rem; height: 1.5rem; color: hsla(27, 57%, 76%, 1);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                                <h2 style="font-family: 'Inter Tight', sans-serif; font-size: 1.5rem; color: hsla(0, 0%, 100%, 0.7); margin: 0; letter-spacing: -0.01em;">
                                    Detalles del contacto
                                </h2>
                            </div>

                            <div style="display: grid; gap: 1.2rem; margin-bottom: 2rem;">
                                <div style="display: flex; gap: 0.8rem; align-items: center;">
                                    <div style="background: hsla(274, 21%, 46%, 0.1); padding: 0.5rem 1rem; border-radius: 0.5rem; min-width: 100px; text-align: center;">
                                        <span style="color: hsla(0, 0%, 100%, 0.5); font-weight: 600; font-size: 0.9rem;">Nombre</span>
                                    </div>
                                    <p style="margin: 0; color: hsla(0, 0%, 100%, 0.8); font-size: 1.1rem;">${info.name}</p>
                                </div>

                                <div style="display: flex; gap: 0.8rem; align-items: center;">
                                    <div style="background: hsla(274, 21%, 46%, 0.1); padding: 0.5rem 1rem; border-radius: 0.5rem; min-width: 100px; text-align: center;">
                                        <span style="color: hsla(0, 0%, 100%, 0.5); font-weight: 600; font-size: 0.9rem;">Email</span>
                                    </div>
                                    <a href="mailto:${info.email}" style="color: hsla(274, 21%, 46%, 1); text-decoration: none; font-size: 1.1rem; transition: opacity 0.2s;">${info.email}</a>
                                </div>
                            </div>
                        </div>

                        <!-- Mensaje -->
                        <div style="margin-top: 1rem; padding: 1rem; border: 1px solid hsl(240 6% 90%/0.2); border-radius: 0.5rem;">
                            <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 1rem;">
                                <svg style="width: 1.5rem; height: 1.5rem; color: hsla(27, 57%, 76%, 1);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                                </svg>
                                <h3 style="font-family: 'Inter Tight', sans-serif; color: hsla(0, 0%, 100%, 0.7); margin: 0; font-size: 1.25rem;">Mensaje</h3>
                            </div>
                            <div style="color: hsla(0, 0%, 100%, 0.8); line-height: 1.7; white-space: pre-wrap; font-size: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.03); border-radius: 0.25rem;">
                                ${info.message}
                            </div>
                        </div>
                    </div>

                    <!-- Pie de Página -->
                    <div style="padding: 1.5rem; border-top: 1px solid hsl(240 6% 90%/0.2); text-align: center;">
                        <a href="#" style="display: inline-flex; align-items: center; gap: 0.5rem; color: hsl(240 5% 84%/0.5); text-decoration: none; font-size: 0.875rem; padding: 0.5rem 1rem; border: 1px solid hsl(240 6% 90%/0.2); border-radius: 0.375rem; transition: opacity 0.2s;">
                            <span>Ver en CRM</span>
                            <svg style="width: 1rem; height: 1rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </body>
            </html>
            `;

            const { data, error } = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: ["delivered@resend.dev"],
                subject: `${info?.name} esta interesado en hablar contigo desde tu web de freelance`,
                html: htmlContent
            });

            if (error) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: error.message
                });
            }

            return data;
        }
    })
};
