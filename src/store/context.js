import React, { createContext, useState } from "react";
export let FirebaseContext = createContext(null);

export let AuthContext = createContext(null);

export default function Context({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user,setUser }}>{children}</AuthContext.Provider>
  );
}
