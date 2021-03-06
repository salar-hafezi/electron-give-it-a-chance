const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const app = electron.app
const ipc = electron.ipcMain

app.on('ready', () => {
	let appWindow = new BrowserWindow({
		show: false
	})
	appWindow.loadURL('file://' + __dirname + '/build/index.html')

	let infoWindow = new BrowserWindow({
		width: 400,
		height: 300,
		//frame: false,
		//transparent: true,
		show: false
	})
	infoWindow.loadURL('file://' + __dirname + '/build/info.html')

	appWindow.once('ready-to-show', () => {
		appWindow.show()
	})
	
	ipc.on('closeInfoWindow', (event, arg) => {
		event.returnValue = ''
		console.log('hi')
		infoWindow.hide()
	})
})
