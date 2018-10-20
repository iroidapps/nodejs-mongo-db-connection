<?php

include_once '../api/db_connection.php';

include_once './admin_include/admin_header.php';

include_once './admin_include/admin_menu.php';

// USER STATASTIC COUNT
$query = mysqli_query($conn,"SELECT count(*) AS total_user FROM tblusers");
$total_user = mysqli_fetch_assoc($query);
$query = mysqli_query($conn,"SELECT count(*) AS total_active_user FROM tblusers WHERE status = 1");
$total_active_user = mysqli_fetch_assoc($query);


?>


<style type="text/css">
    
    td,th {   
    	vertical-align: middle !important;
    	text-align: center !important;}
    #unseen {
        text-align: center;
    }
    .white-panel .small {
        font-size: 20px;
        color: #ccd1d9;
    }
    h5{
        font-size: 25px;
    }
    .white-panel .white-header {
        background: #14171e;       
        color: #ffffff;
    }
    .form-group{
        padding: 20px;
    }
    .white-header{
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }
    .white-panel{
        border-radius: 15px;
    }
    #region,#platform,#gmt,#age_group{
    	text-transform: capitalize;
    }
   
</style>
