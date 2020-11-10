# Printf Reference Sheet

*[Here's a complete reference sheet](https://www.cplusplus.com/reference/cstdio/printf/). As we progress through lessons we'll fill this one out to eventually contain all of the info that does.*

Printf is a built-in function we can use to print out text to the console. Here it is in it's most basic form:

```c
#include <stdio.h>

int main() {
  printf("Hello world!");
  puts("Hello world!"); // works exactly the same for simple strings
}
```

In this version, it simply prints out the given string (within double quotes).

## Format

The special features of printf come in when we want to insert values into the string, this is extremely useful for variables which we'll get to later. Here's an example of this in action:

```c
printf("You have %d unread emails\n", 20); // prints: You have 20 unread emails
```

`%d` is a special identifier telling printf to replace it with the data provideed after the string. In this example that's 20. `%d` is only one of many of these, it uses different ones for different types of data and formats. Here are the most common:

* `%c` - character
* `%C` - character in uppercase
* `%d` or `%i` - integer
* `%f` - decimal floating point
* `%s` - string
* `%S` - string in uppercase
* `%u` - unsigned number
* `\n` - goes to a new line (you'll usually end with this)

*note here that putting any of these (that contian text) in capital will convert the output to uppercase*

A few other ones you may find useful:

* `e` - scientific notation using "e"
* `E` - scientific notation using "E"
* `g` - uses the shorter of e or f
* `G` - uses the shorter of E or f

## More

`.number` is used to indicate the precision of the result. For integers (d, i, o, u, x, X) this is the minimum number of digits to be written. If the value written is shorter than the number of digits, zeros will be added to the begnning. For e, E, and f this is the number of decimal places to round to.

```c
prnttf("Exmaple %.3d\n", 44); // Prints: Example 044
printf("Example %.3f\n", 4.55555); // Prints: Example 4.556
```

*this document will be updated with additional info as needed*

## Examples

```c
printf("Hello %s! You have %d unread emails\n", "World", 20);
// Prints: Hello World! You have 20 unread emails
```

```c
printf("Goodbye %s! See you %s, %d day(s) from now.\n", "World", "Tuesday", 1);
// Prints: Goodbye World! See you Tuesday, 1 day(s) from now.
```
