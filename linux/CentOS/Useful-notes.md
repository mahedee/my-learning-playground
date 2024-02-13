## Commands

__View users__
- All users in the system are stored in the /etc/passwd directory. To view all users, run the following command:

```bash
$ getent passwd

```

- Let’s switch to the admin superuser using the following command:

```bash
$ sudo su <adminuser>
```

Example
```bash
$ sudo su root
```

- Install Google Chrome on CentOS
- First, download the Google Chrome RPM package using the following command:

```bash
$ wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
```

- Or you can use another browser to download the package
- Go to the download directory and open the terminal
- Then install it with the following command:
```bash 
$ yum install google-chrome-stable_current_x86_64.rpm
```

- Go to the application menu and search for Google Chrome. Click on the icon to open the browser.

- To view IP address of the system, run the following command:

```bash
$ ifconfig | grep inet
```

- To view the IP address of the system, run the following command:

```bash
$ ip addr show
```
or
```bash
$ ip addr
```


## References

- [Connect to Centos (Linux) on Putty](https://www.youtube.com/watch?v=k5-t2VFvN-Y)