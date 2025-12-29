import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Festival from "./pages/Festival";
import { DharoiItinerary, PoloItinerary, VadnagarItinerary } from "./pages/Itinerary";
import TourPackage from "./pages/TourPackage";
import Media from "./pages/Media";
import BookTickets from "./pages/BookTickets";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/festival/dharoi" element={<DharoiItinerary />} />
          <Route path="/festival/polo" element={<PoloItinerary />} />
          <Route path="/festival/vad" element={<VadnagarItinerary />} />
          <Route path="/tour-package" element={<TourPackage />} />
          <Route path="/media" element={<Media />} />
          <Route path="/book-tickets" element={<BookTickets />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
