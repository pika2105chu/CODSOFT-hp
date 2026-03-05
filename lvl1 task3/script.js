let Result = document.getElementById('result');

function insertvalue(value){
    Result.value+=value;
}

function clean(){
    Result.value = '';
}

// function del(){
//     Result.value = Result.value.slice(0,-1);
// }

function calculate(){
    try{
        Result.value = eval(Result.value);
    }

    catch(error){
        Result.value = "error";
    }
}