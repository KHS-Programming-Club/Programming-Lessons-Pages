# DON'T USE PYTHON

# Week 4: Conditionals <!-- omit in toc -->

This week we're going over how to have your code make decisions. It will be able to, based on data, choose either to run something or not or between several options.

## Table of Contents <!-- omit in toc -->
- [DON'T USE PYTHON](#dont-use-python)
  - [Branches](#branches)
  - [If](#if)
    - [Else](#else)
    - [Else-If](#else-if)
  - [Boolean Operators](#boolean-operators)
  - [Ternary](#ternary)
  - [Switch](#switch)

## Branches

This original concept from our [first lesson](../c_lessons/lesson00_intro_to_programming.md) is brought out of theory and into real application here: branches. This concept says, in procedural programming, a program can decide between two or more sets of operations based on a condition (aka make a decision). Here's a more technical definition from Wikipedia: 

> A branch is an instruction in a computer program that can cause a computer to begin executing a different instruction sequence and thus deviate from its default behavior of executing instructions in order. Branch (or branching, branched) may also refer to the act of switching execution to a different instruction sequence as a result of executing a branch instruction. Branch instructions are used to implement control flow in program loops and conditionals (i.e., executing a particular sequence of instructions only if certain conditions are satisfied).
> 
> A branch instruction can be either an unconditional branch, which always results in branching, or a conditional branch, which may or may not cause branching depending on some condition. Also, depending on how it specifies the address of the new instruction sequence (the "target" address), a branch instruction is generally classified as direct, indirect or relative, meaning that the instruction contains the target address, or it specifies where the target address is to be found (e.g., a register or memory location), or it specifies the difference between the current and target addresses. — **[Branch (computer science)](https://en.wikipedia.org/wiki/Branch_(computer_science)), Wikipedia; Retrieved Nov 2020**

## If

The `if` statement is among the most important and universal parts of programming; appearing, in some form, in pretty much every language. Though there are minor differences in syntax, the functionality is the same. All this to say this knowledge transfers well to other languages and is essential for programming.

Let's take a look at an example if statement, then break down how it works:

```csharp
bool condition = true;

if (condition) {
  Console.WriteLine("Apparently condition is true");
}
```

1. `bool condition = true` - a variable of type boolean is delcared and set to true
2. `if (condition) {` - here's where the new stuff starts to come in; 
   1. the `if` keyword signified this is an if statement
   2. inside parenthesis is the condition statement (in this case it's a variable called condition); this tells the computer the *condition* under which the code will execute (ie. if the boolean is true it will and if it's false it won't)
3. `{ ... }` - these curly braces contain the code that will run if the *condition* is true; in this case it writes "Apparently conditon is true" to the console

In plain English an if statement like this would sound like: "If this is correct, then say 'Apparently condition is true'"; or, more generally, "if this then do that".

### Else

We can extend this concept of "if this then do that" to add "if this then do that, otherwise do this". In programming we use `else`, but otherwise this is very similar. An example `if-else` statement looks like this:

```csharp
bool condition = false;

if (condition) {
  Console.WriteLine("Apparently condition is true");
} else {
  Console.WriteLine("Apparently condition is false");
}
```

In this example we've added an additional section that will run if the condition is false. In this case it is and the program would output: "Apparently condition is false".

### Else-If

This can be further extended to an **else-if** statement, which acts like another if statement but it will only be considered if the initial if is false. Using the plain-English sentence from earlier, this would sound something like, "if this then do that, otherwise if that then this".

```csharp
bool condition = false;
bool other_condition = true;

if (condition) {
  Console.WriteLine("Apparently condition is true");
} else if (other_condition) {
  Console.WriteLine("Apparently condition is false, but other condition is true");
}
```

These can be chained together in the format `if (...) {...} else if (...) {...} else if (...) {...}` and so on. We can also add an `else` statement onto the end, as seen in the following example.

```csharp
bool condition = false;
bool other_condition = true;

if (condition) {
  Console.WriteLine("Apparently condition is true");
} else if (other_condition) {
  Console.WriteLine("Apparently condition is false, but other condition is true");
} else {
  Console.WriteLine("Apparently both conditions are false");
}
```

## Boolean Operators

There are a number of **boolean operators** which are used to create more involved logic.

## Ternary

`conditon ? option1 : option2`

## Switch

*mention inline switch*