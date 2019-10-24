// Put code of task B here
/* let node = document.createElement('article')
const articleElements = document.getElementsByTagName('article');
const mainElements = document.getElementsByTagName('main');
const articleObject = articleElements[0].cloneNode(true);
mainElements[0].appendChild(articleObject);

console.log(mainElements);
console.log(articleElements); */

'use strict';

const main = document.querySelector('main');
main.innerHTML += `<article>
                        <header>
                            <h2>Other header</h2>
                        </header>
                        <figure>
                            <img src="http://placekitten.com/200/300" alt="title">
                            <figcaption>Some other cat</figcaption>
                        </figure>
                        <p>Here is some text. Here is some text. Here is some text. Here is some text.</p>
                    </article>`;

