export const Post = ({ title, text, img, marked, id, changeMarked}) => {
  return (
    <div style={{ background: marked ? "pink" : "" }}>
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={img} alt={title} />
      <button onClick={() => changeMarked(id)}>Change</button>
    </div>
  );
};

// export const Post = ({title, text, img, marked}) => {
//   return (
//       <div style={{ background: marked ? 'pink' : '' }}>
//       <h1>{title}</h1>
//       <p>{text}</p>
//       <img src={img} alt={title} />
//     </div>
//   );
// };

// export const Post = (props) => {
//     const {title, description} = props;
//     return <div>
//         <h1>{title}</h1>
//         <p>{description}</p>
//         <img src={props.image} alt="" />
//     </div>
// }

// export const Post2 = ({ title, description, image }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//       <img src={image} alt={title} />
//     </div>
//   );
// };
