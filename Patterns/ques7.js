let n = 4


for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    let space = 2*n - 2*i
    for (let j = 1; j <= space; j++) {
        process.stdout.write("  ")
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}
// lower half
for (let i = n; i >=0; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    let space = 2*n - 2*i
    for (let j = 1; j <= space; j++) {
        process.stdout.write("  ")
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}