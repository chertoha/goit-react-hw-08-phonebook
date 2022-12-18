import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${p => p.theme.space[2]} ${p => p.theme.space[2]};
  cursor: pointer;

  font-size: ${p => p.theme.fontSizes[p.size]};

  background-color: transparent;
  border: none;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};

  transition: ${p => p.theme.transitions.default};
  :hover {
    background-color: ${p => p.theme.colors.secondaryBgd};
  }

  :disabled {
    color: #e6ebf2;
    border-color: #e6ebf2;
  }
`;
