<template>
    <h1>Todo add</h1>
    <div class="input-div">
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="title"/>
            <button class="btn1">Submit</button>
        </form>
    </div>
</template>>

<script>
export default {
    data() { 
        return {
            title: ''
        }
    },
    name: 'AddTodo',
    props: ['data'],
    methods: {
        onSubmit(data) {
            console.log(this.title)
        }

    },
}
</script>

<style scoped>
    form {
        display: flex;
    }
    input {
        width: 400px;
    }
</style>>