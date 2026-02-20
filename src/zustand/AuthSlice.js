/**
 * Auth slice: registerHandler for email/password signup via Firebase.
 * Shows loading/success/error alerts.
 */
import { create } from "zustand";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import {
  showLoadingAlert,
  showSuccessAlert,
  showErrorAlert,
} from "../common/NavBar/alerts";

const useAuth = create(() => ({
  registerHandler: async (userData) => {
    const { email, password } = userData;
    try {
      // show alerts in English instead of Arabic
      showLoadingAlert("Creating account...");
      await createUserWithEmailAndPassword(auth, email, password);
      showSuccessAlert("Account created successfully!");
    } catch (error) {
      showErrorAlert(
        error.message || "An error occurred while creating the account!",
      );
    }
  },
}));

export default useAuth;
