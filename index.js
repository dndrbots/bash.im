let fetch = require('node-fetch');
let iconv = require('iconv-lite');

let idRegexp = /<a href="\/quote\/.*" class="id">#(.*)<\/a>/i;
let regexp = /<div class="text">([^]+?)<\/div>/i;

async function bash() {
  let result = await (await fetch('https://bash.im/random')).buffer();
  result = iconv.decode(result, 'win1251');

  let id = +result.match(idRegexp)[1];
  let text = result.match(regexp)[1];
  text = text.replace(/<br(?:\s*\/)?>/ig, '\n')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/ig, '<')
    .replace(/&gt;/ig, '>');

  return {
    quote: text,
    id,
    link: `https://bash.im/quote/${id}`,
  };
}

module.exports = bash;
