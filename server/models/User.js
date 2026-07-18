const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  githubId: { type: String, required: true, unique: true },
  username: String,
  accessToken: String, // needed later to call GitHub API for repos/PRs
  connectedRepos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Repo' }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);