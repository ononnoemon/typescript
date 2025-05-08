# Difference between interface and type alias in TypeScript

Usually we use two method for defined data in typescript one interface and other type alias
It seems same but has some fundamental difference between them 
Let discus in details

## 01. Core syntax and define

Using `type`:
```ts
type User = {
  name: string;
  phone: number;
};
 
type User = {
  name: string;
  phone: number;
}

interface User {
  name: string;
  phone: number;
}

## 02 Extend process
One interface can extend another interface
interface User {
  name: string;
}

interface Admin extends User {
  id: number;
}

But in similar task type do using intersection operator (&)
type User= {
  name: string;
};

type Admin= User & {
  Id: number;
};


# Fundamental Difference between interface and type alias
## 1)By using type alias we can declare not only object but also we can declare union,tuple,primitive

 type Status = "success" | "error";

type Point = [number, number];

type Greet = (name: string) => string;

But interface only use for object type data

## 2)Declaration Merging Factor
If you declare an interface with the same name multiple times, TypeScript will combine them all.
interface User {
  name: string;
}

interface User {
  age: number;
}

// Now: { name: string, age: number }

But if once type alias declare further it can not redeclare at the same name

## Conclusion:good practice is for  defining object structure,class implementations and oop,when you need declaration merging and extending others interface you should use interface
## And when you declare union and intersection types,tuples,function and other complex data type in that case you should use Type alias


