//const driverList = ['Antonia', 'Naru', 'Amari', 'Mo']

const returnFirstTwoDrivers = driverList => {
    const array2 = driverList.slice(0,2);
    return array2;
}

const returnLastTwoDrivers = driverList => {
    const array3 = driverList.slice(2);
    return array3;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier() {
    return num1 => num1 * num1
}

function fareDoubler(num1) {
    const invoke = createFareMultiplier()
    const invoke2 = invoke(num1) 
    return Math.sqrt(invoke2) * 2
}

function fareTripler(num1) {
    const invoke = createFareMultiplier()
    const invoke2 = invoke(num1) 
    return Math.sqrt(invoke2) * 3
}

function selectDifferentDrivers (driverList, returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(driverList);
    }