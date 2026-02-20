/**
 * Display name for current user: displayName, or email prefix, or "User".
 */
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function useUserName() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || user.email?.split("@")[0] || "User");
      } else {
        setUserName("");
      }
    });
    return () => unsubscribe();
  }, []);

  return userName;
}
