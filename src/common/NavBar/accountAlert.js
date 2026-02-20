import Swal from "sweetalert2";

export function showAccountAlert({ onLogin, onRegister, onLogout }) {
  Swal.fire({
    title: "Account Options",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "تسجيل الدخول",
    denyButtonText: "انشاء حساب",
    cancelButtonText: "تسجيل الخروج",
    customClass: {
      confirmButton: "swal2-confirm",
      denyButton: "swal2-deny",
      cancelButton: "swal2-cancel",
    },
    buttonsStyling: true,
  }).then((result) => {
    if (result.isConfirmed && onLogin) {
      onLogin();
    } else if (result.isDenied && onRegister) {
      onRegister();
    } else if (result.dismiss === Swal.DismissReason.cancel && onLogout) {
      onLogout();
    }
  });
}
