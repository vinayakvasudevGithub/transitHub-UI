import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      axios
        .get("http://localhost:2001/auth/profile")
        .then(({ data }) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Failed to fetch user profile:", error);
          setUser(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}
