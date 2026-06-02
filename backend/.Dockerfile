# Build stage
FROM gradle:jdk21 AS build
WORKDIR /app
COPY build.gradle.kts .
COPY settings.gradle.kts .
COPY src ./src
RUN gradle bootJar --no-daemon

# Run stage
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]