import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ContentfulService } from '../../integration/services/contentful.service';
import { BehaviorSubject, of } from 'rxjs';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  let route: ActivatedRoute;
  const paramsSubject = new BehaviorSubject({
    id1: 1,
    id2: 0,
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogComponent],
      providers: [{
        provide: ActivatedRoute, useValue: {
          params: paramsSubject
        }, ContentfulService
      }],
      imports: [RouterModule]
    })
      .compileComponents();

    route = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be zero', () => { // add done to let Jasmine know when you're done with the test
    route.params.subscribe(params => {
      expect(params['id2']).toBe(0);
    });
  });

});
