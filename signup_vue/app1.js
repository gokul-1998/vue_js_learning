import customfetch from "./customfetch.js";
var app = new Vue({
    el: '#app',
    data: function() {
      return {
        userData: {
          username: '',
          email: '',
          password: ''
        },
        storeData: 'Yes',
        isSubmitted: false
      }
    },
    methods:{
      createuser(){
          if(this.userData.username==null|| this.userData.email==null|| this.userData.password==null){
              alert('form data is empty')
          }
          else{
          customfetch('http://127.0.0.1:8000/user',{
                  method:"POST",
                  headers:{
                      'Content-Type':'application/json'
                  },
                  body:JSON.stringify(this.userData),
              })
              .then((data)=>{
                  console.log(data)
                  alert('data was added')
              }).catch((err)=>{
                  alert(err.message)
              })
            
          }
          this.userData.username=""
          this.userData.email=""
          this.userData.password=""
      }
  }
  });
  