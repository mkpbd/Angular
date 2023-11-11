const getUser = function (login) {
  return new Promise(function (resolve, reject) {
    // async stuff, like fetching users from server, returning a response
    if (response.status === 200) {
      resolve(response.data);
    } else {
      reject("No user");
    }
  });
};

// getUser(login, function (user) {
//   getRights(user, function (rights) {
//     updateMenu(rights);
//   });
// });

getUser(login).then(function (user) {
  return getRights(user) // getRights is returning a promise
    .then(function (rights) {
      return updateMenu(rights);
    });
});

getUser(login).then(function (user) {
  console.log(user);
});

//  Async/await

// So we can write our previous example using async/await like

async function getUserRightsAndUpdateMenu() {
  // getUser is a promise
  const user = await getUser(login);
  // getRights is a promise
  const rights = await getRights(user);
  updateMenu(rights);
}
await getUserRightsAndUpdateMenu();

async function getUserRightsAndUpdateMenu1() {
  try {
    // getUser is a promise
    const user = await getUser(login);
    // getRights is a promise
    const rights = await getRights(user);
    updateMenu(rights);
  } catch (e) {
    // will be called if getUser, getRights or updateMenu fails
    console.log(e);
  }
}
await getUserRightsAndUpdateMenu1();


// Sets and Maps 

const cedric1 = { id: 1, name: 'Cedric' };
const users = new Map();
users.set(cedric1.id, cedric1); // adds a user

console.log(users.has(cedric.id)); // true
console.log(users.size); // 1
users.delete(cedric1.id); // removes the user
// We also have a class Set: const cedric


const uppercaseNames = (strings, ...values) => {
    // `strings` is an array with the static parts ['Hello ', '! Where is ',  '?']
    // `values` is an array with the evaluated expressions ['Cedric', 'Agnes']
    const names = values.map(name => name.toUpperCase());
    // `names` now has ['CEDRIC', 'AGNES']
    // let's merge the `strings` and `names` arrays
    return strings.map((string, i) => `${string}${names[i] ? names[i] :
    ''}`).join('');
    };
    const result = uppercaseNames`Hello ${person1} Where is ${person2}?`;