# 🚀 TypeScript Technocrat

> A comprehensive, hands-on TypeScript learning repository covering everything from basic types to advanced OOP patterns — structured as a progressive course with real code examples.

---

## 📚 Table of Contents

- [About This Repository](#about-this-repository)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Module 1: Basic Types of TypeScript](#module-1-basic-types-of-typescript)
- [Module 2: Advanced Types of TypeScript](#module-2-advanced-types-of-typescript)
- [Module 3: Object-Oriented Programming (OOP)](#module-3-object-oriented-programming-oop)
- [Project Structure](#project-structure)
- [How to Run the Code](#how-to-run-the-code)

---

## About This Repository

This repository is a structured journey through TypeScript, from your very first `hello world` program to advanced OOP concepts like polymorphism, abstraction, and design patterns. Each topic is organized into modules with focused source files so you can learn one concept at a time.

---

## Prerequisites

Before diving in, make sure you have:

- Basic knowledge of JavaScript
- Node.js installed (v14 or later recommended)
- A code editor (VS Code recommended)

---

## Getting Started

### 1. Install Node Version Manager (nvm)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
```

### 2. Install Node.js

```bash
nvm install --lts
```

### 3. Install TypeScript globally

```bash
npm install -g typescript
```

### 4. Verify installations

```bash
node -v
npm -v
tsc -v
```

### 5. Clone this repository

```bash
git clone https://github.com/st-shourov12/typescript-technocrat.git
cd typescript-technocrat
```

### 6. Initialize TypeScript config

```bash
tsc --init
```

In `tsconfig.json`, configure your source and output directories:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

### 7. Compile TypeScript

```bash
tsc
```

### 8. Run TypeScript files directly (for development)

Install `ts-node-dev` globally:

```bash
npm install -g ts-node-dev
```

Then run any file with:

```bash
ts-node-dev --respawn --transpile-only src/module1/index.ts
```

---

## Module 1: Basic Types of TypeScript

### 1-1 · Install TypeScript & Node Version Manager

Set up your development environment with `nvm` and install TypeScript globally using npm.

---

### 1-2 · Write Your First TypeScript Program

```typescript
const message: string = "Hello, TypeScript!";
console.log(message);
```

Configure `tsconfig.json` with `rootDir` (where `.ts` files live) and `outDir` (where compiled `.js` files go), then run `tsc` to compile.

---

### 1-3 · Basic Data Types

TypeScript is a strongly-typed superset of JavaScript. Here are the core primitive types:

```typescript
// Number
const age: number = 30;
const pi: number = 3.14159;

// String
const greeting: string = "Hello, TypeScript!";

// Boolean
const isActive: boolean = true;

// Null & Undefined
const nothing: null = null;
let empty: undefined;

// Symbol
const id: symbol = Symbol("uniqueId");

// BigInt
const bigNum: bigint = 9007199254740991n;

// Void (used for functions with no return value)
function logMessage(): void {
  console.log("This returns nothing");
}

// Array
const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: string[] = ["apple", "banana", "cherry"];

// Tuple (fixed-length, ordered types)
const person: [string, number] = ["Alice", 30];

// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
const move: Direction = Direction.Up;

// Any (opt out of type checking — use sparingly)
let flexible: any = 42;
flexible = "Now I'm a string";

// Union Types
let value: string | number = "hello";
value = 99;
```

> 💡 **Key Insight:** TypeScript catches type mismatches at *compile time*, before your code ever runs, saving you from hard-to-debug runtime errors.

---

### 1-4 · Object, Optional & Literal Types

```typescript
// Object type annotation
const user: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};

// Optional property (?)
const config: { host: string; port?: number } = {
  host: "localhost",
  // port is optional — safe to omit
};

// Literal type (only specific values allowed)
const status: "active" | "inactive" = "active";

// Readonly property
const settings: { readonly theme: string } = { theme: "dark" };
// settings.theme = "light"; // ❌ Error! Cannot reassign a readonly property

// Type alias
type Point = { x: number; y: number };
const origin: Point = { x: 0, y: 0 };

// Record type
const phonebook: Record<string, string> = {
  Alice: "555-1234",
  Bob: "555-5678",
};
```

---

### 1-5 · Functions in TypeScript

```typescript
// Typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameter
function greet(name: string, greeting?: string): string {
  return `${greeting ?? "Hello"}, ${name}!`;
}

// Default parameter
function multiply(x: number, y: number = 2): number {
  return x * y;
}

// Arrow function with type
const divide: (a: number, b: number) => number = (a, b) => a / b;

// void return type
function printMessage(msg: string): void {
  console.log(msg);
}
```

---

### 1-6 · Spread and Rest Operators

```typescript
// Spread — expand arrays/objects
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

const user = { name: "Alice", age: 30 };
const extended = { ...user, city: "Dhaka" };

// Rest — collect remaining arguments
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
```

> 💡 **Tip:** Wrap your TypeScript code in `{}` blocks to avoid variable name conflicts across global scope — TypeScript treats them as separate scopes.

---

### 1-7 · Destructuring

```typescript
// Array destructuring
const [first, second, ...rest] = [10, 20, 30, 40, 50];
// first = 10, second = 20, rest = [30, 40, 50]

// Object destructuring
const { name, age } = { name: "Bob", age: 25, city: "Dhaka" };

// Rename on destructure
const { name: fullName, age: years } = { name: "Carol", age: 22 };

// Default values
const { role = "guest" } = { name: "Dave" };

// Nested destructuring
const { address: { city } } = { name: "Eve", address: { city: "Dhaka" } };
```

---

### 1-8 · Type Alias

```typescript
// Simple alias
type ID = number;
type Status = "active" | "inactive" | "pending";

// Object type alias
type User = {
  id: ID;
  name: string;
  status: Status;
};

// Reuse across your codebase
const user: User = { id: 1, name: "Alice", status: "active" };
```

---

### 1-9 · Union and Intersection Types

```typescript
// Union — one OR the other
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42; // both valid

// Intersection — both combined
type Employee = { name: string; role: string };
type Manager = { reports: number };
type ManagerEmployee = Employee & Manager;

const mgr: ManagerEmployee = {
  name: "Alice",
  role: "Engineering Manager",
  reports: 5,
};
```

---

### 1-10 · Ternary, Optional Chaining & Nullish Coalescing

```typescript
// Ternary
const label = isLoggedIn ? "Logout" : "Login";

// Optional chaining (?.)
const streetName = user?.address?.street; // safe access, no crash if null

// Nullish coalescing (??)
// Returns right side ONLY if left side is null or undefined (not "" or 0)
const displayName = userName ?? "Anonymous";
```

> 💡 **Key Difference:** `??` only triggers on `null` / `undefined`, while `||` also triggers on `""`, `0`, and `false`.

---

### 1-11 · Never, Unknown, and Nullable Types

```typescript
// unknown — type-safe alternative to any
let input: unknown = "hello";
if (typeof input === "string") {
  console.log(input.toUpperCase()); // safe after type check
}

// never — function that never returns
function throwError(msg: string): never {
  throw new Error(msg);
}

// Nullable union
let maybeNull: string | null = null;

// Non-null assertion (!)
const definitelyString = maybeNull!.length; // tell TS "trust me, it's not null"
```

---

## Module 2: Advanced Types of TypeScript

### 2-1 · Type Assertion / Type Narrowing

```typescript
// Type assertion with 'as'
let anything: any = "Next Level Web Development";
const length = (anything as string).length;

// typeof narrowing
const kgToGm = (value: string | number): string | number => {
  if (typeof value === "string") {
    return `${parseFloat(value) * 1000}g`;
  }
  return value * 1000;
};

// Error handling with assertion
try {
  // risky code
} catch (error) {
  console.log((error as { message: string }).message);
}
```

---

### 2-2 · Interface vs Type

Both `interface` and `type` describe the shape of objects. Here's when each shines:

```typescript
// type alias — supports unions, primitives, tuples
type User = { name: string; age: number };
type UserWithRole = User & { role: string }; // extend via intersection

// interface — supports declaration merging, cleaner for OOP
interface IUser {
  name: string;
  age: number;
}
interface IUserWithRole extends IUser {
  role: string;
}

// Function shape with interface
interface AddFn {
  (a: number, b: number): number;
}
const add: AddFn = (a, b) => a + b;

// Array shape with interface
interface NumberArray {
  [index: number]: number;
}
const rolls: NumberArray = [1, 2, 3];
```

> 💡 **Rule of Thumb:** Use `interface` for object/class contracts, `type` for unions, intersections, and utility types.

---

### 2-3 · Introduction to Generics

Generics let you write reusable, type-safe code that works with *any* type.

```typescript
// Generic array type
type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray<number> = [3, 6, 8];
const mentors: GenericArray<string> = ["Mr. X", "Mr. Y"];

// Generic function
const createArray = <T>(item: T): T[] => [item];
createArray<string>("Bangladesh"); // ['Bangladesh']
createArray<number>(42);           // [42]

// Generic tuple
type Pair<X, Y> = [X, Y];
const userWithId: Pair<number, { name: string }> = [1, { name: "Alice" }];
```

---

### 2-4 · Generics with Interface

```typescript
interface Developer<T, Bike = null> {
  name: string;
  computer: { brand: string; model: string; releaseYear: number };
  smartWatch: T;
  bike?: Bike;
}

type EmilabWatch = { brand: string; model: string; display: string };

const poorDev: Developer<EmilabWatch> = {
  name: "Persian",
  computer: { brand: "Asus", model: "X255", releaseYear: 2013 },
  smartWatch: { brand: "Emilab", model: "kw66", display: "OLED" },
};

interface AppleWatch { brand: string; model: string; heartTrack: boolean; sleepTrack: boolean }
interface YamahaBike { model: string; engineCapacity: string }

const richDev: Developer<AppleWatch, YamahaBike> = {
  name: "Rich Dev",
  computer: { brand: "HP", model: "Spectre", releaseYear: 2022 },
  smartWatch: { brand: "Apple", model: "Ultra", heartTrack: true, sleepTrack: true },
  bike: { model: "Yamaha", engineCapacity: "150cc" },
};
```

---

### 2-5 · Generic Functions

```typescript
// A function that adds a "course" property to any student object
const addCourse = <T>(student: T) => ({
  ...student,
  course: "Next Level Web Development",
});

const s1 = addCourse({ name: "Mr X", email: "x@gmail.com" });
// { name, email, course } — TypeScript infers all types correctly

// Tuple-returning generic function
const createTuple = <T, Q>(a: T, b: Q): [T, Q] => [a, b];
const result = createTuple<string, number>("Dhaka", 100);
```

---

### 2-6 · Constraints in Generics

Use `extends` to enforce that a generic type must have certain properties:

```typescript
const addCourse = <T extends { id: number; name: string; email: string }>(student: T) => ({
  ...student,
  course: "Next Level Web Development",
});

// ✅ Works — has id, name, email
addCourse({ id: 1, name: "Alice", email: "a@gmail.com", batch: 5 });

// ❌ Error — missing required fields
// addCourse({ name: "Bob" });
```

---

### 2-7 · keyof Constraint

`keyof` extracts the union of keys from a type, enabling type-safe property access:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", email: "alice@example.com" };

getProperty(user, "name");   // ✅ "Alice"
getProperty(user, "email");  // ✅ "alice@example.com"
// getProperty(user, "age"); // ❌ Error — 'age' doesn't exist on User
```

---

### 2-8 · Async TypeScript & Promises

```typescript
type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

// Typed async/await
const getTodo = async (): Promise<Todo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};

// Typed custom Promise
const createPromise = (): Promise<{ data: string }> => {
  return new Promise((resolve, reject) => {
    const data = { data: "success" };
    data ? resolve(data) : reject("Failed to load");
  });
};
```

---

### 2-9 · Conditional Types

```typescript
// Basic conditional type
type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>;  // "yes"
type B = IsString<number>;  // "no"

// Real-world example
type Vehicle = { bike: string; car: string; ship: string };
type HasVehicle<T> = T extends keyof Vehicle ? true : false;

type HasCar   = HasVehicle<"car">;    // true
type HasPlane = HasVehicle<"plane">;  // false
```

---

### 2-10 · Mapped Types

Transform every property in a type using `in keyof`:

```typescript
// Make all properties optional (like Partial<T>)
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Make all properties strings
type Stringify<T> = {
  [K in keyof T]: string;
};

type Area = { height: number; width: number };
type StringArea = Stringify<Area>;
// { height: string; width: string }

const area: Stringify<Area> = { height: "100px", width: "50px" };
```

---

### 2-11 · Utility Types

TypeScript includes built-in utility types for common type transformations:

| Utility Type | What It Does | Example |
|---|---|---|
| `Partial<T>` | Makes all properties optional | `Partial<User>` |
| `Required<T>` | Makes all properties required | `Required<Config>` |
| `Readonly<T>` | Makes all properties read-only | `Readonly<Settings>` |
| `Record<K, V>` | Object with keys `K` and values `V` | `Record<string, number>` |
| `Pick<T, K>` | Select only specific keys | `Pick<User, "id" \| "name">` |
| `Omit<T, K>` | Exclude specific keys | `Omit<User, "password">` |
| `Exclude<T, U>` | Remove types from a union | `Exclude<"a"\|"b"\|"c", "a">` |
| `Extract<T, U>` | Keep only matching union types | `Extract<string\|number, string>` |
| `NonNullable<T>` | Remove `null` and `undefined` | `NonNullable<string \| null>` |
| `ReturnType<T>` | Get return type of a function | `ReturnType<typeof myFn>` |
| `Parameters<T>` | Get parameter types as a tuple | `Parameters<typeof myFn>` |

```typescript
// Pick example
type User = { id: number; name: string; email: string; password: string };
type PublicUser = Pick<User, "id" | "name">;
// { id: number; name: string }

// Omit example
type SafeUser = Omit<User, "password">;
// { id: number; name: string; email: string }

// ReturnType example
function getUser() { return { id: 1, name: "Alice" }; }
type UserReturn = ReturnType<typeof getUser>;
// { id: number; name: string }
```

---

## Module 3: Object-Oriented Programming (OOP)

### 3-0 · OOP Concepts Overview

TypeScript fully supports Object-Oriented Programming with four core pillars:

| Pillar | Meaning |
|---|---|
| **Encapsulation** | Bundle data and behavior; control access |
| **Inheritance** | Classes can extend other classes |
| **Polymorphism** | Same interface, different implementations |
| **Abstraction** | Hide implementation, expose what matters |

---

### 3-1 · Class and Object

```typescript
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound(): void {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German Shepherd", "dog", "Woof!");
const cat = new Animal("Persian", "cat", "Meow!");

dog.makeSound(); // The German Shepherd says Woof!
cat.makeSound(); // The Persian says Meow!
```

---

### 3-2 · Inheritance

```typescript
class Person {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  getSleep(hours: number): void {
    console.log(`${this.name} will sleep for ${hours} hours`);
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address); // call parent constructor
  }
  study(): void {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  constructor(
    name: string,
    age: number,
    address: string,
    public designation: string
  ) {
    super(name, age, address);
  }
  takeClass(numOfClasses: number): void {
    console.log(`${this.name} will take ${numOfClasses} classes`);
  }
}

const student = new Student("Alice", 20, "Dhaka");
student.getSleep(7);  // inherited from Person
student.study();

const teacher = new Teacher("Bob", 40, "Dhaka", "Professor");
teacher.getSleep(6);
teacher.takeClass(3);
```

---

### 3-3 · Type Guards — `typeof` and `in`

Type guards help TypeScript narrow down a union type at runtime:

```typescript
// typeof guard
type Alphanumeric = string | number;

const concatenateOrAdd = (a: Alphanumeric, b: Alphanumeric): Alphanumeric => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;       // numeric addition
  }
  return `${a}${b}`;  // string concatenation
};

// 'in' guard — checks if a property exists in an object
type NormalUser  = { name: string };
type AdminUser   = { name: string; role: "admin" };

const describeUser = (user: NormalUser | AdminUser): void => {
  if ("role" in user) {
    console.log(`${user.name} is an admin`);
  } else {
    console.log(`${user.name} is a regular user`);
  }
};
```

---

### 3-4 · Type Guards — `instanceof`

```typescript
class Dog extends Animal {
  makeBark(): void { console.log("Woof!"); }
}

class Cat extends Animal {
  makeMeow(): void { console.log("Meow!"); }
}

// Predicate function — returns animal is Dog
const isDog = (animal: Animal): animal is Dog => animal instanceof Dog;
const isCat = (animal: Animal): animal is Cat => animal instanceof Cat;

const interact = (animal: Animal): void => {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeow();
  } else {
    animal.makeSound();
  }
};
```

---

### 3-5 · Access Modifiers

TypeScript provides three access modifiers to control visibility:

| Modifier | Accessible From |
|---|---|
| `public` | Anywhere (default) |
| `private` | Only inside the class |
| `protected` | Inside the class and subclasses |
| `readonly` | Readable everywhere, writable only in constructor |

```typescript
class BankAccount {
  public readonly id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  public deposit(amount: number): void {
    this._balance += amount;
  }

  public getBalance(): number {
    return this._balance;
  }
}

const account = new BankAccount(1, "Alice", 500);
account.deposit(200);
console.log(account.getBalance()); // 700
// account._balance = 0; // ❌ Error — private!
```

---

### 3-6 · Getters and Setters

Use `get` and `set` to control access to private fields like a property, not a method call:

```typescript
class BankAccount {
  protected _balance: number;

  constructor(public readonly id: number, public name: string, balance: number) {
    this._balance = balance;
  }

  // Getter — accessed like a property: account.balance
  get balance(): number {
    return this._balance;
  }

  // Setter — used like an assignment: account.deposit = 100
  set deposit(amount: number) {
    this._balance += amount;
  }
}

const account = new BankAccount(1, "Alice", 100);
account.deposit = 50;             // calls the setter
console.log(account.balance);    // 150 — calls the getter
```

---

### 3-7 · Static Members

Static properties and methods belong to the *class itself*, not to any instance:

```typescript
class Counter {
  static count: number = 0; // shared across ALL instances

  static increment(): number {
    return ++Counter.count;
  }

  static decrement(): number {
    return --Counter.count;
  }
}

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
console.log(Counter.decrement()); // 1
// No need to create an instance — call directly on the class
```

---

### 3-8 · Polymorphism

Polymorphism allows objects of different classes to be treated through a common interface, each responding differently:

```typescript
class Shape {
  getArea(): number { return 0; }
}

class Circle extends Shape {
  constructor(private radius: number) { super(); }
  getArea(): number { return Math.PI * this.radius ** 2; }
}

class Rectangle extends Shape {
  constructor(private height: number, private width: number) { super(); }
  getArea(): number { return this.height * this.width; }
}

// One function handles all shape types
const printArea = (shape: Shape): void => {
  console.log(`Area: ${shape.getArea().toFixed(2)}`);
};

printArea(new Circle(10));         // Area: 314.16
printArea(new Rectangle(5, 8));    // Area: 40.00
```

> 💡 **Why Polymorphism?** You can add a new shape (e.g., `Triangle`) without changing `printArea` at all — open for extension, closed for modification.

---

### 3-9 · Abstraction

Abstract classes define a *contract* — they can have some implementation, but subclasses **must** implement abstract methods:

```typescript
abstract class Vehicle {
  abstract startEngine(): void; // must be implemented by subclasses

  move(): void {
    console.log("Vehicle is moving");
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("Car engine: Vroom!");
  }
}

class Boat extends Vehicle {
  startEngine(): void {
    console.log("Boat engine: Chug chug!");
  }
}

const car = new Car();
car.startEngine(); // Car engine: Vroom!
car.move();        // Vehicle is moving

// const v = new Vehicle(); // ❌ Error — cannot instantiate abstract class
```

---

### 3-10 · Encapsulation

Encapsulation means bundling state and behavior together and restricting direct access to internal data:

```typescript
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string { return this._name; }
  get age(): number { return this._age; }

  set age(value: number) {
    if (value < 0) throw new Error("Age cannot be negative");
    this._age = value;
  }

  introduce(): string {
    return `Hi, I'm ${this._name} and I'm ${this._age} years old.`;
  }
}

const p = new Person("Alice", 25);
console.log(p.introduce()); // Hi, I'm Alice and I'm 25 years old.
p.age = 26;                 // ✅ uses setter
// p._age = -1;             // ❌ private — cannot access
```

---

## Project Structure

```
typescript-technocrat/
├── src/
│   ├── module1/          # Basic Types
│   │   ├── 1.3-basic-types.ts
│   │   ├── 1.4-object-optional-literal.ts
│   │   ├── 1.5-function.ts
│   │   ├── 1.6-spread-rest.ts
│   │   ├── 1.7-destructuring.ts
│   │   ├── 1.8-type-alias.ts
│   │   ├── 1.9-union-intersection.ts
│   │   ├── 1.10-ternary-optional-nullish.ts
│   │   └── 1.11-never-unknown-nullable.ts
│   ├── module2/          # Advanced Types
│   │   ├── 2.1-type-assertion.ts
│   │   ├── 2.2-interface.ts
│   │   ├── 2.3-generics.ts
│   │   ├── 2.4-generic-interface.ts
│   │   ├── 2.5-generic-function.ts
│   │   ├── 2.6-constraints.ts
│   │   ├── 2.7-keyof.ts
│   │   ├── 2.8-async-promise.ts
│   │   ├── 2.9-conditional-types.ts
│   │   ├── 2.10-mapped-types.ts
│   │   └── 2.11-utility-types.ts
│   └── module3/          # OOP with TypeScript
│       ├── 3.1-class-object.ts
│       ├── 3.2-inheritance.ts
│       ├── 3.3-type-guard-typeof-in.ts
│       ├── 3.4-type-guard-instanceof.ts
│       ├── 3.5-access-modifiers.ts
│       ├── 3.6-getter-setter.ts
│       ├── 3.7-static.ts
│       ├── 3.8-polymorphism.ts
│       ├── 3.9-abstraction.ts
│       └── 3.10-encapsulation.ts
├── dist/                 # Compiled JavaScript output
└── tsconfig.json
```

---

## How to Run the Code

**Compile everything:**
```bash
tsc
```

**Compile and watch for changes:**
```bash
tsc --watch
```

**Run a specific file directly (no compile step):**
```bash
ts-node-dev --respawn --transpile-only src/module1/1.3-basic-types.ts
```

**Run compiled JS:**
```bash
node dist/module1/1.3-basic-types.js
```

---

## Learning Roadmap

```
Module 1 (Basics)          Module 2 (Advanced)        Module 3 (OOP)
──────────────────         ──────────────────         ──────────────
✅ Data Types          →   ✅ Type Assertion       →  ✅ Classes
✅ Objects             →   ✅ Interfaces           →  ✅ Inheritance
✅ Functions           →   ✅ Generics             →  ✅ Type Guards
✅ Spread/Rest         →   ✅ Constraints          →  ✅ Access Modifiers
✅ Destructuring       →   ✅ keyof                →  ✅ Getters/Setters
✅ Type Aliases        →   ✅ Async/Promises       →  ✅ Static Members
✅ Union/Intersection  →   ✅ Conditional Types    →  ✅ Polymorphism
✅ Operators           →   ✅ Mapped Types         →  ✅ Abstraction
✅ Never/Unknown       →   ✅ Utility Types        →  ✅ Encapsulation
```

---

## Resources

- [TypeScript Official Docs](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [Apollo Level 2 Web Development](https://github.com/Apollo-Level2-Web-Dev/be-a-typescript-technocrat)

---

<div align="center">

**Happy Learning! 🎯**

*Made with ❤️ for the TypeScript community*

</div>