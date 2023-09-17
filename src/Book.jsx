const Book = ({img,title,author,number}) => {

    return (
      <article className='book'>
        <img
        src={img}
        alt={title}
        />;
        <h2>{title}</h2>
        <p>{author}</p>
        <spa className="number">{`# ${number+1}`}</spa>
      </article>
    )
  }
   
export default Book;  