import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddPlantersComponent } from './add-planters/add-planters.component';
import { AddSeedComponent } from './add-seed/add-seed.component';
import { AllPlantersComponent } from './all-planters/all-planters.component';
import { LaunchNewProductComponent } from './launch-new-product/launch-new-product.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersOnCategoryComponent } from './orders-on-category/orders-on-category.component';
import { OrdersComponent } from './orders/orders.component';
import { PlanterFilterationsComponent } from './planter-filterations/planter-filterations.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlantsComponent } from './plants/plants.component';
import { SeedFiltersComponent } from './seed-filters/seed-filters.component';
import { SeedVarietiesComponent } from './seed-varieties/seed-varieties.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewPlanterComponent } from './view-planter/view-planter.component';
import { ViewSeedComponent } from './view-seed/view-seed.component';
import { AboutComponent } from './about/about.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { SeedReviewComponent } from './seed-review/seed-review.component';
import { AllSeedReviewsComponent } from './all-seed-reviews/all-seed-reviews.component';

const allLinks:Routes = [
  {path:'about',component:AboutComponent},
  {path:'launchproduct',component:LaunchNewProductComponent},
  {path:'products',component:ViewAllProductsComponent},
  {path:'productDetail/:pid',component:ViewDetailsComponent},
  {path:'order',component:OrdersComponent},
  {path:'orderList',component:OrderListComponent},
  {path:'orderListOnCategory',component:OrdersOnCategoryComponent},
  {path:'addOrder',component:AddOrderComponent},
  {path:'try',component:PlantsComponent},
  {path:'addSeed',component:AddSeedComponent},
  {path:'SeedsAvailable',component:SeedVarietiesComponent},
  {path:'seedDetails',component:ViewSeedComponent},
  {path:'addPlanter',component:AddPlantersComponent},
  {path:'PlantersAvailable',component:AllPlantersComponent},
  {path:'planterDetails',component:ViewPlanterComponent},
  {path:'planterFilters',component:PlanterFilterationsComponent},
  {path:'seedFilters',component:SeedFiltersComponent},
  {path:'feedback',component:AddReviewComponent},
  {path:'allReviews',component:AllSeedReviewsComponent},
  {path:'viewreview',component:SeedReviewComponent}
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    AddOrderComponent,
    AddPlantersComponent,
    AddSeedComponent,
    AllPlantersComponent,
    LaunchNewProductComponent,
    OrderListComponent,
    OrdersOnCategoryComponent,
    OrdersComponent,
    PlanterFilterationsComponent,
    
    PlantsComponent,
    SeedFiltersComponent,
    SeedVarietiesComponent,
    ViewAllProductsComponent,
    ViewDetailsComponent,
    ViewPlanterComponent,
    ViewSeedComponent,
    AboutComponent,
    AddReviewComponent,
    SeedReviewComponent,
    AllSeedReviewsComponent
  ],
  imports: [
    BrowserModule,   FormsModule,
    AppRoutingModule,HttpClientModule,
    AppRoutingModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
