// problem : 1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper) {
    return input.toUpperCase();
  }
  return input;
}
// Example usage:
const str1 = formatString("hello");
const str2 = formatString("hello", true);
const str3 = formatString("hello", false);
const str4 = formatString("hello", undefined);
// console.log(str1); // Output: "hello world"
// console.log(str2); // Output: "HELLO WORLD"
// console.log(str3); // Output: "hello world"
// console.log(str4); // Output: "hello world"









// problem : 2
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







// problem : 3
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








// problem : 4


