import { Invoice } from './types'

export const invoiceData: Invoice = {
  customerName: '',
  invoiceNumber: 'INV-001',
  date: new Date().toISOString().split('T')[0],
  lineItems: [
    {
      id: 1,
      description: 'Consulting Services',
      quantity: 10,
      unitPrice: 100,
      total: 1000,
    },
    {
      id: 2,
      description: 'Software License',
      quantity: 1,
      unitPrice: 500,
      total: 500,
    },
  ],
  subtotal: 1500,
  tax: 150,
  total: 1650,
}
