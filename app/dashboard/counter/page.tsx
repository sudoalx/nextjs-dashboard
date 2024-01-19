import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
  title: "Simple Counter Page",
  description: "Simple Counter Page",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h1>Shopping Cart Items</h1>
      <CartCounter />
    </div>
  );
}
