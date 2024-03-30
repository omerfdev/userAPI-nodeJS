let users = [];

exports.addUser = (req, res) => {
  const { id, name } = req.body;
  const user = { id, name, active: true };
  users.push(user);
  res.status(201).json({ success: true, data: user });
};

exports.activeUser = (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id === id);
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }
  user.active = true;
  res.status(200).json({ success: true, data: user });
};

exports.deactiveUser = (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id === id);
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }
  user.active = false;
  res.status(200).json({ success: true, data: user });
};

exports.removeUser = (req, res) => {
  const id = req.params.id;
  users = users.filter(user => user.id !== id);
  res.status(200).json({ success: true, message: 'User removed' });
};
