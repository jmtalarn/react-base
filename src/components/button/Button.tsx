import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: inline-block;
    color: ${({ primary }) => (primary ? 'palevioletred' : 'aliceblue')};
    font-size: ${({ size }) => {
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
    border: 2px solid ${({ primary }) => (primary ? 'palevioletred' : 'aliceblue')};
    border-radius: 3px;
`;
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
