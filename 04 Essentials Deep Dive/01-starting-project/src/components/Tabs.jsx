export default function Tabs({children, buttons, ButtonContainer="menu"}) {
    // const ButtonType = buttonContainer;
    return <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>
}