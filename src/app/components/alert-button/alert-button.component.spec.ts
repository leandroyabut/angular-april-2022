import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertButtonComponent } from './alert-button.component';
import {By} from '@angular/platform-browser';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button the contains the word "toggle"', () => {
    const buttonEl = fixture.debugElement.query(By.css("button"));
    expect(buttonEl.nativeElement.innerText.toLowerCase()).toContain("toggle");
  });

  it('should have a button that toggles "showing" field to true if it is false', () => {
    const buttonEl = fixture.debugElement.query(By.css("button"));
    component.showing = false;
    buttonEl.triggerEventHandler("click", null);
    fixture.detectChanges();
    expect(component.showing).toBeTrue();
  });

  it('should have a button that toggles "showing" field to false it is true', () => {
    const buttonEl = fixture.debugElement.query(By.css("button"));
    component.showing = true;
    buttonEl.triggerEventHandler("click", null);
    fixture.detectChanges();
    expect(component.showing).toBeFalse();
  });

  it('should not display alert element string when "showing" is false', () => {
    const message = fixture.debugElement.query(By.css(".alert p"));
    component.showing = false;
    fixture.detectChanges();
    expect(message).toBeFalsy();
  });

  it('should display alert element string when "showing" is true', () => {
    component.showing = true;
    fixture.detectChanges();
    const message = fixture.debugElement.query(By.css("div.alert p"));
    expect(message).toBeTruthy();
  });

  it('should display "alertMessage" string when "showing" is true', () => {
    component.alertMessage="This is a test message.";
    component.showing = true;
    fixture.detectChanges();
    const message = fixture.debugElement.query(By.css("div.alert p"));
    expect(message.nativeElement.innerText).toBe(component.alertMessage);
  });
});
