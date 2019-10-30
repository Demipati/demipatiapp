import React, {Component} from 'react'; //Mayuscula minuscula
import {tareas} from '../tareas.json';
import FormTareas from './FormTareas.js';

class Tareas extends Component{
    // Para almacenarlo temporalmente en memoria
    constructor(){
        super(); //para heredar toda la funcionalidad de react
        this.state = {

            //tareas : tareas
            tareas
        }
    }
    render(){
        const tar = this.state.tareas.map((tarea,i)=>{
            return (
                //COnstruyamos las cartas 
                <div className="col-md-4">
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{tarea.titulo}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {tarea.prioridad}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{tarea.descripcion}</p>
                            <h4>{tarea.responsable}</h4>
                        </div>
                    </div>
                </div>
            )
        })
        //console.log(this.state.tareas)
        return(

            <div className="Tarea">
                <nav className="navbar navbar-dark bg-dark">
                    <a href="#" className="text-white">
                        Tareas
                        <span className="badge badge-pill badge-light ml-2">
                            {this.state.tareas.length}
                        </span>
                    </a>    
                </nav>
                <div className="container">
                    <div className="row">
                        <FormTareas/>
                        {tar}
                    </div>
                </div>
            </div>
            );
    }
}

export default Tareas;