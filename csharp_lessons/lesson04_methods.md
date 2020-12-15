# Week 5: Methods

**Table of Contents**
- [What is a method?](#what-is-a-method)
- [Creation](#creation)
- [Calls](#calls)
  - [Scope](#scope)
- [Parameters and Arguments](#parameters-and-arguments)
- [Return Values](#return-values)
  - [Recursion](#recursion)
  - [Lambda Operator](#lambda-operator)
- [Predefined Methods](#predefined-methods)
  - [String Methods](#string-methods)
  - [Math Methods](#math-methods)

## What is a method?
  
A method is a **subroutine** linked with a particular object. This means that they describe a particular behavior of said object and that when called, it moves to the block of the function's defined statements in the control flow, similarly to how you can have labels and gotos, discussed in the first lesson. Methods, however, differ from labels/gotos in that upon the method's final statement being executed, it moves back to where it was in the control flow.
  
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

For all cases which can be used within the scope of what we have learned, we are also required to follow `public` keyword with a keyword called `static`. We will go over what this keyword does in a later lesson.

```cs
public static void PrintHello() {
  System.Console.WriteLine("Hello!");
}
```

## Calls

A method **call** causes each of the statements inside to be run. A call is done with the following syntax: `name();`

```cs
public class Program {
  public static void Main(string[] args) {
    SayHello();
    System.Console.Write(".");
    SayHello();
  }

  public static void SayHello() {
    System.Console.Write("Hello");
    System.Console.Write("Goodbye");
  }
}
```
Prints: `HelloGoodbye.HelloGoodbye`

### Scope

Every variable has what is known as a **scope**. A scope is a description of where the variable can be accessed. Variables created inside a method is has a **local scope**, meaning that they cannot be accessed **globally**, globally referring to the entirety of the **global scope**, which includes absolutely every part of your project. These local variables scope is specific to the methods they are in, meaning that a variable in one method cannot be accessed from any other method.

## Parameters and Arguments

Sometimes, one may need to utilize data from the function that a method was called in within your self-defined method's body. This is done with **parameters**, which are placeholder variables that are given an **argument**, which is the value put inside said placeholder, scoped within the method being called. The syntax for creating a parameter is to put `type parameterName` inside the parentheses of the method's declaration and the syntax for passing an argument is to put the argument's value inside the parethesis of the method call. In order to have multiple parameters, you do the same process, but seperate the parameters and arguments with commas. It's conventional for the parameter to be named in camelCasing rather than PascalCasing like other variables (which is approximately the same apart from the first letter being lowercase).

```cs
public class Program {
    public static void Main(string[] args) {
        RepeatedPrint("Hello", 5u); // prints "Hello" 5 times
        RepeatedPrint("Goodbye", 2u); // prints "Goodbye" 2 times
    }

    public static void RepeatedPrint(string str, uint times) { // prints {str} {times} times 
        for(int i = 0; i < times; i++)
            System.Console.WriteLine(str);
    }
}
```

## Return Values

In some cases, one may need a value from inside the method to be accessible to where the method was called, typically the result of some sort of operation or algorithm. We do this using a **return statement**, which terminates the function and sets the value to a following value. The syntax for this statement is `return {value};`. Note that in void, you can also just do `return;` if you need to preliminarily terminate the method (almost always on a particular condition). It's also important that the return-type as mentioned above of the method is the type that you are returning. If a method is not `void`, there must be a return statement that will run in every case, and if it is void, there must be no value that follows any of the return statements.

```cs
public static void Main(string[] args) {
    string Repeated = Repeat("Hello", 5u); // prints "Hello" 5 times
    System.Console.WriteLine(@"""Hello"" 5 times = {0}", Repeated);
}

public static string Repeat(string str, uint times) { 
    StringBuilder Result = new StringBuilder();

    for(int i = 0; i < times; i++)
        Result.Append(str);
    return Result.ToString();
}
```

### Recursion

It's also worth noting that a method can call and use the return value of itself. This functions as it would as calling it from outside the method.

```cs
public static void Main(string[] args) {
    int Fact = Factorial(6);
    System.Console.WriteLine(@"6! = {0}", Fact);
}

public static int Factorial(int number) { 
    return number == 0 ? 1 : number * Factorial(--number);        
}
```

### Lambda Operator

In cases where the only statement of a method is its return, it's typical to use a slightly different, more concise syntax. That syntax is `modifier type name(parameterList) => returnValue`. Everything except the body remains the same, while the body itself is changed from `{ return x; }` to just `=> x;`. 

```cs
public static void Main(string[] args) {
    int Fact = Factorial(6);
    System.Console.WriteLine(@"6! = {0}", Fact);
}

public static int Factorial(int number) => 
    number == 0 ? 1 : number * Factorial(--number);
```

## Predefined

In C# there are many **predefined methods**. A predefined method is a method that is added by the compiler without the programmer needing to do anything. Here is a list of some common predefined methods:

### String Methods

\*Note that \<string\> is to be replaced by an actual string.

* string: **\<string\>.ToLower()** - Takes no parameters and returns <string> with all uppercase letters made lowercase
* string: **\<string\>.ToUpper()** - Takes no parameters and returns <string> with all lowercase letters made uppercase
* bool: **\<string\>.Contains()** - Takes a substring and returns true if the substring is inside <string>, otherwise returns false.
* bool: **\<string\>.StartsWith()** - Takes a substring and returns true if <string> starts with the substring, otherwise returns false.
* bool: **\<string\>.EndsWith()** - Takes a substring and returns true if <string> ends with the substring, otherwise returns false.
* string: **\<string\>.Trim()** - Takes no parameters and returns <string> with all leading and trailing whitespace removed.
* int: **\<string\>.IndexOf()** - Takes a substring and returns the index of where substring first appears the string. If it isn't in the string, returns -1.
* int: **\<string\>.LastIndexOf()** - Takes a substring and returns the index of where substring last appears the string. If it isn't in the string, returns -1.
* string: **\<string\>.Substring()** - Takes an int startIndex and returns everything from that index on OR takes an int startIndex and int length and returns {length} characters starting at the startIndex.
* string[]: **\<string\>.Split()** - Takes a string seperator and returns a string array of <string> divided by said seperator. So `"1.2.3".Split(".")` is `new string[] {"1", "2", "3"}`
* string: **string.Join()** - Takes a string seperator and does the reverse of spit. So `string.Join(".", new string[] {"1", "2", "3"})` is `"1.2.3"`. If the seperator is ",", it can be left out as it is implied.

### Math

* int: **Math.Round()** - Takes a double/float/decimal and returns it rounded.
* int: **Math.Floor()** - Takes a double/float/decimal and returns it floored (rounded down).
* int: **Math.Ceiling()** - Takes a double/float/decimal and returns it floored (rounded up).
* decimal: **Math.Sqrt()** - Takes a number and returns its square root.
* decimal: **Math.Cbrt()** - Takes a number and returns its cube root.
* {number}: **Math.Abs()** - Take a number and returns its absolute value ({number} as the type is determined by what you put as a parameter)
* {number}: **Math.Max()** - Takes two numbers of the same type and returns the greater of the two ({number} as the type is determined by what you put as a parameter)
* {number}: **Math.Min()** - Takes two numbers of the same type and returns the lesser of the two ({number} as the type is determined by what you put as a parameter)
* double: **Math.Exp()** - Takes a number a returns euler's constant (e) raised to the power of said number
