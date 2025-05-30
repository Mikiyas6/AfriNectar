// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useFetcher, useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const fetcher = useFetcher();
  /*
- useFetcher is designed for dynamic data fetching after a component has already been rendered.
- It allows you to fetch data as a result of user interactions or other non-routing-related events without reloading the route.
- Example: Fetching additional information when a user hovers over an item or clicks a button.

BUT

- Loaders are designed to prepare data that a route component will need before rendering.
- They execute once during navigation to a route and return data that becomes available via useLoaderData.

That's why we can't always rely on loaders
  */
  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher]
  );
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const totalTax = cart.reduce((acc, item) => {
    const tax = 0.0003 * item.unitPrice * item.quantity + item.totalPrice;
    return acc + tax;
  }, 0);
  console.log("FINAL", order);
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-pink-100 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-500 border-b border-b-stone-500  border-t-stone-500 border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((element) => element.id === item.pizzaId)
                ?.ingredients
            }
          />
        ))}
      </ul>

      <div className="space-y-2 bg-pink-100 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price Flower: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-sm font-medium text-stone-600">
          Tax Payable: {cart.length > 1 ? formatCurrency(totalTax) : "No tax"}
        </p>
        <p className="text-sm font-medium text-stone-600">
          Delivery Fee: {formatCurrency(100)}
        </p>
        <p className="font-bold">
          To pay on delivery:{" "}
          {formatCurrency(orderPrice + priorityPrice + totalTax + 100)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
