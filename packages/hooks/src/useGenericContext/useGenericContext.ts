import { createContext, useContext } from 'react';

export const createGenericContext = <T>() => {
  // Create a context with a generic parameter or undefined
  const genericContext = createContext<T | undefined>(undefined);

  // Check if the value provided to the context is defined or throw an error
  const useGenericContext = () => {
    const context = useContext(genericContext);
    if (!context) {
      throw new Error('useGenericContext must be used within a Provider');
    }
    return context;
  };

  return [useGenericContext, genericContext.Provider] as const;
};
