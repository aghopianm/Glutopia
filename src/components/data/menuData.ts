import { Category } from "../Menu";

export type CategoryData = {
  description: string;
  photos: string[];
};

export const priceList = {
  cakes: {
    title: "Celebration & Wedding Cakes",
    items: [
      {
        name: '6" Round Cake (serves 8-10)',
        price: "£35",
      },
      {
        name: '8" Round Cake (serves 12-16)',
        price: "£45",
      },
      {
        name: '10" Round Cake (serves 20-25)',
        price: "£60",
      },
      {
        name: '12" Round Cake (serves 35-40)',
        price: "£80",
      },
    ],
    note: "All cakes can be customized to your specific requirements. For bespoke designs, wedding cakes, and special requests, please contact us for a personalized quote.",
  },
  cupcakes: {
    title: "Cupcakes",
    items: [
      {
        name: "Single Cupcake",
        price: "£2",
      },
      {
        name: "Box of 6 Cupcakes",
        price: "£10",
      },
      {
        name: "Box of 12 Cupcakes",
        price: "£18",
      },
    ],
  },
};

export const categoryContent: Record<Exclude<Category, "all">, CategoryData> = {
  weddings: {
    description:
      "At Glutopia, we specialize in creating stunning wedding cakes that become the centerpiece of your special day. Our bespoke wedding cake service includes personal consultations, tasting sessions, and detailed design discussions to ensure your cake is exactly as you've dreamed. Each cake is handcrafted with premium ingredients and decorated with meticulous attention to detail.",
    photos: [
      "/images/wedding-cake-1.jpg",
      "/images/wedding-cake-2.jpg",
      "/images/wedding-cake-3.jpg",
      "/images/wedding-cake-4.jpg",
    ],
  },
  birthdays: {
    description:
      "Make your birthday celebration unforgettable with our custom birthday cakes. From whimsical children's designs to sophisticated adult celebrations, we create personalized cakes that reflect your style and personality. Our cakes can be customized with your favorite flavors, colors, and themed decorations.",
    photos: [
      "/images/birthday-cake-1.jpg",
      "/images/birthday-cake-2.jpg",
      "/images/birthday-cake-3.jpg",
      "/images/birthday-cake-4.jpg",
    ],
  },
  cupcakes: {
    description:
      "Our gourmet cupcakes are perfect for any occasion. Each batch is freshly baked using premium ingredients and topped with our signature buttercream frosting. Available in classic flavors or custom designs, our cupcakes can be ordered individually or as elegant towers for special events.",
    photos: [
      "/images/cupcake-1.jpg",
      "/images/cupcake-2.jpg",
      "/images/cupcake-3.jpg",
      "/images/cupcake-4.jpg",
    ],
  },
  prices: {
    description: "Our pricing structure for cakes and cupcakes.",
    photos: []
  }
};