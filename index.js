// Code your solution here
function findMatching(drivers, driverName) {
    return drivers.filter(driver =>
        driverName.toLowerCase() === driver.toLowerCase()
    );
}

function fuzzyMatch(drivers, driverPartial) {
    return drivers.filter( driver =>
        driver.toLowerCase().indexOf(driverPartial.toLowerCase()) === 0
    )
}

function matchName(driversObjectsArray, driverString) {
    return driversObjectsArray.filter( driverObject => 
       driverObject.name.toLowerCase() === driverString.toLowerCase() )
}