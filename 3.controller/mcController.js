const db = require('./../1.database')

module.exports = {
    getList : (req,res) => {
        var sql = `select m.nama as Movie, c.nama as Category from movcat n
                    join movies m on idmovie = m.id
                    join categories c on idcategory = c.id;`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.send(result)
        })
    },
    // addMc : (req,res) => {
    //     var idM = req.body.idmovie
    //     var idC = req.body.idcategory
    //     var sql = `insert into movcat (idmovie, idcategory) values (${idC},${idM});`
    //     db.query(sql,(err,result)=>{
    //         if(err) throw err
    //         res.redirect('/mc/getList')
    //     })
    // },
    addMc : (req,res) => {
            var movie = req.body.movie
            var category = req.body.category
            var sql = `select id from movies where nama = '${movie}';`
            db.query(sql,(err,result)=>{
                if(err) throw err
                var sql2 = `select id from categories where nama = '${category}';`
                db.query(sql2,(err,result2)=>{
                    if(err) throw err
                    var sql3 = `insert into movcat (idmovie, idcategory) values (${result[0].id},${result2[0].id});`
                    db.query(sql3,(err,result3)=>{
                        if(err) throw err
                        res.redirect('/mc/getList')
                    })
                })
            })
    },

    deleteMc : (req,res) => {
        var movie = req.body.movie
        var category = req.body.category
        var sql = `select id from movies where nama = '${movie}';`
        db.query(sql,(err,result)=>{
            if(err) throw err
            var sql2 = `select id from categories where nama = '${category}';`
            db.query(sql2,(err,result2)=>{
                if(err) throw err
                var sql3 = `delete from movcat where idmovie = ${result[0].id} and idcategory = ${result2[0].id};`
                db.query(sql3,(err,result3)=>{
                    if(err) throw err
                    res.redirect('/mc/getList')
                })
            })
        })
    }
}