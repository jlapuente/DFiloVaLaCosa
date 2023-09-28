import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
declare var $: any;

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [ReactiveFormsModule, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should exist', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector("#contact");
    const inputElements = formElement.querySelectorAll('input');
    // console.log(inputElements.length)
    expect(inputElements.length).toEqual(3);
  })

  it('Form should be empty at first', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector("#contact");
    console.log("FORM:", formElement.values)
    expect(formElement.value).toBeUndefined()
  })
  
  it('Form inputs should be empty at first', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector("#contact");
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements[0].value).toEqual('');
    expect(inputElements[1].value).toEqual('');
    expect(inputElements[2].value).toEqual('');
    console.log("FORM:", formElement.values)
    // expect(formElement.errors).not.toBeNull();
    // expect(formElement.errors.required).toBeTruthy();

  })


  it('Form shouldnt be empty then', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector("#contact");
    console.log("FORM:", formElement.values)
    expect(formElement).not.toBeNull()
  })

});
