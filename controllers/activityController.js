const Activity = require("../models/Activity");

exports.getActivities = async (req, res) => {
  try {
    const await activities = Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
