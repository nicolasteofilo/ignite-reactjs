import Modal from 'react-modal';
import closeImg from '../../assets/images/close.svg';
import incomeImg from '../../assets/images/income.svg';
import outcomeImg from '../../assets/images/outcome.svg';

import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
      <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
      >
          <button type="button"  onClick={onRequestClose} className="react-modal-close">
            <img src={closeImg} alt="Fechar Modal" />
          </button>
          <Container>
            <h2>Casdastrar</h2>
            
            <input 
                placeholder="Título"
            />

            <input
                type="number"
                placeholder="Valor"
            />

            <TransactionTypeContainer>
                <button
                    type="button"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </button>
                <button
                    type="button"
                >
                    <img src={outcomeImg} alt="Entrada" />
                    <span>Saída</span>
                </button>
            </TransactionTypeContainer>

            <input
                placeholder="Categoria"
            />

            <button type="submit">
                Cadastrar
            </button>

          </Container>
      </Modal>
    );
}
