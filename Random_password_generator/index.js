
function pass_generator(password_length, include_lowercase, include_uppercase, include_numbers, include_symbols){

    let lowercase = "abcdefghijklmnopqrstuvwxyz"
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numbers = "0123456789"
    let symbols = "~!@#$%^&*()_+"

    let generatingpassword = "";
    let password = "";

    generatingpassword += include_lowercase ? lowercase : "" ;
    generatingpassword += include_uppercase ? uppercase : "" ;
    generatingpassword += include_numbers ? numbers : "" ;
    generatingpassword += include_symbols ? symbols : "" ;

    if(password_length <= 0){
        return "length should be atleast one length character";
    }

    if(generatingpassword.length == 0){
        return "atleast one set of characters need to be selected";
    }

    for(let i = 0; i<password_length; i++){
        const randomindex = Math.floor(Math.random() *generatingpassword.length) +1;
        password += generatingpassword[randomindex];
    }


    return password;
}

const password_length = 10;
const include_lowercase = true;
const include_uppercase = true;
const include_numbers = false;
const include_symbols = false;

const password = pass_generator(password_length, include_lowercase, include_uppercase, include_numbers, include_symbols)

console.log(`Generated password: ${password}`);