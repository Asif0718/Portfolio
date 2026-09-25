import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AlertCircle, ArrowUpRight, CheckCircle } from "lucide-react";
import { profile } from "@/data";
import { Magnetic, MaskLines, Reveal } from "@/components/motion";

const fields = [
  { id: "name", label: "Name", type: "text", autoComplete: "name" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
];

const inputClass =
  "w-full border-b border-ink/25 bg-transparent py-3 text-base text-ink outline-none transition-colors focus:border-ink";

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
    <section id="contact" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-28 md:px-10 md:pt-40">
        <h2 className="font-display text-[11.5vw] uppercase md:text-[10.5vw] 2xl:text-[148px]">
          <MaskLines lines={["Let's build", "something"]} />
        </h2>

        <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12">
          <Reveal className="space-y-10 md:col-span-5">
            <Magnetic strength={0.15}>
              <a
                href={`mailto:${profile.email}`}
                className="font-wide group inline-flex items-center gap-3 break-all text-[17px] font-semibold tracking-tight sm:text-xl md:text-2xl"
              >
                {profile.email}
                <ArrowUpRight className="size-6 shrink-0 transition-transform duration-500 ease-out-expo group-hover:rotate-45" strokeWidth={1.5} />
              </a>
            </Magnetic>
            <dl className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-ink/55">Phone</dt>
                <dd className="mt-1">
                  <a href={profile.phoneHref} className="hover:underline">{profile.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="text-ink/55">Languages</dt>
                <dd className="mt-1">English, Hindi, Telugu</dd>
              </div>
              <div>
                <dt className="text-ink/55">GitHub</dt>
                <dd className="mt-1">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">Asif0718</a>
                </dd>
              </div>
              <div>
                <dt className="text-ink/55">LinkedIn</dt>
                <dd className="mt-1">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">mahammedasiff</a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                {fields.map((f) => (
                  <div key={f.id} className="grid gap-2">
                    <label htmlFor={f.id} className="text-sm text-ink/60">{f.label}</label>
                    <input id={f.id} type={f.type} autoComplete={f.autoComplete} required value={form[f.id]} onChange={update} className={inputClass} />
                  </div>
                ))}
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm text-ink/60">Message</label>
                <textarea id="message" rows={4} required value={form.message} onChange={update} className={`${inputClass} resize-none`} />
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-transform active:scale-[0.97] disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send message"}
                </button>
                {status && (
                  <p role="status" className={`flex items-center gap-2 text-sm ${status.ok ? "text-ink" : "text-[#a3261c]"}`}>
                    {status.ok ? <CheckCircle className="size-4" /> : <AlertCircle className="size-4" />}
                    {status.text}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>

        <footer className="mt-28 flex flex-col justify-between gap-4 border-t border-ink/15 pt-6 text-xs text-ink/60 sm:flex-row md:mt-40">
          <p>&copy; {new Date().getFullYear()} {profile.name}</p>
          <a href="#top" className="hover:text-ink">Back to top</a>
        </footer>
      </div>
    </section>
  );
};
