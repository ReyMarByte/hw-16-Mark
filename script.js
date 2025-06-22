let groupTitle = 'Java 10'
let group = ['Gena', 'Andrey', 'Elena', 'Anton']
let showList = function (students) {
    students.forEach(name => {
        console.log(`${groupTitle}: ${name}`)
    })
}
showList(group)


let newGroup = [...group]
group = null;
console.log('==================');
showList(newGroup)