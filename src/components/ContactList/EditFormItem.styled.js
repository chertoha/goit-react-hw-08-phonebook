import styled from 'styled-components';

export const EditForm = styled('form')`
  width: 100%;
  height: 100%;
  padding: ${p => p.theme.space[4]};
  padding-top: ${p => p.theme.space[5]};

  border: 1px solid ${p => p.theme.colors.gray[300]};
  border-radius: ${p => p.theme.radii.borderRadius};
`;

export const FieldWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;

  row-gap: ${p => p.theme.space[4]};
  align-items: center;
`;

export const Label = styled('label')`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.md};
  margin-right: ${p => p.theme.space[4]};

  :last-child {
    margin-right: 0;
  }
`;

export const Field = styled('input')`
  width: 200px;

  padding: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[3]};
  margin-left: ${p => p.theme.space[3]};

  font-size: ${p => p.theme.fontSizes.lg};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};

  @media screen and (min-width: 480px) {
    font-size: ${p => p.theme.fontSizes.md};
  }
`;

export const Tools = styled('div')`
  display: flex;
  column-gap: ${p => p.theme.space[3]};
  margin-top: ${p => p.theme.space[5]};

  @media screen and (min-width: 480px) {
    margin-top: ${p => p.theme.space[4]};
  }
`;
