import { styled } from "@mui/material"
import { ReactNode } from "react"

// Definindo o tipo do Children --> Typescript | Utilizando o ReactNode p/ dizer que o children aceita qualquer tipo de conteúdo renderizável
interface StyledButtonProps {
    children: ReactNode
}

// Componente de botão estilizável | Tudo que estiver dentro do StyledButtonProps, será a tipagem do children.
const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

    // Estilizando o botão
    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display:"inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    }))

    // JSX
    return (
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton