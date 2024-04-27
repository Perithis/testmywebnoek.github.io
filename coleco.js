
function btn_test(){
    const WebApp = window.Telegram.WebApp;
    btn_click = document.getElementById('btn_one');
    btn_click.innerText = WebApp.WebAppUser.username;
}
