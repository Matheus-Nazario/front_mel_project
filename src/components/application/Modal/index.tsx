import { ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onDismiss: () => void;
  children: ReactNode;
}

export function Modal({ onDismiss, children, open }: ModalProps) {
  return (
    <div
      className={`fixed modal-overlay ${
        open ? 'flex' : 'hidden'
      } items-center h-screen justify-center left-0 w-full bottom-0 z-20 bg-black/80`}
      onClick={onDismiss}
    >
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <a href="#" onClick={onDismiss}>
              <div className="modal-content w-8 h-8">
                <button>
                  <div className="modal-content w-8 h-8 -mt-2">
                    <img src="icons/close.svg" alt="Imagem do modal" />
                  </div>
                </button>
              </div>
            </a>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
