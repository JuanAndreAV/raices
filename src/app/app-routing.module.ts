import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
    { path: 'home',
      component: PortafolioComponent
    },
    { path: 'about',
      component: AboutComponent
    },
    { path: 'item/:id',
      component: ItemComponent
    },
    {
      path: 'search/:articulo',
      component: SearchComponent
    },
    { path: '**',
      component: PortafolioComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],//para desplegar en github pages useHash
  exports: [RouterModule]
})
export class AppRoutingModule { }
