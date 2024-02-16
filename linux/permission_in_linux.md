## Permission in Linux file and directory

In Linux, file and directory permissions dictate who can read, write, and execute files or traverse directories. Permissions are granted separately for three categories of users: the file or directory owner, the group associated with the file or directory, and others (everyone else). 

Permissions are represented by a series of 10 characters: the first character denotes the type of file (whether it's a regular file, directory, symbolic link, etc.), and the next three sets of three characters represent permissions for the owner, group, and others respectively.

Here's a breakdown of each permission and an example:

1. **Read (r)**: Allows the file to be opened and read.
2. **Write (w)**: Allows modifications to the file, including writing new data or deleting existing content.
3. **Execute (x)**: For files, this permission allows execution of the file as a program. For directories, it allows accessing files and subdirectories within the directory.

Let's say we have a file named `example.txt` and a directory named `example_dir`.

1. **Viewing Permissions:**
```bash
ls -l example.txt
```
Output:
```
-rw-r--r-- 1 user group 1024 Feb 16 10:00 example.txt
```
Here, `-rw-r--r--` represents permissions. The first dash indicates that it's a regular file. The subsequent characters (`rw-`) indicate that the owner (`user`) has read and write permissions, the group (`group`) has read-only permissions, and others have read-only permissions.

2. **Changing Permissions:**
```bash
chmod u+x example.txt
```
This command adds execute permission to the owner of the file `example.txt`.

3. **Applying Permissions to Directories:**
```bash
ls -ld example_dir
```
Output:
```
drwxr-xr-x 2 user group 4096 Feb 16 10:00 example_dir
```
Here, `d` indicates it's a directory. `rwx` for the owner (`user`) means they have read, write, and execute permissions. `r-x` for the group means read and execute permissions but not write. `r-x` for others means the same.

4. **Changing Directory Permissions:**
```bash
chmod g-w example_dir
```
This command removes write permission for the group from the directory `example_dir`.

These are basic examples, and in practice, permissions can be finely tuned using octal representation or symbolic notation in the `chmod` command. Permissions play a crucial role in maintaining security and access control in Linux systems.