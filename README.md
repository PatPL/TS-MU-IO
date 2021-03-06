# muTS
Typescript/Javascript KSP MU reader/writer, based on https://github.com/taniwha/io_object_mu

### Try it out right now in browser:
https://patpl.github.io/muTS/

## Installation:

### No module resolution:
* Get all 'muTS.*' from VanillaJS folder
* Include the muTS.js to the html using ```<script src="[location]/muTS.js"></script>``` tag

### AMD module resolution:
* Get all files from 'AMDModules/bin/'
* Require Mu module from 'Mu.js' (I have never used AMD module resolution outside of TS, I hope you'll figure it out)

## Usage:
* ```new Mu (binary);``` will return the interpreted object (Or throw errors). 'binary' is a Uint8Array with .mu file
* ```muObj.Serialize ()``` will return the .mu data of the object


Example of an interpreted Mu object:

![](https://imgur.com/iigE1fQ.png)

Example of usage:

![](https://imgur.com/3YsFAkE.png)
