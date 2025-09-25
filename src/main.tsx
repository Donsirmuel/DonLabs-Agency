import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import App from "./App.tsx";
import "./index.css";
import { ContentProvider } from '@/lib/ContentProvider';

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <ContentProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ContentProvider>
  </ThemeProvider>
);
