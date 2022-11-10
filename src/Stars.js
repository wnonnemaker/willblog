import EmptyStar from "./assets/empty-star.svg";
import FilledStar from "./assets/filled-star.svg";

const showStars = () => {
    const totalStars = 5;
    const activeStars = 3;
  
    return (
      <Box>
        {[...new Array(totalStars)].map((arr, index) => {
          return index < activeStars ? <FilledStar /> : <EmptyStar />;
        })}
      </Box>
    );
  };
  
  export default showStars;