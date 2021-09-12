import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MenuBarComponent} from './menu-bar.component';
import {HarnessLoader} from "@angular/cdk/testing";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed";
import {MatBottomSheetHarness} from "@angular/material/bottom-sheet/testing";

describe('MenuBarComponent', () => {
  let component: MenuBarComponent;
  let fixture: ComponentFixture<MenuBarComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatBottomSheetModule, NoopAnimationsModule ],
      declarations: [ MenuBarComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
  });

  it('should create', () => {
    // Act / Assert
    expect(component).toBeTruthy();
  });

  it('should load a harness for the bottom sheet', async () => {
    // Arrange
    fixture.componentInstance.openBottomSheet();

    // Act
    const bottomSheets = await loader.getAllHarnesses(MatBottomSheetHarness);

    // Assert
    expect(bottomSheets.length).toBe(1);
  });

  it('should be able to dismiss the bottom sheet', async () => {
    // Arrange
    fixture.componentInstance.openBottomSheet();
    let bottomSheets = await loader.getAllHarnesses(MatBottomSheetHarness);
    expect(bottomSheets.length).toBe(1);

    // Act
    await bottomSheets[0].dismiss();

    // Assert
    bottomSheets = await loader.getAllHarnesses(MatBottomSheetHarness);
    expect(bottomSheets.length).toBe(0);
  });
});
