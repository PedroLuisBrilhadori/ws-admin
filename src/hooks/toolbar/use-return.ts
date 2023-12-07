import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useReturn = () => {
  const [back, setBack] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setBack("/");
    } else {
      setBack("");
    }
  }, [location]);

  return {
    back,
  };
};
