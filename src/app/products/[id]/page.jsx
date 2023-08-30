// import { getProductById } from "@/services/product.service";
import getSingleProduct from "@/utils/getSingleProduct";
import AddcartBtn from "./AddcartBtn";

export const revalidate = 0;

const ProductDetails = async ({ params: { id } }) => {
  const product = await getSingleProduct(id);

  return (
    <div>
      <h2>{product.title}</h2>
      <AddcartBtn id={id}></AddcartBtn>
    </div>
  );
};

export default ProductDetails;
