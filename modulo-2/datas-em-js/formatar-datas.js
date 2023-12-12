const agora = new Date();
console.log(agora.toLocaleString());
/* 11/12/2023, 20:31:07 */
console.log(agora.toLocaleString('en-US'));
/* 12/11/2023, 8:31:39 PM */
console.log(agora.toLocaleString(undefined, {year: "numeric", month: "long", day: "numeric"}));
/* 11 de dezembro de 2023 */
console.log(agora.toLocaleString("en-US", {year: "numeric", month: "long", day: "numeric"}));
/* December 11, 2023 */