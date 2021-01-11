# Week 2: Introduction to C#
In this lesson, we will be switching programming languages and start C#. This will be the language that we stick with for the rest of the year.

## Math and Comments
Math operators and comments are the same in C# as they were in C

## Main Method
For now Program.Main will be like our main method in C in that it’s where we will put all our code and in that it will run immediately on the program’s execution. The `return 0;` will no longer be necessary.

**Namespace**

Depending on your editor, you may have seen `namespace {whatever you named the program}` at the top when creating your program. Namespaces are a useful way of organizing your classes into various groups. We will go back over in more detail once we talk about classes.

```cs
namespace CreativeProgramName { // Groups the program class in with the name of the program, signifying that it's fundamental to the program
    class Program { // Class with contains the Main method and potential data which the method will use 
        static void Main() { // Starting point of the program, runs immediately once the program is executed
            // All code we write will be in the place of this comment
            // Also note the lack of the "return 0;"
        } // Tells the program that there is nothing else inside the Main method
    } // Tells the program that there is nothing else inside the Program class
} // Tell the program that there is nothing else inside the CreativeProgramName namespace
```

## System.Console.WriteLine
* Like printf in C, this prints a string to the console
* Unlike printf, this automatically puts the `\n`
* Instead of using symbols such as %s or %d, you can put `{0}`, `{1}`, `{2}` into the string (nothing changes with types)
  * Each number corresponds to the order in which it’s put in the function, {1} can come before {0} in the template
* Allows you to directly put a string variable into the function

**System.Console.Write** - The exact same as System.Console.WriteLine except it does not automatically put the `\n` at the end

**Exampe 1**
```cs
class Program {
    static void Main() {
        System.Console.Write("Hello!");
        System.Console.WriteLine("Hi");
        System.Console.WriteLine("Bye");
        System.Console.Write("Bye Again");
    }
}
```
Prints
```
Hello!Hi
Bye
Bye Again
```

**Example 2**
```cs
System.Console.WriteLine("{0} + {1} = {2}", 8, 5, 8 + 5); // 8 + 5 = 13
System.Console.WriteLine("{2} {1} {0}", "Words", "are", "reverse"); // Reversed are words
```

## Using System
If you type `using System;` at the top of the program, whenever something is marked `System.something`, you can just type that something. So for example, instead of `System.Console.WriteLine`, you can just type `Console.WriteLine`. We will go into more detail of how `using` works later on.

```cs
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
```

## Data-Types
You can declare and define variables in the same way as in C. Below is a table of the different data-types and how they correspond to those in C:

<table>
<thead>
  <tr>
    <th>C#</th>
    <th>C</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td colspan="3" style="text-align: center;" align="center"><span style="font-weight:bold" align="center"><b>Value Types</b></span></td>
  </tr>
  <tr>
    <td align="center">bool</td>
    <td align="center">_Bool</td>
    <td align="center">Represents a bit or switch; can only take the values true and false</td>
  </tr>
  <tr>
    <td align="center">int</td>
    <td align="center">int</td>
    <td align="center">Number with no decimal</td>
  </tr>
  <tr>
    <td align="center">long</td>
    <td align="center">long int</td>
    <td align="center">Integer that can store larger values</td>
  </tr>
  <tr>
    <td align="center">float<sup>1</sup></td>
    <td align="center">float</td>
    <td align="center">Floating-point number (number that can have decimals)</td>
  </tr>
  <tr>
    <td align="center">double<sup>1</sup></td>
    <td align="center">double</td>
   <td align="center">Floats that can store even more decimal places</td>
  </tr>
  <tr>
    <td align="center">decimal<sup>1 2</sup></td>
    <td align="center">- Not in C -</td>
    <td align="center">Double that can store <i>even more</i> decimal places</td>
  </tr>
  <tr>
    <td align="center">byte<sup>3</sup></td>
    <td align="center">unsigned char</td>
    <td align="center">Number that can fit within 8 bits (0-255)</td>
  </tr>
  <tr>
    <td align="center">char<sup>3</sup></td>
    <td align="center">char</td>
    <td align="center">Single character</td>
  </tr>
  <tr>
    <td align="center">short</td>
    <td align="center">short int</td>
    <td align="center">Int that can only store small values</td>
  </tr>
  <tr>
    <td align="center">uint</td>
    <td align="center">unsigned int</td>
    <td align="center">Int that can only store non-negative values</td>
  </tr>
  <tr>
    <td align="center">ulong</td>
    <td align="center">unsigned long</td>
    <td align="center">Long that can only store non-negative values</td>
  </tr>
  <tr>
    <td align="center">ushort</td>
    <td align="center">unsigned short</td>
    <td align="center">Short that can only store positive values</td>
  </tr>
  <tr>
    <td align="center">sbyte<sup>2</sup></td>
    <td align="center">char</td>
    <td align="center">Byte that can store positive and negative values</td>
  </tr>
  <tr>
    <td colspan="3" align="center"><b>Reference Types</b></td>
  </tr>
  <tr>
    <td align="center">string</td>
    <td align="center">char[]</td>
    <td align="center">Piece of text</td>
  </tr>
