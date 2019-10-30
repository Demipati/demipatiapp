import React, {Component} from 'react'; //Mayuscula minuscula

class Navegacion extends Component{
    render(){
        return(

            <div className="Navegacion">
                <nav className="navbar navbar-expand-lg  navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src="./img/favicon/apple-icon.png" width="50" height="50" alt=""/>
                        Demipati
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active px-md-2">
                                <a className="nav-link" href="#">Home {this.props.nombre} <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item px-md-2">
                                <a className="nav-link" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item px-md-2">
                                <a className="nav-link" href="#">Pedidos</a>
                            </li>
                            <li className="nav-item dropdown px-md-2">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Catálogo
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            
                            {/*<li className="nav-item px-md-2">
                                <form className="form-inline">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar libro" aria-label="Search"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                                </form>
                                </li>*/}

                        </ul>
                        
                    </div>

                    <div className="mr-md-2">
                        <button className="btn btn-info my-2 my-sm-0" type="submit">Iniciar Sesión</button>
                    </div>
                   <div className="mr-md-2">
                        <button className="btn btn-warning my-2 my-sm-0" type="submit">Registrarse</button>
                   </div>
                </nav>
            </div>
            
            );
    }
}

export default Navegacion;