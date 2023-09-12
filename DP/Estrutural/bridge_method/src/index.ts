import FaceBookLive from "./platforms/FacebookLive";
import IPlatform from "./platforms/IPlatform";
import Twitch from "./platforms/Twitch";
import YouTube from "./platforms/YouTube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlatform){

    console.log("Aguarde...")
    const live = new Live(platform)
    live.broadCasting()
    live.result()


}

function startAdvacedLive(platform: IPlatform){
    console.log("Aguarde...")
    const live = new AdvancedLive(platform)

    live.broadCasting()
    live.result()
    live.comments()
    live.subtitles()
}

/* startLive(new YouTube())
startLive(new Twitch()) */

startAdvacedLive(new FaceBookLive())


