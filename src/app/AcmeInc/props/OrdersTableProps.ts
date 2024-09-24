export type Order = {
    id: string;
    customer: string;
    status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
    total: number;
    paymentStatus: string;
    date: Date;
  };