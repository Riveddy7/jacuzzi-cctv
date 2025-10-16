import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Overview from "./pages/Overview";
import TechnicalSolution from "./pages/TechnicalSolution";
import InteractiveMap from "./pages/InteractiveMap";
import ExecutionPlan from "./pages/ExecutionPlan";
import Investment from "./pages/Investment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/technical-solution" element={<TechnicalSolution />} />
          <Route path="/interactive-map" element={<InteractiveMap />} />
          <Route path="/execution-plan" element={<ExecutionPlan />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
