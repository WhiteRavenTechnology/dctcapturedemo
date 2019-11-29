const captureWebsite = require('capture-website');

(async () => {
 
  await captureWebsite.file('https://twitter.com/j0j0r0/status/1200356277513117696', 'output-fullpage.png', {
	overwrite: true,
})


 
 
})().catch(console.log)


