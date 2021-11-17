import React, { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    function handleOpenNewTransactionsModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionsModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionsModal} />
            <Dashboard />

            <Modal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionsModal}
            >
                <h2>Casdastrar</h2>
            </Modal>
            <GlobalStyle />
        </>
    );
}
