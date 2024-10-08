import { specializeMenu } from "../../../lib/constants";
import ListItem from "./ListItem";

interface ListProps {
  setHoveredImage: (url: string) => void; // Prop for setting hovered image
}

const List: React.FC<ListProps> = ({ setHoveredImage }) => {
  return (
    <ul className="lg:px-12  flex flex-col lg:gap-12 md:gap-10 sm:gap-6 gap-5">
      {specializeMenu.map((m, index) => (
        <ListItem
          key={index}
          service={m.service}
          imageUrl={m.imageUrl}
          path={m.path}
          setHoveredImage={setHoveredImage}
        />
      ))}
    </ul>
  );
};

export default List;
