# Week 0: Introduction to Programming

## Brief Introduction to Programming

Composed of a collection of statements
- Statements are executed from top to bottom
- Branches - Decides between two or more sets of operations based on a condition
- Labels and Gotos
  - Label - Marks a location in code
  - Goto - Goes to that location

## Brief Introduction to Memory Usage
- Volatile - Will go away; e.g. variables store in your program
  - Used if data is specific to the specific instance of running the program
- Non-volatile - Won’t go away; e.g. data stored in a database
  - Used if you want to access when you rerun the program or if you want to protect data in the case of a crash

## Comments

Used to add notes into your code, though often used to "disable" sections of code.

```c
#include <stdio.h>

// Single-Line Comment

int main() {
  return 0;
}

/*
  This
  is a
  Multi-Line Comment
*/
```

Example of being used to disable code:

```c
#include <stdio.h>

int main() {
  // return 0;
}
```

Note here that the code is simply treated as if it were a comment (like a note) and the computer completely ignores it when running your code. In this specific example, excluding `return 0;` does cause an issue, but it serves as a good example of comments.

## Printing to the Console with Printf (Hello World)

```c
#include <stdio.h>

int main() {
  printf("Hello World!\n");
  return 0;
}
```