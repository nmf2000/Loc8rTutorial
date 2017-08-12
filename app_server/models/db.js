var mongoose = require('mongoose');

var dbURI = 'mongodb://127.0.0.1/Loc8r';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function () {
   console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected')
});

var gracefulShutdown = function (msg, callback){
    mongoose.connection.close(function (){
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

//Listen for SIGINT emitted on application termination
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function (){
        process.exit(0);
    });
});

//Listen for SIGUSR2 for nodemon
process.on('SIGUSR2', function () {
    gracefulShutdown('nodemon termination', function (){
        process.kill(process.pid, 'SIGUSR2');
    });
});