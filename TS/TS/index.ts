// let b: string = "10";
// let c: boolean = true;

// let arr: string[] = [];
// let arr1: [boolean, string] = [true, "test"];
// arr1 = [...arr1, true];

// let num: number = 18;
// function foo(num: number) {
//     let obj: { name: string; age: number } = {
//         name: "Jojo",
//         age: num ? num : 12,
//     };
//     return obj;
// }
// foo(undefined)

// // any
// let a: any = 12;
// let c: string = "123";
// // a = true;
// c = a;
// // a.test

// // unknown

// let b: unknown = 12;
// // c = b;
// if (typeof b === 'string') {
//     c = b;
// }
// // b.test

// let a: Promise | Observable | null = 12;
// a = true;

// function

// type typeFn = (name: string, age?: number) => { name: string; age: number };
// interface interfaceFn {
//     (name: string, age?: number): { name: string; age: number };
// }

// const foo: interfaceFn = function (name, age) {
//     return {
//         name: name,
//         age: age ? age : 18,
//     };
// }
// console.log(foo("Jojo"));

// // interface & class
// interface Todo {
//     userId: number;
//     title: string;
//     completed: boolean;
// }
// class Todo {
//     userId: number;
//     title: string;
//     completed: boolean;
// }
// const todo: Todo = {
//     userId: 2,
//     title: "string",
//     completed: true,
// };
// interface PersonPartOne {
//     name: string;
// }
// interface PersonPartTwo extends PersonPartOne {
//     age: number;
// }
// type PersonPartOne = { name: string; };
// type PersonPartTwo = { age: number; } & PersonPartOne;

// const obj: PersonPartTwo = {
//     name: 'Jojo',
//     age: 18
// };

// // void and never
// function foo(): never {
//     // while (true) {};
//     throw new Error;
// }
// console.log(foo());

// // build in type
// const nodeEles: NodeList = document.querySelectorAll('button');
// const htmlEles: HTMLCollection = document.getElementsByTagName('test');

// nodeEles.forEach((ele: Element) => {});
// type typefn = (num: number) => string

// const cb: typefn = function (num) {
//     return  num + '';
// }
// function foo(callback: typefn): string {
//     return callback(12);
// }
// foo(cb);

// // enum

// enum PrintMedia {
//     Newspaper = 18,
//     Newsletter,
//     Magazine,
//     Book,
// }

// console.log(PrintMedia);

// function getMedia(mediaName: string): PrintMedia {
//     if (mediaName === "Forbes" || mediaName === "Outlook") {
//         return PrintMedia.Book;
//     }
// }
// let media: PrintMedia = getMedia("Forbes");
// console.log(media);

// // oop

// // generic

// // decorator
const p: Promise<string> = new Promise((resolve, reject) => {});
