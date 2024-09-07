package org.example.apigatewayproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiGatewayProjectApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayProjectApplication.class, args);
    }
//    @Bean
//    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
//        return builder.routes()
//                .route(r -> r.path("/auth/**")
//                        .filters(f -> f
//                                .prefixPath("/api")
//                        )
//                        .uri(url)
//                )
//                .route(r -> r.path("/item/**")
//                        .filters(f -> f
//                                .prefixPath("/api")
//                        )
//                        .uri("http://localhost:8089")
//                )
//                .route(r -> r.path("/order/**")
//                        .filters(f -> f
//                                .prefixPath("/api")
//                        )
//                        .uri("http://localhost:8090")
//                )
//                .build();
//    }
}
