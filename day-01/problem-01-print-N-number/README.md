### Problem
Print numbers from 1 to N based on user input using JavaScript.

### Input
- User enters a number in the input field.

### Output
- Numbers from 1 to the entered value are displayed line by line inside a paragraph.

### Logic
1. Get the input value from the input field.
2. Convert the input value from string to number.
3. Run a `for` loop from 1 to the entered number.
4. Store each number in a variable as a string.
5. Update the DOM once after the loop.

### Concepts Used
- DOM selection
- Event listener
- `for` loop
- Type conversion (`Number()`)
- String accumulation

### What I Learned
- `input.value` always returns a string.
- Updating the DOM inside a loop overwrites the previous value.
- It is better to build the output first and then update the DOM once.
