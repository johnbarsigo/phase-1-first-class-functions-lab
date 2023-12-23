let driversList = [ "Alex", "Future", "Andrea", "Matata" ];

//NO.1

const returnFirstTwoDrivers = function(driversList) {
    return driversList.slice(0, 2);
}
//console.log (returnFirstTwoDrivers(driversList));

//NO.2

const returnLastTwoDrivers = function (driversList) {
    return driversList.slice(-2);
}
const newDriversArray = returnLastTwoDrivers (driversList);
//console.log (newDriversArray);

//NO.3

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];
const firstDrivers = selectingDrivers[0](driversList);
//console.log ( firstDrivers );

//NO.4

function createFareMultiplier (multiplier) {
    return function fareAmount (fare){
        return fare * multiplier;
    }
}
//console.log ( createFareMultiplier(4)(800) );

//NO.5

const doubleFare = createFareMultiplier ( 2 );

const fareDoubler = function (fare) {
    return doubleFare ( fare );
}
//console.log ( fareDoubler(10500) );

//NO.6

const tripleFare = createFareMultiplier (3);

const fareTripler = function (fare){
    return tripleFare ( fare );
}
//console.log ( fareTripler(36000) );

function selectDifferentDrivers ( array1, function1){
    return function1(array1);
}
//console.log (selectDifferentDrivers( driversList, returnFirstTwoDrivers));