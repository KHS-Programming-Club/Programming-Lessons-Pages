<script src="https://github.com/KHS-Programming-Club/khs-programming-club.github.io/blob/main/onload_script.js"></script>

# Week 3: Console Input and More Operators
In this lesson we are going to be learning how to receive input from the console and some more operators to manipulate data. This means that this will be the first lesson in which we are able to make dynamic programs, that is, programs that's output is contingent on the action of the user.

### Table of Contents
* [Reading Console Input](#reading-console-input)
* [More Operators](#more-operators)
* [StringBuilder Class](#stringbuilder-class)

**What is a method?**

We will be learning many new methods in this section so it would be prudent to go over what a method actually is. A method is a block of reusable code. This code may take in a set of particular inputs and return an output, typically based on the input. Methods are connected to a particular object and perform a task based on that object. A language contains various built-in methods to perform core functionality. Among these are the console output and conversion methods we learned last week.

## Reading Console Input

[ ^ Back to Top ^ ](#table-of-contents)

There are three methods with which one may receive input from the console.

**System.Console.Read**

This is the most basic, though least used way of getting input from the console. This method returns an integer which is equal to the unicode for the character of the key you pressed. A table of all the possible values can be seen <a href="http://www.personal.psu.edu/jxm22/unicode/" target="_blank">here</a>. (What is pressed can be seen in the column without a label and the returned result in the column labelled `#`). This can be converted into a more readable format through casting it to a character.

```cs
using System;
 
class Program {
   public static void Main(string[] args) {
      Console.Write("Echo: ");
 
      int echo = Console.Read();
      Console.WriteLine("\nYou pressed {0}", (char) echo);
   }
}
```

**System.Console.ReadLine**

This method lets the user type text until pressing the enter key and returns a string of everything typed prior to pressing enter. This is most similar to what you’d expect from an input box.

```cs
using System;
 
class Program {
   public static void Main(string[] args) {
      Console.Write("Type a sentence: ");
 
      string sentence = Console.ReadLine();
      Console.WriteLine("\"{0}\" is a nice sentence.", sentence);
   }
}
```

**System.Console.ReadKey**

This method is used to await a key press and return an object with information about this key and press event. The most important of these is the Key property which is accessed with `System.Console.ReadKey().Key` and returns a value from `System.ConsoleKey`. When printed to the console, it appears as the name of the key. Keys from this enumeration (a term we will explore in a later lesson) can be directly accessed with the key’s name and the dot operator. For example, `System.ConsoleKey.A` represents the A key and `System.ConsoleKey.Enter` represents the enter key. A list of all of the different keys can be viewed from <a href="https://docs.microsoft.com/en-us/dotnet/api/system.consolekey?view=net-5.0" target="_blank">here</a>. This will become applicable once we learn more C#, but at the moment, values can be viewed through in console output by their names. The object of ReadKey can be put in a variable through the `System.ConsoleKeyInfo` type. It may also be worth noting that this is very important for those interested in game development as getting key input on the window in Unity follows the same structure.

```cs
using System;
 
class Program {
   public static void Main(string[] args) {
      Console.Write("Press the enter key: ");
 
      ConsoleKeyInfo key = Console.ReadKey();
 
      Console.WriteLine("{0} should match {1}", key.Key, ConsoleKey.Enter);
   }
}
```

## More Operators

[ ^ Back to Top ^ ](#table-of-contents)

**Increment and Decrement**

If a number of any type is stored in a variable, you can increase the variable’s value by one with the syntax `variableName++;`. A similar operator does the reverse, decreasing the variable’s value. It uses the syntax `variableName--;`. These expressions are the equivalent of `variableName = variableName + 1;` but it should be noted that it’s always better to use this shorthand syntax.

```cs
int x = 5;
x++;
System.Console.WriteLine(x); // 6
x--;
x--;
System.Console.WriteLine(x); // 4
```

**Prefix Incrementing**

`++` and `--` can be used inline with another statement to both utilize its value and change it at the same time. What we just learned here is known as postfix incrementing. This means that when we use the value, the original value is used. The alternative to this is using prefix incrementing, which uses the incremented value. The syntax for this is `++variableName;` and `--variableName;`. When it makes no difference which of these to use, one defaults to postfix.

```cs
float x = 5;
byte y = 99;
 
System.Console.WriteLine(x++); // 5
System.Console.WriteLine(x); // 6
System.Console.WriteLine(--y); // 98
System.Console.WriteLine(y); // 98
```

**Unary Minus**

Like in math, you don’t need to multiply a variable by -1 through the multiplication operator to make it negative. Also like in math, this is done though `-variableName`. You cannot, however, put a number in front of a variable to multiply it’s value (this causes a syntax error). You can also precede the variable with `+`, but this doesn’t do anything for positive numbers. It should be noted that if you put the `-` before a variable name, it will *always* be negative, even if it was negative to begin with, and the same goes for `+`. This means that `-x` in C# is more like the equivalent of `-|x|` in math rather than just `-x`.

```cs
int x = -5;
System.Console.WriteLine(-x); // -5
```

```cs
int x = 5;
System.Console.WriteLine(3x); // Error
```

```cs
int x = -5;
System.Console.WriteLine(+x); // 5
```

**Compound Assignment**

For each of the arithmetic operators (`+`,`-`,`*`,`/`), you can change the variable by an operand with the syntax `variableName (operator)= operand;`. For example, `multiplicand *= 3;` is the same as `multiplicand = multiplicand * 3;`.

```cs
int x = 5;
x += 3;
System.Console.WriteLine(-x); // -8
x /= 2;
System.Console.WriteLine(x); // 4
```

**String Concatenation**

You can append the text of a string to another with the plus operator using the syntax `string1 + string2`. Since it uses the same operator as in mathematical addition, you can also use `+=` on strings. When concatenating strings representing words, it’s important to remember that concatenation does not add a space, so you’ll need to do that yourself. In order for the plus operator to represent concatenation, only one of the addends needs to be a string.

```cs
System.Console.WriteLine("Hello, " + "world!"); // Hello, world!
 
string sentence = "This is";
sentence += " a sentence"
 
System.Console.WriteLine(sentence + "!!!"); // This is a sentence!!!
 
System.Console.WriteLine(1 + "2" + 3 + 4); // 1234
```

**Verbatim String Literals**

In C#, you have the escape character, which can be used to make the string render part of a string as it was written as well as change certain characters into different characters. This character means that what was put in the string may not necessarily match what’s computed exactly. In order to make the string interpret things as they were written, you must precede the string’s quotes with the `@` symbol.

```cs
string file1 = "C:\\users\\Cabine\\Desktop\\file1.txt";
string file2 = @"C:\users\Cabine\Desktop\file2.txt";
 
string instruction1 = "You use \\n for a new line";
string instruction2 = @"You use \t for a tab";
 
System.Console.WriteLine(file1); // C:\users\Cabine\Desktop\file1.txt
System.Console.WriteLine(file2); // C:\users\Cabine\Desktop\file2.txt
System.Console.WriteLine(instruction1); // You use \n for a new line
System.Console.WriteLine(instruction2); // You use \t for a tab
```

**String Interpolation**

In some cases, you may want to concatenate in a way that is a bit clearer as to what the end behavior of the string will be. This is done by putting a dollar sign before the string’s quotes and placing curly braces where you want a piece of information inserted in the string, then, in the string, you can insert data as though it wasn’t in a string at all.

```cs
System.Console.Write("What's your name? ");
string name = System.Console.ReadLine();
 
System.Console.Write("How many years old are you? ");
int age = System.Convert.ToInt32(System.Console.ReadLine());
 
System.Console.Write("How many days until your birthday? ");
int days = System.Convert.ToInt32(System.Console.ReadLine());
 
System.Console.WriteLine($"{name} will be {age} in {days} days. This is equal to {days / 30} * 30 + {days % 30} days til {name}'s birthday.");
```

## StringBuilder Class

[ ^ Back to Top ^ ](#table-of-contents)

In C#, strings are stored as an immutable object. This means that there is no way to actually change the object, only to create a new object based on that original object. This takes up a significant amount of time in memory, so if there’s ever a case in which many different changes will need to be made, it can be quite taxing. In this case, we will use the StringBuilder class. This class also has methods which give extra functionality to string manipulation. The syntax to create one of these is `System.Text.StringBuilder variableName = new System.Text.StringBuilder();`. You can also put a string in the parentheses to give the string an initial value. The value of the string is retrieved by doing `variableName.ToString()`. You can use the methods by typing `variableName.methodName(value(s));`

```cs
System.Text.StringBuilder builder = new System.Text.StringBuilder("Default");
System.Console.WriteLine(builder.ToString()); // Default
```

**Append**

Appends another string to the end of the StringBuilder, much similar to `+=` on normal strings.

```cs
System.Text.StringBuilder builder = new System.Text.StringBuilder("Default");
builder.Append("? Not anymore!");
System.Console.WriteLine(builder.ToString()); // Default? Not anymore!
```

**AppendFormat**

Does the same thing as Append, but this uses the formatting syntax of `System.Console.WriteLine`.

```cs
System.Text.StringBuilder builder = new System.Text.StringBuilder("Default");
string exclamation = "Not anymore";
builder.AppendFormat(" {0}! {2} + {3} = {1}", exclamation, 3 + 4, 3, 4);
System.Console.WriteLine(builder.ToString()); // Default? Not anymore! 3 + 4 = 7
```

**Insert**

Each character of a string has an index, which represents it’s position in the string starting at `0`. For example, the `'e'` in `"Hello"` has an index of `1`. The insert method inserts a string starting at a supplied index with the syntax `variableName.Insert(index, stringToInsert).`

```cs
System.Text.StringBuilder builder = new System.Text.StringBuilder("Hello!");
builder.Insert(5, ", world");
System.Console.WriteLine(builder.ToString()); // Hello, world!
```

**Remove**

Removes a certain number of characters starting a particular index. It’s syntax is `variableName.Remove(startingIndex, numberOfCharsToRemove);`.

```cs
System.Text.StringBuilder builder = new System.Text.StringBuilder("Hello, world!");
builder.Remove(5, 7);
System.Console.WriteLine(builder.ToString()); // Hello!
```

**Replace**

Replaces all indexes of a substring with another substring from the StringBuilder. The syntax is `variableName.replace(toReplace, toReplaceWith).`

```cs
System.Text.StringBuilder builder = new System.Text.StringBuilder("Hello, world! Hello and Goodbye!");
builder.Replace("Hello", "Hi");
System.Console.WriteLine(builder.ToString()); // Hi, world! Hi and Goodbye!
```
