// const userData = {
//   userName: "steve",
//   userEmail: "steve@steve.com"
//}

function submitData(name, email){

  return fetch('http://localhost:3000/users',{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name, email})
  })
  .then(function (resp){
    return resp.json()
  })
  .then(function (object) {
    document.body.innerHTML = object['id']
    

})
.catch(function(error){
  document.body.innerHTML = error.message
})
}
 
