import { useState, useEffect, type ReactNode } from "react";
import { AuthContext, type User } from "./AuthContex"; 
import Swal from "sweetalert2";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  // Cargar usuario desde localStorage al montar el componente
  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error al parsear el usuario de localStorage", error);
        localStorage.removeItem("auth_user");
      }
    }
  }, []);

  // Función para iniciar sesión
  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("auth_user", JSON.stringify(userData));
       Swal.fire({
  title: "Bienvenido",
  text: "Has iniciado sesion correctamente",
  icon: "success",
  background: "#1e293b",
  color:"#f8fafc" 
  })
};

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
    Swal.fire({
      title: "sesion cerrada",
      text: "cerraste tu sesion correctamente",
      icon: "info",
       background: "#1e293b",
  color:"#f8fafc"
    })
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
