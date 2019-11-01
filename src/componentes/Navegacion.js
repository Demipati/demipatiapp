import React, {Component} from 'react'; //Mayuscula minuscula

class Navegacion extends Component{
    render(){
        return(

            <div className="Navegacion">
                <nav className="navbar navbar-expand-lg  navbar-light bg-light">

                    <a className="navbar-brand mr-0" href="/">
                        <img src="./img/favicon/apple-icon.png" width="50" height="50" alt=""/>
                        Demipati
                    </a>
                    
                    <button className="navbar-toggler mx-0 p-1" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active px-md-2">
                                <a className="nav-link" href="/">Home {this.props.nombre} <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item px-md-2">
                                <a className="nav-link" href="/">Nosotros</a>
                            </li>
                            <li className="nav-item px-md-2">
                                <a className="nav-link" href="/">Pedidos</a>
                            </li>
                            <li className="nav-item dropdown px-md-2">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Catálogo
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <a className="dropdown-item" href="/">Something else here</a>
                                </div>
                            </li>
                        </ul>
                        
                    </div>

                    <div className="mx-1">
                        <button className="btn btn-info my-sm-0 px-md-4" type="submit">SignIn</button>
                    </div>
                   <div className="mx-1">
                        <button className="btn btn-warning my-sm-0 px-md-4" type="submit">SignUp</button>
                   </div>
                </nav>
            </div>
            
            );
    }
}

export default Navegacion;