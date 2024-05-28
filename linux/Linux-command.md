# Linux Commands


* __ls__
   - Command: `ls` - List
   - Description: Lists files and directories in the current directory.
   - Example: `ls` - list the files in the current directory
   - Example: `ls -ltr` - list files in long format sorted by time in reverse order.
   - Example: `ls -ld` - list the current directory in long format
   - ls / - list the root directory
   - ls /home - list the home directory
   - ls -l - list the files in long format, including permissions, number of links, owner, group, size, and time of last modification.
   - ls -l /home - list the files in the home directory in long format.
   - ls - l /media - list the files in the media directory in long format.
   - Example: `s -l ..` - list the files in the parent directory in long format. 
   - Example: `ls -a` - list all files, including hidden files.
   - Example: `ls -l | wc` - count the number of files in the current directory.
   - Example: `ls - l | wc -l` - count the number of lines in the output of the 'ls -l' command.
   - Example: `ls -ltr /usr/lib/jvm/` - list the files in the /usr/lib/jvm/ directory in long format sorted by time in reverse order.
   - Example: `ls -l /etc/alternatives` - list the files in the /etc/alternatives directory in long format.


* __mkdir__
   - Command: `mkdir [directory]`
   - Description: Creates a new directory.
   - Example: `mkdir new_directory`

* __cd__
    - Command: `cd [directory]`
    - Description: Changes the current directory.
    - Example: `cd Documents`
    - `cd ~` - change to the home directory
    - `cd ..` - change to the parent directory

* __pwd__
   - Command: `pwd` - Print working directory
   - Description: Prints the current working directory.
   - Example: `pwd`


* __chmod__
    - chmod - change file mode
    - Command: `chmod [permissions] [file]`
    - Description: Changes file permissions.
    - Example: `chmod +x script.sh` - add execute permission to the file 'script.sh' for the owner user
    - Example: `chmod 755 script.sh` - set the file 'script.sh' to have read, write, and execute permissions for the owner user, and read and execute permissions for the group and others
    - Example: `chmod u+x script.sh` - add execute permission to the file 'script.sh' for the owner user only
    - Example: `chmod go-rw file.txt` - remove read and write permissions for the group and others from the file 'file.txt'
    - Example: `chmod a+rwx script.sh` - add read, write, and execute permissions for all (owner, group, and others) to the file 'script.sh'
    - chmod 777 file.zip - give full permissions to everyone (user, group, other) on the file file.zip


* __df__
    - Command: `df` - Disk Free
    - Description: Displays disk space usage.
    - Example: `df -h` - display disk space usage in human-readable format

* __su__
    - Command: `su [username]`
    - Description: Switches to another user account.
    - Example: `su user2` - switch to the user account 'user2
    - Example: `su - user2` - switch to the user account 'user2' with a login shell

* __unzip__
    - Command: `unzip [file.zip]`
    - Description: Extracts files from a zip archive.
    - Example: `unzip file.zip` - extract files from the file.zip archive
    - Example: `unzip -d /path/to/destination file.zip` - extract files from the file.zip archive to the specified destination directory
    - Example: `unzip -l file.zip` - list the contents of the file.zip archive without extraction


* __clear__
   - Command: `clear`
   - Description: Clears the terminal screen.
   - Example: `clear`



* __cp__
   - Command: `cp [source] [destination]`
   - Description: Copies files or directories.
   - Example: `cp file.txt /path/to/destination`
   - Example: `cp test2.txt newfile.txt`
   - Example: `cp /path/to/source/file.zip .` - copy the file.zip from the source directory to the current directory
   - Example: `cp /path/to/source/* /path/to/destination/` - copy all files from the source directory to the destination directory
   - Example: `cp -r /home/mahedee/temp . ` - copy the temp directory from the /home/mahedee directory to the current directory


* __mv__
   - Command: `mv [source] [destination]`
   - Description: Moves or renames files or directories.
   - Example: `mv file.txt new_location/`
   - Example: `mv *.txt notes` - move all files with .txt extension to the notes directory
   - Example: `mv testfile.txt ..` - move the file to the parent directory
   - Example: `mv ../testfile.txt .` - move the file from the parent directory to the current directory
   - Example: `mv file1.txt file2.txt` - rename file1.txt to file2.txt


* __rm__
   - Command: `rm [file]`
   - Description: Removes (deletes) files.
   - Example: `rm old_file.txt`
   - Example: `rm file.txt file2.txt` - remove multiple files
   - Example: `rm -r directory` - remove a directory and its contents. Means remove a non empty directory


