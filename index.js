// Code your solution in this file!

// Initial solution:
    // const returnFirstTwoDrivers = function (drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']) {
    //     return drivers.slice (0, 2);
    // }
// Simplified:
    const returnFirstTwoDrivers = drivers => drivers.slice (0, 2);

// Initial solution:
    // const returnLastTwoDrivers = function (drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']) {
    //     return drivers.slice (-2);
    // }
// Simplified:
    const returnLastTwoDrivers = drivers => drivers.slice (-2);

// Next solution:
    const selectingDrivers = [returnFirstTwoDrivers,  returnLastTwoDrivers];

// Initial solution:
    // function createFareMultiplier (multiplier) {
    //     return rideFare => rideFare * multiplier;
    //     }
// Simplified:
    const createFareMultiplier = multiplier => rideFare => rideFare * multiplier;

// Next solution:
const fareDoubler = createFareMultiplier (2);

// Next solution:
const fareTripler = createFareMultiplier (3);

// Initial solution:
    // function selectDifferentDrivers (array, fn) {
    //     return fn(array);
    // }
// Simplified:
const selectDifferentDrivers = (array, fn) => fn (array);


