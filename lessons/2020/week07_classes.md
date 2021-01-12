# Week 7: Classes <!-- omit in toc -->

**Table of Contents**
- [What is a Class](#what-is-a-class)
- [Properties and Methods](#properties-and-methods)
  - [Optional Parameters](#optional-parameters)
  - [This Keyword](#this-keyword)
- [Constructors](#constructors)
- [Inheritance](#inheritance)
  - [sealed](#sealed)
  - [Virtual and Override](#virtual-and-override)
  - [abstract](#abstract)
- [Access Modifiers](#access-modifiers)
  - [public](#public)
  - [private](#private)
  - [protected](#protected)
  - [internal](#internal)
- [Accessors and Mutators](#accessors-and-mutators)
- [Polymorphism](#polymorphism)

## What is a Class

A class is an abstract representation of a thing or pattern. It has things which are true for them, denoted with **properties**, and things which they have the pontential of doing, denoted with **methods**. **Objects** can be created, which are **instantiations** of the class, meaning that while a class is more abstract or representative, the object is a particular. A class is denoted with the keyword `class` (with a body) and is instatiated with the `new` keyword. Classes also must take the form of their own types (always reference types) which must be used in instantiation. This type is used to create a variable that stores the object.

```cs
class Dog {}

class Program {
  public static void Main() {
    Dog dog = new Dog();
  }
}
```

## Properties and Methods

We covered methods in the previous week. Properties work very similarily to methods, except that instead of representing a function, they represent data (just like a variable). The only difference in terms of declaration is that they must have an access modifier, which we'll discuss later, but for now, we'll use `public`. The properties and methods of a class should be things which hold categorically true for that which the class is representing.

Property examples:
```cs
class TimePeriod {
  public int Hours;
  public int Minutes;
  public int Seconds;
}
```

Method examples:
```cs
class TimePeriod {
  // converts the seconds to hours and returns an int
  public int GetHours() {
    return Seconds / 3600;
  }
}
```

```cs
class Dog {
  public String Color;
  public void MakeNoise(String noise) {
    System.Console.WriteLine($"The {color} dog says {noise}");
  }

  public void Bark() {
    makeNoise("Woof");
  }
}

class Program {
  public static void Main() {
    Dog dog = new Dog();
    dog.Color = "brown";
    dog.Bark();
    dog.MakeNoise("Growl");
  }
}
```

### Optional Parameters

Optional parameters are made by giving the parameter a default value that will be supplied if not supplied in the method call. This is done through putting an `=` and the default value beside the parameter's declaration.

```cs
class Pen {
  public String Owner;
  public void Write(String contents, String color = "black") {
    System.Console.WriteLine("{0} has written {1} in {2} ink", Owner, contents, color);
  }
}

class Program {
  public static void Main() {
    Pen pen = new Pen();
    pen.Owner = "John";
    pen.Write("Hello");
    pen.Write("Revenge", "Red");
  }
}
```

### This Keyword

There are two levels which the compiler will look when accessing a variable:
1. The **class-level** - Properties
2. The **method level** - Parameters and normal variables

In cases where there is a variable is in both of these levels, it will prioritize whatever is in the method-level. In such cases where you need to look into the class-level, you can still access the variable on the class-level using the **this** keyword. The this keyword tells the compiler to only look on the class level and the syntax is `this.VariableName`.

```cs
using System;

class Dog {
  public int AverageSpeed = 3;
  public bool CannotRun = false;

  public void Run() {
    int AverageSpeed = 20;
    
    if(CannotRun)
      Move(this.AverageSpeed);
    else
      Move(AverageSpeed);
  }
  
  public void Move(int AverageSpeed) =>
    Console.WriteLine(@"Dog moving at an average speed of: {0} mph
    Average walking speed: {1}", AverageSpeed, this.AverageSpeed);

  public void ChangeSpeed(int AverageSpeed) {
    this.AverageSpeed = AverageSpeed;
  }
}

class Program {
  public static void Main (string[] args) {
    Dog dog = new Dog();
    dog.Run();
    dog.ChangeSpeed(4);
    dog.CannotRun = true;
    dog.Run();
  }
}
```

## Constructors

Constructors are special methods used to "set up" up an instance of a class when it is first created. For example, let's create an instance of the `TimePeriod` class:

```cs
TimePeriod Lunch = new TimePeriod(1800);
```

The constructor is run when this is created and, in this case, it takes a parameter of the number of seconds that will be stored in the seconds property. Here's what the TimePeriod class looks like:

```cs
class TimePeriod {
  public int seconds;

  // Constructor
  public TimePeriod(int seconds) {
    this.seconds = seconds; // the this keyword comes in handy here
  }
}
```

A constructor must have the same name as the class and be set to `public` (more on this later).

## Inheritance 

Inheritance is the means by which we apply information and functionality from one class to another. With inheritence, you have a superclass, which is the base class, and a subclass, which is the new class that's taking from the base class and adding on to it. Typically, the subclass will be a more specific to less specific.

```cs
class Utensil {
  public String Color;
  public String Owner;

  public void Write(String contents) {
    System.Console.WriteLine(contents);
  }
}

class Pencil : Utensil {
  public String Color = "Grey";
  
  public void Erase() {
    System.Console.WriteLine("Contents have been erased");
  }
}

class No2Pencil : Pencil {
  public void TakeTest() {
    System.Console.WriteLine("Test has begun");
  }
}
```

### sealed

The sealed keyword is applied to class to indicate that it cannot be inherited from.

```cs
class A {}
class B : A {} // ERROR
```

### Virtual and Override

In order to override a member from a subclass, two keywords must be added. The first keyword that must be added is the **virtual** keyword in the superclass which indicated that the member can be overriden. The second is the **override** keyword on the subclass which indicates that it is actually being overridden.

```cs
class Greeter {
  public virtual void Greet() {
    System.Console.WriteLine("Greetings");
  }
}

class HelloSayer : Greeter {
  public override void Greet() {
    System.Console.WriteLine("Hello");
  }
}

class Program {
  public static void Main() {
    Greeter greet = new Greeter();
    HelloSayer hello = new HelloSayer();

    greet.Greet(); // Greetings
    hello.Greet(); // Hello
  }
}
```

### abstract

Abstract classes are the reverse of sealed classes. They can only be inherited from, but cannot themselves be instantiated. They also allow the class to contain abstract methods, which are methods that do not have a body and must have functionality given them in the subclass. 

```cs
abstract class Greeter {
  public abstract void Greet();
}

class HelloSayer {
  public void Greet() {
    System.Console.WriteLine("Hello");
  }
}

class Program {
  public static void Main() {
    HelloSayer Hello = new HelloSayer();
    Hello.Greet();

    Gretter Greet = new Greeter(); // Error
  }
}
```

## Access Modifiers

Access modifiers are used to set what parts of your program can access methods and/or properties

* **public:** Can be accessed by any other code (ex: `public int seconds`)
* **private:** Can be accessed by any code in the same class (ex: `private int seconds`)
* **protected:** Can be accessed by any code in the same class (ex: `protected int seconds`)
* **internal:** Can be accessed by any code in the same assembly (ex: `internal int seconds`)

### public

```cs
using System;

class Ink {
  public string color;

  public Ink(string color) {
    this.color = color;
  }
}

class Program {
  public static void Main() {
    Ink blue_ink = new Ink("blue");
    Console.WriteLine(blue_ink.color); // the color property can be accessed here because it is public
  }
}
```

### private

If we try the same example again with color being declared as `private`, it will not work because Main is not in the same class as the color property.

```cs
using System;

class Ink {
  private string color;

  public Ink(string color) {
    this.color = color;
  }
}

class Program {
  public static void Main() {
    Ink blue_ink = new Ink("blue");
    Console.WriteLine(blue_ink.color); // THIS WILL CAUSE AN ERROR
  }
}
```

*Instead an accessor can be used, see [Accessors and Mutators](#accessors-and-mutators).*

### protected

This is very similar to `private`, but derived classes can also access the properties.

```cs
using System;

class Ink {
  protected string color;

  public Ink(string color) {
    this.color = color; 
  }
}

class PenInk : Ink {
  getColor() {
    return this.color; // this would not work if color was private
  }
}

class Program {
  public static void Main() {
    PenInk blue_ink = new PenInk("blue");
    Console.WriteLine(blue_ink.getColor()); 
  }
}
```

### internal

This is virtually identical to public until you get into more advanced and larger projects.

*note: an assembly is a grouping of one or more files created during **compilation**, we haven't talked about these yet*
## Accessors and Mutators 

It can be very useful to have control over how a property is read from or updated. This can be done with `get` and `set`, and C# provides and excellent way to use these; essentially allowing us to write methods while still having the convenience of a property.

In the following `TimePeriod` class, we'll declare a private variable `_seconds` and the property `hours`, which will have a getter and setter.

```cs
class TimePeriod {
  private int _seconds;
  public int hours {
    get { return _seconds / 3600; }
    set {
      if (value < 0) // refuse to set if out of range, traditionally an "exeption" is "thrown", but he haven't gotten to that yet
        return;
      
      _seconds = value * 3600;
    }
  }
}

class Program {
  public static void Main() {
    TimePeriod t = new TimePeriod();
  }
}
```

The `value` keyword is used to represent the new value, in this case `24` from `t.hours = 24`.

## Polymorphism

Polymorphism has two main aspects:

 * An object of a derived class can be treated as an object of the parent class. For example, say we have a method that takes an object of a certain class (1) as a parameter. An object of a class (2) derived from said class (1) could also be passed as an argument. This actually changes the "run-time type" (what type the running program sees the object as).
 * Classes can define virtual methods that can be overriden in derived classes (*see [Virtual and Override](#virtual-and-override)*). With polymorphism, it is require to use the override keyword in the derived class' method to use the override versus the original method.

This is much easier to see in an example. First, let's define some classes:

```cs
using System;

public class Shape {
  public int width;
  public int height;

  public virtual void Draw() {
    Console.WriteLine("Drawing a shape");
  }
}

public class Circle : Shape {
  public override void Draw() {
    Console.WriteLine("Drawing a circle");
  }
}

public class Rectangle : Shape {
  public override void Draw() {
    Console.WriteLine("Drawing a rectangle");
  }
}
```

Now applying these classes to a polymorphism example:

```cs
class Program {
  // Example 1: Ractangle and Cricle can both be used where a shape is expected.
  public static void Main() {
    Shape[] Shapes = {
      new Rectangle(),
      new Circle()
    };

    // Example 2: the overriden draw method is called, rather than the base class
    foreach (Shape Shape in Shapes)
      Shape.Draw();

    /* Output:
      Drawing a rectangle
      Drawing a circle
    */
  }
}
```
