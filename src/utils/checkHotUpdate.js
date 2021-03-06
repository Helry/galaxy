// installMode（安装模式）
// ON_NEXT_RESUME 下次恢复到前台时
// ON_NEXT_RESTART 下一次重启时
// IMMEDIATE 马上更新

// updateDialog（对话框）
// 是否显示更新描述
// appendReleaseDescription : true ,
// 更新描述的前缀。 默认为"Description"
// descriptionPrefix : "更新内容：" ,
// 强制更新按钮文字，默认为continue
// mandatoryContinueButtonLabel : "立即更新" ,
// 强制更新时的信息. 默认为"An update is available that must be installed."
// mandatoryUpdateMessage : "必须更新后才能使用" ,
// 非强制更新时，按钮文字,默认为"ignore"
// optionalIgnoreButtonLabel : '稍后' ,
// 非强制更新时，确认按钮文字. 默认为"Install"
// optionalInstallButtonLabel : '后台更新' ,
// 非强制更新时，检查到更新的消息文本
// optionalUpdateMessage : '有新版本了，是否更新？' ,
// Alert窗口的标题
// title : '更新提示'

export default (CodePush) => {
  CodePush.sync(
    {
      installMode: CodePush.InstallMode.IMMEDIATE,
      // updateDialog: {},
    },
    (status) => {
      switch (status) {
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE: // 检查更新
          break
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE: // 正在下载
          break
        case CodePush.SyncStatus.AWAITING_USER_ACTION: // 等待用户操作
          break
        case CodePush.SyncStatus.INSTALLING_UPDATE: // 下载更新
          break
        case CodePush.SyncStatus.UP_TO_DATE: // 已更新
          break
        case CodePush.SyncStatus.UPDATE_IGNORED: // 忽略更新
          break
        case CodePush.SyncStatus.UPDATE_INSTALLED:
          break
        case CodePush.SyncStatus.UNKNOWN_ERROR: // 未知错误
          break
      }
    },
    ({ receivedBytes, totalBytes }) => {
      // const progress = parseFloat(receivedBytes / totalBytes).toFixed(2)
      if (receivedBytes >= totalBytes) {
        CodePush.allowRestart() // 强制更新
      }
    },
  )
}
