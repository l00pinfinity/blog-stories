# YAML in three minutes

The YAML language is serialized much like XML and JSON often used to create configuration files with any programming language. Data can be transferred using YAML using a common format. YAML files have an extension of either .yml or .yaml, both of which work. YAML is human-readable.

YAML means Yaml Ain’t Markup Language. In recent years, configuration files have become increasingly popular in this format. With YAML, there are a few key differences between XML and JSON.

YAML uses line separation and indentation, while JSON and XML use special characters.

```yaml
user services:
  name: Collins Boit
  job: Software Developer
  skills: 
    - Java
    - Typescript
```

JSON objects are delimited by curly brackets ([ ]), therefore they appear as the first and last lines of a request. Except for the last pair, a JSON object contains one or more pairs of key-value pairs separated by commas.

```json
{
    "userservices":[
        {
            "name": "Collins Boit",
            "job": "Software Developer",
            "skills": ["Java", "Typescript"]
        }
    ]
}
```

For instance, the angle bracket ( < >) identifies the beginning of an element start- or end-tag. These special characters are represented by entities in XML.

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<root>
  <userservices>
    <name>Collins Boit</name>
    <job>Software Developer</job>
    <skills>Java</skills>
    <skills>Typescript</skills>
  </userservices>
</root>
```

## Use Cases

### Configuration files

YAML is often used as a configuration file format because it is easy to read and write, and it can support complex data structures. For example, a web server might use a YAML file to store its configuration settings.

### Infrastructure as code

YAML is often used in infrastructure as code (IaC) tools such as Ansible and Terraform, where which are the infrastructure and configuration for cloud-based systems.

### Build scripts

YAML is often used in build scripts, such as those used in continuous integration and delivery (CI/CD) pipelines, to define the steps involved in building and deploying software.

### Data storage

YAML is sometimes used as a simple data storage format, especially for storing data that needs to be human-readable and easy to edit.

### Application localization

YAML is sometimes used to store localization strings for applications, allowing them to be easily translated into different languages.

## Basic Syntax of YAML

1. In YAML, indentation is used to indicate nesting.
2. The key-value pairs are separated by a colon (:)

> Key-values are represented using the following syntax
> <key>: <value> where <key> represents name and <value> represents data, the space is mandatory

```yaml
  key: value
```
  
3. The list element is indented one level below the parent element and is denoted by a hyphen (-).

## The items in the following list will be treated as unique

```yaml
  - ElementOne
  - ElementTwo
  - ElementThree
```

4. Dictionary elements are indented one level below their parent elements and are denoted with a colon (:).

```yaml
  dictionary:
    - ElementOne
    - ElementTwo
    - ElementThree
```
  
5. Normally, strings do not need to be quoted, but if they contain special characters or begin with certain characters, such as @, |, or >, then they should be quoted.

  ```yaml
  # In general, you don't need quotes.
  # Use quotes to force a string, e.g. if your key or value is 10 but you want it to return a String and not a Fixnum, write '10' or "10".
  # Use quotes if your value includes special characters, (e.g. :, {, }, [, ], ,, &, *, #, ?, |, -, <, >, =, !, %, @, \).
  # Single quotes let you put almost any character in your string, and won't try to parse escape codes. '\n' would be returned as the string \n.
  # Double quotes parse escape codes. "\n" would be returned as a line feed character.
  # The exclamation mark introduces a method, e.g. !ruby/sym to return a Ruby symbol.
  
  # https://stackoverflow.com/questions/19109912/yaml-do-i-need-quotes-for-strings-in-yaml
```

6. The notation for inline lists and dictionaries can be indicated with brackets ([] and {}) or with commas and curly braces (flow style).

```yaml
  os: [ubuntu, windows]

# and

- { name: 'Collins', age: 23 }
```
  
Please check out https://github.com/l00pinfinity/blog-stories. It contains my blog posts online, do you have any suggestions? A correction, perhaps? Make a pull request on Github or open an issue.

Thanks for reading and stay tuned!!!
