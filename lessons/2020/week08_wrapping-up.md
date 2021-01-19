# Week 8: More on Objects <!-- omit in toc -->

**Table of Contents**
- [Static](#static)
- [Destructor](#destructor)
- [Intefaces](#intefaces)
- [Enums](#enums)
- [Method Overloading](#method-overloading)
- [Operator Overloading](#operator-overloading)
- [Structs](#structs)

## Static

The properties that we learned in the previous lesson were always connected to the particular object. Meaning that if one changed, it would not affect the property in other instances of the class. Sometimes, we may wish to have properties that apply to the class itself rather than particular instantiations. This is done with the **static** keyword between the access modifier and the type. It's accessed outside the class by doing `ClassName.PropertyName` and accessed within the class the same as normal properties (except that it can *never* have the this keyword attached). If the static property is assigned outside a method, this assignment will only take place once prior to any instantiations.

```cs
class User {
  public static int Count = 0;
  public int ID;
  public string Name;

  public User(String Name) {
    this.Name = Name;
    ID = count;
    count++;
  }
}

class Program() {
  public static void Main(string[] args) {
    string[] Names = {"Linus", "Roberta", "Kyle", "Surayya", "Nina", "Terri", "Layton"};
    User[] Users = new User[Names.Length];
    
    for(int i = 0; i < Users.Length; i++) {
      Users[i] = new User(Names[i]);
      System.Console.WriteLine(User.Count);
    }
    
    foreach(User user of Users)
      System.Console.WriteLine($"{user.Name} is number ${user.ID + 1} of ${User.Count}");
  }
}
```

## Destructor

Destructors, like constructors, are methods that are called automatically. Destructors differ in that instead of being called when the object is instantiated, it's called when the object is destroyed, which happens automatically once the object becomes unreachable. The syntax for a destructor is `~ClassName() { ... }`. A destructor does not take any parameters or access modifiers.

```cs
class Computer {
  public Computer() {
    System.Console.WriteLine("Power on");
  }
  
  public void Print(string str) {
    System.Console.WriteLine(@"Printing ""{0}""...", str);
  }
  
  ~Computer() { // Destructor
    System.Console.WriteLine("Power off");
  }
}

class Program() {
  public static void Main(string[] args) {
    Computer computer = new Computer(); // Power on
    computer.Print("Hello, World!"); // Printing "Hello, World!"...
  } // Power off
}
```

## Intefaces

Interfaces are a form of object that can be seen as a completely abstract class. They cannot have their own instantiation and all properties and methods are abstract. They are  used to create a blueprint for classes of a particular characteristic. Their syntax in creation is the same as a normal class, except instead of the `class` keyword, we use the `interface` keyword. They are **implemented** using the same syntax as inheritence i.e. with a colon. Unlike with inheritence, you may implement multiple interfaces, seperating the class names with commas. If you are to implement an interface and extend a parent class onto the same child class, you do as you would with multiple implementation and put the parent class at the beginning of the list.

interface Login {
  public void ConnectDB();
}

interface Field {
  public void GenerateUI();
}

abstract class Authentication {
  public void Authenticate(String usernameAttempt, String passwordAttempt, String correctUsername, String correctPassword) {
    if(correctUsername == usernameAttempt && correctPassword == passwordAttempt)
      System.Console.WriteLine("Welcome!");
    else
      System.Console.WriteLine("Invalid Credentials");
  }
}

class LoginField : Authentication, Login, Field {
  public void ConnectDB() {
    // ...
    System.Console.WriteLine("Connected to Database");
  }
  
  public void GenerateUI() {
    // ...
    System.Console.WriteLine("Generated User Interface");
  }
}

## Enums

Enums are a type of object which denote a group of possibilities as constants within a specific category. This type of object does not take properties nor methods, but they do take instantiations in their own way. The enum itself acts as the type while the data inside the enum act as the value for a variable. The syntax for an enum is `enum Name { COMMA_SEPERATED_LIST };`. The values themselves are access through `Name.LIST_ITEM`.

```cs
using System;

enum Direction { UP, DOWN, LEFT, RIGHT, STOPPED };

class Player {
  Direction dir;
  
  public Player() {
    dir = Console.ReadKey().Key switch {
      ConsoleKey.W => Direction.UP,
      ConsoleKey.A => Direction.LEFT,
      ConsoleKey.S => Direction.DOWN,
      ConsoleKey.D => Direction.RIGHT,
      _ => Direction.STOPPED
    };
  }
}

class Enemy {
  Direction dir = Direction.LEFT;
}
```

```cs
enum Months { JANUARY, FEBUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER };
```

Enums values also have their own indeces. By default, it's just like an array: 0, 1, 2 etc. You can override values by putting an equals sign and an overriden index next to it. Without an override, values will always be one above the previous item, even if the previous item was overriden. Indeces can be accessed through casting.

```cs
enum WeekDaysInTheMonth {
  SUNDAY = 29,
  MONDAY, // 30
  TUESDAY, // 31
  WEDNESDAY = 1,
  THURSDAY, // 2
  FRIDAY, // 3
  SATURDAY // 4
};

class Program {
  public static void Main(string[] args) {
    System.Console.WriteLine((int) WeekDaysInTheMonth.THURSDAY);
    System.Console.WriteLine((WeekDaysInTheMonth) 30);
  }
}
```

## Method Overloading

Method overloading is when two distinct methods of the same name are distinguished via their parameter types. Which method is called is determined by the data that is put into it.

```cs
class Analysis {
  public int Compare(String a, String b, String c) {
    System.Console.WriteLine("Method #1 has been called");
  
    int matches = 0;
    bool[] Comparisons = {a == b, a == c, b == c};
    
    foreach(bool Comparison in Comparisons)
      matches++;
    
    return matches;
  }
  
  public int Compare(int a, int b, int c) {
    System.Console.WriteLine("Method #2 has been called");
  
    return a + b - c;
  }
}

class Program {
  public static void Main(string[] args) {
    Analysis Analysizer = new Analysis();
  
    Analysizer.Compare("Test", "Test", "Not Test"); // Method #1 has been called
    Analysizer.Compare(5, 2, 7); // Method #2 has been called
  }
}
```

## Operator Overloading

Throughout the previous lessons, we've learn many operators which can be applied to various data-types. Within our classes, we can create special methods which determine the result of an operation from class to class. The syntax for creating one of these methods is `public static RETURN_TYPE operator OPERATOR(INPUT_1_TYPE INPUT_1_NAME, INPUT_2_TYPE INPUT_2_NAME) { ... }` inside the appropriate class. Then, you can perform the operation as though your class was a predefined type.

```cs
class Person {
  public int ActionsPerformed = 0;
  public string Name;

  public Person(string Name) {
    this.Name = Name;
  }

  public void Do(int ActionCount) {
    ActionsPerformed += ActionCount;
  }

  public override string ToString() {
    return $"Person: \n\tName: {Name}\n\tActions Performed {ActionsPerformed}";
  }

  public static Person operator + (Person p1, Person p2) {
    Person Result = new Person($"{p1.Name} and {p2.Name}");
    Result.ActionsPerformed = p1.ActionsPerformed + p2.ActionsPerformed;
    return Result;
  }

  public static int operator - (Person p1, Person p2) {
    return System.Math.Abs(p1.ActionsPerformed - p2.ActionsPerformed);
  }
}

class Program {
  public static void Main(string[] args) {
    Person John = new Person("John");
    John.Do(500);

    Person Bob = new Person("Bob");
    Bob.Do(20);

    System.Console.WriteLine(John - Bob);
    System.Console.WriteLine(Bob + John);
  }
}
```

## Structs

Structs are another type of object very similar to classes. Their biggest divergences are that
1. they are stored as a value-type rather than a reference-type
2. They do not support inheritence.
3. Once the are declared, it is instantiated, even if there is no definition
4. All properties are given a default value (following the same rules as array-contents) if the struct itself is manually instantiated
5. It takes a semicolon
6. It cannot have a default constructor

Structs work well when representing a thing and when representing something very simple. The entirety of a struct, conceptually, should revolve around its properties. Structs also differ from classes in that they may not have a default constructor. 

```cs
struct Books {
   public string title;
   public string author;
   public string genre;
   public int isbn;
};
```

```cs
struct Coordinates {
  public int x;
  public int y;
  public int z;
}

class Program {
  public static void Main(string[] args) {
    Coordinates origin = new Coordinates();
    System.Console.WriteLine(origin.x); // 0

    Coordinates origin2;
    System.Console.WriteLine(origin2.x); // Error

    Coordinates point3;
    point3.x = 4;
    point3.y = 12;
    point3.z = -1;
    System.Console.WriteLine(point3.x); // 4
  }
}
```
