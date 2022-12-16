import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { DirectoryCategory } from '../directory/directory.component';

import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';

type DirectoryItemProps = {
  category: DirectoryCategory;
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
    const { title, imageUrl, route } = category;
    const navigate = useNavigate();

    const navigationHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={navigationHandler}>
          <BackgroundImage imageUrl= {imageUrl} />
          <Body>
            <h2>{title}</h2>
            <p>Show Now</p>
          </Body>
        </DirectoryItemContainer>
      );
}

export default DirectoryItem; 