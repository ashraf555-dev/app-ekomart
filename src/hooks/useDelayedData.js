/**
 * Simulates async data loading with a configurable delay.
 * Use for demo/mock data where real API calls will replace later.
 * Handles cleanup on unmount to avoid setState after unmount.
 *
 * @param {Function} fetchFn - Async function that returns data (e.g. getProducts)
 * @param {number} [delayMs=2500] - Min delay before resolving (simulates network)
 * @param {Array} deps - useEffect dependency array (e.g. [] for one-time fetch)
 * @returns {{ data: any[], loading: boolean, error: string | null }}
 */
import { useEffect, useState } from "react";
import { delay } from "../utils/delay";

export function useDelayedData(fetchFn, delayMs = 2500, deps = []) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([fetchFn(), delay(delayMs)])
      .then(([result]) => {
        if (!cancelled) setData(result);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message ?? "Failed to load data.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, deps);

  return { data, loading, error };
}
