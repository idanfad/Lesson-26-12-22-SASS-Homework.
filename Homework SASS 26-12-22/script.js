let getBtn = document.getElementById('valideBtn');

getBtn.addEventListener('click',()=>{
   clearForm();
    let getCity = document.getElementById('cityInfo').value;
    let getStreet = document.getElementById('streetInfo').value;
    let getNum = document.getElementById('homeNumInfo').value;


    if (getCity != '' && getStreet != '' && getNum != ''){

        let newText = document.createTextNode('Your Address is connected to EnergyX Fiber Internet.');
        let getBlock = document.getElementById('successBlock');
        

        getBlock.appendChild(newText);
    } else {
        let newText = document.createTextNode('Invalid Information, Please fill all the fields above.');
        let getBlock = document.getElementById('failureBlock');
       
        getBlock.appendChild(newText);
        

    }
});

function clearForm (){
    let getBlock1 = document.getElementById('successBlock');
    let getBlock2 = document.getElementById('failureBlock');

    getBlock1.innerHTML = "";
    getBlock2.innerHTML = "";

   
    
}

