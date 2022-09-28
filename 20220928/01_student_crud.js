function Student(name, age, number) {
    this.name = name
    this.age = age
    this.number = number
}

Student.prototype.regist = function() {
    alert(this.number + ' ' + this.name + ' 학생 등록 완료')
}

Student.prototype.toString = function() {
    return this.name + ' ' + this.number + ' ' + this.age
}

window.onload = () => {
    let myName = document.querySelector('#name')
    let myAge = document.querySelector('#age')
    let myNum = document.querySelector('#num')
    let myCreate = document.querySelector('#create')
    let myRead = document.querySelector('#read')
    let myUpdate = document.querySelector('#update')
    let myDelete = document.querySelector('#delete')
    let myConsole_log = document.querySelector('#console_log')

    let myStudents = []

    myCreate.onclick = function() {
        for (const iterator of myStudents) {
            if(iterator.number == myNum.value) {
                alert('중복 학생 존재')
                return
            }
        }

        let tempStudent = new Student(myName.value, myAge.value, myNum.value)
        myStudents.push(tempStudent)
        tempStudent.regist()
        console.log(myStudents.toString())
        console.log(myStudents)
    }

    function findStudent() {
        // findIndex : 객체형태의 배열에서 특정 조건에 맞는 객체가 몇 번에 있는지 찾기
        // indexOf : 숫자나 문자열 형태의 배열에서 찾고자 하는 값의 위치를 찾음
        const idx = myStudents.findIndex(
            function(item) {
                return item.number == myNum.value
            }
        )

        if(idx != -1) {
            alert(`${myStudents[idx].number}번 학생은 ${myStudents[idx].name}`)
        } else {
            alert('해당하는 학생이 없습니다.')
        }
    }

    myRead.onclick = findStudent

    myUpdate.addEventListener('click', () => {
        const idx = myStudents.findIndex(
            function(item) {
                return item.number == myNum.value
            }
        )

        if(idx != -1) {
            myStudents[idx].name = myName.value
            myStudents[idx].age = myAge.value
        }
    })

    myDelete.addEventListener('click', function() {
        for(let i = 0; i < myStudents.length; i++) {
            if(myNum.value == myStudents[i].number) {
                myStudents.splice(i, 1) // i번째 인덱스 제거
                alert('학생 삭제 완료')
                return
            }
        }
        alert('해당 학생 없음')
    })

    let allSelect = function() {
        for (const iterator of myStudents) {
            console.log(iterator.toString())            
        }
    }

    myConsole_log.addEventListener('click', allSelect)
}