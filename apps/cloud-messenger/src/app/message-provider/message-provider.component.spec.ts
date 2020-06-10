import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageProviderComponent } from './message-provider.component';

describe('MessageProviderComponent', () => {
  let component: MessageProviderComponent;
  let fixture: ComponentFixture<MessageProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
