const person = {
    name : "Jack William",
    age : 17,
    job : "facebook",
    gfName : "Ema Watson",
    phoneNumber : 01886616638,
    friends : ["Tom hanks", "Tom yarn", "Tom mehedi"]
}
const {gfName, friends, phoneNumber, salary} = person;
// const phoneNumber = person.phoneNumber;

//const {phoneNumber} = person;
console.log(gfName, phoneNumber, friends);
console.log(gfName, phoneNumber, friends);
const bestFriends = ["sakib khan", "aamir khan", "salman khan"];
const [first, ...restfriends] = bestFriends;
console.log( ...restfriends);

const complexObject = {
    name : "araf sarkar",
    info: {
        leader : "tiger",
        address : "matlab"
    }
}

const {leader} = complexObject.info;
console.log(leader);