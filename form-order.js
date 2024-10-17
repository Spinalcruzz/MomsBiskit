let clientInfo = []
            
            
       

function submitBtn() {
 
    const batchAmount = document.querySelector('.batchAmount');
    const amount = batchAmount.value; 
            
        
     clientInfo.push(amount);
     
     const productDescription = document.querySelector('.productDescription');
     const description = productDescription.value;


     clientInfo.push(description);
      
    const clientContact = document.querySelector('.clientContact');
    const contact = clientContact.value;

    clientInfo.push(contact);

    const clientEmail = document.querySelector('.clientEmail');
    const email = clientEmail.value;

    clientInfo.push(email);
    
    

     console.log(clientInfo)
    }
