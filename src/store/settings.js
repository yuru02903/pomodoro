import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  // 箭頭函式內只有return的事項時不須大括號{}，但因為是物件所以外圍還是需要用大括號包，但會被系統判別為function的大括號，故用小括號()包起來。
  state: () => ({
    alarms: [
      // 在 js 裡要用到 assets 內的東西時，要使用 new URL('路徑', import.meta.url).href 才能使用
      // assets 跟 public 差別: assetst 打包時，public 沒有序號，assetst 會加上亂數序號，序號可避免瀏覽器快取
      { id: 1, name: '鬧鐘', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
      { id: 2, name: 'Yay', file: new URL('@/assets/yay.mp3', import.meta.url).href }
    ],
    selectedAlarm: 1,
    notify: true
  }),
  getters: {
    selectedAlarmFile () {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarm)
      return this.alarms[i].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    paths: [
      'selectedAlarm', 'notify'
    ]
  }
})
