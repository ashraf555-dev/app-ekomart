/**
 * Resolves after ms. Use with Promise.all([fetch(), delay(ms)]) to simulate API delay.
 */
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
