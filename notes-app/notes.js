const getNotes = function() {
    var note = ['This is a test note. Hello, how are you.', 'Today I went to the grocery store and bought lots of ice cream.', 'Im really sick this week and its been really difficult to wake up.','last note']
    for (let i = 0; i < note.length; i++) {
        const el = note[i]
        console.log(el)
    }
}

module.exports = getNotes