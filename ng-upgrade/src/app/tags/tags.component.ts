import { Component, OnInit , Input} from '@angular/core';

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
  constructor() { }

  ngOnInit() {
      console.log( this.tags );
  }

  public displayItem(tag) {
      // Add it to the service
  }

}
