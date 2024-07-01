let user = {
  name: 'Eugene',
  age: 42,
  toDrunk: true,
};

let func = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('путин - хуйло');
      if (user.toDrunk) {
        resolve(user);
      } else {
        reject('Он не пьёт уже');
      }
    }, 2000);
  });
};

func()
  .then(userData => {
    setTimeout(() => {
      console.log(userData);
    }, 2000)
  })
.catch(message => {
  setTimeout(() => {
    console.log(message);
  }, 2000)
})
