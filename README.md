# bash.im
Модуль, который получает рандомную цитату с сайта [bash.im](https://bash.im/random)

## Использование

```js
let bash = require('bash.im');

// ...

let { quote, id, link } = await bash();

console.log(`Цитата: "${quote}"\nID: ${id}\nLink: ${link}`);
// Цитата: "xxx: Два раза в год военкомы собираются на шабаш и призывают духов"
// ID: 406121
// Link: https://bash.im/quote/406121
```