* __rmdir__
   - Command: `rmdir [directory]`
   - Description: Removes an empty directory.
   - Example: `rmdir empty_directory`

* __touch__
   - Command: `touch [file]`
   - Description: Creates an empty file or updates the timestamp of an existing file.
   - Example: `touch new_file.txt`

* __nano__
    - Command: `nano [file]`
    - Description: Opens the nano text editor to edit a file.
    - Example: `nano file.txt`

* __cat__
    - Command: `cat [file]`
    - Description: Concatenates and displays the content of a file.
    - Example: `cat file.txt`
    - Example: `cat /etc/passwd` - display the contents of the /etc/passwd file
    - Example: ` cat /etc/group` - display the contents of the /etc/group file
    - Example: `cat file.txt | sort | uniq` - display the unique lines in the file.txt sorted by alphabetical order
    - Example: `cat /etc/hosts` - display the contents of the /etc/hosts file
    - Example: `cat /etc/os-release` - display the contents of the /etc/os-release file which contains information about the Linux distribution running on your system

* __trail__
    - Command: `tail [file]`
    - Description: Displays the last few lines of a file.
    - Example: `tail file.txt`
    - Example: `tail -f -100 application.log` - display the last 100 lines of the application.log file and continue to display new lines as they are added to the file
    - Example: `tail -100 applogfile  > newLogfile` - display the last 100 lines of the applogfile file and save them to a new file named newLogfile 
    - Example: `tail -f file.txt` - display the last 10 lines of the file 'file.txt' and continue to display new lines as they are added to the file
    - Example: `tail -n 20 file.txt` - display the last 20 lines of the file 'file.txt'
    - Example: `tail -f /var/log/messages` - display the last 10 lines of the /var/log/messages file and continue to display new lines as they are added to the file
    

* __echo__
    - Command: `echo [text]`
    - Description: Prints text to the terminal.
    - Example: `echo "Hello, Linux!"`

* __grep__
    - Command: `grep [pattern] [file]`
    - Description: Searches for a pattern in a file.
    - Example: `grep keyword file.txt` - search for the word 'keyword' in the file 'file.txt'
    - Example: ` ls -l | grep file` - search for the word 'file' in the output of the 'ls -l' command
    - Example: `cat file.txt | grep -v test1.txt` - display lines in file.txt that do not contain the word 'test1.txt'

* __chown__
    - Command: `chown [user]:[group] [file]`
    - Description: Changes the owner and group of a file.
    - Example: `chown user:group file.txt`

* __ps__
    - Command: `ps`
    - Description: Displays information about active processes.
    - Example: `ps aux`

* __kill__
    - Command: `kill [process_ID]`
    - Description: Sends a signal to terminate a process.
    - Example: `kill 1234`

* __man__
    - Command: `man [command]`
    - Description: Displays the manual page for a command.
    - Example: `man ls`



* __du__
    - Command: `du [directory]`
    - Description: Displays disk usage of files in a directory.
    - Example: `du -sh /path/to/directory`

* __tar__
    - Command: `tar [options] [archive_name] [files]`
    - Description: Creates or extracts tar archives.
    - Example: `tar -cvf archive.tar file1 file2`

* __which__
    - Command: `which [command]`
    - Description: Displays the path of a command.
    - Example: `which nano`, `which ls`

* __diff__
    - Command: `diff [file1] [file2]`
    - Description: Compares two files line by line.
    - Example: `diff file1.txt file2.txt`

* __free__
    - Command: `free`
    - Description: Displays the amount of free and used memory in the system.
    - Example: `free -h` - display memory usage in human-readable format
    - Example: `free -m` - display memory usage in megabytes

* __htop__
    - Command: `htop`
    - Description: Interactive process viewer.
    - Example: `htop` - run htop to view and manage processes

* __uptime__
    - Command: `uptime`
    - Description: Displays the system uptime and load average.
    - Example: `uptime` - show system uptime and load average

* __sudo__
    - Command: `sudo [command]`
    - Description: Executes a command with superuser privileges.
    - Example: `sudo dnf update` - update system packages with superuser privileges
    - Example: `sudo systemctl restart apache2` - restart the Apache web server with superuser privileges
    - Example: `sudo !!` - repeat the last command with superuser privileges
    - Example: `sudo adduser batman` - add a new user 'batman' with superuser privileges
    - Example: `sudo -iu oracle` - switch to the oracle user account with superuser privileges

