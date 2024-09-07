package org.example.orderservice.modules.order;

import jakarta.transaction.Transactional;
import org.example.orderservice.modules.order_item.OrderItem;
import org.example.orderservice.modules.order_item.OrderItemRepository;
import org.example.orderservice.modules.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderItemRepository orderItemRepository;
    @Autowired
    private UserService userService;

    @Transactional
    public Boolean saveOrder(Order order) {
        try {
            order.setUser(userService.getCurrentUser());
            order.setDate(new Date());
            List<OrderItem> items = order.getItems();
            order.setItems(new ArrayList<>());
            Order savedOrder = orderRepository.save(order);
            items.forEach(item-> {
                item.setOrder(savedOrder);
                orderItemRepository.save(item);
            });
        } catch (Exception exception) {
            return false;
        }
        return true;
    }

    public List<Order> getOrders() {
        return orderRepository.findAllByUserId(userService.getCurrentUser().getId());
    }
}
