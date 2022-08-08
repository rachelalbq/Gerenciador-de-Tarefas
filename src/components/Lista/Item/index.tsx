import { ITarefas } from '../../../Types/Tarefa';
import style from './item.module.scss';


interface Props extends ITarefas{

    selecionaTarefa: (tarefaSelecionada: ITarefas) => void;

}

export default function Item({tarefa, tempo, selecionado, completado, id,  selecionaTarefa} : Props){
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ""}  ${completado? style.itemCompletado : ""}`} onClick = {() => !completado && selecionaTarefa({tarefa, tempo, selecionado, completado, id})}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label= "tarefa concluida"></span>}
        </li>
    );
};