import { useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://dcaacafb-91a0-4325-8a95-8a8795b5462c.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProducts(result.data);
      })
      .catch(function (error) {
        console.log.error(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보가 달려오고 있습니다.....</h1>;
  }
  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2022년 11월 17일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}
export default ProductPage;
