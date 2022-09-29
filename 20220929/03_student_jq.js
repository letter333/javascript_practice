$(
    function() {
        const name = $('#name')
        const gender = $('#gender')
        const beonho = $('#beonho')

        const print = $('#print')
        const reset = $('#reset')
        const printOrderBy = $('#printOrderBy')
        const information = $('#information')

        function resetInfo() {
            information.html('')
        }
        
        reset.on('click', function() {
            resetInfo()
            students = []
        })

        print.on('click', function() {
            const student = new Student(name.val(), gender.val(), Number(beonho.val()))

            let newStudentInfo = $('<h1></h1>')
            newStudentInfo.text(student.toString())
            if(student.gender == '남') {
                newStudentInfo.css('background-color', 'springgreen').css('color', 'blue')
            } else {
                newStudentInfo.css('background-color', 'black').css('color', 'pink')
            }

            information.append(newStudentInfo)
        })

        printOrderBy.on('click', function() {
            const idx = students.findIndex(
                function(item) {
                    return item.beonho === Number(beonho.val())
                }
            )

            if(idx != -1) {
                alert('중복')
                return
            }

            resetInfo()
            students.push(new Student(name.val(), gender.val(), Number(beonho.val())))
            students.sort(function(a, b) {
                return a.beonho - b.beonho
            })

            for(let i = 0; i < students.length; i++) {

                let newStudentInfo = $('<h1></h1>')
                newStudentInfo.text(students[i].toString())
                if(students[i].gender == '남') {
                    newStudentInfo.css('background-color', 'springgreen').css('color', 'blue')
                } else {
                    newStudentInfo.css('background-color', 'black').css('color', 'pink')
                }

                information.append(newStudentInfo)
            }
        })

    }
)