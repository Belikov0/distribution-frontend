import { defineStore } from "pinia";


export const useAdminStore = defineStore("admin",{
    state: () =>({
        //所有的商品数据
        operationListData: [
            {
                id: 0,
                url: '/admin/workers',
                text: '查询员工信息',
            },
            {
                id: 1,
                url: '/admin/',
                text: '查询签到签退情况',
            },
            {
                id: 2,
                url: '',
                text: '登记请假和出差',
            },
            {
                id: 3,
                url: '',
                text: '设置特殊签到时间',
            },
            {
                id: 4,
                url: '',
                text: '修改密码'
            },
            {
                id: 5,
                text: '查询月总结'
            }
        ],
        admin: {},
        
        anyPanelOn: false,
        signInOutPanel: false,
        signInOutTimePanel: false,
        leaveBusinessPanel: false,
        passwordPanel: false,
        workerInfoPanel: false,
        monthPanel: false
    }),
    
    getters: {
        getToken: (state) =>{
            return state.admin.token
        },

        getAdminId: (state) =>{
            return state.admin.admin_id
        },
    },

    actions: {
        setAdmin(admin){
            this.admin = admin;
        },

        setAllPanelsFalse(){
            this.anyPanelOn = false
            this.passwordPanel = false
            this.workerInfoPanel = false
            this.signInOutPanel = false
            this.signInOutTimePanel = false
            this.leaveBusinessPanel = false
            this.monthPanel = false
        },

        onClickMonthPanel(){
            this.anyPanelOn = true
            this.monthPanel = true
        },

        onClickPasswordPanel(){
            this.anyPanelOn = true
            this.passwordPanel = true
        },

        onClickWorkerInfoPanel(){
            this.anyPanelOn = true
            this.workerInfoPanel = true
        },

        onClickSignInOutPanel(){
            this.anyPanelOn = true
            this.signInOutPanel = true
        },

        onClickSignInOutTimePanel(){
            this.anyPanelOn = true
            this.signInOutTimePanel = true
        },

        onClickLeaveBusinessPanel(){
            this.anyPanelOn = true
            this.leaveBusinessPanel = true
        }



    }
})