const comments = document.getElementById('comments')

    // method Get Api Fech
fetch('https://jsonplaceholder.typicode.com/comments')
.then((response) => response.json())
.then(data =>{
    let elements = '';
    data.forEach(post => {
    

    elements +=
`
        
             <div class="card-content">
                <div class="card-usuario">
                    
                    <img src="./images/icons8-usuario-24.png" alt="" class="img-fluid">
                        
                    <h3><hr/>${post.email}</h3> 
                </div>
                 <p>
                    
                     <b>Comment: </b>
                     <hr/>
                     ${post.body}
                 </p>
                       
                
             </div>
        
        ` 

    })
    comments.innerHTML = elements
}) 

        // method Post Api Fech
var form = document.getElementById('form')
form.addEventListener('submit',function(e){

    e.preventDefault()

    var email =document.getElementById('email').value
    var body = document.getElementById('body').value

    fetch('https://jsonplaceholder.typicode.com/comments', {
  method: 'POST',
  body: JSON.stringify({
    Email: email,
    body: body,
    userId: 1,
    id:1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(function(response){
      return response.json()
  })
  .then(function(data){
    comments.innerHTML = 

        `
             <div class="card-content">
                <div class="card-usuario">
                    
                    <img src="./images/icons8-usuario-24.png" alt="" class="img-fluid">
                        
                    <h3><hr/>${data.Email}</h3> 
                    <img src="../Images/trash-alt-solid.svg" alt="trash" id="trash" class="img-trash">
                </div>
                 <p>
                    
                     <b>Comment: </b>
                     <hr/>
                     ${data.body}
                 </p>
                       
                
             </div>     
        ` 
     
  })
  
 
})


        // method Delete Api Fech
const eliminate = document.getElementById('trash')
eliminate.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/comments/1', {
  method: 'DELETE',
  body: JSON.stringify({
    Email: '',
    body: '',
    userId: 1,
    id:1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(function(response){
    return response.json()
})
.then(function(data){
  comments.innerHTML = 
`
      
           <div class="card-content">
              <div class="card-usuario">
                  
                  <img src="./images/icons8-usuario-24.png" alt="" class="img-fluid">
                      
                  <h3><hr/>${data.Email}</h3> 
              </div>
               <p>
                  
                   <b>Comment: </b>
                   <hr/>
                   ${data.body}
               </p>
                     
              
           </div>
      
      ` 
   
})


})



    