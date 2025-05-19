let count = 1

for (let i = 1; i <= 5; i++) {
    count = i
    for (let j = 1; j <=i; j++) {
        process.stdout.write(count+" ")
    }
    console.log()
}