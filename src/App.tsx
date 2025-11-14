import React, { Suspense } from "react";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";

// Lazy-loaded pages
const WebDevelopment = React.lazy(() => import("./pages/WebDevelopment"));
const AppDevelopment = React.lazy(() => import("./pages/AppDevelopment"));
const AIServices = React.lazy(() => import("./pages/AIServices"));

import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import ScrollSync from "./components/ScrollSync";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Suspense MUST wrap Routes, NOT be inside them */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />

            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/ai-services" element={<AIServices />} />

            <Route path="/blog/:id" element={<BlogDetail />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <ScrollSync />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
