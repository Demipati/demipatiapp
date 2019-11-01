//AQUI ESTÁ LA APLICACIÓN, esta es una componenete (Principal), cada una de estas tiene su propio css

import React, {Component} from 'react'; //IMporta react
//import logo from './logo.svg';//Logo

//Sus estilos
import './App.css';

import Navegacion from './componentes/Navegacion';
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
        <Navegacion nombre="Conecielito <3"/>
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
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar libro" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0 mx-auto" type="submit">Buscar</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        

        {/*Sección ¿Cómo funciona?*/}
        <hr className="m-0"></hr>
        <section  className="my-5">
          <div className="container-fluid my-4">
            <h3>Descubre cómo funciona la plataforma</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">Paso 1</strong>
                    <h3 className="mb-0">Registrate </h3>
                    <br/>
                    <p className="card-text mb-auto">Proporcionanos tus datos para que puedas conectarte con usuarios que venden o compran libros cerca de tu centro de estudios.</p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">Paso 2</strong>
                    <h3 className="mb-0">Sube tu producto y valorízalo</h3><br/>
                    <p className="mb-auto">Entra al <a href="https://www.google.com/">Formulario</a> de subir libro, indícanos las carácteristicas de tu libro y será publicada en la plataforma</p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">Paso 3</strong>
                    <h3 className="mb-0">Contacta con el comprador</h3><br/>
                    <p className="mb-auto">Recibirás notificaciones de personas interesesadas en comprar tu producto, contacta con uno de ellos y vendele</p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">Paso 4</strong>
                    <h3 className="mb-0">Entrega</h3><br/>
                    <p className="mb-auto">Tienes la posibilidad de encontrar en la plataforma a otra persona que puede hacer el recojo y entrega de tu producto. <a href="https://www.google.com/">Contáctalo</a></p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
            
        </section>

        {/* Sube tu libro */}
        <hr className="m-0"></hr>
        <section className="my-5">
          <div className="container">
            <div className="text-center">
              
              <h3>Sube tu libro</h3>
              <p className="lead">Publica la venta de tu libro en nuestra plataforma indicandonos los datos que se muestran a continuación:</p>
            </div>

            <div className="row">
              <div className="col-md-8 mx-auto order-md-1">                
                <form className="needs-validation" noValidate="">
                  <h4 className="mb-3">Datos de contacto</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstNamepub">Nombres</label>
                      <input 
                      type="text" 
                      className="form-control" 
                      id="firstNamepub" placeholder="Nombres"
                      required=""
                      />

                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastNamepub">Apellidos</label>
                      <input type="text" className="form-control" id="lastNamepub" placeholder="Apellidos" required=""/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="email">Email <span className="text-muted">(Opcional)</span></label>
                      <input type="email" className="form-control" id="email" placeholder="example@gmail.com"/>
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="phone">Número de celular <span className="text-muted">(Opcional)</span></label>
                      <input type="text" className="form-control" id="phone" placeholder="+51 971854793"/>
                      <div className="invalid-feedback">
                        Ingrese un número válido
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="address">Dirección <span className="text-muted"> (Referencial)</span></label>
                    <input type="text" className="form-control" id="address" placeholder="Calle C. Aramburú 794 San Miguel - Lima" required=""/>
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address2">Universidad o Instituto en la que estudias <span className="text-muted">(Opcional)</span></label>
                    <input type="text" className="form-control" id="address2" placeholder="PUCP"/>
                  </div>
                  
                  <h4 className="mb-3">Datos del libro</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="bookName">Título del libro</label>
                      <input type="text" className="form-control" id="bookName" placeholder=""  required=""/>
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName">Autor</label>
                      <input type="text" className="form-control" id="lastName" placeholder="" required=""/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="phone">Fecha aproximada de compra</label>
                      <input type="text" className="form-control" id="date" placeholder="abril 2018"/>
                      <div className="invalid-feedback">
                        Ingrese un número válido
                      </div>
                    </div>
                  
                    <div className="col-md-5 mb-3">
                      <label htmlFor="country">Estado</label>
                      <select className="custom-select d-block w-100" id="country" required="">
                        <option value="onChange">Elige</option>
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
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
                    <div className="col-md-5 mb-3">
                   
                      <label htmlFor="inputFile">Selecciona al menos 3 fotos</label>
                      <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                    
                    </div>
                  </div>
                  
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Publicar</button>
                </form>
              </div>
            </div>
          </div>

        </section>

        {/*Sección Catálogo*/}
        <hr className="m-0"></hr>
        <section className="my-5">
          <h3>Catálogo</h3>
          
          <div className="album py-5 bg-light">
            <div className="container">

              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img className="img-fluid rounded card-img-top" src="/img/catalogo/user023_pub22.jpg" height="225" alt="Dibujo de Ingeniería - P. Kaster" />
                    <div className="card-body">
                      <h6 className="card-text">Dibujo de Ingeniería</h6>
                      <p>Etado: 9 de 10 casi nuevo</p>
                      <p>Este libro lo compré en junio del 2018 pero no lo he usado casi nunca, está guardado intacto.</p>
                      <h4>s/. 37</h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Ver más</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
                        </div>
                        <small className="text-muted"> 9 de 10 </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img className="img-fluid rounded card-img-top"  src="/img/catalogo/user023_pub23.jpg" height="225" alt="Dibujo de Ingeniería - P. Kaster" />
                    <div className="card-body">
                      <h6 className="card-text">Dibujo de Ingeniería</h6>
                      <p>Etado: 9 de 10 casi nuevo</p>
                      <p>Este libro lo compré en junio del 2018 pero no lo he usado casi nunca, está guardado intacto.</p>
                      <h4>s/. 37</h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Ver más</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
                        </div>
                        <small className="text-muted"> 9 de 10 </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img className="img-fluid rounded card-img-top" src="/img/catalogo/user023_pub24.jpg" height="225" alt="Dibujo de Ingeniería - P. Kaster" />
                    <div className="card-body">
                      <h6 className="card-text">Dibujo de Ingeniería</h6>
                      <p>Etado: 9 de 10 casi nuevo</p>
                      <p>Este libro lo compré en junio del 2018 pero no lo he usado casi nunca, está guardado intacto.</p>
                      <h4>s/. 37</h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Ver más</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
                        </div>
                        <small className="text-muted"> 9 de 10 </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img className="img-fluid rounded card-img-top"  src="/img/catalogo/user023_pub25.jpg" height="225" alt="Dibujo de Ingeniería - P. Kaster" />
                    <div className="card-body">
                      <h6 className="card-text">Dibujo de Ingeniería</h6>
                      <p>Etado: 9 de 10 casi nuevo</p>
                      <p>Este libro lo compré en junio del 2018 pero no lo he usado casi nunca, está guardado intacto.</p>
                      <h4>s/. 37</h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Ver más</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
                        </div>
                        <small className="text-muted"> 9 de 10 </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img className="img-fluid rounded card-img-top" src="/img/catalogo/user023_pub26.jpg" height="225" alt="Dibujo de Ingeniería - P. Kaster" />
                    <div className="card-body">
                      <h6 className="card-text">Dibujo de Ingeniería</h6>
                      <p>Etado: 9 de 10 casi nuevo</p>
                      <p>Este libro lo compré en junio del 2018 pero no lo he usado casi nunca, está guardado intacto.</p>
                      <h4>s/. 37</h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Ver más</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
                        </div>
                        <small className="text-muted"> 9 de 10 </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img className="img-fluid rounded card-img-top" src="/img/catalogo/user023_pub27.jpg" alt="Dibujo de Ingeniería - P. Kaster" />
                    <div className="card-body">
                      <h6 className="card-text">Dibujo de Ingeniería</h6>
                      <p>Etado: 9 de 10 casi nuevo</p>
                      <p>Este libro lo compré en junio del 2018 pero no lo he usado casi nunca, está guardado intacto.</p>
                      <h4>s/. 37</h4>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Ver más</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
                        </div>
                        <small className="text-muted"> 9 de 10 </small>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
        </section>

        {/*Sección Quieres solicitar algun libro?*/}
        <hr className="m-0"></hr>
        <section className="my-5">
          <h3>¿Deseas comprar algun libro específico?... ¡solicítalo!</h3>
          <h4 className="mb-3">Datos del libro</h4>
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto order-md-1">                
                <form className="needs-validation" noValidate="">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="bookNameSoli">Título del libro</label>
                      <input type="text" className="form-control" id="bookNameSoli" placeholder="Doña Bárbara"  required=""/>
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="autorSoli">Autor</label>
                      <input type="text" className="form-control" id="autorSoli" placeholder="Romulo Gallegos" required=""/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="dateSoli">Fecha aproximada de compra</label>
                      <input type="text" className="form-control" id="dateSoli" placeholder="abril 2018"/>
                      <div className="invalid-feedback">
                        Ingrese un número válido
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="univSoli">Universidad del solicitante</label>
                      <input type="text" className="form-control" id="univSoli" placeholder="Cayetano" required=""/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                  </div>
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Solicitar</button>
                </form>
              </div>
            </div>

              </div>
        </section>

        {/*Sección Inicia Sesión*/}
        <hr className="m-0"></hr>
        <section className="my-5">
          <div className="container">
            <h3>Inicia Sesión</h3>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <form>
                  <div className="mx-auto text-center">
                    <img className="mb-4" src="/img/LOGO.jpg" alt="" width="72" height="72"/>
                  </div>

                  <div className="form-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email" required="" autoFocus=""/>
                    <label htmlFor="inputEmail">Dirección de correo electrónico</label>
                  </div>

                  <div className="form-group">
                    <input type="password" id="inputPasswordreg" className="form-control" placeholder="Password" required=""/>
                    <label htmlFor="inputPasswordreg">Contraseña</label>
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Recuerdame</label>
                  </div>
                  <button className="btn btn-lg btn-success btn-block" type="submit">Registrarse</button>
                </form>
              </div>
            </div>
            
          </div>

        </section>

        {/*Sección Registrate*/}
        <hr className="m-0"></hr>
        <section className="my-5">
          <div className="container">
            <h3>Registrate</h3>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <form>
                  <div className="mx-auto text-center">
                    <img className="mb-4" src="/img/LOGO.jpg" alt="" width="72" height="72"/>
                  </div>

                  <div className="form-group">
                    <input type="email"  className="form-control" placeholder="Email" required="" autoFocus=""/>
                    <label htmlFor="inputEmail">Dirección de correo electrónico</label>
                  </div>

                  <div className="form-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
                    <label htmlFor="inputPassword">Contraseña</label>
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
                    <label className="form-check-label" htmlFor="exampleCheck2">Recuerdame</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block" type="submit">Registrarse</button>
                </form>
              </div>
            </div>
            
          </div>

        </section>

        {/*Sección Nosotros*/}
        <section className="my-5">
          <div className="container">
            <h3>Nosotros</h3>
            <div className="media row">
              <div className="col-md-3">
                <img src="./img/favicon/apple-icon-120x120.png" className="align-self-center mr-3" alt="..."/>
              </div>
              
              <div className=" col-md-9 media-body text-justify">
                <p>Somos Demipati, un emprendidmiento comprometido con la economía circular promoviendo de tal modo iniciativas que favorezcan el reuso de materiales. La economía circular es una estrategia que tiene por objetivo reducir tanto la entrada de los materiales vírgenes como la producción de desechos, cerrando los «bucles» o flujos económicos y ecológicos de los recursos.</p>
                <p className="my-0">La economía circular es una estrategia que tiene por objetivo reducir tanto la entrada de los materiales vírgenes como la producción de desechos, cerrando los «bucles» o flujos económicos y ecológicos de los recursos.</p>
              </div>
            </div>
          </div>
        </section>
        <hr ></hr>
        <footer className="bd-footer text-muted bg-dark">
          <div className="container-fluid p-3 p-md-5">
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
