Vue.createApp({
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
}).mount("#app");