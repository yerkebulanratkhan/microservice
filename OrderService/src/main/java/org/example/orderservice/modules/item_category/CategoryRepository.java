package org.example.orderservice.modules.item_category;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<ItemCategory, Integer> {
}
