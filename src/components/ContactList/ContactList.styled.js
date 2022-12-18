import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;

  padding-left: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[4]};
  display: grid;
`;

export const ListItem = styled.li`
  display: flex;
  row-gap: ${p => p.theme.space[3]};
  flex-wrap: wrap;

  padding-top: ${p => p.theme.space[4]};
  padding-bottom: ${p => p.theme.space[4]};

  border-bottom: 1px solid;
  border-color: ${p => p.theme.colors.gray[50]};

  :last-child {
    border-bottom: none;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  row-gap: ${p => p.theme.space[3]};
  flex-wrap: wrap;
  flex-basis: 80%;
  align-items: center;
  line-height: 1;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${p => p.theme.space[3]};
  flex-basis: 100%;
  font-size: ${p => p.theme.fontSizes.lg};
  margin-right: ${p => p.theme.space[4]};

  @media screen and (min-width: 480px) {
    flex-basis: 50%;
    font-size: ${p => p.theme.fontSizes.md};
  }
`;

export const Number = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${p => p.theme.space[3]};
  /* flex-basis: 50%; */
  font-size: ${p => p.theme.fontSizes.lg};
  margin-right: ${p => p.theme.space[4]};

  @media screen and (min-width: 480px) {
    font-size: ${p => p.theme.fontSizes.md};
  }
`;

export const ContactFormWrapper = styled.form`
  display: flex;
  align-items: center;
  line-height: 1;
`;

export const ToolsWrapper = styled.div`
  display: flex;
  column-gap: ${p => p.theme.space[3]};
  flex-wrap: wrap;
  align-items: center;
  line-height: 1;

  @media screen and (min-width: 480px) {
    column-gap: ${p => p.theme.space[2]};
  }
`;
