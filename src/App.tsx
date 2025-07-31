
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Membership from "./pages/Membership";
import AIModules from "./pages/AIModules";
import AffiliateProgram from "./pages/AffiliateProgram";
import ITServices from "./pages/ITServices";
import Revive from "./pages/Revive";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PromoPage from "./pages/PromoPage";
import Newsletter from "./pages/Newsletter";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import DMCA from "./pages/DMCA";
import AMLPolicy from "./pages/AMLPolicy";
import IncomeDisclaimer from "./pages/IncomeDisclaimer";
import LegalDisclaimer from "./pages/LegalDisclaimer";
import CCPA from "./pages/CCPA";
import NotFound from "./pages/NotFound";
import Paymentpage from "./pages/PaymentPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/ai-modules" element={<AIModules />} />
          <Route path="/affiliate-program" element={<AffiliateProgram />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/revive" element={<Revive />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/promo-page" element={<PromoPage />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/aml-policy" element={<AMLPolicy />} />
          <Route path="/income-disclaimer" element={<IncomeDisclaimer />} />
          <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
          <Route path="/ccpa" element={<CCPA />} />
          <Route path="/payment" element={<Paymentpage />} />
       
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
