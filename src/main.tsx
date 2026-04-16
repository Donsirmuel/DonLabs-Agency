import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import App from "./App.tsx";
import "./index.css";
import { ContentProvider } from '@/lib/ContentProvider';

// Small production-friendly error overlay to help diagnose runtime failures
function mountErrorOverlay() {
  const shouldIgnoreWindowError = (ev: ErrorEvent) => {
    const msg = (ev.message || '').trim();

    // Browsers emit this generic message for cross-origin/extension scripts without stack details.
    if (msg === 'Script error.' || msg === 'Script error') {
      return true;
    }

    // Common non-fatal browser noise.
    if (msg.includes('ResizeObserver loop limit exceeded')) {
      return true;
    }

    return false;
  };

  function show(message: string) {
    try {
      const existing = document.getElementById('runtime-error-overlay');
      if (existing) existing.remove();
      const el = document.createElement('div');
      el.id = 'runtime-error-overlay';
      el.style.position = 'fixed';
      el.style.zIndex = '999999';
      el.style.left = '0';
      el.style.top = '0';
      el.style.right = '0';
      el.style.background = 'rgba(220,38,38,0.95)';
      el.style.color = 'white';
      el.style.padding = '12px 16px';
      el.style.fontFamily = 'monospace, monospace';
      el.style.fontSize = '13px';
      el.style.whiteSpace = 'pre-wrap';
      el.style.maxHeight = '40vh';
      el.style.overflow = 'auto';
      el.innerText = message;
      document.body.appendChild(el);
    } catch (e) {
      // ignore
    }
  }

  window.addEventListener('error', (ev) => {
    if (shouldIgnoreWindowError(ev)) {
      return;
    }

    const err = ev.error || ev.message || String(ev);
    console.error('Captured runtime error', err);
    show(typeof err === 'string' ? err : JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
  });

  window.addEventListener('unhandledrejection', (ev) => {
    console.error('Unhandled rejection', ev.reason);
    const msg = typeof ev.reason === 'string' ? ev.reason : JSON.stringify(ev.reason, Object.getOwnPropertyNames(ev.reason || {}), 2);
    show('Unhandled Rejection:\n' + msg);
  });
}

function initApp() {
  try {
    mountErrorOverlay();
  } catch (e) {
    // ignore overlay failures
  }

  const mount = document.getElementById("root");
  if (!mount) {
    console.warn('Mount element #root not found when initializing app');
    return;
  }

  createRoot(mount).render(
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ContentProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContentProvider>
    </ThemeProvider>
  );
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initApp, { once: true });
} else {
  initApp();
}
