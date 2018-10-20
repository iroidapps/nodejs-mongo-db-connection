
<style type="text/css">
    #sidebar span {
        font-size: 12px !important;
    }
    #sidebar
    {
        overflow-y: scroll;
    }
</style>

<aside>

    <div id="sidebar"  class="nav-collapse ">

        <!-- sidebar menu start-->

        <ul class="sidebar-menu" id="nav-accordion">



           <!--  <p class="centered"><a href="javascript:void(0);"><img src="<?= SITE_URL_REMOTE."/uploads/app_logo.png" ?>" class="img-circle" width="70" style="border-radius:20%"></a></p> -->

            <h5 class="centered">Admin</h5>



           

            <?php

            if ($_SESSION['uvg_admin_user_type'] == "master_admin") {

                ?>

                

                <li>

                    <a href="dashboard.php" class="<?= $dashboard ?>">

                        <i class="fa fa-tachometer"></i>

                        <span>Dashboard</span>

                    </a>

                </li>

                <li>

                    <a href="users_listing.php" class="<?= $users_listing ?>">

                        <i class="fa fa-users"></i>

                        <span>User Management</span>

                    </a>

                </li>

                <li>

                    <a href="news_listing.php" class="<?= $news_class ?>">

                        <i class="fa fa-file-text"></i>

                        <span>News</span>

                    </a>

                </li>
                 <li>

                    <a href="admission_listing.php" class="<?= $admission_class ?>">

                        <i class="fa fa-file-text"></i>

                        <span>Admission</span>

                    </a>

                </li>

                 <li>

                    <a href="course_listing.php" class="<?= $course ?>">

                        <i class="fa fa-file-text"></i>

                        <span>Courses</span>

                    </a>

                </li>

                <li>

                    <a href="career_listing.php" class="<?= $career ?>">

                        <i class="fa fa-file-text"></i>

                        <span>Career</span>

                    </a>

                </li>


                <li>

                    <a href="new_interest.php" class="<?= $interest ?>">

                        <i class="fa fa-heart"></i>

                        <span>Interest</span>

                    </a>

                </li>
                
                <li>

                    <a href="students.php" class="<?= $student ?>">

                        <i class="fa fa-graduation-cap"></i>

                        <span>Asuntos Estudiantiles</span>

                    </a>

                </li>
                 <li>

                    <a href="egresados.php" class="<?= $egresados ?>">

                        <i class="fa fa-graduation-cap"></i>

                        <span> Egresados</span>

                    </a>

                </li>
               
                 <li>

                    <a href="calendar_categories_listing.php" class="<?= $calendar_category_listing ?>">

                        <i class="fa fa-calendar"></i>

                        <span>Calendar</span>

                    </a>

                </li>

                <li>

                    <a href="faqs.php" class="<?= $faqs ?>">

                        <i class="fa fa-question-circle"></i>

                        <span>FAQS</span>

                    </a>

                </li>

                <li>

                    <a href="banners_listing.php" class="<?= $banner?>">

                        <i class="fa fa-file-text"></i>

                        <span>Banner</span>

                    </a>

                </li>
                <li>

                    <a href="push_to_all.php" class="<?= $push_notification ?>">

                        <i class="fa fa-bell"></i>

                        <span>Push Notification</span>

                    </a>

                </li>
                <li>

                    <a href="beacons_listing.php" class="<?= $beacons ?>">
                        <i class="fa fa-file" aria-hidden="true"></i>

                        <span>Beacons</span>

                    </a>

                </li>
                <li>

                    <a href="chat_number.php" class="<?= $chat_number ?>">

                        <i class="fa fa-phone"></i>

                        <span>WhatsApp Number</span>

                    </a>

                </li>
                <!-- <li>

                    <a href="create_user.php" class="<?= $create_user?>">

                        <i class="fa fa-users"></i>

                        <span>Create User</span>

                    </a>

                </li> -->
                


                <?php

            }

            ?>


        </ul>

        <!-- sidebar menu end-->

    </div>

</aside>