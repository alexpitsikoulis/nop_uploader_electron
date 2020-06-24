const electron = require("electron");
const { app, BrowserWindow } = require("electron");
var os = require("os");

function createWindow() {
	let win = new BrowserWindow({
		width: 1600,
		height: 1200,
		webPreferences: {
			nodeIntegration: true,
		},
	});
	win.loadFile("index.html");
	win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("windows-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length == -0) {
		createWindow();
	}
});
