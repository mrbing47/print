# Print.JS

This is a tool used to print data in a proper format according to your needs.
<br>
This use template strings to make printing flexible. Use `{}` in your string and pass the variable as parameters or pass them later by calling the returned function.

## Comments

---

You can use comments in `{}` by writing the text between ~ for better readability.

```Javascript
print("{~message~} {~name~}", "Hello", "NODE");
>> Hello NODE
```

## Escape Character

---

To esacpe the brackets and prevent yourself from errors, use `&{` and `&}`
and the code will treat the brackets like normal characters.

```
print("{~message~} {~name~} &{🙃&}", "Hello", "NODE");
>> Hello NODE {🙃}
```

## Referencing

---

-   ### Indexes

Sometimes the order of passed elements does not match their order in the string. Use Indexed starting from **`0`** and the function will place the string from `left to right` as if they are in array.

-   ### Keys

You can also pass `keys` with between the `{}` and then pass the JS Object to
with the same keys and their values. Values will be evaluated from `left to right`.

-   ### Arrays

Pass the array rather together rather than passing the parameters individually. The values are extracted and sorted out in 2 portions, ie. Strings and Numbers; and Objects. The Strings are then added from `left to right` and `top to bottom` row if the array is nested. The Objects are evaluated in the same way.

<br>

Try combining it with [chalk.js][chalk] to see the different possiblities.

## Examples

---

<br>

![Code Example][print_example]
<br><br>
![Console Output][print_console]

[chalk]: https://www.npmjs.com/package/chalk
[print_example]: ./media/print_example.png
[print_console]: ./media/print_console.png

## Note

```
The functions will be returned until all the brackets are occupied.
```

To view what is the current state of the string in returned function, use

```Javascript
const message = print("{~message~} {~name~}", "Hello");
console.log(message.string);
>> Hello {~name~}
```
