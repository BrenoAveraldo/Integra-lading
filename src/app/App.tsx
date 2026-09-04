import { NavigationProvider } from "./NavigationContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./routes/routes";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppFloat } from "./components/WhatsAppFloat/WhatsAppFloat";

function AppContent() {
  return (
    <div
      style={{
        fontFamily:
          "'Poppins', 'Open Sans', 'Helvetica Neue', Arial, sans-serif",
        overflowX: "hidden",
      }}
    >
      <ScrollToTop />

      <Navbar />
      <AppRoutes />
      <Footer />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
