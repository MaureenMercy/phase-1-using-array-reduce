const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);

console.log(totalBatteries); // This will output the total number of batteries
const totalBatteries = batteryBatches.reduce((sum, batch) => {
    console.log(`Current sum: ${sum}, Adding batch of ${batch}`);
    return sum + batch;
  }, 0);