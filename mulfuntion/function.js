function sum(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

const student = {
    name: 'Quang',
    mark: 9.3
}

const objToExports = {
    student,
    sum, 
    mul
}

module.exports = objToExports;