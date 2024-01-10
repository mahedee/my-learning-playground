Certainly! Here's a list of common shell script commands along with brief comments:

```bash
#!/bin/bash
# This is a sample shebang line specifying the shell to use.

# Variable assignment
variable_name="Hello, World!"
# Assigns the string "Hello, World!" to the variable_name variable.

# Echo command
echo $variable_name
# Prints the value of the variable_name variable to the console.

# Conditionals - if statement
if [ $variable_name == "Hello, World!" ]; then
  echo "Variable is set to Hello, World!"
fi
# Checks if the variable_name is equal to "Hello, World!" and prints a message accordingly.

# Loops - for loop
for i in {1..5}; do
  echo $i
done
# Prints numbers 1 through 5 using a for loop.

# Command substitution
current_date=$(date)
# Executes the 'date' command and stores the result in the current_date variable.

# Functions
function greet {
  echo "Hello from the function!"
}

greet
# Declares a function named greet and calls it to print a message.

# User input
read -p "Enter your name: " user_name
echo "Hello, $user_name!"
# Prompts the user to enter their name and prints a greeting using the entered name.

# File operations - creating a file
touch new_file.txt
# Creates an empty file named new_file.txt.

# File operations - appending to a file
echo "This is a line of text." >> new_file.txt
# Appends the specified text to the end of the new_file.txt.

# Command-line arguments
echo "Script name: $0"
echo "First argument: $1"
# Prints the script name and the first command-line argument.

# String manipulation
string="Hello, World!"
echo ${string:0:5}
# Prints the first 5 characters of the string variable.

# Arithmetic operations
num1=5
num2=3
sum=$((num1 + num2))
echo "Sum: $sum"
# Performs arithmetic addition and prints the result.

# Exit status
command_that_may_fail
if [ $? -eq 0 ]; then
  echo "Command executed successfully."
else
  echo "Command failed."
fi
# Checks the exit status of a command and prints a message accordingly.
```

Note: This is a basic set of commands, and there are many more advanced commands and features available in shell scripting. The examples provided here are meant to illustrate the use of each command and are not complete scripts.