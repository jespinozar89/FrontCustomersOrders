# FrontCustomersOrders

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.2.16.

# Crear Entornos de Trabajo

Para crear los entornos de desarrollo, es necesario tener instalado **nvm** (Node Version Manager).

## Entorno Angular 16

Ejecuta los siguientes comandos para configurar el entorno de Angular 16:

```bash
nvm install 16  # Instalar Node.js 16
nvm use 16  # Usar Node.js 16
npm install -g @angular/cli@16  # Instalar Angular CLI versión 16
```

## Entorno Angular 19

Si deseas trabajar con Angular 19, usa estos comandos:

```bash
nvm install 19  # Instalar Node.js 19
nvm use 19  # Usar Node.js 19
npm install -g @angular/cli@19  # Instalar Angular CLI versión 19
```

# Crear un Proyecto en Angular 16

Para iniciar un nuevo proyecto en Angular, usa el entorno deseado y ejecuta:

```bash
nvm use 16  # Seleccionar el entorno de Node.js 16
ng new mi-proyecto  # Crear un nuevo proyecto en Angular
ng serve  # Iniciar el servidor de desarrollo
```
## Implementar Bootstrap en Angular

Para agregar Bootstrap a tu proyecto, instala la librería con:

```bash
npm install bootstrap
```
Luego, abre el archivo `angular.json` y agrega las siguientes líneas en la sección de **styles** y **scripts**:

```bash
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

## Prueba de Bootstrap en HTML

Para verificar que Bootstrap está funcionando correctamente, puedes agregar el siguiente botón en tu código HTML:

```bash
<button type="button" class="btn btn-success">Success</button>
```

##  Estructura de Carpetas

```bash
src/
└── app/
    ├── core/                      # Servicios globales, modelos, guards si usas
    │   ├── services/              # Servicios compartidos (API, helpers, etc.)
    │   ├── models/                # Interfaces y tipos
    │   └── core.module.ts
    │
    ├── shared/                    # Componentes reutilizables
    │   ├── components/
    │   ├── pipes/
    │   ├── directives/
    │   └── shared.module.ts
    │
    ├── modules/                   # Funcionalidades principales (lazy load)
    │   ├── home/                  # Ejemplo de módulo funcional
    │   │   ├── components/
    │   │   ├── pages/
    │   │   ├── services/
    │   │   ├── home-routing.module.ts
    │   │   └── home.module.ts
    │   │
    │   ├── productos/             # Otro módulo (ej: CRUD de productos)
    │   │   ├── components/
    │   │   ├── pages/
    │   │   ├── services/
    │   │   ├── productos-routing.module.ts
    │   │   └── productos.module.ts
    │
    ├── app-routing.module.ts      # Rutas principales (lazy loading)
    ├── app.component.ts
    └── app.module.ts
```

Para crear la estructura debemos primero crear los modulos ( `core` , `shared` y `modules` ) usando el siguiente comando:

```bash
ng g module core # nombre del modulo , en este ejemplo core
```

luego manualmente , creamos las carpetas dentro de nuestro modulos

## Crear componente **Menu**

para este ejemplo crearemos nuestro menu navbar, el cual sera creado en la ruta `shared/components/navbar`

usaremos el siguiente comando:
```bash
ng g component shared/components/navbar
```
Luego, coloca el código del menú en `shared/components/navbar/navbar.component.html`:

```bash
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" routerLink="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Cliente</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" routerLink="/customers/list">Listar Clientes</a></li>
            <li><a class="dropdown-item" routerLink="/customers/create">Crear Cliente</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Orden</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" routerLink="/orders/list">Listar Ordenes</a></li>
            <li><a class="dropdown-item" routerLink="/orders/create">Crear Orden</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

Abrir `app/app.module.ts` e insertar el modulo **NavbarComponent** en **declarations**

