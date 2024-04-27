import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";
export function FiveStarRating({ rating }) {
  //declare star array
  const starList = [];
  //store no. of filled stars
  const starFillCount = Math.floor(rating);
  //store if yes or no there is a half star
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  //store number of empty stars
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);
  //push the filled star icons
  for (let i = 0; i < starFillCount; i++) {
    starList.push(<StarFill key={"star-fill"+i}/>);
  }
  //push on half star if necessary
  if(hasHalfStar){
    starList.push(<StarHalf key={"star-half"}/>);
  }
  //push empty star icons
  for (let i = 0; i < emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty"+i}/>);
  }

  //render the star icon array
  return (
    <div>
      {starList}
    </div>
  );
}
