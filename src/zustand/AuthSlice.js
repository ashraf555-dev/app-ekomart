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
      showLoadingAlert("جاري إنشاء الحساب ...");
      await createUserWithEmailAndPassword(auth, email, password);
      showSuccessAlert("تم إنشاء الحساب بنجاح!");
    } catch (error) {
      showErrorAlert(error.message || "حدث خطأ أثناء إنشاء الحساب!");
    }
  },
}));

export default useAuth;
