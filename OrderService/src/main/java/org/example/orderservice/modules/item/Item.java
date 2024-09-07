package org.example.orderservice.modules.item;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.orderservice.modules.item_category.ItemCategory;

@Data
@NoArgsConstructor
@Entity
@Table(name = "items")
public class Item {
    private Integer id;
    private String name;
    private String description;
    private Double price;
    private ItemCategory category;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    public ItemCategory getCategory() {
        return category;
    }
}
