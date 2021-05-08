var updateDb = function(dataArray, ref) {
    localStorage.setItem(ref, dataArray)
}

var getData = function(ref) {
    return JSON.parse(localStorage.getItem(ref))
}

var users = []
var balances = []

var currentUserData
var balanceData


var updateBalance = function(newBalance, uid) {
   balances[attrExist(balances, 'uid', uid)].balance = Number(newBalance)
   updateDb(JSON.stringify(balances), 'balances')  //stringify gør array til string og gør at computeren senere kan convertere det tilbage til array. Dette gøres da server ikke kan gemme læse JS, men godt kan læse string. Parse bruges senere til at lave string tilbage til array.
}

var setCookie = function(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

var getCookie = function(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

var deleteCookie = function(name) { 
    setCookie(name, '', -1); 
}

function attrExist(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}


var uid = function() {
    return Math.floor(new Date().getTime().valueOf() * Math.random())
}


var findUser = function(username, password) {
    // Does user exist?
    let exists = attrExist(users, 'username', username)

    if(exists == -1) {
        // Error does not exist
        console.log('User does not exist')
    }else{
        // User exists
        let user = users[exists]

        // Does the password match
        if(user.password === password) {
            console.log('log ind')
            return user.id
        }else {
            console.log('Wrong password')
        }
    }
}


var isUserLoggedIn = function() {
    let loggedIn = getCookie('rotterikscasino_login')

    if(loggedIn) {
        currentUserData = getLoggedInInfo()
        balanceData = getBalanceData()


        console.log(balanceData)
        console.log(balances)


        if(currentUserData) {
            return 'Du er logget ind ' + currentUserData.username + ' Og du har: ' + balanceData.balance
        }
    }else {
        return 'Du er ikke logget ind'
    }
}

var getLoggedInInfo = function() {
    let user = users[attrExist(users, 'id', Number(getCookie('rotterikscasino_login')))]

    return user
}

var getBalanceData = function() {
    let balance = balances[attrExist(balances, 'uid', Number(getCookie('rotterikscasino_login')))]

    return balance
}












$(function(){
    //gets user data from fictive DB
    let usersData = getData('users')
    users = (usersData ? usersData : [])

    let balanceData = getData('balances')
    balances = (balanceData ? balanceData : [])

    console.log(users)

    console.log(isUserLoggedIn())

    var $create_btn = $('.createuser_btn')
    var $login_btn = $('.login_btn')
    var $logout_btn = $('.log_out_btn')

    // When button is clicked aggregate and create user from entered data
    $create_btn.on('click', function(){
        let username = $('.username').val()
        let password = $('.password').val()

        createUser(username, password, 100)
    })

    $login_btn.on('click', function(){
        let username = $('.login_username').val()
        let password = $('.login_password').val()

        // Find user
        login(username, password)
    })

    $logout_btn.on('click', function(){
        logout()
    })

    // User createion function, takes in the given user data (Username, Password, Balance and returns a user object)
    var createUser = function(username, password, balance) {
        let userObj = {}
        let balanceObj = {}
        let id = uid()

        userObj.id = id
        userObj.username = username
        userObj.password = password

        balanceObj.uid = id
        balanceObj.balance = balance
        
        users.push(userObj)
        balances.push(balanceObj)

        updateDb(JSON.stringify(users), 'users')
        updateDb(JSON.stringify(balances), 'balances')


        return true
    }

    var login = function(username, password) {
        let userSearch = findUser(username, password)
        let user_id = (userSearch ? userSearch : false)

        if(user_id) {
            // User exists and has returned id
            // Log in

            setCookie('rotterikscasino_login', user_id, 1)
            return true
        }else {
            // User didn't exist
            return false
        }
    }

    var logout = function() {
        deleteCookie('rotterikscasino_login')
    }
})



let canvasH = 400;
let canvasW = 1850;

let backgroundC = 157;

let hojde = 200;
let speed = 10;
let sideL = 50;

let pause = false;
let cooldown = true;
let timeleft = 0;

let vindertal = null;
let vinderfarve ='null'



function setup(){
    createCanvas(canvasW, canvasH);
    background(157);
    frameRate(60);
    
}

class firkant {
    constructor(x, y, side, speed, nummer, r, g, b) {
        this.x = x;
        this.y = y;
        this.side = side;
        this.speed = speed;
        this.nummer = nummer;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    move(){
        this.x += this.speed;
        this.speed = speed;
        if (this.x >= canvasW) {
            this.x = 0
        }
    }

    tekst(){
        noStroke();
        textSize(32);
        textAlign(CENTER,CENTER);
        fill(255);
        text(this.nummer, this.x + this.side/2, this.y + this.side/2);
    }

    tegn(){
        stroke(80);
        strokeWeight(4);
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.side, this.side);
    }

}

var firkant0 = new firkant(0, hojde, sideL, speed, 0, 0, 255, 0);
var firkant32 = new firkant(firkant0.x + sideL, hojde, sideL, speed, 32, 255, 0, 0);
var firkant15 = new firkant(firkant32.x + sideL, hojde, sideL, speed, 15, 0, 0, 0);
var firkant19 = new firkant(firkant15.x + sideL, hojde, sideL, speed, 19, 255, 0, 0);
var firkant4 = new firkant(firkant19.x + sideL, hojde, sideL, speed, 4, 0, 0, 0);
var firkant21 = new firkant(firkant4.x + sideL, hojde, sideL, speed, 21, 255, 0, 0);
var firkant2 = new firkant(firkant21.x + sideL, hojde, sideL, speed, 2, 0, 0, 0);
var firkant25 = new firkant(firkant2.x + sideL, hojde, sideL, speed, 25, 255, 0, 0);
var firkant17 = new firkant(firkant25.x + sideL, hojde, sideL, speed, 17, 0, 0, 0);
var firkant34 = new firkant(firkant17.x + sideL, hojde, sideL, speed, 34, 255, 0, 0);
var firkant6 = new firkant(firkant34.x + sideL, hojde, sideL, speed, 6, 0, 0, 0);
var firkant27 = new firkant(firkant6.x + sideL, hojde, sideL, speed, 27, 255, 0, 0);
var firkant13 = new firkant(firkant27.x + sideL, hojde, sideL, speed, 13, 0, 0, 0);
var firkant36 = new firkant(firkant13.x + sideL, hojde, sideL, speed, 36, 255, 0, 0);
var firkant11 = new firkant(firkant36.x + sideL, hojde, sideL, speed, 11, 0, 0, 0);
var firkant30 = new firkant(firkant11.x + sideL, hojde, sideL, speed, 30, 255, 0, 0);
var firkant8 = new firkant(firkant30.x + sideL, hojde, sideL, speed, 8, 0, 0, 0);
var firkant23 = new firkant(firkant8.x + sideL, hojde, sideL, speed, 23, 255, 0, 0);
var firkant10 = new firkant(firkant23.x + sideL, hojde, sideL, speed, 10, 0, 0, 0);
var firkant5 = new firkant(firkant10.x + sideL, hojde, sideL, speed, 5, 255, 0, 0);
var firkant24 = new firkant(firkant5.x + sideL, hojde, sideL, speed, 24, 0, 0, 0);
var firkant16 = new firkant(firkant24.x + sideL, hojde, sideL, speed, 16, 255, 0, 0);
var firkant33 = new firkant(firkant16.x + sideL, hojde, sideL, speed, 33, 0, 0, 0);
var firkant1 = new firkant(firkant33.x + sideL, hojde, sideL, speed, 1, 255, 0, 0);
var firkant20 = new firkant(firkant1.x + sideL, hojde, sideL, speed, 20, 0, 0, 0);
var firkant14 = new firkant(firkant20.x + sideL, hojde, sideL, speed, 14, 255, 0, 0);
var firkant31 = new firkant(firkant14.x + sideL, hojde, sideL, speed, 31, 0, 0, 0);
var firkant9 = new firkant(firkant31.x + sideL, hojde, sideL, speed, 9, 255, 0, 0);
var firkant22 = new firkant(firkant9.x + sideL, hojde, sideL, speed, 22, 0, 0, 0);
var firkant18 = new firkant(firkant22.x + sideL, hojde, sideL, speed, 18, 255, 0, 0);
var firkant29 = new firkant(firkant18.x + sideL, hojde, sideL, speed, 29, 0, 0, 0);
var firkant7 = new firkant(firkant29.x + sideL, hojde, sideL, speed, 7, 255, 0, 0);
var firkant28 = new firkant(firkant7.x + sideL, hojde, sideL, speed, 28, 0, 0, 0);
var firkant12 = new firkant(firkant28.x + sideL, hojde, sideL, speed, 12, 255, 0, 0);
var firkant35 = new firkant(firkant12.x + sideL, hojde, sideL, speed, 35, 0, 0, 0);
var firkant3 = new firkant(firkant35.x + sideL, hojde, sideL, speed, 3, 255, 0, 0);
var firkant26 = new firkant(firkant3.x + sideL, hojde, sideL, speed, 26, 0, 0, 0);

function sejrTal(){
    if (firkant0.x <= canvasW/2 && firkant0.x + sideL >= canvasW/2){
        vindertal = 0;
    } else if (firkant32.x <= canvasW/2 && firkant32.x + sideL >= canvasW/2){
        vindertal = 32;
        vinderfarve = 'red';
    } else if (firkant15.x <= canvasW/2 && firkant15.x + sideL >= canvasW/2){
        vindertal = 15;
        vinderfarve = 'black';
    } else if (firkant19.x <= canvasW/2 && firkant19.x + sideL >= canvasW/2){
        vindertal = 19;
        vinderfarve = 'red';
    } else if (firkant4.x <= canvasW/2 && firkant4.x + sideL >= canvasW/2){
        vindertal = 4;
        vinderfarve = 'black';
    } else if (firkant21.x <= canvasW/2 && firkant21.x + sideL >= canvasW/2){
        vindertal = 21;
        vinderfarve = 'red';
    } else if (firkant2.x <= canvasW/2 && firkant2.x + sideL >= canvasW/2){
        vindertal = 2;
        vinderfarve = 'black';
    } else if (firkant25.x <= canvasW/2 && firkant25.x + sideL >= canvasW/2){
        vindertal = 25;
        vinderfarve = 'red';
    } else if (firkant17.x <= canvasW/2 && firkant17.x + sideL >= canvasW/2){
        vindertal = 17;
        vinderfarve = 'black';
    } else if (firkant34.x <= canvasW/2 && firkant34.x + sideL >= canvasW/2){
        vindertal = 34;
        vinderfarve = 'red';
    } else if (firkant6.x <= canvasW/2 && firkant6.x + sideL >= canvasW/2){
        vindertal = 6;
        vinderfarve = 'black';
    } else if (firkant27.x <= canvasW/2 && firkant27.x + sideL >= canvasW/2){
        vindertal = 27;
        vinderfarve = 'red';
    } else if (firkant13.x <= canvasW/2 && firkant13.x + sideL >= canvasW/2){
        vindertal = 13;
        vinderfarve = 'black';
    } else if (firkant36.x <= canvasW/2 && firkant36.x + sideL >= canvasW/2){
        vindertal = 36;
        vinderfarve = 'red';
    } else if (firkant11.x <= canvasW/2 && firkant11.x + sideL >= canvasW/2){
        vindertal = 11;
        vinderfarve = 'black';
    } else if (firkant30.x <= canvasW/2 && firkant30.x + sideL >= canvasW/2){
        vindertal = 30;
        vinderfarve = 'red';
    } else if (firkant8.x <= canvasW/2 && firkant8.x + sideL >= canvasW/2){
        vindertal = 8;
        vinderfarve = 'black';
    } else if (firkant23.x <= canvasW/2 && firkant23.x + sideL >= canvasW/2){
        vindertal = 23;
        vinderfarve = 'red';
    } else if (firkant10.x <= canvasW/2 && firkant10.x + sideL >= canvasW/2){
        vindertal = 10;
        vinderfarve = 'black';
    } else if (firkant5.x <= canvasW/2 && firkant5.x + sideL >= canvasW/2){
        vindertal = 5;
        vinderfarve = 'red';
    } else if (firkant24.x <= canvasW/2 && firkant24.x + sideL >= canvasW/2){
        vindertal = 24;
        vinderfarve = 'black';
    } else if (firkant16.x <= canvasW/2 && firkant16.x + sideL >= canvasW/2){
        vindertal = 16;
        vinderfarve = 'red';
    } else if (firkant33.x <= canvasW/2 && firkant33.x + sideL >= canvasW/2){
        vindertal = 33;
        vinderfarve = 'black';
    } else if (firkant1.x <= canvasW/2 && firkant1.x + sideL >= canvasW/2){
        vindertal = 1;
        vinderfarve = 'red';
    } else if (firkant20.x <= canvasW/2 && firkant20.x + sideL >= canvasW/2){
        vindertal = 20;
        vinderfarve = 'black';
    } else if (firkant14.x <= canvasW/2 && firkant14.x + sideL >= canvasW/2){
        vindertal = 14;
        vinderfarve = 'red';
    } else if (firkant31.x <= canvasW/2 && firkant31.x + sideL >= canvasW/2){
        vindertal = 31;
        vinderfarve = 'black';
    } else if (firkant9.x <= canvasW/2 && firkant9.x + sideL >= canvasW/2){
        vindertal = 9;
        vinderfarve = 'red';
    } else if (firkant22.x <= canvasW/2 && firkant22.x + sideL >= canvasW/2){
        vindertal = 22;
        vinderfarve = 'black';
    } else if (firkant18.x <= canvasW/2 && firkant18.x + sideL >= canvasW/2){
        vindertal = 18;
        vinderfarve = 'red';
    } else if (firkant29.x <= canvasW/2 && firkant29.x + sideL >= canvasW/2){
        vindertal = 29;
        vinderfarve = 'black';
    } else if (firkant7.x <= canvasW/2 && firkant7.x + sideL >= canvasW/2){
        vindertal = 7;
        vinderfarve = 'red';
    } else if (firkant28.x <= canvasW/2 && firkant28.x + sideL >= canvasW/2){
        vindertal = 28;
        vinderfarve = 'black';
    } else if (firkant12.x <= canvasW/2 && firkant12.x + sideL >= canvasW/2){
        vindertal = 12;
        vinderfarve = 'red';
    } else if (firkant35.x <= canvasW/2 && firkant35.x + sideL >= canvasW/2){
        vindertal = 35;
        vinderfarve = 'black';
    } else if (firkant3.x <= canvasW/2 && firkant3.x + sideL >= canvasW/2){
        vindertal = 3;
        vinderfarve = 'red';
    } else if (firkant26.x <= canvasW/2 && firkant26.x + sideL >= canvasW/2){
        vindertal = 26;
        vinderfarve = 'black';
    } 
}

var hold = false;
var countdown2 = 5*60;

function stands(){
    speed -= 1;
}

function stop(){
        cooldown = false;
        timeleft = Math.round(Math.random() * (10 - 5)) + 5;
        pause = true;
    }

function draw() {
    if (cooldown === false) {
        timeleft -= 1/60;
    }
    if (timeleft <= 0){
        cooldown = true;
    }


    if (pause === true && cooldown === true && speed > 0){
        stands();
        console.log("stands")
        if(speed === 0){
            hold = true
        }
    }
    if (hold === true){
        sejrTal(); 
        result(betted);
        hold = false;
    } 

    if (speed === 0){
        countdown2 -= 1;
    }

    if (countdown2 === 0){
        pause = false;
        cooldown = true;
        speed = 10;
        betted = 0;
        countdown2 = 5*60;
    }




   



    

    stroke(0);
    background(backgroundC);
    fill(255,0,0)
    
    triangle((canvasW/2)-30, 75, canvasW/2, 200, (canvasW/2)+30, 75);
    hardcode();
    

    noStroke();
    fill(255);
    rect(0,firkant0.y-5,150,60)
    rect(canvasW-150, firkant0.y-5,150,60)

    textAlign(LEFT, LEFT)
    text("Saldo: " + balanceData.balance + " kr", 30, 100)
    text("Dit sats: " + betMoneyInput + " kr", 30, 50)
}




