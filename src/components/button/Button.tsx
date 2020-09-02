import React from 'react';
import styled from 'styled-components';

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

export interface StyledButtonProps {
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
    children?: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

const StyledButton = styled.button<StyledButtonProps>`
    display: inline-block;
    color: ${({ primary }: StyledButtonProps) => (primary ? 'palevioletred' : 'aliceblue')};
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
    border: 2px solid ${({ primary }: StyledButtonProps) => (primary ? 'palevioletred' : 'aliceblue')};
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
