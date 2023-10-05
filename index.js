// Code your solution in this file!


// Function to calculate the distance in blocks from Scuber's headquarters
function distanceFromHqInBlocks(pickupBlock) {
    return Math.abs(pickupBlock - 42); // Absolute value to handle both uptown and downtown
  }
  
  // Function to calculate the distance in feet from Scuber's headquarters
  function distanceFromHqInFeet(pickupBlock) {
    const blocks = distanceFromHqInBlocks(pickupBlock);
    return blocks * 264; // Each block is 264 feet
  }
  
  // Function to calculate the distance traveled in feet based on start and destination blocks
  function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocks = Math.abs(destinationBlock - startBlock);
    return blocks * 264; // Each block is 264 feet
  }
  
  // Function to calculate the fare price based on the distance traveled
  function calculatesFarePrice(startBlock, destinationBlock) {
    const distance = distanceTravelledInFeet(startBlock, destinationBlock);
    
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
    } else if (distance <= 2500) {
      return 25; // Flat fare for distance between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
  }
  
  // Example usages
  console.log(distanceFromHqInBlocks(43)); 
  console.log(distanceFromHqInFeet(43));   
  console.log(distanceTravelledInFeet(34, 38)); 
  console.log(calculatesFarePrice(34, 38));   