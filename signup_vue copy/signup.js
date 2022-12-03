import customfetch from "./customfetch.js";
export default{
    template:`<div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <h1>Signup</h1>
          <br>
          <div class="form-group">
            <label for="username">User Name</label>
            <input type="text" id="username" class="form-control" v-model="userData.username">
          </div>
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="text" id="email" class="form-control" v-model="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model="userData.password">
            <p>
              {{ userData.password }}
            </p>
          </div>
          
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary" @click.prevent="createuser">Submit!
          </button>
        </div>
      </div>
    </form>
  </div>`,
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
}


  