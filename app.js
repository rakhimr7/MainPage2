const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const submit = document.querySelector('#submit');

// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
menu.addEventListener('click', mobileMenu);


const saveLead = async() =>{

    let clientName = document.getElementById("recipient-name").value
    let mobile = document.getElementById("Mobile").value

    let response = await fetch ('http://localhost:8080/lead/getLeads');

    let response2 = await fetch ('http://localhost:8080/lead/save', {
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        
        },
        body: JSON.stringify({
            name: clientName,
            mobile: mobile
        })
    })  
    console.log(response2);
    console.log(response); 

}

submit.addEventListener('click', saveLead);