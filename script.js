var txtArea=document.getElementById("txtArea");
txtArea.onkeyup=function () {
    var word=getLastWord(txtArea.value);
    if(wordmatch(word))
    {
  txtArea.replacealast(txtArea.value,word);
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

function replacealast(text,word)
{
    var result="";
    result=text.substring(0,text.length-word.length)+wordinstead(word);
    return result;
}

var availword=["medical","anything"];
function wordinstead(word)
{
    word=word.toLowerCase();
    for(var i=0;i<keywords.length;i++)
    {
       if(word.substring(0,keywords[i].length) ==keywords[i])
        {return availword;}

    }
}