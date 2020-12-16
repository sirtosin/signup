document.getElementById('login').style.display = 'block'
document.getElementById('user-details').style.display = 'none'
     

// create class
class SignUp {
    constructor(name, password, email){
        this.name = name
        this.password = password
        this.email = email
    }

    displayHome(){
        
        document.getElementById('login').style.display = 'none'
        let details = document.getElementById('user-details')  
        const name = document.getElementById('name').value

        details.innerHTML = `
        <div id="user-details">
            <h3 class="display-3">Hello, ${this.name}</h3>
            <br>
            <p class="display-4">Welcome to the future...How would you like to begin</p>

            <div class="row">
                <div class="col-md-6 standard">
                    <h3>Standard Class</h3>
                    <p class="lead">Lorem ipsum dolor sit amet.</p>
                    <a href="#"><buttton class="btn btn-info">Start Now</buttton></a>
                </div>
                <div class="col-md-6 premium">
                    
                    <h3>Premium Class</h3>
                    <p class="lead">Lorem ipsum dolor sit amet.</p>
                    <a href="#"><buttton class="btn btn-info">Start Now</buttton></a>
                </div>
            </div>
        </div>
        `
        details.style.display = 'block'
    }
    
    clearField(){
        document.getElementById('name').value = ''
        document.getElementById('password').value = ''
        document.getElementById('email').value = ''
    }

}

//local storage
class Store{
    static getUser(){
        let user
        if(localStorage.getItem('users') === null){
            user = []
        }else{
            user = JSON.parse(localStorage.getItem('users'))
        }
        return user
    }
    // static displayBooks(){
    //     const books = Store.getBooks()

    //     books.forEach((book) => {
    //         const ui = new UI
    //         //add book to ui
    //         ui.addBookToList(book)
    //     })
    // }
    static addUser(user){
        const users = Store.getUser()

        users.push(user)

        localStorage.setItem('users', JSON.stringify(users))
    }
}

//event listeners login
document.getElementById('login-id').addEventListener('submit', 
    function(e){
        
        const name = document.getElementById('name').value,
        password = document.getElementById('password').value,
        email = document.getElementById('email').value

    // instantiate classes
    
    const valid = Store.getUser()
    const newUser = new SignUp(name, password, email)   

        for(let i = 0; i < valid.length; i++){
            if(name === JSON.parse(localStorage.getItem('users'))[i].name && 
                password === JSON.parse(localStorage.getItem('users'))[i].password &&
                email === JSON.parse(localStorage.getItem('users'))[i].email){
                    
                newUser.displayHome()
                console.log('welcome')
            }else{    
                console.log('Oops!! incorrect details')
            }
        }
        newUser.clearField()

    e.preventDefault()
    
})


