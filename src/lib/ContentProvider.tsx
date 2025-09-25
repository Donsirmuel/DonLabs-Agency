import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, loadContent, saveContent, defaultContent } from './contentStore';
import { getJSON, postJSON, patchJSON } from '@/lib/api';

type ContentContextValue = {
  content: SiteContent;
  setContent: (c: SiteContent) => void;
  reset: () => void;
};

const ContentContext = createContext<ContentContextValue | undefined>(undefined);

export const ContentProvider: React.FC<any> = ({ children }) => {
  const [content, setContentState] = useState<SiteContent>(() => loadContent());

  useEffect(() => {
    saveContent(content);
    // attempt to sync to server if authenticated
    (async () => {
      try {
        const token = localStorage.getItem('admin_token');
        const headers = token ? { Authorization: `Token ${token}` } : undefined;
        // try to POST if no server copy exists
        await postJSON('/site-content/', content);
      } catch (err) {
        try {
          // fallback to PATCH (if resource exists)
          await patchJSON('/site-content/1/', content);
        } catch (e) {
          // ignore; server may not exist
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
