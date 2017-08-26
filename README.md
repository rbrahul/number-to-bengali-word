# bengali-number
An amazing package to convert your number to bengali word representation

# Installation

**Install via npm**
```
$ npm i bengali-number

```

# How to Use

```javascript

var toBengaliWord = require('bengali-number');
var result = toBengaliWord(37762086.507);
console.log(result);  // output: তিন কোঁটি সাতাত্তর লক্ষ বাষট্টি হাজার ছিয়াশি দশমিক পাঁচ শত সাত

```
# Run Test:
To run tests after cloning or downloading this repository run following commands:

```
$ npm i
$ npm test
```
**Then you will have these messages in terminal:**

```
  #Convert Amount to Bengali Word Representation Test
    ✓ should convert 1 to bengali এক
    ✓ should convert 10000 to bengali দশ হাজার
    ✓ should convert 1277548.57 to it's bengali word represetation
    ✓ should convert 7576516080681.50 to it's bengali word represetation
    ✓ should convert 9999999999999 to it's bengali word represetation
    ✓ should convert 111111111110 to it's bengali word represetation
    ✓ should convert .5 to it's bengali word represetation
    ✓ should convert 111222333444555 to it's bengali word represetation
    ✓ should convert 200300400500.25 to it's bengali word represetation
    ✓ should convert 3.1416 to it's bengali word represetation
    ✓ should convert 100000000700.1234 to it's bengali word represetation


  11 passing (20ms)
```
**All the best, enjoy Javascript** :smiley:

**NB:**
For large numbers such as **3.7722526363525255e+27** it may provide unexpected result.
And sometimes for fraction value the result may vary a bit.

**Developed with ♥ and respect to my mother language Bengali**
