
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Appetizers' | 'Main Course' | 'Desserts' | 'Beverages';
  image: string;
}

export interface OrderFormData {
  customerName: string;
  phoneNumber: string;
  selectedItems: string[];
  quantity: number;
  specialInstructions: string;
}

export interface ReservationFormData {
  name: string;
  phoneNumber: string;
  date: string;
  time: string;
  guests: number;
}
