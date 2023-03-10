import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WizardCompletionStepComponent } from './components/wizard-completion-step.component';
import { WizardNavigationBarComponent } from './components/wizard-navigation-bar.component';
import { WizardStepComponent } from './components/wizard-step.component';
import { WizardComponent } from './components/wizard.component';
import { EnableBackLinksDirective } from './directives/enable-back-links.directive';
import { GoToStepDirective } from './directives/go-to-step.directive';
import { NextStepDirective } from './directives/next-step.directive';
import { OptionalStepDirective } from './directives/optional-step.directive';
import { PreviousStepDirective } from './directives/previous-step.directive';
import { ResetWizardDirective } from './directives/reset-wizard.directive';
import { SelectedStepDirective } from './directives/selected-step.directive';
import { WizardCompletionStepDirective } from './directives/wizard-completion-step.directive';
import { WizardStepSymbolDirective } from './directives/wizard-step-symbol.directive';
import { WizardStepTitleDirective } from './directives/wizard-step-title.directive';
import { WizardStepDirective } from './directives/wizard-step.directive';
import { NavigationModeDirective } from './directives/navigation-mode.directive';
import { CompletedStepDirective } from './directives/completed-step.directive';
/**
 * The module defining all the content inside `angular-archwizard`
 *
 * @author Marc Arndt
 */
export class ArchwizardModule {
    /* istanbul ignore next */
    static forRoot() {
        return {
            ngModule: ArchwizardModule,
            providers: [
            // Nothing here yet
            ]
        };
    }
}
ArchwizardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective,
                    NavigationModeDirective,
                    CompletedStepDirective,
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective,
                    NavigationModeDirective,
                    CompletedStepDirective,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaHdpemFyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vc3JjLyIsInNvdXJjZXMiOlsibGliL2FyY2h3aXphcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RixPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUMxRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUYsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFHN0U7Ozs7R0FJRztBQTRDSCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLDBCQUEwQjtJQUNuQixNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7WUFDVCxtQkFBbUI7YUFDcEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBcERGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLDRCQUE0QjtvQkFDNUIsNkJBQTZCO29CQUM3QixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtvQkFDekIsd0JBQXdCO29CQUN4Qix3QkFBd0I7b0JBQ3hCLG1CQUFtQjtvQkFDbkIsNkJBQTZCO29CQUM3QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2QixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsNEJBQTRCO29CQUM1Qiw2QkFBNkI7b0JBQzdCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIseUJBQXlCO29CQUN6Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQiw2QkFBNkI7b0JBQzdCLHFCQUFxQjtvQkFDckIsb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtpQkFDdkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHtXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge1dpemFyZFN0ZXBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93aXphcmQtc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHtXaXphcmRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93aXphcmQuY29tcG9uZW50JztcbmltcG9ydCB7RW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvZW5hYmxlLWJhY2stbGlua3MuZGlyZWN0aXZlJztcbmltcG9ydCB7R29Ub1N0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9nby10by1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge05leHRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmV4dC1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge09wdGlvbmFsU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL29wdGlvbmFsLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7UHJldmlvdXNTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcHJldmlvdXMtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtSZXNldFdpemFyZERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3Jlc2V0LXdpemFyZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTZWxlY3RlZFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9zZWxlY3RlZC1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtc3ltYm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1dpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXRpdGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1dpemFyZFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZURpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL25hdmlnYXRpb24tbW9kZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtDb21wbGV0ZWRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29tcGxldGVkLXN0ZXAuZGlyZWN0aXZlJztcblxuXG4vKipcbiAqIFRoZSBtb2R1bGUgZGVmaW5pbmcgYWxsIHRoZSBjb250ZW50IGluc2lkZSBgYW5ndWxhci1hcmNod2l6YXJkYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBXaXphcmRDb21wb25lbnQsXG4gICAgV2l6YXJkU3RlcENvbXBvbmVudCxcbiAgICBXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50LFxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50LFxuICAgIEdvVG9TdGVwRGlyZWN0aXZlLFxuICAgIE5leHRTdGVwRGlyZWN0aXZlLFxuICAgIFByZXZpb3VzU3RlcERpcmVjdGl2ZSxcbiAgICBPcHRpb25hbFN0ZXBEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUsXG4gICAgRW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBEaXJlY3RpdmUsXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUsXG4gICAgU2VsZWN0ZWRTdGVwRGlyZWN0aXZlLFxuICAgIFJlc2V0V2l6YXJkRGlyZWN0aXZlLFxuICAgIE5hdmlnYXRpb25Nb2RlRGlyZWN0aXZlLFxuICAgIENvbXBsZXRlZFN0ZXBEaXJlY3RpdmUsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFdpemFyZENvbXBvbmVudCxcbiAgICBXaXphcmRTdGVwQ29tcG9uZW50LFxuICAgIFdpemFyZE5hdmlnYXRpb25CYXJDb21wb25lbnQsXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQsXG4gICAgR29Ub1N0ZXBEaXJlY3RpdmUsXG4gICAgTmV4dFN0ZXBEaXJlY3RpdmUsXG4gICAgUHJldmlvdXNTdGVwRGlyZWN0aXZlLFxuICAgIE9wdGlvbmFsU3RlcERpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZSxcbiAgICBFbmFibGVCYWNrTGlua3NEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcERpcmVjdGl2ZSxcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSxcbiAgICBTZWxlY3RlZFN0ZXBEaXJlY3RpdmUsXG4gICAgUmVzZXRXaXphcmREaXJlY3RpdmUsXG4gICAgTmF2aWdhdGlvbk1vZGVEaXJlY3RpdmUsXG4gICAgQ29tcGxldGVkU3RlcERpcmVjdGl2ZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcmNod2l6YXJkTW9kdWxlIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QXJjaHdpemFyZE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQXJjaHdpemFyZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAvLyBOb3RoaW5nIGhlcmUgeWV0XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19