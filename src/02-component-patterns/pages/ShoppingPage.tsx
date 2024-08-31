import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";




export const ShoppingPage = () => {

  const { onProductCartChange, shoppingCart} = useShoppingCart()

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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            className="bg-dark text-white"
            product={product}
            value={shoppingCart[product.id]?.count || 0}
            onChange={onProductCartChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" title="Cafe perron" />
            <ProductButtons className="custom-button" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            className="bg-dark text-white"
            product={product}
            style={{ width: "100px" }}
            value={product.count}
            onChange={onProductCartChange}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-button"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
