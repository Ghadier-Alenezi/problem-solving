// You will be given a sequence of objects representing data about developers who have
// signed up to attend the next coding meetup that you are organising.
// Your task is to return a sequence which includes the developer who is the oldest.
// In case of a tie, include all same-age senior developers listed in the same order as
// they appeared in the original input array.

function findSenior(list) {
let maxAge = 0;
let seniorDev = [];
list.map((ele) => {
  if (ele.age > maxAge) {
    maxAge = ele.age;
  }
  list.filter((item) => {
    item.age === maxAge;
    seniorDev = item;
  });
});
return seniorDev;
}
findSenior(list1);

// list.reduce((acc, currentValue) => {
//   if (acc > currentValue) return acc;
// }, []);