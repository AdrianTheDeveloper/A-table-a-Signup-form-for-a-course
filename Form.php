<?php

$Ccode=filter_input(INPUT_POST, Ccode);
$Ctitle=filter_input(INPUT_POST, Ctitles);
$Cdisc=filter_input(INPUT_POST, Cdisc);
$level=filter_input(INPUT_POST, level);
$credits=filter_input(INPUT_POST, credits);
$semester=filter_input(INPUT_POST, semester);

		if (strlen($Cdisc)<4){
			if(!empty($Ctitle)){
				if (strlen($Ccode)<4){
					$host = "localhost";
					$dbusername="comp2190SA";
					$dbpassword="2018Sem1";
					$dbname=" CourseMgmtDB";
					$conn = new mysqli($host,$dbusername,$dbpassword,$dbname);
						if (mysqli_connect_error()) {
							die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());
						}
							else{
								$sql ="INSERT INTO courses(Ccode,Ctitle,Cdisc,level,credits,semester)
								values('$Ccode','$Ctitle','$Cdisc','$level','$credits','$semester')";
									if ($conn->($sql)) {
										echo"New Course record Entered"
									}
										else{
											echo" Connection error";
										}
							$conn->close();
							}
				
				}
				else{
					echo "Enter a valid Course Code";
					die();
				}

			}
			else{
				echo "Enter a valic Course title";
				die();
			}
		}

		else{
			echo "Enter a valid Course Description";
			die();
		}





?>