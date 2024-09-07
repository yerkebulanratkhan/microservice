import {Component, OnInit} from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import {Item} from "../dto/Item";
import {Category} from "../dto/Category";
import {ItemService} from "../services/ItemService";
import { BlockUI, NgBlockUI } from 'ng-block-ui';
declare const $: any | undefined;

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})

export class ItemsComponent implements OnInit {
  items: Item[] = [];
  categories: Category[] = [];
  newitem: Item = new Item();
  @BlockUI() blockUI: NgBlockUI | undefined;
  constructor(private toastrService: ToastrService,
              private service: ItemService) {
  }

  ngOnInit() {
    this.getCategories();
    this.getItems();
  }

  save() {
    this.blockUI?.start('Loading...');
    this.service.save(this.newitem).subscribe((response)=> {
      this.toastrService.success('Saved');
      this.getItems();
      // @ts-ignore
      $('#addModal').modal('hide');
      this.blockUI?.stop();
      this.newitem = new Item();
    }, (error)=> {
      this.toastrService.error('Error');
      this.blockUI?.stop();
    })
  }

  getItems() {
    this.service.getItems().subscribe(response=> {
      this.items = response;
    })
  }

  getCategories() {
    this.service.getCategories().subscribe(response=> {
      this.categories = response;
    })
  }
}

