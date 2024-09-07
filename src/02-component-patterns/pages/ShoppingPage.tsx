import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <ProductCard
        key={product.id}
        className="bg-dark text-white"
        product={product}
        initialValues={{
          count: 1,
          maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy, isMaxCountReached }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" title="Cafe perron" />
            <ProductButtons className="custom-button" />
            <button onClick={reset}>Reset</button>
            {isMaxCountReached && (
              <button
                onClick={() => {
                  increaseBy(-2);
                }}
              >
                -2
              </button>
            )}
            <button
              onClick={() => {
                increaseBy(2);
              }}
            >
              +2
            </button>
            <span>count {count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
