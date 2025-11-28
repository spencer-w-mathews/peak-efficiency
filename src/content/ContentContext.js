import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { siteContent as defaultContent } from './siteContent';

const STORAGE_KEY = 'siteContentOverrides';
const ContentContext = createContext({
  content: defaultContent,
  updateContent: () => {},
  resetContent: () => {},
});

const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const deepMerge = (base, updates) => {
  if (Array.isArray(base) || Array.isArray(updates)) {
    return updates !== undefined ? updates : base;
  }

  const merged = { ...(base || {}) };

  Object.entries(updates || {}).forEach(([key, value]) => {
    const baseValue = merged[key];
    if (isObject(baseValue) && isObject(value)) {
      merged[key] = deepMerge(baseValue, value);
    } else {
      merged[key] = value;
    }
  });

  return merged;
};

const loadOverrides = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.warn('Unable to read stored content overrides', error);
    return {};
  }
};

export const ContentProvider = ({ children }) => {
  const [overrides, setOverrides] = useState(() => loadOverrides());

  const content = useMemo(() => deepMerge(defaultContent, overrides), [overrides]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    } catch (error) {
      console.warn('Unable to persist content overrides', error);
    }
  }, [overrides]);

  const updateContent = (updates) => {
    setOverrides((prev) => deepMerge(prev, updates));
  };

  const resetContent = () => setOverrides({});

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
