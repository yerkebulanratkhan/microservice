package org.example.itemsservice.rest;

import org.example.itemsservice.modules.item.Item;
import org.example.itemsservice.modules.item.ItemService;
import org.example.itemsservice.modules.item_category.ItemCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/item")
public class ItemsController {
    @Autowired
    private ItemService service;

    @PostMapping("/save")
    public Item save(@RequestBody Item item) {
        return service.save(item);
    }

    @GetMapping("/items")
    public List<Item> getItems() {
        return service.getItems();
    }

    @GetMapping("/categories")
    public List<ItemCategory> getCategories() {
        return service.getCategories();
    }
}
