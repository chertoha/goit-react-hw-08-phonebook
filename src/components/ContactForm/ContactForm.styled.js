import styled from 'styled-components';

export const FormBlock = styled.form`
  margin-top: ${p => p.theme.space[4]};
  margin-bottom: ${p => p.theme.space[5]};
  padding: ${p => p.theme.space[5]};

  /* width: 300px; */

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid ${p => p.theme.colors.gray[300]};
  border-radius: ${p => p.theme.radii.borderRadius};

  @media screen and (min-width: 480px) {
    padding-right: ${p => p.theme.space[7]};
    padding-left: ${p => p.theme.space[7]};
  }
`;

export const FormLabel = styled.label`
  width: 100%;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.lg};
  margin-bottom: ${p => p.theme.space[3]};
`;

export const FormInput = styled.input`
  /* width: 200px; */
  width: 100%;
  padding: ${p => p.theme.space[2]};
  margin-bottom: ${p => p.theme.space[5]};

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};

  :last-of-type {
    margin-bottom: ${p => p.theme.space[5]};
  }
`;
