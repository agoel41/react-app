
//function ProfileCard(props) {
function ProfileCard({title, handle, image}) {

    // const title = props.title;
    // const handle = props.handle;

    // Defining this line is similar to above two lines.
    // This is called destructuring feature.
    // const { title, handle } = props;

    return (
        <div className='card'>
            <img src={image} alt='pda logo' className='card-image' />
            <div className='card-content'> Title is {title} </div>
            <div className='card-content'> Handle is {handle} </div>
        </div>
    );
}

export default ProfileCard;