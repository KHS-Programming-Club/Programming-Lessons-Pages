# Methods Reference

C# provides a plethora of built-in methods to assist in making programs, this is a comprehensive list (with examples) of some of the more commonly used of them.

Up to date with lesson **4**

All example code can be assumed to be within the main method as follows, unless otherwise specified:

```C#
static void Main() {
  // the code is here
}
```

## String Format



## Console

### Console.Write

**Description:** Writes the given string to the console

**Syntax:** `System.Console.Write(String)`

**Example:**
```C#
System.Console.Write("Hello World");
```

Output:
```
Hello World
```
Note there should be no new line at the end, if you use this twice the output will be as follows:
```
Hello WorldHello World
```

### Console.WriteLine

**Description:** Writes the specified data, followed by an end line (`\n`), to the console.

**Syntax:** `System.Console.WriteLine(String)`

**Example:**
```C#
System.Console.WriteLine("Hello World");
```
Output:
```
Hello World
```
*This one has a new line at the end*

## String

### String.Format

**Description:** Works like [printf](printf_info.md); given a string, it replaces certain "specifiers" with formatted data.

**Syntax:** `String.Format(String, Object)`

**Example:**
```C#
decimal temp = 20.4m;
string s = String.Format("The temperature is {0}°C.", temp);
Console.WriteLine(s);
```

Output:
```
The temperature is 20.4°C.
```
