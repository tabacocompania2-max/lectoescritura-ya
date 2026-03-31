import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const QueryWrapper = lazy(() =>
  import("@tanstack/react-query").then((mod) => ({
    default: ({ children }: { children: React.ReactNode }) => {
      const qc = new mod.QueryClient();
      return <mod.QueryClientProvider client={qc}>{children}</mod.QueryClientProvider>;
    },
  }))
);

const Toaster = lazy(() => import("@/components/ui/toaster").then((m) => ({ default: m.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then((m) => ({ default: m.Toaster })));

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Suspense fallback={null}>
      <QueryWrapper><span /></QueryWrapper>
      <Toaster />
      <Sonner />
    </Suspense>
  </BrowserRouter>
);

export default App;
