function genLotto(startNum) {
    startNum = Number(startNum)
    let lotto = [startNum]

    for(let i = 1; i < 6; i++) {
        let num = Math.floor(Math.random() * 45) + 1
        if(lotto.indexOf(num) != -1 || num < startNum) {
            i--
            continue
        }
        lotto[i] = num
    }

    lotto.sort(function(a, b) {
        return  a - b
    })

    return lotto
}