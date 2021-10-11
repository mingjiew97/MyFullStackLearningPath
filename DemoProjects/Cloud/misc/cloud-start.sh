./zipkin-server-2.11.4-exec.jar > zipkin.log &
kafka_2.12-2.1.0/bin/zookeeper-server-start.sh kafka_2.12-2.1.0/config/zookeeper.properties > zookeeper.log &
kafka_2.12-2.1.0/bin/kafka-server-start.sh kafka_2.12-2.1.0/config/server.properties > kafka.log &
