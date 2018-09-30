let str = `function eq(a, b) { return a == b; }`
let time = new Date().getTime();
for (let i = 0; i < 1000000; i++) {
    eval(str);
}

time = new Date().getTime() - time;

console.log(time)