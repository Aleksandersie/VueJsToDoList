<template>

<div> 
    <div class="topBar">
        <div class="container linkWrapper" >
            <router-link class="logo" to="/">ToDo List</router-link>
            <div>
                <router-link class="btn" to="/">Main Page</router-link>
                <router-link class="btn" to="/todo">Task Page</router-link>
            </div>
            
        </div>
        
    </div>

</div>
   
    
</template>

<script>
export default{
    name: "TopBar",
}

</script>

<style>
.topBar{
    width: 100%;
    height: 50px;
    background-color: rgb(37, 37, 37);
}
.linkWrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
}
.btn{
    padding: 10px 15px;
    border-radius: 10px;
    background-color: rgb(255, 208, 0);
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    transition: 0.3s;
}
.btn:hover{
    background-color: rgb(231, 189, 2);
}
.logo{
    font-family: 'Roboto', sans-serif;
    color: white;
    text-decoration: none;
    font-size: 30px;
}
</style>