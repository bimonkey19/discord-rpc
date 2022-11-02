const app = require('express')();

app.get('/', async (req, res) => {
  res.send('Bot chạy');
});

app.listen(3000, async () => {
  console.log('Listening on port 3000');
});

const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport : 'ipc'
});

rpc.on('ready' , () => { 
     rpc.setActivity({ 
        details: 'Hi, I am Bi Monkey', 
        state: 'Coding time',
        startTimestamp: new Date(),
        largeImageKey:'bi_logo',
        largeImageText: 'Bi Monkey',
        smallImageKey:'vs_logo',
        smallImageText:'Visual Studio Code',
        buttons: [{
            label: 'SERVER RGF',
            url: 'https://discord.gg/rinfoxgao'
            },]


     });
     console.log('RPC is running');
})
rpc.login(
    {
        clientId: '1037134934650929174'
    }
)