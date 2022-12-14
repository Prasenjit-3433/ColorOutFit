import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
}

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?cs=srgb&dl=pexels-pixabay-35185.jpg&fm=jpg&w=640&h=427",
    route: 'shop/hats'
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?cs=srgb&dl=pexels-mart-production-7679725.jpg&fm=jpg&h=320&w=480&fit=crop",
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg&h=320&w=480&fit=crop",
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?cs=srgb&dl=pexels-moose-photos-1036622.jpg&fm=jpg&h=490&w=800&fit=crop",
    route: 'shop/womens'
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?cs=srgb&dl=pexels-helena-lopes-1049317.jpg&fm=jpg&h=593&w=800&fit=crop",
    route: 'shop/mens'
  }
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem category={category} key={category.id} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
