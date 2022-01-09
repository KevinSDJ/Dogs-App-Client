




function filtTxt(arg){
    if(arg.includes(" ")){
        arg=arg.split(" ").map(e=> e=e[0].toUpperCase()+e.slice(1))
        arg= arg.join(" ")
    }else{
        arg=arg.split("")[0].toUpperCase()+arg.slice(1);
       
    }
    return arg
}


export {filtTxt}