</tbody>
</table>

1. Floats MUST be followed by the letter F, e.g. `float x = 4.2f;`. Doubles may be followed by the letter d and decimals should always (and in some cases must) be the letter m.
2. Decimals are numbers that can hold up to 29 decimal places
3. Bytes in C# are used when you would use a char in C numerically, whereas chars in C# are used where chars in C would be used as actual characters

Values which can be fit into a variable are the same as their corresponding C values. A reference of what can fit in the various C types can be found <a href="https://i.ibb.co/94457Tf/table.png" target="_blank">here</a> if you need a refresher.

The difference between reference and value types is how they are stored in memory. Value types directly store the data within its own memory space whereas reference types store an address (which we will speak more on later) to the data.

## Type Conversion and Casting
**Explicit conversions (casts)**

Conversions where the type to which the value is being converted must be specified in parentheses immediately prior to the value. You use an explicit conversion when any of the following criteria are met:
* You are converting from a data-type that can store a larger range of values to a smaller range of values (converting from a larger data-type to a smaller one)
* You are converting from a data-type that stores decimals to one that does not
* You are converting from a data-type that can store floating-point number with a higher precision
* You are converting from an unsigned type to a signed type or vise versa
* You are converting to a char

```cs
class Program {
    static void Main() {
        float x = 5.4f;
        int y = (int) x;
        
        long a = 5;
        int b = (int) a;
        
        ulong i = 9;
        long j = (long) i;
        
        int k = 180;
        char l = (char) k;
        
        System.Console.WriteLine(y); // 5
        System.Console.WriteLine(a); // 5
        System.Console.WriteLine(j); // 9
        System.Console.WriteLine(l); // '
    }
}
```

**Implicit Conversions**

Conversions which take place automatically. All you need to do is use the value in the place of something that takes what you want to convert it to. This occurs when all of the following conditions are met:
* It does not fit any of the criteria of an explicit conversion
* It uses solely value types as both the from and to
* It does not involve booleans in either the from or to

**Conversions with Helper Classes**

When a value can’t be converted through implicit or explicit conversion, you may still be able to convert it using a conversion method. This is done by placing the value you need to convert into a method designed for conversion to the type you want to convert. Most of these methods will be in System.Convert, which include (not a comprehensive list):
* ToBoolean - Converts to a boolean
* ToByte - Converts to a byte
* ToChar - Converts to a character
* ToDecimal - Converts to a decimal
* ToDouble - Converts to a double
* ToInt32 - Converts to an integer
* ToSByte - Converts to a signed byte
* ToString - Converts to a string
* ToUInt32 - Converts to an unsigned int

```cs
int x = 82;
double y = 0.25;
bool z = true;

string a = System.Convert.ToString(x); // "82"
double b = System.Convert.ToDouble(a); // 82d
bool c = System.Convert.ToBoolean(y); // true
string d = System.Convert.ToString(z); // "True"
```

## Constants
You can put the `const` modifier before the type to make it so that the variable cannot be changed after declaration. These are used for security.
* This means you *have to* assign a value at declaration

```cs
const int x = 5;
const int y; // Error
x = 7; // Error
```

## Null

Null is the value that represents the lack of any real value, serving as a sort of placeholder. For example, if you had a button on a form, but they clicked it without actually filling out said form, the values would be null. It’s mathematical equivalent would be an empty set.

```cs
string x = null;
```

**Nullables**

By default, the only types that can be assigned null are reference types, of which we’ve only learned one, the string.

To be able to make a value type null, you must declare it as a **nullable**. To declare a variable as a nullable, you place a question mark directly after the type name.

```cs
int x = null; // BAD
int? y = null; // GOOD
```

**Null-Coalescing Operator**

In some cases, you may want to use the value stored in a variable, but also have a default value in the case that said variable is null. This is done with the null-coalescing operator. This operator checks to see if the first value is null, and if it is, uses the second value, otherwise uses the first value. The syntax for this is `value1 ?? value2`.

```cs
string x = null;
System.Console.WriteLine(x ?? "Goodbye"); // Goodbye

string y = "Hello";
System.Console.WriteLine(y ?? "Goodbye"); // Hello

int? a = null;
System.Console.WriteLine((a ?? 5) + 7); // 12

int? b = 1;
System.Console.WriteLine((b ?? 5) + 7); // 8
```