* __dnf__
    - Command: `dnf [options] [command] [package]`
    - Description: Package manager for installing, updating, and removing software packages.
    - Example: `dnf install package_name` - install a package
    - Example: `dnf remove package_name` - remove a package
    - Example: `dnf update` - update all installed packages
    - Example: `dnf list` - list all installed packages



* __yum__
    - Command: `yum [options] [command] [package]`
    - Description: Package manager for installing, updating, and removing software packages.
    - Example: `yum install package_name` - install a package
    - Example: `yum remove package_name` - remove a package
    - Example: `yum update` - update all installed packages
    - Example: `yum list installed` - list all installed packages

* __systemctl__
    - Command: `systemctl [options] [command] [unit]`
    - Description: Controls the systemd system and service manager.
    - Example: `systemctl start service_name` - start a service
    - Example: `systemctl stop service_name` - stop a service
    - Example: `systemctl restart service_name` - restart a service
    - Example: `systemctl enable service_name` - enable a service to start at boot
    - Example: `systemctl disable service_name` - disable a service from starting at boot
    - Example: `systemctl status service_name` - view the status of a service
    - Example: `systemctl status httpd` - view the status of the Apache web server service
    - Example: `sudo systemctl disable httpd` - disable the Apache web server service from starting at boot (requires sudo)
    - Example: `sudo systemctl stop  httpd` - stop the Apache web server service (requires sudo)

* __iu__
    - Command: `su - [username]`
    - Description: Switches to another user account with a login shell.
    - Example: `su - user2` - switch to the user account 'user2' with a login shell
    - Example: `sudo -iu root` - switch to the root user account with a login shell (requires sudo)

* __dmesg__
    - Command: `dmesg`
    - Description: Displays the kernel ring buffer messages.
    - Example: `dmesg | less` - view the kernel messages page by page

* __head__
    - Command: `head [file]`
    - Description: Displays the first few lines of a file.
    - Example: `head file.txt` - display the first 10 lines of the file 'file.txt'
    - Example: `head -n 20 file.txt` - display the first 20 lines of the file 'file.txt'

* __tail__
    - Command: `tail [file]`
    - Description: Displays the last few lines of a file.
    - Example: `tail file.txt` - display the last 10 lines of the file 'file.txt'
    - Example: `tail -n 20 file.txt` - display the last 20 lines of the file 'file.txt'

* __Change your password__
    - Command: `passwd`
    - Description: Change your password
    - Example: `passwd` - change your password
    - Example: `sudo passwd batman` - change the password for the user 'batman' with super-user privileges

* __Remove user from the system__
    - Command: `userdel [username]`
    - Description: Remove a user from the system
    - Example: `userdel batman` - remove the user 'batman' from the system
    - Example: `sudo userdel batman` - remove the user 'batman' from the system with super-user privileges

* __Create a group and add user to the group__
    - Command: `groupadd [groupname]`
    - Description: Create a new group
    - Example: `groupadd developers` - create a new group 'developers'
    - Example: `usermod -aG developers batman` - add the user 'batman' to the group 'developers'
    - Example: `sudo groupdel developers` - remove the group 'developers' from the system with super-user privileges

* __history__
    - Command: `history`
    - Description: Displays the command history.
    - Example: `history` - display the command history
    - Example: `history 10` - display the last 10 commands in the history
    - Example: `!100` - repeat the command with the number 100 from the history

* __Output Redirection__
    - Command: `command > file`
    - Description: Redirects the output of a command to a file.
    - Example: `ls -l > file.txt` - save the output of the 'ls' command to a file 'file.txt'
    - Example: `ls -l >> file.txt` - append the output of the 'ls' command to a file 'file.txt'
    - Example: `echo "Hello, Linux!" > greeting.txt` - save the output of the 'echo' command to a file 'greeting.txt'
    - Example: `cat file1.txt file2.txt > combined_files.txt` - save the output of the 'cat' command to a file 'combined_files.txt'

