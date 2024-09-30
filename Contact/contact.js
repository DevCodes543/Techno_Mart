// ---------------------cart icon element count -----------------


let basket = JSON.parse(localStorage.getItem('data')) || [];

let cart_items_count = () => {
    let cart_icon_items = document.getElementById('cart_number')
    let count = Number(0);
    for (let x of basket) {
        count += x.item
    }
    cart_icon_items.innerHTML = count;

    console.log(basket)
    console.log(count)
    
}


cart_items_count()
// display_item()



// validate 
// function validate(){
//     // debugger;
//     let name=document.getElementById('name').value;
//     console.log(name);
//     console.log("name")
//     // alert(name);
//     if(name==""){
//         alert("enter details");
//     }
// }

// function sendEmail()
// {
//     let fm =document.getElementById("email");
//     let sj = document.getElementById("subject");
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "pritilucky202@gmail.com",
//         Password : "B639F3A3ADF28DD6F0DEA8868AC26CFE3A96",
//         To : 'pritilucky202@gmail.com',
//         From : fm.value,
//         Subject : sj.value,
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

