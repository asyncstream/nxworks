import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageProvidersPageComponent } from './message-providers-page.component';

describe('MessageProvidersPageComponent', () => {
  let component: MessageProvidersPageComponent;
  let fixture: ComponentFixture<MessageProvidersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageProvidersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageProvidersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
