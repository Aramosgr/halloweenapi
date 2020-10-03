const sql = require('mssql');

var config = {
    user: 'halloween',
    password: 'Viernes22?metal',
    server: 'halloween.database.windows.net',
    database: 'halloween',
    options: {
        enableArithAbort: true
    }
};

module.exports = {
    getGameState: async function () {
        try {
            let query = `select * from gameState`;
            const connection = await sql.connect(config);
            const result = await connection.request().query(query);
            return result.recordset[0];
        } catch (e) {
            console.log(e);
        }
    }
};