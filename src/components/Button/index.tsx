import React from 'react';
import Container, { StyledBtn, StyledText } from './styles';
import IButtonProps from './types';

const Button: React.FC<IButtonProps> = (props: IButtonProps): JSX.Element => {
    const { title, onPress } = props;
    return (
        <Container>
            <StyledBtn onPress={onPress}>
                <StyledText>
                    {title}
                </StyledText>
            </StyledBtn>
        </Container>
    )
}

export default Button;