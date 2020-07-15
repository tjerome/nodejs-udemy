require('../src/db/mongoose')
const Task = require('../src/models/task')

// 5f089b33f76e40dd4550f022

Task.findByIdAndDelete('5f089b33f76e40dd4550f022').then((tasks) => {
    console.log(tasks)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})