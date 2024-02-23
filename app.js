// const app = Vue.createApp({
//     template:"<h1>My First Vue.js Code</h1><h2>Hi, I am Ekram Shethil</h2>"
// });

// app.mount("#app");

const app = Vue.createApp({
    data() {
        return {
            message: "Hello World"
        }
    },
});
app.mount("#app");

const student = Vue.createApp({
    data(){
        return{
            counter : 1,
        }
    },
    methods: {
        incrementNumber(){
            this.counter ++;
        },
        dicrementNumber(){
            this.counter --;
        }
    }, 
});
student.mount("#student");