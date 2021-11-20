import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../context/TransactionsContext';
import { api } from '../../services/api';

import closeImg from '../../assets/images/close.svg';
import incomeImg from '../../assets/images/income.svg';
import outcomeImg from '../../assets/images/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTansaction } = useContext(TransactionsContext);

    const [inputs, setInputs] = useState({
        title: '',
        amount: 0,
        type: 'income',
        category: '',
    });

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        createTansaction({
            title: inputs.title,
            amount: inputs.amount,
            type: inputs.type,
            category: inputs.category,
        })
    }

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
          <Container onSubmit={handleCreateNewTransaction} >
            <h2>Casdastrar</h2>
            
            <input 
                placeholder="Título"
                value={inputs.title}
                onChange={event => setInputs({ ...inputs, title: event.target.value })}
            />

            <input
                type="number"
                placeholder="Valor"
                value={inputs.amount}
                onChange={event => setInputs({ ...inputs, amount: Number(event.target.value) })}
            />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setInputs({ ...inputs, type: 'deposit' }) }}
            isActive={inputs.type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setInputs({...inputs, type: 'withdraw'}) }}
            isActive={inputs.type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

            <input
                placeholder="Categoria"
                value={inputs.category}
                onChange={event => setInputs({ ...inputs, category: event.target.value })}
            />

            <button type="submit">
                Cadastrar
            </button>

          </Container>
      </Modal>
    );
}
