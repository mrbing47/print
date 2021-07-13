# str-temp

This is a tool used to process and insert data inside a string in a proper format according to your needs.
<br>
This uses template strings to make processing and storing flexible. Use `{}` in your string and pass the variable as parameters or pass them later by calling the returned function.

## Basic

-   The program adds the data to the brackets based on a predefined flow. The function will take it's first argument as the
    **template string** and then the parameters.
-   The parameters, except Objects, are added to an array. If a multi dimensional array is passed as parameter, it flattens into a single dimensional array and is added with the other array containing data parameters.

-   The function will first place Index and Key values in the brackets and then it will fill the Empty or Comment brackets. The function will place the values from `left to right` brackets for the Empty or Comment brackets.

-   The called function will return a function until all the brackets are
    occupied. If all the brackets are occupied, the resultant string will be returned. If you want to see the current state of the string, [Refer this Section](#curr).

## Comments

You can use comments in `{}` by writing the text between `~` for better readability.

```Javascript
str("{~message~} {~name~}", "Hello", "Node");
>> Hello Node

str("{~resource~} {}", "Memory", "Stack Overflow");
>> Memory Stack Overflow
```

## Escape Character

To escape the brackets and prevent yourself from errors, use `{{` and `}}`
and the code will treat the brackets like normal characters.

```Javascript
str("{~message~} {~name~} {{🙃}}", "Hello", "Node");
>> Hello Node {🙃}
```

## Referencing

-   ### Empty

You can simply use `{}` where you want to substitute data in the string. The data will be picked and placed from `left to right`. Brackets with comments **( eg. {\~message\~}` )** will be also **treated as empty brackets**.

```Javascript
str("{} {} {} {}", "A")("B", "C", "D")
>> A B C D
```

-   ### Indexes

Sometimes the order of passed elements does not match their order in the string. Use Indexes starting from **`0`** and the function will replace the passed Strings or Data from `left to right` as if they are in an array.

```Javascript
str("{1} {3} {2} {0}", "A", "B", "C", "D")
>> B D C A
```

-   ### Keys

You can also pass valid JS `keys` between the `{}` and then pass the JS Object to
with the same keys and their values. Values will be overridden from `left to right`.

```Javascript
str("{message} {name}", { message: "Hello", name: "Nathan" })
>> Hello Nathan
```

Here you can also pass the key as a nested object.

```Javascript
str("{message} {info.name.first}", { message: "Hello", info: { name: {
    first: "Nathan",
    last: "Drake"
}}})
>> Hello Nathan
```

With the nested objects, there will be arrays and you will be able to pass those array indexes too.

```Javascript
str("{fruit[1]} is tasty 🤤.", { fruit: [ "Banana", "Apple", "Orange"] })
>> Apple  is tasty 🤤.
```

-   ### Arrays

Pass the array rather together rather than passing the parameters individually. The values are extracted from the array and sorted out in 2 portions, ie. Strings and Numbers; and Objects. The Strings are then added from `left to right`. The Objects are evaluated in the same way.

```Javascript
str("{1} {3} {2} {0}", ["A", ["B", "C"]], ["D"])
>> B D C A
```

<br>

Try combining it with [chalk.js][chalk] to see the different possibilities.

## <a name="curr"></a>Current State

Current state of the string in returned function:

```Javascript
const message = str("{~message~} {~name~}", "Hello");
console.log(message.string);
>> Hello {~name~}
```

Current state of unused brackets in returned function:

```Javascript
const message = str("{~message~} {~name~}", "Hello");
console.log(message.unused);
>> [ { unused: '{~name~}', index: 6 } ]
```

## Examples

### CODE

![Code Example][str_example]

<br>

### OUTPUT

![Console Output][str_console]

## Note

In the case of strings like

```Javascript
str("{5}")
```

You will need to pass **6 arguments** where the **first 5 arguments** will be _dumped_ and the **6th one** will be placed in the string and the resultant will be returned.

[chalk]: https://www.npmjs.com/package/chalk
[str_example]: https://raw.githubusercontent.com/mrbing47/str-temp/master/media/str_temp_example.png
[str_console]: https://raw.githubusercontent.com/mrbing47/str-temp/master/media/str_temp_console.png
