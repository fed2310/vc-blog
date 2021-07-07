const btn = document.getElementById('button');

function sendHttpRequest (method, url, data){
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)

        if (data){
            xhr.setRequestHeader('Access-Control-Allow-Origin', `*`);
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.onload = () => {
            if (xhr.status >= 400) { 
                reject(xhr.response)
            }
            resolve(xhr.response)
        } 

        xhr.onerror = () => {
            reject('Something went wrong in sending the data')
        }

        xhr.send(JSON.stringify(data))
    })
    return promise
}

const removeError = () => {
    let error = document.getElementsByClassName('download-error-message');
    error.map((err)=>{
        err.classList.add("hide")
    })
}

function ValidateEmail(inputText)
{  
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.match(mailformat)){
        return true;
    }
    else {
        return false;
    }
}

const sucessHandler = () => {
    btn.parentNode.removeChild(btn)
    let email = document.getElementById('amp-form-email')
    email.parentNode.removeChild(email)
    const p = document.createElement('p');
    p.classList.add('download-success-message')
    p.textContent = 'Thanks! Your free eBook is on its way. Check your email for a link to the guide.';
    document.body.appendChild(p)
    removeError()
}

const errorHandler = () => {
    removeError();
    const p = document.createElement('p');
    p.classList.add('download-error-message')
    p.textContent = 'Please enter your business email address. This form does not accept addresses from gmail.com.'
    document.body.appendChild(p)
}

const invalidEmailHandler = () => {
    removeError()
    const p = document.createElement('p');
    p.classList.add('download-error-message')
    p.textContent = 'Invalid email format'
    document.body.appendChild(p)
}

const emptyEmailHandler = () => {
    removeError()
    const p = document.createElement('p');
    p.classList.add('download-error-message')
    p.textContent = 'Please enter an Email Id'
    document.body.appendChild(p)
}

const sendData = () => {
    let email = document.getElementById('amp-form-email').value;
    let pageName = document.getElementsByClassName('sticky-form-title')[0].innerHTML;
    let pageUri = window.location.href
    
    const hubspotApi = "https://api.hsforms.com/submissions/v3/integration/submit/6153052/68dae801-e2b2-4928-9698-8db3977b202e";

    const hubspotData = {
        "fields" : [
          {
              "name": "email",
              "value": `${email}`
          },     
          ],
      "context": {
          // "hutk": ":hutk", 
          "pageUri": `${pageUri}`,
          "pageName": `${pageName}`
     ,
    }
    }
    const errorClass = document.getElementsByClassName('download-error-message');

    if(email === "") return emptyEmailHandler()

    if(ValidateEmail(email) == true){
        if (errorClass.length > 0){
            removeError()
        }
        sendHttpRequest('POST', hubspotApi, hubspotData)
            .then(responseData => {
                sucessHandler()
            })
            .catch(err => {
                errorHandler()
            })
    }
    else{
        if (errorClass.length > 0){
            removeError()
            invalidEmailHandler()
        }
        invalidEmailHandler()
    }
}

btn.addEventListener('click', sendData);
