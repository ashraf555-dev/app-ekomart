import { useNavigation } from "react-router-dom";

/**
 * Shows a thin top loading bar during page transitions (React Router navigation).
 * Gives immediate feedback when user clicks a link. Styled with project colors.
 */
export default function GlobalLoadingIndicator() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading" || navigation.state === "submitting";

  if (!isLoading) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-[100] bg-(--secondary-color) overflow-hidden"
      role="progressbar"
      aria-valuenow={null}
      aria-label="Loading"
    >
      <div className="global-loading-bar-inner h-full w-full bg-(--main-color)" />
    </div>
  );
}
