const getDefaultTeacher = () => {
    return [{
        id: 1,
        name: 'Doreen Raymond',
        subject: [1]
    }, {
        id: 2,
        name: 'Best Hawkins',
        subject: [2]
    }, {
        id: 3,
        name: 'Estela Townsend',
        subject: [3]
    }, {
        id: 4,
        name: 'Avery Mosley',
        subject: [4]
    }, {
        id: 5,
        name: 'Eva Hendrix',
        subject: [5]
    }]
}

export const teacherService = {
    getDefaultTeacher
}