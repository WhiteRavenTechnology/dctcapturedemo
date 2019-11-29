const captureWebsite = require('capture-website');

(async () => {
 
  await captureWebsite.file('base.htm', 'output.png', {
	delay: 5,
	width: 1200,
	overwrite: true,
	scripts: [
		'https://platform.twitter.com/widgets.js',
		`document.body.innerHTML = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Dragon Age Dragon Age <a href="https://t.co/VT5iR4kL1s">https://t.co/VT5iR4kL1s</a></p>&mdash; Joe Roets (j03) - Dragonchain CEO (@j0j0r0) <a href="https://twitter.com/j0j0r0/status/1200356277513117696?ref_src=twsrc%5Etfw">November 29, 2019</a></blockquote>'`
	]
})


 
 
})().catch(console.log)


