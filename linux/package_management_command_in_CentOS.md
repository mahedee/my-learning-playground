## Package Management Command in CentOS

Package management in CentOS, like in many other Linux distributions, refers to the system of installing, updating, and managing software packages on the system. CentOS, being derived from Red Hat Enterprise Linux (RHEL), primarily uses the YUM (Yellowdog Updater Modified) package manager for package management tasks. However, in recent versions, CentOS has adopted DNF (Dandified YUM) as its default package manager, which is a successor to YUM and provides enhanced features.

Here's a brief overview of package management in CentOS using DNF, along with an example:

1. **Installing Packages:**
To install a package using DNF, you would typically use the `dnf install` command followed by the package name. For example, to install the `nginx` web server package:

```bash
sudo dnf install nginx
```

This command will prompt you for confirmation and then proceed to download and install the `nginx` package along with any dependencies required for it to function.

2. **Removing Packages:**
To remove a package, you can use the `dnf remove` command followed by the package name. For instance, to remove the `nginx` package:

```bash
sudo dnf remove nginx
```

This command will uninstall the `nginx` package from your system.

3. **Updating Packages:**
To update all installed packages to their latest available versions, you can use the `dnf update` command:

```bash
sudo dnf update
```

This command will check for updates for all installed packages and then proceed to update them if newer versions are available.

4. **Searching for Packages:**
You can search for packages using keywords with the `dnf search` command. For example, to search for packages related to PHP:

```bash
dnf search php
```

This command will display a list of packages related to PHP available in the configured repositories.

5. **Listing Installed Packages:**
To list all installed packages on your system, you can use the `dnf list installed` command:

```bash
dnf list installed
```

This command will provide a list of all packages that are currently installed on your CentOS system.

These are some basic examples of package management using DNF in CentOS. DNF provides many more options and functionalities for managing packages efficiently and securely on your system.