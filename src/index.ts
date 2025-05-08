
function formatString(input:string,toUpper?:boolean):string{
    if(toUpper===false){
        return input.toLowerCase()
    }
    return input.toUpperCase()
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];


function filterByRating(item:{title:string,rating:number}[]):{title:string,rating:number}[]{
    let filterdItem=item.filter(element=>element.rating>=4)
    return filterdItem
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result:T[]=([] as T[]).concat(...arrays);
    return result;
  }

function processValue(value: string | number): number{
    if(typeof value ==='string'){
        return value.length
    }
    return value*2
}


interface Product{
    name:string,
    price:number
}

let products:Product[]=[{name:'pen',price:5}, {name:'notebook',price:50}, {name:'pencil',price:10}]

  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
  
    let MostExpensiveProduct = products[0];
  
    for (let i = 1; i < products.length; i++) {
      if (products[i].price >  MostExpensiveProduct.price) {
        MostExpensiveProduct = products[i];
      }
    }
  
    return  MostExpensiveProduct;
  }
  

class Vehicle{
   private make:string;
   private year:number
    constructor(make:string,year:number){
        this.make=make,
        this.year=year
    }
    getInfo():string{
        return `Make: ${this.make} Year: ${this.year}`
    }
}
class Car extends Vehicle{
    private model:string
    constructor(make:string,year:number,model:string){
        super(make,year)
        this.model=model
    }
    getModel():string{
        return `Model: ${this.model}`
    }
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  
  function getDayType(day: Day): string {
    if (day === Day.Sunday) {
      return "Weekend";
    }
    return "Weekday";
  }
  

  function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject("Negative number not allowed");
        } else {
          resolve(n*n);
        }
      }, 1000); 
    });
  }
  