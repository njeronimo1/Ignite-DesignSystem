import { ComponentProps, ElementType } from "react";
import { styled } from "../../styles";
import { ToastClose, ToastDescription, ToastRoot, ToastTitle, ToastViewport } from "./styles";
import * as Toast from '@radix-ui/react-toast';
import { X } from 'phosphor-react';

export interface ToastProps{
    open: boolean,
    onOpenChange?: () => void,
    children: JSX.Element,
    content: string
}

export function ToastComponent({open, onOpenChange, children, content} : ToastProps){
    return(
        <Toast.Provider swipeDirection="right">
            <ToastRoot open={open} onOpenChange={onOpenChange} duration={2000}>
                <ToastTitle color="white">
                        Agendamento realizado
                </ ToastTitle>
                <ToastDescription>
                    {content}
                </ ToastDescription>
                <Toast.Action altText=""/>
                <ToastClose onClick={onOpenChange}>
                    <X size={20}/>
                </ToastClose>
            </ToastRoot>

            <ToastViewport />
        </Toast.Provider>
    )
}

ToastComponent.displayName = "Toast"