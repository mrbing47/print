# PrintIn

This is a tool used to print data in a proper format according to your needs.
<br>
This use template strings to make printing flexible. Use `{}` in your string and pass the variable as parameters or pass them later by calling the returned function.

## Comments

---

You can use comments in `{}` by writing the text between ~ for better readability.

```Javascript
print("{~message~} {~name~}", "Hello", "NODE");
>> Hello NODE

print("{} {~resource~}", chalk.red("ERROR)", "MEMORY");
>> Hello NODE
```

## Escape Character

---

To esacpe the brackets and prevent yourself from errors, use `{{` and `}}`
and the code will treat the brackets like normal characters.

```
print("{~message~} {~name~} {{🙃}}", "Hello", "NODE");
>> Hello NODE {🙃}
```

## Referencing

---

-   ### Indexes

Sometimes the order of passed elements does not match their order in the string. Use Indexes starting from **`0`** and the function will replace the passed Strings or Data from `left to right` as if they are in array.

-   ### Keys

You can also pass valid JS `keys` between the `{}` and then pass the JS Object to
with the same keys and their values. Values will be overridden from `left to right`.

-   ### Arrays

Pass the array rather together rather than passing the parameters individually. The values are extracted from the array and sorted out in 2 portions, ie. Strings and Numbers; and Objects. The Strings are then added from `left to right`. The Objects are evaluated in the same way.

<br>

Try combining it with [chalk.js][chalk] to see the different possiblities.

## Examples

---

<br>

![Code Example][printin_example]

<br>

![Console Output][printin_console]

[chalk]: https://www.npmjs.com/package/chalk
[printin_example]: ./media/printin_example.png
[printin_console]: ./media/printin_console.png

## Note

```
- The functions will be returned until all the brackets are occupied.
```

To view what is the current state of the string in returned function, use

```Javascript
const message = print("{~message~} {~name~}", "Hello");
console.log(message.string);
>> Hello {~name~}
```
