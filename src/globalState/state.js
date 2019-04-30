import React from 'react';
import { ModalProvider } from "./modal";
import { SnackbarProvider } from "./snackbar"

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
      (kids, parent) =>
        React.cloneElement(parent, {
          children: kids,
        }),
      children
    );
  }
  
  function ContextProvider({ children }) {
    return (
      <ProviderComposer
        contexts={[<ModalProvider />, <SnackbarProvider />]}
      >
        {children}
      </ProviderComposer>
    );
  }
  
  export { ContextProvider };