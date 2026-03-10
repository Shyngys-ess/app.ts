//1.
let strVal: string = "Hello"
let numVal: number = 42
let boolVal: boolean = true
let nums: number[] = [10, 20, 30, 40]

console.log("strVal:", strVal)
console.log("numVal:", numVal)
console.log("boolVal:", boolVal)
console.log("nums:", nums)

//2.
function average(nums: number[]): number {
  let sum = 0
  for (let n of nums) {
    sum += n
  }
  return nums.length ? sum / nums.length : 0
}

console.log("Average of nums:", average(nums))

//3. 
interface Student {
  id: number
  name: string
  age: number
  scores: number[]
}

//4.
let st: Student = {
  id: 2,
  name: "Ali",
  age: 22,
  scores: [75, 88, 93]
}

console.log("Student object:", st)
console.log("Student average score:", average(st.scores))

//5.
class StudentList {
  private list: Student[] = []

  add(st: Student): void {
    this.list.push(st)
  }

  show(): void {
    this.list.forEach(s => {
      console.log(ID: ${s.id}, Name: ${s.name}, Age: ${s.age}, Scores: ${s.scores})
    })
  }
}

let group = new StudentList()
group.add(st)
group.add({ id: 3, name: "Dana", age: 21, scores: [80, 85, 90] })

console.log("All students:")
group.show()


/*
strVal: Hello
numVal: 42
boolVal: true
nums: [ 10, 20, 30, 40 ]
Average of nums: 25
Student object: { id: 2, name: 'Ali', age: 22, scores: [ 75, 88, 93 ] }
Student average score: 85.33333333333333
All students:
ID: 2, Name: Ali, Age: 22, Scores: 75,88,93
ID: 3, Name: Dana, Age: 21, Scores: 80,85,90

*/
