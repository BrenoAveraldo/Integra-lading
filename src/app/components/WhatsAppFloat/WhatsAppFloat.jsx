import { WhatsappIcon } from "../shared/WhatsappIcon";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/559820168515?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Integra pelo WhatsApp"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "30px",

        width: "70px",
        height: "70px",

        borderRadius: "50%",
        border: "1px solid #d9d9d9",

        backgroundColor: "#ffffff",
        color: "#E30613",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        zIndex: 9999,
        textDecoration: "none",

        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#E30613";
        e.currentTarget.style.color = "#ffffff";
        e.currentTarget.style.borderColor = "#E30613";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#ffffff";
        e.currentTarget.style.color = "#E30613";
        e.currentTarget.style.borderColor = "#d9d9d9";
      }}
    >
      <WhatsappIcon size={50} />
    </a>
  );
}