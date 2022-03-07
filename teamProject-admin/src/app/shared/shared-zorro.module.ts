import { IconsProviderModule } from "./icons-provider.module";
import { NzListModule } from 'ng-zorro-antd/list';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

export const SHARED_ZORRO_MODULES = [
    IconsProviderModule,
    NzListModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzDescriptionsModule
]