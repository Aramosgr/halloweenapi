const sql = require('mssql');

var config = {
    userName: 'halloween',
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
            let query = `select state from gameState`;
            const connection = await sql.connect(config);
            const result = connection.request().query(query);
            return result;
        } catch (e) {
            console.log(e);
        }
    }
};