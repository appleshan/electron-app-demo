// A minimal Electron application

// old source code :
//const electron = require('electron')
// Module to control application life.
//const app = electron.app
// Module to create native browser window.
//const BrowserWindow = electron.BrowserWindow

// new source code :
const {app, BrowserWindow} = require('electron')  // http://electron.atom.io/docs/api

const path = require('path')  // https://nodejs.org/api/path.html
const url = require('url')  // https://nodejs.org/api/url.html

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
// 保持win对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let mainWindow

function createWindow () {

  // Create the browser window.
  //创建浏览器窗口
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  // 加载应用的 index.html
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // 打开开发者工具
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  // 关闭window时触发下列事件.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    // 取消引用 window 对象，通常如果应用支持多窗口，则会将
    // 窗口存储在数组中,现在应该进行删除了.
    mainWindow = null
  })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// 当Electron完成初始化并准备创建浏览器窗口时调用此方法
// 部分 API 只能使用于 ready 事件触发后。
app.on('ready', createWindow)

// Quit when all windows are closed.
// 所有窗口关闭时退出应用.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// 你可以在这个脚本中续写或者使用require引入独立的js文件.
