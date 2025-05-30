import Button from "../../UI/Button";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <Button type="primary" to="/menu">
        &larr; Back to menu
      </Button>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
