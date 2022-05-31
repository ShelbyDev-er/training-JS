// function Ex1(n) { // S = 1 + 2 + 3 + ... + n 
//     var s = 0
//     var i = 1
//     while (i <= n) {
//         s = s + i
//         i = i + 1
//     } 
//     console.log('S = 1 + 2 + 3 + ... + n = ' + s)
// }
// Ex1(5)

// function Ex2(n) { // S = 1 + 3 + 5 + ... + (2n + 1)
//     var s = 0 // khởi tạo
//     var i = 0 // biến chạy
//     while (i < n) {
//         a = 2 * i + 1
//         s = s + a
//         i = i + 1
//     }
//     console.log('S = 1 + 3 + 5 + ... + (2n + 1) = ' + s)
// }
// Ex2(5)

// function Ex3(n) { // S = 1*1 + 2*2 + 3*3 + ... + n*n
//     var s = 0
//     var i = 1
//     while (i <= n) {
//         a = i * i
//         s = s + a
//         i = i + 1        
//     }
//     console.log(s)
// }
// Ex3(3)

// function Ex4(n) { // S = 1 + 1/2 + 1/3 + ... + 1/n
//     var s = 0 
//     var i = 1
//     while (i <= n) {
//         a = 1 / i
//         s = s + a
//         i = i + 1
//     }
//     console.log(s)
// }
// Ex4(3)

// function Ex5(n) { // S = 1/2 + 1/4 + 1/6 + ... + 1/(2n)
//     var s = 0
//     var i = 1
//     while (i <= n) {
//         a = 1 / (2 * i)
//         s = s + a
//         i = i + 1
//     }
//     console.log(s)
// }
// Ex5(3)

// function Ex6(n) { // S = 1 + 1/3 + 1/5 + ... + 1/(2*n+1)
//     var s = 0 
//     var i = 0
//     while (i <= n) { 
//         a = 1 / (2 * i + 1)
//         s = s + a
//         i = i + 1
//     }
//     console.log(s)
// }
// Ex6(3)

// function Ex7(n) { // S = 1/(1*2) + 1/(2*3) + ... + 1/(n*(n+1))
//     var s = 0
//     var i = 1
//     while (i <= n) {
//         a = 1 / (i * (i + 1))
//         s = s + a
//         i = i + 1
//     }
//     console.log(s)
// }
// Ex7(2)

// function Ex8(n) { // S = 1/2 + 3/4 + 5/6 + ... + n / (n + 1)
//     var s = 0
//     var i = 1
//     while (i <= n) {
//         a = i / (i + 1)
//         s = s + a
//         i = i + 1
//     }
//     console.log(s)
// }
// Ex8(3)

// function Ex9(n) { // S = 1/2 + 3/4 + 5/6 + ... + (2n + 1)/(2n + 2)
//     var s = 0 
//     var i = 0
//     while (i <= n) {
//         a = (2 * i + 1) / (2 * i + 2)
//         s = s + a
//         i = i + 1
//     }
//     console.log(s)
// }
// Ex9(2)

// function Ex10(n) { // S = 1 * 2 * 3 * ... * n
//     var s = 1
//     var i = 1
//     while (i <= n) {
//         s = s * i
//         i = i + 1
//     }
// }
// Ex10(3)

// function Ex11(n) { // S = 1*1*1 + 2*2*2 + 3*3*3 + ... + n*n*n
//     var s = 0
//     var i = 1
//     while (i <= n) {
//         a = i * i * i
//         s = s + a
//         i = i + 1
//     }
//     console.log(s)
// }
// Ex11(3)