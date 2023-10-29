import { defineStore } from "pinia";
// import { goodsData } from "../../public/goodsData";

export const useWorkerStore = defineStore("worker",{
    state: () =>({
        //所有的商品数据
        operationListData: [
            {
                id: 0,
                router: '',
                text: '签到',
            },
            {
                id: 1,
                router: '',
                text: '签退',
            },
            {
                id: 2,
                router: '',
                text: '签到状态',
            },
            {
                id: 3,
                router: '',
                text: '本月出勤',
            },
            {
                id: 4,
                router: '',
                text: '本人信息',
            },

        ],

        
        //搜索框的关键词
        currentWorkerId: "",
        currentAdminId: "",

    }),
    
    getters: {

    },

    actions: {
        
    }
})