package org.example.orderservice.modules.order;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.orderservice.modules.order_item.OrderItem;
import org.example.orderservice.modules.user.User;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    private Long id;
    private User user;
    private Date date;
    private Integer status;
    private List<OrderItem> items;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    @ManyToOne
    @JoinColumn(name = "user_id")
    public User getUser() {
        return user;
    }

    @JsonBackReference
    @JsonManagedReference
    @OneToMany(mappedBy = "order", cascade = {}, fetch = FetchType.LAZY)
    public List<OrderItem> getItems() {
        return items;
    }
}
