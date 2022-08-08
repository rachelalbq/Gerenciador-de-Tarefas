import style from './Botao.module.scss';

interface Props {
    texto: string, 
    onClick?: () => void
}
export default function Botao({texto, onClick} : Props){
    return(
        <button className={style.botao} onClick={onClick}>
            {texto}
            
        </button>
    );
};