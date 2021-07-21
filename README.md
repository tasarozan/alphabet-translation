# alphabet-translator

[![Build Status](https://app.travis-ci.com/tasarozan/alphabet-translator.svg?branch=main)](https://app.travis-ci.com/tasarozan/alphabet-translator)
[![Coverage Status](https://coveralls.io/repos/github/tasarozan/alphabet-translator/badge.svg?branch=main)](https://coveralls.io/github/tasarozan/alphabet-translator?branch=main)

Translate latin alphabet to cyrillic(Bulgarian, Ukrainian or Macedonian) or Greek alphabet

# Installation

Install the library

```sh
npm i alphabet-translator

```

# Usage

Currently you have 4 language choices but more are coming!

1- 'cyrillic-macedonian'
2- 'cyrillic-bulgarian'
3- 'cyrillic-ukrainian'
4- 'greek'

```js
const alphabetTranslator = require('alphabet-translator')

alphabetTranslator(string, language)
```

# Examples

For cyrillic-macedonian;

```js
const alphabetTranslator = require('alphabet-translator')

alphabetTranslator('sinus', 'cyrillic-macedonian')
//output 'синус'
```

For cyrillic-bulgarian;

```js
const alphabetTranslator = require('alphabet-translator')

alphabetTranslator('hello', 'cyrillic-bulgarian')
//output 'хeллo'
```

For cyrillic-ukrainian;

```js
const alphabetTranslator = require('alphabet-translator')

alphabetTranslator('translator', 'cyrillic-ukrainian')
//output 'tрaнслatoр'
```

For greek;

```js
const alphabetTranslator = require('alphabet-translator')

alphabetTranslator('alphabet', 'greek')
//output 'αλπηαβετ'
```

# License

MIT License

Copyright (c) 2021 Ozan Taşar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

```
