import "../index.css";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "@/context/auth";
import { Toaster } from "@/components/ui/toaster";

function MyApp() {
  return (
    <AuthProvider>
      <Outlet />

      <Toaster />
    </AuthProvider>
  );
}

export default MyApp;