* __find__
    - Command: `find [directory] -name [filename]`
    - Description: Searches for files in a directory.
    - Example: `find /home -name file.txt` - search for the file 'file.txt' in the /home directory
    - Example: `find / -name file.txt` - search for the file 'file.txt' in the root directory
    - Example: `find / -name "*.txt"` - search for all files with the .txt extension in the root directory
    - Example: `find / -type f -name "*.txt"` - search for all regular files with the .txt extension in the root directory
    - Example: `find / -type d -name "dir*"` - search for all directories starting with 'dir' in the root directory
    - Example: `find / -name *.log 2> /dev/null` - search for all files with the .log extension in the root directory and discard error messages using /dev/null
    - Example: `find -name Music` - search for the directory named 'Music' in the current directory
    - Example: `find /var/log -type f -name *.log -mtime -7` - search for log files modified in the last 7 days in the /var/log directory
    - Example: `sudo find /var/log -type f -name *.log* -mtime -7 -exec rm {} \;` - remove log files modified in the last 7 days in the /var/log directory with super-user privileges



* __To get host information__
    - Command: `hostname`
    - Description: Displays the system's hostname.
    - Example: `hostname` - display the system's hostname
    - Example: `hostname -I` - display the system's IP address
    - Example: `cat /etc/hosts` - display the contents of the /etc/hosts file

* __Variable__

    - Command: `variable_name=value`
    - Description: Assigns a value to a variable.
    - Example: `name="John"` - assign the value "John" to the variable 'name'
    - Example: `echo $name` - display the value of the variable 'name'
    - Example: `echo "Hello, $name"` - display the value of the variable 'name' in a greeting message
    - Example: `echo "Hello, ${name}"` - display the value of the variable 'name' in a greeting message
    - Example: MY_DIR="/etc";echo $MY_DIR; ls $MY_DIR; - assign the value "/etc" to the variable 'MY_DIR' and use it to display the contents of the /etc directory

* __env__
    - Command: `env`
    - Description: Displays the current environment variables.
    - Example: `env` - display the current environment variables
    - Example: `env | grep PATH` - search for the environment variable 'PATH' in the output of the 'env' command
    - Example: `export MY_VAR="Hello"` - set the environment variable 'MY_VAR' to the value "Hello"
    - Example: `echo $MY_VAR` - display the value of the environment variable 'MY_VAR'
    - Now you can check the value of the environment variable 'MY_VAR' using the `env` command.

* __lsblk__
    - Command: `lsblk`
    - Description: Lists information about block devices.
    - Example: `lsblk` - list information about block devices
    - Example: `lsblk -f` - list information about block devices with filesystem details
    - Example: `lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINT` - list specific columns of information about block devices
    - Example: `lsblk -a` - list all devices, including empty ones
    - Example: `lsblk -l` - list devices without tree format
    - Example: `lsblk -p` - list devices with the full path name
    - Example: `lsblk -n` - list devices without heading
    - Example: `lsblk -S` - list devices with SCSI information
    - Example: `lsblk -d` - list devices without children
    - Example: `lsblk -t` - list devices with topology information
    - Example: `lsblk -x` - list devices with XML output
    - Example: `lsblk -m` - list devices with major and minor numbers
    - Example: `lsblk -P` - list devices with key-value pairs
    - Example: `lsblk -J` - list devices with JSON output
    - Example: `lsblk -D` - list devices with discard information
    - Example: `lsblk -O` - list devices with extra information
    - Example: `lsblk -r` - list devices with raw output
    - Example: `lsblk -s` - list devices with serial number
    - Example: `lsblk -t` - list devices with topology information
    - Example: `lsblk -u` - list devices with UUIDs
    - Example: `lsblk -x` - list devices with XML output
    - Example: `lsblk -z` - list devices with size in bytes
    - Example: `lsblk -h` - list devices with human-readable output
    - Example: `lsblk -b` - list devices with size in bytes
    - Example: `lsblk -k` - list devices with size in kilobytes
    - Example: `lsblk -m` - list devices with size in megabytes
    - Example: `lsblk -g` - list devices with size in gigabytes

* __openssl__
    - Command: `openssl`
    - Description: OpenSSL command-line tool.
    - Example: `openssl version` - display the OpenSSL version
    - Example: `openssl help` - display the OpenSSL help message
    - Example: `openssl list -digest-commands` - list available digest commands
    - Example: `openssl list -cipher-commands` - list available cipher commands
    - Example: `openssl list -public-key-algorithms` - list available public key algorithms

## References
- [How to install htop on CentOS Linux 8](https://www.cyberciti.biz/faq/how-to-install-htop-on-centos-linux-8/) - htop is nothing but an interactive process viewer for CentOS Linux 8 system
- [How To Install the Apache Web Server on CentOS 8](https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-centos-8)
