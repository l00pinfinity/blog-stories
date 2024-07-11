---
title: "Building an Ethical Hacking Playground at Home"
datePublished: Thu Jul 11 2024 10:26:56 GMT+0000 (Coordinated Universal Time)
cuid: clyh4jvme00000ajicpyo5gln
slug: building-an-ethical-hacking-playground-at-home
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1720693507620/5543d5a5-86eb-4385-babb-e1477bc4ecda.jpeg
tags: network, hacking, ethicalhacking, bugbounty, securityanalyst

---

---

![](https://cdn-images-1.medium.com/max/800/1*nb_RpJoie4wXyDsQjmH8sA.jpeg align="left")

I recently embarked on an exciting project: building my own homelab to dive deeper into ethical hacking. I am able to practice freely without the worry of breaking any rules in this environment. Let me show you how I set it up on my computer.

#### Why Build a Homelab?

To learn hacking effectively, you need a safe and controlled environment where you can experiment freely. VulnHub is an excellent resource that provides materials for gaining practical hands-on experience with digital security, computer applications, and network administration.

#### Prerequisites

To get started, you’ll need a fairly powerful computer. A laptop with at least 16GB of RAM is recommended to handle the performance demands of running multiple virtual machines (VMs).

### Setting Up Your Hacking OS

1\. **Download VirtualBox**: A free and open-source hypervisor for running VMs. You can download it from [here](https://www.virtualbox.org/).  
2\. **Download Kali Linux**: A popular operating system for penetration testing and security research. Choose the VirtualBox prebuilt images from [this link](https://www.kali.org/get-kali/#kali-platforms). This saves time on setup.  
3\. **Install Kali Linux**: Import the prebuilt image into VirtualBox but don’t start it yet. You’ll want to configure the settings first.

### Adding a Vulnerable Machine

Pre-configured VMs designed to be vulnerable to attacks. For this guide, we’ll use the Mr. Robot VM from VulnHub.

1. **Download Mr. Robot VM**: Get the OVA file from \[VulnHub\]([https://www.vulnhub.com/entry/mr-robot-1,151/](https://www.vulnhub.com/entry/mr-robot-1,151/)).
    

![](https://cdn-images-1.medium.com/max/800/1*za-cRV_ANdpTxixQEPQ0xQ.png align="left")

  
2\. **Import the OVA File**: Once the download is complete, double-click the OVA file to open it with VirtualBox. Use the default settings provided during the import.

![](https://cdn-images-1.medium.com/max/800/1*pEdhyMcovYIGFNsE-I8n8Q.png align="left")

### Network Isolation

Before starting your VMs, it’s important to isolate the network. This ensures that your hacking activities don’t affect other devices on your network. You can do this by setting up an internal network in VirtualBox.

For both the virtual images (Kali and Mr. Robot):

1. Click `Settings` on each VM.
    

![](https://cdn-images-1.medium.com/max/800/1*PAmv1eqW0lX6gQD6ye4WwQ.png align="left")

2\. Go to the `Network` tab.

3\. Attach to an `Internal Network` with the name of your choice (I chose "vulnhub").

![](https://cdn-images-1.medium.com/max/800/1*KyclJQ5cCDzNqefiAv1WWw.png align="left")

To make network setup easier, you can configure a DHCP server to automatically assign IP addresses to your VMs. Here’s how you can set it up on both Ubuntu and Windows hosts:

#### For Ubuntu Hosts

Open a terminal and run the following command:

```bash
VBoxManage dhcpserver add - network=vulnhub - server-ip=10.10.1.1 - lower-ip=10.10.1.100 - upper-ip=10.10.1.120 - netmask=255.255.255.0 - enable
```

#### For Windows Hosts

Open a Command Prompt, navigate to the application root folder where VirtualBox is installed:

```bash
cd /Program Files/Oracle/VirtualBox
```

Then run the following command:

```bash
vboxmanage dhcpserver add - network=vulnhub - server-ip=10.10.1.1 - lower-ip=10.10.1.100 - upper-ip=10.10.1.120 - netmask=255.255.255.0 - enable
```

### Command Explanation

Let’s break down what this command does:

* **VBoxManage dhcpserver add**: This part of the command adds a new DHCP server configuration in VirtualBox.
    
*  **— network=vulnhub**: This specifies the name of the internal network we are creating, named “vulnhub”.
    
*  **— server-ip=10.10.1.1**: This sets the IP address of the DHCP server itself.
    
*  **— lower-ip=10.10.1.100**: This sets the lower range of IP addresses that can be assigned to the VMs.
    
*  **— upper-ip=10.10.1.120**: This sets the upper range of IP addresses that can be assigned to the VMs.
    
*  **— netmask=255.255.255.0**: This sets the subnet mask for the network.
    
*  **— enable**: This enables the DHCP server with the specified configuration.
    

### Booting Up and Getting Started

Now that everything is set up, it’s time to boot your VMs and start hacking! Here’s a quick rundown:

1. **Start Kali Linux**: Boot up your Kali Linux VM.
    

* To confirm that the virtual image can’t access the internet, try running: `ping google.com`. This is to ensure that our vulnerable machines are isolated from the internet, preventing any external attacks on them.
    

![](https://cdn-images-1.medium.com/max/800/1*fq26Ai1xq-AD1XbAMrmw1Q.png align="left")

* Kali Linux should be assigned the IP address 10.10.1.100 (the first in the range).
    

![](https://cdn-images-1.medium.com/max/800/1*3LJEIgsxKDzyTZDI_fRYUQ.png align="left")

**2\. Start Mr. Robot VM**: Boot up the vulnerable Mr. Robot VM.

* This VM should be assigned the next available IP address, which will be 10.10.1.101.
    

![](https://cdn-images-1.medium.com/max/800/1*UzzSeS_yVKYzRGuIORGROQ.png align="left")

### Hacking with Kali Linux

Now that your VMs are up and running, you can use Kali Linux to explore and exploit vulnerabilities in the Mr. Robot VM. Here are some steps to get you started:

1. **Scan the Network**: Use tools like `nmap` to discover the IP address of the Mr. Robot VM and enumerate open ports and services:
    

![](https://cdn-images-1.medium.com/max/800/1*FpFnGzO8850Kd4SXy-6CRg.png align="left")

1. **Identify Vulnerabilities**: Analyze the services running on the Mr. Robot VM and identify potential vulnerabilities.
    
2. **Exploit Vulnerabilities**: Use tools like `Metasploit`, `Burp Suite`, or custom scripts to exploit identified vulnerabilities.
    
3. **Capture Flags**: Many VulnHub VMs are designed as capture-the-flag challenges, where you try to find hidden “flags” or markers of success.
    

![](https://cdn-images-1.medium.com/max/800/1*whqxrxmhM68OyQ1-V_jORQ.png align="left")

>  **“**A bug is never just a mistake. It represents something bigger. An error of thinking that makes you who you are.” — Elliot

Please check out [https://github.com/l00pinfinity/blog-stories](https://github.com/l00pinfinity/blog-stories). It contains my blog posts online, do you have any suggestions? A correction, perhaps? Make a pull request on Github or open an issue.

Thanks for reading and stay tuned!!!