const { app,  BrowserWindow } = require('electron');
const nativeImage = require('electron').nativeImage;
const menu = require('./helpers/menuHelper');

const createWindow = () => {
    const window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: false
        },
        title: 'Netflix',
        fullscreenable: true,
        icon: nativeImage.createFromPath(__dirname + getApplicationIcon())
    });
    
    window.maximize();

    window.on('page-title-updated', (e) => {
        e.preventDefault();
    });

    window.setMenu(menu);

    window.loadURL('https://www.netflix.com/');
};

const getApplicationIcon = () => {
    if (process.platform === 'win32') {
        return '/assets/netflix-windows-icon.ico';
    } else if (process.platform === 'darwin') {
        return '/assets/netflix-mac-icon.png';
    } else {
        return '/assets/netflix-linux-icon.png';
    }
};

app.allowRendererProcessReuse = false;
app.whenReady()
    .then(() => createWindow());

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
});