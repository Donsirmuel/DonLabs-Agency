import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, loadContent, saveContent, defaultContent } from './contentStore';
import { getJSON, postJSON, patchJSON } from '@/lib/api';

type ContentContextValue = {
  content: SiteContent;
  setContent: (c: SiteContent) => void;
  reset: () => void;
};

type ContentProviderProps = React.PropsWithChildren;

const ContentContext = createContext<ContentContextValue | undefined>(undefined);

export const ContentProvider = ({ children }: ContentProviderProps) => {
  const [content, setContentState] = useState<SiteContent>(() => loadContent());

  useEffect(() => {
    saveContent(content);
    // attempt to sync to server only when an admin token is present
    (async () => {
      try {
        // api.ts reads the token from localStorage key 'admin_access'
        const token = typeof window !== 'undefined' ? localStorage.getItem('admin_access') : null;
        if (!token) return; // do not attempt anonymous writes (GitHub Pages will 405)

        // try to POST if no server copy exists
        await postJSON('/site-content/', content);
      } catch (err) {
        try {
          // fallback to PATCH (if resource exists)
          await patchJSON('/site-content/1/', content);
        } catch (e) {
          // ignore; server may not exist or request may be disallowed
        }
      }
    })();
  }, [content]);

  const setContent = (c: SiteContent) => setContentState(c);
  const reset = () => setContentState(defaultContent);

  return (
    <ContentContext.Provider value={{ content, setContent, reset }}>
      {children}
    </ContentContext.Provider>
  );
};

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent must be used within ContentProvider');
  return ctx;
}
