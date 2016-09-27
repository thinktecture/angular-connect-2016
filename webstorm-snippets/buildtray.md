```
  let trayIconPath = path.join(__dirname, 'icon.png');
  var contextMenu = Menu.buildFromTemplate([
      {
          label: 'Radius Search...',
          type: 'normal',
          click: function () {
              mainWindow.webContents.send('navigateTo', 'RadiusSearch');
          }
      },
      {
          label: 'Quit',
          accelerator: 'Command+Q',
          selector: 'terminate:'
      }
  ]);

  trayApp = new electron.Tray(trayIconPath);
  trayApp.setToolTip('BoardZ2');
  trayApp.setContextMenu(contextMenu);
```
