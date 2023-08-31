import Checkout from "./Checkout";

export const metadata = {
  title: "Checkout - Jihad Blogs",
};

const CheckoutPage = () => {
  return (
    <div>
      <h1 className="my-5 text-2xl">Review added products</h1>
      <Checkout></Checkout>
    </div>
  );
};

export default CheckoutPage;
