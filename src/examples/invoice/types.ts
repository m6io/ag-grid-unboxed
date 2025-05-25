export interface LineItem {
  id: number
  description: string
  quantity: number
  unitPrice: number
  total: number
}

export interface Invoice {
  customerName: string
  invoiceNumber: string
  date: string
  lineItems: LineItem[]
  subtotal: number
  tax: number
  total: number
}
