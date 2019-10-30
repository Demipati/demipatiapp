//AQUI ESTÁ LA APLICACIÓN, esta es una componenete (Principal), cada una de estas tiene su propio css

import React, {Component} from 'react'; //IMporta react
//import logo from './logo.svg';//Logo

//Sus estilos
import './App.css';

import Navegacion from './componentes/Navegacion';
import Tareas from './componentes/Tareas';
import Carousel from './componentes/Carousel';

//COMPONENTE APP
// La clase es una representacion de una parte de la página
class App extends Component {
  render(){
    return (
      // Todo debe estar encerrado por esta etiqueta
      //Para no confundir con "class" de REact se usa "className"
      // Propiedades ojooooo IMPORTANTE

      <div className="App">
        <Navegacion nombre="Caleb"/>
        <Carousel/>
        {/*<Tareas/>*/}

        {/*Sección  ¿qué libros buscas?*/}
        <hr className="m-0"></hr>
        <section  className="my-5">
          <div className="container mx-auto">
            <div className="row m-4">
              <div className="col-md">
                <h2>¿Qué libros buscas?</h2>
              </div>
              <div className="col-md">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Buscar libro" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/*Sección categorías principales*/}
        <hr className="m-0"></hr>
        <section className="my-5">
          <h3> Categorías principales </h3>
          <div className="container">
            <div class="row">
              <div class="col-sm-3">
                <div class="card">
                  <img src="./img/categoria1.jpg" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                <img src="./img/categoria2.jpg" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                <img src="./img/categoria4.jpg" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card">
                <img src="./img/categoria5.jpg" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </section>
        
        {/*Sección ¿Cómo funciona?*/}
        <hr className="m-0"></hr>
        <section  className="my-5">
          <div className="container-fluid my-4">
            <h3>Descubre cómo funciona la plataforma</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">Paso 1</strong>
                    <h3 class="mb-0">Registrate </h3>
                    <br/>
                    <p class="card-text mb-auto">Proporcionanos tus datos para que puedas conectarte con usuarios que venden o compran libros cerca de tu centro de estudios.</p>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-success">Paso 2</strong>
                    <h3 class="mb-0">Sube tu producto y valorízalo</h3><br/>
                    <p class="mb-auto">Entra al <a href="#">Formulario</a> de subir libro, indícanos las carácteristicas de tu libro y será publicada en la plataforma</p>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-success">Paso 3</strong>
                    <h3 class="mb-0">Contacta con el comprador</h3><br/>
                    <p class="mb-auto">Recibirás notificaciones de personas interesesadas en comprar tu producto, contacta con uno de ellos y vendele</p>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">Paso 4</strong>
                    <h3 class="mb-0">Entrega</h3><br/>
                    <p class="mb-auto">Tienes la posibilidad de encontrar en la plataforma a otra persona que puede hacer el recojo y entrega de tu producto. <a href="#">Contáctalo</a></p>
                  </div>
                  <div class="col-auto d-none d-lg-block">
                    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
            
        </section>

        {/* Sube tu libro */}
        <hr className="m-0"></hr>
        <section className="my-5">
          <div class="container">
            <div class="text-center">
              <img class="d-block mx-auto" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
              <h3>Sube tu libro</h3>
              <p class="lead">Publica la venta de tu libro en nuestra plataforma indicandonos los datos que se muestran a continuación:</p>
            </div>

            <div class="row">
              <div class="col-md-8 mx-auto order-md-1">
                
                <form class="needs-validation" novalidate="">
                  <h4 class="mb-3">Datos de contacto</h4>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="firstName">Nombres</label>
                      <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="lastName">Apellidos</label>
                      <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""/>
                      <div class="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="email">Email <span class="text-muted">(Opcional)</span></label>
                      <input type="email" class="form-control" id="email" placeholder="example@gmail.com"/>
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="phone">Número de celular <span class="text-muted">(Opcional)</span></label>
                      <input type="text" class="form-control" id="email" placeholder="+51 971854793"/>
                      <div class="invalid-feedback">
                        Ingrese un número válido
                      </div>
                    </div>
                  </div>
                  
                  <div class="mb-3">
                    <label for="address">Dirección <span class="text-muted"> (Referencial)</span></label>
                    <input type="text" class="form-control" id="address" placeholder="Calle C. Aramburú 794 San Miguel - Lima" required=""/>
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="address2">Universidad o Instituto en la que estudias <span class="text-muted">(Opcional)</span></label>
                    <input type="text" class="form-control" id="address2" placeholder="PUCP"/>
                  </div>
                  
                  <h4 class="mb-3">Datos del libro</h4>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="firstName">Título del libro</label>
                      <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="lastName">Autor</label>
                      <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""/>
                      <div class="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="phone">Fecha aproximada de compra</label>
                      <input type="text" class="form-control" id="email" placeholder="abril 2018"/>
                      <div class="invalid-feedback">
                        Ingrese un número válido
                      </div>
                    </div>
                  
                    <div class="col-md-5 mb-3">
                      <label for="country">Estado</label>
                      <select class="custom-select d-block w-100" id="country" required="">
                        <option value="">Elige</option>
                        <option>10/10</option>
                        <option>09/10</option>
                        <option>08/10</option>
                        <option>07/10</option>
                        <option>06/10</option>
                        <option>05/10</option>
                        <option>04/10</option>
                        <option>03/10</option>
                        <option>02/10</option>
                        <option>01/10</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-primary btn-lg btn-block" type="submit">Publicar</button>
                </form>
              </div>
            </div>
          </div>

        </section>

        {/*Sección Catálogo*/}
        <hr className="m-0"></hr>
        <section className="my-5">
          <h3>Catálogo</h3>
          <div role="main" class="container">
            
            <div class="my-3 p-3 bg-white rounded shadow-sm">
              <h6 class="border-bottom border-gray pb-2 mb-0">Recientemente Subidos</h6>
              <div class="media text-muted pt-3">
                <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                  <strong class="d-block text-gray-dark">@username</strong>
                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
              </div>
              <div class="media text-muted pt-3">
                <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
                <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                  <strong class="d-block text-gray-dark">@username</strong>
                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
              </div>
              <div class="media text-muted pt-3">
                <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
                <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                  <strong class="d-block text-gray-dark">@username</strong>
                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
              </div>
              <small class="d-block text-right mt-3">
                <a href="#">All updates</a>
              </small>
            </div>

            <div class="my-3 p-3 bg-white rounded shadow-sm">
              <h6 class="border-bottom border-gray pb-2 mb-0">Sugerencias</h6>
              <div class="media text-muted pt-3">
                <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                  <div class="d-flex justify-content-between align-items-center w-100">
                    <strong class="text-gray-dark">Full Name</strong>
                    <a href="#">Follow</a>
                  </div>
                  <span class="d-block">@username</span>
                </div>
              </div>
              <div class="media text-muted pt-3">
                <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                  <div class="d-flex justify-content-between align-items-center w-100">
                    <strong class="text-gray-dark">Full Name</strong>
                    <a href="#">Follow</a>
                  </div>
                  <span class="d-block">@username</span>
                </div>
              </div>
              <div class="media text-muted pt-3">
                <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                  <div class="d-flex justify-content-between align-items-center w-100">
                    <strong class="text-gray-dark">Full Name</strong>
                    <a href="#">Follow</a>
                  </div>
                  <span class="d-block">@username</span>
                </div>
              </div>
              <small class="d-block text-right mt-3">
                <a href="#">All suggestions</a>
              </small>
            </div>
          </div>
        </section>

        {/*Sección Quieres solicitar algun libro?*/}
        <hr className="m-0"></hr>
        <section className="my-5">
          <h3>¿Deseas comprar algun libro específico?... ¡solicítalo!</h3>
          <p>En construcción</p>
        </section>

        {/*Sección Inicia Sesión*/}
        <hr className="m-0"></hr>
        <section className="my-5">
          <h3>Inicia Sesión</h3>
          <p>En construcción</p>
        </section>

        {/*Sección Registrate*/}
        <hr className="m-0"></hr>
        <section className="my-5">
          <h3>Registrate</h3>
          <p>En construcción</p>
        </section>

        {/*Sección Nosotros*/}
        <section className="my-5">
          <div className="container">
            <h3>Nosotros</h3>
            <div class="media row">
              <div className="col-md-3">
                <img src="./img/favicon/apple-icon-120x120.png" class="align-self-center mr-3" alt="..."/>
              </div>
              
              <div class=" col-md-9 media-body text-justify">
                <p>Somos Demipati, un emprendidmiento comprometido con la economía circular promoviendo de tal modo iniciativas que favorezcan el reuso de materiales. La economía circular es una estrategia que tiene por objetivo reducir tanto la entrada de los materiales vírgenes como la producción de desechos, cerrando los «bucles» o flujos económicos y ecológicos de los recursos.</p>
                <p class="my-0">La economía circular es una estrategia que tiene por objetivo reducir tanto la entrada de los materiales vírgenes como la producción de desechos, cerrando los «bucles» o flujos económicos y ecológicos de los recursos.</p>
              </div>
            </div>
          </div>
        </section>
        
        <hr ></hr>
        <footer class="bd-footer text-muted bg-dark">
          <div class="container-fluid p-3 p-md-5">
            <br/>
            <br/>
            <br/>
            <p className="text-light">Demipati © 2019 </p>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </footer>
      
      </div>
    );
  }

}

export default App;