```bash
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent // Agrega el Navbar aquí
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Importar Navbar en `app/app.component.html`

```bash
<app-navbar></app-navbar>
<router-outlet></router-outlet>
```

## Crear Componente Home sin Lazy Loading

Este apartado muestra cómo crear el módulo **home** y configurar su componente principal sin usar Lazy Loading.

**1. Crear el Módulo home**

Ejecuta el siguiente comando en la terminal para generar el módulo **home**:

```bash
ng g module modules/home
```

**2. Crear el Componente home**

Crea el componente dentro del directorio `pages/`:

```bash
ng g component modules/home/pages/home
```

**3. Agregar el Contenido HTML**

Abre el archivo `modules/home/pages/home/home.component.html` y agrega el siguiente código de ejemplo con Bootstrap:

```bash
<section class="container my-5">
  <div class="row text-center">
    <div class="col-md-4">
      <div class="card p-4">
        <h3>Clientes</h3>
        <p>Administra tu lista de clientes fácilmente.</p>
        <a routerLink="/customers" class="btn btn-primary">Ver más</a>
      </div>
    </div>
    <!-- Puedes agregar más tarjetas aquí -->
  </div>
</section>
```

**4. Configurar la Ruta del Componente Home**

Edita el archivo `app-routing.module.ts` para definir la ruta hacia el componente `HomeComponent`:

```bash
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

**5. Registrar el Módulo en AppModule**

Asegúrate de declarar el componente `HomeComponent` y cargar el módulo en el archivo `app.module.ts`:

```bash
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './modules/home/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**6. Agregar Enlace al Menú de Navegación**

Finalmente, agrega el enlace al componente Home en el archivo de navegación `shared/components/navbar/navbar.component.html`:

```bash
<a class="nav-link active" aria-current="page" routerLink="/home">Home</a>
...
<li>
  <a class="dropdown-item" routerLink="/customer/list">Listar Clientes</a>
</li>
...
```

## Crear Componente Customer con Ruta Lazy Loading

Este tutorial muestra cómo crear un módulo `customer` en Angular con rutas **Lazy Loading** y un componente de listado de clientes.

**1. Crear el Módulo con Routing**

Ejecuta el siguiente comando para generar el módulo `customer` con su archivo de rutas:

```bash
ng g module modules/customer --routing
```

**2. Crear el Componente `customer-list`**

Crea el componente dentro del directorio `pages/`:

```bash
ng g component modules/customer/pages/customer-list
```

**3. Agregar Código HTML**

Abre el archivo `modules/customer/pages/customer-list/customer-list.component.html` y pega el código necesario (por ejemplo, una tabla de Bootstrap o lo que necesites mostrar).

**4. Configurar las Rutas del Módulo Customer**

Edita el archivo` modules/customer/customer-routing.module.ts` para incluir las rutas del módulo:

```bash
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: 'list', component: CustomerListComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
```

**5. Importar el Routing en el Módulo**

Edita `modules/customer/customer.module.ts` para declarar el componente y cargar las rutas:

```bash
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
```

**6. Agregar la Ruta Lazy en el App Routing**

Edita el archivo `app-routing.module.ts` (o donde configures tus rutas raíz):

```bash
import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { 
    path: 'customer', 
    loadChildren: () => import('./modules/customer/customer.module')
      .then(m => m.CustomerModule) 
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

```

**7. Enlazar en el Menú de Navegación**

Actualiza el archivo `shared/components/navbar/navbar.component.html` para agregar enlaces al nuevo módulo:

```bash
...
<a class="nav-link active" aria-current="page" routerLink="/home">Home</a>
...
<li>
  <a class="dropdown-item" routerLink="/customer/list">Listar Clientes</a>
</li>
```

## Crear servicio y consumirlo

**1. Crear el servicio en core/services**

crear modelo manualmente en en `core/models`, crea un archivo `customer.model.ts`:

```bash
export interface Customer {
  id: number;
  nombre: string;
  correo: string;
}
```

Utiliza Angular CLI para generar el servicio en la carpeta `core/services`:

```bash
ng generate service core/services/customer
```
Este comando creará el archivo `customer.service.ts` en `core/services/`. Luego, edítalo y añade el siguiente contenido. En este ejemplo definimos una interfaz Customer (modifícala según lo requiera tu API) y el método getCustomers(), que retorna un observable con un arreglo de clientes:

```bash
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiURL = 'http://localhost:5180/api/Customer';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<any[]>(this.apiURL).pipe(
      map((data) =>
        data.map((item) => ({
          id: item.CUSTOMER_ID,
          nombre: item.FULL_NAME,
          correo: item.EMAIL_ADDRESS
        }))
      )
    );
  }
}
```
**2. importar HttpClientModule en tu módulo principal**

importar **HttpClientModule** en tu módulo principal (`core.module.ts`) para que las peticiones HTTP funcionen correctamente.

```bash
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule { }
```
Luego importar **CoreModule** en `app.module.ts`:

```bash
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    // otros componentes...
  ],
  imports: [
    BrowserModule,
    CoreModule, // Importamos CoreModule solo una vez.
    // otros módulos...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
**3. Actualizar el componente `customer-list`**

Ahora integra el servicio en el componente que muestra la lista de clientes.

**a) Inyectar y utilizar el servicio en `customer-list.component.ts`**

