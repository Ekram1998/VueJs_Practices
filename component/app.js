const app = Vue.createApp({
    data() {
        return {
            todos:[
                {text: "Buy Milk", done:false},
                {text: "Buy egges", done:false},
                {text: "Buy Vegies", done:true},
                {text: "Study Physic", done:false},
                {text: "Practices Data Structure", done:false},
            ],
        };
    },
    methods: {
        completeTodo(todo){
            todo.done = true;
        },
        undoTodo(todo){
            todo.done = false;
        }, 
    },
});

app.component("todo",{
    props: ["todo"],
    methods: {
        completeTodo(todo){
            todo.done = true;
        },
        undoTodo(todo){
            todo.done = false;
        },
    },
    template: `<div class="mt-3 py-3 px-4 rounded-3 shadow d-flex justify-content-beetween align-items-center">
        <p class="mb-0">{{todo.text}}</p>
        <button v-if="!todo.done" class="btn btn-success m-2" @click="completeTodo(todo)">Done</button>
        <button v-else="todo.done" class="btn btn-danger m-2" @click="undoTodo(todo)">Not Done</button>
    </div>`,
});

app.mount("#app");