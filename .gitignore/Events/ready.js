
module.exports = async(client) => {
    
    client.user.setStatus('idle'); //Telling discord we are online.
    client.user.setActivity("★☆French Origin☆★"); //Setting our dicord "playing" status to a defined text
    console.log(`Logged in as ${client.user.tag}`); //Sending a message into the console saying that we are logging in as (usertag). Can be usefull when you have multiple bots running on the same machine
};
