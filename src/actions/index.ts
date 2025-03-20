import { ActionError, defineAction } from "astro:actions";

import { Resend } from "resend";
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: "form",
        handler: async (e: FormData) => {
            const info = Object.fromEntries(e);

            const { data, error } = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: ["delivered@resend.dev"],
                subject: "Hello world a ver si se ve rle formData ",
                html: "<strong>It works!{info.name} {info.email} {info.message}</strong>"
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
