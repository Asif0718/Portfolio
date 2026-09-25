import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AlertCircle, CheckCircle } from "lucide-react";
import { profile } from "@/data";
import { Reveal } from "@/components/motion";

const inputClass =
  "w-full rounded-[18px] border border-white/70 bg-white/70 px-5 py-3.5 text-sm text-ink outline-none backdrop-blur transition focus:border-teal focus:bg-white";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const update = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const { VITE_EMAILJS_SERVICE_ID: s, VITE_EMAILJS_TEMPLATE_ID: t, VITE_EMAILJS_PUBLIC_KEY: k } = import.meta.env;
      if (!s || !t || !k) throw new Error("The contact form isn't configured yet. Email me directly instead.");
      await emailjs.send(s, t, form, k);
      setStatus({ ok: true, text: "Message sent. I'll reply within a couple of days." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ ok: false, text: err?.text || err?.message || "Message not sent. Try again or email me directly." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="pt-6">
      <div className="bg-lavender rounded-[20px] px-5 py-14 sm:px-10 md:py-20">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="text-center text-4xl font-medium leading-[1.05] tracking-[-0.035em] md:text-5xl">
            Let's build your next project
          </h2>
          <p className="mt-4 text-center text-sm leading-relaxed text-ink/70">
            Hiring, a project idea or a question: send a message, or email{" "}
            <a href={`mailto:${profile.email}`} className="font-medium text-ink underline underline-offset-4">
              {profile.email}
            </a>
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { id: "name", label: "Name", type: "text", autoComplete: "name" },
                { id: "email", label: "Email", type: "email", autoComplete: "email" },
              ].map((f) => (
                <div key={f.id} className="grid gap-2">
                  <label htmlFor={f.id} className="pl-2 text-xs font-medium text-ink/70">{f.label}</label>
                  <input id={f.id} type={f.type} autoComplete={f.autoComplete} required value={form[f.id]} onChange={update} className={inputClass} />
                </div>
              ))}
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="pl-2 text-xs font-medium text-ink/70">Project details</label>
              <textarea id="message" rows={5} required value={form.message} onChange={update} className={`${inputClass} resize-none`} />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-full bg-ink py-3.5 text-sm font-medium text-white transition-transform active:scale-[0.99] disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send message"}
            </button>
            {status && (
              <p role="status" className={`flex items-center justify-center gap-2 text-sm ${status.ok ? "text-teal-deep" : "text-[#a3261c]"}`}>
                {status.ok ? <CheckCircle className="size-4" /> : <AlertCircle className="size-4" />}
                {status.text}
              </p>
            )}
          </form>
        </Reveal>
      </div>

      <footer className="flex flex-col items-center justify-between gap-2 px-4 pb-2 pt-6 text-xs text-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <a href="#top" className="hover:text-ink">Back to top</a>
      </footer>
    </section>
  );
};
