import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CreateCategoryLink = styled(Link)`
  text-decoration: none;
  margin-left: 5px;

  transition: color 0.3s;
  &:hover {
    color: var(--primary);
  }
`;
