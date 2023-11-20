import { styled } from "../../styles";
import * as Toast from '@radix-ui/react-toast';

export const ToastRoot = styled(Toast.Root, {
    backgroundColor: '$gray800',
    borderRadius: '6px',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
})

export const ToastViewport = styled(Toast.Viewport, {
    '--viewport-padding': '25px',
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: 'var(--viewport-padding)',
    gap: '10px',
    width: '390px',
    maxWidth: '100vw',
    margin: 0,
    listStyle: 'none',
    zIndex: 2147483647,
    outline: 'none',
})

export const ToastTitle = styled(Toast.Title, {
    marginBottom: '5px',
    fontWeight: 500,
    color: 'white',
    fontSize: '$lg',
    fontFamily: '$default'
})

export const ToastDescription = styled(Toast.Description, {
    margin: 0,
    color: '$gray100',
    fontSize: '$sm',
    lineHeight: '$tall',
    fontFamily: '$default'
})

export const ToastClose = styled(Toast.Close, {
    position: 'absolute',
    top: '0.75rem',
    right: '0.75rem',
    background: 'transparent',
    color: '$gray100',
    border: "none",
    cursor: "pointer",
    transition: '0.2s all',

    '&:hover': {
        filter: 'brightness(0.8)'
    }
})
