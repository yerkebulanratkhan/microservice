FROM maven:3.8.8-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean install
FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/OrderService-0.0.1-SNAPSHOT.jar /app/UserService-0.0.1-SNAPSHOT.jar
CMD ["java", "-jar", "/app/UserService-0.0.1-SNAPSHOT.jar"]
