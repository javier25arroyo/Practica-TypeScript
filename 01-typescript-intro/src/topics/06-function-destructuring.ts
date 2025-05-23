export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "iPhone 14 Pro",
  price: 999,
}

const tablet: Product = {
  description: "iPad Pro",
  price: 1099,
}

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}
/*
function taxCalculation( options: TaxCalculationOptions ): number [] {
  let total = 0;

  options.products.forEach(product => {
    total += product.price;
  });

  return [total, total * options.tax];
}
*/

//Applying destructuring to the function parameters
//function taxCalculation( options: TaxCalculationOptions ): [number, number] {
export function taxCalculation( options : TaxCalculationOptions ): [number, number] {
  const {tax, products} = options;
  let total = 0;

  for (const product of products) {
    total += product.price;
  }

  return [total, total * tax];
}


const soppingCart: Product[] = [phone, tablet];
const tax = 0.15;

//Applying destructuring to the function parameters
const [total, taxAmount] = taxCalculation({
  products: soppingCart,
  tax: tax,
});

//console.log(`Total: ${total}`);
//console.log(`Tax: ${taxAmount}`);


