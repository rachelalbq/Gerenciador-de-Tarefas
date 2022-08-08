import React, { useState } from "react";
import { ITarefas } from "../../Types/Tarefa";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

export default function Formulario({setTarefas} : {setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>}) {

    const [tarefa, novaTarefa ]= useState({
        tarefa: '',
        tempo: '00:00'
    })

    function adicionarTarefa(evento: React.FormEvent){
        evento.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, {...tarefa, completado: false, selecionado: false, id: uuidv4()}])
        novaTarefa({
            tarefa:'',
            tempo: '00:00'
    })

    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>

                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input 
                type="text" 
                name="tarefa"
                id="tarefa"
                value={tarefa.tarefa}
                onChange={evento=> novaTarefa({...tarefa, tarefa: evento.target.value})}
                placeholder="O que você quer estudar?"  
                required
                />

            </div>
            
            <div className={style.inputContainer}>

            <label htmlFor="tempo">Tempo</label>
            <input
             type="time" 
             name="tempo"
             id="tempo"
             value ={tarefa.tempo}
             onChange={evento=> novaTarefa({...tarefa, tempo: evento.target.value})}
             step="1"
             min="00:00:00"
             max="01:30:00"
             required
             /> 

            </div>

            <Botao texto="Adicionar"/>

        </form>
    );
};