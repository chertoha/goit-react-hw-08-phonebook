import styled from 'styled-components';

export const Field = styled.input`
  display: block;

  padding: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[3]};
  margin-bottom: ${p => p.theme.space[4]};
  margin-left: auto;
  margin-right: auto;

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};

  width: 100%;
  max-width: 320px;
`;
