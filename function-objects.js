function text1() {
    const str1 = "this1 is a lorem ipsum string";
    const str2 = "this1 is not a lorem ipsum string";
    const str3 = "this1 is not a lorem ipsum string2";
    const str4 = "this1 is not a lorem ipsum string4";
    const str5 = "this1 is not a lorem ipsum string5";
    const str6 = "this1 is not a lorem ipsum string6";
    return str1 + str2 + str3 + str4 + str5 + str6;
}

function text2() {
    const str1 = "this2 is a lorem ipsum string";
    const str2 = "this2 is not a lorem ipsum string";
    const str3 = "this2 is not a lorem ipsum string2";
    const str4 = "this2 is not a lorem ipsum string4";
    const str5 = "this2 is not a lorem ipsum string5";
    const str6 = "this2 is not a lorem ipsum string6";
    return str1 + str2 + str3 + str4 + str5 + str6;
}

function text3() {
    const str1 = "this3 is a lorem ipsum string";
    const str2 = "this3 is not a lorem ipsum string";
    const str3 = "this3 is not a lorem ipsum string2";
    const str4 = "this3 is not a lorem ipsum string4";
    const str5 = "this3 is not a lorem ipsum string5";
    const str6 = "this3 is not a lorem ipsum string6";
    return str1 + str2 + str3 + str4 + str5 + str6;
}

function text4() {
    const str1 = "this4 is a lorem ipsum string";
    const str2 = "this4 is not a lorem ipsum string";
    const str3 = "this4 is not a lorem ipsum string2";
    const str4 = "this4 is not a lorem ipsum string4";
    const str5 = "this4 is not a lorem ipsum string5";
    const str6 = "this4 is not a lorem ipsum string6";
    return str1 + str2 + str3 + str4 + str5 + str6;
}

function text5() {
    const str1 = "this5 is a lorem ipsum string";
    const str2 = "this5 is not a lorem ipsum string";
    const str3 = "this5 is not a lorem ipsum string2";
    const str4 = "this5 is not a lorem ipsum string4";
    const str5 = "this5 is not a lorem ipsum string5";
    const str6 = "this5 is not a lorem ipsum string6";
    return str1 + str2 + str3 + str4 + str5 + str6;
}

function text6() {
    const str1 = "this6 is a lorem ipsum string";
    const str2 = "this6 is not a lorem ipsum string";
    const str3 = "this6 is not a lorem ipsum string2";
    const str4 = "this6 is not a lorem ipsum string4";
    const str5 = "this6 is not a lorem ipsum string5";
    const str6 = "this6 is not a lorem ipsum string6";
    return str1 + str2 + str3 + str4 + str5 + str6;
}

function text7() {
    const str1 = "this7 is a lorem ipsum string";
    const str2 = "this7 is not a lorem ipsum string";
    const str3 = "this7 is not a lorem ipsum string2";
    const str4 = "this7 is not a lorem ipsum string4";
    const str5 = "this7 is not a lorem ipsum string5";
    const str6 = "this7 is not a lorem ipsum string6";
    return str1 + str2 + str3 + str4 + str5 + str6;
}

function text8() {
    const str1 = "this8 is a lorem ipsum string";
    const str2 = "this8 is not a lorem ipsum string";
    const str3 = "this8 is not a lorem ipsum string2";
    const str4 = "this8 is not a lorem ipsum string4";
    const str5 = "this8 is not a lorem ipsum string5";
    const str6 = "this8 is not a lorem ipsum string6";
    return str1 + str2 + str3 + str4 + str5 + str6;
}

function text9() {
    const str1 = "this9 is a lorem ipsum string";
    const str2 = "this9 is not a lorem ipsum string";
    const str3 = "this9 is not a lorem ipsum string2";
    const str4 = "this9 is not a lorem ipsum string4";
    const str5 = "this9 is not a lorem ipsum string5";
    const str6 = "this9 is not a lorem ipsum string6";
    return str1 + str2 + str3 + str4 + str5 + str6;
}

function text10() {
    const str1 = "this10 is a lorem ipsum string";
    const str2 = "this10 is not a lorem ipsum string";
    const str3 = "this10 is not a lorem ipsum string2";
    const str4 = "this10 is not a lorem ipsum string4";
    const str5 = "this10 is not a lorem ipsum string5";
    const str6 = "this10 is not a lorem ipsum string6";
    return str1 + str2 + str3 + str4 + str5 + str6;
}

const jsObjs = [];

for (let i = 0; i < 1_00_000; i++) {
    const jsObj = new text1();
    jsObjs.push(jsObj);
}
for (let i = 0; i < 1_00_000; i++) {
    const jsObj = new text2();
    jsObjs.push(jsObj);
}
for (let i = 0; i < 1_00_000; i++) {
    const jsObj = new text3();
    jsObjs.push(jsObj);
}
for (let i = 0; i < 1_00_000; i++) {
    const jsObj = new text4();
    jsObjs.push(jsObj);
}
for (let i = 0; i < 1_00_000; i++) {
    const jsObj = new text5();
    jsObjs.push(jsObj);
}
for (let i = 0; i < 1_00_000; i++) {
    const jsObj = new text6();
    jsObjs.push(jsObj);
}
for (let i = 0; i < 1_00_000; i++) {
    const jsObj = new text7();
    jsObjs.push(jsObj);
}
for (let i = 0; i < 1_00_000; i++) {
    const jsObj = new text8();
    jsObjs.push(jsObj);
}
for (let i = 0; i < 1_00_000; i++) {
    const jsObj = new text9();
    jsObjs.push(jsObj);
}

for (let i = 0; i < 1_00_000; i++) {
    const jsObj = new text10();
    jsObjs.push(jsObj);
}

console.log("Objects created with function. Total function objects\t", jsObjs.length);