let clientInfo = []
            

function submitBtn() {
 
    const batchAmount = document.querySelector('#batchAmount');
    const amount = batchAmount.value; 
            
        
    clientInfo.push(amount);
     
     const productDescription = document.querySelector('#productDescription');
     const description = productDescription.value;


    clientInfo.push(description);
      
    const clientContact = document.querySelector('#clientContact');
    const contact = clientContact.value;

    clientInfo.push(contact);

    const clientEmail = document.querySelector('#clientEmail');
    const email = clientEmail.value;

    clientInfo.push(email);
    
    FormCompletion(amount, description, contact, email);
    
    
};

//document.querySelector('.clientOrderInfo').innerHTML = `Please fill in the Form!`

function FormCompletion(totalAmnt, describe, contct, emailAddrss) {
    if ( totalAmnt || describe || contct || emailAddrss !== "" ) {
        const clientOrderInfo = document.querySelector('.clientOrderInfo').innerHTML =`Batch Amount ${clientInfo[0]} , Product Description of ${clientInfo[1]} ,we will contact ${clientInfo[2]} and Send an email to ${clientInfo[3]}`;
    } else {
        document.querySelector('.clientOrderInfo').innerHTML = `Please fill in the Form!`;
    };
};