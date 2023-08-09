'use client';

import CartIcon from 'components/icons/cart';
import { useState } from 'react';
import CartModal from './modal';

export default function CartButton({ cart }: { cart: any }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <>
      <CartModal isOpen={cartIsOpen} onClose={() => setCartIsOpen(false)} cart={cart} />

      <button
        aria-label="Open cart"
        onClick={() => {
          setCartIsOpen(true);
        }}
        className="relative right-0 top-0"
        data-testid="open-cart"
      >
        <CartIcon quantity={1} />
      </button>
    </>
  );
}
