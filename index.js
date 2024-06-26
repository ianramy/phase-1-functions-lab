// Code your solution in this file!
// Function to calculate distance in blocks from headquarters (42nd street)
function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}

// Function to calculate distance in feet from headquarters using blocks
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

// Function to calculate distance travelled in feet between two points
function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination);
    return blocksTravelled * 264;
}

// Function to calculate fare price based on distance travelled in feet
function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
    
    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

// Exporting functions if needed in a module environment
module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};
