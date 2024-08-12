import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

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
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title='Cafe perron'/>
          <ProductButtons /> 
        </ProductCard>


        <ProductCard product={product2}>
          <ProductCard.Image />
          <ProductCard.Title title='titulo personalizado'/>
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
