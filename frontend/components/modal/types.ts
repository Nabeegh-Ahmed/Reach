import React, { Dispatch } from "react";

export interface ModalProps {
    id: string,
    isOpen: boolean,
    setIsOpen: Dispatch<boolean>,
    header: string,
    body: React.ReactNode,
    footer: React.ReactNode
}
