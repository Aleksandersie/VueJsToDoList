<template>
<div class="wrapper">
    <textarea name="area" id="" cols="30" rows="10" v-model="taskText" class="textArea" placeholder="Task text"></textarea>
    <div class="btn" @click="addTask">Add</div>
</div>
</template>

<script>
import {mapMutations} from "vuex"
export default  {
 name:"CreateForm",
 data(){
    return{
        taskText:""
    }
 },
 methods:{
    ...mapMutations(["createTask"]),
    addTask(){
        this.createTask({
            id:Date.now(),
            todo: this.taskText
        })
        this.taskText =  ""
    }
 }
}
</script>


<style scoped> 
.btn{
    padding: 10px 15px;
    border-radius: 10px;
    background-color: rgb(255, 208, 0);
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    transition: 0.3s;
    cursor: pointer;
    text-align: center;
}
.btn:hover{
    background-color: rgb(231, 189, 2);
}
.wrapper{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;
    margin-bottom: 40px;
}
.textArea{
    margin-top: 30px;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.24);
}
textArea:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}
</style>