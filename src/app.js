let express = require( 'express' );
let app = express();
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
let stream = require( './ws/stream' );
let path = require( 'path' );
let favicon = require( 'serve-favicon' );

app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/home.html' );
});
app.get( '/login', ( req, res ) => {
    res.sendFile( __dirname + '/login.html' );
});
app.get( '/signup', ( req, res ) => {
    res.sendFile( __dirname + '/signup.html' );
});
app.get( '/video', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
});
app.get( '/dashboard', ( req, res ) => {
    res.sendFile( __dirname + '/dashboard.html' );
});


io.of( '/stream' ).on( 'connection', stream );

server.listen(3000 );