const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const app = electron.app

app.on('ready', () => {
	let appWindow = new BrowserWindow()
	appWindow.loadURL('https://www.google.com')

	let infoWindow = new BrowserWindow({
		width: 400,
		height: 300,
		frame: false,
		transparent: true
	})
	infoWindow.loadURL('file://' + __dirname + '/info.html')
})