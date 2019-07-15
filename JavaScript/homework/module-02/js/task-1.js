// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// // Удалить первый элемент массива
// users.splice(0, 1);
// console.log('users :', users);

// // Удалить последний элемент массива
// users.splice(2, 1);
// console.log('users :', users);

// // Добавить в начало массива пользователя "Lux"
// users.splice(0, 0, 'Lux');
// console.log('users :', users);


// // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// users.splice(3, 4, 'Jay', 'Kiwi');
// console.log('users :', users);

// // Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = 'Ajax';
// console.log(users.splice(users.indexOf(userToDelete), 1));
// console.log(users);

// // Добавить в массив пользователя хранящегося в переменной userToInsert,
// // перед пользователем хранящимся в переменной insertBefore
// const userToInsert = 'Kong';
// const insertBefore = 'Jay';
// console.log(users.splice(users.indexOf(insertBefore), 0, userToInsert));
// console.log(users);

