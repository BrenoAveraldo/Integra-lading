import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { LocationSection } from "./LocationSection";


const CONTACT_EMAIL = "integra.servicos.ma@gmail.com";

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof ContactFormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Preencha nome, e-mail e mensagem antes de enviar.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      setError("Informe um e-mail válido.");
      return;
    }

    // Sem backend próprio: abrimos o app de e-mail do usuário já preenchido
    // com os dados do formulário, endereçado para o e-mail da Integra.
    const subject = encodeURIComponent(`Contato pelo site — ${form.name}`);
    const bodyLines = [
      `Nome: ${form.name}`,
      `E-mail: ${form.email}`,
      form.phone.trim() ? `Telefone: ${form.phone}` : null,
      "",
      form.message,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 2,
    padding: "13px 16px",
    color: "#fff",
    fontSize: 13,
    fontFamily: "'Open Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.55)",
    marginBottom: 8,
    fontFamily: "'Poppins', sans-serif",
  };

  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = "#C8102E";
      e.currentTarget.style.background = "rgba(255,255,255,0.09)";
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
    },
  };

  return (
    
    <section style={{ background: "#1a1a1a", padding: "80px 24px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span style={{ display: "block", width: 36, height: 2, background: "#C8102E" }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C8102E", fontFamily: "'Open Sans', sans-serif" }}>
            Envie uma Mensagem
          </span>
        </div>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 14, fontFamily: "'Poppins', sans-serif" }}>
          Fale com a gente por e-mail
        </h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.8, marginBottom: 36, fontFamily: "'Open Sans', sans-serif", maxWidth: 520 }}>
          Preencha o formulário abaixo
        </p>

        {sent ? (
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(200,16,46,0.1)", border: "1px solid rgba(200,16,46,0.3)", padding: "20px 24px" }}>
            <CheckCircle2 size={22} color="#C8102E" style={{ flexShrink: 0 }} />
            <p style={{ color: "#fff", fontSize: 13, fontFamily: "'Open Sans', sans-serif", margin: 0, lineHeight: 1.7 }}>
              Seu aplicativo de e-mail deve abrir em instantes com a mensagem preenchida. Caso isso não
              aconteça, envie diretamente para <strong>{CONTACT_EMAIL}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Nome *</label>
                <input type="text" value={form.name} onChange={update("name")} placeholder="Seu nome completo" style={inputStyle} {...focusHandlers} />
              </div>
              <div>
                <label style={labelStyle}>E-mail *</label>
                <input type="email" value={form.email} onChange={update("email")} placeholder="voce@email.com" style={inputStyle} {...focusHandlers} />
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Telefone (opcional)</label>
              <input type="tel" value={form.phone} onChange={update("phone")} placeholder="(00) 00000-0000" style={inputStyle} {...focusHandlers} />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Mensagem *</label>
              <textarea
                value={form.message}
                onChange={update("message")}
                placeholder="Conte para a gente o que você precisa..."
                rows={5}
                style={{ ...inputStyle, resize: "vertical", fontFamily: "'Open Sans', sans-serif" }}
                {...focusHandlers}
              />
            </div>

            {error && (
              <p style={{ color: "#ff8a8a", fontSize: 12, marginBottom: 20, fontFamily: "'Open Sans', sans-serif" }}>{error}</p>
            )}

            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#C8102E",
                color: "#fff",
                border: "none",
                padding: "14px 32px",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 2,
                fontFamily: "'Poppins', sans-serif",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#a50d24"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#C8102E"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Enviar Mensagem <Send size={15} />
            </button>
          </form>
        )}
      </div>
    

    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contato" style={{ background: "#111", fontFamily: "'Open Sans', 'Poppins', sans-serif" }}>
      {/* CTA Bar */}
      <div style={{ background: "#C8102E", padding: "30px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: 0, height: 0, borderStyle: "solid", borderWidth: "80px 80px 0 0", borderColor: "rgba(0,0,0,0.12) transparent transparent transparent" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: 0, height: 0, borderStyle: "solid", borderWidth: "0 0 80px 80px", borderColor: "transparent transparent rgba(0,0,0,0.1) transparent" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Agrale-style section tag */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ display: "block", width: 36, height: 2, background: "rgba(255,255,255,0.5)" }} />
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Fale Conosco</span>
            <span style={{ display: "block", width: 36, height: 2, background: "rgba(255,255,255,0.5)" }} />
          </div>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 12, fontFamily: "'Poppins', sans-serif" }}>
            Pronto para dar o próximo passo?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", marginBottom: 28, lineHeight: 1.75 }}>
            Entre em contato com nossa equipe e descubra a solução Agrale ideal para o seu negócio.
          </p>
        </div>
      </div>
        <LocationSection />

      {/* Formulário de contato por e-mail */}
      <ContactForm />
    </section>
  );
}
