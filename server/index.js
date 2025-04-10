import express from "express";
import { 
    getArtist, 
    getSample, 
    getlatest, 
    getgenre, 
    getartistlim, 
    getall, 
    getArtistMusic, 
    getgenrall, 
    getallwlike,
    searchMusicAndArtists,
    getallwlikelimit } from "./Apis/getapis.js";
import { addartist, adduser, checkuser, addmusic, addlikedmusic, removelikedmusic} from "./Apis/postapis.js";
import fs from 'fs'
import https from 'https';
import cors from 'cors';

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/api.contactsushil.me/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/api.contactsushil.me/fullchain.pem')
};

async function startServer() {
    try {
        const app = express();
       
    //app.use(cors({ origin: 'http://localhost:5173' }));
        
        app.use(express.json());
        app.get('/artist', getArtist);
        app.get('/allmusic', getall);
        app.get('/latest', getlatest);
        app.get('/artistlimit', getartistlim);
        app.get('/getgenre/:genre', getgenre);
        app.get('/artist/:artistkey', getArtistMusic);
        app.get('/getgenreall/:genre', getgenrall);
        app.get('/allmusic/:user', getallwlike);
        app.get('/allmusiclim/:user', getallwlikelimit);
        app.post('/addmusic', addmusic);
        app.post('/likemusic', addlikedmusic);
        app.post('/removelike', removelikedmusic);
        app.post('/login', checkuser);
        app.post('/addartist', addartist);
        app.post('/add', adduser);
        app.get('/',getSample);
        app.post('/search',searchMusicAndArtists);


      const server = https.createServer(options, app);
       server.listen(443, () => {
           console.log('Server is running on port 443');
        });
      //  app.listen(3000, ()=> {
      //      console.log("Running at 3000");
      //  })
    } catch (error) {
        console.error("Failed to start server:", error);
    }
}

startServer();