Abre el archivo `modules/customer/pages/customer-list/customer-list.component.ts` y realiza las siguientes modificaciones:

- **1. Importa el servicio y la interfaz desde la nueva ubicación:**

```bash
import { Component } from '@angular/core';
import { Customer } from 'src/app/core/models/customer.model';
import { CustomerService } from 'src/app/core/services/customer.service';
```

- **2. Inyecta el servicio en el constructor e implementa ngOnInit():**

```bash
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (data: Customer[]) => {
        this.customers = data;
      },
      error: (error) => {
        console.error('Error al obtener clientes', error);
      }
    });
  }
}
```

**b) Actualizar el HTML para mostrar los datos dinámicamente**

Modifica el contenido de `customer-list.component.html` para iterar sobre el arreglo **customers** utilizando el **ngFor**, de la siguiente forma:

```bash
<div class="container my-5">
  <div class="table-wrapper">
    <div class="table-title">
      <div class="row">
        <div class="col-sm-8">
          <h2 class="mb-4"><b>Lista</b> Clientes</h2>
        </div>
        <div class="col-sm-4">
          <button type="button" class="btn btn-info add-new">
            <i class="fa fa-plus"></i> Añadir nuevo cliente
          </button>
        </div>
      </div>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <!-- Iteramos sobre el arreglo de clientes obtenido desde la API -->
        <tr *ngFor="let customer of customers">
          <td>{{ customer.nombre }}</td>
          <td>{{ customer.correo }}</td>
          <td>
            <a class="edit" title="Edit" data-toggle="tooltip">
              <i class="material-icons">edit</i>
            </a>
            <a class="delete" title="Delete" data-toggle="tooltip">
              <i class="material-icons">delete</i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```
**c) Probar la aplicación**

  - Asegúrate de que tu API .NET 8 esté corriendo en la URL definida en el  servicio.

  - Ejecuta la aplicación Angular con **ng serve**.

  - Navega a la ruta correspondiente para visualizar el componente **customer-list** y confirma que la tabla se llena correctamente con los datos obtenidos desde la API.

## Crear Componentes Hijos

Los **componentes hijos** son piezas reutilizables que se integran dentro de un componente padre. Son útiles para dividir la lógica en partes más pequeñas y manejables, y permiten la comunicación entre componentes mediante propiedades y eventos.

**Estructura Recomendada**

Los componentes hijos deben crearse dentro de la carpeta **components** del módulo correspondiente.
Ejemplo de ruta: `modules/customer/components/`.

Crear Componente Hijo
```bash
ng g component modules/customer/components/customer-list-by-name
```
**Integrar Componente Hijo en el Padre**

Para usar el componente hijo dentro del componente padre, simplemente utiliza su selector HTML dentro de la plantilla del padre:

```bash
<div class="row">
  <div class="col-sm-12">
    <app-customer-list-by-name></app-customer-list-by-name>
  </div>
</div>
```

**Comunicación: Hijo → Padre**

Para enviar datos desde el componente hijo al padre, se utiliza un **@Output()** con un **EventEmitter**.

**Código del Componente Hijo** (`customer-list-by-name.component.ts`)

