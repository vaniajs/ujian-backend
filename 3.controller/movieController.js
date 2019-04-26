const db = require('../1.database')


module.exports = {
    getMovieList : (req,res) => {
        var sql = `select * from movies;`
        db.query(sql,(err,result)=>{
            try {
                if(err) throw err
                res.send(result)
            } catch (err) {
                console.log(err)
            }
        })
    },
    deleteMovie : (req,res) => {
        var id = req.params.id
        var sql = `delete from movies where id=${id};`
        db.query(sql,(err,result)=>{
            if(err) throw err
            var sql2 = `select * from movies;`
            db.query(sql2,(err,result2)=>{
                if(err) throw err
                res.send(result2)
            })
        })
    },
    editMovie : (req,res) => {
        var nama = req.body.nama
        var tahun = req.body.tahun
        var description = req.body.description
        var id = req.params.id
        var sql = `update movies set nama = '${nama}', tahun = ${tahun}, description = '${description} ' where id = ${id};`
        db.query(sql,(err,result)=>{
            if(err) throw err
            var sql2 = `select * from movies;`
            db.query(sql2,(err,result2)=>{
                if(err) throw err
                res.send(result2)
            })
        })
    },
    addMovie : (req,res) => {
        var data = {
            nama : req.body.nama,
            tahun : req.body.tahun,
            description : req.body.description
        }
        var sql =`insert into movies set ? ;`
        db.query(sql,data,(err,result)=>{
            if(err) throw err
            var sql2 = `select * from movies;`
            db.query(sql2,(err,result2)=>{
                res.send(result2)
            })
        })
    }

}
