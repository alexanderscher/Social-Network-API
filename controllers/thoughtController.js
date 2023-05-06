const { Thought } = require("../models");
const { ObjectId } = require("mongoose").Types;

module.exports = {
  getThoughts(req, res) {
    Thought.find({})
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : console.log(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  //     updateThought(req, res) {
  //       console.log(
  //         `userID: ${req.params.userID}, update: ${JSON.stringify(req.body)}`
  //       );
  //       User.findOneAndUpdate(
  //         { _id: req.params.userID },
  //         { $set: req.body },
  //         { new: true }
  //       )
  //         .then((user) =>
  //           !user
  //             ? res.status(404).json({ message: "No user with that ID" })
  //             : res.json({ message: "User has been updated!", user })
  //         )
  //         .catch((err) => res.status(500).json(err));
  //     },
  //     deleteUser(req, res) {
  //       User.findOneAndDelete({ _id: req.params.userId })
  //         .then((user) =>
  //           !user
  //             ? res.status(404).json({ message: "No user with that ID" })
  //             : Thought.deleteMany({ _id: { $in: user.thoughts } })
  //         )
  //         .then(() => res.json({ message: "User and thoughts deleted!" }))
  //         .catch((err) => res.status(500).json(err));
  //     },
};
