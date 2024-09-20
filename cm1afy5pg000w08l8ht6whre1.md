---
title: "OverTheWire’s Bandit: A Hands-On Guide to Linux Commands and Security Fundamentals"
datePublished: Fri Sep 20 2024 08:10:42 GMT+0000 (Coordinated Universal Time)
cuid: cm1afy5pg000w08l8ht6whre1
slug: overthewires-bandit-a-hands-on-guide-to-linux-commands-and-security-fundamentals
tags: linux, cybersecurity, ctf, overthewire, overthewirewriteup

---

---

![](https://cdn-images-1.medium.com/max/800/1*G1ylN1n6zPBigQl4a7wp5g.png align="left")

#### Introduction

Welcome to my walkthrough of the Bandit game from OverTheWire! If you’re like me, you’re probably on a quest to level up your Linux skills while having some fun in the process. Bandit is a fantastic starting point for anyone looking to get their hands dirty with command-line basics and security fundamentals.

### Bandit Level 0

### Level Goal

The goal of this level is for you to log into the game using SSH. The host to which you need to connect is **bandit.labs.overthewire.org**, on port 2220. The username is **bandit0** and the password is **bandit0**. Once logged in, go to the [Level 1](https://overthewire.org/wargames/bandit/bandit1.html) page to find out how to beat Level 1.

Secure Shell ([SSH](https://manpages.ubuntu.com/manpages/noble/man1/ssh.1.html)) protocol is a method for securely sending commands to a computer over an unsecured network. SSH uses cryptography to authenticate and encrypt connections between devices. SSH also allows for [tunneling](https://www.cloudflare.com/learning/network-layer/what-is-tunneling/), or port forwarding, which is when data [packets](https://www.cloudflare.com/learning/network-layer/what-is-a-packet/) are able to cross networks that they would not otherwise be able to cross. SSH is often used for controlling servers remotely, for managing infrastructure, and for transferring files.

```plaintext
ssh bandit0@bandit.labs.overthewire.org -p 2220
```

* `bandit0@bandit.labs.overthewire.org` specifies the username and host.
    
* `-p 2220` specifies the port number (2220 in this case, instead of the default 22).
    

### Helpful Reading Material

* [Secure Shell (SSH) on Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
    
* [How to use SSH on wikiHow](https://www.wikihow.com/Use-SSH)
    
* [SSH Command Cheat Sheet](https://quickref.me/ssh.html)
    

### Bandit Level 0 → Level 1

### Level Goal

The password for the next level is stored in a file called **readme** located in the home directory. Use this password to log into bandit1 using SSH. Whenever you find a password for a level, use SSH (on port 2220) to log into that level and continue the game.

![](https://cdn-images-1.medium.com/max/800/1*oX0ElzfpXP8KA9zrf4kJTg.png align="left")

> **TIP:** Create a file for notes and passwords on your local machine! Passwords for levels are *not* saved automatically. If you do not save them yourself, you will need to start over from bandit0.

Passwords also occassionally change. It is recommended to take notes on how to solve each challenge. As levels get more challenging, detailed notes are useful to return to where you left off, reference for later problems, or help others after you’ve completed the challenge.

### Bandit Level 1 → Level 2

### Level Goal

The password for the next level is stored in a file called — located in the home directory

![](https://cdn-images-1.medium.com/max/800/1*EQDzuiQQaqx7oRUETPg0Sg.png align="left")

### Helpful Reading Material

* [Google Search for “dashed filename”](https://www.google.com/search?q=dashed+filename)
    
* [Advanced Bash-scripting Guide — Chapter 3 — Special Characters](https://linux.die.net/abs-guide/special-chars.html)
    

### Bandit Level 2 → Level 3

### Level Goal

The password for the next level is stored in a file called **spaces in this filename** located in the home directory

![](https://cdn-images-1.medium.com/max/800/1*kTvuD6cl7l8kFImLG5PGvw.png align="left")

### Helpful Reading Material

* [Google Search for “spaces in filename”](https://www.google.com/search?q=spaces+in+filename)
    

### Bandit Level 3 → Level 4

### Level Goal

The password for the next level is stored in a hidden file in the **inhere** directory.

![](https://cdn-images-1.medium.com/max/800/1*5gIdcArkR9qLJPJyZpblkQ.png align="left")

### Bandit Level 4 → Level 5

### Level Goal

The password for the next level is stored in the only human-readable file in the **inhere** directory. Tip: if your terminal is messed up, try the “reset” command.

![](https://cdn-images-1.medium.com/max/800/1*80q016DlJGvM0cTeEtmOpA.png align="left")

### Bandit Level 5 → Level 6

### Level Goal

The password for the next level is stored in a file somewhere under the **inhere** directory and has all of the following properties:

* human-readable
    
* 1033 bytes in size
    
* not executable
    

![](https://cdn-images-1.medium.com/max/800/1*cxdZ6SAqdXBSkfCzZl4Y2Q.png align="left")

Explanation:

* `.` indicates the current directory (`inhere` in this case).
    
* `-type f` limits the search to files.
    
* `-size 1033c` looks for files that are exactly 1033 bytes (`c` stands for bytes).
    
* `! -executable` excludes executable files.
    

### Bandit Level 6 → Level 7

### Level Goal

The password for the next level is stored **somewhere on the server** and has all of the following properties:

* owned by user bandit7
    
* owned by group bandit6
    
* 33 bytes in size
    

![](https://cdn-images-1.medium.com/max/800/1*km0GDfr_VpJZP-_lzT-AuA.png align="left")

Explanation:

* `/` starts the search from the root directory.
    
* `-user bandit7` limits the search to files owned by the user `bandit7`.
    
* `-group bandit6` limits the search to files owned by the group `bandit6`.
    
* `-size 33c` limits the search to files that are exactly 33 bytes (`c` stands for bytes).
    
* `2>/dev/null` redirects error messages (like "Permission denied") to `/dev/null` so they don't clutter your output.
    

![](https://cdn-images-1.medium.com/max/800/1*_0aBG3UFkYNlvnEKCSk34Q.png align="left")

### Bandit Level 7 → Level 8

### Level Goal

The password for the next level is stored in the file **data.txt** next to the word **millionth**

![](https://cdn-images-1.medium.com/max/800/1*FaJW99J-V4c_j7XwGy017A.png align="left")

### Bandit Level 8 → Level 9

### Level Goal

The password for the next level is stored in the file **data.txt** and is the only line of text that occurs only once

![](https://cdn-images-1.medium.com/max/800/1*cawJworlic-tnRY0qZI5Qw.png align="left")

### Helpful Reading Material

* [Piping and Redirection](https://ryanstutorials.net/linuxtutorial/piping.php)
    

### Bandit Level 9 → Level 10

### Level Goal

The password for the next level is stored in the file **data.txt** in one of the few human-readable strings, preceded by several ‘=’ characters.

![](https://cdn-images-1.medium.com/max/800/1*ASEPfI9NYkgMGDXpd0F_nQ.png align="left")

### Bandit Level 10 → Level 11

### Level Goal

The password for the next level is stored in the file **data.txt**, which contains base64 encoded data

![](https://cdn-images-1.medium.com/max/800/1*HUqSS14Opc516LYJs6jNrw.png align="left")

### Helpful Reading Material

* [Base64 on Wikipedia](https://en.wikipedia.org/wiki/Base64)
    

### Commands you may need to solve this level

Here’s a breakdown of the commands used from **Level 0 to Level 11** in OverTheWire’s Bandit game, along with examples on how to use them:

### 1\. `ssh` (Secure Shell)

**Usage**: SSH is used to remotely log into the Bandit server.

**Example**: `ssh bandit0@bandit.labs.overthewire.org -p 2220`

* `bandit0@bandit.labs.overthewire.org`: Username and host.
    
* `-p 2220`: Specifies the port (2220 instead of the default 22).
    

### 2\. `ls` (List Directory Contents)

**Usage**: Lists files and directories in the current location.

**Example**:

* `ls`: Lists all visible files in the directory.
    
* `ls -a`: Lists all files, including hidden ones (starting with `.`).
    
* `ls -l`: Provides detailed information such as file permissions, owner, and size.
    

### 3\. `cd` (Change Directory)

**Usage**: Navigates between directories.

**Example**:

* `cd inhere`: Moves into the `inhere` directory.
    
* `cd ..`: Moves back to the parent directory.
    

### 4\. `cat` (Concatenate and Display Files)

**Usage**: Displays the content of a file.

**Example**:

* `cat readme`: Displays the contents of the `readme` file.
    
* `cat -n filename`: Displays the content with line numbers.
    

### 5\. `file` (Determine File Type)

**Usage**: Describes the type of a file.

**Example**:

* `file readme`: Identifies what type of data the file `readme` contains (e.g., text, binary).
    

### 6\. `du` (Disk Usage)

**Usage**: Shows the disk usage of files and directories.

**Example**:

* `du -h`: Shows the sizes in human-readable format (e.g., KB, MB).
    
* `du -sh *`: Displays a summary of the size of each file in the current directory.
    

### 7\. `find` (Search for Files and Directories)

**Usage**: Locates files in a directory hierarchy.

**Example**:

* `find . -name readme`: Searches for the file named `readme` in the current directory.
    
* `find / -user bandit7 -group bandit6 -size 33c`: Searches for a file based on specific properties like owner, group, and size.
    

### 8\. `grep` (Search Inside Files)

**Usage**: Searches for patterns within files.

**Example**:

* `grep millionth data.txt`: Finds the line containing "millionth" in `data.txt`.
    
* `grep '^=' data.txt`: Finds lines starting with the `=` character.
    

### 9\. `sort` (Sort Lines of Text Files)

**Usage**: Sorts lines of a text file.

**Example**:

* `sort data.txt`: Sorts the lines in `data.txt` alphabetically.
    
* `sort -n data.txt`: Sorts the file numerically.
    

### 10\. `uniq` (Report or Omit Repeated Lines)

**Usage**: Removes or reports repeated lines in a file.

**Example**:

* `uniq data.txt`: Removes adjacent duplicate lines.
    
* `sort data.txt | uniq -u`: Finds unique lines after sorting.
    

### 11\. `strings` (Find Printable Strings in Binary Files)

**Usage**: Extracts printable text from binary files.

**Example**:

* `strings data.txt`: Displays human-readable strings in the `data.txt` file.
    

### 12\. `base64` (Base64 Encoding/Decoding)

**Usage**: Encodes or decodes base64 data.

**Example**:

* `base64 -d data.txt`: Decodes base64-encoded data in `data.txt`.
    
* `echo "password" | base64`: Encodes the word "password" in base64.
    

### 13\. `tr` (Translate or Delete Characters)

**Usage**: Translates or deletes characters from input.

**Example**:

* `cat data.txt | tr 'a-z' 'A-Z'`: Converts lowercase letters to uppercase in `data.txt`.
    
* `cat data.txt | tr -d '='`: Deletes the `=` characters from the output.
    

### 14\. `tar` (Tape Archive)

**Usage**: Archives multiple files into a single file and extracts them.

**Example**:

* `tar -xf archive.tar`: Extracts the contents of `archive.tar`.
    
* `tar -czf archive.tar.gz directory`: Compresses a directory into a `.tar.gz` file.
    

### 15\. `gzip` (Compression Utility)

**Usage**: Compresses files using the GNU zip algorithm.

**Example**:

* `gzip file.txt`: Compresses `file.txt` to `file.txt.gz`.
    
* `gzip -d file.txt.gz`: Decompresses the file.
    

### 16\. `bzip2` (File Compression)

**Usage**: Compresses files using a higher compression ratio than `gzip`.

**Example**:

* `bzip2 file.txt`: Compresses `file.txt` into `file.txt.bz2`.
    
* `bzip2 -d file.txt.bz2`: Decompresses the file.
    

### 17\. `xxd` (Hex Dump Tool)

**Usage**: Creates a hex dump of a file.

**Example**:

* `xxd data.txt`: Converts the file `data.txt` to a hexadecimal representation.
    
* `xxd -r data.hex`: Converts the hex dump back into its original format.
    

---

Please check out [https://github.com/l00pinfinity/blog-stories](https://github.com/l00pinfinity/blog-stories). It contains my blog posts online, do you have any suggestions? A correction, perhaps? Make a pull request on Github or open an issue.

Thanks for reading and stay tuned!!!