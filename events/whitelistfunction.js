const { GlobalFonts } = require('@napi-rs/canvas');
const Canvas  = require('@napi-rs/canvas');
const stringnormilize = require('normalize-strings');
const { AttachmentBuilder } = require('discord.js');
module.exports = async function whitelistplr(player) { 
    let name = player.user.username;
			let playername = stringnormilize(name)
			let playernamecaps = playername.toUpperCase()
		   GlobalFonts.registerFromPath('././assets/Gilroy-ExtraBold.ttf', 'Gilroy-ExtraBold')
			const canvas = Canvas.createCanvas(1573, 740);
			const context = canvas.getContext('2d');
			const background = await Canvas.loadImage('././assets/whitelisted.png');
			context.drawImage(background, 0, 0, canvas.width, canvas.height);
		   context.font = '60px Gilroy-ExtraBold';
			context.fillStyle = '#ffffff';
			textmsr = context.measureText(playernamecaps)
			context.fillText(playernamecaps , ((canvas.width/2) - (textmsr.width / 2)), 603);
		    const discorddp = await Canvas.loadImage(player.displayAvatarURL({ format: 'png' }));
			context.drawImage(discorddp, 675, 301, 226, 225)
           const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'welcome.png' });
		   return attachment;
};
