const paymentData = {
  url: 'https://checkout.payulatam.com/ppp-web-gateway-payu',
  merchantId: '921610',
  accountId: '928812',
  description: '',
  referenceCode: '',
  amount: '',
  tax: '',
  taxReturnBase: '',
  currency: 'COP',
  signature: '',
  algorithmSignature: 'MD5',
  test: '0',
  buyerFullName: '',
  buyerEmail: '',
  shippingAddress: '',
  shippingCity: '',
  zipCode: '',
  telephone: '',
  responseUrl: 'http://localhost:3000/payment-confirmation',
  confirmationUrl: '',
}

const apiKey = 'YQf2rb562vZBazHD8G1j5MDpj2';

export {
  paymentData,
  apiKey,
}