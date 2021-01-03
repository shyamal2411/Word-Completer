var txtArea=document.getElementById("txtArea");
txtArea.onkeyup=function () {
    var word=getLastWord(txtArea.value);
    if(wordmatch(word))
    {
    alert(word);
    }
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
var keywords=["med","anyt"];
function wordmatch(text)
{
    text=text.LowerCase();
    for(var i=0;i<keywords.length;i++)
    {
        if(text.substring(0,keywords[i].length) ==keywords[i])
        {return true;}

    }
}