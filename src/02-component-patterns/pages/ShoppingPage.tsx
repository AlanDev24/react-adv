import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee mug - card",
  img: "./coffee-mug.png",
};
const product2 = {
  id: "1",
  title: "Coffee mug - card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product2} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title
            className="text-white"
            title="titulo personalizado"
          />
          <ProductCard.Buttons className="custom-button" />
        </ProductCard>

        <ProductCard className="bg-dark text-white" product={product}>
          <ProductImage
            className="custom-image"
            style={{
              boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
            }}
          />
          <ProductTitle className="text-white" title="Cafe perron" />
          <ProductButtons className="custom-button" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "#70D1F8",
          }}
        >
          <ProductImage
            style={{
              boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
            }}
          />
          <ProductTitle style={{ fontWeight: "bold" }} title="Cafe perron" />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
