import { createContext, useContext, useState, useCallback } from "react";

const MenuContext = createContext(undefined);

export const MenuProvider = ({ children }) => {
  const [state, setState] = useState({
    hidden: false,
    currentScroll: 0,
  });

  // Memorizza le funzioni per evitare ricreazioni inutili
  const onShow = useCallback((position) => setState({ hidden: false, currentScroll: position}), []);
  const onHide = useCallback((position) => setState({ hidden: true, currentScroll: position }), []);

  return (
    <MenuContext.Provider
      value={{
        ...state,
        onShow,
        onHide,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};