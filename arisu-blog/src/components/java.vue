<template>
<div style="padding:10px">
    <div v-for="item,index in list " :key="index" style="margin:10px 0; border-bottom:0.5px solid #D4D4D4; display:flex;justify-content: center">
      <p style="align-items:center">{{item}}</p> 
    </div>
    <div style="display:flex;justify-content: flex-end">
        <el-button type="primary" >新建问题</el-button>
    </div>
</div>
</template>

<script>
import {getlist} from '@/api/api'
export default {
 data(){
    return {
        list:[],
    }
    },
    mounted(){
        this.getList();
    },
    methods:{
        getList() {
            getlist().then(res=>{
                console.log(213);
                this.list = res.data.page.list;
            })
        }
    }
}
</script>

<style>

</style>