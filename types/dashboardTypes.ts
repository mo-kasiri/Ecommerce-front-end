export interface ItemStatus {
  id: number;
  customerId: number;
  province: string;
  city: string;
  address: string;
  status: "Done" | "InProgress" | "Canceled" | "Paid";
  price: number;
}
