/**
 * Small badge/tag with variant styles.
 */
const variants = {
  default: "bg-(--main-color) text-(--white-color)",
  secondary: "bg-(--gray-color) text-(--white-color)",
  outline: "border border-(--main-color) text-(--main-color) bg-transparent",
};

export function Badge({ children, variant = "default", className = "" }) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium
        ${variants[variant] ?? variants.default}
        ${className}
      `.trim()}
    >
      {children}
    </span>
  );
}
