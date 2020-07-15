require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')
const { update } = require('../src/models/user')

// 5f0897ab184eeedc0e755f31

// User.findByIdAndUpdate('5f0897ab184eeedc0e755f31', { age: 11}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 11 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age })
//     const count = await User.countDocuments({ age })

//     return count
// }

// updateAgeAndCount('5f0897ab184eeedc0e755f31', 2).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })

    return count
}

deleteTaskAndCount('5f060b9575439dd2876daa0a').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})