import { AppComponent } from './app.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { AppModule } from './app.module';
import { MatTooltip } from '@angular/material/tooltip';

describe('AppComponent', () => {
  beforeEach(() => {
    return MockBuilder(AppComponent, AppModule);
  });

  it('should contain proper p text', () => {
    const fixture = MockRender(AppComponent);

    expect(fixture.nativeElement.innerHTML).toContain('NgMock MatTooltip');
  });

  it('should check MatTooltip Directive message', () => {
    const fixture = MockRender(AppComponent);

    const matTooltip = ngMocks.findInstance(MatTooltip);

    expect(matTooltip.message).toContain('Info about the action');
  });

  it('should check MatTooltip Directive message', () => {
    const fixture = MockRender(AppComponent);

    const matTooltip = ngMocks.findInstance(MatTooltip);

    expect(matTooltip.disabled).toBeFalse();
  });
});
