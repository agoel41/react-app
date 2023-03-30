
//function ProfileCard(props) {
function ProfileCard({title, handle}) {

    // const title = props.title;
    // const handle = props.handle;

    // Defining this line is similar to above two lines.
    // This is called destructuring feature.
    // const { title, handle } = props;

    return (
        <div>
            <div> Title is {title} </div>
            <div> Handle is {handle} </div>
        </div>
    );
}

export default ProfileCard;