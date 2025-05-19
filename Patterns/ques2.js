for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 4; j++) {
        if (i > 1 && i < 5 && j > 1 && j < 4) {
            process.stdout.write("  ")
        }
        else {
            process.stdout.write("* ")
        }
    }
    process.stdout.write("\n")
}