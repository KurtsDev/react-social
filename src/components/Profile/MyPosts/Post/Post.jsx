import classes from './Post.module.css'

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="http://archilab.online/images/1/123.jpg"/>
            post1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;