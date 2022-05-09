import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Act & Assert
    expect(app).toBeTruthy();
  });

  it(`should have 'Angular-Demo' as title`, () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Act & Assert
    expect(app.title).toEqual('Angular-Demo');
  });

  it('should render title with proper contents', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;

    // Act
    fixture.detectChanges();

    // Assert
    expect(compiled.querySelector('html title')?.textContent).toEqual(
      'Angular-Demo-App'
    );
  });

  it('should have a header with a `Hello World!` message', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;

    // Act
    fixture.detectChanges();

    // Assert
    expect(compiled.querySelector('body h1')?.textContent).toEqual(
      'Hello World!'
    );
  });
});
