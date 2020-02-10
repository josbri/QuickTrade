import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarModalPage } from './editar-modal.page';

describe('EditarModalPage', () => {
  let component: EditarModalPage;
  let fixture: ComponentFixture<EditarModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
