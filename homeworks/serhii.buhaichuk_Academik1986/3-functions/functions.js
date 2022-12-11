const volumeOneTankLiquid = 1;
const oilWeight = 926;
const waterWeight = 1000;
const mercuryWeight = 1355;

const oilTankCount = 3;
const waterTankCount = 5;
const mercuryTankCount = 2;

function getWeight(weight, liquid, count) {
    if (liquid) {
        return weight * liquid * count;
    }
};

const oilTotalWeight = (getWeight(volumeOneTankLiquid, oilWeight, oilTankCount));
const waterTotalWeight = (getWeight(volumeOneTankLiquid, waterWeight, waterTankCount));
const mercuryTotalWeight = (getWeight(volumeOneTankLiquid, mercuryWeight, mercuryTankCount));

console.log(`Total weight liquid: ${oilTotalWeight + waterTotalWeight + mercuryTotalWeight} kg`);
