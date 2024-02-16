In Linux, systemd is the standard initialization and service management system. It manages units, which are the basic building blocks for system configuration and services. Units can represent various entities such as services, sockets, devices, mounts, and more. Managing units involves controlling their behavior, enabling/disabling them, starting/stopping them, and configuring their properties.

Here's how to manage units in Linux using systemd, along with examples:

1. **Viewing Unit Status:**
To view the status of a unit, you can use the `systemctl status` command followed by the unit name. For example, to check the status of the SSH service:

```bash
systemctl status sshd
```

This command will display detailed information about the status of the SSH service, including whether it's active, its process ID (PID), and any recent logs.

2. **Enabling/Disabling Units:**
To enable a unit to start automatically at boot time, you can use the `systemctl enable` command followed by the unit name. For example, to enable the SSH service:

```bash
sudo systemctl enable sshd
```

Conversely, to disable a unit from starting automatically at boot time, you can use the `systemctl disable` command. For example, to disable the SSH service:

```bash
sudo systemctl disable sshd
```

3. **Starting/Stopping/Restarting Units:**
To start a unit, you can use the `systemctl start` command followed by the unit name. For example, to start the SSH service:

```bash
sudo systemctl start sshd
```

To stop a unit, you can use the `systemctl stop` command. For example, to stop the SSH service:

```bash
sudo systemctl stop sshd
```

To restart a unit, you can use the `systemctl restart` command. For example, to restart the SSH service:

```bash
sudo systemctl restart sshd
```

4. **Reloading Units:**
To reload the configuration of a unit without stopping it, you can use the `systemctl reload` command. For example, to reload the SSH service configuration:

```bash
sudo systemctl reload sshd
```

5. **Checking Unit Configuration:**
To view the configuration settings of a unit, you can use the `systemctl show` command followed by the unit name. For example, to view the configuration of the SSH service:

```bash
systemctl show sshd
```

This command will display various configuration settings and their values for the SSH service.

These are some basic examples of managing units in Linux using systemd. systemd provides extensive functionality for managing units, allowing administrators to efficiently control various aspects of system configuration and services.