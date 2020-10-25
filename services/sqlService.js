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
    getGameState: async function (id) {
        try {
            let query = `select * from gameState where id=${id}`;
            const connection = await sql.connect(config);
            const result = await connection.request().query(query);
            return result.recordset[0];
        } catch (e) {
            console.log(e);
        }
    },
    setGameState: async function (id, state) {
        try {
            let query = `update gameState set state=${state} where id=${id}`;
            const connection = await sql.connect(config);
            await connection.request().query(query);
            return this.getGameState(id);
        } catch (e) {
            console.log(e);
        }
    },
    getPhases: async function () {
        try {
            let query = `select * from phase`;
            const connection = await sql.connect(config);
            const result = await connection.request().query(query);
            return result.recordset;
        } catch (e) {
            console.log(e);
        }
    },
    getPhase: async function (id) {
        try {
            let query = `select * from phase where id=${id}`;
            const connection = await sql.connect(config);
            const result = await connection.request().query(query);
            return result.recordset[0];
        } catch (e) {
            console.log(e);
        }
    },
    getParticipants: async function () {
        try {
            let query = `select * from participant`;
            const connection = await sql.connect(config);
            const result = await connection.request().query(query);
            return result.recordset;
        } catch (e) {
            console.log(e);
        }
    },
    setParticipantPhase: async function (code, phase) {
        try {
            let query = `update participant set phase=${phase} where code=${code}`;
            const connection = await sql.connect(config);
            await connection.request().query(query);
            return this.getGameState(id);
        } catch (e) {
            console.log(e);
        }
    },
};