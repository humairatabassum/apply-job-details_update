function synchronise()
{
	var strUser=getCookie("JOBUN");
	
	
	if(strUser!=null)
	{
		username=strUser.substring(0,strUser.indexOf("#"));
		password=getCookie("JOBPS");
		
		
	}
	
	
	myusername=document.getElementById("txtusername").value;
	chkRem=document.getElementById("checkRemember");
	if(myusername==username)
	{
		document.getElementById("txtPassword").value=password;
		chkRem.checked=true;
		
	}
	else
	{
		document.getElementById("txtPassword").value="";
		chkRem.checked=false;
	}
	
	
	
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function rememberId()
{
	ischecked=document.getElementById("checkRemember");
	if(ischecked.checked)
	{
		ischecked.checked=false;
	}
	else
	{
		ischecked.checked=true;
	}
	
}
function fromSubmit()
{
	document.getElementById("loginForm").submit();
}