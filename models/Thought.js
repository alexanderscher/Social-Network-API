const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    minLength: 1,
    maxLength: 280,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (value) {
      return moment(value).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
  username: {
    type: String,
    required: true,
  },
  reactions: {
    ype: String,
    required: true,
  },

  toJSON: {
    virtuals: true,
  },
  id: false,
});
userSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const User = model("thought", thoughtSchema);

module.exports = User;
