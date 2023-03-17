const Anime_Images = require('anime-images-api')
const API = new Anime_Images()
async function getIMG() {
    let { image } = await API.sfw.hug()
    console.log(image)
}
getIMG()
//Or get an NSFW Image:
getNSFWImg()
async function getNSFWImg() {
    let { image } = await API.nsfw.hentai()
    console.log(image)
}

const Anime_Images = require('anime-images-api')
const API = new Anime_Images()

    (async () => {
        let image = await API.sfw.hug();
        image.download('images', 'hugging') //Path, Filename
            .then(() => console.log('Finished Downloading'))
    })()


const Discord = require('discord.js');
const client = new Discord.Client()
const API = require('anime-images-api')
const images_api = new API()

client.on('message', function (m) {
    if (m.content.startsWith('image')) {
        images_api.sfw.hug().then(response => {
            m.channel.send(response.image)
        })
    }
})