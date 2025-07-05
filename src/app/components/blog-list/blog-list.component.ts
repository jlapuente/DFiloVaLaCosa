import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../integration/services/contentful.service';
import { Post } from '../../integration/classes/post';
import { MapUtils } from 'src/app/integration/services/mapUtils';
declare var $: any;


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  page: number = 1;
  // entries: any[] = [];
  loading: boolean = false;
  posts: Post[] = [];
  ngOnInit(): void {
    this._contentfulService.getAllEntries().subscribe(entries => {
      entries.items.forEach(entryElement => {
        this.posts.push(this.mapUtils.mapPostPreview(entryElement))
      });
      console.log(entries)
    });
  }

  constructor(private _contentfulService: ContentfulService, private mapUtils: MapUtils) {

  }

  availableTags: string[] = ["Feminismo", "Actualidad", "Política", "izquierda-unida", "sumar", "podemos", "Filosofía", "Filosofía Queer", "Neoliberalismo"];

  searchTitle: string = '';
  selectedTags: string[] = [];

  onSearch(): void {
    console.log('Search initiated with title:', this.searchTitle, 'and tags:', this.selectedTags);
    this.loading = true;
    this._contentfulService.getAllEntriesByFilters(this.searchTitle, this.selectedTags).subscribe(entries => {
      let filteredEntries = entries.items;
      this.posts = [];
      filteredEntries.forEach(entryElement => {
        this.posts.push(this.mapUtils.mapPostPreview(entryElement));
      });
      console.log('Filtered entries:', this.posts);
      this.loading = false;
    });
  };

  onClearFilters(): void {
    this.searchTitle = '';
    this.selectedTags = [];
    // Emitir valores vacíos para limpiar los filtros
    this.onSearch();
  }
}
