import { defineStore } from "pinia";
import { format_list } from "../public/workerData";

export const useWorkerStore = defineStore("worker",{
    state: () =>({
        //所有的商品数据
        operationListData: format_list,

        
        //搜索框的关键词
        currentWorkerId: "",
        currentAdminId: "",

    }),
    
    getters: {

    },

    actions: {
        
    }
})