let toastBox = document.getElementById("toast");
let succMesg = `Successfuly submitted`;
let errMesg = `Please fix error`;
let invlMesg = `Invalid input, check again`;
function showToast(Mesg){
   let toast = document.createElement('div');
   toast.classList.add('toast');
   toast.innerHTML = Mesg;
   toastBox.appendChild(toast);

   setTimeout(()=>{
    toast.remove();
   }, 6000);

   if(Mesg.includes('error')){
    toast.classList.add('error');
   }
   if(Mesg.includes('Invalid')){
    toast.classList.add('invalid')
   }
   if(Mesg.includes('Successfuly')){
    toast.classList.add('success');
   }

}