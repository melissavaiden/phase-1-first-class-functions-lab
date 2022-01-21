const returnFirstTwoDrivers = function (weAreDrivers = [driver1, driver2, driver3]) {
    return weAreDrivers.slice(0, 2);
}
const returnLastTwoDrivers = function (weAreDrivers = [driver1, driver2, driver3]) {
    return weAreDrivers.slice(-2);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function fareQuintupler(num) { 
        return num * multiplier
    }
}
const fareDoubler = function(multiplier) {
    return multiplier * 2;
    }
const fareTripler = function(multiplier) {
    return multiplier * 3;
}
function selectDifferentDrivers(drivers, parameter) {
    if (parameter === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    } else if (parameter === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
}