// 내가 쓴거
window.onload = (function() {
    const name = document.querySelector('#name')
    const gender = document.querySelector('#gender')
    const beonho = document.querySelector('#beonho')

    const print = document.querySelector('#print')
    const reset = document.querySelector('#reset')
    const printOrderBy  = document.querySelector('#printOrderBy')
    const information = document.querySelector('#information')

    function resetInfo() {
        information.innerHTML = ''
    }

    reset.addEventListener('click', function() {
        resetInfo()
        students = []
    })

    print.addEventListener('click', function() {
        const student = new Student(name.value, gender.value, Number(beonho.value))

        let newStudentInfo = document.createElement('h1')
        newStudentInfo.textContent = student.toString()
        if(student.gender == '남') {
            newStudentInfo.style.backgroundColor = 'springgreen'
            newStudentInfo.style.color = 'blue'
        } else {
            newStudentInfo.style.backgroundColor = 'black'
            newStudentInfo.style.color = 'pink'
        }

        information.appendChild(newStudentInfo)
    })

    printOrderBy.addEventListener('click', function() {
        const idx = students.findIndex(
            function(item) {
                return item.beonho === Number(beonho.value)
            }
        )

        if(idx != -1) {
            alert('중복')
            return
        }

        resetInfo()
        students.push(new Student(name.value, gender.value, Number(beonho.value)))
        students.sort(function(a, b) {
            return a.beonho - b.beonho
        })

        for(let i = 0; i < students.length; i++) {
            let newStudentInfo = document.createElement('h1')
            newStudentInfo.innerHTML = students[i].toString()
            if(students[i].gender == '남') {
                newStudentInfo.style.backgroundColor = 'springgreen'
                newStudentInfo.style.color = 'blue'
            } else {
                newStudentInfo.style.backgroundColor = 'black'
                newStudentInfo.style.color = 'pink'
            }

            information.appendChild(newStudentInfo)
        }
    })
})