<script>
    //login button eventhandeler
        const  loginbtn=document.getElementById("login");
        loginbtn.addEventListener("click",function(){
    const loginarea=document.getElementById("login-area");
    loginarea.style.display="none";
    const transaction=document.getElementById("transaction");
    transaction.style.display="block";
    
        })
    //deposit btn handler
    const depositbtn=document.getElementById("adddepositbtn");
    depositbtn.addEventListener("click",function(){
    const depositamount=document.getElementById("depositamount").value;
    const depositnumber=parseFloat(depositamount);
    
    const currentdeposit=document.getElementById("currentdeposit").innerText;
    
    const currentdepositnumber=parseFloat(currentdeposit);
    const totaldeposit=depositnumber+currentdepositnumber;
    
    document.getElementById("currentdeposit").innerText=totaldeposit;
    
    const currentBalance= document.getElementById("currentBalance").innerText;
    
    const currentBalanceNumber=parseFloat(currentBalance);
    const totalBalance=depositnumber+currentBalanceNumber;
    
    document.getElementById("currentBalance").innerText=totalBalance;
    
    document.getElementById("depositamount").value="";
    
    })