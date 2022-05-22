/* Your Code Here */

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array) {
    let newArray = array.map((el) => createEmployeeRecord(el))
    return newArray
}

function createTimeInEvent(dateStamp) {
    let obj = {
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(-4),10),
        date: dateStamp.split(' ') [0]
    }

    this.timeInEvents.push(obj)
    return this
}

function createTimeOutEvent(dateStamp) {
    let obj = {
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(-4),10),
        date: dateStamp.split(' ') [0]
    }

    this.timeOutEvents.push(obj)
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let hourIn = this.timeInEvents.find((el) => el.date === dateStamp).hour
    let hourOut = this.timeOutEvents.find((el) => el.date === dateStamp).hour
    return (hourOut - hourIn) / 100
}

function wagesEarnedOnDate(dateStamp) {
    let pay = this.payPerHour
    let hours = hoursWorkedOnDate.call(this,dateStamp)
    const wages = hours * pay
    return wages
}

function findEmployeeByFirstName(srcArray, firstName){
    let employee = srcArray.find((el) => el.firstName === firstName)
    return employee 
}

function calculatePayroll(array){
    let total = 0
    array.forEach(element => {
        total += allWagesFor.call(element)        
    });
    return total
}

// function calculatePayroll(records){
//     return records.reduce(function(memo, record){
//         return memo + allWagesFor.call(record)
//     }, 0)
// }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

