let sql = require('./sql');
let executequery = require('./executequery');
let moment = require('moment');

function formatData(rows) {
    return rows.map(row => {
        let date = moment(row.create_time).format('YYYY-MM-DD');
        return Object.assign({}, row, {create_time: date});
    });
}
module.exports = {
    // 获取商品列表
    updateOne (req, res) {
      let id = req.body.id;
      console.log(id);
      let name = req.body.name;
      let password = req.body.password;
      let email = req.body.email;
      let query, arr;

      if (id) {
          // 更新
          query = 'UPDATE user SET name=?, password=?, email=? WHERE name=?';
          arr = [name, password, email, name];
      }

      executequery.connPool(query, arr, rows => {
          res.send({code:200,msg:'done'});
      });

    },

    // 获取商品详情
    checkByName (req, res) {
        let name = req.body.name;
       let password = req.body.password;
       console.log('aa');

        executequery.connPool(sql.queryByNameAndPassword, ['user', name, password], rows => {
            rows = formatData(rows);
            res.send({code: 200, msg: 'ok', user:rows[0]});
        });

    },

    addOne (req, res) {
        console.log(req.body);
        let name = req.body.name;
        let password = req.body.password;
        let email = req.body.email;
        let query, arr;

            query = 'INSERT INTO user(name, password, email) VALUES(?,?,?)';
            arr = [name, password, email];

        executequery.connPool(query, arr, rows => {
            res.send({code:200,msg:'done'});
        });

    },

    deleteOne (req, res) {

        let name = req.body.name;

        executequery.connPool(sql.del, ['User', name], rows => {
            res.send({code:200,msg:'done'});

        });

    }


};
