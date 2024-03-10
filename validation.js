function formValidation(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confpassword =document.getElementById('confpassword').value;
    const contact =document.getElementById('contact').value;

    if(username == "" || username== null)
    {
        alert('cannot left blank');
    }
    else{
        alert(username);
    }

    if(password.length > 8)
    {
        if(password==confpassword)
        {
            alert('strong password')
        }
        else{
            alert('password not matched')
        }
    }
    else{
        alert('weak password')
    }

    if(isNaN(contact))
    {
        alert('invalid number')
    }
    else{
        alert('valid number')
    }
}

/**
 * Set range in contact.
 * Validate email using regex(regular expression).
 */