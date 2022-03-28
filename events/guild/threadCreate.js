//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by DEADSHOT X#6966 | https://discord.gg/DEADSHOT X
 * @INFO
 * Work for DEADSHOT X Development | https://DEADSHOT X.eu
 * @INFO
 * Please mention him / DEADSHOT X Development, when using this Code!
 * @INFO
 */
