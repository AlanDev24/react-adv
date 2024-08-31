import { Product } from "../interfaces/interfaces";

const product = {
    id: "1",
    title: "Coffee mug - card",
    img: "./coffee-mug.png",
  };
  const product2 = {
    id: "2",
    title: "Coffee mug - Meme",
    img: "./coffeemug2.png",
  };
  
  export const products: Product[] = [product, product2];