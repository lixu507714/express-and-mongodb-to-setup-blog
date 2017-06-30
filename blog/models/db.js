var settings = require('../settings'),
    Db = require('mongdb').Db,
    Connection = require('mongdb'.Connection),
    Server = require('mongdb').Server;
module.exports = new Db(settings.db,new Server(settings.host,settings.port),{safe:true});