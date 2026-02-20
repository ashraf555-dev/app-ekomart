/**
 * SweetAlert2-based toasts and modals for cart, wishlist, auth flows.
 */
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  background: "#fff",
  customClass: {
    popup: "swal-toast-popup",
    icon: "swal-toast-icon",
    title: "swal-toast-title",
    timerProgressBar: "swal-toast-progress",
  },
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export function showLoadingAlert(message = "Loading...") {
  Swal.fire({
    title: message,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
    showConfirmButton: false,
    background: "#fff",
  });
}

export function showSuccessAlert(message = " successfully ", cb) {
  Swal.fire({
    icon: "success",
    title: message,
    showConfirmButton: true,
    confirmButtonText: "OK",
    confirmButtonColor: "#3085d6",
    background: "#fff",
  }).then(() => cb && cb());
}

export function showErrorAlert(message = "an error occurred" , cb) {
  Swal.fire({
    icon: "error",
    title: message,
    showConfirmButton: true,
    confirmButtonText: "OK",
    confirmButtonColor: "#dc3545",
    background: "#fff",
  }).then(() => cb && cb());
}

export function showCartAddedToast() {
  Toast.fire({
    icon: "success",
    title: "Item added to cart",
  });
}

export function showWishlistAddedToast() {
  Toast.fire({
    icon: "success",
    title: "Added to wishlist",
  });
}

export function showWishlistRemovedToast() {
  Toast.fire({
    icon: "info",
    title: "Removed from wishlist",
  });
}

export function showCartRemovedToast() {
  Toast.fire({
    icon: "info",
    title: "Removed from cart",
  });
}

export function showMovedToCartToast() {
  Toast.fire({
    icon: "success",
    title: "Item moved to cart",
  });
}

/**
 * Shows SweetAlert2 modal when cart/wishlist action requires login.
 * Pass navigate from useNavigate(); confirm = Log in, deny = Register.
 */
export function showLoginRequiredAlert(navigate) {
  Swal.fire({
    icon: "info",
    title: "Please log in or create an account",
    text: "You need to be signed in to use the cart and wishlist.",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Log in",
    denyButtonText: "Register",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#3085d6",
    denyButtonColor: "#28a745",
    background: "#fff",
  }).then((result) => {
    if (result.isConfirmed && typeof navigate === "function") {
      navigate("/login");
    } else if (result.isDenied && typeof navigate === "function") {
      navigate("/register");
    }
  });
}
