//var coins = currentUserData.balance;

var betted = 0;
var betNumber;
var betNumberInput;
var betMoney;
var betMoneyInput;
var betColor;
var betColorInput;

function bet(){
    if(betted > 0){
        console.log("Bet allerede lavet")
    }
    else if(betMoney > currentUserData.balance){
        console.log("Du har ikke nok penge til dette sats")
    }
    else if (betMoney <= currentUserData.balance) {
        betMoney = betMoneyInput;
        betNumber = betNumberInput;
        betColor = betColorInput;

        betted = betMoney;
        currentUserData.balance -= betted;
    }
}

function add5(){
    betMoneyInput += 5;    
}
function add10(){
    betMoneyInput += 10;    
}
function add25(){
    betMoneyInput += 25;    
}
function add50(){
    betMoneyInput += 50;    
}
function add100(){
    betMoneyInput += 100;    
}
function reset(){
    betMoneyInput = 0;
}

function betBlack(){
    betMoney = betMoneyInput;
    betNumber = null;
    betColor = "black";
    bet();
    betMoneyInput = 0;            
}
function betRed(){
    betMoney = betMoneyInput;
    betNumber = null;
    betColor = "red";
    bet();
    betMoneyInput = 0;            
}

function bet0(){
    betMoney = betMoneyInput;
    betNumber = 0;
    bet();
    betMoneyInput = 0; 
    bets.push("0")
    console.log(removeDup(bets));
}
function bet1(){
    betMoney = betMoneyInput;
    betNumber = 1;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("1")
    console.log(removeDup(bets));
}
function bet2(){
    betMoney = betMoneyInput;
    betNumber = 2;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("2")
    console.log(removeDup(bets));
}
function bet3(){
    betMoney = betMoneyInput;
    betNumber = 3;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("3")
    console.log(removeDup(bets));
}
function bet4(){
    betMoney = betMoneyInput;
    betNumber = 4;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("4")
    console.log(removeDup(bets));
}
function bet5(){
    betMoney = betMoneyInput;
    betNumber = 5;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("5")
    console.log(removeDup(bets));
}
function bet6(){
    betMoney = betMoneyInput;
    betNumber = 6;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("6")
    console.log(removeDup(bets));
}
function bet7(){
    betMoney = betMoneyInput;
    betNumber = 7;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("7")
    console.log(removeDup(bets));
}
function bet8(){
    betMoney = betMoneyInput;
    betNumber = 8;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("8")
    console.log(removeDup(bets));
}
function bet9(){
    betMoney = betMoneyInput;
    betNumber = 9;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("9")
    console.log(removeDup(bets));
}
function bet10(){
    betMoney = betMoneyInput;
    betNumber = 10;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("10")
    console.log(removeDup(bets));
}
function bet11(){
    betMoney = betMoneyInput;
    betNumber = 11;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("11")
    console.log(removeDup(bets));
}
function bet12(){
    betMoney = betMoneyInput;
    betNumber = 12;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("12")
    console.log(removeDup(bets));
}
function bet13(){
    betMoney = betMoneyInput;
    betNumber = 13;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("13")
    console.log(removeDup(bets));
}
function bet14(){
    betMoney = betMoneyInput;
    betNumber = 14;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("14")
    console.log(removeDup(bets));
}
function bet15(){
    betMoney = betMoneyInput;
    betNumber = 15;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("15")
    console.log(removeDup(bets));
}
function bet16(){
    betMoney = betMoneyInput;
    betNumber = 16;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("16")
    console.log(removeDup(bets));
}
function bet17(){
    betMoney = betMoneyInput;
    betNumber = 17;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("17")
    console.log(removeDup(bets));
}
function bet18(){
    betMoney = betMoneyInput;
    betNumber = 18;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("18")
    console.log(removeDup(bets));
}
function bet19(){
    betMoney = betMoneyInput;
    betNumber = 19;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("19")
    console.log(removeDup(bets));
}
function bet20(){
    betMoney = betMoneyInput;
    betNumber = 20;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("20")
    console.log(removeDup(bets));
}
function bet21(){
    betMoney = betMoneyInput;
    betNumber = 21;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("21")
    console.log(removeDup(bets));
}
function bet22(){
    betMoney = betMoneyInput;
    betNumber = 22;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("22")
    console.log(removeDup(bets));
}
function bet23(){
    betMoney = betMoneyInput;
    betNumber = 23;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("23")
    console.log(removeDup(bets));
}
function bet24(){
    betMoney = betMoneyInput;
    betNumber = 24;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("24")
    console.log(removeDup(bets));
}
function bet25(){
    betMoney = betMoneyInput;
    betNumber = 25;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("25")
    console.log(removeDup(bets));
}
function bet26(){
    betMoney = betMoneyInput;
    betNumber = null;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("26")
    console.log(removeDup(bets));
}
function bet27(){
    betMoney = betMoneyInput;
    betNumber = 27;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("27")
    console.log(removeDup(bets));
}
function bet28(){
    betMoney = betMoneyInput;
    betNumber = 28;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("28")
    console.log(removeDup(bets));
}
function bet29(){
    betMoney = betMoneyInput;
    betNumber = 29;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("29")
    console.log(removeDup(bets));
}
function bet30(){
    betMoney = betMoneyInput;
    betNumber = 30;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("30")
    console.log(removeDup(bets));
}
function bet31(){
    betMoney = betMoneyInput;
    betNumber = 31;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("31")
    console.log(removeDup(bets));
}
function bet32(){
    betMoney = betMoneyInput;
    betNumber = 32;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("32")
    console.log(removeDup(bets));
}
function bet33(){
    betMoney = betMoneyInput;
    betNumber = 33;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("33")
    console.log(removeDup(bets));
}
function bet34(){
    betMoney = betMoneyInput;
    betNumber = 34;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("34")
    console.log(removeDup(bets));
}
function bet35(){
    betMoney = betMoneyInput;
    betNumber = 35;
    betColor = "black";
    bet();
    betMoneyInput = 0; 
    bets.push("35")
    console.log(removeDup(bets));
}
function bet36(){
    betMoney = betMoneyInput;
    betNumber = 36;
    betColor = "red";
    bet();
    betMoneyInput = 0; 
    bets.push("36")
    console.log(removeDup(bets));
}



function removeDup(data) {
    return [new Set(data)]
}
