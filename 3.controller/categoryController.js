const db = require('../1.database')

module.exports = {
    getCategoryList : (req,res) => {
        var sql = `select * from categories;`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },
    addCategory : (req,res) => {
        var nama = req.body.nama
        var sql = `insert into categories (nama) values ('${nama}');`
        db.query(sql,(err,result)=>{
            if(err) throw err
            var sql2 = `select * from categories;`
            db.query(sql2,(err,result2)=>{
                if(err) throw err
                res.send(result2)
            })
        })
    },
    deleteCategory : (req,res) => {
        var id = req.params.id
        var sql = `delete from categories where id = ${id};`
        db.query(sql,(err,result)=>{
            if(err) throw err
            var sql2 = `select * from categories;`
            db.query(sql2,(err,result2)=>{
                if(err) throw err
                res.send(result2)
            })
        })
    },
    editCategory : (req,res) => {
        var id = req.params.id
        var nama = req.body.nama
        var sql = `update categories set nama = '${nama}' where id = ${id};`
        db.query(sql,(err,result)=>{
            if(err) throw err
            var sql2 = `select * from categories;`
            db.query(sql2,(err,result2)=>{
                if(err) throw err
                res.send(result2)
            })
        })
    }
}