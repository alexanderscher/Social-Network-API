const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: String,
    email: String,
    age: Number,
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
userSchema.virtual("friendCount").get(function () {
  return this.friend.length;
});

const User = model("user", userSchema);

module.exports = User;
