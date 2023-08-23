let str1 = "find me on porn hub:#$% "

encodedURL = encodeURI(str1);
resultURL = escape(encodeURI)


console.log(encodedURL);
console.log(resultURL);

decodedURL = decodeURI(encodedURL);
unescapedURL = unescape(decodedURL);

console.log(decodedURL);
console.log(unescapedURL);