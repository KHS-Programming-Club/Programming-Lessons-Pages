# Week 4: Conditionals <!-- omit in toc -->

This week we're going over how to have your code make decisions. It will be able to, based on data, choose either to run something or not or between several options.

## Table of Contents <!-- omit in toc -->
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
  System.Console.WriteLine("Apparently condition is true");
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
  System.Console.WriteLine("Apparently condition is true");
} else {
  System.Console.WriteLine("Apparently condition is false");
}
```

In this example we've added an additional section that will run if the condition is false. In this case it is and the program would output: "Apparently condition is false".

### Else-If

This can be further extended to an **else-if** statement, which acts like another if statement but it will only be considered if the initial if is false. Using the plain-English sentence from earlier, this would sound something like, "if this then do that, otherwise if that then this".

```csharp
bool condition = false;
bool other_condition = true;

if (condition) {
  System.Console.WriteLine("Apparently condition is true");
} else if (other_condition) {
  System.Console.WriteLine("Apparently condition is false, but other condition is true");
}
```

These can be chained together in the format `if (...) {...} else if (...) {...} else if (...) {...}` and so on. We can also add an `else` statement onto the end, as seen in the following example.

```csharp
bool condition = false;
bool other_condition = true;

if (condition) {
  System.Console.WriteLine("Apparently condition is true");
} else if (other_condition) {
  System.Console.WriteLine("Apparently condition is false, but other condition is true");
} else {
  System.Console.WriteLine("Apparently both conditions are false");
}
```

## Boolean Operators

There are a number of **boolean operators** which are used to create more involved logic.

## Ternary

`conditon ? option1 : option2`

## Switch

Often, you may only need to do your conditions based on the value of a single expression or variable, preforming different actions depending on the value of that single item. In these cases, rather than a chain of `if-else-if` statements, we use what is known as a `switch`. The syntax to create a switch statement is `switch(x) { } ` with x as the value you want to test. You then fill the block (`{ }`) with what are known as cases. The syntax for a case is `case y: /* what you want done if the value of x is y*/`. It's also important to put a `break` at the end of the case, which is done by just typing the word `break;` with the semicolon.

```cs
const int min = 1;
const int max = 3;

const int x = getIntFromAlgorithm(min, max); // note that getIntFromAlgorithm is for example, such method doesn't actually exist among C#'s predefined methods

switch(x) {
  case 1:
    System.Console.WriteLine("This is the smallest possible value");
    System.Console.WriteLine(1);
    break;
  case 2:
    System.Console.WriteLine("This is a middle-value");
    break;
  case 3:
    System.Console.WriteLine("This is the largest possible value");
    break;
}
```

This code is preferable to, yet also equivalent to in terms of end result:

```cs
int min = 1;
int max = 3;

int x = getIntFromAlgorithm(min, max);

if(x == 1) {
  System.Console.WriteLine("This is the smallest possible value");
  System.Console.WriteLine(1);
} else if(x == 2)
  System.Console.WriteLine("This is a middle-value");
else if(x == 3)
  System.Console.WriteLine("This is the largest possible value");
```

(Note that one should never use if-statements where a switch would fit; this is just to demonstrate the concept)

**Default**

After your tests, one may want to do an action if none of the cases were met. This would be analogous to the final `else` in an `if-else-if-else` statement. This is done by instead of saying `case whatever:`, just saying `default:` after all of the cases (the default case MUST be at the very end).

```cs
switch(x) {
  case min:
    System.Console.WriteLine("This is the smallest possible value");
    System.Console.WriteLine(1);
    break;
  case max:
    System.Console.WriteLine("This is the largest possible value");
    break;
  default:
    System.Console.WriteLine("It appears that x is a middle value or x out of range {0}-{1}", min, max);
    break;
}
```

*Note that from here on out, repl does not support what we are going to do. You will need to use a proper IDE or <a href="https://rextester.com/" target="_blank">this</a>.*

**When**

In some cases, there may not be a single value that you're looking for, but rather, a range of values. You can see this in our range example, where we do not have a way to differentiate between what's inside and outside the range unless by repeating cases over and over again, which is impossible if you don't know both `max` and `min`. The way to have a case without a calcified value is to `case {type} n when {boolean expression using n}`. Note that `n` can be replaced with anything as long as you also use the name n is replaced with in the boolean expression as well.

```cs
const int min = getMinFromMethod();
const int max = getMaxFromMethod();
const int x = getValueFromAlgorithm(); // Again, nsone of these methods exists predefined

switch(x) {
    case min:
        System.Console.WriteLine("This is the smallest value in-range");
        break;
    case max:
        System.Console.WriteLine("This is the largest value in-range");
        break;
    case int n when n > max:
        System.Console.WriteLine("This value is not in-range as it is too big");
        break;
    case int n when n < min:
        System.Console.WriteLine("This value is not in-range as it is too small");
        break;
    default:
        System.Console.WriteLine("This value is between {0} and {1}", min, max);
        break;
}
```

This can be used with any type of data, not just `int`s.

```
System.Console.Write("Say something: ");
string input = Console.ReadLine();
string output;

switch (input) {
    case "":
        output = "You didn't say anything";
        break;
    case "hi":
        output = "Hi";
        break;
    case "bye":
        output = "Sad to see you go :(";
        break;
    case string n when n.ToLower() == n: // n.ToLower() is n with all capital letters made lowercase, meaning that (n.ToLower() == n) will be true if there are no capital letters in n. We'll talk more about ToLower and methods like it in a later lesson
        output = $"{n} has no uppercase letters";
        break;
    default:
        output = "I've got nothing to say";
        break;
}

System.Console.WriteLine(output);
```
(Note that this example will not run in Rextester as Rextester does not support console input)

**Switch Expressions**

This example would be cleaner if didn't have all of the `output =`s and `break`s. This can be done with a **switch expression** (not to be confused with the switch *statement*, which we learned above). Switch expressions are switch statements that will yield a piece of data, meaning that we can set a variable to the switch itself. This is done by putting the value you want to test before the `switch` keyword with the parentheses removed, replacing the `:`s with `=>`s, removing the `break`s and instances of the word `case` and making sure to give a piece of data to the cases rather than a series of statements. If there's a `default` case, the word `default` needs to be replaced with an `_`.

```cs
System.Console.Write("Say something: ");
string input = Console.ReadLine();
string output = input switch {
    "" => "You didn't say anything",
    "hi" => "Hi",
    "bye" => "Sad to see you go :(",
    string n when n.ToLower() == n => $"{n} has no uppercase letters",
    _ => "I've got nothing to say"
};

System.Console.WriteLine(output);
```
