const config = {
    db: {
        //do not expose password, this is for demo purposes only
        host: 'kitra2.c8wqmzhx1vgf.ap-southeast-2.rds.amazonaws.com',
        user: 'admin',
        password: 'password',
        port: 3306,
        database: 'kitra2',
        multipleStatements: true,
        connectionLimit: 10
    }
}

module.exports = config