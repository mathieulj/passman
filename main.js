const electron = require('electron');
const {app, BrowserWindow} = electron;
var app_state = {};

app.on('ready', () => {
	app_state.main_win = app_state.main_win || new BrowserWindow({width:800, height: 600});
	app_state.main_win.setMenu(null);
	app_state.main_win.loadURL(`file://${__dirname}/public/html/login.html`);
	//app_state.main_win.webContents.openDevTools();
});

exports.openPasswordWindow = ()=> {
	let win = new BrowserWindow({width:400, height: 200});
	win.setMenu(null);
	win.loadURL(`file://${__dirname}/public/html/password.html`);
	//win.webContents.openDevTools();
}

exports.authenticate = (password) => {
	app_state.main_win = app_state.main_win || new BrowserWindow({width:800, height: 600});
	app_state.main_win.setMenu(null);
	app_state.main_win.loadURL(`file://${__dirname}/public/html/passwords.html`);
	//app_state.main_win.webContents.openDevTools();
}