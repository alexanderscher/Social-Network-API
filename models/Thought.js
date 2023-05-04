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
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reaction",
    },
  ],

  toJSON: {
    virtuals: true,
  },
  id: false,
});
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thoughts = model("thought", thoughtSchema);

module.exports = Thoughts;
