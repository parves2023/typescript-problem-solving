
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper) {
    return input.toUpperCase();
  }
  return input;
}

const str1 = formatString("hello");
const str2 = formatString("hello", true);
const str3 = formatString("hello", false);
const str4 = formatString("hello", undefined);
// console.log(str1);
// console.log(str2); 
// console.log(str3); 
// console.log(str4); 


function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  let result: { title: string; rating: number }[] = [];
  items.forEach((items) => {
    if (items.rating > 4 || items.rating === 4) {
      result.push({
        title: items.title,
        rating: items.rating,
      });
    }
  });
  return result;
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
const books2 = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 4 },
];
// console.log(filterByRating(books));
// console.log(filterByRating(books2));









function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];
  const length = arrays.length;
  for (let i = 0; i < length; i++) {
    result = result.concat(arrays[i]);
  }
  return result;
}
// console.log(concatenateArrays([1, 2], [3, 4]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));








class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel(): string {
    return `Model: ${this.model}`;
  }
}
// Example usage:
const myCar = new Car("Toyota", 2020, "Corolla");
const myCar2 = new Car("Honda", 2021, "Civic");

// console.log(myCar.getInfo());
// console.log(myCar.getModel());







function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

// console.log(processValue("hello"));
// console.log(processValue(10));









interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  let mostExpensiveProduct = products[0];
  products.forEach((product) => {
    if (product.price > mostExpensiveProduct.price) {
      mostExpensiveProduct = product;
    }
  });
  return mostExpensiveProduct;
}

// Example usage:
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

// console.log(getMostExpensiveProduct(products));








enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Monday:
    case Day.Tuesday:
    case Day.Wednesday:
    case Day.Thursday:
    case Day.Friday:
      return "Weekday";
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Invalid day";
  }
}

// console.log(getDayType(Day.Monday)); 
// console.log(getDayType(Day.Saturday)); 












async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Negative number not allowed");
  }

  await new Promise(resolve => setTimeout(resolve, 1000));
  return n * n;
}

// squareAsync(4).then(console.log);
// squareAsync(-3).catch(console.error); 