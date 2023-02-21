let buttons = document.querySelector('.buttons');
let btn = buttons.querySelectorAll('.btn');
for (var i = 0; i <btn.length; i++){
    btn[i].addEventListener('click',function(){
      let current =document.getElementsByClassName('active');
      current[0].className = current[0].className.replace("active","");
      this.className += " active";

    })
} 
   
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger') // remove cart Items functions
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input') // Change products Quantity function
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button') // Add to cart button function
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked) // Click purchase button function 
}

function purchaseClicked() { // If we click purchase button its automaticaly clean the cart and and update the total amount and quantity to Zero and show a success message
    swal("DONE","YOUR CART IS CLEAN NOW","success")
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) { // if we click the remove button of the product that product will remove.
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) { // click Quantity increse button automatically the products Quantity will increase  and click the decrese button quantity will decrese.
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {    // add products to the cart (products image,price,title)
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            swal("This item is already added to the cart","Go down and place your order","info")
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {        // Update the cart total
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100       // Calculate the total amount 
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
class FormValidation{ // This is script validation form
    formValues = {   // correct Form valuse 
        username : "",
        email : "",
        phonenumber : "",
        address : "",
        
    }
    errorValues = {  // Error wrong form valuse
        usernameErr : "",
        emailErr : "",
        phonenumberErr : "",
        addressErr : "",
        
    }
    showErrorMsg(index,msg){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0].textContent = msg   
    }
    showSuccessMsg(index){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    }
    getInputs(){
        this.formValues.username = document.getElementById('username').value.trim()
        this.formValues.email = document.getElementById('email').value.trim()
        this.formValues.phonenumber = document.getElementById('phonenumber').value.trim()
        this.formValues.address = document.getElementById('address').value.trim()

    }
    validateUsername(){
        if(this.formValues.username === ""){
            this.errorValues.usernameErr = "* Please Enter Your Name"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length <= 4 ){   // user nane not less than 4 letters.
            this.errorValues.usernameErr = "* Username must be atleast 5 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length > 20){    // user name not more than 20 letters.
            this.errorValues.usernameErr = "* Username should not exceeds 20 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else {
            this.errorValues.usernameErr = ""
            this.showSuccessMsg(0)
        }
    }
    validateEmail(){        //  Input Email 
        //abc@gmail.co.in
        const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/ //Accept letters for the mail
        if(this.formValues.email === ""){       //Enter non acceptable letters it will show a error message
            this.errorValues.emailErr = "* Please Enter Valid Email"
            this.showErrorMsg(1,this.errorValues.emailErr)
        } else if(!(regExp.test(this.formValues.email))){
            this.errorValues.emailErr = "* Invalid Email"       //Enter non acceptable letters it will show a error message
            this.showErrorMsg(1,this.errorValues.emailErr)
        } else {
            this.errorValues.emailErr = ""
            this.showSuccessMsg(1)      // Enter Accept charecters it will show succcess
        }
    }
    validatePhonenumber(){      //Input User Phone number
       const phoneno = /^\d{10}$/
       if(this.formValues.phonenumber === ""){
           this.errorValues.phonenumberErr = "* Please Enter your Phone Number"
           this.showErrorMsg(2,this.errorValues.phonenumberErr)
       } else if(phoneno.test(this.formValues.phonenumber)){
           this.errorValues.phonenumberErr = ""
           this.showSuccessMsg(2)
       } else {
           this.errorValues.phonenumberErr = "* Invalid Phone Number"
           this.showErrorMsg(2,this.errorValues.phonenumberErr)
       }
    }
    validateaddress(){      //Input User Address
        if(this.formValues.address === ""){
            this.errorValues.addressErr = "* Please Provide a address"
            this.showErrorMsg(3,this.errorValues.addressErr)
        } else if(this.formValues.address.length <= 4){
            this.errorValues.addressErr = "* address must be atleast 5 Characters"
            this.showErrorMsg(3,this.errorValues.addressErr)
        } else if(this.formValues.address.length > 100){
            this.errorValues.addressErr = "* address should not exceeds 100 Characters"
            this.showErrorMsg(3,this.errorValues.addressErr)
        } else {
            this.errorValues.addressErr = ""
            this.showSuccessMsg(3)
        }
    }
    
    alertMessage(){ // Alert message for the validation form
        const {usernameErr , emailErr , phonenumberErr , addressErr }= this.errorValues
        if(usernameErr === "" && emailErr === "" && phonenumberErr === "" && addressErr === "" ){
            swal("Dear "+this.formValues.username+" your order is successfully placed",'Click Clean cart for a new order',"success").then(() => {   // All informations are correct it will show a success message.
                console.log(this.formValues)
                this.removeInputs()
            })
        } else {
            swal("Give Valid Inputs","Click ok to Continue" ,"error")   // Any input is not correct it will show a error message popup 
        }
    }

    removeInputs(){
        const form_groups = document.getElementsByClassName('form-group')
        Array.from(form_groups).forEach(element => {
            element.getElementsByTagName('input')[0].value = ""
            element.getElementsByTagName('span')[0].textContent = ""
            element.classList.remove('success')
        })
    }
} 

const ValidateUserInputs = new FormValidation()

document.getElementsByClassName('form')[0].addEventListener('submit' , event => {
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateUsername()
    ValidateUserInputs.validateEmail()
    ValidateUserInputs.validatePhonenumber()
    ValidateUserInputs.validateaddress()
    ValidateUserInputs.alertMessage()
})

//Get the button
var mybutton = document.getElementById("myBtn");



window.onscroll = function() {scrollFunction()};           // When the user scrolls down 20px from the top of the document, show the button


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



function topFunction() {        // When the user clicks on the button, scroll to the cart
  document.body.scrollTop = 6500;
  document.documentElement.scrollTop = 6500;
}
