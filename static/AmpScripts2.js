const btn2 = document.getElementById('header-button');

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
    let error = document.getElementsByClassName('download-error-message-header');
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
    btn2.parentNode.removeChild(btn2)
    let email = document.getElementById('amp-header-email')
    email.parentNode.removeChild(email)
    const p = document.createElement('p');
    p.classList.add('download-success-message-header')
    p.textContent = 'Thank you for subscribing to our blog.';
    const headerClass = document.getElementsByClassName('sticky-header-wrapper')
    headerClass[0].appendChild(p)
    removeError()
}

const errorHandler = () => {
    removeError();
    const p = document.createElement('p');
    p.classList.add('download-error-message-header')
    p.textContent = 'Please enter your business email address. This form does not accept addresses from gmail.com.'
    const headerClass = document.getElementsByClassName('sticky-header-wrapper')
    headerClass[0].appendChild(p)
}

const invalidEmailHandler = () => {
    removeError()
    const p = document.createElement('p');
    p.classList.add('download-error-message-header')
    p.textContent = 'Invalid email format'
    const headerClass = document.getElementsByClassName('sticky-header-wrapper')
    headerClass[0].appendChild(p)
}

const emptyEmailHandler = () => {
    removeError()
    const p = document.createElement('p');
    p.classList.add('download-error-message-header')
    p.textContent = 'Please enter an Email Id'
    const headerClass = document.getElementsByClassName('sticky-header-wrapper')
    headerClass[0].appendChild(p)
}

const sendData2 = () => {
    let email = document.getElementById('amp-header-email').value;
    let pageName = document.getElementsByClassName('sticky-form-title')[0].innerHTML;
    let pageUri = window.location.href
    
    const hubspotApi = "https://api.hsforms.com/submissions/v3/integration/submit/6153052/987b96d3-5191-4d2e-9401-0a608b86b213";

    const hubspotData = {
        "fields" : [
          {
              "name": "email",
              "value": `${email}`
          },     
          ],
      "context": {
        //   "hutk": ":hutk", 
          "pageUri": `${pageUri}`,
          "pageName": `${pageName}`
      },
    }

    const errorClass = document.getElementsByClassName('download-error-message-header');

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

//scroll detectot function
// if (typeof window !== 'undefined'){
//     let scrollpos = window.pageYOffset
//     console.log('scrollpos',scrollpos)
//     const addClassOnScroll = () => {
//         const target1 = document.getElementsByClassName('sticky-header-wrapper')
//         console.log("target",target1)
//         target1[0].classList.add('sticky-header-shadow')
//     }

//     const removeClassOnScroll = () => {
//         const target1 = document.getElementsByClassName('sticky-header-wrapper')
//         target1[0].classList.remove('sticky-header-shadow')
//     }

//     window.addEventListener('scroll', function() { 
//         scrollpos = window.scrollY;
//         console.log('scrollpos', scrollpos)
//         if (scrollpos >= 200) { addClassOnScroll() }
//         else { removeClassOnScroll() }
//     })
// }

btn2.addEventListener('click', sendData2);
