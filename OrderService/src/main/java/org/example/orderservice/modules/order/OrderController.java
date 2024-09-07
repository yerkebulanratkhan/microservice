package org.example.orderservice.modules.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private OrderService service;

    @PostMapping("/save")
    public Boolean save(@RequestBody Order order) {
        return service.saveOrder(order);
    }

    @GetMapping("/orders")
    public List<Order> getItems() {
        return service.getOrders();
    }
}
