package org.example.orderservice.modules.item;

import org.example.orderservice.modules.item_category.CategoryRepository;
import org.example.orderservice.modules.item_category.ItemCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ItemRepository repository;

    public Item save(Item item) {
        return repository.save(item);
    }

    public List<Item> getItems() {
        return repository.findAll();
    }

    public List<ItemCategory> getCategories() {
        return categoryRepository.findAll();
    }
}
