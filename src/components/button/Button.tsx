import React from 'react';
import styled, { StyledProps } from 'styled-components';

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;

    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

type StyledButtonProps = StyledProps<{
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;

    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * Optional click handler
     */
    onClick?: () => void;
}>;

const StyledButton = styled.button<StyledButtonProps>`
    display: inline-block;
    color: ${({ primary, theme }: StyledButtonProps) => {
        return primary ? theme.primaryColor : theme.secondaryColor;
    }};
    font-size: ${({ size }: StyledButtonProps) => {
        switch (size) {
            case 'small':
                return '.6rem';
            case 'large':
                return '2.5rem';
            default:
                return '1rem';
        }
    }};
    background: none;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid
        ${({ primary, theme }: StyledButtonProps) => (primary ? theme.primaryColor : theme.secondaryColor)};
    border-radius: 3px;
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }: ButtonProps) => {
    return (
        <StyledButton type="button" {...props}>
            {label}
        </StyledButton>
    );
};
