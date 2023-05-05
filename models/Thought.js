const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

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
    get: (timestamp) => new Date(timestamp).toLocaleDateString(),
  },
  username: {
    type: String,
    required: true,
  },
  reaction_body: [reactionSchema],
  id: false,
});
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thoughts = model("thought", thoughtSchema);

module.exports = Thoughts;
