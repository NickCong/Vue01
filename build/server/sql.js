module.exports = {
    queryAll: 'SELECT * FROM ??',
    queryByName: 'SELECT * FROM ?? WHERE name=?',
    queryByNameAndPassword:'SELECT * FROM ?? WHERE name=? and password =?',
    del: 'DELETE FROM ?? WHERE name=?',
};
