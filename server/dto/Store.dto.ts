export interface CreateStoreInput {
  name: string;
  ownerName: string;
  niche: [string];
  storeLink: string;
  products: [
    {
      name: string;
      sellingPrice: string;
      cogs: string;
      shippingPrice: string;
    }
  ];
}
