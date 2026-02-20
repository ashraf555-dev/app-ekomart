/**
 * Increment/decrement control for cart quantities.
 * Supports min/max, onIncrease/onDecrease or onChange callback.
 */
import { FaMinus, FaPlus } from "react-icons/fa6";

export function QuantityControl({
  value,
  min = 1,
  max = 99,
  onIncrease,
  onDecrease,
  onChange,
  disabled = false,
  className = "",
}) {
  const num = Number(value);
  const canDecrease = num > min;
  const canIncrease = max === undefined || num < max;

  return (
    <div
      className={`
        inline-flex items-center border border-gray-300 rounded-lg overflow-hidden
        ${className}
      `.trim()}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={disabled || !canDecrease}
        onClick={() => {
          if (onDecrease) onDecrease();
          else if (onChange && canDecrease) onChange(num - 1);
        }}
        className="p-2 text-(--main-color) hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <FaMinus className="w-3 h-3" />
      </button>
      <span className="min-w-[2.5rem] text-center font-medium py-1">
        {num}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        disabled={disabled || !canIncrease}
        onClick={() => {
          if (onIncrease) onIncrease();
          else if (onChange && canIncrease) onChange(num + 1);
        }}
        className="p-2 text-(--main-color) hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <FaPlus className="w-3 h-3" />
      </button>
    </div>
  );
}
