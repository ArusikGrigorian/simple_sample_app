const { userList } = require("./database.js");

const resolvers = {
  Query: {
    users: () => {
      return userList;
    },

    user: (_, { id }) => {
      return userList.find((user) => user.id == id);
    },
  },

  User: {
    friends: () => {
      return userList.filter((user) => user.age === 24);
    },
  },

  Mutation: {
    addUser: (_, { input }) => {
      const newUser = input;
      newUser.id = userList.length + 1;
      userList.push(newUser);

      return newUser;
    },

    updateUser: (_, { input }) => {
      let updatedUser;

      userList.forEach((user) => {
        if (user.id == input.id) {
          user.fullname = input.fullname;
          updatedUser = user;
        }
      });

      return updatedUser;
    },

    deleteUser: (_, { id }) => {
      const deletedUserIndex = userList.findIndex((user) => user.id == id);
      const deletedUser = userList.splice(deletedUserIndex, 1);

      return deletedUser[0];
    },
  },
};

module.exports = { resolvers };