```bash
import { Component, EventEmitter, Output } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Customer } from 'src/app/core/models/customer.model';

@Component({
  selector: 'app-customer-list-by-name',
  templateUrl: './customer-list-by-name.component.html',
  styleUrls: ['./customer-list-by-name.component.css']
})
export class CustomerListByNameComponent {
  customerName: string = '';

  // Se declara un EventEmitter que emitirá los resultados de la búsqueda.
  // Usamos (Customer | null) para poder emitir null cuando se limpie la búsqueda.
  @Output() searchResult = new EventEmitter<Customer | null>();

  constructor(private customerService: CustomerService) {}

  searchCustomer(): void {
    if (!this.customerName.trim()) {
      console.warn('Debes ingresar un nombre válido');
      return;
    }

    this.customerService.getCustomerByName(this.customerName).subscribe({
      next: (data: Customer) => {
        console.log('Cliente encontrado:', data);
        // Emitimos el cliente encontrado para que el padre lo reciba.
        this.searchResult.emit(data);
      },
      error: (err) => {
        console.error('Error al buscar cliente:', err);
        // Podemos emitir null o notificar el error de otra forma
        this.searchResult.emit(null);
      }
    });
  }

  clearSearch(): void {
    this.customerName = '';
    // Al limpiar, emitimos null para que el padre recargue la lista original.
    this.searchResult.emit(null);
  }
}
```

**Template HTML del Componente Hijo** (`customer-list-by-name.component.html`)

```bash
<div class="input-group mb-3">
  <input type="text"
         class="form-control"
         [(ngModel)]="customerName"
         (keydown.enter)="searchCustomer()"
         placeholder="Buscar cliente por nombre"
         aria-label="customerByName"
         aria-describedby="button-addon2">
  <button class="btn btn-outline-primary" type="button" (click)="searchCustomer()">Buscar</button>
  <button class="btn btn-outline-primary" type="button" (click)="clearSearch()">Limpiar</button>
</div>
```
**Manejo en el Componente Padre**

El componente padre debe declarar un método que reciba el resultado emitido por el hijo.

**Código del Componente Padre** (`customer-list.component.ts`)

```bash
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Customer } from 'src/app/core/models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (data: Customer[]) => this.customers = data,
      error: (err) => console.error('Error al cargar clientes:', err)
    });
  }

  // Este método se llamará desde el hijo mediante el EventEmitter
  handleSearch(searchData: Customer | null): void {
    if (searchData) {
      this.customers = [searchData];
    } else {
      this.loadCustomers();
    }
  }
}
```

**Integrar Todo en la Vista del Padre**

En el archivo HTML del componente padre (`customer-list.component.html`), enlaza el evento **searchResult**:

```bash
<div class="container my-5">
  <div class="table-wrapper">
    <div class="table-title">
      <div class="row">
        <div class="col-sm-8">
          <h2 class="mb-4"><b>Lista</b> Clientes</h2>
        </div>
        <div class="col-sm-4">
          <a routerLink="/customer/create" class="btn btn-outline-primary">Añadir nuevo cliente</a>
        </div>
      </div>
      <hr>
    </div>

    <!-- Componente hijo -->
    <div class="row">
      <div class="col-sm-12">
        <app-customer-list-by-name (searchResult)="handleSearch($event)"></app-customer-list-by-name>
      </div>
    </div>

    <!-- Tabla de clientes -->
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let customer of customers">
          <td>{{ customer.nombre }}</td>
          <td>{{ customer.correo }}</td>
          <td>
            <a class="edit" title="Editar"><i class="material-icons">edit</i></a>
            <a class="delete" title="Eliminar"><i class="material-icons">delete</i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

## Servidor de desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando realices cambios en los archivos fuente.

## Generación de código

Ejecuta `ng generate component component-name` para generar un nuevo componente. También puedes utilizar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción del proyecto

Ejecuta `ng build` para compilar el proyecto. Los archivos generados se almacenarán en el directorio `dist/`.

## Ejecución de pruebas unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias mediante [Karma](https://karma-runner.github.io).

## Ejecución de pruebas end-to-end

Ejecuta `ng e2e` para realizar pruebas end-to-end utilizando la plataforma de tu elección. Para usar este comando, primero debes agregar un paquete que implemente capacidades de pruebas end-to-end.

## Ayuda adicional

Para obtener más información sobre Angular CLI, usa `ng help` o visita la página [Angular CLI Overview and Command Reference](https://angular.io/cli).
