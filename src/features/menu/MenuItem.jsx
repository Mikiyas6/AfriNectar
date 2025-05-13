import { formatCurrency } from "../../utils/helpers";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/updateItemQuantity";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, soldOut, imageUrl, description, taxRate } =
    pizza;
  const dispatch = useDispatch();
  // The getCurrentQuantityById function is called with id and returns a selector function that uses that id somewhere in its code
  // The selector function is invoked by useSelector with the Redux store as its argument.
  // Then the useSelector extracts the desired value
  //  The extracted value is then assigned to a variable
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
      taxRate,
    };
    console.log("newItem", newItem);
    dispatch(addItem(newItem));
  }

  return (
    <li className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition duration-300 hover:scale-105">
      <img
        src={imageUrl}
        alt={name}
        className={`h-48 w-full object-cover ${
          soldOut ? "opacity-70 grayscale" : ""
        }`}
      />

      <div className="flex flex-col grow p-4">
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm capitalize italic text-stone-500 mt-1 mb-3">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm font-medium text-green-800">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={handleAddToCart} type="small">
              Add to Cart
            </Button>
          )}

          {isInCart && (
            <div className="flex items-center gap-2">
              <UpdateItemQuantity
                currentQuantity={currentQuantity}
                pizzaId={id}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
