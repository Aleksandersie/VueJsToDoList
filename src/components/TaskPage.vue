<template>
    
<div>
  <TopBar/>
  <div class="container">
    <CreateForm/>
    <div v-for="todos in getTodos" :key="todos.id">
    <div class="itemBlock" >
        <p  class="item">{{ todos.todo }}</p>
        <div :class="toggle ? 'input': 'no-input'" >
            
           <div class="inner">
            <textarea name="area" id="" cols="30" rows="10" v-model="newTaskText" class="textArea" placeholder="Task text"></textarea>
            <div class="btnBlock">
                <div @click="()=>edit(todos)" class="editBtn border">Save</div>
                <div @click="toggle = !toggle" class="deleteBtn border">Cancel</div>
            </div>
            
           </div>
        
        </div>

        <div @click="toggle = !toggle" class="editBtn">Edit</div>
        <div @click="()=>removeTask(todos)" class="deleteBtn">Delete</div>
        
        
    </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex"
import {mapMutations} from "vuex"
import TopBar from "./TopBar.vue"
import CreateForm from "./CreteForm.vue"
export default {
    name: "TaskPage",
    components:{
        TopBar,
        CreateForm
    },
    data(){
        return{
            toggle: false,
            newTaskText:""
        }
    },
    computed:mapGetters(["getTodos"]),
    methods:{
        ...mapMutations(["deleteTask","editTask"]),
        removeTask(todos){
            this.deleteTask(
                todos
            )
        },
        edit(todos){
            this.editTask({
                todo:todos,
                newText:this.newTaskText
        }),
        this.newTaskText=""
        this.toggle = false
        }
    }
}
</script>

<style scoped>
.item{
    width: 600px;
    height: 70px;
    padding: 20px;
    border-radius: 10px 0px 0px 10px;
    border: 1px solid whitesmoke;
    background-color: rgb(219, 219, 219);
    cursor: pointer;
    transition: 0.3s;
    font-family: 'Roboto', sans-serif;
}
.item:hover{
    background-color: rgb(114, 114, 114);
}
.itemBlock{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
.input{
    background-color: rgba(0, 0, 0, 0.336);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
}
.no-input{
    transition: 0.5s;
    display: none;
}
.inner{
    padding: 35px;
    background-color: white;
    border-radius: 10px;
}
.editBtn{
    border: 1px solid rgb(255, 208, 0);
    padding: 20px;
    height: 70px;
    background-color: rgb(255, 208, 0);
    cursor: pointer;
    transition: 0.3s;
    font-family: 'Roboto', sans-serif;
}
.editBtn:hover{
    background-color: rgb(231, 189, 2);
}
.deleteBtn{
    border-radius: 0px 10px 10px 0px;
    border: 1px solid rgba(247, 61, 61, 0.993);
    padding: 20px;
    height: 70px;
    background-color: rgba(247, 61, 61, 0.993);
    cursor: pointer;
    transition: 0.3s;
    font-family: 'Roboto', sans-serif;
}
.deleteBtn:hover{
    background-color: rgba(255, 7, 7, 0.993);
}

.textArea{

    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.24);
}
textArea:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}
.btnBlock{
    display: flex;
    gap: 15px;
    margin-top: 15px;
    justify-content: flex-end;
}
.border{
    border-radius: 10px;
    height: inherit;
    
}
</style>