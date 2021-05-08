var updateDb = function(usersArray) {
    localStorage.setItem('users', usersArray)
}

var getUsers = function() {
    return JSON.parse(localStorage.getItem('users'))
}

var users = []
var currentUserData

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

        if(currentUserData) {
            return 'Du er logget ind ' + currentUserData.username + ' Og du har en kontosaldo på: ' + currentUserData.balance
        }
    }else {
        return 'Du er ikke logget ind'
    }
}

var getLoggedInInfo = function() {
    let user = users[attrExist(users, 'id', Number(getCookie('rotterikscasino_login')))]

    return user
}














$(function(){
    //gets user data from fictive DB
    let usersData = getUsers()
    users = (usersData ? usersData : [])

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

        userObj.id = uid()
        userObj.username = username
        userObj.password = password
        userObj.balance = balance
        
        users.push(userObj)

        updateDb(JSON.stringify(users))

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






