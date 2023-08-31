"use client";

import useCart from "@/hooks/useCart";
import { toast } from "react-hot-toast";

import { RiSubtractFill, RiAddFill } from "react-icons/ri";

const Checkout = () => {
  const { isLoading, mutate, cart } = useCart();

  const handleCount = async (id, action) => {
    try {
      const res = await fetch(`/api/cart?id=${id}&action=${action}`, {
        method: "POST",
      });
      const result = await res.json();
      if (result.added) {
        toast.success(result.message);
        mutate();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {isLoading && (
        <h1 className="text-center text-2xl font-medium">Loading........</h1>
      )}
      {isLoading && cart.length === 0 && <h1>No Product added to cart</h1>}
      {cart.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table table-lg">
            <thead>
              <tr className="text-center">
                <th>No.</th>
                <th>Title</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(({ _id, title, brand, quantity, price }, i) => (
                <tr className="text-center" key={_id}>
                  <th>{i + 1}</th>
                  <td>{title || <span>not found!</span>}</td>
                  <td>{price || <span>not found!</span>}</td>
                  <td>{brand || <span>not found!</span>}</td>
                  <td className="flex items-center justify-center">
                    <button
                      className="btn btn-primary mr-3"
                      onClick={() => handleCount(_id, "plus")}
                    >
                      <RiAddFill></RiAddFill>
                    </button>
                    <span>
                      <td>{quantity || <span>not found!</span>}</td>
                    </span>
                    <button
                      className="btn btn-primary mr-3"
                      onClick={() => handleCount(_id, "minus")}
                      disabled={quantity <= 1}
                    >
                      <RiSubtractFill></RiSubtractFill>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary my-3 ml-auto block mr-16">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
