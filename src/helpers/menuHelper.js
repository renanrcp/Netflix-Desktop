const { Menu } = require('electron');

module.exports = Menu.buildFromTemplate([
    {
        label: 'Preferences',
        submenu: [
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
]);