import Draggable from "react-draggable"
import '../styles/missionDetailsWindow.css'

export const MissionDetailsWindow = () => {

  return (
    <Draggable
    defaultPosition={{x:320, y:-462}}
    >
      <div className="mission-details-window-container">
        <header>
          <p>detalhes-da-missão.txt</p>
        </header>
        <article>
          <p>
            O mundo está à beira de um desastre sem precedentes. Um grupo terrorista conseguiu acesso a mísseis nucleares localizados em diferentes partes do planeta. O relógio do Juízo Final está em contagem regressiva, e a destruição global é iminente.
          </p>

          <p>
            Você é nossa última esperança. Você está agora no coração de um bunker de alta segurança, onde se encontra o supercomputador capaz de desativar esses mísseis. Sua missão é simples, mas mortalmente urgente: digitar os códigos de desativação corretos o mais rápido possível para salvar o mundo.
          </p>
          <p>
            Aqui está o que você precisa saber:
          </p>
          <ul>
            <li>
              Erro Fatal: Inserir um código incorreto resultará em um travamento de segurança do sistema. Impedindo qualquer nova tentativa e ocasionando na falha da missão
            </li>
            <li>
              Tempo é Essencial: O destino da humanidade está nas suas mãos, e cada segundo conta. Você tem um tempo limitado para inserir todos os códigos antes que os mísseis sejam lançados.
            </li>
          </ul>
          
        </article>
      </div>
    </Draggable>
  )
}


