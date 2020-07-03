const doTheMath = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

doTheMath(1, 4, (sum) => {
    console.log(sum)
})