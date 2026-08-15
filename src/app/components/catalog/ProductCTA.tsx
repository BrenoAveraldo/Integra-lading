import { useNavigation } from "../../NavigationContext";
import { useNavigate } from "react-router";
import { Button } from "../shared/Button";

interface ProductCTAProps {
  vehicleName: string;
}

export function ProductCTA({ vehicleName }: ProductCTAProps) {
  const navigate = useNavigate();
  const { navigateTo } = useNavigation();

  const handleContact = () => {
    navigate("/");
    // aguarda a navegação para a Home antes de trocar a aba/rolar até Contato
    setTimeout(() => navigateTo("contato"), 60);
  };

  return (
    <div style={{ background: "#C8102E", padding: "56px 24px" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <div>
          <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase", fontFamily: "'Poppins', sans-serif", marginBottom: 8 }}>
            Interessado no {vehicleName}?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, fontFamily: "'Open Sans', sans-serif" }}>
            Fale com a nossa equipe e solicite um orçamento sem compromisso.
          </p>
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Button variant="dark" onClick={handleContact}>
            Solicitar orçamento
          </Button>
          <Button variant="light" href="https://web.whatsapp.com/" target="_blank">
            Entrar em contato
          </Button>
        </div>
      </div>
    </div>
  );
}
