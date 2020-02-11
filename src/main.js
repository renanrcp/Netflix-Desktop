const { app,  BrowserWindow, Menu } = require('electron');
const nativeImage = require('electron').nativeImage;

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

    const menu = Menu.buildFromTemplate([
        {
            label: 'Preferences',
            submenu: [
                {
                    label: 'Language',
                    click: () => {

                    }
                },
                {
                    label: 'Enable/Disable Discord RPC',
                    click: () => {

                    }
                }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'Reload',
                    click: () => {

                    }
                },
                {
                    label: 'Repository',
                    click: () => {
                        
                    }   
                }
            ]
        }
    ])

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