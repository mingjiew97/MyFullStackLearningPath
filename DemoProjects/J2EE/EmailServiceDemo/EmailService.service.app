[Unit]
Description=Email Service Demo
After=syslog.target
 
[Service]
User=ubuntu
ExecStart=/home/ubuntu/Backend/EmailServiceDemo-0.0.1-SNAPSHOT.jar SuccessExitStatus=143
 
[Install] 
WantedBy=multi-user.target