# Linux Commands

* __pwd__
   - Command: `pwd` - Print working directory
   - Description: Prints the current working directory.
   - Example: `pwd`

* __ls__
   - Command: `ls`
   - Description: Lists files and directories in the current directory.
   - Example: `ls`
   - ls means list or list segments.
   - ls / - list the root directory
   - ls /home - list the home directory
   - ls -l - list the files in long format, including permissions, number of links, owner, group, size, and time of last modification.
   - ls -l /home - list the files in the home directory in long format.
   - ls - l /media - list the files in the media directory in long format.
   - Example: `s -l ..` - list the files in the parent directory in long format. 
   - Example: `ls -a` - list all files, including hidden files.

* __clear__
   - Command: `clear`
   - Description: Clears the terminal screen.
   - Example: `clear`

* __cd__
   - Command: `cd [directory]`
   - Description: Changes the current directory.
   - Example: `cd Documents`
   - `cd ~` - change to the home directory
   - `cd ..` - change to the parent directory

* __cp__
   - Command: `cp [source] [destination]`
   - Description: Copies files or directories.
   - Example: `cp file.txt /path/to/destination`
   - Example: `cp test2.txt newfile.txt`

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

* __mkdir__
   - Command: `mkdir [directory]`
   - Description: Creates a new directory.
   - Example: `mkdir new_directory`

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

* __echo__
    - Command: `echo [text]`
    - Description: Prints text to the terminal.
    - Example: `echo "Hello, Linux!"`

* __grep__
    - Command: `grep [pattern] [file]`
    - Description: Searches for a pattern in a file.
    - Example: `grep "keyword" file.txt`

* __chmod__
    - Command: `chmod [permissions] [file]`
    - Description: Changes file permissions.
    - Example: `chmod +x script.sh` - add execute permission to the file 'script.sh' for the owner user
    - Example: `chmod 755 script.sh` - set the file 'script.sh' to have read, write, and execute permissions for the owner user, and read and execute permissions for the group and others
    - Example: `chmod u+x script.sh` - add execute permission to the file 'script.sh' for the owner user only
    - Example: `chmod go-rw file.txt` - remove read and write permissions for the group and others from the file 'file.txt'
    - Example: `chmod a+rwx script.sh` - add read, write, and execute permissions for all (owner, group, and others) to the file 'script.sh'

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

* __df__
    - Command: `df`
    - Description: Displays disk space usage.
    - Example: `df -h` - display disk space usage in human-readable format

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

* __dnf__
    - Command: `dnf [options] [command] [package]`
    - Description: Package manager for installing, updating, and removing software packages.
    - Example: `dnf install package_name` - install a package
    - Example: `dnf remove package_name` - remove a package
    - Example: `dnf update` - update all installed packages
    - Example: `dnf list` - list all installed packages

* __su__
    - Command: `su [username]`
    - Description: Switches to another user account.
    - Example: `su user2` - switch to the user account 'user2

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

*__iu__
    - Command: `su - [username]`
    - Description: Switches to another user account with a login shell.
    - Example: `su - user2` - switch to the user account 'user2' with a login shell
    - Example: `sudo -iu root` - switch to the root user account with a login shell (requires sudo)

*__dmesg__
    - Command: `dmesg`
    - Description: Displays the kernel ring buffer messages.
    - Example: `dmesg | less` - view the kernel messages page by page

*__head__
    - Command: `head [file]`
    - Description: Displays the first few lines of a file.
    - Example: `head file.txt` - display the first 10 lines of the file 'file.txt'
    - Example: `head -n 20 file.txt` - display the first 20 lines of the file 'file.txt'

*__tail__
    - Command: `tail [file]`
    - Description: Displays the last few lines of a file.
    - Example: `tail file.txt` - display the last 10 lines of the file 'file.txt'
    - Example: `tail -n 20 file.txt` - display the last 20 lines of the file 'file.txt'


## References
- [How to install htop on CentOS Linux 8](https://www.cyberciti.biz/faq/how-to-install-htop-on-centos-linux-8/) - htop is nothing but an interactive process viewer for CentOS Linux 8 system
- [How To Install the Apache Web Server on CentOS 8](https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-centos-8)
