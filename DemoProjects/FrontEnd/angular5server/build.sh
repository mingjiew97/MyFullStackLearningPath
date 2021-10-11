sudo docker stop angular5demo
sudo docker rm angular5demo
sudo docker rmi angular5demoimage
sudo docker build -t angular5demoimage .
sudo docker run -d -p 3000:3000 --name angular5demo angular5demoimage