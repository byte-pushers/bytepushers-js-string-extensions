# bytepushers-js-string-extensions
Byte Pushers String Extensions JavaScript library that adds support for additional string method to the String Object.
## Installation
**npm install bytepushers-js-string-extensions**

## Synopsis
Byte Pushers String Extensions JavaScript library that adds support for additional string method to the String Object.  
This library will contain various helper methods to interrogate assertions of a string.
## Code Example
In the following code example, we call "Tonte Pouncil".includes() method to determine if the string literal includes the test string 'Pouncil' or not:
```javascript
"Tonte Pouncil".includes("Pouncil") // result ==> true
````
In the following code example, we call "Hello this is a sentence.".toCamelCase(); method to turn the string literal into camel case by removing all spaces:
```javascript
"Hello this is a sentence.".toCamelCase(); // result ==> "helloThisIsASentence."
```
In the following code example, we call "HelloWorld".toNormalCase() method to turn the string literal into normal case:
```javascript
//string
"Hello world".toCamelCase().toNormalCase(); // result ==> "Hello World"
```
In the following code example, we call String.format(template, dynamicVars...) method to format the string template passed in as parameter with dynamic value parameter passed into method:
```javascript
//string
var result = String.format("Hello {1} is {2} random {3}", "this", "a", "string"); // result ==> "Hello this is a random string"
```
In the following code example, we call String.alphanumeric to read both alphabetical and numerical characters in a string:
```javascript
"H3ll0 W0rlD".isAlphanumeric();
```
## Motivation
The motivation behind the creation of the software.bytepushers.string.extensions.js was to provide additional convenient helper methods
to the String Object as to promote re-usability. 


## API Reference

|    Function Named                 |                   Function Description                                  |
|:----------------------------------|:------------------------------------------------------------------------|
| String.includes(someStringToAssert)            |Static function that is used to determine if a string includes a certain character or string|
| String.trim()                                  |Static function that is used to trim the white spaces from the beginning and end of the string. |
| String.toCamelCase()                           |Static function that is used to format a sentence to camel case. (e.g. Hello world => helloWorld). |
| String.toNormalCase()                          |Static function that is used to turn a string that is in camel case format to a Normal sentence format. (e.g. helloWorld => Hello World)  |
| String.format(stringTemplate, dynamicVars...)  |Static function that will format a string with dynamic variables. |
| String.substringBefore(searchCriteria)         |Static function that returns the sub-string found before the search criteria |
| String.substringAfter(searchCriteria)          |Static function that returns the sub-string found after the search criteria |

<!--- TODO:  --->

## Contributors
Byte Pushers
## License
In order to build successfully, ensure the following:
  1.  Use either minified version of modules or normal version of modules in the Gruntfile.js and Karma.conf.js files;
      but not both and not mixed matched.