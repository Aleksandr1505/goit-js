import users from "./user.js";

// 1
const getUserNames = users => {
  return users.map(user => user.name);
};
console.log(getUserNames(users));

// 2
const getUsersWithEyeColor = (users, color) => {
  return users.filter(elem => elem.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue"));

// 3
const getUsersWithGender = (users, gender) => {
  return users.filter(elem => elem.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, "male"));

// 4
const getInactiveUsers = users => {
  return users.filter(elem => elem.isActive === false);
};

console.log(getInactiveUsers(users));

// 5
const getUserWithEmail = (users, email) => {
  return users.find(elem => elem.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// 6
const getUsersWithAge = (users, min, max) => {
  return users.filter(elem => elem.age >= min && elem.age <= max);
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// 7
const calculateTotalBalance = users => {
  return users.reduce((acc, elem) => acc + elem.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// 8
const getUsersWithFriend = (users, friendName) => {
  return users.filter(elem => elem.friends.includes(friendName)).map(user => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// 9
const getNamesSortedByFriendsCount = users => {
  return users.sort((a, b) => (a.friends.length >= b.friends.length ? 1 : -1)).map(user => user.name);
};
console.log(getNamesSortedByFriendsCount(users));
// [ ‘Moore Hensley’, ‘Sharlene Bush’, ‘Elma Head’, ‘Carey Barr’, ‘Blackburn Dotson’, ‘Sheree Anthony’, ‘Ross Vazquez’ ]

// 10
const getSortedUniqueSkills = users =>
  users.reduce((allSkills, skill) => {
    
    allSkills.push(...skill.skills);
    return allSkills;
}, []).reduce((allSkills, skill) => {
    if(!allSkills.includes(skill)) {
        allSkills.push(skill);
    }
    return allSkills;
}, []).sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]