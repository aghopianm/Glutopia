export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'wedding cakes' | 'cupcakes' | 'birthday cakes';
  }
  
  export type CartItem = Product & {
    quantity: number;
  }