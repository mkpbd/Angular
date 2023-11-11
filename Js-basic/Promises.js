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

getUser(login)
.then(function (user) {
return getRights(user) // getRights is returning a promise
.then(function (rights) {
return updateMenu(rights);
});
})




getUser(login)
.then(function (user) {
console.log(user);
})