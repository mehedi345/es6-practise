const ages = [14, 15, 18];
const ages2 = [12, 15, 19];
const ages3 = [45, 79, 13];
//const allAges = ages.concat(ages2, ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
//console.log(allAges2);
const busineesman = 650;
const sachib = 350;
const minister = 550;
const max = [650, 350, 550];
//console.log(max);
const maximum = Math.max(...max);
console.log(maximum);