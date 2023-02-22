const TOKEN = "6055078393:AAFw5WHA2CMb9olm3CdXioC4yDYiDmFK5g0"
const CHAT_ID ="1709194154"
const URL_API=`https://api.telegram.org/bot${TOKEN}/sendMassege`
// *https://api.telegram.org/bot6055078393:AAFw5WHA2CMb9olm3CdXioC4yDYiDmFK5g0/getUpdates

const success = document.getElementById('success')

document.getElementById("tg").addEventListener("submit", function(e){
    e.preventDefault();
    let message=`<b>Заявка с сайта!</b>\n`;
    message+=`<b>Отправител:</b>  ${this.name.value}\n`;
    message+=`<b>Номер:</b> ${this.number.value}\n`;
    message+=`<b>Почта:</b> ${this.email.value}`;
    console.log(message)

     axios.post(URL_API,{
         chat_id:CHAT_ID,
         parse_mode:"html",
         text:message
     }).then(()=>{
         this.name.value=""
         this.number.value=""
         this.email.value=""
         success.innerHTML="сообщение отправлено"
         success.style.display="block"
     }).catch((err)=>{
         console.log(err)
     }).finally(()=>console.log("success"))    
 })

//  const TOKEN = "6055078393:AAFw5WHA2CMb9olm3CdXioC4yDYiDmFK5g0"
// const CHAT_ID ="1709194154"
// const URL_API=`https://api.telegram.org/bot${TOKEN}/sendDocument`

// document.getElementById("tg").addEventListener("submit",function(e){
//     e.preventDefault()
//     const formData=new FormData()
//     formData.append("chat_id",CHAT_ID)
//     formData.append("document",this.document.files[0])
//     axios.post(URL_API,formData,{
//         headers:{
//             "Content-Type":"multipart/form-data"
//         }
//     }).then((res)=>{
//         this.document.value=""
//         success.innerHTML="сообщение отправлено"
//         success.style.display="block"
//         }).catch((err)=>console.log(err))
//     })
