<%

set cn = Server.CreateObject("ADODB.Connection")
set rs = Server.CreateObject("ADODB.RecordSet")
set rs1 = Server.CreateObject("ADODB.RecordSet")

cn.open "PROVIDER=MICROSOFT.JET.OLEDB.4.0;DATA SOURCE= " & Server.MapPath("../database/IMRTCDB.mdb") 
%>
<div class=""> 
    <div id="mgmenu1" class="mgmenu_container clearfix "> 
      <ul class="mgmenu clearfix" id="nav1">
        <!-- Begin Mega Menu -->
        <li class="mgmenu_button"> 
          <div class="mgm_button_text"> <i class="icomoon-grid"></i>Main Navigation </div>
        </li>
        <!-- Button (Mobile Devices) -->
        <!-- Home -->
<%
STR = "Select * from IndAppTbl where Ind_emailadd = '"&Ind_emailadd&"' AND IndApp_RT_ID ='"&IndApp_RT_ID&"' "
rs.open STR, cn
	If not rs.eof then 
	
	Ind_App_RTA = rs("Ind_App_RTA")
	IndApp_RT_ID = rs("IndApp_RT_ID")	

	end if
rs.close

for a = 1 to 6

'Check The Menubar
STR1 = "Select * from Member_Menubar_Tbl where Role_Cat = '"&Ind_App_RTA&"' AND Level_def='Level_Main' And Tag1='"&a&"' "
rs.open STR1, cn

if not rs.eof then
		link_name = rs("Iink_name")
		Link  = rs("Link")
				 
    	response.Write("<li><span><a href='"&link&"'>" & link_name & "<i class='icomoon-arrow-down-2'></i> </a></span>")
        response.Write("<div class='col-lg-3 col-md-3 col-sm-3 col-xs-12 dropdown_container'>")
        '<!-- Begin Item Container -->
Set STR1 = Nothing
rs.close	
	 
response.Write("<ul class='dropdown_flyout'>")
	
	STR2 = "Select * from Member_Menubar_Tbl where Role_Cat = '"&Ind_App_RTA&"' AND Level_Def = 'Level_Sub' AND Tag1 = '"&a&"'"
	rs1.open STR2, cn	
			
		While not rs1.eof
			link_name = rs1("Iink_name")
			Link  = rs1("Link")										
		response.Write("<li><span><a href='"&Link&"'>" & Link_name & "</a></span></li>")
		rs1.movenext
		wend	
		response.Write("</div>")		
	rs1.close	
Set STR2 = Nothing
End if

Next
cn.close
%>
        
		
      </ul>
    </div>
  </div>