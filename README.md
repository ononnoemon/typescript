# Artical 01 Difference between interface and type alias in TypeScript

Usually, we use two methods for defining data in TypeScript one interface and another type alias
It seems same but has a fundamental difference between them 
Let's discuss in detail




## 01. Core syntax and definition
Emaple:

```ts 
type User = {
  name: string;
  phone: number;
}

interface User {
  name: string;
  phone: number;
}
```
## 02 Extend process
 One interface can extend another interface

Example:
```ts 
interface User {
  name: string;
}

interface Admin extends User {
  id: number;
}

``` 
#### But in similar task type do using intersection operator (&)
Example:
```ts 
type User= {
  name: string;
};

type Admin= User & {
  Id: number;
};
```

## Fundamental Difference between interface and type alias
#### 1)By using type alias we can declare not only object but also we can declare union,tuple,primitive
Example
```ts 
 type Status = "success" | "error";

type Point = [number, number];

type Greet = (name: string) => string;
```
But interface only use for object type data

## 2)Declaration Merging Factor
If you declare an interface with the same name multiple times, TypeScript will combine them all.
Example
```ts 
interface User {
  name: string;
}

interface User {
  age: number;
}

// Now: { name: string, age: number }
```

But if once type alias declare further it can not redeclare at the same name

### Conclusion: good practice is for  defining object structure,class implementations and oop,when you need declaration merging and extending others interface you should use interface
### And when you declare union and intersection types,tuples,function and other complex data type in that case you should use Type alias





# Artical 2 Uses Union and Intersection of TypeScript

Union (|) and intersection (&) are important concept in typescript let's discuss about them

### 01 Union Type
The Union type is used when a variable can be of any one of multiple types.
When a variable can be either a string, a number, or a boolean in this situations, the Union type is used.
Example
```ts 
function printId(id: string | number): void {
  console.log("ID:", id);
}

printId("abc123"); // ID: abc123
printId(456);  	// ID: 456
```
### 02 Intersection Type
intersection type is used when a variable or object needs to have properties of more than one type together
If all properties of two different types are needed in one object, then the intersection type is used
Example
```ts 
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

// Intersection type
type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Rakib",
  age: 30,
  employeeId: 101,
  department: "IT"
};
```
### Where is it used?
#### Union: When the input or argument can be of more than one type —  string | number
#### Intersection: When you want an object to have properties of more than one type together  User & Admin


