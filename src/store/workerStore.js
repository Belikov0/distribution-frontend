import { defineStore } from "pinia";

export const useWorkerStore = defineStore("worker", {
  state: () => ({
    // 操作菜单列表
    operationListData: [
      {
        id: 0,
        onClick: "",
        text: "签到",
      },
      {
        id: 1,
        onClick: "",
        text: "签退",
      },
      {
        id: 2,
        onClick: "",
        text: "今日出勤状态",
      },
      {
        id: 3,
        onClick: "",
        text: "历史出勤状态",
      },
      {
        id: 4,
        onClick: "",
        text: "查询月表",
      },
      {
        id: 5,
        onClick: "",
        text: "本人信息",
      },
    ],
    // 存储数据信息和token
    worker: {},

    // 组件显示状态
    
    todayAttendancePanel: false,
    historyAttendancePanel: false,
    monthAttendancePanel: false,
    informationPanel: false,
    anyPanelOn: false
  }),

  getters: {
    getToken: (state) => {
      return state.worker.token;
    },
    getWorkerId: (state) => {
      return state.worker.worker_id
    }
  },

  actions: {
    setWorker(worker) {
      this.worker = worker;
    },
    
    onClickPersonalInfomationButton(){
      this.anyPanelOn = true
      this.informationPanel = true
    }
    ,
    onClickTodayAttendanceButton(){
      this.anyPanelOn = true
      this.todayAttendancePanel = true
    },

    onClickHistoryAttendanceButton(){
      this.anyPanelOn = true
      this.historyAttendancePanel = true
    },

    onClickMonthAttendanceButton(){
        this.anyPanelOn = true
        this.monthAttendancePanel = true
    },

    

    setAllPanelsFalse(){
      this.anyPanelOn = false
      this.monthAttendancePanel = false
      this.historyAttendancePanel = false
      this.todayAttendancePanel = false
      this.informationPanel = false
    }

  },
});
