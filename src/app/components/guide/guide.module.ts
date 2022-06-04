import { NgModule } from '@angular/core';
import { GuideComponent } from 'src/app/components/guide/guide.component';

const components = [
  GuideComponent,
];

@NgModule({
  declarations: [components],
  exports: [components],
})
export class FeatureGuideModule {}
