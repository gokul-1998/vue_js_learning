import customfetch from "./customfetch"
export default{
    template:`<div>
    <input type='text' placeholder='Task Title' v-model='formData.title'/>
    <input type='text' placeholder='Task Description' v-model='formData.description'/>
    <button @click='createTask'>Create Task</button>

    </div>`,
    data(){
        return {
            formData:{
                title:null,
                description:null,
            },
        }
    },
    methods:{
        createTask(){
            if(this.formData.title==null|| this.formData.description==null){
                alert('form data is empty')
            }
            else{
            customfetch('http://127.0.0.1:8000/posts/',{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(this.formData),
                })
                .then((data)=>{
                    console.log(data)
                    alert('data was added')
                }).catch((err)=>{
                    alert(err.message)
                })
            }
        }
    }
}