
function getGreeting() {
    const name=document.getElementById('name').value;
if(!name){
    document.getElementById('response').textContent='please enter your name';
    return;
}
//making the api request
fetch(`http://localhost:3300/api/greet?name=${name}`)
.then(response => response.json())
.then(data => {
    if(data.message){
        document.getElementById('response').textContent = data.message;
    }else if(data.error){
        document.getElementById('response').textContent = data.error;
    }
})
.catch(error => {
    document.getElementById('response').textContent="error occured.";
});
    
    

}