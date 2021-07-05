# PrintIn

This is a tool used to print data in a proper format according to your needs.
<br>
This use template strings to make printing flexible. Use `{}` in your string and pass the variable as parameters or pass them later by calling the returned function.

## Comments

You can use comments in `{}` by writing the text between ~ for better readability.

```Javascript
print("{~message~} {~name~}", "Hello", "Node");
>> Hello Node

print("{~resource~} {}", "Memory", "Stack Overflow");
>> Memory Stack Overflow
```

## Escape Character

To esacpe the brackets and prevent yourself from errors, use `{{` and `}}`
and the code will treat the brackets like normal characters.

```Javascript
print("{~message~} {~name~} {{🙃}}", "Hello", "Node");
>> Hello Node {🙃}
```

## Referencing

-   ### Empty

You can simpy use `{}` where you want to substitute data in the string. The data will be picked and placed from `left to right`. Brackets with comments _( eg. {\~message\~} )_ will be also **treated as empty brackets**.

```Javascript
print("{} {} {} {}", "A")("B", "C", "D")
>> A B C D
```

-   ### Indexes

Sometimes the order of passed elements does not match their order in the string. Use Indexes starting from **`0`** and the function will replace the passed Strings or Data from `left to right` as if they are in array.

```Javascript
print("{1} {3} {2} {0}", "A", "B", "C", "D")
>> B D C A
```

-   ### Keys

You can also pass valid JS `keys` between the `{}` and then pass the JS Object to
with the same keys and their values. Values will be overridden from `left to right`.

```Javascript
print("{message} {name}", { message: "Hello", name: "Nathan" })
>> Hello Nathan
```

-   ### Arrays

Pass the array rather together rather than passing the parameters individually. The values are extracted from the array and sorted out in 2 portions, ie. Strings and Numbers; and Objects. The Strings are then added from `left to right`. The Objects are evaluated in the same way.

```Javascript
print("{1} {3} {2} {0}", ["A", ["B", "C"]], ["D"])
>> B D C A
```

<br>

Try combining it with [chalk.js][chalk] to see the different possiblities.

## Current State

Current state of the string in returned function:

```Javascript
const message = print("{~message~} {~name~}", "Hello");
console.log(message.string);
>> Hello {~name~}
```

Current state of unused brackets in returned function:

```Javascript
const message = print("{~message~} {~name~}", "Hello");
console.log(message.unused);
>> [ { unused: '{~name~}', index: 6 } ]
```

## Examples

### CODE

![Code Example][printin_example]

<br>

### OUTPUT

![Console Output][printin_console]

[chalk]: https://www.npmjs.com/package/chalk
[printin_example]: ./media/printin_example.png
[printin_console]: ./media/printin_console.png

## Note

```
The functions will be returned until all the brackets are occupied.
```

In the case of strings like

```Javascript
print("{5}")
```

You will need to pass **6 arguments** where the **first 5 arguments** will be _dumped_ and the **6th one** will be placed in the string.
