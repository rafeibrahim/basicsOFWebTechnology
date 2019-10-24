// Put code of task C here
'use stricct'

const main = document.querySelector('main');

const image = document.createElement('img');
image.src = 'http://placekitten.com/320/162';
//other way to add attributes:
image.setAttribute('alt', 'some cat');


const figCapt = document.createElement('figcaption');
figCapt.innerHTML = 'Some caption';

const fig = document.createElement('figure');



const h2 = document.createElement('h2');
h2.innerHTML = 'Article header';

const header = document.createElement('header');

header.appendChild(h2);

const p = document.createElement('p');
p.innerHTML = 'Here is some text. Here is some text. Here is some text. Here is some text.'

fig.appendChild(image);
fig.appendChild(figCapt);

const article = document.createElement('article');

article.appendChild(header);
article.appendChild(fig);
article.appendChild(p);

main.appendChild(article);