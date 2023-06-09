import './index.scss'

import React, {useState} from 'react'

export default function Body() {
    const tarefa1 = 'Limpar a casa'
    const tarefa2 = 'Responder e-mails'

    const [tarefa, setTarefa] = useState("");

    const [EstiloModalExcluir, setEstiloModalExcluir] = useState("modal_excluir");
    const [EstiloModalEditar, setEstiloModalEditar] = useState("modal_editar");
    const [EstiloModalCriar, setEstiloModalCriar] = useState("modal_criar");

    return (
        <>
            <div className="body">
        <div className="titulo">
        <h1>
        Otimize seu tempo e se organize com o nosso Planejador Diário.
        </h1>
        </div>
        <div className={EstiloModalExcluir} id='#modal_excluir'>
            <h2 className="titulo_excluir">Deseja excluir esse item?</h2>
            <h3 className="subtitulo_excluir">{tarefa}</h3>
            <div className='area_botoes'>
                <button className="botao_nao" onClick={() => {
                    setEstiloModalExcluir('modal_excluir')
                }}>Não</button>
                <button className="botao_sim" onClick={() => {
                    setEstiloModalExcluir('modal_excluir')
                }}>Sim</button>
        </div>


        </div>
        <div className={EstiloModalEditar} id='#modal_editar'>
            <h2 className="titulo_editar">Deseja editar esse item?</h2>
            <h3 className="subtitulo_editar">{tarefa}</h3>
            <div className='area_botoes'>
                <button className="botao_nao" onClick={() => {
                    setEstiloModalEditar('modal_editar')
                }}>Não</button>
                <button className="botao_sim" onClick={() => {
                    setEstiloModalEditar('modal_editar')
                }}>Sim</button>
            </div>
        </div>
        <div className={EstiloModalCriar} id='#modal_criar'>
            <h2 className="titulo_criar">Deseja criar uma nova tarefa?</h2>
            <div className='area_botoes'>
                <button className="botao_nao" onClick={() => {
                    setEstiloModalCriar('modal_criar')
                }}>Não</button>
                <button className="botao_sim" onClick={() => {
                    setEstiloModalCriar('modal_criar')
                }}>Sim</button>
            </div>
        </div>
        <div className="tabela">
        <tbody>
            <tr>
                <td>Tarefa</td>
                
                <td>Status</td>
                <td>Opcoes</td>
            </tr>
            <hr/>
            <tr>
                <td>{tarefa1}</td>
                <td><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16H2V2H12V0H2C0.89 0 0 0.89 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V8H16M4.91 7.08L3.5 8.5L8 13L18 3L16.59 1.58L8 10.17L4.91 7.08Z" fill="white"/>
                    </svg>
                </td>
                <td>
                <div onClick={ () => {
                    setEstiloModalEditar('modal_editar_visivel')
                    setTarefa(tarefa1)
                }}>
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.1458 8.15625L17.9479 2.90625L19.9896 1.15625C20.5486 0.677083 21.2355 0.4375 22.0502 0.4375C22.8649 0.4375 23.5513 0.677083 24.1094 1.15625L26.151 2.90625C26.7101 3.38542 27.0017 3.96375 27.026 4.64125C27.0503 5.31875 26.783 5.89667 26.224 6.375L24.1458 8.15625ZM22.0312 10L6.57292 23.25H0.375V17.9375L15.8333 4.6875L22.0312 10Z" fill="white"/>
                </svg>
                </div >
                <div onClick={ () => {
                    setEstiloModalExcluir('modal_excluir_visivel')
                }}>
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.74999 20.75C1.74999 22.125 3.06249 23.25 4.66666 23.25H16.3333C17.9375 23.25 19.25 22.125 19.25 20.75V8.25C19.25 6.875 17.9375 5.75 16.3333 5.75H4.66666C3.06249 5.75 1.74999 6.875 1.74999 8.25V20.75ZM19.25 2H15.6042L14.5687 1.1125C14.3062 0.8875 13.9271 0.75 13.5479 0.75H7.45207C7.07291 0.75 6.69374 0.8875 6.43124 1.1125L5.39582 2H1.74999C0.947906 2 0.291656 2.5625 0.291656 3.25C0.291656 3.9375 0.947906 4.5 1.74999 4.5H19.25C20.0521 4.5 20.7083 3.9375 20.7083 3.25C20.7083 2.5625 20.0521 2 19.25 2Z" fill="#ff2c09"/>
                </svg>
                </div>
                </td>
            </tr>
            <tr>
            <td>{tarefa2}</td>
            <td><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16H2V2H12V0H2C0.89 0 0 0.89 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V8H16M4.91 7.08L3.5 8.5L8 13L18 3L16.59 1.58L8 10.17L4.91 7.08Z" fill="white"/>
                </svg>
            </td>
            <td>
            <div onClick={ () => {
                    setEstiloModalEditar('modal_editar_visivel')
                    setTarefa(tarefa2)
                }}>
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.1458 8.15625L17.9479 2.90625L19.9896 1.15625C20.5486 0.677083 21.2355 0.4375 22.0502 0.4375C22.8649 0.4375 23.5513 0.677083 24.1094 1.15625L26.151 2.90625C26.7101 3.38542 27.0017 3.96375 27.026 4.64125C27.0503 5.31875 26.783 5.89667 26.224 6.375L24.1458 8.15625ZM22.0312 10L6.57292 23.25H0.375V17.9375L15.8333 4.6875L22.0312 10Z" fill="white"/>
                </svg>
                </div>
                <div onClick={ () => {
                    setEstiloModalExcluir('modal_excluir_visivel')
                }}>
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.74999 20.75C1.74999 22.125 3.06249 23.25 4.66666 23.25H16.3333C17.9375 23.25 19.25 22.125 19.25 20.75V8.25C19.25 6.875 17.9375 5.75 16.3333 5.75H4.66666C3.06249 5.75 1.74999 6.875 1.74999 8.25V20.75ZM19.25 2H15.6042L14.5687 1.1125C14.3062 0.8875 13.9271 0.75 13.5479 0.75H7.45207C7.07291 0.75 6.69374 0.8875 6.43124 1.1125L5.39582 2H1.74999C0.947906 2 0.291656 2.5625 0.291656 3.25C0.291656 3.9375 0.947906 4.5 1.74999 4.5H19.25C20.0521 4.5 20.7083 3.9375 20.7083 3.25C20.7083 2.5625 20.0521 2 19.25 2Z" fill="#ff2c09"/>
                </svg>
                </div>
            </td>
                
            </tr>
            <tr>
            <td className='nova_tarefa'>Nova tarefa...</td>
            <td onClick={ () => {
                setEstiloModalCriar('modal_criar_visivel')
            }}><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2688 5.446V7.574H7.55681V12.704H5.16281V7.574H0.450813V5.446H5.16281V0.316H7.55681V5.446H12.2688Z" fill="white"/>
                </svg>
            </td>
                
            </tr>
        </tbody>
        </div>
        
    
        </div>
        </>

    
    )
}
