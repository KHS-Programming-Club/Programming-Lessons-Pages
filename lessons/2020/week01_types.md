# Week 1: Types and Operators

## Variables

**Variable** - Used to store a piece of data in volatile memory; same as variables in algebra, except rather than being defined with a `let` or `:=`, it's just with `=`.

```c
// <type> <name>; Declaration
int count;

//<name> = <value>; Definition
count = 5;

// <type> <name> = <value>; Definition+Declaration
int count = 5;
```

**Declaration** - creates the variable, giving it space in memory but not setting a value (this can cause issues if you don't set a value)

**Definition** - sets the value of the variable

## Types

[Additional info on types](https://www.geeksforgeeks.org/data-types-in-c/)

There are several basic types:
* Integer (`int`) - exactly what it says, integer (number with no decimal places)
* Boolean (`_Bool` or `bool`) - can be `true` or`false` (1 or 0)
* Character (`char`) - stores a single character of text (in number form, [see here](https://en.wikipedia.org/wiki/ASCII))
* Float (`float`) - number with up to 7 decimal places
* Double (`double`) - number with up to 14 decimal places (*double* that of a float)
* Void (`void`) - literally nothing (has no value)

Here are some examples of variables with those types:
```c
int int_example = 5;
_Bool bool_example = 0; // see next section for more info on this
char char_example = 'q'; // is actually stored as 113
float float_example = 5.1111111;
double double_example = 5.11111111111111;
// void cannot be used for variables, we will come back to it when we get to functions
```

### Booleans

There's a bit more involved with booleans. By default, C only supports `_Bool` which can store a value of `1` or `0`. However, it includes a header file we can include caled `stdbool.h` (like `stdio.h`) that allows us to use `bool`, `true`, and `false`.

```c
#include <stdio.h>
#include <stdbool.h>

int main() {
  _Bool old_way = 0;
  bool new_way = true;
}
```

**Extra info:** Under the hood, `stdbool.h` simply defines:
* `bool` as `_Bool`
* `true` as `1`
* `false` as `0`

### Signed and Unsigned

**Signed** - this type of variable can store a positive or negative number, but has a slightly reduced range available.

**Unsigned** - this has a higher range, but can only store nonnegative values.

Numerical types are signed by default, but can also be unsigned with the modifier `signed`.

```c
signed int = 5; // this is the same as int
unsigned int = 5; // this is an unsigned int
```

### Long and Short

The modifiers `long` and `short` can be used to create an integer with more or less range, so it takes up a higher or lower amount of space.

```c
short int a = 32767; // Max value of a short int
int b = 2147483647; // Max value of a normal int
long int c = 9223372036854775807; // Max value of a long int
```

You can also have a `long long` int, which has double the number of bits as a long int.

## Operators

Now that we have variables, we can do some math with them. Here's a list of operators
* `+` for addition
* `-` for subtraction
* `*` for multiplication
* `/` for division
* `%` for remainder ([modulo or mod](https://en.wikipedia.org/wiki/Modulo_operation))

An example is defining some variables to the result of simple calculations:
``` c
int sum = 5 + 6; // 11
int difference = 7 - 3; // 4
int product = 5 * 2; // 10
int quotient = 40 / 2; // 20
int remainder = 40 % 3; // 1
```

C follows order of operations, so you are able to string a few calculations together:
```c
int sum = 5 + 6 / 3 - 2; // 5
```

### Overflow and Underflow

If a variable goes over the maximum or under the minimum value for its data type, it will go around to the other end of the range.

```c
int overflow_example = 2147483647 + 1; // this will be -2147483648
```

### Truncation

If you attempt to divide `5` by `2` and print it out with printf, you may notice that it prints out `2` and *not* `2.5`. This is because we're doing the opration with integers, which cannot store decimal numbers. It simply cuts off the decimal places before storing the result in a variable. To fix this we can change the variable to a  `float` or `double` and change *at least one of the numbers to a float*. A simple way to do this is to add `.0`:

```c
float a = 5.0 / 2; // 2.5
```

There's another way to do this called casting...

## Casting

You can manually convert between any two *numerical* types (int, long, double, char, long int, etc.) with casting. You put the type you want to convert to in parenthesis just before a number, it will convert to that type:

```c
(float) 5
```

You can also wrap an expression in parenthesis to convert the whole thing to that type

```c
(float)(5 / 2) // will still be 2 because the conversion is after it already completed the division operation
```

Applying this to our truncation problem from earlier:

```c
float a = (float) 5 / 2;
```

## Strings

**String** - a piece of text; different from a char in that it can store more, the same, or less than one character.

Strings in C are quite different from the "normal" way of doing things. We actually end up creating an array of chars (essentially a list, we'll get back to these in an upcoming lesson). To do this we add `[]` after the variable name to mark it as an array, then put the piece of text in **double** quotes rather than single.

```c
char string_example[] = "Hello!";
```

This can be printed out with the `puts` function:

```c
puts(string_example); // will print out "Hello!" without the double quotes
```
