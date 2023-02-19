import { createContext } from 'react';

export const LocaleContent = createContext();

export const ContextProvider = LocaleContent.Provider;
export const ContextConsumer = LocaleContent.Consumer;
