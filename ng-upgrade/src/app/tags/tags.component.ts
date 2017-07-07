import { Component, OnInit , Input, Inject} from '@angular/core';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent implements OnInit {
    @Input()
    public tags: Array<Object>;
    @Input()
    public type: string;

  // Inject the service into the class
  constructor(@Inject('CardsService') private cardsService) { }

  ngOnInit() { }

  /**
   * Load the selected item
   * @param  {Object} tag Selected Object
   * @return {void}
   */
  public displayItem(tag) {
      // Add it to the service
      console.log( tag );
      this.cardsService.addItem(tag, this.type);
  }

}
