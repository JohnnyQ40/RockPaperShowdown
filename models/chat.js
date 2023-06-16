const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Chat extends Model{
  constructor(id, user1_id, user2_id) {
    this.id = id;
    this.user1_id = user1_id;
    this.user2_id = user2_id;
  }
}

class GameChat extends Chat {
  constructor(id, user_1, user_2, game_id) {
    this.id = id;
    this.user_1 = user_1;
    this.user_2 = user_2;
    this.game_id = game_id;
  }
}

GameChat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user1_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "game",
        key: "user1_id",
      },
    },
    user2_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "game",
        key: "user2_id",
      },
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "game",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "gameChat",
  }
);

class UserChat extends Chat {
  constructor(id, user_1, user_2) {
    this.id = id;
    this.user1_id = user1_id;
    this.user2_id = user2_id;
  }
}

UserChat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user1_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    user2_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "userChat",
  }
);

module.exports = {
  Chat,
  GameChat,
  UserChat,
};
