package org.example.orderservice.modules.order_item;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.orderservice.modules.item.Item;
import org.example.orderservice.modules.order.Order;

@Data
@NoArgsConstructor
@Entity
@Table(name = "order_item")
public class OrderItem {
    private Long id;
    private Item item;
    private Order order;
    private Integer quantity;
    private Double price;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    public Order getOrder() {
        return order;
    }

    @ManyToOne
    @JoinColumn(name = "item_id")
    public Item getItem() {
        return item;
    }
}
