
const Discord = require('discord.js');

const client = new Discord.Client();

client.commands = new Discord.Collection();

const fs = require('fs');



fs.readdir('./Commandes/', (error, f) => {

    if (error) { return console.error(error); }

        let commandes = f.filter(f => f.split('.').pop() === 'js');

        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }



        commandes.forEach((f) => {

            let commande = require(`./Commandes/${f}`);

            console.log(`${f} commande chargée !`);

            client.commands.set(commande.help.name, commande);

        });

});



fs.readdir('./Events/', (error, f) => {

    if (error) { return console.error(error); }

        console.log(`${f.length} events chargés`);



        f.forEach((f) => {

            let events = require(`./Events/${f}`);

            let event = f.split('.')[0];

            client.on(event, events.bind(null, client));

        });

});



client.login(process.env.TOKEN)

https://cdn.discordapp.com/avatars/595363188074086402/a_9d62317f122e24020d3718fb9832a6c4.gif

