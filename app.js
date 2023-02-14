function plusGame() {
    var score = 0
    for (var i = 0; i < 10; i++) {
        let a = Math.floor(Math.random() * 100 + 1)
        let b = Math.floor(Math.random() * 100 + 1)
        let ans = prompt("ข้อ " + (i+1) + "\n" + a + ' + ' + b + ' = ')
        let correct = a + b
        document.getElementById("result").innerHTML +=  a + ' + ' + b + ' = ' + ans + "<br>"
        if (ans == correct) {
            alert("ยินดีด้วย คุณตอบถูก ได้ 1 คะแนน")
            document.getElementById("result").innerHTML += "เฉลย " + correct + " คุณได้ 1 คะแนน" + "<br>"
            score += 1
        } else {
            alert("เสียใจด้วย คุณตอบผิด ได้ 0 คะแนน")
            document.getElementById("result").innerHTML += "เฉลย " + correct + " คุณได้ 0 คะแนน" + "<br>"
        }

    }
    document.getElementById("score").innerHTML = "คุณได้คะแนนรวม " + score + " คะแนน"

}
