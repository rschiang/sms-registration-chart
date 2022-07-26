// Adapted from Konami.js 1.6.3 (2021/11/11)
// Original (c) 2009 George Mandis, Licensed under the MIT License.

const pattern = "38384040373937396665";

export default (el, callback) => {
  let input = "";
  el.addEventListener('keydown', (e) => {
    input += e.keyCode;
    if (input.length > pattern.length)
      input = input.substr(input.length - pattern.length);
    if (pattern === input) {
      callback();
      e.preventDefault();
      return false;
    }
  });
};
