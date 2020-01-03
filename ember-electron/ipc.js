const { ipcMain, BrowserWindow, shell, app } = require('electron');
const log = require('electron-log');

ipcMain.on('request-form', (event, data) => {
  console.log('data', data);

  // log.info(event);
  // log.info(data);

  // log.info(`Blog ${data.id} (${data.url}) updated. Blogs known to main thread: ${state.blogs.length}`);

});
