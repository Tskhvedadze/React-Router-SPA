import { useParams } from "react-router-dom";

export function ProductDetail() {
  const params = useParams();

  console.log(params.productID);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productID}</p>
    </section>
  );
}
