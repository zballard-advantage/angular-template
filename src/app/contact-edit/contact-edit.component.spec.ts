import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactEditComponent } from './contact-edit.component';

describe('AddTutorialComponent', () => {
  let component: ContactEditComponent;
  let fixture: ComponentFixture<ContactEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactEditComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
