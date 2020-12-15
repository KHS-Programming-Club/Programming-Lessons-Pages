# Week 5: Methods

**Table of Contents**
- [What is a method?](#what-is-a-method)
- [Creation](#creation)
- [Calls](#calls)
  - [Scope](#scope)
- [Parameters and Arguments](#parameters-and-arguments)
- [Return Values](#return-values)
  - [Lambda Operator](#lambda-operator)
- [Predefined](#predefined)
  - [String Methods](#string-methods)
  - [Math Methods](#math-methods)

## What is a method?
  
A method is a subroutine linked with a particular object. This means that they describe a particular behavior of said object and that when called, it moves to the block of the function's defined statements in the control flow, similarly to how you can have labels and gotos, discussed in the first lesson. Methods, however, differ from labels/gotos in that upon the method's final statement being executed, it moves back to where it was in the control flow.
  
![Method Control Flow](https://khs-programming-club.github.io/assets/images/method.png)

Methods also differ from gotos and labels in that they can take a number of inputs and return an output from and for outside the method.

## Creation

All methods in C# are structured in a manner much similar to the Main method. The required components are: an access modifier, return type, name, parameter list, and a body. These items are ordered as such to mirror:

```cs
modifier type name(parameterList) {}
```

What will be supplied for each of the aforementioned components
1. **Access Modifier:** We will be going over all of the different access-modifiers and how they work later on, but for now we will put the word `public` in place of the modifier.
2. **Return Type:** A return-type can be any of the types that we have gone over, including arrays, but they must have a corresponding return value, which we will discuss later on in this lesson, but for now we will use a new type, **void**, which indicates the lack of a return value.
3. **Name:** A method can be named anything that a variable can be, and follows the same naming conventions as variables as well.
4. **Parameter List:** We will be going over parameters later in the lesson, for now we will keep this space blank, which means that there are no parameters
5. **Body:** The body consists of the curly-braces and everything inside it. Inside the curly-braces goes all of the statements that you want to run upon calling the function. These statements can be any of what we've learned and follow the same syntax as what would be inside the Main method.

```cs
public void PrintHello() {
  System.Console.WriteLine("Hello!");
}
```

## Calls

A method call causes each of the statements inside to be run. A call is done with the following syntax: `name();`

```cs
public class Program {
  public static void Main(string[] args) {
    SayHello();
    System.Console.Write(".");
    SayHello();
  }

  public void SayHello() {
    System.Console.Write("Hello");
    System.Console.Write("Goodbye");
  }
}
```
Prints: `HelloGoodbye.HelloGoodbye`

### Scope

Every variable has what is known as a scope. A scope is a description of where the variable can be accessed. Variables created inside a method is has a local scope, meaning that they cannot be accessed globally, globally referring to the entirety of the global scope, which includes absolutely every part of your project. These local variables scope is specific to the methods they are in, meaning that a variable in one method cannot be accessed from any other method.

## Parameters and Arguments

Sometimes, one may need to utilize data from the function that a method was called in within your self-defined method's body. This is done with parameters, which are placeholder variables that are given an argument, or a value upon method call, scoped within the method being called. The syntax for creating a parameter is to put `type parameterName` inside the parentheses of the method's declaration and the syntax for passing an argument is to put the argument's value inside the parethesis of the method call. In order to have multiple parameters, you do the same process, but seperate the parameters and arguments with commas.

```cs
public class Program {
    public static void Main(string[] args) {
        RepeatedPrint("Hello", 5u); // prints "Hello" 5 times
        RepeatedPrint("Goodbye", 2u); // prints "Hello" 2 times
    }

    public void RepeatedPrint(string str, uint times) { // prints {str} {times} times 
        for(int i = 0; i < times; i++)
            System.Console.WriteLine(str);
    }
}
```

## Return Values
