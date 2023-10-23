import { X } from 'phosphor-react';

interface ModalCardBodyTech {
  isToggleModal: boolean;
  onToggleModal: () => void;
}

export function ModalCardEspn({
  isToggleModal,
  onToggleModal,
}: ModalCardBodyTech) {
  return (
    <div
      className={`${
        isToggleModal ? 'opacity-100 visible' : 'opacity-0 invisible'
      } flex items-center justify-center fixed left-0 top-0 transition-all w-full h-screen z-20 bg-gray-800/40 backdrop-blur-sm p-10`}
    >
      <div className="bg-gray-600 text-left border-4 backdrop-blur-sm  border-gray-500 rounded-md relative w-full max-w-6xl h-full flex flex-col">
        <button
          className="absolute right-2 top-2 bg-brand-500 z-50 p-2 rounded-full text-white hover:brightness-90 transition-all"
          type="button"
          onClick={onToggleModal}
        >
          <X size={20} />
        </button>
        <div className="relative border-b-4 border-brand-500">
          <img
            className="w-full max-h-56"
            src="backgrounds/espmModal.png"
            alt="Imagem BtBodyTech"
          />
          <div className="overlay absolute inset-0 bg-gradient-to-t from-gray-800/70 to-transparent" />
        </div>

        <div className="flex items-center justify-evenly -translate-y-9">
          <div className="bg-white rounded-full">
            <img
              src="icons/question.svg"
              alt="Imagem do question"
              className="w-12 h-12"
            />
          </div>

          <div className="bg-white border-4 p-2 border-brand-500 rounded-full">
            <img
              src="icons/hand.svg"
              alt="Imagem do question"
              className="w-10 h-10"
            />
          </div>

          <div className="bg-white rounded-full">
            <img
              src="icons/lampada.png"
              alt="Imagem do question"
              className="w-12 h-12 "
            />
          </div>
        </div>

        <div className="overflow-y-auto  flex-1 -mt-3 flex flex-col lg:flex-row items-start gap-6  text-white p-5">
          <div className="flex-1">
            <h1 className="text-gray-300 text-sm">1 - Briefing desafio</h1>
            <p className="font-light text-gray-400 text-base flex-row">
              A empresa sempre apostou muito na transformação digital, e já
              estava com a sua jornada digital no ar, disponível para seus
              clientes e futuros clientes, facilitando a interação através do
              WhatsApp, porém a jornada inicial tinha uma quebra, onde em
              determinados pontos o usuário era direcionado para o site da
              empresa para obter mais informações e tomar a decisão de compra.
            </p>
          </div>

          <div className="flex-1">
            <h1 className="text-gray-300 text-sm">2 - Briefing solução</h1>
            <p className="font-light text-gray-400 text-base flex-row">
              Em parceria com a equipe da Body Tech, apresentamos as
              possibilidades de aplicação de inteligência artificial no fluxo de
              atendimento pelo WhatsApp. As equipes ficaram entusiasmadas e
              começamos um trabalho conjunto para mapear a persona que seria a
              base da assistente virtual da rede de academias.
            </p>
          </div>

          <div className="flex-1">
            <h1 className="text-gray-300 text-sm">3 - Resultados/Números</h1>
            <p className="font-light text-gray-400 text-base flex-row">
              Desde os primeiros meses, a equipe da Bodytech notou um aumento
              significativo nas conversões de vendas e retenção do canal, graças
              à eficácia do atendimento prestado pela Thais, o que resultou em
              uma diminuição dos atendimentos humanizados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
