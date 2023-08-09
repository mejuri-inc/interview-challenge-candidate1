'use client';

export function AddToCart() {
  return (
    <button
      aria-label="Add item to cart"
      className={
        'flex w-full items-center justify-center bg-black p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100 dark:bg-white dark:text-black'
      }
    >
      <span>Add to Cart</span>
    </button>
  );
}
