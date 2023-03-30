
//function ProfileCard(props) {
function ProfileCard({title, handle, image, description}) {

    // const title = props.title;
    // const handle = props.handle;

    // Defining this line is similar to above two lines.
    // This is called destructuring feature.
    // const { title, handle } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <figure className='image is-48x48'>
                    <img src={image} alt='pda logo' />
                </figure>
            </div>
            <div className='card-content'>
                <div className='media-content'>
                    <p className='title is-4'> Title is {title} </p>
                    <p className='subtitle is-6'> Handle is {handle} </p>
                </div>
                <div className='content'>{description}</div>
            </div>           
        </div>
    );
}

export default ProfileCard;