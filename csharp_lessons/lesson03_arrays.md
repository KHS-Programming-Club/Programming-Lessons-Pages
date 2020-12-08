# Week 5: Arrays and Loops <!-- omit in toc -->

**Table of Contents**
- [Array](#array)
  - [Definiton](#definiton)
  - [Accessing Values](#accessing-values)
  - [Jagged Arrays](#jagged-arrays)
  - [Multidimensional Arrays](#multidimensional-arrays)
- [Loops](#loops)
  - [While Loop](#while-loop)
  - [Do-While Loop](#do-while-loop)
  - [For Loop](#for-loop)
  - [Foreach Loop](#foreach-loop)

## Array

Arrays is essentially a "list" of values, all of the same type and with a predetermined length.

### Definiton

```csharp
int[] example_array = new int[5];
```

This creates an empty array, to be made of five integers.

* `int[]` - takes the familiar type definiton (`int`) and adds `[]` to note that this is an array of integers
* `example_array` - variable name, no change
* `new int[5]`
  * `new` - keyword noting a new instance of something (more on this next week with classes)
  * `int` - this is an integer array
  * `[5]` - set the length to five

Now actually storing values in the array:

```csharp
int[] example_one = new int[5] { 1, 2, 3, 4, 5 }; // or
int[] example_two = new int[] { 1, 2, 3, 4, 5 }; // automatically figures out length is five; or
int[] example_three = { 1, 2, 3, 4, 5 }; // shorthand for above method
```

It should also be noted that in the first example on the doc, items are assigned to the array, and all of those items are `0`. In such a scenario where an empty array is created, items of arrays that are of a reference type or nullable are given the default value of `null` and items that are not are given the value of `0` (or an equivalent of zero if it's not a number-type, such as `False` for booleans and the NULL character (U+0000) for chars).

### Accessing Values

Starting with a basic array from the last part:

```csharp
int[] example_three = { 1, 2, 3, 4, 5 };
```

To access a value from the array, simply use the folowing syntax `[i]` where i is the **index** of the item in the list that is desired (this starts from 0). Here's an example printing the third (index 2) element in the array:

```csharp
int[] example_three = { 1, 2, 3, 4, 5 };
//            Indices:  0  1  2  3  4
System.Console.WriteLine(example_three[2]); //> 3
```

### Jagged Arrays

Jagged arrays are arrays of arrays. That is an array containing arrays. This might look something like:

```csharp
int[][] jagged_array = {
  new int[] { 1, 2, 3 },
  new int[] { 84, 52, 61, 67 },
  new int[] { 10, 56 }
};
```

This array definition, like the first example on the doc, can be declared by supplying the size of the outermost array and leaving the innermost lengths indefinite. One key note of differentiation is that this is a true declaration as the innermost arrays are not given default values.
```cs
int[][] jagged_array = new int[3][];
```

To access a value on a jagged array, simply use `[i]` as before to get on of the arrays contained within; or `[i][j]` to access a value on one of these arrays (j, by convention, is used as a placeholder if i is unavailable and carries no other significance).

```csharp
int[][] jagged_array = {
  new int[] { 1, 2, 3 },
  new int[] { 84, 52, 61, 67 },
  new int[] { 10, 56 }
};

jagged_array[2]; // accesses the array at index 2, in this case { 10, 56 }

jagged_array[2][1] // accesses the value at index 1 within the array at index 2 on jagged_array, in this case 56
```

### Multidimensional Arrays

Multidimensional arrays are very much like matrices, that is they store values in multiple dimensions. Consider the following grid of numbers:

```
1 2 3
4 5 6
7 8 9
```

Each number could be said to have an x and y coordinate. For example, 6 is at (1, 2) given a start at the top left and begin counting at zero. A multidimensional array applies this concept to arrays.

```csharp
int[,] multidimensional_array = new int[2, 3];
```

This is the most basic form of creating an empty multidimensional array. There are two differences between the syntax for this and a basic array.

* `int[,]` - the single comma indicates this array has two dimensions; think of a coordinate pair like `(1, 2)` which has one comma
* `new int[2, 3]` - this declares what can be thought of as the width and height of the array

Note that arrays with more dimensions can exist, simply add more commas. 

Now let's recreate that grid of numbers from before in code:

```csharp
int[,] array2D = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

// print out the element at 1, 2 (should be 6)
System.Console.WriteLine(array2D[1, 2]);
```

A similar example in three dimensions

```csharp
int[,,] array3D = {
  { { 1, 2, 3 }, { 4, 5, 6}, { 7, 8, 9 } },
  { { 10, 11, 12 }, { 13, 14, 15 }, { 16, 17, 18 } },
  { { 19, 20, 21 }, { 22, 23, 24 }, { 25, 26, 27 } }
}
// would be new int[3, 3, 3]

// the value at the center of the "cube"
System.Console.WriteLine(array3D[1, 1, 1]); //> 14
```

## Loops

Loops are extremely useful, especially in the context of arrays. At their core, loops allow you to repeat a section of code multiple times.

### While Loop

This is the most basic kind of loop. As an example, let's say we want to add up all integers 1-10 inclusive:

```csharp
int i = 1;
int total = 0;

// while loop
while (i <= 10) {
  total += i; // adds i to total
  i++; // increments i
}
```

* `while` - notes this is a while loop
* `(i <= 10)` - condition under which the loop will continue (much like if statement that runs every time through the array)
  * it will continue to repeat through the loop until this is false
  * by traditon, i is used; if i is unavailable, j is the backup (these are not strict requirements but are *extremely* common)

Note that this can easily become an infinte loop if there's no way the condition will become false.

### Do-While Loop

This is almost identical to the while loop, but instead of checking the condition *then* executing the code, it runs the code then checks the condition before moving on to the next time though. This ensures the code will run at least once.

```csharp
int i = 1;
int total = 0;

do {
  total += i; // adds i to total
  i++; // increments i
} while (i <= 10);
```

Adapting the example from earlier, this will actually have the same result because of how the problem is set up. The most useful feature of a do-while is the guarentee it will run at least once.

### For Loop

For loops provide a level of simplification to a while loop. Instead of having to declare `int i = 0;`, the condition, and `i++` all separate, for loops combine all of these into the main statement. This is once again best explained by adapting the example:

```csharp
int total = 0;

for (int i = 0; i <= 10; i++) {
  total += i;
}
```

This will have the same result as the previous while and do-while loops, but is much more readable and concise.

### Foreach Loop

In C#, there is a special loop for looping through arrays that take off much of the strain of iterating through indexes. This loop is called the **foreach** loop and takes a placeholder into which it will put a particular value during each iteration. The syntax is `foreach(type variableName in arrayName)`. The typical naming-covention for foreach loops is `singular in plural` (e.g. `item in items`).

```cs
int[] numbers = {1, 7, 3, 8, 22};
int sum = 0;

foreach(number in numbers) {
  sum += value;
}
```
