// string-methods.js

let str = "  Hello, JavaScript World!  ";

// 1. length
console.log("Length:", str.length);

// 2. toUpperCase()
console.log("UpperCase:", str.toUpperCase());

// 3. toLowerCase()
console.log("LowerCase:", str.toLowerCase());

// 4. charAt()
console.log("charAt(7):", str.charAt(7));

// 5. charCodeAt()
console.log("charCodeAt(0):", str.charCodeAt(0));

// 6. slice()
console.log("slice(2, 9):", str.slice(2, 9));

// 7. substring()
console.log("substring(2, 9):", str.substring(2, 9));

// 8. substr() — Deprecated
console.log("substr(2, 5):", str.substr(2, 5));

// 9. indexOf()
console.log("indexOf('Java'):", str.indexOf("Java"));

// 10. lastIndexOf()
console.log("lastIndexOf('l'):", str.lastIndexOf("l"));

// 11. includes()
console.log("includes('Script'):", str.includes("Script"));

// 12. startsWith()
console.log("startsWith('  He'):", str.startsWith("  He"));

// 13. endsWith()
console.log("endsWith('  '):", str.endsWith("  "));

// 14. replace()
console.log("replace('World', 'Universe'):", str.replace("World", "Universe"));

// 15. replaceAll()
let s = "a,b,a,b,a";
console.log("replaceAll('a', 'x'):", s.replaceAll("a", "x"));

// 16. trim()
console.log("trim():", str.trim());

// 17. trimStart()
console.log("trimStart():", str.trimStart());

// 18. trimEnd()
console.log("trimEnd():", str.trimEnd());

// 19. padStart()
let num = "5";
console.log("padStart(3, '0'):", num.padStart(3, "0"));

// 20. padEnd()
console.log("padEnd(3, '0'):", num.padEnd(3, "0"));

// 21. split()
console.log("split(','):", s.split(","));

// 22. concat()
let hello = "Hello";
let world = "World";
console.log("concat():", hello.concat(" ", world));

// 23. repeat()
console.log("repeat(3):", "ha".repeat(3));

// 24. match()
console.log("match(/Java/):", str.match(/Java/));

// 25. matchAll()
let text = "test1test2";
let matches = [...text.matchAll(/test/g)];
console.log("matchAll(/test/g):", matches);

// 26. search()
console.log("search('Java'):", str.search("Java"));

// 27. localeCompare()
console.log("'a'.localeCompare('b'):", "a".localeCompare("b"));

// 28. toString()
let n = 123;
console.log("toString():", n.toString());

// 29. valueOf()
let val = new String("abc");
console.log("valueOf():", val.valueOf());
