// let b: string = "10";
// import { Component } from '@angular/core';
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

//& interface vs. type
// https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c

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

// // class implement interfaces
// SOLID

// interface Radio {
//     openRadio(): void;
// }
// interface Battery {
//     batteryStatus: () => void;
// }
// interface Keys {
//     shift: string;
//     enter: string;
// }
// class Mobile implements Radio, Battery, Keys {
//     shift: string;
//     enter: string;
//     batteryStatus: () => void;
//     openRadio(): void {
//         throw new Error("Method not implemented.");
//     }
// }

// // oop: Angular --> object oriented framework
// Encapsulation
// Inheritance
// Polymorphism
// Abstraction

// class Animal {
//     _name: string;
//     // private _age: number;
//     protected _age: number;
//     // protected company: string = "Jump";

//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }

//     consoleage(): void {
//         console.log(this._age);
//     }
// }
// const a = new Animal("Fish", 2);
// // console.log(a);

// class Cat extends Animal {
//     cattype: string;

//     constructor(name: string, age: number, cattype: string) {
//         super(name, age);
//         this.cattype = cattype;
//     }

//     consoleage() {
//         console.log(this._age);
//     }
// }

// class SmallCat extends Cat {
//     constructor(name: string, age: number, cattype: string) {
//         super(name, age, cattype);
//     }

//     consoleage() {
//         console.log(this._age);
//     }
// }

// // generic

// function toNumber(x: number, y: number): number[] {
//     return [x, y];
// }
// toNumber(2, 3);
// function toString(x: string, y: string): string[] {
//     return [x, y];
// }
// toString("4", "5");

// function toArray<T, R>(x: T, y: R): [T, R] {
//     return [x, y];
// }
// console.log(toArray<number, boolean>(+"6", true));

// interface Queue<T> {
//     enqueue(item: T): void;
//     dequeue(): T;
//     getqueue(): T[];
// }
// class MyQueue<T> implements Queue<T> {
//     queue: T[];

//     enqueue(item: T): void {}
//     dequeue(): T {
//         throw new Error("Method not implemented.");
//     }
//     getqueue(): T[] {
//         throw new Error("Method not implemented.");
//     }
// }
// const mqstr = new MyQueue<string>();
// const mqnum = new MyQueue<number>();

// // decorator
// @Component @ngModule
// function component(target: Function) {
//     target.prototype.id = 100;
// }
// @component
// class Emplyee {
//     _id: number;
//     constructor(id: number) {
//         this._id = id;
//     }
//     printId() {
//         console.log(this._id);
//     }
// }
// const e = new Emplyee(123);
// e.printId();

// function course(name: string) {
//     const coursename = name + "test";

//     return function (target: Function) {
//         target.prototype.coursename = coursename;
//     };
// }

// @course("Dio")
// class Person {
//     coursename: string;

//     printcourse() {
//         console.log(this.coursename); // name + test
//     }
// }
// const p = new Person();
// p.printcourse();

console.log();
