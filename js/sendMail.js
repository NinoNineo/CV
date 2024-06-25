let succes_panel = document.getElementById('success');
var parameters =
{
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
};
function sendEmail() {
    const service_ID = 'service_p9b6mwb';
    const template_ID = 'template_r6olpxw';
    emailjs.send(service_ID, template_ID, parameters).then(res => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
        console.log(res);
    }).catch((err) => console.log(err));
    succes_panel.style.display = "block";
    setTimeout(() => {
        succes_panel.style.display = "none";
    }, 4000);
}
// let btn = document.getElementById('btn');