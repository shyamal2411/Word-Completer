var txtArea=document.getElementById("txtArea");
txtArea.onkeyup=function () {
    var word=getLastWord(txtArea.value);
    alert(word);
}

function getLastWord(text) {
    var result= "";
    for(var i=text.length;i>0;i--)
    {
        if(text.substring(i,i-1) !=" ")
        {
            result=text.substring(i,i-1)+result;
        }
        else
        {
            break;
        }
    }    
    return result;
}